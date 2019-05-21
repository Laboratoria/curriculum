
const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe('convertDoubleSpaceToSingle()', () => {
  it("deve devolver '', para string vazia", () => {
    Assert.deepEqual(convertDoubleSpaceToSingle(''), '');
  });

  it("deve devolver 'Messi is the greatest player ever', para 'Messi  is  the  greatest  player  ever'", () => {
 	const output = convertDoubleSpaceToSingle('Messi  is  the  greatest  player  ever');
    Assert.deepEqual(output, 'Messi is the greatest player ever');
  });
});
