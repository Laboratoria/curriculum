const Assert = require('chai').assert;
const getProductOfAllElementsAtProperty = require('../solution/getProductOfAllElementsAtProperty');

describe("getProductOfAllElementsAtProperty()", function () {
  it("deberia regresar 0, para { koy: [1, 2, 3] } y 'key'", function () {
    var obj = {
      koy: [1, 2, 3]
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 0, para { key: 'nope' } y 'key'", function () {
    var obj = {
      key: 'nope'
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 0, para { key: [] } y 'key'", function () {
    var obj = {
      key: []
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar 24, para { key: [1, 2, 3, 4] } y 'key'", function () {
    var obj = {
      key: [1, 2, 3, 4]
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 24);
  });

  it("deberia regresar 60, para { key: [1, 5, 6, 2, 1] } y 'key'", function () {
    var obj = {
      key: [1, 5, 6, 2, 1]
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 60);
  });
});
