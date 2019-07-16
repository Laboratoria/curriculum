# parseJson

Implementa uma função que receba uma string (no formato JSON) e retorne o JSON
parseado (usando `JSON.parse`). A função não deve lançar exceções, porém
`JSON.parse` poderá lançá-las. Se ocorrer uma exceção ao parsear a string JSON,
devemos evitar que seja lançado um erro, e sim devolvê-lo como valor de retorno.

## Exemplo

```js
const result = parseJson('bad JSON');
if (result instanceof Error) {
  console.log('Ocorreu um erro', err.message);
}

const json = parseJson('{ "foo": true, "bar": "baz" }');
console.log(json);
// => { foo: true, bar: 'baz' }
```
