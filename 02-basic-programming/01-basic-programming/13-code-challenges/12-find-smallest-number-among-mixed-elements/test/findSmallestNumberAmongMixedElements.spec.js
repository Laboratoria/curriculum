
const Assert = require('chai').assert;
const findSmallestNumberAmongMixedElements = require('../solution/findSmallestNumberAmongMixedElements');

describe("findSmallestNumberAmongMixedElements()", function () {
  it("debería regresar 0, para  (['cat', 'is', 'cute', 'as', 'fuck'])", function () {
	var output = findSmallestNumberAmongMixedElements(['cat', 'is', 'cute', 'as', 'fuck']);
	Assert.deepEqual(output, '');
  });

  it("debería regresar 0, para ([])", function () {
	var output = findSmallestNumberAmongMixedElements([]);
	Assert.deepEqual(output, '');
  });
  

  it("debería regresar 1, para ([10, 9, 'Yes', 'why', 1, 'ahh'])", function () {

	var output = findSmallestNumberAmongMixedElements([10, 9, 'Yes', 'why', 1, 'ahh']);
	Assert.deepEqual(output, 1);

  });
 
});
