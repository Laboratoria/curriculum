const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/objectCreate');
const { machine, robot, robby } = Submission;

describe('objectCreate', () => {

  it('debería exportar un objeto con las propiedades "machine", "robot" y "robby"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('machine'));
    Assert.ok(Submission.hasOwnProperty('robot'));
    Assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 3 veces', () => {
    Assert.equal(spy.callCount, 3);
  });

  [
    [true, true],
    [true, true],
    [{}, {}]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        Assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(robot.__proto__, machine);
    });
  });

  describe('robby', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(robby.__proto__.__proto__, machine);
    });

    it('debería ser un objeto con robot como prototipo', () => {
      Assert.equal(robby.__proto__, robot);
    });
  });

})
