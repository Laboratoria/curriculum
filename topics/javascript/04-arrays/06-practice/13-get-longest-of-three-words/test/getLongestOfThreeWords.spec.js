const Assert = require('chai').assert;
const getLongestOfThreeWords = require('../solution/getLongestOfThreeWords');

describe('getLongestOfThreeWords()', () => {
  it("deve devolver 'these', para 'these', 'three', 'words'", () => {
    const output = getLongestOfThreeWords('these', 'three', 'words');

    Assert.deepEqual(output, 'these');
  });

  it("deve devolver 'three', para 'a', 'two', 'three', 'four'", () => {
    const output = getLongestOfThreeWords('a', 'two', 'three', 'four');

    Assert.deepEqual(output, 'three');
  });
});
