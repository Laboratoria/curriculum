const Assert = require('chai').assert;
const imprimirCirculo = require('../solution/imprimirCirculo');

describe("imprimirCirculo()", () => {

  it("debería retornar ", () => {
    Assert.deepEqual(imprimirCirculo(5), "");
    Assert.deepEqual(imprimirCirculo(66), "");
    Assert.deepEqual(imprimirCirculo(20), "");
    Assert.deepEqual(imprimirCirculo(35), "");
  });

});
