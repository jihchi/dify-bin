#!/usr/bin/env node
'use strict';

var dify = require('./lib');
var input = process.argv.slice(2);

dify.run(input, function (err, out) {
  if (err) {
    console.error(err.stderr);
    process.exit(err.code);
    return;
  }
  console.log(out.stdout);
});
