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
console.log(letterPositions("this is my opportunity"));
