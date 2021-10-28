const { assert } = require('chai');
const fromListToObject = require('../solution/fromListToObject');

describe('fromListToObject()', () => {
  it("debería regresar { make: 'Ford', model: 'Mustang', year: 1964, quality: 'eeehhh' }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']];
    const hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
      quality: 'eeehhh',
    };
    assert.deepEqual(fromListToObject(array), hasil);
  });

  it("debería regresar { make : 'Ford', model : 'Mustang', year : 1964 }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    const hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
    };
    assert.deepEqual(fromListToObject(array), hasil);
  });

  it("debería regresar { Kemal: 'Mahmud' }, para [['Kemal', 'Mahmud']]", () => {
    const array = [['Kemal', 'Mahmud']];
    const hasil = {
      Kemal: 'Mahmud',
    };
    assert.deepEqual(fromListToObject(array), hasil);
  });
});
