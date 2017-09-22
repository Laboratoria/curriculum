
const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe("computeAverageLengthOfWords()", function () {
  it("deberia regresar  4, para  ('A', 'kamnjhs')", function () {Ejemplo: promedio = 4
    Assert.deepEqual(computeAverageLengthOfWords("A", "kamnjhs"), 4);
  });

  it("deberia regresar  12, para ('Lalalalala', 'Kekekekekekeke')", function () {
    Assert.deepEqual(computeAverageLengthOfWords("Lalalalala", "Kekekekekekeke"),  12);
  });

  it("deberia regresar 5, para ('Kemal', 'Kemal')", function () {
    Assert.deepEqual(  computeAverageLengthOfWords("Kemal", "Kemal"),  5);
  });

});
