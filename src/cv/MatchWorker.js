import tracking from './tracking';

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

onmessage=function(e){
    const matches=matchImageDataInGrayscale(e.data[1],e.data[2],0.8);
    postMessage([e.data[0],matches]);
};