---
type: read
duration: 5min
---

# Apertura

## ¿Por qué aprender esto?

Entender el concepto de _asincronía_ y cómo manejar procesos asíncronos es
fundamental para toda desarrollodora web. Todas las interacciones con el
usuario, operaciones de red, eventos del navegador, ... son asíncronas. Esto
quiere decir que tienen que _esperar_ (a que ocurra un evento, a que recibamos
una respuesta por http, ...) para poder completar su trabajo.

JavaScript es un lenguaje que permite manejar _asincronía_ de una manera
elegante gracias a su implementación de funciones y su naturaleza _non-blocking_
(que no bloquea el hilo - thread - mientras espera a que se complete una tarea
asíncrona). En esta unidad veremos **callbacks**, **eventos** y **promesas**
como maneras de trabajar con tareas asíncronas.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* Qué es una tarea asíncrona?
* Qué significa bloquear el _hilo_ o _thread_
* Qué es un _callback_
* Qué es un _evento_
* Cómo escuchar _eventos_
* Cómo dejar de escuchar _eventos_
* Qué es una promesa?
* Cómo usar promesas?
* Cómo implementar promesas nuevas
* Cómo encadenar promesas
