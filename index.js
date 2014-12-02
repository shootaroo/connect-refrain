'use strict';
module.exports = function (options) {
  var refrain = require('refrain')(options);
  return function (req, res, next) {
    var file = refrain.find(req.url);
    if (file) {
      refrain.render(file, null, function (err, output) {
        res.end(output);
      });
    } else {
      next();
    }
  };
};
