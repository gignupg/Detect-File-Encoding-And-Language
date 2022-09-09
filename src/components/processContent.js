const countAllMatches = require("./processing-content/countAllMatches.js");
const calculateConfidenceScore = require("./processing-content/calculateConfidenceScore.js");
const byteOrderMarkObject = require("../config/byteOrderMarkObject.js");

module.exports = (data, fileInfo) => {
  data.languageArr = countAllMatches(data, fileInfo.encoding);

  fileInfo.language = data.languageArr.reduce((acc, val) =>
    acc.count > val.count ? acc : val
  ).name;

  // "pos" gives us the position in the language array that has the most matches
  data.pos = data.languageArr.findIndex(
    (elem) => elem.name === fileInfo.language
  );

  // Determine the encoding
  if (!fileInfo.encoding) {
    fileInfo.encoding = data.languageArr[data.pos].encoding;
  }

  const calculations = calculateConfidenceScore(data, fileInfo);

  if (fileInfo.confidence.encoding) {
    fileInfo.confidence.language = calculations;
  } else {
    fileInfo.confidence.encoding = calculations;
    fileInfo.confidence.language = calculations;
  }

  // Edge case, when no matches were found
  if (!data.languageArr[data.pos].count) {
    fileInfo.language = null;
    fileInfo.confidence.language = null;

    if (!byteOrderMarkObject.some(obj => obj.encoding === fileInfo.encoding)) {
      fileInfo.encoding = null;
      fileInfo.confidence.encoding = null;
    }
  }

  return fileInfo;
};
