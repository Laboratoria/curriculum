'use strict';

const Assert = require('chai').assert;
const coinConvert = require('../solution/coinConvert');

describe("coinConvert()", function () {
  it("debería regresar [162.5, 900, 33000], para $50", function () {
    var dollars = 50;
    var soles = dollars * 3.25;
    var pesosMx = dollars * 18;
    var pesosCl = dollars * 660;
    var total = [soles, pesosMx, pesosCl];

    Assert.deepEqual(coinConvert(dollars), total);
  });

  it("debería regresar [325, 1800, 66000], para $100", function () {
    var dollars = 100;
    var soles = dollars * 3.25;
    var pesosMx = dollars * 18;
    var pesosCl = dollars * 660;
    var total = [soles, pesosMx, pesosCl];

    Assert.deepEqual(coinConvert(dollars), total);
  });

  it("debería regresar [243.75, 1350, 49500], para  $85 ", function () {
    var dollars = 85;
    var soles = dollars * 3.25;
    var pesosMx = dollars * 18;
    var pesosCl = dollars * 660;
    var total = [soles, pesosMx, pesosCl];

    Assert.deepEqual(coinConvert(dollars), total);
  });
});
