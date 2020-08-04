const { assert } = require('chai');
const getProductOfAllElementsAtProperty = require('../solution/getProductOfAllElementsAtProperty');

describe('getProductOfAllElementsAtProperty()', () => {
  it("debería regresar 0, para { koy: [1, 2, 3] } y 'key'", () => {
    const obj = {
      koy: [1, 2, 3],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 0, para { key: 'nope' } y 'key'", () => {
    const obj = {
      key: 'nope',
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 0, para { key: [] } y 'key'", () => {
    const obj = {
      key: [],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 0);
  });

  it("debería regresar 24, para { key: [1, 2, 3, 4] } y 'key'", () => {
    const obj = {
      key: [1, 2, 3, 4],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 24);
  });

  it("debería regresar 60, para { key: [1, 5, 6, 2, 1] } y 'key'", () => {
    const obj = {
      key: [1, 5, 6, 2, 1],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    assert.deepEqual(output, 60);
  });
});
