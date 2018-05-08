const Assert = require('chai').assert;
const potencia = require('../solution/potenciaDe3');

describe("potencia()", () => {

  it("debería retornar los números que son potencia de 3 menores a 10,000", () => {
    const output = [3, 9, 27, 81, 243, 729, 2187, 6561];
    Assert.deepEqual(potencia(3, 10,000), output);
  });

});
