
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe('areValidCredentials()', () => {
  it('deve devolver true quando as credenciais são válidas', () => {
    const output = areValidCredentials('Kemal', 'testtesttest');
    Assert.deepEqual(output, true);
  });

  it('deve devolver false quando o nome é muito curto', () => {
    const output = areValidCredentials('K', 'mylongpassword');
    Assert.deepEqual(output, false);
  });

  it('deve devolver false quando a senha é muito curta', () => {
    const output = areValidCredentials('Kemal', 'aah');
    Assert.deepEqual(output, false);
  });
});
