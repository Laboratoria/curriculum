import { assert } from 'chai';
import parseJson from '../solution/parseJson.js';

describe('parseJson()', () => {
  it('debería ser una función', () => {
    assert.equal(typeof parseJson, 'function');
  });

  it('debería devolver un error en vez de arrojarlo con JSON inválido', () => {
    const result = parseJson();
    assert.ok(result instanceof  SyntaxError);
  });

  it('debería devolver JSON parseado cuando formato del string es ok', () => {
    const result = parseJson('{ "foo": true, "bar": "baz" }');
    assert.deepEqual(result, { foo: true, bar: 'baz' });
  });
});
