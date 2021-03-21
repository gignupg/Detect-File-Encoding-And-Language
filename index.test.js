const languageEncoding = require("./index.js");
const fs = require('fs');

const folderPath = "/home/gignu/Documents/Subtitle Database/Language Folders/";
// const fileName = "Harry.Potter.and.the.Sorcerers.Stone.2001.1080p.720p.BluRay.x264. YTS.MX-Farsipersian.srt";

// languageEncoding(folderPath + fileName, true)
//     .then(fileInfo => {
//         console.log(fileInfo);
//     })
//     .catch(error => {
//         console.log(error);
//     });;


const testFiles = getFiles(folderPath);

testFiles.forEach((file) => {
    languageEncoding(file, true)
        .then(fileInfo => {
            if (fileInfo.ratio <= 0.8) {
                console.log(fileInfo);
                throw new Error("Language ratio too low! Most likely a regex problem!");
            }
        })
        .catch(error => { throw new Error(error); });
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