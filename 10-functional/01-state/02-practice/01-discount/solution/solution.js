'use strict';


//
// Solución 1
//
const applyDiscount = (cart) => {
  if (!cart.length) {
    return [];
  }

  const current = Object.assign({}, cart[0], {
    price: cart[0].price * (1 - discount)
  });

  return [current].concat(applyDiscount(cart.slice(1)));
};


//
// Solución 2
//
// const applyDiscount = cart =>
//   (!cart.length && []) || [Object.assign({}, cart[0], {
//     price: cart[0].price * (1 - discount)
//   })].concat(applyDiscount(cart.slice(1)));


// Broken: new array but mutates same object references!!
// const applyDiscount = cart => cart.map(item => {
//   item.price *= (1 - discount);
//   return item;
// });


const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];


const cartWithDiscount = applyDiscount(myCart);
console.log(myCart, cartWithDiscount);
