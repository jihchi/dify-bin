'use strict';

var path = require('path');
var bmanager = require('bin-manager');

var base = 'https://github.com/jihchi/dify/releases/download/v0.7.4';

var bin = new bmanager(path.resolve(__dirname, '../bin'))
  .src(base + '/dify-x86_64-apple-darwin-v0.7.4.tar.gz', 'darwin')
  .src(base + '/dify-x86_64-unknown-linux-gnu-v0.7.4.tar.gz', 'linux', 'x64')
  .src(base + '/dify-x86_64-pc-windows-gnu-v0.7.4.tar.gz', 'win32', 'x64')
  .use(process.platform === 'win32' ? 'dify.exe' : 'dify');

module.exports = function (args, callback) {
  bin.run(args, function cb(err, ok) {
    var err = err
      ? Object.assign(err, {
          isDifferent: !err.stderr,
        })
      : err;

    callback(err, ok);
  });
};
