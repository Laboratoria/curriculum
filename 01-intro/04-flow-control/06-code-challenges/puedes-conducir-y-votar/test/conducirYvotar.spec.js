const Assert = require('chai').assert;
const comprobar = require('../solution/conducirYvotar');

describe("comprobar()", () => {

  it("debería retornar true si cumple con ambas condiciones (16 años o más y 18 años o más), en caso contrario retornar false.", () => {
    Assert.deepEqual(comprobar(25), true);
    Assert.deepEqual(comprobar(12), false);
    Assert.deepEqual(comprobar(16), false);
  });

});
