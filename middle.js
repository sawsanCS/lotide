const middle = function(array) {
  return (array.length === 0 ||array.length === 1 || array.length === 2)?
   [] : (array.length%2 ===1)?
    [array[Math.floor(array.length/2)]]: [array[Math.floor(array.length/2)-1],array[Math.floor(array.length/2)]]
}
module.exports = middle;

