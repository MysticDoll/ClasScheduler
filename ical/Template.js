const moment = require("moment");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getMatchedDate = function(day) {
  const today = moment().day();
  const validDay = days.findIndex(d => d === day);
  return moment().add(validDay - today, "days").format("YYYYMMDD\\T");
};

module.exports = function(unit) { 
  const date = getMatchedDate(unit.day);
  return `BEGIN:VEVENT
DTSTART;TZID=Asia/Tokyo:${date}${unit.start}00
DTEND;TZID=Asia/Tokyo:${date}${unit.end}00
RRULE:FREQ=WEEKLY;BYDAY=${unit.day.substring(0, 2).toUpperCase()}
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:${unit.title}
TRANSP:OPAQUE
END:VEVENT`;

};
