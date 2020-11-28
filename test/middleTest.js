const middle = require('../middle');

console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
