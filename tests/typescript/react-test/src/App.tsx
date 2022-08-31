import languageEncoding from "detect-file-encoding-and-language";

export default function App() {
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const file = e.target.files[0];
    languageEncoding(file).then((fileInfo) => console.log(fileInfo));
  }
  return <input type="file" onChange={inputHandler} />;
}