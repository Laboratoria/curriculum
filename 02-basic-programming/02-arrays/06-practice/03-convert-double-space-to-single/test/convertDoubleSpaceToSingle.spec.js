
const Assert = require('chai').assert;
const convertDoubleSpaceToSingle = require('../solution/convertDoubleSpaceToSingle');

describe("convertDoubleSpaceToSingle()", function () {
  it("debería regresar '', para string vacío", function () {
	Assert.deepEqual( convertDoubleSpaceToSingle(""), "");

  });

  it("debería regresar 'Messi is the greatest player ever', para 'Messi  is  the  greatest  player  ever'", function () {
 	var output = convertDoubleSpaceToSingle("Messi  is  the  greatest  player  ever");	 
	Assert.deepEqual(output, "Messi is the greatest player ever"); 
  });
  

});
