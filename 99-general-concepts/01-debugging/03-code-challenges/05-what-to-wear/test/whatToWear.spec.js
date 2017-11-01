
const Assert = require('chai').assert;
const tellFortune = require('../solution/whatToWear');

describe('whatToWear()', function() {
  it('debería regresar "Bring an umbrella.", para ("spring")', function() {
    Assert.deepEqual(whatToWear('spring'), 'Bring an umbrella.');
  });
});

describe('whatToWear()', function() {
  it('debería regresar "Wear sunglasses.", para ("summer")', function() {
    Assert.deepEqual(whatToWear('summer'), 'Wear sunglasses.');
  });
});

describe('whatToWear()', function() {
  it('debería regresar "Wear a light jacket.", para ("autumn")', function() {
    Assert.deepEqual(whatToWear('autumn'), 'Wear a light jacket.');
  });
});

describe('whatToWear()', function() {
  it('debería regresar "Bring a hat and gloves.", para ("winter")', function() {
    Assert.deepEqual(whatToWear('winter'), 'Bring a hat and gloves.');
  });
});

describe('whatToWear()', function() {
  it('debería regresar "Please enter a valid season.", para ("foo")', function() {
    Assert.deepEqual(whatToWear('foo'), 'Please enter a valid season.');
  });
});
