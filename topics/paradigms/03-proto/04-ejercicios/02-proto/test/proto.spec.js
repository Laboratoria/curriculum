import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/proto.js';
const { machine, robot, robby } = Submission;


describe('proto', () => {

  it('debería exportar un objeto con las propiedades "machine", "robot" y "robby"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('machine'));
    assert.ok(Submission.hasOwnProperty('robot'));
    assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 2 veces', () => {
    assert.equal(spy.callCount, 2);
  });

  describe('primera invocación a claim', () => {
    it('debería comparar 4 con 4', () => {
      assert.deepEqual(spy.getCall(0).args, [4, 4]);
    })
  });

  describe('segunda invocación a claim', () => {
    it('debería comparar true con true', () => {
      assert.deepEqual(spy.getCall(1).args, [true, true]);
    })
  });

  describe('machine', () => {

    it('debería ser un objeto con una propiedad "motors"', () => {
      assert.equal(typeof machine, 'object');
      assert.ok(machine.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería ser 4', () => assert.equal(machine.motors, 4)));

  });

  describe('robot', () => {

    it('debería ser un objeto con una propiedad "friendly"', () => {
      assert.equal(typeof robot, 'object');
      assert.ok(robot.hasOwnProperty('friendly'));
    });

    describe('robot.friendly', () =>
      it('debería ser true', () => assert.equal(robot.friendly, true)));

  });

  describe('robby', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      assert.equal(Object.keys(robby).length, 0);
    });

    describe('robby.__proto__', () =>
      it('debería ser robot', () => assert.equal(robby.__proto__, robot)));

    describe('robby.__proto__.__proto__', () =>
      it('debería ser machine', () => assert.equal(robby.__proto__.__proto__, machine)));

    describe('robby.motors', () =>
      it('debería resolver a 4', () => assert.equal(robby.motors, 4)));

    describe('robby.friendly', () =>
      it('debería resolver a true', () => assert.equal(robby.friendly, true)));

  });

});
