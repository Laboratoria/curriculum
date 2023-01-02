const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/implicitThis');
const { Robot, Vehicle } = Submission;

describe('implicitThis', () => {

  it('debería exportar un objeto con las propiedades "Robot", "Vehicle"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('Robot'));
    Assert.ok(Submission.hasOwnProperty('Vehicle'));
  });

  describe('Robot', () => {

    it('debería ser un constructor', () => {
      Assert.equal(typeof Robot, 'function');
    });

    describe('new Robot', () => {

      it('debería retornar una instancia de robot', () => {
        const robot = new Robot();
        Assert.equal(robot instanceof Robot, true);
      })
    })

  });

  describe('Vehicle', () => {

    it('debería ser un constructor', () => {
      Assert.equal(typeof Vehicle, 'function');
    });

    describe('new Vehicle', () => {

      it('no debería retornar una instancia de Vehicle', () => {
        const vehicle = new Vehicle();
        Assert.equal(vehicle instanceof Vehicle, false);
      });

    });


  });


});
