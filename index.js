'use strict';

module.exports = function () {
  var lib = require('./lib');
  return lib.run.apply(lib, arguments);
};
