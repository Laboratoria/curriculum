# Apertura

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

## Por qué aprender esto?

`React` es una tecnología hermosa para componer interfaces, caracterizada por su
simpleza, su enfoque declarativo y funcional. `React` nos ofrece herramientas
para construir interfaces usando componentes, y los componentes incluyen
funcionalidades (o convenciones) básicas para manejar _estado_ interno de los
componentes (implementando componentes como clases, que veremos más adelante),
así como un mecanismo para propagar estado a través de `props`. Para casos de
manejo de estado simple, esto muchas veces es suficiente, pero en el mundo real
normalmente usamos otro patrón ("UI manager" + "State manager") para manejar
estado a nivel de toda la aplicación y separar el manejo de estado de los
propios componentes de la interfaz.

Dentro de este contexto, en el mundo real es muy común encontrar aplicaciones
que combinan `React` con `Redux`: un enfoque parecido (simplicidad, declarativo,
funcional, ...) tanto en UI como en manejo de estado.

Como desarrolladora Front End, entender los conceptos de _estado_ y _manejo de
estado_ son fundamentales para poder contruir interfaces dinámicas y reactivas.

En esta unidad exlporaremos qué es `Redux` y cómo usarlo junto con `React`.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
a los que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* Qué es `Redux`?
* Qué es una acción?
* Qué es un reductor (reducer)?
* Los principios de Redux:
  - Single source of truth
  - State is read-only
  - Cambios de state a través de funciones puras
* Cómo integrar `Redux` y `React`?
* Cómo conectar componentes para acceder al store global?
* Cómo definir y _disparar_ acciones desde nuestros componentes?
* Cómo implementar reductores para modificar el estado como respuesta a acciones
