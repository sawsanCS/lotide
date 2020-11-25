const eqArrays = function(arr1, arr2) {
  let compare = true;
  for (let i = 0 ; i < arr1.length;  i++) {
    if (arr1[i]!== arr2[i]) {
      compare = false;

    }
  }
 return (arr1.length !== arr2.length) ? false : compare;

}
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {return false;}

  for (const o1  in object1) {
    if (Array.isArray(object1[o1])) {return eqArrays(object1[o1], object2[o1]);}
    else {
      if (object2[o1] !== object1[o1]) {
        return false;
      }
    }

  }
  for (const o2  in object2) {
    if (Array.isArray(object1[o2])) {return eqArrays(object1[o2], object2[o2]);}
    else {
      if (object2[o2] !== object1[o2]) {
        return false;
      }
    }

  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {

  // Implement me!
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`)
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

