const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/dotNew');
const { Robot } = Submission;

describe('dotNew', () => {

  it('debería exportar un objeto con las propiedades "Robot"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('Robot'));
  });

  describe('Robot', () => {

    it('debería tener una función llamada "new"', () => {
      Assert.equal(typeof Robot.new, 'function');
    });

    describe('Robot.new', () => {

      it('debería devolver un objeto que tiene como prototipo a Robot', () => {
        Assert.equal(Robot.new().__proto__, Robot);
      });

    });

  });

});
