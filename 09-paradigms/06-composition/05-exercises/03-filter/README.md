# Filter

* Environment: `js`

***
# Tarea

Usa `Array#filter` para implementar una función llamada `getShortMessages`.

La función `getShortMessages` recibe un array de objetos con una propiedad
`message` y retorna un array con los mensajes que tengan *menos de < 50
caracteres*.

La función debe retornar un array con los mensajes (strings), *no objetos*.

## Argumentos

* `messages`: un `Array` de 10 a 100 objetos con este formato:

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

## Requisitos

* No uses ningún bucle `for/while` o `Array.prototype.forEach`.
* No crees ninguna función extra (helpers, ...).

## Pistas

* Prueba a "encadenar" métodos de `Array`!

## Ejemplo

La función debe retornar algo parecido a:

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

***

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`coi verify filter.js`