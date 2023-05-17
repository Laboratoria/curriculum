const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => Assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/dynamicLookups');
const { machine, vehicle, robot } = Submission;


describe('dynamicLookup', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('machine'));
    Assert.ok(Submission.hasOwnProperty('vehicle'));
    Assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 4 veces', () => {
    Assert.equal(spy.callCount, 4);
  });

  [
    [undefined, undefined],
    [undefined, undefined],
    [4, 4],
    [4, 4]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () => {
      it(`debería comparar ${args[0]} con ${args[1]}`, () => {
        Assert.deepEqual(spy.getCall(idx).args, args);
      })
    });
  });

  describe('machine', () => {

    it('debería ser un objeto con una propiedad "motors"', () => {
      Assert.equal(typeof machine, 'object');
      Assert.ok(machine.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería ser 4', () => Assert.equal(machine.motors, 4)));

  });

  describe('vehicle', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      Assert.equal(typeof vehicle, 'object');
      Assert.equal(Object.keys(vehicle).length, 0);
    });

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(vehicle.__proto__, machine);
    });

    describe('vehicle.motors', () =>
      it('debería resolver a 4', () => Assert.equal(vehicle.motors, 4)));

  });

  describe('robot', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      Assert.equal(typeof robot, 'object');
      Assert.equal(Object.keys(robot).length, 0);
    });

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(robot.__proto__, machine);
    });

    describe('robot.motors', () =>
      it('debería resolver a 4', () => Assert.equal(robot.motors, 4)));

  });

});
