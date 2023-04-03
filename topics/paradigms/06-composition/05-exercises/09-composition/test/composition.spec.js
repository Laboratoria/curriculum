const Assert = require('chai').assert;
const Submission = require('../solution/composition');


describe('Object composition', () => {

  describe('murderDog()', () => {

    it('debería ser una función', () => {
      Assert.equal(typeof Submission.murderDog, 'function');
    });

    it('debería retornar un objeto con bark, poop y kill', () => {
      const obj = Submission.murderDog();
      Assert.deepEqual(Object.keys(obj), ['bark', 'poop', 'kill']);
      Assert.equal(typeof obj.bark, 'function');
      Assert.equal(typeof obj.poop, 'function');
      Assert.equal(typeof obj.kill, 'function');
    });

  });

  describe('murderRobot()', () => {

    it('debería ser una función', () => {
      Assert.equal(typeof Submission.murderRobot, 'function');
    });

    it('debería retornar un objeto con drive y kill', () => {
      const obj = Submission.murderRobot();
      Assert.deepEqual(Object.keys(obj), ['drive', 'kill']);
      Assert.equal(typeof obj.drive, 'function');
      Assert.equal(typeof obj.kill, 'function');
    });

  });

  describe('murderRobotDog()', () => {

    it('debería ser una función', () => {
      Assert.equal(typeof Submission.murderRobotDog, 'function');
    });

    it('debería retornar un objeto con bark, drive y kill', () => {
      const obj = Submission.murderRobotDog();
      Assert.deepEqual(Object.keys(obj), ['bark', 'drive', 'kill']);
      Assert.equal(typeof obj.bark, 'function');
      Assert.equal(typeof obj.drive, 'function');
      Assert.equal(typeof obj.kill, 'function');
    });

  });
});
