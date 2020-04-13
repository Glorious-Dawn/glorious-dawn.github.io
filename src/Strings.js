export default {
    setRandomWindowOffsets:'$setRandomWindowOffsets',
    setMainImageFeatures:'$setMainImageFeatures',
    matchSubImageData:'$matchSubImageData',
    matchSubImageFeatures:'$matchSubImageFeatures',
    //TODO: optimize performance by batch processing to reduce messages, MatchWorker done.
    matchSubImageFeaturesBatch:'$matchSubImageFeaturesBatch'
};