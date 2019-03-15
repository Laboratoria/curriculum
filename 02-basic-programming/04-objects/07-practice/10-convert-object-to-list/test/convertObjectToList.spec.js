const Assert = require('chai').assert;
const convertObjectToList = require('../solution/convertObjectToList');

describe("convertObjectToList()", function () {
  it("deve devolver [['a', 1], ['b', 'c'], ['d', true], ['e', 10]], para { a: 1, b: 'c', d: true, e: 10 }", function () {
    var obj = {
      a: 1,
      b: 'c',
      d: true,
      e: 10
    };
    var hasil = [['a', 1], ['b', 'c'], ['d', true], ['e', 10]];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });

  it("deve devolver [['name', 'Holly'], ['age', 35], ['role', 'producer']], para { name: 'Holly', age: 35, role: 'producer' }", function () {
    var obj = {
      name: 'Holly',
      age: 35,
      role: 'producer'
    };
    var hasil = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });
});
