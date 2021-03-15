# Detect-File-Encoding-and-Language
1. [Functionality](#functionality)
2. [Installation](#installation)
3. [Example](#example)
4. [Supported Languages](#supported-languages)
5. [Used Encodings](#used-encodings)
6. [Confidence Score](#confidence-score)
7. [License](#license)

## Functionality
Determine the encoding and language of any text file!

* Detects 34 languages as well as the appropriate encoding
* Works best with large inputs
* Completely free, no API key required

For reliable encoding and language detection, use files containing 500 words or more. Smaller inputs can work as well but the results might be less accurate and in some cases incorrect. 

Feel free to test the functionality of this NPM package [here](https://encoding-and-language-detector.netlify.app/). Upload your own files and see if the encoding and language are detected correctly!

## Installation

```
npm install detect-file-encoding-and-language
```

## Example

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
    // Possible result: { language: English, encoding: UTF-8, confidence: 0.99}
}

```

## Supported Languages

* Polish
* Czech
* Hungarian
* Romanian
* Slovak
* Slovenian
* Albanian
* Russian
* Ukrainian
* Bulgarian
* English
* French
* Portuguese
* Spanish
* German
* Italian
* Danish
* Norwegian
* Swedish
* Dutch
* Finnish
* Serbo-Croatian
* Estonian
* Icelandic
* Indonesian
* Greek
* Turkish
* Hebrew
* Arabic
* Chinese-Simplified
* Chinese-Traditional
* Japanese
* Korean
* Thai


## Used Encodings

* UTF-8
* CP1250
* CP1251
* CP1252
* CP1253
* CP1254
* CP1255
* CP1256
* GB18030
* BIG5
* Shift-JIS
* EUC-KR
* TIS-620


## Confidence Score

The confidence score ranges from 0.5 to 1 and reflects the ratio between the two highest scoring languages/encodings. 

If the confidence score is 0.5 you have a one in two chance that the language/encoding has been detected correctly. 

A 0.8 confidence score means that the detected language/encoding had four times more matches than the second highest scoring language/encoding. 


## License

This project is licensed under the MIT License

![License](https://img.shields.io/badge/License-MIT-yellowgreen)