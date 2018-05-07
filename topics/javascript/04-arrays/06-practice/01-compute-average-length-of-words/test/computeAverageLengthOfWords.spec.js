const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe('computeAverageLengthOfWords()', () => {
  it('debería regresar  4, para  ("A", "kamnjhs")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('A', 'kamnjhs'), 4);
  });

  it('debería regresar  12, para ("Lalalalala", "Kekekekekekeke")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Lalalalala', 'Kekekekekekeke'), 12);
  });

  it('debería regresar 5, para ("Kemal", "Kemal")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Kemal', 'Kemal'), 5);
  });
});
