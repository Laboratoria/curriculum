const Assert = require('chai').assert;
const max = require('../solution/max');

describe('max()', () => {

  it('debería retornar el número que sea mayor', () => {
    Assert.deepEqual(max(5, 6, 7), 7);
    Assert.deepEqual(max(66, 4, 6), 66);
    Assert.deepEqual(max(20, 25, 10), 25);
  });

});
