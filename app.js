require("./schedule/schedule").then(ical => {
  return new Promise(function(resolve, reject) {
    require("fs").createWriteStream(
      "./schedule.ics",
      {
        flags: "w",
        defaultEncoding: "utf8",
        fd: null,
        mode: 0o666,
        autoClose: true
    }).write(ical, function(err) {
      if(err) reject(err);
      else console.log("Schedule file is generated");
    });
  });
}).catch(err => console.error(err));

