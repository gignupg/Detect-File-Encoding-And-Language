module.exports = (file, test) => {
    return new Promise((resolve, reject) => {
        const fileInfo = {};
        const languageArr = require('./languageObject.js');
        const charRegex = new RegExp(/\d|\n|\s|\-|\.|\,|\:|\;|\?|\!|\<|\>|\[|\]|\{|\}|\&|\=|\|/, "g");
        let totalCharacters = null;
        let utf8 = true;
        let pos = null;

        const language = [];

        // Cloning the language array and making sure that "count" has no reference to "languageArr"!
        languageArr.forEach((obj) => {
            const newObject = {};
            Object.keys(obj).forEach(key => {
                if (key !== "count") {
                    newObject[key] = obj[key];
                } else {
                    newObject.count = 0;
                }
            });
            language.push(newObject);
        });

        if (typeof file === "string") {
            // The request comes from a Nodejs environment
            const fs = require('fs');

            fs.readFile(file, "UTF-8", (err, utfContent) => {   //    // For Bengali either: "utf16le" or "ucs2"
                utf8 = checkUTF(utfContent);

                if (utf8) {
                    processContent(utfContent);

                } else {
                    fs.readFile(file, "latin1", (err, isoContent) => {
                        processContent(isoContent);
                    });
                }
            });

        } else if (typeof file === "object") {
            // The request comes from the browser
            const utfReader = new FileReader();

            utfReader.onload = () => {
                const utfContent = utfReader.result;

                utf8 = checkUTF(utfContent);

                if (utf8) {
                    processContent(utfContent);

                } else {
                    const isoReader = new FileReader();

                    isoReader.onload = () => {
                        const isoContent = isoReader.result;
                        processContent(isoContent);
                    };

                    isoReader.readAsText(file, "ISO-8859-1");
                }
            };

            utfReader.readAsText(file, "UTF-8");

        } else {
            reject("Unrecognized input! Please make sure your input is valid!");
        }

        function checkUTF(content) {
            for (let b = 0; b < content.length; b++) {
                // If � is encountered it's definitely not utf8!
                if (content[b] === "�") {
                    return false;
                }
            }
            return true;
        }

        function processContent(content) {
            totalCharacters = content.replace(charRegex, "").length;

            fileInfo.language = determineLanguage(content);

            // "pos" gives us the position in the language array that has the most matches
            pos = language.findIndex(elem => elem.name === fileInfo.language);

            // Determine the encoding
            fileInfo.encoding = utf8 ? "UTF-8" : language[pos].encoding;

            fileInfo.confidence = calculateConfidenceScore();

            // If the test script is running
            if (typeof file === "string" && test) return null;

            // Edge case, when no matches were found
            if (!language[pos].count) {
                fileInfo.language = null;
                fileInfo.encoding = utf8 ? "UTF-8" : null;
                fileInfo.confidence = utf8 ? 1 : null;
            }

            resolve(fileInfo);
        }

        function determineLanguage(content) {
            const regex = utf8 ? "utfRegex" : "isoRegex";

            // Populate the count property of our language array!
            language.forEach(lang => {
                if (lang[regex]) {
                    const matches = content.match(lang[regex]);

                    if (matches) lang.count = matches.length;
                }
            });

            return language.reduce((acc, val) => acc.count > val.count ? acc : val).name;
        }

        function calculateConfidenceScore() {
            const secondLanguage = language.reduce((acc, val) => {
                if (acc.name === fileInfo.language) return val;
                if (val.name === fileInfo.language) return acc;

                return acc.count >= val.count ? acc : val;
            });

            const languageRatio = language[pos].count / (secondLanguage.count + language[pos].count);
            const characterWordRatio = language[pos].count / totalCharacters;

            let lowerLimit = null;
            let upperLimit = null;
            const multiplier = 0.8;

            if (utf8) {
                lowerLimit = language[pos].utfFrequency ? language[pos].utfFrequency.low * multiplier : null;
                upperLimit = language[pos].utfFrequency ? (language[pos].utfFrequency.low + language[pos].utfFrequency.high) / 2 : null;

            } else {
                lowerLimit = language[pos].isoFrequency ? language[pos].isoFrequency.low * multiplier : null;
                upperLimit = language[pos].isoFrequency ? (language[pos].isoFrequency.low + language[pos].isoFrequency.high) / 2 : null;
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
            if (typeof file === "string" && test) {
                resolve({
                    name: file.substr(file.lastIndexOf('/') + 1),
                    path: file,
                    language: fileInfo.language,
                    encoding: utf8 ? "UTF" : "ISO",
                    confidence: confidenceScore,
                    ratio: Number(languageRatio.toFixed(2)),
                    count: language[pos].count,
                    totalCharacters: totalCharacters,
                    characterWordRatio: characterWordRatio.toFixed(6),
                    secondLanguage: {
                        name: secondLanguage.name,
                        count: secondLanguage.count
                    }
                });

                return null;
            }

            return confidenceScore;
        };
    });
}