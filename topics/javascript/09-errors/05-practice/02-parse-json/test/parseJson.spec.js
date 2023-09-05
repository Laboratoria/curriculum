const Assert = require('chai').assert;
const parseJson = require('../solution/parseJson');

describe('parseJson()', () => {
  it('debería ser una función', () => {
    Assert.equal(typeof parseJson, 'function');
  });

  it('debería devolver un error en vez de arrojarlo con JSON inválido', () => {
    const result = parseJson();
    Assert.ok(result instanceof  SyntaxError);
  });

  it('debería devolver JSON parseado cuando formato del string es ok', () => {
    const result = parseJson('{ "foo": true, "bar": "baz" }');
    Assert.deepEqual(result, { foo: true, bar: 'baz' });
  });
});
