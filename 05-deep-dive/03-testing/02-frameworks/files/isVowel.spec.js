// Arquivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('Debería retornar false para a letra b', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
