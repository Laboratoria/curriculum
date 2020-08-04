const { assert } = require('chai');
const areValidCredentials = require('../solution/areValidCredentials');

describe('areValidCredentials()', () => {
  it('debería regresar true cuando las credenciales son válidas', () => {
    const output = areValidCredentials('Kemal', 'testtesttest');
    assert.deepEqual(output, true);
  });

  it('debería regresar false cuando el nombre es demasiado corto', () => {
    const output = areValidCredentials('K', 'mylongpassword');
    assert.deepEqual(output, false);
  });

  it('debería regresar false cuando la contraseña es demasiado corta', () => {
    const output = areValidCredentials('Kemal', 'aah');
    assert.deepEqual(output, false);
  });
});
