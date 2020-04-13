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
let mainImageCorners=[];
let mainImageDescriptors=[];

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
    return matches;
    // const topN=10;
    // matches.sort((a,b)=>b.confidence-a.confidence);
    // matches=matches.slice(0,topN);
    // let sum=0;
    // for (let x of matches)
    //     sum+=x.confidence;
    // return sum/matches.length;
}

function matchOnMain(feature,threshold){
    let matches = tracking.Brief.reciprocalMatch(mainImageCorners,mainImageDescriptors,
        new Array(feature.length*(tracking.Brief.N/64)), feature);
    if (threshold !== undefined)
        matches = matches.filter(x => x.confidence >= threshold);
    return matches.map(x=>x.keypoint1);
}

onmessage=function(e){
    debugger;
    const op=e.data[0];
    let reply=[op];
    if (op===Strings.setRandomWindowOffsets){
        const windowOffset=e.data[1];
        tracking.Brief.setRandomWindowOffsets(windowOffset);
    }else if (op===Strings.setMainImageFeatures){
        mainImageCorners=Int32Array.from(e.data[1]);
        mainImageDescriptors=Int32Array.from(e.data[2]);
    }else if (op===Strings.matchSubImageData){
        const subImageId=e.data[1];
        const subImageData=e.data[2];
        const subImageFeatures=extractFeature(subImageData);
        const matches=matchOnMain(subImageFeatures,0.8);
        reply.push(subImageId);
        reply.push(matches);
        reply.push(subImageFeatures);
    }else if (op===Strings.matchSubImageFeatures){
        const subImageId=e.data[1];
        const subImageFeatures=Int32Array.from(e.data[2]);
        const matches=matchOnMain(subImageFeatures,0.8);
        reply.push(subImageId);
        reply.push(matches);
    }else if (op===Strings.matchSubImageFeaturesBatch){
        const batchResult=[];
        for (let x of e.data[1]){
            const subImageId=x[1];
            const subImageFeatures=x[2];
            const matches=matchOnMain(subImageFeatures,0.8);
            batchResult.push([subImageId,matches])
        }
        reply.push(batchResult);
    }
    postMessage(reply);
};
