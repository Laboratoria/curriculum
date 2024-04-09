'use strict';

import { assert } from 'chai';
import { getShortMessages, repeat, doubleAll, countWords } from '../solution/arrowFunctions.js';

const message = (_ => {
  return assert.deepEqual(getShortMessages([{
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
      assert.deepEqual(getShortMessages([]), []);
    });

    it('debería retornar arreglo de strings con mensajes de menos de 50 chars', () => {
      message();
    });

    it('NO debería usar for o while', () => {
      assert.equal(/(for|while)\s+\(/g.test(getShortMessages.toString()), false);
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
      assert.equal(filterCount, 1);

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

      assert.equal(mapCount, 1);

      Array.prototype.map = map;
    });

  });

  describe('repeat', () => {

    it('debería exportar una función', () => {
      assert.equal(typeof repeat, 'function');
    });

    it('debería invocar la operación num veces', () => {
      let count = 0;
      repeat( _ => count++, 3);
      assert.equal(count, 3);
    });

  });

  describe('doubleAll()', () => {

    it('debería retornar array con números multiplicados por 2', () => {
      assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
    });

    it('NO debería modificar array de entrada', () => {
      const input = [1, 2, 3];
      assert.deepEqual(doubleAll(input), [2, 4, 6]);
      assert.deepEqual(input, [1, 2, 3]);
    });

    it('NO debería usar for o while', () => {
      assert.equal(/(for|while)\s+\(/g.test(doubleAll.toString()), false);
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

      assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
      assert.equal(mapCount, 1);
      assert.equal(operationCount, 3);

      Array.prototype.map = map;
    });

  });

  describe('countWords()', () => {

    it('debería retornar un objeto que contenga el número de veces que aparece cada string en el array', () => {
      const input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
      assert.deepEqual(countWords(input), { Apple: 2, Banana: 1, Durian: 3 });
    });

    it('NO debería usar for o while', () => {
      assert.equal(/(for|while)\s+\(/g.test(countWords.toString()), false);
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

      assert.deepEqual(countWords(['foo', 'foo']), { foo: 2 });
      assert.equal(reduceCount, 1);

      Array.prototype.reduce = reduce;
    });

  });

});
