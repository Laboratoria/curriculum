const Assert = require('chai').assert;
const findShortestOfThreeWords = require('../solution/findShortestOfThreeWords');

describe("findShortestOfThreeWords()", function () {
  it("debería regresar 'b', para 'yes', 'b', 'a', 'two', 'three', 'four'", function () {
    var output = findShortestOfThreeWords('yes', 'b', 'a', 'two', 'three', 'four');

    Assert.deepEqual(output, 'b');
  });

  it("debería regresar 'a', para 'a', 'two', 'three'", function () {
    var output = findShortestOfThreeWords('a', 'two', 'three');

    Assert.deepEqual(output, 'a');
  });
});
