if (typeof assert === 'undefined') {
  assert = require('assert');
}

if (typeof makeVowelsUpperCase === 'undefined') {
  makeVowelsUpperCase = require('./makeVowelsUpperCase');
}


describe('makeVowelsUpperCase()', () => {

  it('debería convertir "hola mundo" en "hOlA mUndO"', () => {
    assert.equal(makeVowelsUpperCase('hola mundo'), 'hOlA mUndO');
  });

  it('debería convertir "Betty Snyder Holberton" en "BEtty SnydEr HOlbErtOn"', () => {
    assert.equal(
      makeVowelsUpperCase('Betty Snyder Holberton'),
      'BEtty SnydEr HOlbErtOn'
    );
  });

  it.skip('debería convertir vocales con acento', () => {
    assert.equal(makeVowelsUpperCase('cómo estás?'), 'cÓmO EstÁs?');
  });

});
