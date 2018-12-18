
const Assert = require('chai').assert;
const getLargestNumberAmongMixedElements = require('../solution/getLargestNumberAmongMixedElements');

describe("getLargestNumberAmongMixedElements()", function () {
  it("deve devolver 0, para  (['wat', 'no', true, true])", function () {
	var output = getLargestNumberAmongMixedElements(['wat', 'no', true, true]);
	Assert.deepEqual(output, 0);
  });

  it("deve devolver 0, para ([])", function () {
	var output = getLargestNumberAmongMixedElements([]);
	Assert.deepEqual(output, 0);
  });


  it("deve devolver 5, para ([3, 'word', 5, 'up', 3, 1])", function () {
	var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
	Assert.deepEqual(output, 5);

  });

});
