import { assert } from 'chai';
import Submission from '../solution/factories.js';
const store = Submission();


describe('Factories', () => {

  describe('createStore()', () => {

    it('debería exportar una función', () => {
      assert.equal(typeof Submission, 'function');
    });

    it('debería retornar un objeto con método get', () => {
      assert.equal(typeof store.get, 'function');
    });

    it('debería retornar un objeto con método set', () => {
      assert.equal(typeof store.set, 'function');
    });

    it('debería retornar un objeto con método keys', () => {
      assert.equal(typeof store.keys, 'function');
    });

    it('debería retornar un objeto con método clear', () => {
      assert.equal(typeof store.clear, 'function');
    });

  });

  describe('store.get() / store.set()', () => {

    it('deberían retornar el valor guardado en la llave específicada', () => {
      const store = Submission();
      assert.equal(store.get('foo'), undefined);
      assert.equal(store.set('foo', true), true);
      assert.equal(store.get('foo'), true);
      assert.equal(store.set('foo', 'lalala'), 'lalala');
      assert.equal(store.get('foo'), 'lalala');
    });

  });

  describe('store.keys()', () => {

    it('debería retornar un arreglo con las llaves del store', () => {
      const store = Submission();
      assert.deepEqual(store.keys(), []);
      assert.equal(store.set('foo', true), true);
      assert.deepEqual(store.keys(), ['foo']);
      assert.equal(store.set('bar', 'lalala'), 'lalala');
      assert.deepEqual(store.keys(), ['foo', 'bar']);
    });

  });

  describe('store.clear()', () => {

    it('debería vaciar el store', () => {
      assert.deepEqual(store.keys(), []);
      assert.equal(store.set('foo', true), true);
      assert.deepEqual(store.keys(), ['foo']);
      assert.equal(store.set('bar', 'lalala'), 'lalala');
      assert.deepEqual(store.keys(), ['foo', 'bar']);
      assert.deepEqual(store.clear(), {});
      assert.deepEqual(store.keys(), []);
    });

  });
});
