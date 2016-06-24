const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = [
  {
    start: "0850",
    end: "1020"
  },
  {
    start: "1030",
    end: "1200"
  },
  {
    start: "1250",
    end: "1420"
  },
  {
    start: "1430",
    end: "1600"
  },
  {
    start: "1610",
    end: "1740"
  },
  {
    start: "1800",
    end: "1930"
  },
  {
    start: "1940",
    end: "2110"
  }
];

const make = function(title, day, period) {
  const time = times[period];
  return {
    title: title,
    day: days[day],
    start: time.start,
    end: time.end
  };
};
module.exports = function(arr) {
  if(arr.length !== 6 || arr.find(c => c.length !== 7)) throw new TypeError("Invalid achedule array Error");
  const schedule = [];
  days.forEach((day, index) => {
    arr[index].forEach((study, i) => {
      if(study.length > 0) schedule.push(make(study, index, i));
    });
  });
  return schedule;
};
