module.exports = (file) => {
    return new Promise((resolve, reject) => {
        const fileInfo = {};
        const language = require('./languageObject.js');
        const charRegex = new RegExp(/\d|\n|\s|\-|\.|\,|\:|\;|\?|\!|\<|\>|\[|\]|\{|\}|\&|\=|\|/, "g");
        let totalCharacters = null;
        let utf8 = true;
        let pos = null;

        // Making sure to reset the count
        language.forEach(elem => elem.count = 0);

        const utfReader = new FileReader();

        utfReader.onload = () => {
            const utfContent = utfReader.result;

            for (let b = 0; b < utfContent.length; b++) {
                // If � is encountered it's definitely not utf8!
                if (utfContent[b] === "�") {
                    utf8 = false;
                    break;
                }
            }

            if (utf8) {
                // Counting how many matches we can find for each language
                findMatches(utfContent, "utfRegex");

                sendResponse();

            } else {
                const isoReader = new FileReader();

                isoReader.onload = () => {
                    const isoContent = isoReader.result;
                    // Counting how many matches we can find for each language
                    findMatches(isoContent, "isoRegex");

                    sendResponse();
                };

                isoReader.onerror = reject;
                isoReader.readAsText(file, "ISO-8859-1");
            }
        };

        utfReader.onerror = reject;
        utfReader.readAsText(file, "UTF-8");

        function findMatches(content, regex) {
            language.forEach(lang => {
                const matches = content.match(lang[regex]);

                if (matches) lang.count = matches.length;
            });

            totalCharacters = content.replace(charRegex, "").length;
        }

        function sendResponse() {
            fileInfo.language = language.reduce((acc, val) => acc.count > val.count ? acc : val).name;

            // "pos" gives us the position in the language array that has the most matches
            pos = language.findIndex(elem => elem.name === fileInfo.language);

            // Determine the encoding
            fileInfo.encoding = utf8 ? "UTF-8" : language[pos].encoding;

            fileInfo.confidence = calculateConfidenceScore();

            if (!language[pos].count) {
                fileInfo.language = null;
                fileInfo.encoding = utf8 ? "UTF-8" : null;
                fileInfo.confidence = utf8 ? 1 : null;
            }

            resolve(fileInfo);
        }

        function calculateConfidenceScore() {
            const secondLanguage = language.reduce((acc, val) => {
                if (acc.name === fileInfo.language) return val;
                if (val.name === fileInfo.language) return acc;
                return acc.count >= val.count ? acc : val;
            });

            const languageRatio = language[pos].count / (secondLanguage.count + language[pos].count);
            const characterWordRatio = language[pos].count / totalCharacters;
            console.log(languageRatio);
            console.log(characterWordRatio.toFixed(6));
            console.log(totalCharacters);
            console.log(language[pos].count);

            let lowerLimit = null;
            let upperLimit = null;
            const multiplier = 0.8;

            if (utf8) {
                lowerLimit = language[pos].utfFrequency.low * multiplier;
                upperLimit = (language[pos].utfFrequency.low + language[pos].utfFrequency.high) / 2;

            } else {
                lowerLimit = language[pos].isoFrequency.low * multiplier;
                upperLimit = (language[pos].isoFrequency.low + language[pos].isoFrequency.high) / 2;
            }

            if (characterWordRatio >= upperLimit) {
                return 1;

            } else if (characterWordRatio > lowerLimit) {
                const range = upperLimit - lowerLimit;
                const surplus = characterWordRatio - lowerLimit;
                const confidenceRaisePercentage = surplus / range;
                const confidenceRaise = (1 - languageRatio) * confidenceRaisePercentage;
                return Number((languageRatio + confidenceRaise).toFixed(2));

            } else {
                return Number((languageRatio * (characterWordRatio / lowerLimit)).toFixed(2));
            }
        };
    });
}