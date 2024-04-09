import { assert } from 'chai';
import areOdd from '../solution/areOdd.js';

describe('areOdd()', () => {
  it('debería retornar true si ambos números son pares', () => {
    assert.deepEqual(areOdd(22, 10), true);
    assert.deepEqual(areOdd(12, 5), false);
    assert.deepEqual(areOdd(16, 8), true);
    assert.deepEqual(areOdd(33, 15), false);
  });
});
