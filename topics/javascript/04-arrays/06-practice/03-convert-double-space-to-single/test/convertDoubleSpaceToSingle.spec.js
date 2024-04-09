import { assert } from 'chai';
import convertDoubleSpaceToSingle from '../solution/convertDoubleSpaceToSingle.js';

describe('convertDoubleSpaceToSingle()', () => {
  it("debería regresar '', para string vacío", () => {
    assert.deepEqual(convertDoubleSpaceToSingle(''), '');
  });

  it("debería regresar 'Messi is the greatest player ever', para 'Messi  is  the  greatest  player  ever'", () => {
    const output = convertDoubleSpaceToSingle('Messi  is  the  greatest  player  ever');
    assert.deepEqual(output, 'Messi is the greatest player ever');
  });
});
