
const Assert = require('chai').assert;
const addArrayProperty = require('../solution/addArrayProperty');

describe("addArrayProperty()", function () {
  it("Test_1", function () {

  	var myObj = {};
	var myArray = [5, 8, 12];
	addArrayProperty(myObj, 'key', myArray);

    Assert.deepEqual(myObj.key, myArray);
  });
 

});
