const params = require("./loginparam");
const req = require("../common/req.js");
const path = params.path;
const formdata = params.formdata;
var cookie;

module.exports = req.get(path).then(function(res) {
  cookie = res.headers["set-cookie"][0].match(/JSESSIONID\=.+\;/)[0];
  return req.post(path, formdata, cookie);
}).then(function(res) {
  const body = res.body;
  if(body.match("<title>ポータル</title>")) {
    return Promise.resolve(cookie);
  } else {
    return Promise.reject("Login Faild");
  }
}).catch((err)=>console.log(err));
