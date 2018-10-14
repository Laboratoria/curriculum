
const Assert = require('chai').assert;
const createArray = require('../solution/createArray');

describe('createArray()', function() {
  it('deveria retornar [1, 2, 3], para ()', function() {
    Assert.deepEqual(createArray(), [1, 2, 3]);
  });
});
