const Assert = require('chai').assert;
const imprimirRombo = require('../solution/imprimirRombo');

describe("imprimirRombo()", () => {

  it("debería retornar ", () => {
    Assert.deepEqual(imprimirRombo(5), "");
    Assert.deepEqual(imprimirRombo(66), "");
    Assert.deepEqual(imprimirRombo(20), "");
    Assert.deepEqual(imprimirRombo(35), "");
  });

});
