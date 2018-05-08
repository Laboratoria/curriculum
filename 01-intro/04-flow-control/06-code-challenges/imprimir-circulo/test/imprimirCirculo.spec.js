const Assert = require('chai').assert;
const imprimirCirculo = require('../solution/imprimirCirculo');

describe("imprimirCirculo()", () => {

  it("debería retornar una figura dependiendo del número indicado", () => {
    Assert.deepEqual(imprimirCirculo(7), "");
    Assert.deepEqual(imprimirCirculo(3), "");
  });

});
