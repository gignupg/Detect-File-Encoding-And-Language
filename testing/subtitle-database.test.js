const languageEncoding = require("../src/index-node.js");
const fs = require("fs");

// Make sure all files that package.json requires are present
// Checking for CLI, Node.js and Browser/UNPKG
checkLocation("bin", "cli.js");
checkLocation("src", "index-node.js");
checkLocation("umd", "language-encoding.min.js");

// Test all files in the 'language folders' dataset
const folderPath = "/home/gignu/Documents/Subtitle Database/Language Folders/";
const testFiles = getFiles(folderPath);

testFiles.forEach((file) => {
  languageEncoding(file)
    .then((fileInfo) => {
      const testFileArray = file.split("/");
      const expectedLanguage = testFileArray[testFileArray.length - 2].toLowerCase().replace(" ", "-");

      if (fileInfo.language !== expectedLanguage)
        testFailed("language");

      if (fileInfo.confidence.encoding < 0.95)
        testFailed("confidence");

      function testFailed(issue) {
        console.error("Test case failed:");
        switch (issue) {
          case "language":
            console.info("Expected language:", expectedLanguage);
            console.info("Detected language:", fileInfo.language);
          case "confidence":
            console.info("Confidence score too low!");
            console.info("fileInfo.confidence.encoding:", fileInfo.confidence.encoding);
        }
        console.info(fileInfo);
        console.info("file:", file);
        process.exit(1);
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
  const dir = fs.readdirSync("/home/gignu/GitHub/Detect-File-Encoding-and-Language/" + folder);
  const fileFound = dir.some((fileName) => fileName === file);
  if (!fileFound) {
    console.error(`Error: Expected ${file} to be located here: /home/gignu/GitHub/Detect-File-Encoding-and-Language/${folder}`);
    process.exit(1);
  }
}
