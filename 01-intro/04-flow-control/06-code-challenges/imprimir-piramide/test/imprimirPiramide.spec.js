const Assert = require('chai').assert;
const imprimirPiramide = require('../solution/imprimirPiramide');

describe("imprimirPiramide()", () => {

  it("debería retornar ", () => {
    Assert.deepEqual(imprimirPiramide(5), "");
    Assert.deepEqual(imprimirPiramide(66), "");
    Assert.deepEqual(imprimirPiramide(20), "");
    Assert.deepEqual(imprimirPiramide(35), "");
  });

});
