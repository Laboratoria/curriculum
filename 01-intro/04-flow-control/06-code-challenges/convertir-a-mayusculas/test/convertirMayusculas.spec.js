const Assert = require('chai').assert;
const convertir = require('../solution/convertirMayusculas');

describe("convertir()", () => {

  it("debería retornar en mayúsculas la primer y última letra de un string", () => {
    Assert.deepEqual(convertir("murcielago"), "MurcielagO");
    Assert.deepEqual(convertir("sol"), "SoL");
    Assert.deepEqual(convertir("abecedario"), "AbecedariO");
  });

  it("debería retornar '' si no se le ingresa ningún parametro", () => {
    Assert.deepEqual(convertir(""), '');
  });

}); 
