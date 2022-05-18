export interface FileInfo {
    encoding: null | string,
    language: null | string,
    confidence: {
        encoding: null | string,
        language: null | string,
    },
}

declare function DetectFileEncodingAndLanguage(file: File): Promise<FileInfo>
export default DetectFileEncodingAndLanguage;
