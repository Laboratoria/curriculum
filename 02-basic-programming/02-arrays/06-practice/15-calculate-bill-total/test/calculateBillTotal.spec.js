const Assert = require('chai').assert;
const calculateBillTotal = require('../solution/calculateBillTotal');

describe("calculateBillTotal()", function () {
  it("deve devolver 62.25, para 50", function () {
    var preTaxAndTipAmount = 50;
    var tax = preTaxAndTipAmount * (0.095);
    var tip = preTaxAndTipAmount * (0.15);
    var total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it("deve devolver 24.9, para 20", function () {
    var preTaxAndTipAmount = 20;
    var tax = preTaxAndTipAmount * (0.095);
    var tip = preTaxAndTipAmount * (0.15);
    var total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it("deve devolver 41.085, para 33", function () {
    var preTaxAndTipAmount = 33;
    var tax = preTaxAndTipAmount * (0.095);
    var tip = preTaxAndTipAmount * (0.15);
    var total = preTaxAndTipAmount + tax + tip;

    Assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });
});
