module.exports = (file) => {
    return new Promise((resolve, reject) => {
        const fileInfo = {};
        const language = require('./languageObject.js');
        language.forEach(elem => elem.count = 0);

        const utfReader = new FileReader();

        utfReader.onload = () => {
            const content = utfReader.result;

            let utf8 = true;

            for (let b = 0; b < content.length; b++) {
                // If � is encountered it's definitely not utf8!
                if (content[b] === "�") {
                    utf8 = false;
                    break;
                }
            }

            if (utf8) {
                // Counting how many matches we can find for each language
                language.forEach(lang => {
                    const matches = content.match(lang.utfRegex);

                    if (matches) {
                        lang.count = matches.length;
                    }
                });

                console.log(language);

                fileInfo.language = language.reduce((acc, val) => acc.count > val.count ? acc : val).name;

                console.log(fileInfo.language);


                // fileInfo.confidence = calculateConfidence();
                // fileInfo.encoding = "UTF-8";

                // resolve(fileInfo);

            } else {
                const isoReader = new FileReader();

                isoReader.onload = () => {
                    fileInfo.language = Object.keys(language).reduce((a, b) => language[a] > language[b] ? a : b);
                    fileInfo.confidence = calculateConfidence();
                    fileInfo.encoding = detectEncoding(fileInfo.language);

                    resolve(fileInfo);
                };

                isoReader.onerror = reject;
                isoReader.readAsText(file, "ISO-8859-1");
            }
        };

        utfReader.onerror = reject;
        utfReader.readAsText(file, "UTF-8");

        function calculateConfidence() {
            const secondLanguage = Object.keys(language).reduce((a, b) => {
                if (b === fileInfo.language) b = a;
                return language[a] >= language[b] ? a : b;
            }, 0);

            return Number((language[fileInfo.language] / (language[secondLanguage] + language[fileInfo.language])).toFixed(2));
        };

        function detectEncoding(detectedLang) {
            if (language[detectedLang] > 0) {
                switch (detectedLang) {
                    case "polish":
                    case "czech":
                    case "hungarian":
                    case "romanian":
                    case "slovak":
                    case "slovenian":
                    case "albanian":
                        return "CP1250";
                    case "russian":
                    case "ukrainian":
                    case "bulgarian":
                        return "CP1251";
                    case "english":
                    case "french":
                    case "portuguese":
                    case "spanish":
                    case "german":
                    case "italian":
                    case "danish":
                    case "norwegian":
                    case "swedish":
                    case "dutch":
                    case "finnish":
                    case "serbo-croatian":
                    case "estonian":
                    case "icelandic":
                    case "indonesian":
                        return "CP1252";
                    case "greek":
                        return "CP1253";
                    case "turkish":
                        return "CP1254";
                    case "hebrew":
                        return "CP1255";
                    case "arabic":
                        return "CP1256";
                    case "chinese-simplified":
                        return "GB18030";
                    case "chinese-traditional":
                        return "BIG5";
                    case "japanese":
                        return "Shift-JIS";
                    case "korean":
                        return "EUC-KR";
                    case "thai":
                        return "TIS-620";
                }
            }
        }
    });
}