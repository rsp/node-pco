'use strict';

const Bluebird = require('bluebird');

const P = function (resolver) {
  return new Bluebird(resolver);
};

Object.keys(Bluebird).forEach((key) => {
  P[key] = Bluebird[key];
});

P.co = Bluebird.coroutine;

module.exports = P; 

