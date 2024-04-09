import { assert } from 'chai';
import * as Submission from '../solution/objectAssign.js';


describe('extend', () => {

  it('debería exportar un objeto', () => {
    assert.equal(typeof Submission, 'object');
  });

  it('debería exportar el objeto con un método "extend"', () => {
    assert.equal(typeof Submission.extend, 'function');
  });

  it('debería crear un objeto nuevo con todas las propiedades de las fuentes', () => {
    const obj1 = { foo: true, bar: false };
    const obj2 = { baz: 1, bar: true };
    const obj3 = { baz: 2, bar: false };

    const obj4 = Submission.extend(obj1);
    assert.deepEqual(obj4, { foo: true, bar: false });
    obj4.foo = 'hola';
    assert.deepEqual(obj4, { foo: 'hola', bar: false });
    assert.deepEqual(obj1, { foo: true, bar: false });

    assert.deepEqual(Submission.extend(obj1, obj2), { foo: true, bar: true, baz: 1 });
    assert.deepEqual(Submission.extend(obj1, obj2, obj3), { foo: true, bar: false, baz: 2 });
  });

});
