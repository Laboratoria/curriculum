
const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe("computeAverageLengthOfWords()", function () {
  it("Test_1", function () {
    Assert.deepEqual(computeAverageLengthOfWords("A", "kamnjhs"), 4);
  });

  it("Test 2", function () {
    Assert.deepEqual(computeAverageLengthOfWords("Lalalalala", "Kekekekekekeke"),  12);
  });

  it("Test 3", function () {
    Assert.deepEqual(  computeAverageLengthOfWords("Kemal", "Kemal"),  5);
  });

});
