import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/logger.js';


describe('logger()', () => {

  it('debería exportar una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('debería combinar namespace + 1 string', () => {
    const info = Submission('INFO:');
    assert.equal(info('this is an info message'), 'INFO: this is an info message');
  });

  it('debería combinar namespace + 2 strings', () => {
    const warn = Submission('WARN:');
    assert.equal(
      warn('this is a warning message', 'with more info'),
      'WARN: this is a warning message with more info'
    );
  });

  it('no debería usar Function.prototype.bind', () => {
    const spy = Sinon.spy(Function.prototype, 'bind');
    Submission('ERROR:')('foo');
    assert.equal(spy.callCount, 0);
    spy.restore();
  });

})
