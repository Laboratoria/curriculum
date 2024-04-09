const globalScope = (typeof WorkerNavigator !== 'undefined' ? WorkerNavigator : global);
// TODO this case is weird, why imported in this way with global and require?
// import Assert = globalScope.Assert from 'chai').assert;
// const assert = globalScope.Assert;
import { assert } from 'chai';
import Submission from '../solution/simpleObjects.js';


describe('module', () => {

  it('debería exportar un objeto con una propiedad "robot"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('robot'));
  });

  describe('robot', () => {

    it('debería ser un objeto', () => {
      assert.equal(typeof Submission.robot, 'object');
    });

    it('debería tener una propiedad "smart"', () => {
      assert.ok(Submission.robot.hasOwnProperty('smart'));
    });

    describe('robot.smart', () => {

      it('debería ser true', () => {
        assert.equal(Submission.robot.smart, true);
      });

    });

  });

});
