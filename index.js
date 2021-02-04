'use strict';

module.exports = function () {
  var lib = require('./lib');
  return lib.apply(lib, arguments);
};
