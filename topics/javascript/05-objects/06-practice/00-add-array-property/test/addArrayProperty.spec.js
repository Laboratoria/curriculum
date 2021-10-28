const { assert } = require('chai');
const addArrayProperty = require('../solution/addArrayProperty');

describe('addArrayProperty()', () => {
  it('debería regresar [5, 8, 12], para addArrayProperty({}, "key", [5, 8, 12])', () => {
    const myObj = {};
    const myArray = [5, 8, 12];

    addArrayProperty(myObj, 'key', myArray);
    assert.deepEqual(myObj.key, myArray);
  });
});
