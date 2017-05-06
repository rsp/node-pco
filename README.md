pco
=
Shortcuts for Bluebird's Promise.coroutine

Example
-
```js
const P = require('pco');

const f = P.co(function* () {
  yield P.delay(2000);
  return 10;
});

f().then(console.log);
```

Or:
```js
const { P, co } = require('pco');

const f = co(function* () {
  yield P.delay(2000);
  return 'pco';
});

f().then(console.log);
```

TODO
-
Add better docs

