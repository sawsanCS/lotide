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
assertEqual(countLetters("this is my opportunity"), { t: 3,
  h: 1,
  i: 3,
  s: 2,
  ' ': 3,
  m: 1,
  y: 2,
  o: 2,
  p: 2,
  r: 1,
  u: 1,
  n: 1 }
)
