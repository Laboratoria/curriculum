import { assert } from 'chai';
import removeStringValuesLongerThan from '../solution/removeStringValuesLongerThan.js';

describe('removeStringValuesLongerThan()', () => {
  it('Prueba: key-value mayor a 1', () => {
    const obj = {
      name: 'Montana',
      age: 20,
      location: 'Texas',
    };

    const num = 1;
    const hasil = {
      age: 20,
    };
    assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);
  });

  it('Prueba: key-value mayor a 6', () => {
    const obj = {
      name: 'Montana',
      age: 20,
      location: 'Texas',
    };

    const num = 6;
    const hasil = {
      age: 20,
      location: 'Texas',
    };
    assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);
  });
});
