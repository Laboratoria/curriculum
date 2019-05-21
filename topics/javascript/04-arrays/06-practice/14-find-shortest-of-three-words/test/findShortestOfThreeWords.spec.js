const Assert = require('chai').assert;
const findShortestOfThreeWords = require('../solution/findShortestOfThreeWords');

describe('findShortestOfThreeWords()', () => {
  it("deve devolver 'b', para 'yes', 'b', 'a', 'two', 'three', 'four'", () => {
    const output = findShortestOfThreeWords('yes', 'b', 'a', 'two', 'three', 'four');

    Assert.deepEqual(output, 'b');
  });

  it("deve devolver 'a', para 'a', 'two', 'three'", () => {
    const output = findShortestOfThreeWords('a', 'two', 'three');

    Assert.deepEqual(output, 'a');
  });
});
