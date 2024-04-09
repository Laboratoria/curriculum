import { assert } from 'chai';
import createArray from '../solution/createArray.js';

describe('createArray()', () => {
  it('debería regresar [1, 2, 3], para ()', () => {
    assert.deepEqual(createArray(), [1, 2, 3]);
  });
});
