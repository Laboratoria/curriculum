
const Assert = require('chai').assert;
const findShortestWordAmongMixedElements = require('../solution/findShortestWordAmongMixedElements');

describe("findShortestWordAmongMixedElements()", function () {
  it("deve devolver '', para  ([3, 4, 5])", function () {
	var output = findShortestWordAmongMixedElements([3, 4, 5]);
	Assert.deepEqual(output, '');
  });

  it("deve devolver '', para ([])", function () {
	var output = findShortestWordAmongMixedElements([]);
	Assert.deepEqual(output, '');
  });


  it("deve devolver 'yes', para ([1, 2, 3, 'yes', 'one')", function () {

	var output = findShortestWordAmongMixedElements([1, 2, 3, 'yes', 'one']);
	Assert.deepEqual(output, 'yes');

  });


  it("deve devolver 'two', para [4, 'two', 2, 'three'])", function () {

	var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
	Assert.deepEqual(output, 'two');

  });

});
