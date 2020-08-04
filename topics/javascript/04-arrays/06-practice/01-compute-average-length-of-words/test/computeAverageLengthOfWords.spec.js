const { assert } = require('chai');
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe('computeAverageLengthOfWords()', () => {
  it('debería regresar  4, para  ("A", "kamnjhs")', () => {
    assert.deepEqual(computeAverageLengthOfWords('A', 'kamnjhs'), 4);
  });

  it('debería regresar  12, para ("Lalalalala", "Kekekekekekeke")', () => {
    assert.deepEqual(computeAverageLengthOfWords('Lalalalala', 'Kekekekekekeke'), 12);
  });

  it('debería regresar 5, para ("Kemal", "Kemal")', () => {
    assert.deepEqual(computeAverageLengthOfWords('Kemal', 'Kemal'), 5);
  });
});
