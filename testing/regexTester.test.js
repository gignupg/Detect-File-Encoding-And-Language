const languageEncoding = require("../src/index-node.js");

const path = process.argv[2];

const tooManyArguments = process.argv[3];

if (tooManyArguments) console.log('Error! Too many arguments passed in. Only one argument can be passed in. If your path or file name contain spaces, try to surround the whole file path with quotes!');

languageEncoding(path, true)
    .then(fileInfo => {
        console.log(fileInfo);
    })
    .catch(error => {
        console.log(error);
    });;