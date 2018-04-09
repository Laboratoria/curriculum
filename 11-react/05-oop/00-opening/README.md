# Apertura

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

## Por qué aprender esto?

Hasta ahora nos hemos concentrado en la implementación de componentes como
funciones, lo que en el mundo de `React` normalmente llamamos _stateless
components_. Pero a estas alturas probablemente te habrás dado cuenta de que
muchos de los ejemplos de `React` en la web muestran la implementación de
componentes como clases (usando el keyword `class`).

El motivo por el que hemos comenzado con componentes _stateless_ es porque su
implementación es más sencilla y demuestran la funcionalidad y patrones comunes
con mucho menos _boilerplate_. De hecho, en el mundo real normalmente tratamos
de evitar la implementación con clases a menos de que necesitemos features
(características) que no nos ofrezcan las funciones. En particular:

* Estado interno
* Life-cycle hooks
* Refs

En esta unidad veremos como podemos usar clases para acceder a estos features
en los casos que sea necesario.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
a los que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* Cómo implementar un componente como clase (`class`)?
* Diferencias entre estado global o externo y estado interno
* Cuál es el _ciclo de vida_ de un coponente?
* Cómo _interceptar_ eventos del ciclo de vida para ejecutar código arbitrario?
* Qué es y cómo funciona la propiedad especial `ref` en nodos renderizados por
  un componente _statefull_?
* Cuándo usar referencias (refs)?
