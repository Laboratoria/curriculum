const Assert = require('chai').assert;
const getSumOfAllElementsAtProperty = require('../solution/getSumOfAllElementsAtProperty');

describe("getSumOfAllElementsAtProperty()", function () {
  it("deberia regresar 0, para { key: Badddlyyyy } y 'key'", function () {
    var obj = {
      koy: "Badddlyyyy"
    };
    var output = getSumOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 0, para { koy: 'nope' } y 'key'", function () {
    var obj = {
      koy: []
    };
    var output = getSumOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 0, para { key: [] } y 'key'", function () {
    var obj = {
      key: []
    };
    var output = getSumOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 35, para { key: [10, 11, 15, -1] } y 'key'", function () {
    var obj = {
      key: [10, 11, 15, -1]
    };
    var output = getSumOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 35);
  });

  it("deberia regresar 13, para { key: [4, 1, 8] } y 'key'", function () {
    var obj = {
      key: [4, 1, 8]
    };
    var output = getSumOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 13);
  });
});
