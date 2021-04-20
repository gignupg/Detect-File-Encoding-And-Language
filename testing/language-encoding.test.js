const languageEncoding = require("../src/index-node.js");
const fs = require("fs");

// Make sure all files that package.json requires are present
// Checking for CLI, Node.js and Browser/UNPKG
checkLocation("bin", "cli.js");
checkLocation("src", "index-node.js");
checkLocation("umd", "language-encoding.min.js");

// Test all files in my 'language folders' dataset
const folderPath = "/home/gignu/Documents/Subtitle Database/Language Folders/";
const testFiles = getFiles(folderPath);

testFiles.forEach((file) => {
  languageEncoding(file)
    .then((fileInfo) => {
      // language = language
      const testFileArray = file.split("/");
      const expectedLanguage = testFileArray[testFileArray.length - 2]
        .toLowerCase()
        .replace(" ", "-");

      if (
        fileInfo.language !== expectedLanguage &&
        expectedLanguage !== "japanese"
      )
        testFailed("language");

      // confidence >= 0.95
      if (
        fileInfo.confidence.encoding < 0.95 &&
        expectedLanguage !== "japanese"
      )
        testFailed("confidence");

      function testFailed(issue) {
        console.log("Test case failed:");

        switch (issue) {
          case "language":
            console.log("Expected language:", expectedLanguage);
            console.log("Detected language:", fileInfo.language);
          case "confidence":
            console.log("Confidence score too low!");
            console.log(
              "fileInfo.confidence.encoding:",
              fileInfo.confidence.encoding
            );
        }

        console.log(fileInfo);
        console.log("file:", file);
        process.exit(1);
      }
    })
    .catch((error) => {
      console.log(error);
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
  const dir = fs.readdirSync(
    "/home/gignu/GitHub/Detect-File-Encoding-and-Language/" + folder
  );
  const fileFound = dir.some((fileName) => fileName === file);
  if (!fileFound) {
    console.log(
      `According to my test file, ${file} is supposed to be located here: /home/gignu/GitHub/Detect-File-Encoding-and-Language/${folder}`
    );
    process.exit(1);
  }
}
