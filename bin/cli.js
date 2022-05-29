#!/usr/bin/env node
const languageEncoding = require("../src/index-node.js");

const path = process.argv[2];
const notEnoughArguments = process.argv.length < 3;
const tooManyArguments = process.argv[3];

if (notEnoughArguments) console.error('Error: No argument passed in. Please pass in the file path as an argument! If the path contains spaces, surround it with quotes or use backslashes to escape spaces.');
if (tooManyArguments) console.warn('Warning: Too many arguments passed in. Ignoring all extra arguments. Only one argument (the file path) can be passed in! If the path contains spaces, surround it with quotes or use backslashes to escape spaces.');

languageEncoding(path)
  .then((fileInfo) => console.info(JSON.stringify(fileInfo, null, 4)))
  .catch((error) => console.error(error))