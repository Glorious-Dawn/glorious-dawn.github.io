import tracking from './tracking';
import Strings from "../Strings";

/*
* Training.
* Fixed: targetImageFeatures, windowOffset
* Input: subImages
* Output: top 40 matches
* Goal: Find the best windowOffset.
*
* Utilities: Generate targetImageFeatures from windowOffset and export(to local storage?)
*
* Debug: Descriptors calculated looks the same between extract Feature and matchImageDataInGrayscale
*/

let mainImageFeatures=[];
let subImageFeatures=[];

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

function extractFeature(imageData){
    let grayscale = tracking.Image.grayscale(imageData.data, imageData.width, imageData.height);
    let corners = tracking.Fast.findCorners(grayscale, imageData.width, imageData.height);
    let descriptors = tracking.Brief.getDescriptors(grayscale, imageData.width, corners);
    return descriptors
}

function matchFeatures(featureA,featureB,threshold){
    let matches = tracking.Brief.reciprocalMatch(new Array(featureA.length/8), featureA,
        new Array(featureB.length/8), featureB);
    if (threshold !== undefined)
        matches = matches.filter(x => x.confidence >= threshold);
    return matches.length;
}

onmessage=function(e){
    const op=e.data[0];
    let reply=[op];
    if (op===Strings.setRandomWindowOffsets){
        const windowOffset=e.data[1];
        tracking.Brief.setRandomWindowOffsets(windowOffset);
    }else if (op===Strings.setMainImageFeatures){
        mainImageFeatures=e.data[1];
    }else if (op===Strings.matchSubImageData){
        const subImageId=e.data[1];
        const subImageData=e.data[2];
        subImageFeatures=extractFeature(subImageData);
        const matchesCount=matchFeatures(mainImageFeatures,subImageFeatures,0.8);
        reply.push(subImageId);
        reply.push(matchesCount);
    }
    postMessage(reply);
};
