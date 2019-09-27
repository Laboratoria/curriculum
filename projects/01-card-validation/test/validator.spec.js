// importamos el objeto `validator`, que contiene la función `isValid`
import validator from "../src/validator";

describe('validator', () => {

  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {

    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });

  });
});
