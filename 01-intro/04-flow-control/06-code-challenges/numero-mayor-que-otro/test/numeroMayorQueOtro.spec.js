const Assert = require('chai').assert;
const esMayor = require('../solution/numeroMayorQueOtro');

describe("esMayor()", () => {

  it("debería retornar el número que sea mayor", () => {
    Assert.deepEqual(esMayor(5, 6, 7), 7);
    Assert.deepEqual(esMayor(66, 4, 6), 66);
    Assert.deepEqual(esMayor(20, 25, 10), 25);
  });

});
