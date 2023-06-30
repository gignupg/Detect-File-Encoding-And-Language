# Detect-File-Encoding-And-Language

![npm](https://img.shields.io/npm/dm/detect-file-encoding-and-language)
![npm](https://img.shields.io/npm/v/detect-file-encoding-and-language)
![npm bundle size](https://img.shields.io/bundlephobia/min/detect-file-encoding-and-language)

[![NPM stats](https://nodei.co/npm/detect-file-encoding-and-language.svg?downloadRank=true&downloads=true)](https://www.npmjs.org/package/detect-file-encoding-and-language)

## Functionality

Determine the encoding and language of text files!

- Detects 40 languages as well as the appropriate encoding
- Available as CLI, in Node.js and in the browser
- Supports .txt, .srt, .sub, .html, .csv, .tsv
- Works best with large inputs
- Completely free, no API key required

For reliable encoding and language detection, use files containing at least 500 words of coherent text. Smaller inputs can work as well but the results might be less accurate and in some cases incorrect.

## Live Demo

Feel free to test the functionality of this NPM package [here](https://detect-file-encoding-and-language-live-demo.netlify.app/). Upload your own files and see if the encoding and language are detected correctly!

## Installation

```
npm install detect-file-encoding-and-language
```

## Usage

### Via CDN

```js
// index.html
<body>
  <input type="file" id="my-input-field" />
  <script src="https://unpkg.com/detect-file-encoding-and-language/umd/language-encoding.min.js"></script>
  <script src="app.js"></script>
</body>

// app.js
document.getElementById("my-input-field").addEventListener("change", (e) => {
  const file = e.target.files[0];
  languageEncoding(file).then((fileInfo) => console.log(fileInfo));
  // Possible result: { language: english, encoding: UTF-8, confidence: { encoding: 1, language: 1 } }
});
```

If you don't want to use a CDN feel free to [download the source code](https://github.com/gignupg/Detect-File-Encoding-and-Language/wiki/Downloading-the-Source-Code)!

### In React

```js
// App.js
import languageEncoding from "detect-file-encoding-and-language";
export default function App() {
  function inputHandler(e) {
    const file = e.target.files[0];
    languageEncoding(file).then((fileInfo) => console.log(fileInfo));
    // Possible result: { language: english, encoding: UTF-8, confidence: { encoding: 1, language: 1 } }
  }
  return <input type="file" onChange={inputHandler} />;
}
```

### In Node
#### File

```js
// server.js
const languageEncoding = require("detect-file-encoding-and-language");
const pathToFile = "/home/username/documents/my-text-file.txt";
languageEncoding(pathToFile).then((fileInfo) => console.log(fileInfo));
// Possible result: { language: japanese, encoding: Shift-JIS, confidence: { encoding: 0.94, language: 0.94 } }
```

#### Buffer

```js
// server.js
const languageEncoding = require("detect-file-encoding-and-language");
const content = Buffer.from("file content");
languageEncoding(content).then((fileInfo) => console.log(fileInfo));
// Possible result: { language: japanese, encoding: Shift-JIS, confidence: { encoding: 0.94, language: 0.94 } }
```

### Via CLI

```bash
# Installation
npm install -g detect-file-encoding-and-language

# Usage
dfeal "/home/username/Documents/subtitle file.srt"
# Possible result: { language: french, encoding: CP1252, confidence: { encoding: 0.99, language: 0.99 } }
```

### Using a buffer (browser)
Check out [this issue page](https://github.com/gignupg/Detect-File-Encoding-And-Language/issues/3#issuecomment-1476074963)! @davuses posted a very simple code snippet there that converts your buffer into a blob which you can then pass into the function instead of a file!

## Supported Languages

- Polish
- Czech
- Hungarian
- Romanian
- Slovak
- Slovenian
- Albanian
- Russian
- Ukrainian
- Bulgarian
- English
- French
- Portuguese
- Spanish
- German
- Italian
- Danish
- Norwegian
- Swedish
- Dutch
- Finnish
- Serbo-Croatian
- Estonian
- Icelandic
- Malay-Indonesian
- Greek
- Turkish
- Hebrew
- Arabic
- Farsi-Persian
- Lithuanian
- Chinese-Simplified
- Chinese-Traditional
- Japanese
- Korean
- Thai
- Bengali
- Hindi
- Urdu
- Vietnamese

## Used Encodings

- UTF-8
- UTF-16LE
- UTF-16BE
- UTF-32LE
- UTF-32BE
- UTF-7
- UTF-1
- UTF-EBCDIC
- SCSU
- BOCU-1
- CP1250
- CP1251
- CP1252
- CP1253
- CP1254
- CP1255
- CP1256
- CP1257
- GB18030
- BIG5
- Shift-JIS
- EUC-KR
- TIS-620

## Confidence Score

The confidence score ranges from 0 to 1. It's an object that contains two different confidence scores. The language confidence score and the encoding confidence score. Both confidence scores will be the same if the detected encoding is Unicode. Otherwise the confidence score for the language and the encoding is calculated seperately. It is based on the amount of matches that were found for a particular language and the frequency of those matches. If you want to learn more about how it all works, check out the [Wiki entry](https://github.com/gignupg/Detect-File-Encoding-and-Language/wiki)!

## License

This project is licensed under the MIT License

![License](https://img.shields.io/badge/License-MIT-yellowgreen)
