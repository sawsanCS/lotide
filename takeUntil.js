const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`)
  }
}

const eqArrays = function(arr1, arr2) {
  let compare = true;
  for (let i = 0 ; i < arr1.length;  i++) {
    if (arr1[i]!== arr2[i]) {
      compare = false;

    }
  }
 return (arr1.length !== arr2.length) ? false : compare;
}
const takeUntil = function(array, callback) {
  // ...
  let returnArr = [];
  for (const a of array) {
    if (callback(a)) {
      return returnArr;
    }
    returnArr.push(a);
  }
  return returnArr;

}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual( results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
