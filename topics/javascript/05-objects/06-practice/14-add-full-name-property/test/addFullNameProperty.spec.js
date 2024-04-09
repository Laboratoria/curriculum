import { assert } from 'chai';
import addFullNameProperty from '../solution/addFullNameProperty.js';

describe('addFullNameProperty()', () => {
  it('debería regresar "Kemal Mahmud", para {firstName: "Kemal", lastName: "Mahmud"}', () => {
    const person = { firstName: 'Kemal', lastName: 'Mahmud' };
    const personWithFullName = addFullNameProperty(person);

    assert.ok(personWithFullName !== person);
    assert.equal(personWithFullName.firstName, 'Kemal');
    assert.equal(personWithFullName.lastName, 'Mahmud');
    assert.equal(personWithFullName.fullName, 'Kemal Mahmud');
  });
});
