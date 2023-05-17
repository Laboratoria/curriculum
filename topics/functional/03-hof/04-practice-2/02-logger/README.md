---
env: cjs
---

# Without bind

La aplicación parcial nos permite crear nuevas funciones a partir de funciones
existentes, a la vez que fijamos algunos argumentos. Despues de fijar los
argumentos para ser parcialmente aplicados, tenemos una nueva función lista para
recibir el resto de los argumentos y quizás ejecutar la función original.

Más formalmente: La aplicación parcial hace referencia al proceso de fijar un
número de argumentos a una función, produciendo otra de menor "arity".

## Tarea

Usa aplicación parcial para crear una función `logger` que añada un "namespace"
(un string) al principio del resultado.

Tu implementación debe recibir un string `namespace` y retornar una función que
combine mensajes separados por espacios con el namespace al principio.

Asegúrate de que la función que retorne `logger` haga uso de *todos* los
argumentos que le pasen.

## Argumentos

* namespace: un String con el nombre del namespace.

## Ejemplo

```js
const info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

const warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

## Requisitos

* No uses `Function#bind` ni `Function#apply`

## Recursos

* [Wikipedia - Partial application](https://en.wikipedia.org/wiki/Partial_application)
