import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/curryN.js';


describe('curryN()', () => {

  it('debería exportar una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('debería crear cadena de funciones hasta haber agotado todos los argumentos', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    const curryC = Submission(add3);
    const curryB = curryC(1);
    const curryA = curryB(2);

    assert.equal(curryA(3), 6);
    assert.equal(curryA(10), 13);

    assert.equal(Submission(add3)(1)(2)(3), 6);
  });

  it('no debería usar bucles for/while', () => {
    const fnBody = Submission.toString();
    assert.equal(/(for|while)\s*\(/g.test(fnBody), false);
  });

  it('no debería usar forEach', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    const spy = Sinon.spy(Array.prototype, 'forEach');

    assert.equal(Submission(add3)(1)(2)(3), 6);
    assert.equal(spy.callCount, 0);
    spy.restore();
  });

});
