const flag = "gi";

const sharedRegex = {
    czech: new RegExp(/jsem|jsi/, flag),
    hungarian: new RegExp(/ nem /, flag),
    slovak: new RegExp(/ ako |poriadku|myslím/, flag),
    slovenian: new RegExp(/kaj/, flag),
    albanian: new RegExp(/nuk/, flag),
    english: new RegExp(/ the /, flag),
    french: new RegExp(/c'est/, flag),
    portuguese: new RegExp(/ não /, flag),
    spanish: new RegExp(/bien|siempre|ahora/, flag),
    german: new RegExp(/ das /, flag),
    italian: new RegExp(/ che /, flag),
    danish: new RegExp(/hvad|noget/, flag),
    norwegian: new RegExp(/deg/, flag),
    swedish: new RegExp(/ jag /, flag),
    dutch: new RegExp(/ het /, flag),
    finnish: new RegExp(/hän/, flag),
    "serbo-croatian": new RegExp(/ sam | kako /, flag),
    estonian: new RegExp(/see/, flag),
    icelandic: new RegExp(/Það/, flag),
    indonesian: new RegExp(/tidak/, flag),
    turkish: new RegExp(/ bir /, flag),
};

const sharedFrequency = {
    polish: { low: 0.004355, high: 0.005102 }
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
        utfFrequency: { low: 0.004433, high: 0.007324 }
    },
    {
        name: "hungarian",
        count: 0,
        utfRegex: sharedRegex.hungarian,
        isoRegex: sharedRegex.hungarian,
        encoding: "CP1250",
        utfFrequency: { low: 0.004994, high: 0.005183 }
    },
    {
        name: "romanian",
        count: 0,
        utfRegex: new RegExp(/sunt|eşti/, flag),
        isoRegex: new RegExp(/sunt|eºti/, flag),
        encoding: "CP1250",
        utfFrequency: { low: 0.003319, high: 0.004190 }
    },
    {
        name: "slovak",
        count: 0,
        utfRegex: sharedRegex.slovak,
        isoRegex: sharedRegex.slovak,
        encoding: "CP1250",
        utfFrequency: { low: 0.002691, high: 0.003665 }
    },
    {
        name: "slovenian",
        count: 0,
        utfRegex: sharedRegex.slovenian,
        isoRegex: sharedRegex.slovenian,
        encoding: "CP1250",
        utfFrequency: { low: 0.004388, high: 0.006711 }
    },
    {
        name: "albanian",
        count: 0,
        utfRegex: sharedRegex.albanian,
        isoRegex: sharedRegex.albanian,
        encoding: "CP1250",
        utfFrequency: { low: 0.003773, high: 0.007313 }
    },
    {
        name: "russian",
        count: 0,
        utfRegex: new RegExp(/что/, flag),
        isoRegex: new RegExp(/÷òî/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.004965, high: 0.005341 }
    },
    {
        name: "ukrainian",
        count: 0,
        utfRegex: new RegExp(/він|але/, flag),
        isoRegex: new RegExp(/â³í|àëå/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.002933, high: 0.005389 }
    },
    {
        name: "bulgarian",
        count: 0,
        utfRegex: new RegExp(/това|какво/, flag),
        isoRegex: new RegExp(/òîâà|äîáðå|êaêâo/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.005225, high: 0.005628 }
    },
    {
        name: "english",
        count: 0,
        utfRegex: sharedRegex.english,
        isoRegex: sharedRegex.english,
        encoding: "CP1252",
        utfFrequency: { low: 0.006943, high: 0.009267 }
    },
    {
        name: "french",
        count: 0,
        utfRegex: sharedRegex.french,
        isoRegex: sharedRegex.french,
        encoding: "CP1252",
        utfFrequency: { low: 0.003016, high: 0.004825 }
    },
    {
        name: "portuguese",
        count: 0,
        utfRegex: sharedRegex.portuguese,
        isoRegex: sharedRegex.portuguese,
        encoding: "CP1252",
        utfFrequency: { low: 0.005530, high: 0.006694 }
    },
    {
        name: "spanish",
        count: 0,
        utfRegex: sharedRegex.spanish,
        isoRegex: sharedRegex.spanish,
        encoding: "CP1252",
        utfFrequency: { low: 0.002373, high: 0.002452 }
    },
    {
        name: "german",
        count: 0,
        utfRegex: sharedRegex.german,
        isoRegex: sharedRegex.german,
        encoding: "CP1252",
        utfFrequency: { low: 0.004044, high: 0.004391 }
    },
    {
        name: "italian",
        count: 0,
        utfRegex: sharedRegex.italian,
        isoRegex: sharedRegex.italian,
        encoding: "CP1252",
        utfFrequency: { low: 0.003889, high: 0.005175 }
    },
    {
        name: "danish",
        count: 0,
        utfRegex: sharedRegex.danish,
        isoRegex: sharedRegex.danish,
        encoding: "CP1252",
        utfFrequency: { low: 0.003630, high: 0.004189 }
    },
    {
        name: "norwegian",
        count: 0,
        utfRegex: sharedRegex.norwegian,
        isoRegex: sharedRegex.norwegian,
        encoding: "CP1252",
        utfFrequency: { low: 0.002410, high: 0.003918 }
    },
    {
        name: "swedish",
        count: 0,
        utfRegex: sharedRegex.swedish,
        isoRegex: sharedRegex.swedish,
        encoding: "CP1252",
        utfFrequency: { low: 0.009747, high: 0.012154 }
    },
    {
        name: "dutch",
        count: 0,
        utfRegex: sharedRegex.dutch,
        isoRegex: sharedRegex.dutch,
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "finnish",
        count: 0,
        utfRegex: sharedRegex.finnish,
        isoRegex: sharedRegex.finnish,
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "serbo-croatian",
        count: 0,
        utfRegex: sharedRegex["serbo-croatian"],
        isoRegex: sharedRegex["serbo-croatian"],
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "estonian",
        count: 0,
        utfRegex: sharedRegex.estonian,
        isoRegex: sharedRegex.estonian,
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "icelandic",
        count: 0,
        utfRegex: sharedRegex.icelandic,
        isoRegex: sharedRegex.icelandic,
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "indonesian",
        count: 0,
        utfRegex: sharedRegex.indonesian,
        isoRegex: sharedRegex.indonesian,
        encoding: "CP1252",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "greek",
        count: 0,
        utfRegex: new RegExp(/είναι/, flag),
        isoRegex: new RegExp(/åßíáé/, flag),
        encoding: "CP1253",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "turkish",
        count: 0,
        utfRegex: sharedRegex.turkish,
        isoRegex: sharedRegex.turkish,
        encoding: "CP1254",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "hebrew",
        count: 0,
        utfRegex: new RegExp(/אתה/, flag),
        isoRegex: new RegExp(/àúä/, flag),
        encoding: "CP1255",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "arabic",
        count: 0,
        utfRegex: new RegExp(/هذا/, flag),
        isoRegex: new RegExp(/åðç/, flag),
        encoding: "CP1256",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "chinese-simplified",
        count: 0,
        utfRegex: new RegExp(/个|人/, flag),
        isoRegex: new RegExp(/´ó|¶¯|Å®/, flag),
        encoding: "GB18030",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "chinese-traditional",
        count: 0,
        utfRegex: new RegExp(/在/, flag),
        isoRegex: new RegExp(/¦b/, flag),
        encoding: "BIG5",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "japanese",
        count: 0,
        utfRegex: new RegExp(/ど/, flag),
        isoRegex: new RegExp(/‚»/, flag),
        encoding: "Shift-JIS",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "korean",
        count: 0,
        utfRegex: new RegExp(/도/, flag),
        isoRegex: new RegExp(/àö¾î|å¾ß|¡¼­/, flag),
        encoding: "EUC-KR",
        utfFrequency: { low: 004433, high: 007324 }
    },
    {
        name: "thai",
        count: 0,
        utfRegex: new RegExp(/แฮร์รี่|พอตเตอร์/, flag),
        isoRegex: new RegExp(/áîãìãõè|¾íµàµíãì­/, flag),
        encoding: "TIS-620",
        utfFrequency: { low: 004433, high: 007324 }
    }
];