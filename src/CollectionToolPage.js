import PageFrame from "./PageFrame";
import React, {useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link"
import GeneralTable from "./component/GeneralTable";

// eslint-disable-next-line import/no-webpack-loader-syntax
import MatchWorker from 'worker-loader!./cv/MatchWorker'
import {useMutableSortedRows} from "./hook/MutableSortedRows";
import Button from "@material-ui/core/Button";

import tracking from './cv/tracking';
import Strings from './Strings'
import {DropzoneArea} from "material-ui-dropzone";

function handleDropFile(file, callBack) {
    if (file.type.match(/image.*/)) {
        //call-back hell
        const reader = new FileReader();
        reader.onload = e => {
            let image = new Image();
            image.onload = () => {
                callBack(image);
            };
            image.id = file.name.split('.')[0];
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }else if (file.type.match("application/json")) {
        const reader = new FileReader();
        reader.onload = e => {
            const data=JSON.parse(e.target.result);
            //console.log(JSON.parse(e.target.result));
            callBack(data);
        };
        reader.readAsText(file);
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
    const numWorkers=8;
    const {rows: matchedItems, upsert: upsertMatchedItems, remove: removeMatchedItems} =
        useMutableSortedRows([], (a, b) => b[1] - a[1]);
    const mainCanvasRef = useRef(null);
    const subCanvasRef = useRef(null);
    const workersRef = useRef([]);
    const nextWorkerRef = useRef(0);
    const savedNamesRef = useRef([]);
    const subFeaturesRef = useRef({});
    const [saved,setSaved] = useState([]);
    // create workers
    useEffect(() => {
        //Fixed RandomWindowOffsets for once and for all
        // const windowOffsets=Array.from(tracking.Brief.generateRandomWindowOffsets());
        // tracking.Brief.setRandomWindowOffsets(windowOffsets);
        for (let i = 0; i < numWorkers; i++) {
            let worker = new MatchWorker();
            worker.onmessage = function (event) {
                if (event.data[0]===Strings.matchSubImageData || event.data[0]===Strings.matchSubImageFeatures){
                    //Add to table
                    const id=event.data[1];
                    const matches=event.data[2];
                    const subFeatures=event.data[3];
                    subFeaturesRef.current[id]=Array.from(subFeatures);
                    const item=[id,matches.length];
                    item.push(
                        <div>
                            <Button variant="contained" color="primary"
                                    onClick={e => drawPoints(mainCanvasRef.current.getContext('2d'),matches)}>Draw</Button>
                            <Button variant="contained" color="secondary"
                                    onClick={e => {
                                        savedNamesRef.current.push(id);
                                        removeMatchedItems(item);
                                    }}>Add</Button>
                        </div>
                    );
                    upsertMatchedItems(item);
                }else{
                    console.log(event.data[0]);
                }
            };
            // worker.postMessage([Strings.setRandomWindowOffsets,windowOffsets]);
            workersRef.current.push(worker);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return ()=>{for (let worker of workersRef.current) worker.terminate();};}, []);

    const subDropCallback = function (result) {
        const subImageData = loadImageDataOnCanvas(result, subCanvasRef.current);
        workersRef.current[nextWorkerRef.current].postMessage([Strings.matchSubImageData, result.id, subImageData]);
        nextWorkerRef.current = (nextWorkerRef.current + 1) % numWorkers;
        // if (result instanceof Image) {
        // }else{
        //     for (let name in result){
        //         if (!result.hasOwnProperty(name)) continue;
        //         workersRef.current[nextWorkerRef.current].postMessage([Strings.matchSubImageFeatures, name, result[name]]);
        //         nextWorkerRef.current = (nextWorkerRef.current + 1) % numWorkers;
        //     }
        // }
    };

    const mainDropCallback = function (image) {
        if (image instanceof Image){
            const imageData = loadImageDataOnCanvas(image, mainCanvasRef.current);
            //Distribute main image features to all workers
            const grayscale = tracking.Image.grayscale(imageData.data, imageData.width, imageData.height);
            const corners = tracking.Fast.findCorners(grayscale, imageData.width, imageData.height);
            const descriptors = tracking.Brief.getDescriptors(grayscale, imageData.width, corners);
            for (let worker of workersRef.current){
                worker.postMessage([Strings.setMainImageFeatures,corners,descriptors]);
            }
        }
    };

    const handleExport = function(e){
        // const matchResult={};
        // for (const x of matchedItems){
        //     matchResult[x[0]]=x[1];
        // }
        // console.log(JSON.stringify(matchResult));
        console.log(JSON.stringify(subFeaturesRef.current));
        // setSaved(savedNamesRef.current.join(' '));
    };

    return (
        <PageFrame title="Collection Tool">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <DropzoneArea dropzoneText="Drop or Click: Main image" filesLimit={2} maxFileSize={Infinity}
                                  showPreviewsInDropzone={false} showAlerts={false}
                                  onDrop={file => handleDropFile(file, mainDropCallback)}/>
                </Grid>
                <Grid item xs={6}>
                    <DropzoneArea dropzoneText="Drop or Click: Sub images or Features JSON" filesLimit={1024} maxFileSize={Infinity}
                                  showPreviewsInDropzone={false} showAlerts={false}
                                  onDrop={file => handleDropFile(file, subDropCallback)}/>
                    <Link href="/data/ssr+040320.json" download>Download SSR+040320.json</Link>
                </Grid>
                <Grid item xs={12}>
                    {/*<Paper onDragOver={e => e.preventDefault()} onDrop={e => handleDropImages(e, subDropCallback)}/>*/}
                    <canvas ref={mainCanvasRef} width={0} height={0}/>
                    <canvas ref={subCanvasRef} hidden/>
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" variant="contained" color="primary" onClick={handleExport}>Export</Button>
                    <TextField variant="filled" value={saved} disabled={true}/>
                    <GeneralTable headers={['Name','Matches','Actions']} items={matchedItems}/>
                </Grid>
            </Grid>
            {/*style={{height:'100%'}}*/}
        </PageFrame>
    );
}
