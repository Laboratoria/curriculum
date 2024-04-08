import { assert } from 'chai';
import Submission from '../solution/discount.js';


describe('applyDiscount() ', () => {

  it('debería devolver un nuevo array', () => {
    const cart = [];
    const result = Submission(cart, .2);
    assert.notStrictEqual(cart, result);
  });

  it('debería devolver un array con mismo length que input', () => {
    [
      [],
      [{ price: 1 }],
      [{ price: 1 }, { price: 7 }, { price: 19 }]
    ].forEach(cart => assert.equal(cart.length, Submission(cart, .2).length));
  });

  it('no debería mutar array de entrada', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    assert.strictEqual(cart.length, 3);
    assert.strictEqual(cart[0], item1);
    assert.strictEqual(cart[1], item2);
    assert.strictEqual(cart[2], item3);
    assert.deepEqual(cart[0], { price: 1 });
    assert.deepEqual(cart[1], { price: 2 });
    assert.deepEqual(cart[2], { price: 3 });
  });

  it('no debería mutar objetos', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    assert.strictEqual(cart.length, 3);
    assert.strictEqual(cart[0].price, 1);
    assert.strictEqual(cart[1].price, 2);
    assert.strictEqual(cart[2].price, 3);
  });

  it('debería retornar objetos con descuento indicado', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    assert.strictEqual(cartWithDiscount[0].price, 1 * (1 - .3));
    assert.strictEqual(cartWithDiscount[1].price, 2 * (1 - .3));
    assert.strictEqual(cartWithDiscount[2].price, 3 * (1 - .3));
  });

});
