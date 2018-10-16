
const Assert = require('chai').assert;
const getLargestNumberAmongMixedElements = require('../solution/getLargestNumberAmongMixedElements');

describe('getLargestNumberAmongMixedElements()', () => {
  it("debería regresar 0, para  (['wat', 'no', true, true])", () => {
    const output = getLargestNumberAmongMixedElements(['wat', 'no', true, true]);
    Assert.deepEqual(output, 0);
  });

  it('debería regresar 0, para ([])', () => {
    const output = getLargestNumberAmongMixedElements([]);
    Assert.deepEqual(output, 0);
  });


  it("debería regresar 5, para ([3, 'word', 5, 'up', 3, 1])", () => {
    const output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
    Assert.deepEqual(output, 5);
  });
});
