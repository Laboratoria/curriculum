const Assert = require('chai').assert;
const createArray = require('../solution/createArray');

describe('createArray()', () => {
  it('debería regresar [1, 2, 3], para ()', () => {
    Assert.deepEqual(createArray(), [1, 2, 3]);
  });
});
