---
type: read
duration: 10min
---

# Aplicación parcial

Quizá la mejor manera de explicar este concepto es verlo directamente en acción.
Imagina la siguiente función:

```js
const greetPart = greeting => name => `${greeting}, ${name}`

const greetHello = greetPart('Hello')

greetHello('Heidi')
// => 'Hello, Heidi'
```

La función `greetPart()` recibe un argumento (`greeting`) y retorna una función,
que a su vez recibe un argumento (`name`) y retorna un string. Al invocar
`greetPart('Hello')` estamos parcialmente aplicando el primer argumento
(`greeting`), para más tarde invocar `greetHello()` con el argumento que falta
(`name`).

Las funciones parcialmente aplicadas no necesariamente interactuan con un
argumento a la vez, pueden interactuar con cualquier número de argumentos
parcialmente aplicados que son almacenados para su posterior ejecución.

## Aplicación parcial sobre uno y dos argumentos conocidos

Podríamos crear una función que nos permita aplicar parcialmente un argumento
a cualquier función que espere más de un argumento. Considera el siguiente
código:

```js
// Función que espera más de un argumento
const greet = (greeting, name) => `${greeting}, ${name}`

// Utilidad para aplicar parcialmente primer argumento
const partial1 = (fun, arg1) =>
  (...args) => {
    const params = Array.prototype.concat(arg1, args)
    return fun.apply(fun, params)
  }

// Aplica parcialmente 'Hello' como primer argumento de `greet`
const greetHello = partial1(greet, 'Hello')

greetHello('Heidi')
// => 'Hello, Heidi'
```

**NOTA**: También es posible utilizar `Function.prototype.bind()` para
implementar `partial1` reemplazando su cuerpo por `fun.bind(null, arg1)`

De nuevo hemos logrado recrear la operación de la función `greetHello` al
componer una función a partir de otra dado un argumento previo de
"configuración". De igual manera pudimos haber hecho lo siguiente:

```js
const partial2 = (fun, arg1, arg2) =>
  (...args) => {
    const params = Array.prototype.concat(arg1, arg2, args)
    return fun.apply(fun, params)
  }

const greetHelloHeidi = partial2(greet, 'Hello', 'Heidi')

greetHelloHeidi()
// => 'Hello, Heidi'
```

## Aplicación parcial sobre un número arbitrario de argumentos

La aplicación parcial de un número arbitrario de argumentos es ciertamente una
estrategia de composición. Afortunadamente, la implementación de la función
`partial` no es significativamente más compleja que `partial1` y `partial2`. De
hecho, aplicaremos la misma base:

```js
const partial = (fun, ...args) =>
  (...newArgs) => {
    const params = Array.prototype.concat(args, newArgs)
    return fun.apply(fun, params)
  }

const greeter = (greeting, separator, emphasis, name) =>
  `${greeting}${separator}${name}${emphasis}`

const greetHello = partial(greeter, 'Hello', ', ', '.')

greetHello('Heidi')
// => 'Hello, Heidi.'
```

Como pudiste notar, el principio es el mismo, `partial` captura cierto número
de argumentos y retorna una función que los usa como argumentos prefijo para su
llamada final.

Es importante hacer mencionar que podemos realizar aplicación parcial de manera
sucinta por medio de `bind`, por ejemplo:

```js
const greeter = (greeting, separator, emphasis, name) =>
  `${greeting}${separator}${name}${emphasis}`

const greetHello = greeter.bind(null, 'Hello', ', ', '.')

greetHello('Heidi')
// => 'Hello, Heidi.'
```

Finalmente, es importante mencionar que en este caso la función que estamos
parcialmente aplicando espera un número fijo de argumentos, el hecho que pueda
aceptar cualquier cantidad de argumentos a veces puede causar confusión, fijate
en el siguiente ejemplo:

```js
greeter.bind(null, 'Hello', ', ', '.', 'Heidi', 'how', 'are', 'you', '?')()
// => 'Hello, Heidi.'
```

Nuestra función `greeter` espera 4 argumentos, en este caso el resto de los
argumentos pasados simplemente son ignorados.

## Referencias

* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do) de
  Michael Fogus
* [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
