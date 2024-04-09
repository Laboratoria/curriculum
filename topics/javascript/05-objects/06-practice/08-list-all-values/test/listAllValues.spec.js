import { assert } from 'chai';
import listAllValues from '../solution/listAllValues.js';

describe('listAllValues()', () => {
  it('debería regresar [1, 2, 3, false, false], para { a: 1, b: 2, c: 3, d: false, e: false }', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: false,
      e: false,
    };
    const hasil = [1, 2, 3, false, false];

    assert.deepEqual(listAllValues(obj), hasil);
  });

  it("debería regresar ['a', 11, true, 1], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", () => {
    const obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1,
    };
    const hasil = ['a', 11, true, 1];

    assert.deepEqual(listAllValues(obj), hasil);
  });

  it("debería regresar ['yes'], para { tez: 'yes' }", () => {
    const obj = {
      tez: 'yes',
    };
    const hasil = ['yes'];

    assert.deepEqual(listAllValues(obj), hasil);
  });
});
