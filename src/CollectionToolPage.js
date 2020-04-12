import PageFrame from "./PageFrame";
import React, {useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {useEventListener, useInput} from "./hooks";
import GeneralTable from "./component/GeneralTable";

// eslint-disable-next-line import/no-webpack-loader-syntax
import MatchWorker from 'worker-loader!./cv/MatchWorker'
import {useMutableSortedRows} from "./hook/MutableSortedRows";
import Button from "@material-ui/core/Button";
import tracking from "./cv/tracking";

function handleDropImages(e, imageCallBack) {
    e.preventDefault();
    for (let imageFile of e.dataTransfer.files) {
        if (!imageFile.type.match(/image.*/)) {
            console.log("The dropped file is not an image: ", imageFile.type);
            return;
        }
        //call-back hell
        const reader = new FileReader();
        reader.onload = e => {
            let image = new Image();
            image.onload = () => {
                imageCallBack(image);
            };
            image.id = imageFile.name.split('.')[0];
            image.src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    }
}

function loadImageDataOnCanvas(image, canvas, x = 0, y = 0) {
    const context = canvas.getContext('2d');
    let width = image.width;
    let height = image.height;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, x, y, width, height);
    return context.getImageData(x, y, width, height);
}

function drawPoints(canvasContext, points) {
    for (var i = 0; i < points.length; i++) {
        var color = '#FF0000';// + Math.floor(Math.random()*16777215).toString(16);
        const context = canvasContext;
        context.fillStyle = color;
        context.strokeStyle = color;
        context.fillRect(points[i][0], points[i][1], 20, 20);
    }
}

export function CollectionToolPage() {
    const {rows: matchedItems, setRows: setMatchedItems, upsert: upsertMatchedItems, remove: removeMatchedItems} =
        useMutableSortedRows([], (a, b) => b[1] - a[1]);
    const mainCanvasRef = useRef(null);
    const subCanvasRef = useRef(null);
    const mainImageDataRef = useRef(null);
    const workersRef = useRef([]);
    const nextWorkerRef = useRef(0);

    const createWorkers = useEffect(() => {
        for (let i = 0; i < 8; i++) {
            let worker = new MatchWorker();
            worker.onmessage = function (event) {
                const matches = event.data[1];
                console.log("worker " + i + ": Image " + event.data[0] + ' matches=' + matches.length);
                drawPoints(mainCanvasRef.current.getContext('2d'), matches.map(x => x.keypoint2));
                //Add to table
                const item=[event.data[0],event.data[1].length];
                item.push(
                    <Button variant="contained" color="secondary"
                            onClick={e => removeMatchedItems(item)}>Del</Button>
                );
                upsertMatchedItems(item);
            };
            workersRef.current.push(worker);
        }
        return ()=>{
            for (let worker of workersRef.current)
                worker.terminate();
        };
    }, []);

    const mainDropCallback = function (image) {
        mainImageDataRef.current = loadImageDataOnCanvas(image, mainCanvasRef.current);
    };

    const subDropCallback = function (image) {
        // let matches=matchImageDataInGrayscale(subImageData,mainImageData,0.8);
        // drawMatches(matches);
        const subImageData = loadImageDataOnCanvas(image, subCanvasRef.current);
        workersRef.current[nextWorkerRef.current].postMessage([image.id,subImageData,mainImageDataRef.current])
        nextWorkerRef.current=(nextWorkerRef.current+1)%8;
        // const matches=matchImageDataInGrayscale(subImageData,mainImageDataRef.current,0.8);
        // drawPoints(mainCanvasRef.current.getContext('2d'),matches.map(x=>x.keypoint2));
    };

    return (
        <PageFrame title="Collection Tool">
            <Grid container spacing={3}>
                <Grid item xs={12} md={9} lg={9}>
                    <Paper onDragOver={e => e.preventDefault()} onDrop={e => handleDropImages(e, mainDropCallback)}>
                        <canvas ref={mainCanvasRef}/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Paper onDragOver={e => e.preventDefault()} onDrop={e => handleDropImages(e, subDropCallback)}>
                    <canvas ref={subCanvasRef}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <GeneralTable headers={['Name','Matches','Remove']} items={matchedItems}/>
            </Grid>
        </PageFrame>
    );
}
