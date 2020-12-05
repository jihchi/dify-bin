# dify-bin 

> [dify](https://github.com/jihchi/dify) is a pixel-by-pixel image diffs tool

## Install

```sh
$ npm install dify-bin
```

## Usage

```js
const dify = require('dify-bin');

dify(['left.jpg', 'right.jpg'], (err, out) => {
  if (err) {
    console.log(err.stderr);
    process.exit(err.code);
    return;
  }
  console.log('diff done!', out.stdout);
});
```

## CLI

```sh
$ npm install --global dify-bin
```

```sh
$ dify --help
```

