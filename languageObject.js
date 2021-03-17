const flag = "gi";

const sharedRegex = {
    czech: new RegExp(/jsem|jsi/, flag),
    hungarian: new RegExp(/\snem\s/, flag),
    slovak: new RegExp(/\sako\s|poriadku|myslím/, flag),
    slovenian: new RegExp(/kaj/, flag),
    albanian: new RegExp(/nuk/, flag),
    english: new RegExp(/\sthe\s/, flag),
    french: new RegExp(/c'est/, flag),
    portuguese: new RegExp(/\snão\s/, flag),
    spanish: new RegExp(/bien|siempre|ahora/, flag),
    german: new RegExp(/\sdas\s/, flag),
    italian: new RegExp(/\sche\s/, flag),
    danish: new RegExp(/hvad|noget/, flag),
    norwegian: new RegExp(/deg/, flag),
    swedish: new RegExp(/\sjag\s/, flag),
    dutch: new RegExp(/\shet\s/, flag),
    finnish: new RegExp(/hän/, flag),
    "serbo-croatian": new RegExp(/\ssam\s|\skako\s/, flag),
    estonian: new RegExp(/see/, flag),
    icelandic: new RegExp(/Það/, flag),
    indonesian: new RegExp(/tidak/, flag),
    turkish: new RegExp(/\sbir\s/, flag),
};

module.exports = [
    {
        name: "polish",
        count: 0,
        utfRegex: new RegExp(/się/, flag),
        isoRegex: new RegExp(/siê/, flag),
        encoding: "CP1250"
    },
    {
        name: "czech",
        count: 0,
        utfRegex: sharedRegex.czech,
        isoRegex: sharedRegex.czech,
        encoding: "CP1250"
    },
    {
        name: "hungarian",
        count: 0,
        utfRegex: sharedRegex.hungarian,
        isoRegex: sharedRegex.hungarian,
        encoding: "CP1250"
    },
    {
        name: "romanian",
        count: 0,
        utfRegex: new RegExp(/sunt|eşti/, flag),
        isoRegex: new RegExp(/sunt|eºti/, flag),
        encoding: "CP1250"
    },
    {
        name: "slovak",
        count: 0,
        utfRegex: sharedRegex.slovak,
        isoRegex: sharedRegex.slovak,
        encoding: "CP1250"
    },
    {
        name: "slovenian",
        count: 0,
        utfRegex: sharedRegex.slovenian,
        isoRegex: sharedRegex.slovenian,
        encoding: "CP1250"
    },
    {
        name: "albanian",
        count: 0,
        utfRegex: sharedRegex.albanian,
        isoRegex: sharedRegex.albanian,
        encoding: "CP1250"
    },
    {
        name: "russian",
        count: 0,
        utfRegex: new RegExp(/что/, flag),
        isoRegex: new RegExp(/÷òî/, flag),
        encoding: "CP1251"
    },
    {
        name: "ukrainian",
        count: 0,
        utfRegex: new RegExp(/він|але/, flag),
        isoRegex: new RegExp(/â³í|àëå/, flag),
        encoding: "CP1251"
    },
    {
        name: "bulgarian",
        count: 0,
        utfRegex: new RegExp(/това|какво/, flag),
        isoRegex: new RegExp(/òîâà|äîáðå|êaêâo/, flag),
        encoding: "CP1251"
    },
    {
        name: "english",
        count: 0,
        utfRegex: sharedRegex.english,
        isoRegex: sharedRegex.english,
        encoding: "CP1252"
    },
    {
        name: "french",
        count: 0,
        utfRegex: sharedRegex.french,
        isoRegex: sharedRegex.french,
        encoding: "CP1252"
    },
    {
        name: "portuguese",
        count: 0,
        utfRegex: sharedRegex.portuguese,
        isoRegex: sharedRegex.portuguese,
        encoding: "CP1252"
    },
    {
        name: "spanish",
        count: 0,
        utfRegex: sharedRegex.spanish,
        isoRegex: sharedRegex.spanish,
        encoding: "CP1252"
    },
    {
        name: "german",
        count: 0,
        utfRegex: sharedRegex.german,
        isoRegex: sharedRegex.german,
        encoding: "CP1252"
    },
    {
        name: "italian",
        count: 0,
        utfRegex: sharedRegex.italian,
        isoRegex: sharedRegex.italian,
        encoding: "CP1252"
    },
    {
        name: "danish",
        count: 0,
        utfRegex: sharedRegex.danish,
        isoRegex: sharedRegex.danish,
        encoding: "CP1252"
    },
    {
        name: "norwegian",
        count: 0,
        utfRegex: sharedRegex.norwegian,
        isoRegex: sharedRegex.norwegian,
        encoding: "CP1252"
    },
    {
        name: "swedish",
        count: 0,
        utfRegex: sharedRegex.swedish,
        isoRegex: sharedRegex.swedish,
        encoding: "CP1252"
    },
    {
        name: "dutch",
        count: 0,
        utfRegex: sharedRegex.dutch,
        isoRegex: sharedRegex.dutch,
        encoding: "CP1252"
    },
    {
        name: "finnish",
        count: 0,
        utfRegex: sharedRegex.finnish,
        isoRegex: sharedRegex.finnish,
        encoding: "CP1252"
    },
    {
        name: "serbo-croatian",
        count: 0,
        utfRegex: sharedRegex["serbo-croatian"],
        isoRegex: sharedRegex["serbo-croatian"],
        encoding: "CP1252"
    },
    {
        name: "estonian",
        count: 0,
        utfRegex: sharedRegex.estonian,
        isoRegex: sharedRegex.estonian,
        encoding: "CP1252"
    },
    {
        name: "icelandic",
        count: 0,
        utfRegex: sharedRegex.icelandic,
        isoRegex: sharedRegex.icelandic,
        encoding: "CP1252"
    },
    {
        name: "indonesian",
        count: 0,
        utfRegex: sharedRegex.indonesian,
        isoRegex: sharedRegex.indonesian,
        encoding: "CP1252"
    },
    {
        name: "greek",
        count: 0,
        utfRegex: new RegExp(/είναι/, flag),
        isoRegex: new RegExp(/åßíáé/, flag),
        encoding: "CP1253"
    },
    {
        name: "turkish",
        count: 0,
        utfRegex: sharedRegex.turkish,
        isoRegex: sharedRegex.turkish,
        encoding: "CP1254"
    },
    {
        name: "hebrew",
        count: 0,
        utfRegex: new RegExp(/אתה/, flag),
        isoRegex: new RegExp(/àúä/, flag),
        encoding: "CP1255"
    },
    {
        name: "arabic",
        count: 0,
        utfRegex: new RegExp(/هذا/, flag),
        isoRegex: new RegExp(/åðç/, flag),
        encoding: "CP1256"
    },
    {
        name: "chinese-simplified",
        count: 0,
        utfRegex: new RegExp(/个|人/, flag),
        isoRegex: new RegExp(/´ó|¶¯|Å®/, flag),
        encoding: "GB18030"
    },
    {
        name: "chinese-traditional",
        count: 0,
        utfRegex: new RegExp(/在/, flag),
        isoRegex: new RegExp(/¦b/, flag),
        encoding: "BIG5"
    },
    {
        name: "japanese",
        count: 0,
        utfRegex: new RegExp(/ど/, flag),
        isoRegex: new RegExp(/‚»/, flag),
        encoding: "Shift-JIS"
    },
    {
        name: "korean",
        count: 0,
        utfRegex: new RegExp(/도/, flag),
        isoRegex: new RegExp(/àö¾î|å¾ß|¡¼­/, flag),
        encoding: "EUC-KR"
    },
    {
        name: "thai",
        count: 0,
        utfRegex: new RegExp(/แฮร์รี่|พอตเตอร์/, flag),
        isoRegex: new RegExp(/áîãìãõè|¾íµàµíãì­/, flag),
        encoding: "TIS-620"
    }
];