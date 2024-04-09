// const applyDiscount = (cart, discount) => {
//   if (!cart.length) {
//     return [];
//   }
//   return [{...cart[0], price: cart[0].price * (1 - discount) }]
//     .concat(applyDiscount(cart.slice(1), discount));
// };

const applyDiscount = (cart, discount) => (!cart.length) ?
  [] :
  [{...cart[0], price: cart[0].price * (1 - discount) }]
    .concat(applyDiscount(cart.slice(1), discount));

export default applyDiscount;
