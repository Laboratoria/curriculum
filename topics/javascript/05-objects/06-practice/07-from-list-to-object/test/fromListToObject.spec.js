const Assert = require('chai').assert;
const fromListToObject = require('../solution/fromListToObject');

describe('fromListToObject()', () => {
  it("deve devolver { make: 'Ford', model: 'Mustang', year: 1964, quality: 'eeehhh' }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']];
    const hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
      quality: 'eeehhh',
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

  it("deve devolver { make : 'Ford', model : 'Mustang', year : 1964 }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    const hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

  it("deve devolver { Kemal: 'Mahmud' }, para [['Kemal', 'Mahmud']]", () => {
    const array = [['Kemal', 'Mahmud']];
    const hasil = {
      Kemal: 'Mahmud',
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });
});
