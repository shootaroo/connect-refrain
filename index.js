'use strict';
module.exports = function (options) {
  var refrain = require('refrain')(options);
  return function (req, res, next) {
    var file = refrain.find(req.url);
    file ? res.end(refrain.render(file)) : next();
  };
};
