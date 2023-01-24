---
env: cjs
---

# transformFirstAndLast

Escribe una función `transformFirstAndLast` que toma un array y devuelve un
objeto con:

1. el primer elemento del array como la llave del objeto, y
2. el último elemento del array como valor de esa llave.

Ejemplo de entrada:

```js
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
```

Valor de retorno de la función (salida):

```js
{
  Queen: 'Beyonce'
}
```

No cambies el array de entrada. Piensa que todos los elementos del array de
entrada serán del tipo `string`.

Ten en cuenta que el array de entrada puede tener un número variable de
elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

```js
['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
```

Valor de retorno de la función (salida):

```js
{
  Kevin: "Spacey"
}
```
