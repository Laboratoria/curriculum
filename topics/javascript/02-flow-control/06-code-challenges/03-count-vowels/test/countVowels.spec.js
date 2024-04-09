import { assert } from 'chai';
import countVowels from '../solution/countVowels.js';

describe('countVowels(string)', () => {
  it('debería retornar cuantas vocales hay en un string', () => {
    assert.deepEqual(countVowels('murcielago'), 5);
    assert.deepEqual(countVowels('sol'), 1);
    assert.deepEqual(countVowels('abecedario'), 6);
  });

  it('debería retornar 0 si el string está vacío', () => {
    assert.deepEqual(countVowels(''), 0);
  });
});
