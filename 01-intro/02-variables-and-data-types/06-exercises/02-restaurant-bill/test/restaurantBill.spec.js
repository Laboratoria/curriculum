
const Assert = require('chai').assert;
const restaurantBill = require('../solution/restaurantBill');

describe("restaurantBill()", function () {
  it("debería regresar $11, para 50", function () {
    var preTaxAmount = 50;
    var tax = preTaxAmount * 0.1;
    var total = '$' + (preTaxAmount + tax)/5 ;

    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it("debería regresar $22, para 100", function () {
    var preTaxAmount = 100;
    var tax = preTaxAmount * 0.1;
    var total = '$' + (preTaxAmount + tax)/5 ;

    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it("debería regresar $18.7, para 85", function () {
    var preTaxAmount = 85;
    var tax = preTaxAmount * 0.1;
    var total = '$' + (preTaxAmount + tax)/5 ;

    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });
});
