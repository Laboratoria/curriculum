const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/closures');


describe('createLogger()', () => {

  it('debería de ser una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('debería de retornar una función', () => {
    Assert.equal(typeof Submission(), 'function');
  });

  it('debería de retornar una función que imprime a la consola con el namespace', () => {
    const stub = Sinon.stub(console, 'log');
    const warn = Submission('warning');
    warn('houston, we have a problem');

    Assert.equal(stub.callCount, 1);
    Assert.equal(stub.getCall(0).args[0], '[warning]: houston, we have a problem');

    stub.restore();
  });

});
