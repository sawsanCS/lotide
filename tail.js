/**
 * Gets all but the first element of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual}!== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual}=== ${expected}`)
  }
}
function tail(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  const [, ...result] = array
  return result
}
const result = tail(["Hello", "Lighthouse", "Labs"])
assertEqual(result.length, 2) // ensure we get back two elements
assertEqual(result[0], "Lighthouse") // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs") // ensure second element is "Labs"

