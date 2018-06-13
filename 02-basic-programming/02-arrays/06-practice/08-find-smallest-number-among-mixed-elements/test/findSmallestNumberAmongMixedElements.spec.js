
const Assert = require('chai').assert;
const findSmallestNumberAmongMixedElements = require('../solution/findSmallestNumberAmongMixedElements');

describe("findSmallestNumberAmongMixedElements()", function () {
  it("deve devolver 0, para  (['cat', 'is', 'cute', 'as', 'fuck'])", function () {
	var output = findSmallestNumberAmongMixedElements(['cat', 'is', 'cute', 'as', 'fuck']);
	Assert.equal(output, 0);
  });

  it("deve devolver 0, para ([])", function () {
	var output = findSmallestNumberAmongMixedElements([]);
	Assert.equal(output, 0);
  });


  it("deve devolver 1, para ([10, 9, 'Yes', 'why', 1, 'ahh'])", function () {

	var output = findSmallestNumberAmongMixedElements([10, 9, 'Yes', 'why', 1, 'ahh']);
	Assert.equal(output, 1);

  });

});
