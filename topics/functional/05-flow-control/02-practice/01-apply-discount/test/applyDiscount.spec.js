import { assert } from 'chai';
import Sinon from 'sinon';
import Submission from '../solution/applyDiscount.js';


describe('applyDiscount()', () => {

  it('debería de retornar una array nuevo en vez de mutar el array de entrada', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    assert.notEqual(Submission(cart, .2), cart);
  });

  it('debería aplicar descuento esperado', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    assert.deepEqual(
      Submission(cart, .2),
      [{ price: 0.8 }, { price: 1.6 }, { price: 2.4000000000000004 }]
    );
  });

  it('debería usar recursión', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    assert.equal(/(applyDiscount|module\.exports)\(/.test(strippedFnBody), true);
  });

  it('no debería usar for o while', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    assert.equal(/(for|while)\s*\(/g.test(strippedFnBody), false);
  });

  it('no debería usar Array#map, Array#forEach o Array#reduce', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    const mapSpy = Sinon.spy(Array.prototype, 'map');
    const forEachSpy = Sinon.spy(Array.prototype, 'forEach');
    const reduceSpy = Sinon.spy(Array.prototype, 'reduce');
    const result = Submission(cart, .2);
    assert.equal(result.length, 3);
    assert.equal(result[0].price, 0.8);
    assert.equal(result[1].price, 1.6);
    assert.equal(result[2].price, 2.4000000000000004);
    assert.equal(mapSpy.callCount, 0);
    assert.equal(forEachSpy.callCount, 0);
    assert.equal(reduceSpy.callCount, 0);
    mapSpy.restore();
    forEachSpy.restore();
    reduceSpy.restore();
  });

});
