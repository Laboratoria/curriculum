const Assert = require('chai').assert;
const imprimir = require('../solution/imprimirTrianguloNumeros');

describe("imprimir()", () => {

  it("debería retornar ", () => {
    Assert.deepEqual(imprimir(5), "");
    Assert.deepEqual(imprimir(66), "");
    Assert.deepEqual(imprimir(20), "");
    Assert.deepEqual(imprimir(35), "");
  });

});
