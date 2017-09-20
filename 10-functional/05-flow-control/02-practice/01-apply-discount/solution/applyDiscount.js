// const applyDiscount = (cart, discount) => {
//   if (!cart.length) {
//     return [];
//   }
//   return [{...cart[0], price: cart[0].price * (1 - discount) }]
//     .concat(applyDiscount(cart.slice(1), discount));
// };

// const applyDiscount = (cart, discount) => (!cart.length) ?
//   [] :
//   [{...cart[0], price: cart[0].price * (1 - discount) }]
//     .concat(applyDiscount(cart.slice(1), discount));

// Broken: mutates array as well as objects!!
const applyDiscount = (cart, discount) => {
  for (let i = 0; i < cart.length; i++) {
    cart[i].price *= (1 - discount);
  }
  return cart;
};

module.exports = applyDiscount;
