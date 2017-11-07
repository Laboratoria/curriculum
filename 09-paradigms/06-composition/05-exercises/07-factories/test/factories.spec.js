describe('createStore()', () => {
    
      it('debería exportar una función', () => {
    
        Assert.equal(typeof Submission, 'function');
      });
    
      it('debería retornar un objeto con métodos get, set, keys y clear', () => {
    
        const store = Submission();
        Assert.equal(typeof store.get, 'function');
        Assert.equal(typeof store.set, 'function');
        Assert.equal(typeof store.keys, 'function');
        Assert.equal(typeof store.clear, 'function');
      });
    
});
    
    
describe('store.get() / store.set()', () => {
    
      it('deberían retornar el valor guardado en la llave específicada', () => {
    
        const store = Submission();
        Assert.equal(store.get('foo'), undefined);
        Assert.equal(store.set('foo', true), true);
        Assert.equal(store.get('foo'), true);
        Assert.equal(store.set('foo', 'lalala'), 'lalala');
        Assert.equal(store.get('foo'), 'lalala');
      });
    
    });
    
    
describe('store.keys()', () => {
    
      it('debería retornar un arreglo con las llaves del store', () => {
    
        const store = Submission();
        Assert.deepEqual(store.keys(), []);
        Assert.equal(store.set('foo', true), true);
        Assert.deepEqual(store.keys(), ['foo']);
        Assert.equal(store.set('bar', 'lalala'), 'lalala');
        Assert.deepEqual(store.keys(), ['foo', 'bar']);
      });
    
});
    
    
describe('store.clear()', () => {
    
      it('debería vaciar el store', () => {
    
        const store = Submission();
        Assert.deepEqual(store.keys(), []);
        Assert.equal(store.set('foo', true), true);
        Assert.deepEqual(store.keys(), ['foo']);
        Assert.equal(store.set('bar', 'lalala'), 'lalala');
        Assert.deepEqual(store.keys(), ['foo', 'bar']);
        Assert.deepEqual(store.clear(), {});
        Assert.deepEqual(store.keys(), []);
      });
    
});