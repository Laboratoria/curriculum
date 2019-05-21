
const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe("convertDoubleSpaceToSingle()", function () {
  it("deve devolver '', para string vazia", function () {
	Assert.deepEqual( convertDoubleSpaceToSingle(""), "");

  });

  it("deve devolver 'Messi is the greatest player ever', para 'Messi  is  the  greatest  player  ever'", function () {
 	var output = convertDoubleSpaceToSingle("Messi  is  the  greatest  player  ever");
	Assert.deepEqual(output, "Messi is the greatest player ever");
  });


});
