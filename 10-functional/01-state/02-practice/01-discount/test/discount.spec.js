'use strict';


const Submission = require('../solution/discount');


describe('applyDiscount()', () => {

  it('debería devolver un nuevo array', () => {
    const cart = [];
    expect(cart).not.toBe(Submission(cart, .2));
  });

  it('debería devolver un array con mismo length que input', () => {
    [
      [],
      [{ price: 1 }],
      [{ price: 1 }, { price: 7 }, { price: 19 }]
    ].forEach(cart => expect(cart.length).toBe(Submission(cart, .2).length));
  });

  it('no debería mutar array de entrada', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    expect(cart.length).toBe(3);
    expect(cart[0]).toBe(item1);
    expect(cart[1]).toBe(item2);
    expect(cart[2]).toBe(item3);
  });

  it('no debería mutar objetos', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    expect(cart.length).toBe(3);
    expect(cart[0].price).toBe(1);
    expect(cart[1].price).toBe(2);
    expect(cart[2].price).toBe(3);
  });

  it('debería retornar objetos con descuento indicado', () => {
    const item1 = { price: 1 };
    const item2 = { price: 2 };
    const item3 = { price: 3 };
    const cart = [item1, item2, item3];
    const cartWithDiscount = Submission(cart, .3);
    expect(cartWithDiscount[0].price).toBe(1 * (1 - .3));
    expect(cartWithDiscount[1].price).toBe(2 * (1 - .3));
    expect(cartWithDiscount[2].price).toBe(3 * (1 - .3));
  });

});
