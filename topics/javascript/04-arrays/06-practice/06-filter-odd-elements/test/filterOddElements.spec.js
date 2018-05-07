
const Assert = require('chai').assert;
const filterOddElements = require('../solution/filterOddElements');

describe('filterOddElements()', () => {
  it('Prueba: ([2, 4, 6, 8, 10]) => []', () => {
    const arr = [2, 4, 6, 8, 10];
    const hasil = [];
    const call = filterOddElements(arr);

    Assert.deepEqual(call, hasil);
  });

  it('Prueba: ([69, 10, 6, 8, 22]) => [69]', () => {
    const arr = [69, 10, 6, 8, 22];
    const hasil = [69];
    const call = filterOddElements(arr);

    Assert.deepEqual(call, hasil);
  });


  it('Prueba: ([1, 2, 3, 4, 5]) => [1, 3, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    const hasil = [1, 3, 5];
    const call = filterOddElements(arr);

    Assert.deepEqual(call, hasil);
  });
});
