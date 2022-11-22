'use strict';


const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/reduce');


describe('reduce()', () => {

  it('debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('debería comportarse como reduce con array de números y valor inicial numérico', () => {
    Assert.equal(Submission([1, 2, 3], (prev, curr, index, arr) => {
      return prev + curr;
    }, 0), 6);
  });

  it('debería comportarse como reduce con array de strings y valor inicial objeto', () => {
    Assert.deepEqual(Submission(['foo', 'bar', 'foo', 'baz', 'foo'], (memo, curr) => {
      memo[curr] = (memo[curr]) ? memo[curr] + 1 : 1;
      return memo;
    }, {}), { foo: 3, bar: 1, baz: 1 });
  });

  // it('debería usar recursión', () => {
  //   const fnBody = Function.prototype.toString.call(Submission);
  //   // strip comments from source code
  //   const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
  //   console.log(strippedFnBody);
  //   Assert.equal(/(reduce|module\.exports)\(/.test(strippedFnBody), true);
  // });

  it('no debería usar for, while no Array#forEach', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    Assert.equal(/(for|while)\s*\(/g.test(strippedFnBody), false);
    Assert.equal(/\.forEach\(/g.test(strippedFnBody), false);
  });

  it('no debería usar Array#map o Array#reduce', () => {
    const cart = [{ price: 1 }, { price: 2 }, { price: 3 }];
    const mapSpy = Sinon.spy(Array.prototype, 'map');
    // const forEachSpy = Sinon.spy(Array.prototype, 'forEach');
    const reduceSpy = Sinon.spy(Array.prototype, 'reduce');

    Submission([1, 2, 3], (prev, curr, index, arr) => {
        return prev + curr;
      }, 0)
    Assert.equal(mapSpy.callCount, 0);
    // Assert.equal(forEachSpy.callCount, 0);
    Assert.equal(reduceSpy.callCount, 0);
    mapSpy.restore();
    // forEachSpy.restore();
    reduceSpy.restore();
  });

});
