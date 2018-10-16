const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe('convertDoubleSpaceToSingle()', () => {
  it("debería regresar '', para string vacío", () => {
    Assert.deepEqual(convertDoubleSpaceToSingle(''), '');
  });

  it("debería regresar 'Messi is the greatest player ever', para 'Messi  is  the  greatest  player  ever'", () => {
    const output = convertDoubleSpaceToSingle('Messi  is  the  greatest  player  ever');
    Assert.deepEqual(output, 'Messi is the greatest player ever');
  });
});
