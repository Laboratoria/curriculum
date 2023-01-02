const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/logger');


describe('logger()', () => {

  it('debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('debería combinar namespace + 1 string', () => {
    const info = Submission('INFO:');
    Assert.equal(info('this is an info message'), 'INFO: this is an info message');
  });

  it('debería combinar namespace + 2 strings', () => {
    const warn = Submission('WARN:');
    Assert.equal(
      warn('this is a warning message', 'with more info'),
      'WARN: this is a warning message with more info'
    );
  });

  it('no debería usar Function.prototype.bind', () => {
    const spy = Sinon.spy(Function.prototype, 'bind');
    Submission('ERROR:')('foo');
    Assert.equal(spy.callCount, 0);
    spy.restore();
  });

})
