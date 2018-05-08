const Assert = require('chai').assert;
const comprobar = require('../solution/funcionParImpar');

describe("comprobar()", () => {

  it("debería retornar si el número dado es par o impar", () => {
    Assert.deepEqual(comprobar(5), "impar");
    Assert.deepEqual(comprobar(66), "par");
    Assert.deepEqual(comprobar(20), "par");
    Assert.deepEqual(comprobar(35), "impar");
  });

});
