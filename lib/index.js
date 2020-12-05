'use strict';

var path = require('path');
var bmanager = require('bin-manager');

var base = 'https://github.com/jihchi/dify-bin/raw/master/vendor';

var bin = new bmanager('bin', 'dify')
  .src(base + '/macos/dify', 'darwin')
  .src(base + '/linux/x64/dify', 'linux', 'x64')
  .src(base + '/win/x64/dify.exe', 'win32', 'x64')
  .use(process.platform === 'win32' ? 'dify.exe' : 'dify');

module.exports = bin;
