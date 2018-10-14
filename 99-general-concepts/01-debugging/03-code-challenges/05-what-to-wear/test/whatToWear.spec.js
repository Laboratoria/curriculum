
const Assert = require('chai').assert;
const whatToWear = require('../solution/whatToWear');

describe('whatToWear()', function() {
  it('deveria retornar "Bring an umbrella.", para ("spring")', function() {
    Assert.deepEqual(whatToWear('spring'), 'Bring an umbrella.');
  });

  it('deveria retornar "Wear sunglasses.", para ("summer")', function() {
    Assert.deepEqual(whatToWear('summer'), 'Wear sunglasses.');
  });

  it('deveria retornar "Wear a light jacket.", para ("autumn")', function() {
    Assert.deepEqual(whatToWear('autumn'), 'Wear a light jacket.');
  });

  it('deveria retornar "Bring a hat and gloves.", para ("winter")', function() {
    Assert.deepEqual(whatToWear('winter'), 'Bring a hat and gloves.');
  });

  it('deveria retornar "Please enter a valid season.", para ("foo")', function() {
    Assert.deepEqual(whatToWear('foo'), 'Please enter a valid season.');
  });
});
