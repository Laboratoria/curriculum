const Assert = require('chai').assert;
const countVowels = require('../solution/countVowels');

describe('countVowels(string)', () => {

  it('debería retornar cuantas vocales hay en un string', () => {
    Assert.deepEqual(countVowels('murcielago'), 5);
    Assert.deepEqual(countVowels('sol'), 1);
    Assert.deepEqual(countVowels('abecedario'), 6);
  });

  it('debería retornar 0 si el string está vacío', () => {
    Assert.deepEqual(countVowels(''), 0);
  });

});
