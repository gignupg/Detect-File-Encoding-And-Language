const fs = require("fs");
const checkUTF = require("./components/checkUTF.js");
const processContent = require("./components/processContent.js");
const checkByteOrderMark = require("./components/checkByteOrderMark.js");

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    const fileInfo = {
      encoding: null,
      language: null,
      confidence: {
        encoding: null,
        language: null,
      },
    };
    const data = {};

    // Reading the first four bytes and checking if they coincide with one of the predefined byte order marks.
    const readStream = fs.createReadStream(file, { start: 0, end: 3 });

    readStream.on("data", function (buffer) {
      const uInt8Array = new Uint8Array(buffer);
      const uInt8String = uInt8Array.join(" ");
      const byteOrderMark = checkByteOrderMark(uInt8String);

      if (byteOrderMark) {
        fileInfo.encoding = byteOrderMark;
        fileInfo.confidence.encoding = 1;

        // Node.js only supports UTF-8 and UTF-16LE. If one of them has been detected, we know how to read the content
        if (fileInfo.encoding === "UTF-8" || fileInfo.encoding === "UTF-16LE") {
          fs.readFile(file, fileInfo.encoding, (err, utfContent) => {
            if (err) reject(err);
            data.content = utfContent;
            resolve(processContent(data, fileInfo));
          });

          // If the encoding in the byteOrderMarkObject is not UTF-8 or UTF-16LE we return the encoding without the language
        } else {
          if (file.encoding === "GB-18030") {
            fileInfo.language = "chinese-simplified";
            fileInfo.confidence.language = 1;
          }
          resolve(fileInfo);
        }
      } else {
        fs.readFile(file, "UTF-8", (err, utfContent) => {
          if (err) reject(err);

          const utf8 = checkUTF(utfContent);

          if (utf8) {
            fileInfo.encoding = "UTF-8";
            fileInfo.confidence.encoding = 1;
          }

          if (utf8) {
            data.content = utfContent;
            resolve(processContent(data, fileInfo));
          } else {
            fs.readFile(file, "latin1", (err, isoContent) => {
              if (err) reject(err);

              data.content = isoContent;
              resolve(processContent(data, fileInfo));
            });
          }
        });
      }
    });
    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on("error", function (err) {
      reject(err);
    });
  });
};
