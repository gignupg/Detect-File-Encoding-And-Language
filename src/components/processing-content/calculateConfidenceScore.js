module.exports = (data, fileInfo) => {
    const charRegex = new RegExp(/\d|\n|\s|\-|\.|\,|\:|\;|\?|\!|\<|\>|\[|\]|\{|\}|\&|\=|\|/, "g");
    const totalCharacters = data.content.replace(charRegex, "").length;
    const langArr = data.languageArr;
    const pos = data.pos;
    const testFilePath = data.testFilePath;

    const secondLanguage = langArr.reduce((acc, val) => {
        if (acc.name === fileInfo.language) return val;
        if (val.name === fileInfo.language) return acc;

        return acc.count >= val.count ? acc : val;
    });

    const languageRatio = langArr[pos].count / (secondLanguage.count + langArr[pos].count);
    const characterWordRatio = langArr[pos].count / totalCharacters;

    let lowerLimit = null;
    let upperLimit = null;
    const multiplier = 0.8;

    if (data.utf8) {
        lowerLimit = langArr[pos].utfFrequency ? langArr[pos].utfFrequency.low * multiplier : null;
        upperLimit = langArr[pos].utfFrequency ? (langArr[pos].utfFrequency.low + langArr[pos].utfFrequency.high) / 2 : null;

    } else {
        lowerLimit = langArr[pos].isoFrequency ? langArr[pos].isoFrequency.low * multiplier : null;
        upperLimit = langArr[pos].isoFrequency ? (langArr[pos].isoFrequency.low + langArr[pos].isoFrequency.high) / 2 : null;
    }

    let confidenceScore;

    if (!lowerLimit || !upperLimit) {
        confidenceScore = null;

    } else if (characterWordRatio >= upperLimit) {
        confidenceScore = 1;

    } else if (characterWordRatio > lowerLimit) {
        const range = upperLimit - lowerLimit;
        const surplus = characterWordRatio - lowerLimit;
        const confidenceRaisePercentage = surplus / range;
        const confidenceRaise = (1 - languageRatio) * confidenceRaisePercentage;
        confidenceScore = Number((languageRatio + confidenceRaise).toFixed(2));

    } else {
        confidenceScore = Number((languageRatio * (characterWordRatio / lowerLimit)).toFixed(2));
    }

    // If the test script is running
    if (testFilePath) {
        return {
            name: testFilePath.substr(testFilePath.lastIndexOf('/') + 1),
            path: testFilePath,
            language: fileInfo.language,
            utf8: data.utf8,
            confidence: confidenceScore,
            ratio: Number(languageRatio.toFixed(2)),
            count: langArr[pos].count,
            totalCharacters: totalCharacters,
            characterWordRatio: characterWordRatio.toFixed(6),
            secondLanguage: {
                name: secondLanguage.name,
                count: secondLanguage.count
            }
        };
    }

    return confidenceScore;
};