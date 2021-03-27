# Detect-File-Encoding-and-Language
![npm](https://img.shields.io/npm/dw/detect-file-encoding-and-language)
![npm](https://img.shields.io/npm/v/detect-file-encoding-and-language)
![npm bundle size](https://img.shields.io/bundlephobia/min/detect-file-encoding-and-language)

[![NPM stats](https://nodei.co/npm/detect-file-encoding-and-language.svg?downloadRank=true&downloads=true)](https://www.npmjs.org/package/detect-file-encoding-and-language)

## Functionality
Determine the encoding and language of any text file!

* Detects 40 languages as well as the appropriate encoding
* Works best with large inputs
* Completely free, no API key required

For reliable encoding and language detection, use files containing 500 words or more. Smaller inputs can work as well but the results might be less accurate and in some cases incorrect. 

Feel free to test the functionality of this NPM package [here](https://encoding-and-language-detector.netlify.app/). Upload your own files and see if the encoding and language are detected correctly!

- [Detect-File-Encoding-and-Language](#detect-file-encoding-and-language)
  * [Functionality](#functionality)
  * [Usage](#usage)
    + [In the browser](#in-the-browser)
      - [Via a `<script>` tag](#via-a---script---tag)
        * [Using the CDN version](#using-the-cdn-version)
        * [Downloading and including it](#downloading-and-including-it)
        * [Usage (Javascript)](#usage--javascript-)
      - [Using a bundler](#using-a-bundler)
        * [Installation](#installation)
        * [Usage](#usage-1)
    + [In Node.js](#in-nodejs)
      - [Installation](#installation-1)
      - [Usage](#usage-2)
    + [In the terminal (CLI)](#in-the-terminal--cli-)
      - [Installation](#installation-2)
  * [Supported Languages](#supported-languages)
  * [Used Encodings](#used-encodings)
  * [Confidence Score](#confidence-score)
  * [Known Issues](#known-issues)
  * [License](#license)

## Usage
There are several ways in which you can use this NPM package. You can use it as a command-line interface (create a link), server-side with Node.js (create a link) or client-side in the browser (create a link).

### In the browser
In the body section of your html file, create an input element of type `file` and give it an id.

```js
// index.html
<body>
  <input type="file" id="my-input-field" />
  <script src="app.js"></script>
</body>
```

Next, load the module either via a `<script>` tag (create a link) or by using bundler (create a link)!

#### Via a `<script>` tag
When loading it via the `<script>` tag, you can either use the CDN version (create a link) or download the code itself and include it in your project (create a link). The easiest and fastest to start with is using the CDN version (create a link). If you want to be able to use it offline, download and include it (create a link)!

##### Using the CDN version
```js
// index.html

<body>
  <input type="file" id="my-input-field" />
  <script src="https://unpkg.com/detect-file-encoding-and-language/umd/language-encoding.min.js"></script>
  <script src="app.js"></script>
</body>
```

Now that you've loaded the module, you can finally start using it (create a link). 

##### Downloading and including it
1. Create a new folder called `lib` inside your root directory 
2. Inside `lib` create a new file and call it *language-encoding.min.js*
3. **Important:** Make sure the encoding of your newly created file is either UTF-8 or UTF-8 with BOM!
4. Go to https://unpkg.com/detect-file-encoding-and-language/umd/language-encoding.min.js and copy the code
5. Paste it into *language-encoding.min.js* and save it
6. Use the code below to load *language-encoding.min.js* via a `<script>` tag.

```js
// index.html

<body>
  <input type="file" id="my-input-field" />
  <script src="lib/language-encoding.min.js"></script>
  <script src="app.js"></script>
</body>
```

##### Usage (Javascript)
The `<script>` tag exposes the `languageEncoding` function to everything in the DOM that's beneath it. You should have no trouble accessing it in `app.js` by calling the languageEncoding function and passing in the file that you want to analyze as the argument. As you can see in the example below, languageEncoding returns a Promise that you can use to get the encoding, language and confidenc score. 

```js
// app.js

document.getElementById("my-input-field").addEventListener("change", inputHandler);

function inputHandler(e) {
    const file = e.target.files[0];

    languageEncoding(file).then(fileInfo => console.log(fileInfo));
    // Possible result: { language: english, encoding: UTF-8, confidence: 0.97}
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

document.getElementById("my-input-field").addEventListener("change", inputHandler);

function inputHandler(e) {
    const file = e.target.files[0];

    languageEncoding(file).then(fileInfo => console.log(fileInfo));
    // Possible result: { language: english, encoding: UTF-8, confidence: 0.97}
}
```

Note: This works great with frameworks such as React because they are doing the bundling for you. However, if you're using pure vanilla Javascript you will have to bundle it yourself!

### In Node.js

#### Installation 
```bash
$ npm install detect-file-encoding-and-language
```

#### Usage
```js
// index.js

const languageEncoding = require("detect-file-encoding-and-language");

const pathToFile = "/home/username/documents/my-text-file.txt"

languageEncoding(pathToFile).then(fileInfo => console.log(fileInfo));
// Possible result: { language: japanese, encoding: Shift-JIS, confidence: 1 }
```

### In the terminal (CLI)

#### Installation 
```bash
$ npm install -g detect-file-encoding-and-language
```

Use the command `dfeal` to retrieve the encoding and language of your file: 

```bash
$ dfeal "/home/user name/Documents/subtitle file.srt"
# Possible result: { language: french, encoding: CP1252, confidence: 0.99 }
```

or without quotation marks, using backslashes to escape spaces:

```bash
$ dfeal /home/user\ name/Documents/subtitle\ file.srt
# Possible result: { language: french, encoding: CP1252, confidence: 0.99 }
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
* Malay-Indonesian
* Greek
* Turkish
* Hebrew
* Arabic
* Farsi-Persian
* Lithuanian
* Chinese-Simplified
* Chinese-Traditional
* Japanese
* Korean
* Thai
* Bengali
* Hindi
* Urdu
* Vietnamese

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
The confidence score ranges from 0 to 1. It is based on the amount of matches that were found for a particular language and the frequency of those matches. If you want to learn more about how it all works, check out the [Wiki entry](https://github.com/gignupg/Detect-File-Encoding-and-Language/wiki)!

## Known Issues
* Unable to detect Shift-JIS encoded Japanese text files when using Node.js. Solutions are welcome!
* Unable to detect UTF-16-LE encoded files when using Node.js. Solutions are welcome!

## License

This project is licensed under the MIT License

![License](https://img.shields.io/badge/License-MIT-yellowgreen)
