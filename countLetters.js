const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`)
  }
}
const countLetters = function(ch) {
  let objOfChars = {};
  for (const c of ch) {
    if(objOfChars[c]) {
      objOfChars[c]++;
    } else {
      objOfChars[c] = 1;
    }
  }
  return objOfChars;
}
 console.log(countLetters("this is my opportunity"));
