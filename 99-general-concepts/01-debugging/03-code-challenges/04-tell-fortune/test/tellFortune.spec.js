
const Assert = require('chai').assert;
const tellFortune = require('../solution/tellFortune');

describe('tellFortune()', function() {
  it('deveria retornar "In the year 2025, you will be a programmer and live in Lima.", para ("programmer", "Lima")', function() {
    Assert.deepEqual(tellFortune('programmer', 'Lima'), 'In the year 2025, you will be a programmer and live in Lima.');
  });

  it('deveria retornar "In the year 2025, you will be a scientist and live in Boston.", para ("scientist", "Boston")', function() {
    Assert.deepEqual(tellFortune('scientist', 'Boston'), 'In the year 2025, you will be a scientist and live in Boston.');
  });

  it('deveria retornar "In the year 2025, you will be a singer and live in Madrid.", para ("singer", "Madrid")', function() {
    Assert.deepEqual(tellFortune('singer', 'Madrid'), 'In the year 2025, you will be a singer and live in Madrid.');
  });

  it('deveria retornar "In the year 2025, you will be a farmer and live in Fiji.", para ("farmer", "Fiji")', function() {
    Assert.deepEqual(tellFortune('farmer', 'Fiji'), 'In the year 2025, you will be a farmer and live in Fiji.');
  });
});
