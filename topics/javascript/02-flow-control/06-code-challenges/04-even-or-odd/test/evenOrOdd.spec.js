import { assert } from 'chai';
import evenOrOdd from '../solution/evenOrOdd.js';

describe('evenOrOdd(n)', () => {
  it('debería retornar si el número que se pasa como parámetro es par o impar', () => {
    assert.deepEqual(evenOrOdd(5), 1);
    assert.deepEqual(evenOrOdd(66), 0);
    assert.deepEqual(evenOrOdd(20), 0);
    assert.deepEqual(evenOrOdd(35), 1);
  });
});
