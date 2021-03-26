const checkUTF = require('./components/checkUTF.js');
const processContent = require('./components/processContent.js');

module.exports = (file, test) => {
    return new Promise((resolve, reject) => {
        const input = {};
        const utfReader = new FileReader();

        utfReader.onerror = (err) => {
            reject(err);
        };

        utfReader.onload = () => {
            const utfContent = utfReader.result;

            input.utf8 = checkUTF(utfContent);

            if (utf8) {
                input.content = utfContent;
                resolve(processContent(input));

            } else {
                const isoReader = new FileReader();

                isoReader.onload = () => {
                    input.content = isoReader.result;
                    resolve(processContent(input));
                };

                isoReader.readAsText(file, "ISO-8859-1");
            }
        };
        utfReader.readAsText(file, "UTF-8");
    });
};