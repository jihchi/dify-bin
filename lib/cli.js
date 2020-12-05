#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var dify = require('./').path();
var input = process.argv.slice(2);

spawn(dify, input, { stdio: 'inherit' }).on('exit', process.exit);
