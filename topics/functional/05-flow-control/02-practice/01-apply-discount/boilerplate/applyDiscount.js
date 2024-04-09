// Broken: mutates array as well as objects!!
const applyDiscount = (cart, discount) => {
  for (let i = 0; i < cart.length; i++) {
    cart[i].price *= (1 - discount);
  }
  return cart;
};

export default applyDiscount;
