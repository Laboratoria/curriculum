const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart) => {
  if (!cart.length) {
    return [];
  }

  const current = cart.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(cart));
};

module.exports = applyDiscount;
