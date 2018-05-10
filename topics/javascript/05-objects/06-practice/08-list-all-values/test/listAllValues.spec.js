const Assert = require('chai').assert;
const listAllValues = require('../solution/listAllValues');

describe("listAllValues()", function () {
  it("debería regresar [1, 2, 3, false, false], para { a: 1, b: 2, c: 3, d: false, e: false }", function () {
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: false,
      e: false
    };
    var hasil = [1, 2, 3, false, false];

    Assert.deepEqual(listAllValues(obj), hasil);
  });

  it("debería regresar ['a', 11, true, 1], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", function () {
    var obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1
    };
    var hasil = ['a', 11, true, 1];

    Assert.deepEqual(listAllValues(obj), hasil);
  });

  it("debería regresar ['yes'], para { tez: 'yes' }", function () {
    var obj = {
      tez: 'yes'
    };
    var hasil = ['yes'];

    Assert.deepEqual(listAllValues(obj), hasil);
  });
});
