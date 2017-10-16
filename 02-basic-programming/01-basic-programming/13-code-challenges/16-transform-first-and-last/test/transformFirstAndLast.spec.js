
/* // const Assert = require('chai').assert;
const expect = require('chai').expect;
const transformFirstAndLast = require('../solution/transformFirstAndLast');

describe("transformFirstAndLast()", function () {
<<<<<<< HEAD
  it("deberia regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    expect(transformFirstAndLast(['King', 'Kemal', 'Freddie'])).to.deep.equal({ King: 'Freddie' });
  });

  it("deberia regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
=======
  it("debería regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    expect(transformFirstAndLast(['King', 'Kemal', 'Freddie'])).to.deep.equal({ King: 'Freddie' });
  });

  it("debería regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
>>>>>>> eea199e78469cff33fe330813116e076e0f5ace0
    expect(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])).to.deep.equal({ Queen: 'Beyonce' });
  });
}); */
const Assert = require('chai').assert;
const transformFirstAndLast = require('../solution/transformFirstAndLast');

describe("transformFirstAndLast()", function () {
<<<<<<< HEAD
  it("deberia regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    Assert.deepEqual(transformFirstAndLast(['King', 'Kemal', 'Freddie']), { King: 'Freddie' });
  });

  it("deberia regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
=======
  it("debería regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    Assert.deepEqual(transformFirstAndLast(['King', 'Kemal', 'Freddie']), { King: 'Freddie' });
  });

  it("debería regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
>>>>>>> eea199e78469cff33fe330813116e076e0f5ace0
    Assert.deepEqual(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']), { Queen: 'Beyonce' });
  });
});
