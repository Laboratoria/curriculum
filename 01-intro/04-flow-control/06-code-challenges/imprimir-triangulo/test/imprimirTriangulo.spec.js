const Assert = require('chai').assert;
const imprimirTriangulo = require('../solution/imprimirTriangulo');

describe("imprimirTriangulo()", () => {

  it("debería retornar ", () => {
    Assert.deepEqual(imprimirTriangulo(5), "");
    Assert.deepEqual(imprimirTriangulo(66), "");
    Assert.deepEqual(imprimirTriangulo(20), "");
    Assert.deepEqual(imprimirTriangulo(35), "");
  });

});
