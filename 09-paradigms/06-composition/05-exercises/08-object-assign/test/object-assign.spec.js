'use strict';


const Assert =  require('chai').assert;
const Submission = require('../solution/object-assign');


describe('extend', () => {
  it('Debería exportar un objeto', () => {
    Assert.equal(typeof Submission, 'object');
  });

  it('Debería exportar el objeto con un método "extend"', () => {
    Assert.equal(typeof Submission.extend, 'function');
  });

  it('Debería crear un objeto nuevo con todas las propiedades de las fuentes', () => {
    const obj1 = { foo: true, bar: false };
    const obj2 = { baz: 1, bar: true };
    const obj3 = { baz: 2, bar: false };

    const obj4 = Submission.extend(obj1);
    Assert.deepEqual(obj4, { foo: true, bar: false });
    obj4.foo = 'hola';
    Assert.deepEqual(obj4, { foo: 'hola', bar: false });
    Assert.deepEqual(obj1, { foo: true, bar: false });

    Assert.deepEqual(Submission.extend(obj1, obj2), { foo: true, bar: true, baz: 1 });
    Assert.deepEqual(Submission.extend(obj1, obj2, obj3), { foo: true, bar: false, baz: 2 });
  });
});