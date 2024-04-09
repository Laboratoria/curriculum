import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/dynamicLookups.js';
const { machine, vehicle, robot } = Submission;


describe('dynamicLookup', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('machine'));
    assert.ok(Submission.hasOwnProperty('vehicle'));
    assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 4 veces', () => {
    assert.equal(spy.callCount, 4);
  });

  [
    [undefined, undefined],
    [undefined, undefined],
    [4, 4],
    [4, 4]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () => {
      it(`debería comparar ${args[0]} con ${args[1]}`, () => {
        assert.deepEqual(spy.getCall(idx).args, args);
      })
    });
  });

  describe('machine', () => {

    it('debería ser un objeto con una propiedad "motors"', () => {
      assert.equal(typeof machine, 'object');
      assert.ok(machine.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería ser 4', () => assert.equal(machine.motors, 4)));

  });

  describe('vehicle', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      assert.equal(typeof vehicle, 'object');
      assert.equal(Object.keys(vehicle).length, 0);
    });

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(vehicle.__proto__, machine);
    });

    describe('vehicle.motors', () =>
      it('debería resolver a 4', () => assert.equal(vehicle.motors, 4)));

  });

  describe('robot', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      assert.equal(typeof robot, 'object');
      assert.equal(Object.keys(robot).length, 0);
    });

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(robot.__proto__, machine);
    });

    describe('robot.motors', () =>
      it('debería resolver a 4', () => assert.equal(robot.motors, 4)));

  });

});
