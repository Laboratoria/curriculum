---
type: read
duration: 5min
---

# Apertura

## ¿Por qué aprender esto?

La **programación orientada a objetos** (OOP) es un paradigma muy común y
potente. Como desarolladora de JavaScript es fundamental entender el paradigma,
las implicaciones a nivel de diseño y su implementación.

Entender bien la **herencia prototipal** en JavaScript es de especial
importancia ya que el modelo de herencia es muy distinto a la mayoría de
lenguajes orientados a objetos, donde casi siempre creamos objetos a partir de
clases, mientras que en JavaScript heredamos directamente de otros objetos a
través de cadenas de prototipos.

La herencia es el principal mecanismo de reuso de código en OOP. En esta unidad
vamos a ver cómo implementar herencia prototipal en JavaScript así como las
peculiaridades del paradigma al aplicarlo en el contexto del lenguaje.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

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
