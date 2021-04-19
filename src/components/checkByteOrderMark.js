const byteOrderMarks = require("../config/byteOrderMarkObject.js");

module.exports = (uInt8Start) => {
  for (const element of byteOrderMarks) {
    if (element.regex.test(uInt8Start)) return element.encoding;
  }

  return null;
};
