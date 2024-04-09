import { assert } from 'chai';
import sayHello from '../solution/sayHello.js';

describe('sayHello()', () => {
  it('debería regresar undefined, para ()', () => {
    assert.deepEqual(sayHello(), undefined);
  });
});
