import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/propertyAssignments.js';
const { machine, vehicle, robot } = Submission;


describe('propertyAssignments', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('machine'));
    assert.ok(Submission.hasOwnProperty('vehicle'));
    assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 6 veces', () => {
    assert.equal(spy.callCount, 6);
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
        assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('machine', () => {

    it('debería tener una propiedad motors', () => {
      assert.ok(robot.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería tener valor null', () => assert.equal(machine.motors, null))
    );

  });

  describe('vehicle', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(vehicle.__proto__, machine);
    });

  });

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(robot.__proto__, machine);
    });

    it('debería tener una propiedad motors', () => {
      assert.ok(robot.hasOwnProperty('motors'));
    });

    describe('robot.motors', () =>
      it('debería tener valor 4', () => assert.equal(robot.motors, 4))
    );

  });

});
