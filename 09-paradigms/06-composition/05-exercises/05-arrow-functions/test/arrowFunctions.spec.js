'use strict';

const Assert = require('chai').assert;
const { getShortMessages, repeat, doubleAll, countWords } = require('../solution/arrowFunctions');

const message = (_ => {
  return Assert.deepEqual(getShortMessages([{
      message: 'Tempor quis esse consequat sunt ea eiusmod.'
    }, {
      message: 'Id culpgetShortMessages.speca ad proident ad nulla laborum incididunt. Blah blah'
    }, {
      message: 'Ullamco in ea et ad anim anim ullamco est.'
    }, {
      message: 'Est ut irure irure nisi.'
    }]), [
      'Tempor quis esse consequat sunt ea eiusmod.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.'
    ]);
});

describe('Arrow functions', () => {

  describe('getShortMessages()', () => {

    it('debería retornar [] cuando input array es []', () => {
      Assert.deepEqual(getShortMessages([]), []);
    });

    it('debería retornar arreglo de strings con mensajes de menos de 50 chars', () => {
      message();
    });

    it('NO debería usar for o while', () => {
      Assert.equal(/(for|while)\s+\(/g.test(getShortMessages.toString()), false);
    });

    it('debería invocar Array.prototype.filter', () => {
      const filter = Array.prototype.filter;
      let filterCount = 0;

      Array.prototype.filter = function (fn) {
        filterCount++;
        return filter.call(this, function () {
          return fn.apply(null, Array.prototype.slice.call(arguments));
        });
      };

      message();
      Assert.equal(filterCount, 1);

      Array.prototype.filter = filter;
    });

    it('debería invocar Array.prototype.map', () => {
      const map = Array.prototype.map;
      let mapCount = 0;

      Array.prototype.map = function (fn) {
        mapCount++;
        return map.call(this, function () {
          return fn.apply(null, Array.prototype.slice.call(arguments));
        });
      };

      message();

      Assert.equal(mapCount, 1);

      Array.prototype.map = map;
    });

  });

  describe('repeat', () => {

    it('debería exportar una función', () => {
      Assert.equal(typeof repeat, 'function');
    });

    it('debería invocar la operación num veces', () => {
      let count = 0;
      repeat( _ => count++, 3);
      Assert.equal(count, 3);
    });

  });

  describe('doubleAll()', () => {

    it('debería retornar array con números multiplicados por 2', () => {
      Assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
    });

    it('NO debería modificar array de entrada', () => {
      const input = [1, 2, 3];
      Assert.deepEqual(doubleAll(input), [2, 4, 6]);
      Assert.deepEqual(input, [1, 2, 3]);
    });

    it('NO debería usar for o while', () => {
      Assert.equal(/(for|while)\s+\(/g.test(doubleAll.toString()), false);
    });

    it('debería invocar Array.prototype.map', () => {
      const map = Array.prototype.map;
      let mapCount = 0;
      let operationCount = 0;

      Array.prototype.map = function (fn) {
        mapCount++;
        return map.call(this, function () {
          operationCount++;
          return fn.apply(null, Array.prototype.slice.call(arguments));
        });
      };

      Assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
      Assert.equal(mapCount, 1);
      Assert.equal(operationCount, 3);

      Array.prototype.map = map;
    });

  });

  describe('countWords()', () => {

    it('debería retornar un objeto que contenga el número de veces que aparece cada string en el array', () => {
      const input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
      Assert.deepEqual(countWords(input), { Apple: 2, Banana: 1, Durian: 3 });
    });

    it('NO debería usar for o while', () => {
      Assert.equal(/(for|while)\s+\(/g.test(countWords.toString()), false);
    });

    it('debería invocar Array.prototype.reduce', () => {
      const reduce = Array.prototype.reduce;
      let reduceCount = 0;

      Array.prototype.reduce = function (fn, initial) {
        reduceCount++;
        return reduce.call(this, function () {
          return fn.apply(null, Array.prototype.slice.call(arguments));
        }, initial);
      };

      Assert.deepEqual(countWords(['foo', 'foo']), { foo: 2 });
      Assert.equal(reduceCount, 1);

      Array.prototype.reduce = reduce;
    });

  });

});
