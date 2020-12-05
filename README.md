# dify-bin 

> [dify](https://github.com/jihchi/dify) is a pixel-by-pixel image diffs tool

## Install

```sh
$ npm install dify-bin
```

## Usage

```js
const { execFile } = require('child_process');
const dify = require('dify-bin');

execFile(dify, ['left.jpg', 'right.jpg'], err => {
	console.log('diff done!');
});
```

## CLI

```sh
$ npm install --global dify-bin
```

```sh
$ dify --help
```

