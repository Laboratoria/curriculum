const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/curryN');


describe('curryN()', () => {

  it('debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('debería crear cadena de funciones hasta haber agotado todos los argumentos', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    const curryC = Submission(add3);
    const curryB = curryC(1);
    const curryA = curryB(2);

    Assert.equal(curryA(3), 6);
    Assert.equal(curryA(10), 13);

    Assert.equal(Submission(add3)(1)(2)(3), 6);
  });

  it('no debería usar bucles for/while', () => {
    const fnBody = Submission.toString();
    Assert.equal(/(for|while)\s*\(/g.test(fnBody), false);
  });

  it('no debería usar forEach', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    const spy = Sinon.spy(Array.prototype, 'forEach');

    Assert.equal(Submission(add3)(1)(2)(3), 6);
    Assert.equal(spy.callCount, 0);
    spy.restore();
  });

});
