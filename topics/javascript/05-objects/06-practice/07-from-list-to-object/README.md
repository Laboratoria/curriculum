---
tracks:
  - web-dev
env: cjs
---

# fromListToObject

Escribe una función `fromListToObject` que toma un array de matrices, y
devuelve un objeto con cada par de elementos en la array como un par
llave-valor.

Ejemplo de entrada:

```js
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

Valor de retorno de la función (salida):

```js
{
  make: 'Ford'
  model: 'Mustang',
  year: 1964
}
```

No cambies la cadena de entrada. Piensa que todos los elementos del array serán
del tipo `string`.

Ten en cuenta que la entrada puede tener un número diferente de elementos que
la muestra dada. Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu
código debería adaptarse de manera flexible.
