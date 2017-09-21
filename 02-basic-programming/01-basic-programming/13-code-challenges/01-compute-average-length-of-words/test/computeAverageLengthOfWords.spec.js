
const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe("computeAverageLengthOfWords()", function () {
  it("Prueba 1: ('A', 'kamnjhs') => 4", function () {Ejemplo: promedio = 4
    Assert.deepEqual(computeAverageLengthOfWords("A", "kamnjhs"), 4);
  });

  it("Prueba 2: ('Lalalalala', 'Kekekekekekeke') => 12", function () {
    Assert.deepEqual(computeAverageLengthOfWords("Lalalalala", "Kekekekekekeke"),  12);
  });

  it("Prueba 3: ('Kemal', 'Kemal') => 5", function () {
    Assert.deepEqual(  computeAverageLengthOfWords("Kemal", "Kemal"),  5);
  });

});
