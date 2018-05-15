
const Assert = require('chai').assert;
const getNthElement = require('../solution/getNthElement');

describe('getNthElement()', () => {
  it('debería regresar undefined, para array vacío', () => {
    const arr = [];
    Assert.deepEqual(getNthElement(arr, 1), undefined);
  });

  it('debería regresar 2, para getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 100, 7, 9];
    Assert.deepEqual(getNthElement(arr, 1), 2);
  });
});
