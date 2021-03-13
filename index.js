module.exports = (file) => {
    return new Promise((resolve, reject) => {
        const fileInfo = {};

        const languageCount = {
            Polish: 0,
            Czech: 0,
            Hungarian: 0,
            Romanian: 0,
            Slovak: 0,
            Slovenian: 0,
            Albanian: 0,
            Russian: 0,
            Ukrainian: 0,
            Bulgarian: 0,
            English: 0,
            French: 0,
            Portuguese: 0,
            Spanish: 0,
            German: 0,
            Italian: 0,
            Danish: 0,
            Norwegian: 0,
            Swedish: 0,
            Dutch: 0,
            Finnish: 0,
            "Serbo-Croatian": 0,
            Estonian: 0,
            Icelandic: 0,
            Indonesian: 0,
            Greek: 0,
            Turkish: 0,
            Hebrew: 0,
            Arabic: 0,
            "Chinese-Simplified": 0,
            "Chinese-Traditional": 0,
            Japanese: 0,
            Korean: 0,
            Thai: 0
        };

        const utfReader = new FileReader();

        utfReader.onload = () => {
            const content = utfReader.result;

            let utf8 = true;

            for (let b = 0; b < content.length; b++) {
                // If � is encountered it's definitely not utf8!
                if (content[b] === "�") {
                    utf8 = false;
                    break;
                }
            }

            if (utf8) {
                const srtSplit = content.split("\n");
                srtSplit.forEach(phrase => {
                    if (/się/i.test(phrase)) {
                        languageCount.Polish++;
                    }
                    if (/jsem/i.test(phrase) || /jsi/i.test(phrase)) {
                        languageCount.Czech++;
                    }
                    if (/\snem\s/i.test(phrase)) {
                        languageCount.Hungarian++;
                    }
                    if (/sunt/i.test(phrase) || /eşti/i.test(phrase)) {
                        languageCount.Romanian++;
                    }
                    if (/\sako\s/i.test(phrase) || /poriadku/i.test(phrase) || /myslím/i.test(phrase)) {
                        languageCount.Slovak++;
                    }
                    if (/kaj/i.test(phrase)) {
                        languageCount.Slovenian++;
                    }
                    if (/nuk/i.test(phrase)) {
                        languageCount.Albanian++;
                    }
                    if (/что/i.test(phrase)) {
                        languageCount.Russian++;
                    }
                    if (/він/i.test(phrase) || /але/i.test(phrase)) {
                        languageCount.Ukrainian++;
                    }
                    if (/това/i.test(phrase) || /какво/i.test(phrase)) {
                        languageCount.Bulgarian++;
                    }
                    if (/\sthe\s/i.test(phrase)) {
                        languageCount.English++;
                    }
                    if (/c'est/i.test(phrase)) {
                        languageCount.French++;
                    }
                    if (/\snão\s/i.test(phrase)) {
                        languageCount.Portuguese++;
                    }
                    if (/bien/i.test(phrase) || /siempre/i.test(phrase) || /ahora/i.test(phrase)) {
                        languageCount.Spanish++;
                    }
                    if (/\sdas\s/i.test(phrase)) {
                        languageCount.German++;
                    }
                    if (/\sche\s/i.test(phrase)) {
                        languageCount.Italian++;
                    }
                    if (/hvad/i.test(phrase) || /noget/i.test(phrase)) {
                        languageCount.Danish++;
                    }
                    if (/deg/i.test(phrase)) {
                        languageCount.Norwegian++;
                    }
                    if (/\sjag\s/i.test(phrase)) {
                        languageCount.Swedish++;
                    }
                    if (/\shet\s/i.test(phrase)) {
                        languageCount.Dutch++;
                    }
                    if (/hän/i.test(phrase)) {
                        languageCount.Finnish++;
                    }
                    if (/\ssam\s/i.test(phrase) || /\skako\s/i.test(phrase)) {
                        languageCount["Serbo-Croatian"]++;
                    }
                    if (/see/i.test(phrase)) {
                        languageCount.Estonian++;
                    }
                    if (/Það/i.test(phrase)) {
                        languageCount.Icelandic++;
                    }
                    if (/tidak/i.test(phrase)) {
                        languageCount.Indonesian++;
                    }
                    if (/είναι/i.test(phrase)) {
                        languageCount.Greek++;
                    }
                    if (/\sbir\s/i.test(phrase)) {
                        languageCount.Turkish++;
                    }
                    if (/אתה/i.test(phrase)) {
                        languageCount.Hebrew++;
                    }
                    if (/هذا/i.test(phrase)) {
                        languageCount.Arabic++;
                    }
                    if (/个/i.test(phrase) || /人/i.test(phrase)) {
                        languageCount["Chinese-Simplified"]++;
                    }
                    if (/在/i.test(phrase)) {
                        languageCount["Chinese-Traditional"]++;
                    }
                    if (/ど/i.test(phrase)) {
                        languageCount.Japanese++;
                    }
                    if (/도/i.test(phrase)) {
                        languageCount.Korean++;
                    }
                    if (/แฮร์รี่/i.test(phrase) || /พอตเตอร์/i.test(phrase)) {
                        languageCount.Thai++;
                    }
                });

                fileInfo.language = Object.keys(languageCount).reduce((a, b) => languageCount[a] > languageCount[b] ? a : b);
                fileInfo.confidence = calculateConfidence();
                fileInfo.encoding = "UTF-8";

                resolve(fileInfo);

            } else {
                const isoReader = new FileReader();

                isoReader.onload = () => {
                    const srtSplit = isoReader.result.split("\n");
                    srtSplit.forEach(phrase => {
                        if (/siê/i.test(phrase)) {
                            languageCount.Polish++;
                        }
                        if (/jsem/i.test(phrase) || /jsi/i.test(phrase)) {
                            languageCount.Czech++;
                        }
                        if (/\snem\s/i.test(phrase)) {
                            languageCount.Hungarian++;
                        }
                        if (/sunt/i.test(phrase) || /eºti/i.test(phrase)) {
                            languageCount.Romanian++;
                        }
                        if (/\sako\s/i.test(phrase) || /poriadku/i.test(phrase) || /myslím/i.test(phrase)) {
                            languageCount.Slovak++;
                        }
                        if (/kaj/i.test(phrase)) {
                            languageCount.Slovenian++;
                        }
                        if (/nuk/i.test(phrase)) {
                            languageCount.Albanian++;
                        }
                        if (/÷òî/i.test(phrase)) {
                            languageCount.Russian++;
                        }
                        if (/â³í/i.test(phrase) || /àëå/i.test(phrase)) {
                            languageCount.Ukrainian++;
                        }
                        if (/òîâà/i.test(phrase) || /äîáðå/i.test(phrase) || /êaêâo/i.test(phrase)) {
                            languageCount.Bulgarian++;
                        }
                        if (/\sthe\s/i.test(phrase)) {
                            languageCount.English++;
                        }
                        if (/c'est/i.test(phrase)) {
                            languageCount.French++;
                        }
                        if (/\snão\s/i.test(phrase)) {
                            languageCount.Portuguese++;
                        }
                        if (/bien/i.test(phrase) || /siempre/i.test(phrase) || /ahora/i.test(phrase)) {
                            languageCount.Spanish++;
                        }
                        if (/\sdas\s/i.test(phrase)) {
                            languageCount.German++;
                        }
                        if (/\sche\s/i.test(phrase)) {
                            languageCount.Italian++;
                        }
                        if (/hvad/i.test(phrase) || /noget/i.test(phrase)) {
                            languageCount.Danish++;
                        }
                        if (/deg/i.test(phrase)) {
                            languageCount.Norwegian++;
                        }
                        if (/\sjag\s/i.test(phrase)) {
                            languageCount.Swedish++;
                        }
                        if (/\shet\s/i.test(phrase)) {
                            languageCount.Dutch++;
                        }
                        if (/hän/i.test(phrase)) {
                            languageCount.Finnish++;
                        }
                        if (/\ssam\s/i.test(phrase) || /\skako\s/i.test(phrase)) {
                            languageCount["Serbo-Croatian"]++;
                        }
                        if (/see/i.test(phrase)) {
                            languageCount.Estonian++;
                        }
                        if (/Það/i.test(phrase)) {
                            languageCount.Icelandic++;
                        }
                        if (/tidak/i.test(phrase)) {
                            languageCount.Indonesian++;
                        }
                        if (/åßíáé/i.test(phrase)) {
                            languageCount.Greek++;
                        }
                        if (/\sbir\s/i.test(phrase)) {
                            languageCount.Turkish++;
                        }
                        if (/àúä/i.test(phrase)) {
                            languageCount.Hebrew++;
                        }
                        if (/åðç/i.test(phrase)) {
                            languageCount.Arabic++;
                        }
                        if (/´ó/i.test(phrase) || /¶¯/i.test(phrase) || /Å®/i.test(phrase)) {
                            languageCount["Chinese-Simplified"]++;
                        }
                        if (/¦b/i.test(phrase)) {
                            languageCount["Chinese-Traditional"]++;
                        }
                        if (/‚»/i.test(phrase)) {
                            languageCount.Japanese++;
                        }
                        if (/àö¾î/i.test(phrase) || /å¾ß/i.test(phrase) || /¡¼­/i.test(phrase)) {
                            languageCount.Korean++;
                        }
                        if (/áîãìãõè/i.test(phrase) || /¾íµàµíãì/i.test(phrase)) {
                            languageCount.Thai++;
                        }
                    });

                    fileInfo.language = Object.keys(languageCount).reduce((a, b) => languageCount[a] > languageCount[b] ? a : b);
                    fileInfo.confidence = calculateConfidence();
                    fileInfo.encoding = detectEncoding(fileInfo.language);

                    resolve(fileInfo);
                };

                isoReader.onerror = reject;
                isoReader.readAsText(file, "ISO-8859-1");
            }
        };

        utfReader.onerror = reject;
        utfReader.readAsText(file, "UTF-8");

        function calculateConfidence() {
            const secondLanguage = Object.keys(languageCount).reduce((a, b) => {
                if (b === fileInfo.language) b = a;
                return languageCount[a] >= languageCount[b] ? a : b;
            }, 0);

            return Number((languageCount[fileInfo.language] / (languageCount[secondLanguage] + languageCount[fileInfo.language])).toFixed(2));
        };

        function detectEncoding(detectedLang) {
            if (languageCount[detectedLang] > 0) {
                switch (detectedLang) {
                    case "Polish":
                    case "Czech":
                    case "Hungarian":
                    case "Romanian":
                    case "Slovak":
                    case "Slovenian":
                    case "Albanian":
                        return "CP1250";
                    case "Russian":
                    case "Ukrainian":
                    case "Bulgarian":
                        return "CP1251";
                    case "English":
                    case "French":
                    case "Portuguese":
                    case "Spanish":
                    case "German":
                    case "Italian":
                    case "Danish":
                    case "Norwegian":
                    case "Swedish":
                    case "Dutch":
                    case "Finnish":
                    case "Serbo-Croatian":
                    case "Estonian":
                    case "Icelandic":
                    case "Indonesian":
                        return "CP1252";
                    case "Greek":
                        return "CP1253";
                    case "Turkish":
                        return "CP1254";
                    case "Hebrew":
                        return "CP1255";
                    case "Arabic":
                        return "CP1256";
                    case "Chinese-Simplified":
                        return "GB18030";
                    case "Chinese-Traditional":
                        return "BIG5";
                    case "Japanese":
                        return "Shift-JIS";
                    case "Korean":
                        return "EUC-KR";
                    case "Thai":
                        return "TIS-620";
                }
            }
        }
    });
}