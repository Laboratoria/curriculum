
const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe("convertDoubleSpaceToSingle()", function () {
  it("Prueba: String vacio. convertDoubleSpaceToSingle('') => ''", function () {
	Assert.deepEqual( convertDoubleSpaceToSingle(""), "");

  });

  it("Prueba: String largo. convertDoubleSpaceToSingle('Messi  is  the  greatest  player  ever') => 'Messi is the greatest player ever'", function () {

 	var output = convertDoubleSpaceToSingle("Messi  is  the  greatest  player  ever");
	 
	Assert.deepEqual(output, "Messi is the greatest player ever"); 
  });
  

});
