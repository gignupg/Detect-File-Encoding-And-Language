// Looks at the "scripts" section in package.json to run this code!
import languageEncoding from "detect-file-encoding-and-language";
const pathToFile = "/home/gignu/Documents/Subtitle Database/Samples for each Format/polish-cp-1250-sample-subtitles.srt";
languageEncoding(pathToFile).then((fileInfo) => console.log(fileInfo));
