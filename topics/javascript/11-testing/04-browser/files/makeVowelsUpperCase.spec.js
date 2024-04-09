// TODO what is different about this case?
import { assert } from 'chai';
import makeVowelsUpperCase from './makeVowelsUpperCase.js';

describe('makeVowelsUpperCase()', () => {
  it('debería convertir "hola mundo" en "hOlA mUndO"', () => {
    assert.equal(makeVowelsUpperCase('hola mundo'), 'hOlA mUndO');
  });

  it('debería convertir "Betty Snyder Holberton" en "BEtty SnydEr HOlbErtOn"', () => {
    assert.equal(
      makeVowelsUpperCase('Betty Snyder Holberton'),
      'BEtty SnydEr HOlbErtOn',
    );
  });

  it.skip('debería convertir vocales con acento', () => {
    assert.equal(makeVowelsUpperCase('cómo estás?'), 'cÓmO EstÁs?');
  });
});
