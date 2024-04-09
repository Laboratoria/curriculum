import { assert } from 'chai';
import max from '../solution/max.js';

describe('max()', () => {
  it('debería retornar el número que sea mayor', () => {
    assert.deepEqual(max(5, 6, 7), 7);
    assert.deepEqual(max(66, 4, 6), 66);
    assert.deepEqual(max(20, 25, 10), 25);
  });
});
