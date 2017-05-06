'use strict';

const P = require('./');

const f = P.co(function* () {
  yield P.all([P.delay(2000), P.delay(1000)]);
  return 'pco';
});

f().then(console.log);

