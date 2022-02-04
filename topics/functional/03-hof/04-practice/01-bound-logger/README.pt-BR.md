# With bind

* Environment: `js`

***

**Usa Function#bind** para implementar una función `logger` que nos permita
separar mensajes en diferentes ámbitos (namespaces).

Tu implementación debe exportar dos funciones con las siguientes *firmas*:

* `log(str1, str2, str3, ...)`: Retorna un string con los strings de entrada
  concatenados y separados por espacios.
* `logger(namespace)`: Retorna una función que combina un se comporta como `log`
  pero siempre añade `namespace` al principio.

Asegúrate de que la función que retorne `logger` haga uso de *todos* los
argumentos que le pasen.

## Ejemplo

```js
const { logger } = require('./tu-modulo');

const info = logger('INFO:')
info('this is an info message')
// => 'INFO: this is an info message'

const warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// => 'WARN: this is a warning message with more info'
```

## Requisitos

* Usar `Function#bind`
* La función `logger()` debe hacer uso de `log`.

## Recursos

* [Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
