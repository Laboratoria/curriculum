const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => Assert.equal(actual, expected);
const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/proto');
const { machine, robot, robby } = Submission;


describe('proto', () => {

  it('debería exportar un objeto con las propiedades "machine", "robot" y "robby"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('machine'));
    Assert.ok(Submission.hasOwnProperty('robot'));
    Assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 2 veces', () => {
    Assert.equal(spy.callCount, 2);
  });

  describe('primera invocación a claim', () => {
    it('debería comparar 4 con 4', () => {
      Assert.deepEqual(spy.getCall(0).args, [4, 4]);
    })
  });

  describe('segunda invocación a claim', () => {
    it('debería comparar true con true', () => {
      Assert.deepEqual(spy.getCall(1).args, [true, true]);
    })
  });

  describe('machine', () => {

    it('debería ser un objeto con una propiedad "motors"', () => {
      Assert.equal(typeof machine, 'object');
      Assert.ok(machine.hasOwnProperty('motors'));
    });

    describe('machine.motors', () =>
      it('debería ser 4', () => Assert.equal(machine.motors, 4)));

  });

  describe('robot', () => {

    it('debería ser un objeto con una propiedad "friendly"', () => {
      Assert.equal(typeof robot, 'object');
      Assert.ok(robot.hasOwnProperty('friendly'));
    });

    describe('robot.friendly', () =>
      it('debería ser true', () => Assert.equal(robot.friendly, true)));

  });

  describe('robby', () => {

    it('debería ser un objeto sin propiedades propias', () => {
      Assert.equal(Object.keys(robby).length, 0);
    });

    describe('robby.__proto__', () =>
      it('debería ser robot', () => Assert.equal(robby.__proto__, robot)));

    describe('robby.__proto__.__proto__', () =>
      it('debería ser machine', () => Assert.equal(robby.__proto__.__proto__, machine)));

    describe('robby.motors', () =>
      it('debería resolver a 4', () => Assert.equal(robby.motors, 4)));

    describe('robby.friendly', () =>
      it('debería resolver a true', () => Assert.equal(robby.friendly, true)));

  });

});
