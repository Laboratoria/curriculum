import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/closures.js';


describe('createLogger()', () => {

  it('debería de ser una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('debería de retornar una función', () => {
    assert.equal(typeof Submission(), 'function');
  });

  it('debería de retornar una función que imprime a la consola con el namespace', () => {
    const stub = Sinon.stub(console, 'log');
    const warn = Submission('warning');
    warn('houston, we have a problem');

    assert.equal(stub.callCount, 1);
    assert.equal(stub.getCall(0).args[0], '[warning]: houston, we have a problem');

    stub.restore();
  });

});
