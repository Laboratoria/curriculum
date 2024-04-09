import { assert } from 'chai';
import getLongestWordOfMixedElements from '../solution/getLongestWordOfMixedElements.js';

describe('getLongestWordOfMixedElements()', () => {
  it("debería regresar '', para  ([3, 4, 5, 6, 7])", () => {
    const output = getLongestWordOfMixedElements([3, 4, 5, 6, 7]);
    assert.deepEqual(output, '');
  });

  it("debería regresar '', para ([])", () => {
    const output = getLongestWordOfMixedElements([]);
    assert.deepEqual(output, '');
  });


  it("debería regresar 'word', para ([3, 'word', 5, 'up', 3, 1])", () => {
    const output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
    assert.deepEqual(output, 'word');
  });
});
