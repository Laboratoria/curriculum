
const Assert = require('chai').assert;
const computeSumOfAllElements = require('../solution/computeSumOfAllElements');

describe("computeSumOfAllElements()", function () {
  it("deberia regresar 0, para  ([1, 2, 3])", function () {
	var output = computeSumOfAllElements([1, 2, 3]);
	Assert.deepEqual(output, 6);
  });

  it("deberia regresar 169, para ([10, 90, 69])", function () {
	var output = computeSumOfAllElements([10, 90, 69]);

	Assert.deepEqual(output, 169);
  });
  

  it("deberia regresar 28, para ([4, 5, 10, 9])", function () {
	var output = computeSumOfAllElements([4, 5, 10, 9]);
	Assert.deepEqual(output, 28);

  });
 
});
