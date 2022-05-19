export interface FileInfo {
    encoding: null | 'UTF-EBCDIC' | 'GB-18030' | 'GB18030' | 'UTF-32LE' | 'UTF-32BE' | 'UTF-8' | 'UTF-7' | 'UTF-1' | 'SCSU' | 'BOCU-1' | 'UTF-16BE' | 'UTF-16LE' | 'latin1' | 'ISO-8859-1' | 'CP1250' | 'CP1251' | 'CP1252' | 'CP1253' | 'CP1254' | 'CP1255' | 'CP1256' | 'CP1257' | 'BIG5' | 'Shift-JIS' | 'EUC-KR' | 'TIS-620';
    language: null | string;
    confidence: {
        encoding: null | number;
        language: null | number;
    },
}

declare function DetectFileEncodingAndLanguage(file: File): Promise<FileInfo>;
export default DetectFileEncodingAndLanguage;
