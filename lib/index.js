'use strict';

var path = require('path');
var bmanager = require('bin-manager');

var base = 'https://github.com/jihchi/dify/releases/download/v0.3.5';

var bin = new bmanager(path.resolve(__dirname, '../bin'))
  .src(base + '/dify-Darwin-x86_64.tar.gz', 'darwin')
  .src(base + '/dify-Linux-x86_64.tar.gz', 'linux', 'x64')
  .src(base + '/dify-Windows-x86_64.zip', 'win32', 'x64')
  .use(process.platform === 'win32' ? 'dify.exe' : 'dify');

module.exports = bin;
