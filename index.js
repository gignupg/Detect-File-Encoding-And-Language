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
    });
}