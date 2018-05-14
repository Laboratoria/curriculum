const Assert = require('chai').assert;
const esPrimo = require('../solution/numeroPrimo');

describe("esPrimo()", () => {

  it("debería retornar si el número que se da como parámetro es primo o no", () => {
    Assert.deepEqual(esPrimo(5), true);
    Assert.deepEqual(esPrimo(6), false);
    Assert.deepEqual(esPrimo(23), true);
    Assert.deepEqual(esPrimo(35), false);
  });

});
