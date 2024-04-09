// Archivo `isVowel.spec.js`

import isVowel from './isVowel.js';

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('debería devolver false para letra b', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
});
