const Assert = require('chai').assert;
const isPrime = require('../solution/isPrime');

describe('isPrime(n)', () => {

  it('debería retornar si el número que se da como parámetro es primo o no', () => {
    Assert.deepEqual(isPrime(5), true);
    Assert.deepEqual(isPrime(6), false);
    Assert.deepEqual(isPrime(23), true);
    Assert.deepEqual(isPrime(35), false);
  });

});
