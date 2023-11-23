module.exports = (content) => {
    for (let b = 0; b < content.length; b++) {
        // If ? is encountered it's definitely not utf8!
        if (content[b] === "�") {
            return false;
        }
    }
    return true;
}