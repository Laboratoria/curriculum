
import { assert } from 'chai';
import whatToWear from '../solution/whatToWear.js';

describe('whatToWear()', () => {
  it('debería regresar "Bring an umbrella.", para ("spring")', () => {
    assert.deepEqual(whatToWear('spring'), 'Bring an umbrella.');
  });

  it('debería regresar "Wear sunglasses.", para ("summer")', () => {
    assert.deepEqual(whatToWear('summer'), 'Wear sunglasses.');
  });

  it('debería regresar "Wear a light jacket.", para ("autumn")', () => {
    assert.deepEqual(whatToWear('autumn'), 'Wear a light jacket.');
  });

  it('debería regresar "Bring a hat and gloves.", para ("winter")', () => {
    assert.deepEqual(whatToWear('winter'), 'Bring a hat and gloves.');
  });

  it('debería regresar "Please enter a valid season.", para ("foo")', () => {
    assert.deepEqual(whatToWear('foo'), 'Please enter a valid season.');
  });
});
