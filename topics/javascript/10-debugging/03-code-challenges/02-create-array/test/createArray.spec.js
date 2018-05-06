
const Assert = require('chai').assert;
const createArray = require('../solution/createArray');

describe('createArray()', function() {
  it('debería regresar [1, 2, 3], para ()', function() {
    Assert.deepEqual(createArray(), [1, 2, 3]);
  });
});
