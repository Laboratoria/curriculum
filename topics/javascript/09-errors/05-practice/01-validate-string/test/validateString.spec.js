import { assert } from 'chai';
import validateString from '../solution/validateString.js';


describe('validateString()', () => {
  it('debería ser una función', () => {
    assert.equal(typeof validateString, 'function');
  });

  it('debería arrojar TypeError cuando argumento no es srting', () => {
    assert.throws(
      () => validateString(),
      TypeError,
      'El argumento str debe ser un string',
    );
  });

  it('debería arrojar RangeError cuando srting tiene menos de 4 caracteres', () => {
    assert.throws(
      () => validateString(''),
      RangeError,
      'El argumento str debe tener al menos 4 caracteres',
    );
  });

  it('debería arrojar RangeError cuando srting tiene más de 10 caracteres', () => {
    assert.throws(
      () => validateString('abcdefghijk'),
      RangeError,
      'El argumento str debe tener un máximo de 10 caracteres',
    );
  });
});
