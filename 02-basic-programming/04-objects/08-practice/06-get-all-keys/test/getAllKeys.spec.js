
/* // const Assert = require('chai').assert;
const expect = require('chai').expect;
const transformFirstAndLast = require('../solution/transformFirstAndLast');

describe("transformFirstAndLast()", function () {
  it("deve devolver { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", function () {
    expect(transformFirstAndLast(['King', 'Kemal', 'Freddie'])).to.deep.equal({ King: 'Freddie' });
  });

  it("deve devolver { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", function () {
    expect(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])).to.deep.equal({ Queen: 'Beyonce' });
  });
}); */
const Assert = require('chai').assert;
const getAllKeys = require('../solution/getAllKeys');

describe("getAllKeys()", function () {
  it("deve devolver ['tes', 'ini', 'berhasil'], para { tes : 'tes', ini : 'apa',berhasil : 10 }", function () {
    var hasil = ['tes', 'ini', 'berhasil'];
    var obj = {
      tes: 'tes',
      ini: 'apa',
      berhasil: 10
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });

  it("deve devolver ['a', 'number', 'hungry', 'grammyWins'], para { a: 'a', number: 11, hungry: true, grammyWins: 1 }", function () {
    var hasil = ['a', 'number', 'hungry', 'grammyWins'];
    var obj = {
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1
    };

    Assert.deepEqual(getAllKeys(obj), hasil);
  });
});
