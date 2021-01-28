const t = require('tap');
const path = require('path');
const dify = require('../');

const fixtures = path.resolve(__dirname, './fixtures/');

t.test('the same', (t) => {
  const left = path.resolve(fixtures, 'left.jpg');
  const right = path.resolve(fixtures, 'left.jpg');

  dify([left, right], (err, out) => {
    t.error(err);
    t.match(out, {
      stdout: '',
      stderr: '',
      code: 0,
      failed: false,
      killed: false,
      signal: null,
      // cmd: '', // skipped
      timedOut: false,
    });
    t.end();
  });
});

t.test('some different', (t) => {
  const left = path.resolve(fixtures, 'left.jpg');
  const right = path.resolve(fixtures, 'right.jpg');

  dify([left, right], (err, out) => {
    t.match(err, {
      stdout: '',
      stderr: '',
      code: 107,
      failed: true,
      killed: false,
      signal: null,
      // cmd: '', // skipped
      timedOut: false,
    });
    t.notOk(out);
    t.end();
  });
});
