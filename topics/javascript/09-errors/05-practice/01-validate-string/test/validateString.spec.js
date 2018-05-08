const Assert = require('chai').assert;
const validateString = require('../solution/validateString');


describe('validateString()', () => {

  it('debería ser una función', () => {
    Assert.equal(typeof validateString, 'function');
  });

  it('debería arrojar TypeError cuando argumento no es srting', () => {
    Assert.throws(
      () => validateString(),
      TypeError,
      'El argumento str debe ser un string'
    );
  });

  it('debería arrojar RangeError cuando srting tiene menos de 4 caracteres', () => {
    Assert.throws(
      () => validateString(''),
      RangeError,
      'El argumento str debe tener al menos 4 caracteres'
    );
  });

  it('debería arrojar RangeError cuando srting tiene más de 10 caracteres', () => {
    Assert.throws(
      () => validateString('abcdefghijk'),
      RangeError,
      'El argumento str debe tener un máximo de 10 caracteres'
    );
  });

});
