const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/printPrimes');


describe('printPrimes()', () => {

  const stub = Sinon.stub(console, 'log');
  Submission();
  stub.restore();

  it('debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('debería invocar console.log 8 veces', () => {
    Assert.equal(stub.callCount, 8);
  });

  [[2], [3], [5], [7], [11], [13], [17], [19]].forEach((args, idx) => {
    it(`invocación ${idx + 1} a console.log debería recibir "${args[0]}" como único argumento`, () => {
      Assert.deepEqual(args, stub.getCall(idx).args);
    });
  });

});
