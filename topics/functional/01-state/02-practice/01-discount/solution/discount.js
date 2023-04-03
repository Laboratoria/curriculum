// Broken: returns new array but mutates same object references.
// const applyDiscount = (cart) => {
//   if (!cart.length) {
//     return [];
//   }
//
//   const current = cart.shift();
//   current.price *= (1 - discount);
//   return [current].concat(applyDiscount(cart));
// };

// Broken: mutates array and objects
// const applyDiscount = (cart) => {
//   for (let i = 0; i < cart.length; i++) {
//     cart[i] *= (1 - discount);
//   }
//   return cart;
// };

// Broken: new array but mutates same object references!!
// const applyDiscount = (cart, discount) => cart.map(item => {
//   item.price *= (1 - discount);
//   return item;
// });

// Solución 1
const applyDiscount = (cart, discount) => {
  if (!cart.length) {
    return [];
  }

  const current = Object.assign({}, cart[0], {
    price: cart[0].price * (1 - discount)
  });

  return [current].concat(applyDiscount(cart.slice(1), discount));
};

// Solución 2
// const applyDiscount = (cart, discount) =>
//   (!cart.length && []) || [Object.assign({}, cart[0], {
//     price: cart[0].price * (1 - discount)
//   })].concat(applyDiscount(cart.slice(1), discount));


module.exports = applyDiscount;
