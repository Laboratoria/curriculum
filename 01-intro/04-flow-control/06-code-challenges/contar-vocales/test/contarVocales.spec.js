const Assert = require('chai').assert;
const contar = require('../solution/contarVocales');

describe("contar()", () => {

  it("debería retornar cuantas vocales hay en un string", () => {
    Assert.deepEqual(contar("murcielago"), 5);
    Assert.deepEqual(contar("sol"), 1);
    Assert.deepEqual(contar("abecedario"), 6);
  });

  it("debería retornar '' si no se le ingresa ningun parametro", () => {
    Assert.deepEqual(convertir(""), '');
  });

});
