const calculateBillTotal = (preTaxAndTipAmount) => {
  const result = preTaxAndTipAmount + (preTaxAndTipAmount * 0.095) + (preTaxAndTipAmount * 0.15);
  return result;
};

module.exports = calculateBillTotal;
