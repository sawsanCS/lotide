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
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length ; i++) {
    let c = sentence[i];
    if (results[c] === undefined) {
      results[c] = [];
      results[c].push(i);
    } else {
      results[c].push(i);
    }

  }
  return results;
};
let result = letterPositions("this is my opportunity");
assertArraysEqual(result['t'], [ 0, 16, 20 ]);
