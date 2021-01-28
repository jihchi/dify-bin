# dify-bin 

[![npm version](https://img.shields.io/npm/v/dify-bin.svg)](https://www.npmjs.com/package/dify-bin) 
[![npm downloads](https://img.shields.io/npm/dm/dify-bin.svg)](https://www.npmjs.com/package/dify-bin) 

> [dify](https://github.com/jihchi/dify) is a pixel-by-pixel image diffs tool

## Install

```sh
$ npm install dify-bin
```

## Usage

```js
const dify = require('dify-bin');

dify(['left.jpg', 'right.jpg', '--output', 'diff.png'], (err, out) => {
  if (err && !err.stderr) {
    console.log('Changes detected');
    return;
  }
  if (err) {
    console.error(err.stderr);
    process.exit(err.code);
    return;
  }
  console.log('No changes detected', out.stdout);
});
```

## CLI

```sh
$ npm install --global dify-bin
```

```sh
$ dify --help
```

