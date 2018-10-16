
const Assert = require('chai').assert;
const whatToWear = require('../solution/whatToWear');

describe('whatToWear()', () => {
  it('debería regresar "Bring an umbrella.", para ("spring")', () => {
    Assert.deepEqual(whatToWear('spring'), 'Bring an umbrella.');
  });

  it('debería regresar "Wear sunglasses.", para ("summer")', () => {
    Assert.deepEqual(whatToWear('summer'), 'Wear sunglasses.');
  });

  it('debería regresar "Wear a light jacket.", para ("autumn")', () => {
    Assert.deepEqual(whatToWear('autumn'), 'Wear a light jacket.');
  });

  it('debería regresar "Bring a hat and gloves.", para ("winter")', () => {
    Assert.deepEqual(whatToWear('winter'), 'Bring a hat and gloves.');
  });

  it('debería regresar "Please enter a valid season.", para ("foo")', () => {
    Assert.deepEqual(whatToWear('foo'), 'Please enter a valid season.');
  });
});
