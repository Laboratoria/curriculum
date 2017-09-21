const Assert = require('chai').assert;
const getLongestOfThreeWords = require('../solution/getLongestOfThreeWords');

describe("getLongestOfThreeWords()", function () {
  it("deberia regresar 'these', para 'these', 'three', 'words'", function () {
    var output = getLongestOfThreeWords('these', 'three', 'words');

    Assert.deepEqual(output, 'these');
  });

  it("deberia regresar 'three', para 'a', 'two', 'three', 'four'", function () {
    var output = getLongestOfThreeWords('a', 'two', 'three', 'four');

    Assert.deepEqual(output, 'three');
  });
});
