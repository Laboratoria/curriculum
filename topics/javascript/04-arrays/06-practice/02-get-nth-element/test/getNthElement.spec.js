import { assert } from 'chai';
import getNthElement from '../solution/getNthElement.js';

describe('getNthElement()', () => {
  it('debería regresar undefined, para array vacío', () => {
    const arr = [];
    assert.deepEqual(getNthElement(arr, 1), undefined);
  });

  it('debería regresar 2, para getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 100, 7, 9];
    assert.deepEqual(getNthElement(arr, 1), 2);
  });
});
