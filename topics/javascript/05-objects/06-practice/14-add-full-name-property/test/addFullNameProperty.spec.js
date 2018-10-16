const Assert = require('chai').assert;
const addFullNameProperty = require('../solution/addFullNameProperty');

describe('addFullNameProperty()', () => {
  it('debería regresar "Kemal Mahmud", para {firstName: "Kemal", lastName: "Mahmud"}', () => {
    const person = { firstName: 'Kemal', lastName: 'Mahmud' };
    const personWithFullName = addFullNameProperty(person);

    Assert.ok(personWithFullName !== person);
    Assert.equal(personWithFullName.firstName, 'Kemal');
    Assert.equal(personWithFullName.lastName, 'Mahmud');
    Assert.equal(personWithFullName.fullName, 'Kemal Mahmud');
  });
});
