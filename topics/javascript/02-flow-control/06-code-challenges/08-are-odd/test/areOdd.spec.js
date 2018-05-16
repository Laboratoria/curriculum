const Assert = require('chai').assert;
const areOdd = require('../solution/areOdd');

describe('areOdd()', () => {

  it('debería retornar true si ambos números son pares', () => {
    Assert.deepEqual(areOdd(22, 10), true);
    Assert.deepEqual(areOdd(12, 5), false);
    Assert.deepEqual(areOdd(16, 8), true);
    Assert.deepEqual(areOdd(33, 15), false);
  });

});
