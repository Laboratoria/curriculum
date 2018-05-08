describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.typeOf(cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.typeOf(cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"),
      "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar " !@" para " !@"', () => {
      assert.equal(cipher.encode(33, ' !@'),
    ' !@')
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.typeOf(cipher.decode, 'function'); 
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz"  para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),
      "abcdefghijklmnopqrstuvwxyz");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.typeOf(cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () =>{
      const cipherWithOffset = cipher.createCipherWithOffset(33);
      assert.typeOf(cipherWithOffset, 'object');
      assert.typeOf(cipherWithOffset.encode, 'function');
      assert.typeOf(cipherWithOffset.decode, 'function');
    });

    describe('createCipherWithOffset.encode', () => {
      const cipherWithOffset = cipher.createCipherWithOffset(33);
      it('debería retornar "HIJK" para "ABCD"  con offset 33', () => {
        assert.equal(cipherWithOffset.encode('ABCD'),
         'HIJK');
      });
      it('debería retornar "hijk" para "abcd"  con offset 33', () => {
        assert.equal(cipherWithOffset.encode('abcd'),
         'hijk');
      });
    });
    describe('createCipherWithOffset.decode', () => {
      const cipherWithOffset = cipher.createCipherWithOffset(33);
      it('debería retornar "ABCD" para "HIJK" con offset 33', () => {
        assert.equal(cipherWithOffset.decode('HIJK'),
        'ABCD');
      });
      it('debería retornar "abcd" para "hijk"  con offset 33', () => {
        assert.equal(cipherWithOffset.encode('abcd'),
         'hijk');
      });
    })
  });
});
