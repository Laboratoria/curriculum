const Assert = require('chai').assert;
const calculateBillTotal = require('../solution/calculateBillTotal');

describe('calculateBillTotal()', () => {
  it('deve devolver 62.25, para 50', () => {
    const preTaxAndTipAmount = 50;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it('deve devolver 24.9, para 20', () => {
    const preTaxAndTipAmount = 20;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it('deve devolver 41.085, para 33', () => {
    const preTaxAndTipAmount = 33;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });
});
