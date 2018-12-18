
const Assert = require('chai').assert;
const getNthElement = require('../solution/getNthElement');

describe("getNthElement()", function () {
  it("deve devolver undefined, para array vazio", function () {

	var arr = [];
    Assert.deepEqual(getNthElement(arr, 1), undefined);
  });

  it("deve devolver 2, para getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1)", function () {

    var arr = [1, 2, 3, 4, 5, 6, 100, 7, 9];
	Assert.deepEqual(getNthElement(arr, 1), 2);
  });


});
