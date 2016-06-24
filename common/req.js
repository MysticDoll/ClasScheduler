const request = require("request");
const req = {};
req.post = function(url, formdata, cookie) {
  var options = {url: url, formData: formdata};
  if(cookie) options.headers = {"Cookie" : cookie, "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"};
  return new Promise(function(resolve, reject) {
    request.post(options, function(err, res, body) {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
req.get = function(url, formdata, cookie) {
  if(cookie) request.cookie(cookie);
  return new Promise(function(resolve, reject) {
    request.get({url: url, formData: formdata}, function(err, res, body) {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = req;
