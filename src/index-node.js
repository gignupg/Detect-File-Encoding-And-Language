const checkUTF = require('./components/checkUTF.js');
const processContent = require('./components/processContent.js');

module.exports = (file, test) => {
    return new Promise((resolve) => {
        const data = {};
        const fs = require('fs');
        data.testFilePath = test ? file : null;

        fs.readFile(file, "UTF-8", (err, utfContent) => {
            if (err) reject(err);

            data.utf8 = checkUTF(utfContent);

            if (data.utf8) {
                data.content = utfContent;
                resolve(processContent(data));

            } else {
                fs.readFile(file, "latin1", (err, isoContent) => {
                    if (err) reject(err);

                    data.content = isoContent;
                    resolve(processContent(data));
                });
            }
        });
    });
};