const jsdom = require("jsdom");

module.exports = function(source) {
  return new Promise(function(resolve, reject) {
    jsdom.env(source, null, function(err, window) {
      if(err) reject(err);
      else resolve(window);
    });
  });
};
