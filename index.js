'use strict';
var path = require('path');
var mime = require('mime');

module.exports = function (options) {
  var refrain = require('refrain')(options);
  return function (req, res, next) {
    var url = req._parsedUrl ? req._parsedUrl.pathname : req.url;
    var file = refrain.find(url);
    if (!file) return next();
    refrain.render(file, null, function (err, output) {
      if (err) return next(err);
      if (path.extname(url) !== '') {
        res.setHeader('Content-Type', mime.lookup(url));
      }
      res.end(output);
    });
  };
};
