---
env: cjs
---

# convertObjectToList

Escribe una función llamada `convertObjectToList` que convierte un objeto
literal en una array de arrays, como esto:

Argumento:

```js
{
  name: 'Holly',
  edad: 35,
  papel: 'productor'
}
```

Valor de retorno:

```js
[['name', 'Holly'], ['edad', 35], ['rol', 'productor']]
```

Ten en cuenta que tu función debe ser capaz de manejar cualquier objeto como
este, no sólo la muestra exacta proporcionada anteriormente.

Por ejemplo, también debería ser capaz de manejar esto, o cualquier otro objeto
que contiene pares llave-valor simples.

```js
{
  species: 'canino',
  name: 'Bowser',
  weight: 45
}
```
