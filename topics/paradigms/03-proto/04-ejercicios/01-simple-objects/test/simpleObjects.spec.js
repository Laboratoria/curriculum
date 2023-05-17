const globalScope = (typeof WorkerNavigator !== 'undefined' ? WorkerNavigator : global);
const Assert = globalScope.Assert = require('chai').assert;
const Submission = require('../solution/simpleObjects');


describe('module', () => {

  it('debería exportar un objeto con una propiedad "robot"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('robot'));
  });

  describe('robot', () => {

    it('debería ser un objeto', () => {
      Assert.equal(typeof Submission.robot, 'object');
    });

    it('debería tener una propiedad "smart"', () => {
      Assert.ok(Submission.robot.hasOwnProperty('smart'));
    });

    describe('robot.smart', () => {

      it('debería ser true', () => {
        Assert.equal(Submission.robot.smart, true);
      });

    });

  });

});
