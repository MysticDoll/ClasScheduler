const login = require("../login/login");
const params = require("./scheduleparam");
const req = require("../common/req.js");
const jsdom = require("../common/jsdomPromise");
const make = require("./makeSchedule");
const ical = require("../ical/makeiCal");
module.exports = login.then(function(cookie) {
  return req.post(params.path, params.formdata, cookie);
}).then(function(res) {
  return res.statusCode === 200 ? jsdom(res.body) : Promise.reject(res.statusMessage);
}).then(function(window) {
  const document = window.document;
  var scheduleArray = Array.from(document.querySelectorAll(".tujoHeight"))
    .map((e)=>
      Array.from(e.querySelectorAll("td:not(.jigen)"))
        .map((_e) => _e.textContent.trim())
      ).map((r,i,arr) => 
        arr.map((c) => c[i])
          .filter(c => c !== undefined)
      ).filter(a => a.length > 0);
  return ical(make(scheduleArray));
}).catch((err) => console.log(err));
