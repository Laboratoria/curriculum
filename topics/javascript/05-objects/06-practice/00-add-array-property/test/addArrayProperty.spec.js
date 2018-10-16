
const Assert = require('chai').assert;
const addArrayProperty = require('../solution/addArrayProperty');

describe('addArrayProperty()', () => {
  it('debería regresar [5, 8, 12], para addArrayProperty({}, "key", [5, 8, 12])', () => {
    const myObj = {};
    const myArray = [5, 8, 12];

    addArrayProperty(myObj, 'key', myArray);
    Assert.deepEqual(myObj.key, myArray);
  });
});
