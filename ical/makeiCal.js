const make = require("./Template");
module.exports = function(arr){
  return `BEGIN:VCALENDAR
BEGIN:VTIMEZONE
TZID:Asia/Tokyo
BEGIN:STANDARD
DTSTART:19700101T000000
TZOFFSETFROM:+0900
TZOFFSETTO:+0900
END:STANDARD
END:VTIMEZONE
PRODID:-\/\/Mitsuru Takigahira\/\/Classchedule 1.0\/\/JA
VERSION:2.0
${arr.map(unit => make(unit)).join("\n")}
END:VCALENDAR
`;
};
