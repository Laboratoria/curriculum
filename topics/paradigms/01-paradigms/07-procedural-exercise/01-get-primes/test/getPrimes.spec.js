const Assert = require('chai').assert;
const Submission = require('../solution/getPrimes');


describe('getPrimes(start, end)', () => {

  it('debería exportar función `getPrimes`', () => {
    Assert.equal(typeof Submission.getPrimes, 'function');
  });

  it('debería retornar los número primos menores de 20', () => {
    Assert.deepEqual(Submission.getPrimes(2, 20), [2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it('debería retornar los número primos entre 50 y 100', () => {
    Assert.deepEqual(Submission.getPrimes(50, 100), [53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

});


describe('isPrime(num)', () => {

  it('debería exportar función `isPrime`', () => {
    Assert.equal(typeof Submission.isPrime, 'function');
  });

  it('debería retornar true para 2, 3, 5, 13, 89', () => {
    [2, 3, 5, 13, 89].forEach(n => Assert.deepEqual(Submission.isPrime(n), true));
  });

  it('debería retornar false para ', () => {
    [4, 10, 99, 411].forEach(n => Assert.deepEqual(Submission.isPrime(n), false));
  });

  it('debería retornar los número primos entre 50 y 100', () => {
    Assert.deepEqual(Submission.getPrimes(50, 100), [53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

});
