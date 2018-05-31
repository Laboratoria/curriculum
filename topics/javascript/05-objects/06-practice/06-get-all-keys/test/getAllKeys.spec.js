const Assert = require('chai').assert;
const getAllKeys = require('../solution/getAllKeys');

describe('getAllKeys()', () => {
  it("debería regresar ['tes', 'ini', 'berhasil'], para { tes : 'tes', ini : 'apa',berhasil : 10 }", () => {
    const hasil = ['tes', 'ini', 'berhasil'];
    const obj = {
      tes: 'tes',
      ini: 'apa',
      berhasil: 10,
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });

  it("debería regresar ['a', 'number', 'hungry', 'grammyWins'], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", () => {
    const hasil = ['a', 'number', 'hungry', 'grammyWins'];
    const obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1,
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });
});
