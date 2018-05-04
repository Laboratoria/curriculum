
const Assert = require('chai').assert;
const getLongestWordOfMixedElements = require('../solution/getLongestWordOfMixedElements');

describe("getLongestWordOfMixedElements()", function () {
  it("debería regresar '', para  ([3, 4, 5, 6, 7])", function () {
	var output = getLongestWordOfMixedElements([3, 4, 5, 6, 7]);
	Assert.deepEqual(output, '');
  });

  it("debería regresar '', para ([])", function () {
	var output = getLongestWordOfMixedElements([]);
	Assert.deepEqual(output, '');
  });
  

  it("debería regresar 'word', para ([3, 'word', 5, 'up', 3, 1])", function () {

	var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
	Assert.deepEqual(output, 'word');

  });
 
});
