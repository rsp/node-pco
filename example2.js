'use strict';

const { P, co } = require('./');

const f = co(function* () {
  yield P.all([P.delay(2000), P.delay(1000)]);
  return 'pco';
});

f().then(console.log);

