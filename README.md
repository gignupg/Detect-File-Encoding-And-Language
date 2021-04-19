# Detect-File-Encoding-and-Language

![npm](https://img.shields.io/npm/dw/detect-file-encoding-and-language)
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

For reliable encoding and language detection, use files containing 500 words or more. Smaller inputs can work as well but the results might be less accurate and in some cases incorrect.

Feel free to test the functionality of this NPM package [here](https://encoding-and-language-detector.netlify.app/). Upload your own files and see if the encoding and language are detected correctly!

## Index

- [Detect-File-Encoding-and-Language](#detect-file-encoding-and-language)
  - [Functionality](#functionality)
  - [Index](#index)
  - [Usage](#usage)
    - [In the browser](#in-the-browser)
      - [Using the script tag](#using-the-script-tag)
        - [Via CDN](#via-cdn)
        - [Via download](#via-download)
        - [Usage](#usage-1)
      - [Using a bundler](#using-a-bundler)
        - [Installation](#installation)
        - [Usage](#usage-2)
    - [In Node.js](#in-nodejs)
      - [Installation](#installation-1)
      - [Usage](#usage-3)
    - [In the terminal (CLI)](#in-the-terminal-cli)
      - [Installation](#installation-2)
      - [Usage](#usage-4)
  - [Supported Languages](#supported-languages)
  - [Used Encodings](#used-encodings)
  - [Confidence Score](#confidence-score)
  - [Known Issues](#known-issues)
  - [License](#license)

## Usage

There are several ways in which you can use this NPM package. You can use it as a [command-line interface](#in-the-terminal-cli), server-side [with Node.js](#in-nodejs) or client-side [in the browser](#in-the-browser).

### In the browser

In the body section of your html file, create an input element of type `file` and give it an id.

```js
// index.html
<body>
  <input type="file" id="my-input-field" />
  <script src="app.js"></script>
</body>
```

Next, load the module either by [using the script tag](#using-the-script-tag) or by [using a bundler](#using-a-bundler)!

#### Using the script tag

When loading it via the `<script>` tag, you can either use the CDN version or download the code itself and include it in your project. For a quickstart use the [CDN version](#via-cdn). If you want to be able to use it offline, [download and include it](#via-download)!

##### Via CDN

```js
// index.html

<body>
  <input type="file" id="my-input-field" />
  <script src="https://unpkg.com/detect-file-encoding-and-language/umd/language-encoding.min.js"></script>
  <script src="app.js"></script>
</body>
```

Now that you've loaded the module, you can [start using it](#usage-1).

##### Via download

1. Create a new folder called `lib` inside your root directory
2. Inside `lib` create a new file and call it `language-encoding.min.js`
3. Make sure the encoding of your newly created file is either `UTF-8` or `UTF-8 with BOM` before proceeding!
4. Go to https://unpkg.com/detect-file-encoding-and-language/umd/language-encoding.min.js and copy the code
5. Paste it into `language-encoding.min.js` and save it
6. Use the code below to load `language-encoding.min.js` via the `<script>` tag.

```js
// index.html

<body>
  <input type="file" id="my-input-field" />
  <script src="lib/language-encoding.min.js"></script>
  <script src="app.js"></script>
</body>
```

##### Usage

The `<script>` tag exposes the `languageEncoding` function to everything in the DOM located beneath it. When you call it and pass in the file that you want to analyze, it'll return a Promise that you can use to retrieve the encoding, language and confidence score as shown in the example below.

```js
// app.js

document
  .getElementById("my-input-field")
  .addEventListener("change", inputHandler);

function inputHandler(e) {
  const file = e.target.files[0];

  languageEncoding(file).then((fileInfo) => console.log(fileInfo));
  // Possible result: { language: english, encoding: UTF-8, confidence: { encoding: 1, language: 1 } }
}
```

#### Using a bundler

##### Installation

```bash
$ npm install detect-file-encoding-and-language
```

##### Usage

```js
// app.js

const languageEncoding = require("detect-file-encoding-and-language");

document
  .getElementById("my-input-field")
  .addEventListener("change", inputHandler);

function inputHandler(e) {
  const file = e.target.files[0];

  languageEncoding(file).then((fileInfo) => console.log(fileInfo));
  // Possible result: { language: french, encoding: CP1252, confidence: { encoding: 1, language: 0.97 } }
}
```

> Note: This works great with frameworks such as React because they are doing the bundling for you. However, if you're using pure vanilla Javascript you will have to bundle it yourself!

### In Node.js

#### Installation

```bash
$ npm install detect-file-encoding-and-language
```

#### Usage

```js
// index.js

const languageEncoding = require("detect-file-encoding-and-language");

const pathToFile = "/home/username/documents/my-text-file.txt";

languageEncoding(pathToFile).then((fileInfo) => console.log(fileInfo));
// Possible result: { language: japanese, encoding: Shift-JIS, confidence: { encoding: 0.94, language: 0.94 } }
```

### In the terminal (CLI)

#### Installation

```bash
$ npm install -g detect-file-encoding-and-language
```

#### Usage

Once installed you'll be able to use the command `dfeal` to retrieve the encoding and language of your text files.

```bash
$ dfeal "/home/user name/Documents/subtitle file.srt"
# Possible result: { language: french, encoding: CP1252, confidence: { encoding: 0.99, language: 0.99 } }
```

or without quotation marks, using backslashes to escape spaces:

```bash
$ dfeal /home/user\ name/Documents/subtitle\ file.srt
# Possible result: { language: french, encoding: CP1252, confidence: { encoding: 0.97, language: 0.97 } }
```

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

## Known Issues

- Unable to detect Shift-JIS encoded Japanese text files when using Node.js. Solutions are welcome!

## License

This project is licensed under the MIT License

![License](https://img.shields.io/badge/License-MIT-yellowgreen)
