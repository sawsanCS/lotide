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
const middle = function(array) {
  return (array.length === 0 ||array.length === 1 || array.length === 2)?
   [] : (array.length%2 ===1)?
    [array[Math.floor(array.length/2)]]: [array[Math.floor(array.length/2)-1],array[Math.floor(array.length/2)]]
}
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);

