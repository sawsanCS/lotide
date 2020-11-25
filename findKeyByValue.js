const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`)
  }
}
const findKeyByValue = function(obj, key) {
  for (const o in obj) {
    if(obj[o] === key) {
      return o;
    }
  }
  return undefined;
}
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
