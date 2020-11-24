/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `pull`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
 * @example
 *
 * without([2, 1, 2, 3], 1, 2)
 * // => [3]
 */
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
function without(arr1, arr2) {
  let newArr = [];
  for (const a of arr1) {
    if (!arr2.includes(a)) {
      newArr.push(a);
    }
  }
  return newArr;

}
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [5, 3]), true);


