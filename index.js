module.exports = (file) => {
    return new Promise((resolve, reject) => {
        const fileInfo = {};
        const language = require('./languageObject.js');
        let utf8 = true;

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

        function findMatches(reader, regex) {
            language.forEach(lang => {
                const matches = reader.match(lang[regex]);

                if (matches) lang.count = matches.length;
            });
        }

        function sendResponse() {
            fileInfo.language = language.reduce((acc, val) => acc.count > val.count ? acc : val).name;

            // Determine the encoding
            if (utf8) {
                fileInfo.encoding = "UTF-8";

            } else {
                const pos = language.findIndex(elem => elem.name === fileInfo.language);
                fileInfo.encoding = language[pos].isoEncoding;
            }

            // fileInfo.confidence = calculateConfidence();

            // Temporary console log
            const testPos = language.findIndex(elem => elem.name === fileInfo.language);
            console.log(fileInfo.language, language[testPos].count);

            resolve(fileInfo);
        }

        function calculateConfidence() {
            const secondLanguage = Object.keys(language).reduce((a, b) => {
                if (b === fileInfo.language) b = a;
                return language[a] >= language[b] ? a : b;
            }, 0);

            return Number((language[fileInfo.language] / (language[secondLanguage] + language[fileInfo.language])).toFixed(2));
        };
    });
}