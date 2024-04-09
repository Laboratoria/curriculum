import { assert } from 'chai';
import getAllKeys from '../solution/getAllKeys.js';

describe('getAllKeys()', () => {
  it("debería regresar ['tes', 'ini', 'berhasil'], para { tes : 'tes', ini : 'apa',berhasil : 10 }", () => {
    const hasil = ['tes', 'ini', 'berhasil'];
    const obj = {
      tes: 'tes',
      ini: 'apa',
      berhasil: 10,
    };

    assert.deepEqual(getAllKeys(obj), hasil);
  });

  it("debería regresar ['a', 'number', 'hungry', 'grammyWins'], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", () => {
    const hasil = ['a', 'number', 'hungry', 'grammyWins'];
    const obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1,
    };

    assert.deepEqual(getAllKeys(obj), hasil);
  });
});
