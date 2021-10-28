const { assert } = require('chai');
const findShortestWordAmongMixedElements = require('../solution/findShortestWordAmongMixedElements');

describe('findShortestWordAmongMixedElements()', () => {
  it("debería regresar '', para  ([3, 4, 5])", () => {
    const output = findShortestWordAmongMixedElements([3, 4, 5]);
    assert.deepEqual(output, '');
  });

  it("debería regresar '', para ([])", () => {
    const output = findShortestWordAmongMixedElements([]);
    assert.deepEqual(output, '');
  });


  it("debería regresar 'yes', para ([1, 2, 3, 'yes', 'one')", () => {
    const output = findShortestWordAmongMixedElements([1, 2, 3, 'yes', 'one']);
    assert.deepEqual(output, 'yes');
  });


  it("debería regresar 'two', para [4, 'two', 2, 'three'])", () => {
    const output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
    assert.deepEqual(output, 'two');
  });
});
