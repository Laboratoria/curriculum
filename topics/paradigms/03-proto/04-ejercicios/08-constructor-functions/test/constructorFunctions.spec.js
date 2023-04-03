const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/constructorFunctions');
const { Robot, robby } = Submission;

describe('objectCreate', () => {

  it('debería exportar un objeto con las propiedades "Robot", "robby"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('Robot'));
    Assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 2 veces', () => {
    Assert.equal(spy.callCount, 2);
  });

  [
    [true, true],
    [2, 2]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        Assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('Robot', () => {

    it('debería ser un constructor', () => {
      Assert.equal(typeof Robot, 'function');
    });

  });

  describe('robby', () => {

    it('debería ser una una instancia de robot', () => {
      Assert.equal(robby.__proto__, new Robot().__proto__);
    });

    it('debería tener una propiedad motors con valor 2', () => {
      Assert.equal(robby.motors, 2);
    });

  });


});
