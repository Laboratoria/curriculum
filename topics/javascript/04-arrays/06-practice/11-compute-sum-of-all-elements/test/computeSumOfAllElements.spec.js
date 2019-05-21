
const Assert = require('chai').assert;
const computeSumOfAllElements = require('../solution/computeSumOfAllElements');

describe('computeSumOfAllElements()', () => {
  it('deve devolver 0, para  ([1, 2, 3])', () => {
    const output = computeSumOfAllElements([1, 2, 3]);
    Assert.deepEqual(output, 6);
  });

  it('deve devolver 169, para ([10, 90, 69])', () => {
    const output = computeSumOfAllElements([10, 90, 69]);

    Assert.deepEqual(output, 169);
  });


  it('deve devolver 28, para ([4, 5, 10, 9])', () => {
    const output = computeSumOfAllElements([4, 5, 10, 9]);
    Assert.deepEqual(output, 28);
  });
});
