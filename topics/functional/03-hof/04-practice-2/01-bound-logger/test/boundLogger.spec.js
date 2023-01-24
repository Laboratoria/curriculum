const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/boundLogger');


describe('with bind', () => {

  it('debería exportar log() y logger()', () => {
    Assert.equal(typeof Submission.log, 'function');
    Assert.equal(typeof Submission.logger, 'function');
  });

  describe('log()', () => {

    [
      [['foo'], 'foo'],
      [['foo', 'foo'], 'foo foo'],
      [['foo', 'bar', 'baz'], 'foo bar baz'],
      [['foo', 'bar', 'baz', 1, 2, 3], 'foo bar baz 1 2 3'],
    ].forEach(pair => {
      it(`debería retornar "${pair[1]}" para [${pair[0]}]`, () => {
        Assert.equal(Submission.log.apply(null, pair[0]), pair[1]);
      });
    });

  });

  describe('logger()', () => {

    it('debería combinar namespace + 1 string', () => {
      const info = Submission.logger('INFO:');
      Assert.equal(info('this is an info message'), 'INFO: this is an info message');
    });

    it('debería combinar namespace + 2 strings', () => {
      const warn = Submission.logger('WARN:');
      Assert.equal(
        warn('this is a warning message', 'with more info'),
        'WARN: this is a warning message with more info'
      );
    });

    it('debería usar Function.prototype.bind', () => {
      const spy = Sinon.spy(Function.prototype, 'bind');
      Submission.logger('ERROR:')('foo');
      Assert.equal(spy.callCount, 1);
      Assert.equal(spy.args[0][0], null);
      Assert.equal(spy.args[0][1], 'ERROR:');
      spy.restore();
    });

  });

})
