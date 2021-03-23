# Detect-File-Encoding-and-Language
[![NPM stats](https://nodei.co/npm/detect-file-encoding-and-language.svg?downloadRank=true&downloads=true)](https://www.npmjs.org/package/detect-file-encoding-and-language)

## Index
- [Detect-File-Encoding-and-Language](#detect-file-encoding-and-language)
  * [Index](#index)
  * [Functionality](#functionality)
  * [Usage (Javascript)](#usage-javascript)
    + [Installation](#installation)
    + [In the browser](#in-the-browser)
    + [In Node.js](#in-nodejs)
  * [Usage (CLI)](#usage-cli)
    + [Installation](#installation-1)
    + [In the terminal](#in-the-terminal)
  * [Supported Languages](#supported-languages)
  * [Used Encodings](#used-encodings)
  * [Confidence Score](#confidence-score)
  * [Known Issues](#known-issues)
  * [License](#license)

## Functionality
Determine the encoding and language of any text file!

* Detects 40 languages as well as the appropriate encoding
* Works best with large inputs
* Completely free, no API key required

For reliable encoding and language detection, use files containing 500 words or more. Smaller inputs can work as well but the results might be less accurate and in some cases incorrect. 

Feel free to test the functionality of this NPM package [here](https://encoding-and-language-detector.netlify.app/). Upload your own files and see if the encoding and language are detected correctly!

## Usage (Javascript)

### Installation
```
npm install detect-file-encoding-and-language
```

### In the browser
```js
// index.html

<input type="file" id="my-input-field" >

```

```js
// app.js

const languageEncoding = require("detect-file-encoding-and-language");

document.getElementById("my-input-field").addEventListener("change", inputHandler);

function inputHandler(e) {
    const file = e.target.files[0];

    languageEncoding(file).then(fileInfo => console.log(fileInfo));
    // Possible result: { language: english, encoding: UTF-8, confidence: 0.97}
}
```

### In Node.js
```js
// index.js

const languageEncoding = require("detect-file-encoding-and-language");

const pathToFile = "/home/username/documents/my-text-file.txt"

languageEncoding(pathToFile).then(fileInfo => console.log(fileInfo));
// Possible result: { language: japanese, encoding: Shift-JIS, confidence: 1 }
```

## Usage (CLI)

### Installation
```
npm install -g detect-file-encoding-and-language
```

### In the terminal
Use "dfeal" to execute detect-file-encoding-and-language from the command line!

```
dfeal "/home/user name/Documents/subtitle file.srt"
// Possible result: { language: french, encoding: CP1252, confidence: 0.99 }
```

or without quotation marks, using backslashes to escape spaces:

```
dfeal /home/user\ name/Documents/subtitle\ file.srt
// Possible result: { language: french, encoding: CP1252, confidence: 0.99 }
```

## Supported Languages
* polish
* czech
* hungarian
* romanian
* slovak
* slovenian
* albanian
* russian
* ukrainian
* bulgarian
* english
* french
* portuguese
* spanish
* german
* italian
* danish
* norwegian
* swedish
* dutch
* finnish
* serbo-croatian
* estonian
* icelandic
* malay-indonesian
* greek
* turkish
* hebrew
* arabic
* farsi-persian
* lithuanian
* chinese-simplified
* chinese-traditional
* japanese
* korean
* thai
* bengali
* hindi
* urdu
* vietnamese

## Used Encodings
* UTF-8
* CP1250
* CP1251
* CP1252
* CP1253
* CP1254
* CP1255
* CP1256
* CP1257
* GB18030
* BIG5
* Shift-JIS
* EUC-KR
* TIS-620

## Confidence Score
The confidence score ranges from 0 to 1. It is based on the amount of matches that were found for a particular language and the frequency of those matches. 

## Known Issues
* Unable to detect Shift-JIS encoded Japanese text files when using Node.js. Solutions are welcome!
* Unable to detect UTF-16-LE encoded files when using Node.js. Solutions are welcome!

## License

This project is licensed under the MIT License

![License](https://img.shields.io/badge/License-MIT-yellowgreen)
