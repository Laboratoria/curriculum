import { assert } from 'chai';
import Sinon from 'sinon';
import * as Submission from '../solution/boundLogger.js';


describe('with bind', () => {

  it('debería exportar log() y logger()', () => {
    assert.equal(typeof Submission.log, 'function');
    assert.equal(typeof Submission.logger, 'function');
  });

  describe('log()', () => {

    [
      [['foo'], 'foo'],
      [['foo', 'foo'], 'foo foo'],
      [['foo', 'bar', 'baz'], 'foo bar baz'],
      [['foo', 'bar', 'baz', 1, 2, 3], 'foo bar baz 1 2 3'],
    ].forEach(pair => {
      it(`debería retornar "${pair[1]}" para [${pair[0]}]`, () => {
        assert.equal(Submission.log.apply(null, pair[0]), pair[1]);
      });
    });

  });

  describe('logger()', () => {

    it('debería combinar namespace + 1 string', () => {
      const info = Submission.logger('INFO:');
      assert.equal(info('this is an info message'), 'INFO: this is an info message');
    });

    it('debería combinar namespace + 2 strings', () => {
      const warn = Submission.logger('WARN:');
      assert.equal(
        warn('this is a warning message', 'with more info'),
        'WARN: this is a warning message with more info'
      );
    });

    it('debería usar Function.prototype.bind', () => {
      const spy = Sinon.spy(Function.prototype, 'bind');
      Submission.logger('ERROR:')('foo');
      assert.equal(spy.callCount, 1);
      assert.equal(spy.args[0][0], null);
      assert.equal(spy.args[0][1], 'ERROR:');
      spy.restore();
    });

  });

})
