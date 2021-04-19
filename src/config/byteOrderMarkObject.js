module.exports = [
  {
    encoding: "UTF-EBCDIC",
    regex: new RegExp("221 115 102 115"),
  },
  {
    encoding: "GB-18030",
    regex: new RegExp("132 49 149 51"),
  },
  {
    encoding: "UTF-32LE",
    regex: new RegExp("255 254 0 0"),
  },
  {
    encoding: "UTF-32BE",
    regex: new RegExp("0 0 254 255"),
  },
  {
    encoding: "UTF-8",
    regex: new RegExp("239 187 191"),
  },
  {
    encoding: "UTF-7",
    regex: new RegExp("43 47 118"),
  },
  {
    encoding: "UTF-1",
    regex: new RegExp("247 100 76"),
  },
  {
    encoding: "SCSU",
    regex: new RegExp("14 254 255"),
  },
  {
    encoding: "BOCU-1",
    regex: new RegExp("251 238 40"),
  },
  {
    encoding: "UTF-16BE",
    regex: new RegExp("254 255"),
  },
  {
    encoding: "UTF-16LE",
    regex: new RegExp("255 254"),
  },
];
