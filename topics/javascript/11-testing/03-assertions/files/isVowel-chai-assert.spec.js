// Archivo `isVowel.spec.js`

import { assert } from 'chai';
import isVowel from './isVowel.js';

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra b', () => {
    assert.equal(isVowel('b'), false);
  });
});
