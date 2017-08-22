# Aplicación parcial

* Formato: `artículo`
* Duración: 10min

***

Recordarás de la lección de _currying_ que habíamos mencionado que estos
conceptos están relacionados, una función curry es una que retorna
progresivamente una función más específica por cada uno de los argumentos dados
hasta que ya no sean necesarios más parámetros. Una función parcialmente
aplicada, por otra parte, es una función que es "parcialmente" ejecutada y está
lista para su inmediata ejecución una vez dado el resto de los parámetros
esperados.

Quizá la mejor manera para explicar este concepto es verlo directamente en
acción, imagina la siguiente función:

```javascript
const greetPart = greeting => name => `${greeting}, ${name}`

const greetHello = greetPart('Hello')
greetHello('Heidi')
// => 'Hello, Heidi'
```

La implementación de `greetPart` luce muy parecida a la implementación de
`greetCurried`, y eso de hecho resalta la relación entre _currying_ y
aplicación parcial. Al momento que una función curried solo le queda un
argumento adicional por aceptar antes de su ejecución, es efectivamente lo
mismo que una función parcialmente aplicada esperando un argumento más. Sin
embargo, las funciones parcialmente aplicadas no necesariamente interactuan con
un argumento a la vez, puede también interactuar con algún cierto número de
argumentos parcialmente aplicados que son almacenados para su posterior
ejecución, dado el número remanente de parámetros.

## Aplicación parcial sobre uno y dos argumentos conocidos

Una función que parcialmente aplica su primer argumento puede ser la siguiente:

```javascript
const greet = (greeting, name) => `${greeting}, ${name}`

const partial1 = (fun, arg1) =>
  (...args) => {
    const params = Array.prototype.concat(arg1, args)
    return fun.apply(fun, params)
  }
const greetHello = partial1(greet, 'Hello')
greetHello('Heidi')
// => 'Hello, Heidi'
```

**NOTA**: También es posible utilizar `Function.prototype.bind()` para
implementar `partial1` reemplazando su cuerpo por `fun.bind(null, arg1)`

De nuevo hemos logrado recrear la operación de la función `greetHello` al
componer una función a partir de otra dado un argumento previo de
"configuración", de igual manera pudimos haber hecho lo siguiente:

```javascript
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

```javascript
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

```javascript
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

```javascript
greeter.bind(null, 'Hello', ', ', '.', 'Heidi', 'how', 'are', 'you', '?')()
// => 'Hello, Heidi.'
```

Nuestra función `greeter` espera 4 argumentos, en este caso el resto de los
argumentos pasados simplemente son ignorados.
