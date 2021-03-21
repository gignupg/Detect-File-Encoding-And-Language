const languageEncoding = require("./index.js");
const fs = require('fs');

const folderPath = "/home/gignu/Documents/Subtitle Database/Language Folders/";
const testFiles = getFiles(folderPath);

testFiles.forEach((file) => {
    languageEncoding(file, true)
        .then(fileInfo => {
            if (fileInfo.ratio <= 0.85) {
                console.log("Test case failed:");
                console.log(fileInfo);
                process.exit(1);
            }
        })
        .catch(error => { console.log(error); });
});

// Recursively find all files in a folder and all it's subdirectories
function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}