import { assert } from 'chai';
import convertObjectToList from '../solution/convertObjectToList.js';

describe('convertObjectToList()', () => {
  it("debería regresar [['a', 1], ['b', 'c'], ['d', true], ['e', 10]], para { a: 1, b: 'c', d: true, e: 10 }", () => {
    const obj = {
      a: 1,
      b: 'c',
      d: true,
      e: 10,
    };
    const hasil = [['a', 1], ['b', 'c'], ['d', true], ['e', 10]];

    assert.deepEqual(convertObjectToList(obj), hasil);
  });

  it("debería regresar [['name', 'Holly'], ['age', 35], ['role', 'producer']], para { name: 'Holly', age: 35, role: 'producer' }", () => {
    const obj = {
      name: 'Holly',
      age: 35,
      role: 'producer',
    };
    const hasil = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

    assert.deepEqual(convertObjectToList(obj), hasil);
  });
});
