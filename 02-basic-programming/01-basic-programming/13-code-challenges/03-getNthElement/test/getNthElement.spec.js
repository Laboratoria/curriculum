
const Assert = require('chai').assert;
const getNthElement = require('../solution/getNthElement');

describe("getNthElement()", function () {
  it("Test_1", function () {

	var arr = [];
    Assert.deepEqual(getNthElement(arr, 1), undefined);
  });

  it("Test_2", function () {

    var arr = [1, 2, 3, 4, 5, 6, 100, 7, 9];
	Assert.deepEqual(getNthElement(arr, 6), 100);
	Assert.deepEqual(getNthElement(arr, 1), 2);
  });
  

});
