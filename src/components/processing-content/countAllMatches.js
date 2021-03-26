module.exports = (data, languageArr) => {
    const newLanguageArr = [];

    // Cloning the language array and making sure that "count" has no reference to "languageArr"!
    languageArr.forEach((obj) => {
        const updatedLangObj = {};
        Object.keys(obj).forEach(key => {
            if (key !== "count") {
                updatedLangObj[key] = obj[key];
            } else {
                updatedLangObj.count = 0;
            }
        });
        newLanguageArr.push(updatedLangObj);
    });

    const regex = data.utf8 ? "utfRegex" : "isoRegex";

    // Populate the count property of our language array!
    newLanguageArr.forEach(lang => {
        if (lang[regex]) {
            const matches = data.content.match(lang[regex]);

            if (matches) lang.count = matches.length;
        }
    });

    return newLanguageArr;
}