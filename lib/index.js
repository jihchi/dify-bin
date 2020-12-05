'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');

var url = 'https://github.com/jihchi/dify/releases/download/v' + pkg.version;

module.exports = new BinWrapper()
	.src(url + 'dify-Darwin-x86_64.tar.gz', 'darwin')
	.src(url + 'dify-Linux-x86_64.tar.gz', 'linux', 'x86')
	.src(url + 'dify-Linux-x86_64.tar.gz', 'linux', 'x64')
	.src(url + 'dify-Windows-x86_64.zip', 'win32', 'x86')
	.src(url + 'dify-Windows-x86_64.zip', 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'dify.exe' : 'dify');