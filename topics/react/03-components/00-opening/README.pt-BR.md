# Apertura

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

## Por qué aprender esto?

Los **componentes** son la unidad básica de reutilización de código en `React`.
Desde el punto de vista de `React`, un interfaz no es más que una jerarquía
(árbol) de componentes. Así como en `HTML` usamos etiquetas para construir
interfaces, en `React` usamos _componentes_.

Es esencial entender bien el concepto de _componente_ en el universo de `React`,
así como las técnicas y/o convenciones para hacer nuestros componentes más
declarativos y robustos, como validación de `props` de componentes usando
`prop-types`, manejo de _hijos_ (children), composición, ...

Gracias a los parámetros nombradors y al desestructuring (asignación
desestructurada), ya hemos aprendido como especificar nuestras `props` en la
signatura (firma) misma de nuestros componentes. En esta unidad veremos cómo
especificar sus tipos, opcionalidad y valores por defecto.

También analizaremos la propiedad especial children y como manipularla con
`.map` y `.filter`.

Más adelante en este unidad exploraremos el concepto de composición aplicado a
componentes y Higher-Order Components, así como convenciones comunes como la
distinción entre componentes tontos o stateless y componentes inteligentes o
contenedores.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
a los que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* Cómo usar `prop-types` para definir las propiedades que acepta/espera un
  componente.
* Qué es y cómo funciona la propiedad `children`.
* Cómo manipular (filtrar, transformar, ...) los `children`
* Cómo componer una interfaz anidando componentes
* Qué son los Higher-order Components?
* Cómo usar _HOCs_ para componer components
* Cómo implementar _HOCs_
* Diferencias entre componentes presentacionales vs contenedores
