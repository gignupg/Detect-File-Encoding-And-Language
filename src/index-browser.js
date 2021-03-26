const checkUTF = require('./components/checkUTF.js');
const processContent = require('./components/processContent.js');

module.exports = (file, test) => {
    return new Promise((resolve, reject) => {
        const data = {};
        const utfReader = new FileReader();

        utfReader.onerror = (err) => {
            reject(err);
        };

        utfReader.onload = () => {
            const utfContent = utfReader.result;

            data.utf8 = checkUTF(utfContent);

            if (data.utf8) {
                data.content = utfContent;
                resolve(processContent(data));

            } else {
                const isoReader = new FileReader();

                isoReader.onload = () => {
                    data.content = isoReader.result;
                    resolve(processContent(data));
                };

                isoReader.readAsText(file, "ISO-8859-1");
            }
        };
        utfReader.readAsText(file, "UTF-8");
    });
};