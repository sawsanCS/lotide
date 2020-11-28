const tail = require('../tail')
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [6,5] for [5]", () => {
    assert.strictEqual(head([6,5]), [5]);
  });

});
