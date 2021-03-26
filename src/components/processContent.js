const countAllMatches = require('./processing-content/countAllMatches.js');
const calculateConfidenceScore = require('./processing-content/calculateConfidenceScore.js');

module.exports = (data) => {
    const fileInfo = {};
    const languageArr = require('../language-config/languageObject.js');

    data.languageArr = countAllMatches(data, languageArr);

    fileInfo.language = data.languageArr.reduce((acc, val) => acc.count > val.count ? acc : val).name;

    // "pos" gives us the position in the language array that has the most matches
    data.pos = data.languageArr.findIndex(elem => elem.name === fileInfo.language);

    // Determine the encoding
    fileInfo.encoding = data.utf8 ? "UTF-8" : data.languageArr[data.pos].encoding;

    const calculations = calculateConfidenceScore(data, fileInfo);

    if (data.testFilePath) {
        return calculations;
    }

    fileInfo.confidence = calculations;

    // Edge case, when no matches were found
    if (!data.languageArr[data.pos].count) {
        fileInfo.language = null;
        fileInfo.encoding = data.utf8 ? "UTF-8" : null;
        fileInfo.confidence = data.utf8 ? 1 : null;
    }

    return fileInfo;
};