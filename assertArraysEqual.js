const assertArraysEqual = function(actual, expected) {
  if (!assertEqual(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`)
  }
}
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
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
assertArraysEqual(eqArrays([1, 2, 3], [1, 5, 3]), true);
