La aplicación parcial nos permite crear nuevas funciones a partir de funciones
existentes, a la vez que fijamos algunos argumentos. Despues de fijar los
argumentos para ser parcialmente aplicados, tenemos una nueva función lista para
recibir el resto de los argumentos y quizás ejecutar la función original.

Más formalmente: La aplicación parcial hace referencia al proceso de fijar un
número de argumentos a una función, produciendo otra de menor "arity".

Como ejemplo, digamos que tenemos una función `add` que recibe 2 argumentos y
los suma:

```js
function add(x, y) {
  return x + y
}

add(10, 20) // => 30
```

Ahora, pretendamos que tenemos una función `partiallyApply`, que recibe una
función y unos argumentos que 'aplicar parcialmente'.

Aquí "aplicamos parcialmente" el primer argumento, `x`, de nuestra función
`add`:

```js
var addTen = partiallyApply(add, 10) // fija `x` a 10

```

`addTen` es una nueva función que recibe el argumento `y` de `add`. La función
`add` todavía no se ha invocado!

Una vez que pasemos el argumento `y`, podemos ejecutar la función orginal
(`add`):

```js
addTen(20) // => 30
addTen(100) // => 110
addTen(0) // => 10

// etc
```

Los ejemplos de arriba son lo mismo que invocar `add(10, y)`, donde `y` lo
proporciona la llamada a la función apropiadamente llamada `addTen`.

# Tarea

Usa aplicación parcial para crear una función que fije el primer argumento de
`console.log`. Por ejemplo, implementa una función `logger` que añada un
"namespace" (un string) al resultado.

Tu implementación debe recibir un string `namespace` y retornar una función que
imprima mensajes a la consola con el namespace al principio.

Deberías usar `Function#apply` para implementar aplicación parcial.

Asegúrate de que la función que retorne `logger` imprima *todos* los argumentos
que le pasen.

** Imprime el resultado directamente en la consola **

## Argumentos

* namespace: un String con el nombre del namespace.

## Ejemplo

```js
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

## Requisitos

* No uses `Function#bind`
* Use `Function#apply`

## Boilerplate

```js
var slice = Array.prototype.slice

function logger(namespace) {
  // TU SOLUCIÓN AQUÍ
}

module.exports = logger
```

## Recursos

* https://en.wikipedia.org/wiki/Partial_application
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## Pistas

Recuerda que `console.log` recibe un número indeterminado de argumentos y los
imprime separados por espacios:

```js
console.log('hello', 'world') // => 'hello world'
console.log(1,2,3) // => 1 2 3
```

Sólo queremos 'aplicar parcialmente' el primer argumento a `console.log`.

`Function.prototype.apply` nos permite ejecutar una función, darle un nuevo
valor a `this` (esto podemos ignorarlo en este caso), y *un array de argumentos
para 'aplicarle' a la función*:

```js
add(10, 20) // => 30
add.apply(null, [10, 20]) // => 30
```

Comparemos `Function#apply` con `Function#call`:

```js
add.apply(null, [10, 20]) // => 30
add.call(null, 10, 20) // => 30
```
