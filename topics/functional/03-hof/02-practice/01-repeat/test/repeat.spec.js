const Assert = require('chai').assert;
const Submission = require('../solution/repeat');


describe('repeat()', () => {

  it('debería invocar la función 5 veces cuando n es 5', () => {
    let calls = 0;
    const fn = () => calls++;
    Submission(fn, 5);
    Assert.equal(calls, 5);
  });

  it('debería invocar la función 8 veces cuando n es 8', () => {
    let calls = 0;
    const fn = () => calls++;
    Submission(fn, 8);
    Assert.equal(calls, 8);
  });

  it('no debería invocar la función cuando n es 0', () => {
    let calls = 0;
    const fn = () => calls++;
    Submission(fn, 0);
    Assert.equal(calls, 0);
  });

  it('debería retornar undefined', () => {
    const fn = () => true;
    Assert.equal(Submission(fn, 5), undefined);
  });

});
