const Assert = require('chai').assert;
const sonPares = require('../solution/sonPares');

describe("sonPares()", () => {

  it("debería retornar true si ambos numeros son pares", () => {
    Assert.deepEqual(sonPares(22, 10), true);
    Assert.deepEqual(sonPares(12, 5), false);
    Assert.deepEqual(sonPares(16, 8), true);
    Assert.deepEqual(sonPares(33, 15), false);
  });

});
