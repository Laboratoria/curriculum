module.exports = function restaurantBill(bill) {
  return '$' + (bill * 0.1 + bill)/5;   
};
