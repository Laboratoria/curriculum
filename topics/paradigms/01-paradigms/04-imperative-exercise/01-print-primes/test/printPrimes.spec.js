import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/printPrimes.js';


describe('printPrimes()', () => {

  const stub = Sinon.stub(console, 'log');
  Submission();
  stub.restore();

  it('debería exportar una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('debería invocar console.log 8 veces', () => {
    assert.equal(stub.callCount, 8);
  });

  [[2], [3], [5], [7], [11], [13], [17], [19]].forEach((args, idx) => {
    it(`invocación ${idx + 1} a console.log debería recibir "${args[0]}" como único argumento`, () => {
      assert.deepEqual(args, stub.getCall(idx).args);
    });
  });

});
