const Assert = require('chai').assert;
const getLongestOfThreeWords = require('../solution/getLongestOfThreeWords');

describe('getLongestOfThreeWords()', () => {
  it("debería regresar 'these', para 'these', 'three', 'words'", () => {
    const output = getLongestOfThreeWords('these', 'three', 'words');

    Assert.deepEqual(output, 'these');
  });

  it("debería regresar 'three', para 'a', 'two', 'three', 'four'", () => {
    const output = getLongestOfThreeWords('a', 'two', 'three', 'four');

    Assert.deepEqual(output, 'three');
  });
});
