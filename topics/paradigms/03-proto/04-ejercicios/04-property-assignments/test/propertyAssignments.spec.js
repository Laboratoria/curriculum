const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => Assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/propertyAssignments');
const { machine, vehicle, robot } = Submission;


describe('propertyAssignments', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('machine'));
    Assert.ok(Submission.hasOwnProperty('vehicle'));
    Assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 6 veces', () => {
    Assert.equal(spy.callCount, 6);
  });

  [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [4, 4],
    [null, null],
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        Assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('machine', () => {

    it('debería tener una propiedad motors', () => {
      Assert.ok(robot.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería tener valor null', () => Assert.equal(machine.motors, null))
    );

  });

  describe('vehicle', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(vehicle.__proto__, machine);
    });

  });

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(robot.__proto__, machine);
    });

    it('debería tener una propiedad motors', () => {
      Assert.ok(robot.hasOwnProperty('motors'));
    });

    describe('robot.motors', () =>
      it('debería tener valor 4', () => Assert.equal(robot.motors, 4))
    );

  });

});
