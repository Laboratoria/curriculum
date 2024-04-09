import { assert } from 'chai';
import * as Submission from '../solution/composition.js';


describe('Object composition', () => {

  describe('murderDog()', () => {

    it('debería ser una función', () => {
      assert.equal(typeof Submission.murderDog, 'function');
    });

    it('debería retornar un objeto con bark, poop y kill', () => {
      const obj = Submission.murderDog();
      assert.deepEqual(Object.keys(obj), ['bark', 'poop', 'kill']);
      assert.equal(typeof obj.bark, 'function');
      assert.equal(typeof obj.poop, 'function');
      assert.equal(typeof obj.kill, 'function');
    });

  });

  describe('murderRobot()', () => {

    it('debería ser una función', () => {
      assert.equal(typeof Submission.murderRobot, 'function');
    });

    it('debería retornar un objeto con drive y kill', () => {
      const obj = Submission.murderRobot();
      assert.deepEqual(Object.keys(obj), ['drive', 'kill']);
      assert.equal(typeof obj.drive, 'function');
      assert.equal(typeof obj.kill, 'function');
    });

  });

  describe('murderRobotDog()', () => {

    it('debería ser una función', () => {
      assert.equal(typeof Submission.murderRobotDog, 'function');
    });

    it('debería retornar un objeto con bark, drive y kill', () => {
      const obj = Submission.murderRobotDog();
      assert.deepEqual(Object.keys(obj), ['bark', 'drive', 'kill']);
      assert.equal(typeof obj.bark, 'function');
      assert.equal(typeof obj.drive, 'function');
      assert.equal(typeof obj.kill, 'function');
    });

  });
});
