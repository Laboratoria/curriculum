const Assert = require('chai').assert;
const evenOrOdd = require('../solution/evenOrOdd');

describe("evenOrOdd(n)", () => {

  it('debería retornar si el número que se pasa como parámetro es par o impar', () => {
    Assert.deepEqual(evenOrOdd(5), 1);
    Assert.deepEqual(evenOrOdd(66), 0);
    Assert.deepEqual(evenOrOdd(20), 0);
    Assert.deepEqual(evenOrOdd(35), 1);
  });

});
