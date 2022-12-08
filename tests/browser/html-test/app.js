document.getElementById("my-input-field").addEventListener("change", (e) => {
    const file = e.target.files[0];
    languageEncoding(file).then((fileInfo) => console.log(fileInfo));
    // Possible result: { language: english, encoding: UTF-8, confidence: { encoding: 1, language: 1 } }
  });