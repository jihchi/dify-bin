const path = require('path');
const tap = require('tap');
const dify = require('../');

const fixtures = path.resolve(__dirname, './fixtures/');

tap.test('the same', (t) => {
  const left = path.resolve(fixtures, 'left.jpg');
  const right = path.resolve(fixtures, 'left.jpg');

  dify([left, right], (err, out) => {
    t.notOk(err);
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

tap.test('error', (t) => {
  const left = path.resolve(fixtures, 'left.jpg');
  const right = path.resolve(fixtures, 'donky.png');

  dify([left, right], (err, out) => {
    t.match(
      err.stderr,
      /Error: failed to open right image "[^"]+"\n\nCaused by:\n/
    );
    t.match(err, {
      stdout: '',
      // stderr: '', separate test for this above
      code: 1,
      failed: true,
      killed: false,
      signal: null,
      // cmd: '', // skipped
      timedOut: false,
      isDifferent: false,
    });
    t.notOk(out);
    t.end();
  });
});

tap.test('some different', (t) => {
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
      isDifferent: true,
    });
    t.notOk(out);
    t.end();
  });
});
