import { assert } from 'chai';
import isPrime from '../solution/isPrime.js';

describe('isPrime(n)', () => {
  it('debería retornar si el número que se da como parámetro es primo o no', () => {
    assert.deepEqual(isPrime(5), true);
    assert.deepEqual(isPrime(6), false);
    assert.deepEqual(isPrime(23), true);
    assert.deepEqual(isPrime(35), false);
  });
});
