const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe('computeAverageLengthOfWords()', () => {

  it('deve devolver  4, para  ("A", "kamnjhs")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('A', 'kamnjhs'), 4);
  });

  it('deve devolver  12, para ("Lalalalala", "Kekekekekekeke")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Lalalalala', 'Kekekekekekeke'), 12);
  });

  it('deve devolver 5, para ("Kemal", "Kemal")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Kemal', 'Kemal'), 5);
  });

});
