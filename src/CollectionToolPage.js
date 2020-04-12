// eslint-disable-next-line import/no-webpack-loader-syntax
import tracking from './cv/tracking';
import PageFrame from "./PageFrame";
import React, {useRef} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {useEventListener} from "./hooks";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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

function matchImageDataInGrayscale(imageDataA, imageDataB, threshold) {
    let mainGray = tracking.Image.grayscale(imageDataA.data, imageDataA.width, imageDataA.height);
    let mainCorners = tracking.Fast.findCorners(mainGray, imageDataA.width, imageDataA.height);
    let mainDescriptors = tracking.Brief.getDescriptors(mainGray, imageDataA.width, mainCorners);
    let subGray = tracking.Image.grayscale(imageDataB.data, imageDataB.width, imageDataB.height);
    let subCorners = tracking.Fast.findCorners(subGray, imageDataB.width, imageDataB.height);
    let subDescriptors = tracking.Brief.getDescriptors(subGray, imageDataB.width, subCorners);
    let matches = tracking.Brief.reciprocalMatch(mainCorners, mainDescriptors, subCorners, subDescriptors);
    if (threshold !== undefined)
        matches = matches.filter(x => x.confidence >= threshold);
    return matches
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

// function ImageDrop(imageDataCallback){
//     const canvas = useRef(null);
//     const handleDrop = (e) => {
//         e.preventDefault();
//             const imageFile=e.dataTransfer.files[0];
//             if(!imageFile.type.match(/image.*/)){
//                 console.log("The dropped file is not an image: ", imageFile.type);
//                 return;
//             }
//             //call-back hell
//             const reader = new FileReader();
//             reader.onload = e=> {
//                 let image = new Image();
//                 image.onload=()=>{
//                     const context=canvas.current.getContext('2d');
//                     let width=image.width;
//                     let height=image.height;
//                     canvas.current.width=width;
//                     canvas.current.height=height;
//                     context.drawImage(image,0,0,width,height);
//                     imageDataCallback(context.getImageData(0, 0, width, height),canvas);
//                 };
//                 image.src = e.target.result;
//             };
//             reader.readAsDataURL(imageFile);
//         };
//
//     return(
//       <Paper onDragOver={event => event.preventDefault()} onDrop={handleDrop}>
//           <canvas ref={canvas} />
//       </Paper>
//     );
// }

export function CollectionToolPage() {
    const mainCanvasRef = useRef(null);
    const subCanvasRef = useRef(null);
    const mainImageDataRef = useRef(null);

    const mainDropCallback = function (image) {
        mainImageDataRef.current = loadImageDataOnCanvas(image, mainCanvasRef.current);
    };

    const subDropCallback = function (image) {
        // let matches=matchImageDataInGrayscale(subImageData,mainImageData,0.8);
        // drawMatches(matches);
        const subImageData = loadImageDataOnCanvas(image, subCanvasRef.current);
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
        </PageFrame>
    );
}
