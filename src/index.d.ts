export interface FileInfo {
    encoding: null | 'UTF-EBCDIC' | 'GB18030' | 'UTF-32LE' | 'UTF-32BE' | 'UTF-8' | 'UTF-7' | 'UTF-1' | 'SCSU' | 'BOCU-1' | 'UTF-16BE' | 'UTF-16LE' | 'latin1' | 'ISO-8859-1' | 'CP1250' | 'CP1251' | 'CP1252' | 'CP1253' | 'CP1254' | 'CP1255' | 'CP1256' | 'CP1257' | 'BIG5' | 'Shift-JIS' | 'EUC-KR' | 'TIS-620';
    language: null | 'polish' | 'czech' | 'hungarian' | 'romanian' | 'slovak' | 'slovenian' | 'albanian' | 'russian' | 'ukrainian' | 'bulgarian' | 'english' | 'french' | 'portuguese' | 'spanish' | 'german' | 'italian' | 'danish' | 'norwegian' | 'swedish' | 'dutch' | 'finnish' | 'serbo-croatian' | 'estonian' | 'icelandic' | 'malay-indonesian' | 'greek' | 'turkish' | 'hebrew' | 'arabic' | 'farsi-persian' | 'lithuanian' | 'chinese-simplified' | 'chinese-traditional' | 'japanese' | 'korean' | 'thai' | 'bengali' | 'hindi' | 'urdu' | 'vietnamese';
    confidence: {
        encoding: null | number;
        language: null | number;
    },
}

declare function DetectFileEncodingAndLanguage(clientSideFileOrServerSidePath: File | Blob | string | Buffer | URL): Promise<FileInfo>;
export default DetectFileEncodingAndLanguage;
