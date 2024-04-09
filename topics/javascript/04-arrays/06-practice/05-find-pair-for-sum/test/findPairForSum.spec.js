import { assert } from 'chai';
import findPairForSum from '../solution/findPairForSum.js';

describe('findPairForSum()', () => {
  it('debería regresar [0, 1], para ([0, 8, 1, 7, 19, 12, 4], 1)', () => {
    const pair = findPairForSum([0, 8, 1, 7, 19, 12, 4], 1);
    const hasil = [0, 1];

    assert.deepEqual(pair, hasil);
  });

  it('debería regresar [2, 11], para  ([1, 2, 6, 8, 11, 10], 13)', () => {
    const pair = findPairForSum([1, 2, 6, 8, 11, 10], 13);
    const hasil = [2, 11];

    assert.deepEqual(pair, hasil);
  });


  it('debería regresar [4, 5], para ([3, 34, 4, 12, 5, 2], 9)', () => {
    const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
    const hasil = [4, 5];

    assert.deepEqual(pair, hasil);
  });
});
