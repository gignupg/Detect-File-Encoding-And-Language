const languageEncoding = require("../../src/index-node.js");
const fs = require("fs");

// Making sure all important files are there
// Checking for CLI, Node.js and Browser/UNPKG
checkLocation("bin", "cli.js");
checkLocation("src", "index-node.js");
checkLocation("umd", "language-encoding.min.js");

// Test all files in the 'language folders' dataset
const folderPath = "/home/gignu/Documents/Subtitle Database/Language Folders/";
const testFiles = getFiles(folderPath);
const minConfidence = 0.95;

testFiles.forEach((file) => {
  languageEncoding(file)
    .then((fileInfo) => {
      const testFileArray = file.split("/");
      const folderNameArr = testFileArray[testFileArray.length - 2].split('_');
      const expectedLanguage = folderNameArr ? folderNameArr[0] : null;
      const expectedEncoding = folderNameArr ? folderNameArr[1] : null;

      if (!expectedLanguage) {
        console.error("Expected language not found in folder name:", file.directoryHandle?.name);
        setError(file, fileInfo);

      } else if (!expectedEncoding) {
        console.error("Expected encoding not found in folder name:", file.directoryHandle?.name);
        setError(file, fileInfo);

      } else if (!fileInfo.confidence.encoding || fileInfo.confidence.encoding < minConfidence) {
        console.error("Encoding Confidence too low:", fileInfo.confidence.encoding);
        setError(file, fileInfo);

      } else if (!fileInfo.confidence.language || fileInfo.confidence.language < minConfidence) {
        console.error("Language Confidence too low:", fileInfo.confidence.language);
        setError(file, fileInfo);

      } else if (fileInfo.language !== expectedLanguage) {
        console.error(`Language mismatch! Expected ${expectedLanguage} but got ${fileInfo.language}`);
        setError(file, fileInfo);

      } else if (fileInfo.encoding !== expectedEncoding) {
        console.error(`Encoding mismatch! Expected ${expectedEncoding} but got ${fileInfo.encoding}`);
        setError(file, fileInfo);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// Recursively find all files in a folder and all it's subdirectories
function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

function checkLocation(folder, file) {
  const dir = fs.readdirSync("/home/gignu/GitHub/Detect-File-Encoding-And-Language/" + folder);
  const fileFound = dir.some((fileName) => fileName === file);
  if (!fileFound) {
    console.error(`Error: Expected ${file} to be located here: /home/gignu/GitHub/Detect-File-Encoding-and-Language/${folder}`);
    process.exit(1);
  }
}

function setError(file, fileInfo) {
  console.info('fileInfo:', fileInfo);
  console.info('file:', file);
  process.exit(1);
}