import { useState } from 'react';
import languageEncoding from "detect-file-encoding-and-language";
import { directoryOpen } from 'browser-fs-access';
import { SpinnerDotted } from 'spinners-react';

type Status = '' | 'error' | 'success' | 'loading';

const minConfidence = 0.95;
let error = false;

export default function App() {
  const [status, setStatus] = useState<Status>('');

  function setError(file: any, fileInfo: any) {
    setStatus('error');
    error = true;
    console.info('file:', file);
    console.info('fileInfo:', fileInfo);
  }

  async function inputHandler() {
    error = false;
    const files = await directoryOpen({recursive: true});
    setStatus('loading')

    for (const file of files) {
      const folderNameArr = file.directoryHandle?.name.split('_');
      const expectedLanguage = folderNameArr ? folderNameArr[0] : null;
      const expectedEncoding = folderNameArr ? folderNameArr[1] : null;

      const fileInfo = await languageEncoding(file)
        if (!expectedLanguage) {
          console.error("Expected language not found in folder name", file.directoryHandle?.name);
          setError(file, fileInfo);

        } else if (!expectedEncoding) {
          console.error("Expected encoding not found in folder name", file.directoryHandle?.name);
          setError(file, fileInfo);

        } else if (!fileInfo.confidence.encoding || fileInfo.confidence.encoding < minConfidence) {
          console.error("Encoding Confidence too low!", fileInfo.confidence.encoding);
          setError(file, fileInfo);

        } else if (!fileInfo.confidence.language || fileInfo.confidence.language < minConfidence) {
          console.error("Language Confidence too low!", fileInfo.confidence.language);
          setError(file, fileInfo);

        } else if (fileInfo.language !== expectedLanguage) {
          console.error(`Language mismatch! Expected ${expectedLanguage} but got ${fileInfo.language}`);
          setError(file, fileInfo);

        } else if (fileInfo.encoding !== expectedEncoding) {
          console.error(`Encoding mismatch! Expected ${expectedEncoding} but got ${fileInfo.encoding}`);
          setError(file, fileInfo);
        }
    }

    if (!error) {
      console.info("All tests passed!");
      setStatus('success');
    }
  }

  return (
    <>
      <button className="btn waves-effect waves-light" onClick={inputHandler} type="submit" name="action">Test Folder
        <i className="material-icons left">cloud</i>
      </button>
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel light-blue lighten-5">
            <span className="black-text">
              Select a folder that contains subtitle files or subdirectories with subtitle files. 
              Then open the browser console to see whether tests are passing or failing.
              Make sure you're running the latest version of detect-file-encoding-and-language 
              by taking a closer look at the package in the node modules folder or by downlaoding 
              a fresh clone of this repo!
            </span>
          </div>
          {
            status === 'loading' && <h5>Testing files <SpinnerDotted /></h5>
          }
          {
            status === 'error' && (
              <div className="card-panel red darken-2">
                <span className="black-text">
                  Test failed! For more details open the console to see the error logs!
                </span>
              </div>
            )
          }
          {
            status === 'success' && (
              <div className="card-panel lime accent-4">
                <span className="black-text">
                  All tests passed!
                </span>
              </div>
            )
          }
        </div>
      </div>
    </>

  )
}