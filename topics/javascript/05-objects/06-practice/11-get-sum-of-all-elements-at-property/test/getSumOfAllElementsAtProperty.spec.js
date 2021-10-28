const { assert } = require('chai');
const getSumOfAllElementsAtProperty = require('../solution/getSumOfAllElementsAtProperty');

describe('getSumOfAllElementsAtProperty()', () => {
  it("debería regresar 0, para { key: Badddlyyyy } y 'key'", () => {
    const obj = {
      koy: 'Badddlyyyy',
    };
    const output = getSumOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 0, para { koy: 'nope' } y 'key'", () => {
    const obj = {
      koy: [],
    };
    const output = getSumOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 0, para { key: [] } y 'key'", () => {
    const obj = {
      key: [],
    };
    const output = getSumOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 35, para { key: [10, 11, 15, -1] } y 'key'", () => {
    const obj = {
      key: [10, 11, 15, -1],
    };
    const output = getSumOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 35);
  });

  it("debería regresar 13, para { key: [4, 1, 8] } y 'key'", () => {
    const obj = {
      key: [4, 1, 8],
    };
    const output = getSumOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 13);
  });
});
