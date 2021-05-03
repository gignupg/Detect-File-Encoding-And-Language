#!/usr/bin/env node

const languageEncoding = require("../src/index-node.js");

const path = process.argv[2];

const tooManyArguments = process.argv[3];

if (tooManyArguments)
  console.log(
    "Error! Too many arguments passed in. Only one argument can be passed in. If your path or file name contain spaces, try to surround the whole file path with quotes!"
  );

languageEncoding(path)
  .then((fileInfo) => {
    console.log(JSON.stringify(fileInfo, null, 4));
  })
  .catch((error) => {
    console.log(error);
  });
