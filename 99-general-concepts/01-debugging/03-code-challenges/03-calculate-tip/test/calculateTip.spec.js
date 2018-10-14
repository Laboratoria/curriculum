
const Assert = require('chai').assert;
const calculateTip = require('../solution/calculateTip');

describe('calculateTip()', function() {
  it('deveria retornar 15, para (100)', function() {
    Assert.deepEqual(calculateTip(100), 15);
  });

  it('deveria retornar 4.5, para (30)', function() {
    Assert.deepEqual(calculateTip(30), 4.5);
  });

  it('deveria retornar 0, para (0)', function() {
    Assert.deepEqual(calculateTip(0), 0);
  });

  it('deveria retornar 7.5, para (50)', function() {
    Assert.deepEqual(calculateTip(50), 7.5);
  });
});
