'use strict';

const Bluebird = require('bluebird');

const P = function (resolver) {
  return new Bluebird(resolver);
};

Object.keys(Bluebird).forEach((key) => {
  P[key] = Bluebird[key];
});

['co', 'Co', 'c', 'C']
  .forEach((key) => {
    P[key] = Bluebird.coroutine;
  });

['P', 'p', 'Promise', 'promise', 'B', 'b', 'Bluebird', 'bluebird']
  .forEach((key) => {
    P[key] = P;
  });

module.exports = P; 
