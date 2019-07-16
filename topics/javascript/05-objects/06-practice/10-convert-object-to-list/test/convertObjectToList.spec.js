const Assert = require('chai').assert;
const convertObjectToList = require('../solution/convertObjectToList');

describe('convertObjectToList()', () => {
  it("deve devolver [['a', 1], ['b', 'c'], ['d', true], ['e', 10]], para { a: 1, b: 'c', d: true, e: 10 }", () => {
    const obj = {
      a: 1,
      b: 'c',
      d: true,
      e: 10,
    };
    const hasil = [['a', 1], ['b', 'c'], ['d', true], ['e', 10]];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });

  it("deve devolver [['name', 'Holly'], ['age', 35], ['role', 'producer']], para { name: 'Holly', age: 35, role: 'producer' }", () => {
    const obj = {
      name: 'Holly',
      age: 35,
      role: 'producer',
    };
    const hasil = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });
});
