const flag = "gi";

const sharedRegex = {
    czech: new RegExp(/jsem|jsi/, flag),
    hungarian: new RegExp(/\snem\s/, flag),
    slovak: new RegExp(/poriadku|myslím|\ssme\s/, flag),
    slovenian: new RegExp(/\skaj\s|lahko|zdaj/, flag),
    albanian: new RegExp(/nuk/, flag),
    english: new RegExp(/ the /, flag),
    french: new RegExp(/c'est/, flag),
    portuguese: new RegExp(/ não /, flag),
    spanish: new RegExp(/estaba|\smuy\s|siempre|ahora/, flag),
    german: new RegExp(/\sdas\s/, flag),
    italian: new RegExp(/\sche\s/, flag),
    danish: new RegExp(/hvad|noget/, flag),
    norwegian: new RegExp(/deg/, flag),
    swedish: new RegExp(/ jag /, flag),
    dutch: new RegExp(/ het /, flag),
    finnish: new RegExp(/hän/, flag),
    "serbo-croatian": new RegExp(/ sam | kako /, flag),
    estonian: new RegExp(/\sseda\s|\spole\s|midagi/, flag),
    icelandic: new RegExp(/Það/, flag),
    "malay-indonesian": new RegExp(/tidak/, flag),
    turkish: new RegExp(/ bir /, flag),
    lithuanian: new RegExp(/taip|\stai\s/, flag),
    bengali: new RegExp(/এটা/, flag),
    hindi: new RegExp(/हैं/, flag),
    urdu: new RegExp(/ایک/, flag),
    vietnamese: new RegExp(/ không /, flag)
};

const sharedFrequency = {
    polish: { low: 0.004355, high: 0.005102 },
    czech: { low: 0.004433, high: 0.007324 },
    hungarian: { low: 0.004994, high: 0.005183 },
    romanian: { low: 0.003319, high: 0.004190 },
    slovak: { low: 0.001736, high: 0.002557 },
    slovenian: { low: 0.004111, high: 0.004959 },
    albanian: { low: 0.003773, high: 0.007313 },
    ukrainian: { low: 0.002933, high: 0.005389 },
    english: { low: 0.004679, high: 0.007580 },
    french: { low: 0.003016, high: 0.004825 },
    portuguese: { low: 0.003406, high: 0.005032 },
    spanish: { low: 0.002348, high: 0.002881 },
    german: { low: 0.004044, high: 0.004391 },
    italian: { low: 0.003889, high: 0.005175 },
    danish: { low: 0.003630, high: 0.004189 },
    norwegian: { low: 0.002410, high: 0.003918 },
    swedish: { low: 0.004916, high: 0.007221 },
    dutch: { low: 0.003501, high: 0.004150 },
    finnish: { low: 0.003308, high: 0.005135 },
    "serbo-croatian": { low: 0.002568, high: 0.005182 },
    estonian: { low: 0.002892, high: 0.003963 },
    icelandic: { low: 0.004366, high: 0.004366 },
    "malay-indonesian": { low: 0.002825, high: 0.003932 },
    greek: { low: 0.003440, high: 0.004862 },
    turkish: { low: 0.002915, high: 0.004588 },
    hebrew: { low: 0.003663, high: 0.004666 },
    lithuanian: { low: 0.003277, high: 0.003768 },
    bengali: { low: 0.003155, high: 0.005236 },
    hindi: { low: 0.004159, high: 0.006478 },
    urdu: { low: 0.004118, high: 0.005851 },
    vietnamese: { low: 0.003387, high: 0.005191 }
};

module.exports = [
    {
        name: "polish",
        count: 0,
        utfRegex: new RegExp(/się/, flag),
        isoRegex: new RegExp(/siê/, flag),
        encoding: "CP1250",
        utfFrequency: sharedFrequency.polish,
        isoFrequency: sharedFrequency.polish
    },
    {
        name: "czech",
        count: 0,
        utfRegex: sharedRegex.czech,
        isoRegex: sharedRegex.czech,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.czech,
        isoFrequency: sharedFrequency.czech
    },
    {
        name: "hungarian",
        count: 0,
        utfRegex: sharedRegex.hungarian,
        isoRegex: sharedRegex.hungarian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.hungarian,
        isoFrequency: sharedFrequency.hungarian
    },
    {
        name: "romanian",
        count: 0,
        utfRegex: new RegExp(/sunt|eşti/, flag),
        isoRegex: new RegExp(/sunt|eºti/, flag),
        encoding: "CP1250",
        utfFrequency: sharedFrequency.romanian,
        isoFrequency: sharedFrequency.romanian
    },
    {
        name: "slovak",
        count: 0,
        utfRegex: sharedRegex.slovak,
        isoRegex: sharedRegex.slovak,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.slovak,
        isoFrequency: sharedFrequency.slovak
    },
    {
        name: "slovenian",
        count: 0,
        utfRegex: sharedRegex.slovenian,
        isoRegex: sharedRegex.slovenian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.slovenian,
        isoFrequency: sharedFrequency.slovenian
    },
    {
        name: "albanian",
        count: 0,
        utfRegex: sharedRegex.albanian,
        isoRegex: sharedRegex.albanian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.albanian,
        isoFrequency: sharedFrequency.albanian
    },
    {
        name: "russian",
        count: 0,
        utfRegex: new RegExp(/что/, flag),
        isoRegex: new RegExp(/÷òî/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.004965, high: 0.005341 },
        isoFrequency: { low: 0.003884, high: 0.003986 }
    },
    {
        name: "ukrainian",
        count: 0,
        utfRegex: new RegExp(/він|але/, flag),
        isoRegex: new RegExp(/â³í|àëå/, flag),
        encoding: "CP1251",
        utfFrequency: sharedFrequency.ukrainian,
        isoFrequency: sharedFrequency.ukrainian
    },
    {
        name: "bulgarian",
        count: 0,
        utfRegex: new RegExp(/това|какво/, flag),
        isoRegex: new RegExp(/òîâà|äîáðå|êaêâo/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.005225, high: 0.005628 },
        isoFrequency: { low: 0.002767, high: 0.004951 }
    },
    {
        name: "english",
        count: 0,
        utfRegex: sharedRegex.english,
        isoRegex: sharedRegex.english,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.english,
        isoFrequency: sharedFrequency.english
    },
    {
        name: "french",
        count: 0,
        utfRegex: sharedRegex.french,
        isoRegex: sharedRegex.french,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.french,
        isoFrequency: sharedFrequency.french
    },
    {
        name: "portuguese",
        count: 0,
        utfRegex: sharedRegex.portuguese,
        isoRegex: sharedRegex.portuguese,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.portuguese,
        isoFrequency: sharedFrequency.portuguese
    },
    {
        name: "spanish",
        count: 0,
        utfRegex: sharedRegex.spanish,
        isoRegex: sharedRegex.spanish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.spanish,
        isoFrequency: sharedFrequency.spanish
    },
    {
        name: "german",
        count: 0,
        utfRegex: sharedRegex.german,
        isoRegex: sharedRegex.german,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.german,
        isoFrequency: sharedFrequency.german
    },
    {
        name: "italian",
        count: 0,
        utfRegex: sharedRegex.italian,
        isoRegex: sharedRegex.italian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.italian,
        isoFrequency: sharedFrequency.italian
    },
    {
        name: "danish",
        count: 0,
        utfRegex: sharedRegex.danish,
        isoRegex: sharedRegex.danish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.danish,
        isoFrequency: sharedFrequency.danish
    },
    {
        name: "norwegian",
        count: 0,
        utfRegex: sharedRegex.norwegian,
        isoRegex: sharedRegex.norwegian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.norwegian,
        isoFrequency: sharedFrequency.norwegian
    },
    {
        name: "swedish",
        count: 0,
        utfRegex: sharedRegex.swedish,
        isoRegex: sharedRegex.swedish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.swedish,
        isoFrequency: sharedFrequency.swedish
    },
    {
        name: "dutch",
        count: 0,
        utfRegex: sharedRegex.dutch,
        isoRegex: sharedRegex.dutch,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.dutch,
        isoFrequency: sharedFrequency.dutch
    },
    {
        name: "finnish",
        count: 0,
        utfRegex: sharedRegex.finnish,
        isoRegex: sharedRegex.finnish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.finnish,
        isoFrequency: sharedFrequency.finnish
    },
    {
        name: "serbo-croatian",
        count: 0,
        utfRegex: sharedRegex["serbo-croatian"],
        isoRegex: sharedRegex["serbo-croatian"],
        encoding: "CP1252",
        utfFrequency: sharedFrequency["serbo-croatian"],
        isoFrequency: sharedFrequency["serbo-croatian"]
    },
    {
        name: "estonian",
        count: 0,
        utfRegex: sharedRegex.estonian,
        isoRegex: sharedRegex.estonian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.estonian,
        isoFrequency: sharedFrequency.estonian
    },
    {
        name: "icelandic",
        count: 0,
        utfRegex: sharedRegex.icelandic,
        isoRegex: sharedRegex.icelandic,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.icelandic,
        isoFrequency: sharedFrequency.icelandic
    },
    {
        name: "malay-indonesian",
        count: 0,
        utfRegex: sharedRegex["malay-indonesian"],
        isoRegex: sharedRegex["malay-indonesian"],
        encoding: "CP1252",
        utfFrequency: sharedFrequency["malay-indonesian"],
        isoFrequency: sharedFrequency["malay-indonesian"]
    },
    {
        name: "greek",
        count: 0,
        utfRegex: new RegExp(/είναι/, flag),
        isoRegex: new RegExp(/åßíáé/, flag),
        encoding: "CP1253",
        utfFrequency: sharedFrequency.greek,
        isoFrequency: sharedFrequency.greek
    },
    {
        name: "turkish",
        count: 0,
        utfRegex: sharedRegex.turkish,
        isoRegex: sharedRegex.turkish,
        encoding: "CP1254",
        utfFrequency: sharedFrequency.turkish,
        isoFrequency: sharedFrequency.turkish
    },
    {
        name: "hebrew",
        count: 0,
        utfRegex: new RegExp(/אתה/, flag),
        isoRegex: new RegExp(/àúä/, flag),
        encoding: "CP1255",
        utfFrequency: sharedFrequency.hebrew,
        isoFrequency: sharedFrequency.hebrew
    },
    {
        name: "arabic",
        count: 0,
        utfRegex: new RegExp(/هذا/, flag),
        isoRegex: new RegExp(/åðç/, flag),
        encoding: "CP1256",
        utfFrequency: { low: 0.003522, high: 0.004348 },
        isoFrequency: { low: 0.003773, high: 0.005559 }
    },
    {
        name: "farsi-persian",
        count: 0,
        utfRegex: new RegExp(/اون/, flag),
        isoRegex: new RegExp(/çíä/, flag),
        encoding: "CP1256",
        utfFrequency: { low: 0.002761, high: 0.004856 },
        isoFrequency: { low: 0.003010, high: 0.006646 }
    },
    {
        name: "lithuanian",
        count: 0,
        utfRegex: sharedRegex.lithuanian,
        isoRegex: sharedRegex.lithuanian,
        encoding: "CP1257",
        utfFrequency: sharedFrequency.lithuanian,
        isoFrequency: sharedFrequency.lithuanian
    },
    {
        name: "chinese-simplified",
        count: 0,
        utfRegex: new RegExp(/么/, flag),
        isoRegex: new RegExp(/´ó|¶¯|Å®/, flag),
        encoding: "GB18030",
        utfFrequency: { low: 0.009567, high: 0.011502 },
        isoFrequency: { low: 0.003137, high: 0.005009 }
    },
    {
        name: "chinese-traditional",
        count: 0,
        utfRegex: new RegExp(/們/, flag),
        isoRegex: new RegExp(/¦b/, flag),
        encoding: "BIG5",
        utfFrequency: { low: 0.012484, high: 0.014964 },
        isoFrequency: { low: 0.005063, high: 0.005822 }
    },
    {
        name: "japanese",
        count: 0,
        utfRegex: new RegExp(/ど/, flag),
        isoRegex: new RegExp(/‚»|ÁÄ/, flag),
        encoding: "Shift-JIS",
        utfFrequency: { low: 0.004257, high: 0.006585 },
        isoFrequency: { low: 0.004286, high: 0.004653 }
    },
    {
        name: "korean",
        count: 0,
        utfRegex: new RegExp(/도/, flag),
        isoRegex: new RegExp(/àö¾î|å¾ß|¡¼­/, flag),
        encoding: "EUC-KR",
        utfFrequency: { low: 0.010910, high: 0.013670 },
        isoFrequency: { low: 0.004118, high: 0.004961 }
    },
    {
        name: "thai",
        count: 0,
        utfRegex: new RegExp(/แฮร์รี่|พอตเตอร์/, flag),
        isoRegex: new RegExp(/áîãìãõè|¾íµàµíãì­/, flag),
        encoding: "TIS-620",
        utfFrequency: { low: 0.003194, high: 0.003468 },
        isoFrequency: { low: 0.002091, high: 0.002303 }
    },
    // The following languages don't seem to have their own encoding
    // Subtitle files in these languages seem to almost exclusively use UTF encoding.
    {
        name: "bengali",
        count: 0,
        utfRegex: sharedRegex.bengali,
        isoRegex: sharedRegex.bengali,
        utfFrequency: sharedFrequency.bengali,
        isoFrequency: sharedFrequency.bengali
    },
    {
        name: "hindi",
        count: 0,
        utfRegex: sharedRegex.hindi,
        isoRegex: sharedRegex.hindi,
        utfFrequency: sharedFrequency.hindi,
        isoFrequency: sharedFrequency.hindi
    },
    {
        name: "urdu",
        count: 0,
        utfRegex: sharedRegex.urdu,
        isoRegex: sharedRegex.urdu,
        utfFrequency: sharedFrequency.urdu,
        isoFrequency: sharedFrequency.urdu
    },
    {
        name: "vietnamese",
        count: 0,
        utfRegex: sharedRegex.vietnamese,
        isoRegex: sharedRegex.vietnamese,
        utfFrequency: sharedFrequency.vietnamese,
        isoFrequency: sharedFrequency.vietnamese
    },
];