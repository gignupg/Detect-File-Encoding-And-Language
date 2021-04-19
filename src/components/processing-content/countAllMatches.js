const languageArr = require("../../config/languageObject.js");

module.exports = (data, encoding) => {
  const newLanguageArr = [];

  // Cloning the language array and making sure that "count" has no reference to "languageArr"!
  languageArr.forEach((obj) => {
    const updatedLangObj = {};
    Object.keys(obj).forEach((key) => {
      if (key !== "count") {
        updatedLangObj[key] = obj[key];
      } else {
        updatedLangObj.count = 0;
      }
    });
    newLanguageArr.push(updatedLangObj);
  });

  const regex = encoding ? "utfRegex" : "isoRegex";

  // Populating the count property of the language array
  newLanguageArr.forEach((lang) => {
    if (lang[regex]) {
      const matches = data.content.match(lang[regex]);

      if (matches) lang.count = matches.length;
    }
  });

  return newLanguageArr;
};
