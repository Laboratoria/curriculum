import { assert } from 'chai';
import computeSumOfAllElements from '../solution/computeSumOfAllElements.js';

describe('computeSumOfAllElements()', () => {
  it('debería regresar 0, para  ([1, 2, 3])', () => {
    const output = computeSumOfAllElements([1, 2, 3]);
    assert.deepEqual(output, 6);
  });

  it('debería regresar 169, para ([10, 90, 69])', () => {
    const output = computeSumOfAllElements([10, 90, 69]);

    assert.deepEqual(output, 169);
  });


  it('debería regresar 28, para ([4, 5, 10, 9])', () => {
    const output = computeSumOfAllElements([4, 5, 10, 9]);
    assert.deepEqual(output, 28);
  });
});
