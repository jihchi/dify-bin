# dify-bin 

[![npm version](https://img.shields.io/npm/v/dify-bin.svg)](https://www.npmjs.com/package/dify-bin) 
[![npm downloads](https://img.shields.io/npm/dm/dify-bin.svg)](https://www.npmjs.com/package/dify-bin) 

> [dify](https://github.com/jihchi/dify) is a fast pixel-by-pixel image comparison tool in Rust.

## Install

```sh
$ npm install dify-bin
```

## Usage

```js
const dify = require('dify-bin');

dify(['--output', 'diff.png', 'left.jpg', 'right.jpg'], (err, out) => {
  if (err) {
    if (err.isDifferent) {
      console.log('Changes detected');
    } else {
      console.error(err.stderr);
    }
    process.exit(err.code);
    return;
  }
  console.log('No changes detected', out.stdout);
});
```

## CLI

### npx

```sh
npx dify-bin --help
```

### Installation 
```sh
npm install --global dify-bin
```

```sh
dify --help
```

