
const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe("convertDoubleSpaceToSingle()", function () {
  it("Test_1", function () {
	Assert.deepEqual( convertDoubleSpaceToSingle(""), "");

  });

  it("Test_2", function () {

 	var output = convertDoubleSpaceToSingle("Messi  is  the  greatest  player  ever");
	 
	Assert.deepEqual(output, "Messi is the greatest player ever"); 
  });
  

});
