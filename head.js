/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual}!== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual}=== ${expected}`)
  }
}

function head(array) {
  return (array != null && array.length)
    ? array[0]
    : undefined
}
assertEqual(head([3,2,3]), 3)

