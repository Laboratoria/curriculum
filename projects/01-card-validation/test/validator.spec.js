describe('validator', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof validator, 'object');
  });

  describe('validator.isValid', () => {

    it('debería ser una función', () => {
      assert.equal(typeof validator.isValid, 'function');
    });

    it('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    });

    it('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });
    
  });
});
