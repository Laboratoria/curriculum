import { assert } from 'chai';
import getLongestOfThreeWords from '../solution/getLongestOfThreeWords.js';

describe('getLongestOfThreeWords()', () => {
  it("debería regresar 'these', para 'these', 'three', 'words'", () => {
    const output = getLongestOfThreeWords('these', 'three', 'words');

    assert.deepEqual(output, 'these');
  });

  it("debería regresar 'three', para 'a', 'two', 'three', 'four'", () => {
    const output = getLongestOfThreeWords('a', 'two', 'three', 'four');

    assert.deepEqual(output, 'three');
  });
});
