const params = require("./loginparam");
const req = require("../common/req.js");
const path = params.path;
const formdata = params.formdata;
const jsdom = require("../common/jsdomPromise");
var cookie;

module.exports = req.get(path).then(function(res) {
  cookie = res.headers["set-cookie"][0].match(/JSESSIONID\=.+\;/)[0];
  return jsdom(res.body)
}).then(function(window) {
  var param = {
    "com.sun.faces.VIEW": window.document.getElementById("com.sun.faces.VIEW").getAttribute("value")
  };
  return req.post(path, Object.assign(param, formdata), cookie);
}).then(function(res) {
  const body = res.body;
  if(body.match("<title>ポータル</title>")) {
    return Promise.resolve(cookie);
  } else {
    return Promise.reject("Login Faild");
  }
}).catch((err)=>console.log(err));
