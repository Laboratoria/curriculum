// Archivo `isVowel.spec.js`

import isVowel from './isVowel.js';

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    assertEqual(isVowel('a'), true);
  });

  it('debería devolver false para letra b', () => {
    assertEqual(isVowel('b'), false);
  });
});
