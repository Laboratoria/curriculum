const discount = .2;

// Broken: mutates array as well as objects!!
const applyDiscount = cart => {
  for (let i = 0; i < cart.length; i++) {
    cart[i].price *= (1 - discount);
  }
  return cart;
};

const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

const cartWithDiscount = applyDiscount(myCart, .3);
console.log(myCart, cartWithDiscount);
