const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/applyDiscount');


describe('applyDiscount()', () => {

  it('debería de retornar una array nuevo en vez de mutar el array de entrada', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    Assert.notEqual(Submission(cart, .2), cart);
  });

  it('debería aplicar descuento esperado', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    Assert.deepEqual(
      Submission(cart, .2),
      [{ price: 0.8 }, { price: 1.6 }, { price: 2.4000000000000004 }]
    );
  });

  it('debería usar recursión', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    Assert.equal(/(applyDiscount|module\.exports)\(/.test(strippedFnBody), true);
  });

  it('no debería usar for o while', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    Assert.equal(/(for|while)\s*\(/g.test(strippedFnBody), false);
  });

  it('no debería usar Array#map, Array#forEach o Array#reduce', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    const mapSpy = Sinon.spy(Array.prototype, 'map');
    const forEachSpy = Sinon.spy(Array.prototype, 'forEach');
    const reduceSpy = Sinon.spy(Array.prototype, 'reduce');
    const result = Submission(cart, .2);
    Assert.equal(result.length, 3);
    Assert.equal(result[0].price, 0.8);
    Assert.equal(result[1].price, 1.6);
    Assert.equal(result[2].price, 2.4000000000000004);
    Assert.equal(mapSpy.callCount, 0);
    Assert.equal(forEachSpy.callCount, 0);
    Assert.equal(reduceSpy.callCount, 0);
    mapSpy.restore();
    forEachSpy.restore();
    reduceSpy.restore();
  });

});
