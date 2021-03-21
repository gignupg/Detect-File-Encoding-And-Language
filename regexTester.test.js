const languageEncoding = require("./index.js");

console.log("testing regex");

const path = process.argv[2];

console.log("path", path);

languageEncoding(path, true)
    .then(fileInfo => {
        console.log(fileInfo);
    })
    .catch(error => {
        console.log(error);
    });;