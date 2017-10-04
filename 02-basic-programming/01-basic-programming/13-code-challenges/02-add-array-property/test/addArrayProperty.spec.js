
const Assert = require('chai').assert;
const addArrayProperty = require('../solution/addArrayProperty');

describe("addArrayProperty()", function () {
  it("debería regresar [5, 8, 12], para addArrayProperty({}, 'key', [5, 8, 12])", function () {

  	var myObj = {};
	var myArray = [5, 8, 12];
	addArrayProperty(myObj, 'key', myArray);

    Assert.deepEqual(myObj.key, myArray);
  });
 

});
