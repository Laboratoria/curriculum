const Assert = require('chai').assert;
const addFullNameProperty = require('../solution/addFullNameProperty');

describe('addFullNameProperty()', () => {
  it("deve devolver 'Kemal Mahmud', para { firstName : 'Kemal', lastName : 'Mahmud' }", () => {
    const name = { firstName: 'Kemal', lastName: 'Mahmud' };
    const full = { fullName: 'Kemal Mahmud' };

    addFullNameProperty(name);

    Assert.deepEqual(name['fullName'], full['fullName']);
  });
});
