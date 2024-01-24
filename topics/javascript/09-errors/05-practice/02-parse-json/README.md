---
tracks:
  - web-dev
env: cjs
---

# parseJson

Implementa una función que reciba un string (en formato JSON) y retorne el JSON
parseado (usando `JSON.parse`). La función no debe arrojar excepciones, a pesar
de que `JSON.parse` puede arrojarlas. Si ocurriera una excepción al parsear el
string JSON, debemos evitar que se arroje el error y en vez hay que devolverlo
como valor de retorno.

## Ejemplo

```js
const result = parseJson('bad JSON');
if (result instanceof Error) {
  console.log('Ocurrión un error', err.message);
}


const json = parseJson('{ "foo": true, "bar": "baz" }');
console.log(json);
// => { foo: true, bar: 'baz' }
```
