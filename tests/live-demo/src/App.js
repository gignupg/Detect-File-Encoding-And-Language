import React, { useState, useEffect } from "react";
import defaultFileInfo from "./defaultFileInfo.js";
import languageEncoding from "detect-file-encoding-and-language";

function App() {
  const [file, setFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(defaultFileInfo);
  const [textContent, setTextContent] = useState("");

  function fileUpload(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);

      languageEncoding(e.target.files[0]).then((data) => {
        setFileInfo(data);
      });
    }
  }

  useEffect(() => {
    if (fileInfo.encoding) {
      const reader = new FileReader();

      reader.onload = () => {
        setTextContent(reader.result);
      };

      reader.readAsText(file, fileInfo.encoding);
    }
  }, [file, fileInfo]);

  return (
    <div className="container">
      <div className="row">
        <div className="card-panel white black-text">
          <h4 className="teal-text">Encoding and Language Detector</h4>
          <form action="#">
            <div className="file-field input-field">
              <div className="btn blue">
                <span>File Upload</span>
                <input type="file" onChange={fileUpload} />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>
          {textContent && (
          <div className="col s12 grey lighten-2">
            <p className="col s6">
              Language: <span className="blue-text">{fileInfo.language}</span>
            </p>
            <p className="col s6">
              Encoding: <span className="blue-text">{fileInfo.encoding}</span>
            </p>
            <p className="col s6">
              Confidence: <span className="blue-text">{fileInfo.confidence.language}</span>
            </p>
            <p className="col s6">
              Confidence: <span className="blue-text">{fileInfo.confidence.encoding}</span>
            </p>
          </div>)}
          <div className="col s12 teal lighten-4 black-text">
            {textContent ? <h5>Content</h5> : <h5>Functionality</h5>}
            {textContent ? (
              <p>{textContent}</p>
            ) : (
              <div>
                <p>Determine the encoding and language of text files!</p>
                <ul className="browser-default">
                  <li>
                    Detects 40 languages as well as the appropriate encoding
                  </li>
                  <li>Available as CLI, in Node.js and in the browser</li>
                  <li>Supports .txt, .srt, and .sub</li>
                  <li>Works best with large inputs</li>
                  <li>Completely free, no API key required</li>
                </ul>
                <p>
                  For reliable encoding and language detection, use files
                  containing 500 words or more. Smaller inputs can work as well
                  but the results might be less accurate and in some cases
                  incorrect.
                </p>
                <p>
                  Feel free to upload your own files and see if the encoding and
                  language are detected correctly!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
