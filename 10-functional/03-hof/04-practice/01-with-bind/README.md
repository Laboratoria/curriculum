# Tarea

**Usa Function#bind** para implementar una función "logger" que nos permita
separar mensajes en diferentes ámbitos (namespaces).

Tu implementación debe recibir un string con el nombre del namespace y retornar
una función que imprima mensajes a la consola con el namespace al principio.

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

* Usar `Function#bind`

## Boilerplate

```js
module.exports = function(namespace) {
  // TU SOLUCIÓN AQUÍ
}
```

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
