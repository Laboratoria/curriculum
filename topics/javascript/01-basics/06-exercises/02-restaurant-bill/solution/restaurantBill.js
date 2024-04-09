const restaurantBill = (bill) => {
  const tax = bill * 0.1;

  const total = bill + tax;

  return `$${total / 5}`;
};

export default restaurantBill;
