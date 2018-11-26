
const Assert = require('chai').assert;
const sayHello = require('../solution/sayHello');

describe('sayHello()', function() {
  it('deveria retornar undefined, para ()', function() {
    Assert.deepEqual(sayHello(), undefined);
  });
});
