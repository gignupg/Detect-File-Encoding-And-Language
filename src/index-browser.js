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

    // Check the byte order mark!
    const byteOrderMarkBuffer = new FileReader();

    byteOrderMarkBuffer.onload = () => {
      const uInt8String = new Uint8Array(byteOrderMarkBuffer.result).slice(0, 4).join(" ");
      const byteOrderMark = checkByteOrderMark(uInt8String);

      if (byteOrderMark) {
        fileInfo.encoding = byteOrderMark;
        fileInfo.confidence.encoding = 1;

        const byteOrderMarkReader = new FileReader();

        byteOrderMarkReader.onload = () => {
          data.content = byteOrderMarkReader.result;
          resolve(processContent(data, fileInfo));
        };

        byteOrderMarkReader.onerror = (err) => {
          reject(err);
        };

        byteOrderMarkReader.readAsText(file, fileInfo.encoding);
      } else {
        // Read with UTF-8 first, then with ISO-8859-1
        const utfReader = new FileReader();

        utfReader.onload = () => {
          const utfContent = utfReader.result;

          const utf8 = checkUTF(utfContent);

          if (utf8) {
            fileInfo.encoding = "UTF-8";
            fileInfo.confidence.encoding = 1;
          }

          if (utf8) {
            data.content = utfContent;
            resolve(processContent(data, fileInfo));
          } else {
            const isoReader = new FileReader();

            isoReader.onload = () => {
              data.content = isoReader.result;
              resolve(processContent(data, fileInfo));
            };

            isoReader.readAsText(file, "ISO-8859-1");
          }
        };

        utfReader.onerror = (err) => {
          reject(err);
        };

        utfReader.readAsText(file, "UTF-8");
      }
    };

    byteOrderMarkBuffer.onerror = (err) => {
      reject(err);
    };

    byteOrderMarkBuffer.readAsArrayBuffer(file);
  });
};
