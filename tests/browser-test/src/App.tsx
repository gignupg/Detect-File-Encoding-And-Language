import languageEncoding from "detect-file-encoding-and-language";
export default function App() {
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('e:', e);
    if (e.target.files) {
      const file = e.target.files[0];
      languageEncoding(file).then((fileInfo) => console.log(fileInfo));
      // Possible result: { language: english, encoding: UTF-8, confidence: { encoding: 1, language: 1 } }
    }
  }
  return <input type="file" onChange={inputHandler} />;
}