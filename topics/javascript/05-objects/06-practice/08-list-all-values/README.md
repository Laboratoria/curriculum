---
env: cjs
---

# listAllValues

Escribe una función llamada `listAllValues` que devuelve un array de todos los
valores del objeto de entrada.

Ejemplo de entrada:

```js
{
  name: 'Krysten',
  age: 33,
  hasPets: false
}
```

Valor de retorno de la función (salida):

```js
['Krysten', 33, false]
```

Ten en cuenta que la entrada puede tener un número diferente de llaves y
valores que la muestra dada.

Por ejemplo, también debe manejar una entrada como:

```js
{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
```

Valor de retorno de la función (salida):

```js
['a', 11, true, 1]
```
