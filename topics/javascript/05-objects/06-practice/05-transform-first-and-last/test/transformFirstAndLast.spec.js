
/* // const Assert = require('chai').assert;
const expect = require('chai').expect;
const transformFirstAndLast = require('../solution/transformFirstAndLast');

describe("transformFirstAndLast()", function () {
  it("debería regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    expect(transformFirstAndLast(['King', 'Kemal', 'Freddie'])).to.deep.equal({ King: 'Freddie' });
  });

  it("debería regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
    expect(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])).to.deep.equal({ Queen: 'Beyonce' });
  });
}); */
const Assert = require('chai').assert;
const transformFirstAndLast = require('../solution/transformFirstAndLast');

describe('transformFirstAndLast()', () => {
  it("debería regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", () => {
    Assert.deepEqual(transformFirstAndLast(['King', 'Kemal', 'Freddie']), { King: 'Freddie' });
  });

  it("debería regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", () => {
    Assert.deepEqual(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']), { Queen: 'Beyonce' });
  });
});
