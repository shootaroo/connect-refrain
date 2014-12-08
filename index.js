'use strict';
module.exports = function (options) {
  var refrain = require('refrain')(options);
  return function (req, res, next) {
    var file = refrain.find(req._parsedUrl ? req._parsedUrl.pathname : req.url);
    if (!file) return next();
    refrain.render(file, null, function (err, output) {
      if (err) return next(err);
      res.end(output);
    });
  };
};
