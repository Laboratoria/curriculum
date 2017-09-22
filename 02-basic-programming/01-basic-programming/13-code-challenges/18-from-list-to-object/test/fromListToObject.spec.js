const Assert = require('chai').assert;
const fromListToObject = require('../solution/fromListToObject');

describe("fromListToObject()", function () {
  it("deberia regresar { make: 'Ford', model: 'Mustang', year: 1964, quality: 'eeehhh' }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']]", function () {
    var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']];
    var hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
      quality: 'eeehhh'
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

  it("deberia regresar { make : 'Ford', model : 'Mustang', year : 1964 }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]", function () {
    var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    var hasil = {
      make: 'Ford',
      model: 'Mustang',
      year: 1964
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

  it("deberia regresar { Kemal: 'Mahmud' }, para [['Kemal', 'Mahmud']]", function () {
    var array = [['Kemal', 'Mahmud']];
    var hasil = {
      Kemal: 'Mahmud'
    }
    Assert.deepEqual(fromListToObject(array), hasil);
  });
});
