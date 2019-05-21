function calculateBillTotal(preTaxAndTipAmount) {
  return preTaxAndTipAmount + (preTaxAndTipAmount * 0.095) + (preTaxAndTipAmount * 0.15);
}

module.exports = calculateBillTotal;
