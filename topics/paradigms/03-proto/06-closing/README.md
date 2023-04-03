---
type: read
duration: 5min
---

# Cierre

## Resumen

`this` es una pseudo-variable que existe dentro de las funciones. El valor de
`this` debe ser _inferido_ del contexto donde aparece, y por eso puede ser
motivo de confusión.

El método `bind` de las funciones nos permite crear una nueva versión de la
función pero con `this` seteado a un valor específico.

Cuando usamos una función como un _método_ de un objeto, `this` toma el valor
del objeto que contiene al _método_.

También podemos usar constructores para crear objetos con un prototipo
específico, así como `Object.create`.

El operador `instanceof` nos permite determinar si un objeto fue creado con un
constructor específico y `Object.prototype.isPrototypeOf` para determinar si un
objeto está la cadena de prototipos de otro objeto.

Todo objeto tiene un prototipo, que a su vez es un objeto que puede tener su
propio prototipo. Esto crea lo que llamamos **cadena de prototipos** y nos
permite implementar herencia.

## Respondamos juntxs las preguntas de la apertura

* Qué valor toma `this` cuando no puede ser inferido por el contexto?
* Qué hace el método `bind` que tienen todas las funciones?
* Cómo infiere JavaScript el valor de `this` dentro de una función?
* Qué es un **constructor**?
* Cómo usar `new` para crear instancias de un constructor?
* Cómo usar `instanceof` para determinar si un objeto fue creado con un
  constructor específico?
* Cómo usar `Object.prototype.isPrototypeOf` para determinar si un objeto está
  la cadena de prototipos de otro objeto?
* Cómo añadir propiedades al prototipo de un constructor usando `Function.prototype`?
* Cómo usar `Object.create` para crear objetos con un prototipo específico?
* Cómo implementar **herencia prototipal**?
