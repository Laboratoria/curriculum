const Assert = require('chai').assert;
const sayHello = require('../solution/sayHello');

describe('sayHello()', () => {
  it('debería regresar undefined, para ()', () => {
    Assert.deepEqual(sayHello(), undefined);
  });
});
