# 11. Intro to React

**React** es una tecnología realmente revolucionaria, que no sólo nos permite crear interfaces a través de lindos componentes, si no que representa un cambio de paradigma que va mucho más allá del navegador o incluso la web.

A medida que la web han ido evolucionando y hemos pasado de páginas estáticas a aplicaciones web cada vez más **interactivas y dinámicas**, sumado eso a la aparición de los **clientes móbiles**, ha sido necesaria la creación de nuevas estrategias y herramientas, que nos permitan lidiar con esta complejidad creciente en el desarrollo de interfaces, de una manera **ordenada**, **uniforme** y **sostenible**.

**React** ha representa una auténtica revolución, no sólo por la **practicidad** y **simplicidad** de su enfoque, sino también porque nos permite usar **una misma tecnología** para desarrollar interfaces, no importa si es una página web estática, una single-page app, una aplicación de escritorio o una aplicación móvil.

En este curso continuarás con el video juego que construimos en el curso
anterior, pero esta vez lo re-escribiremos usando React, y añadiremos
funcionalidad como "high scores", ...

**Tags**: `react`, componentes, `ui`, `babel`, `webpack`, encapsulamiento, modularización, `jsx`

## Público objetivo

Este curso está dirigido a personas con conocimientos previos de **programación y desarrollo web**, que quieren aprender nuevas herramientas que les permitan desarrollar interfaces web de una manera más **ágil**, **modular** y **sostenible en el tiempo**.

## Requerimientos previos

Para poder llevar adelante este curso sin frustración, es recomendable los siguientes conocimientos previos:
* Manejo de línea de comandos y git
* Javascript functional: es5, inmutabilidad, node y npm
* Desarrollo web standard: html y dom + css

## Aprenderás

* Fundamentos de **React**:
  - Virtual DOM
  - One-way data binding
  - Learn once, write anywhere
* Componentes `stateless` (sin estado)
* **ES2015**: Utiliza las últimas especificaciones y extensiones de javascript (es2015) de manera "universal", a través de la transpilación y el uso de polyfills. Herramientas: `yarn`, `webpack`, `babel`.
* **JSX**: Un lenguaje que extiende a javascript, permitiendo la inclusión de estructuras declarativas para construir interfaces. Herramientas: `webpack`, `react`.
* Definición de propiedades (`props`) para los componentes y sus tipos.
* Manejo de `state` global
* Componentes `statefull`:
  - Su ciclo de vida.
  - Manejo de `state` interno.
  - Referencias entre componentes (`refs`)

## Detalles logísticos

* Self-paced: x hrs
* Presencial: y hrs
* Total horas: z

## Producto

Convertir video juego del curso [10-funcional](#) en una single app con las siguientes extensiones:
* Texto de introducción al juego
* High-scores
* ... (Depende de [#30](https://github.com/Laboratoria/curricula-js/issues/30))

## Syllabus

### Lesson 0: [Set de herramientas](#)

1h (self-paced)

Antes de empezar necesitamos familiarizarnos con dos herramientas: `yarn` y `webpack`.

En esta lección aprenderás qué beneficios provee `yarn` sobre `npm`, para qué sirve `webpack` y revisaremos algunos de sus `loaders` y `plugins` más populares.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 1: [Javascript: un lenguage vivo](#)

1h (presencial)

Para empezar a usar react, necesitamos familiarizarnos con la nueva sintaxis de Javascript.
En esta lección aprenderás:
* Qué es el estándard ECMAScript y como evoluciona.
* Qué es es6 y que mejoras propone sobre su antecesor (es5), así como sus desventajas.
* Cómo usar yarn, babel-loader y webpack para convertir codigo es6 en es5 y así superar las desventajas antes expuestas
* Un tour detallado sobre las extensiones de sintaxis que incorpora es6 que te alegrarán la vida

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 2: [Proyecto ES6](#)

2h (self-paced)

Para afianzar los conocimientos introducidos en la lección anterior, ahora aplicaremos lo aprendido en tu juego, para que implemente las mejoras básicas propuestas por es6 y sea empaquetado por webpack, así puede continuar ejecutándose en todos los navegadores.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 3: [JSX y React básico](#)

1h (presencial)

React puede desarrollarse en es5, pero por su naturaleza declarativa, esto es muy engorroso. Es por eso que React usa JSX como su `templating language` por defecto.

En esta lección aprenderemos qué es JSX, qué beneficios introduce, por qué es una pieza fundamental de React y cómo se integra con webpack. Además construiremos nuestros primeros componentes e instalaremos algunas herramientas q nos permitan debuggear nuestro código.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 4: [Proyecto React](#)

2h (self-paced)

Es hora de convertir a tu proyecto en un proyecto React!

En esta lección nos ocuparemos de transformar todo tu html a JSX y crearemos la `single-page app` que contendrá a tu juego.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 5: [React OOP y props](#)

1h (presencial)

React define sólo 9 métodos muy simples para controlar el ciclo de vida de los componentes. En esta lección nos empaparemos de la compacta documentación de React.

Además veremos cómo pasar parámetros a los componentes a través de sus `props`, para hacerlos reutilizables.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 6: [Proyecto React](#)

2h (self-paced)

Ahora vamos a hacer que tu aplicación sea mas interesante. En esta lección diseñarás al detalle la interfaz (UI) de tu app y maquetarás cada sección de tu página con componentes de react.

Luego crearemos mocks funcionales usando props, para que tu aplicación quede preparada para la próxima lección: manejo de estados!

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 7: [React OOP y estado interno de componentes](#)

1h (presencial)

> Mira el código fuente de tu proyecto, sus carpetas y archivos de configuración ¿Te has puesto a pensar que podríamos haber logrado el mismo resultado usando solamente html? Entonces, ¿para que complicarnos tanto?

> En el día a día del profesional del software, no se limita a idear y crear proyectos nuevos, sino que en realidad la mayoría de nuestro tiempo se va corrigiendo errores o creando extensiones para aplicaciones existentes, que van creciendo en complejidad a medida que pasa el tiempo y van evolucionando. Es ahí donde react hace que nuestra vida no sea un infierno.

En esta lección vamos a darle protagonismo al estado de la aplicación. Veremos qué mecanismos nos brinda react para llevar registro de los cambios de estado que la aplicación manifiesta, a medida que el usuario va interactuando con ella. Además veremos cómo se relacionan estos cambios de estado con el ciclo de vida y renderizado de nuestros componentes.


#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 8: [Proyecto React](#)

3h (self-paced)

En esta lección vamos a empezar a convertir a tu aplicación, en una aplicación verdaderamente profesional: vamos a especificar e implmentar los estados que cada uno de nuestros componentes debe "recordar" a través de todo su ciclo de vida, asi como el estado global de nuestra aplicación.

### Lesson 9: [React FOP, componentes `stateless`, HOCs y estado global](#)

1h (presencial)

> Nuevamente, revisa tu código, el código fuente de tus componentes. ¿No hay algo que huele a podrido? Claro! ¿Qué pasó con tanto incapié que nos han hecho en el encapsulamiento, la modulariazión y la "separación de intereses" (`separation of concerns`), para que ahora terminemos poniendo todo junto entreverado adentro de una clase?

> Cuando las aplicaciones son pequeñas y los componentes comparten poca información, usar componentes con estados y acciones propias es una alternativa rápida y válida. ¿Pero qué ocurre a medida que la aplicación se va complejizando y cuando, por ejemplo, el usuario hace click en un botón se desencadenan reacciónes alrededor de toda la página? ¿Cómo mantenemos sincronizado todo eso?

Hasta aquí podemos decir que React es una muy buena herramienta, pero realmente no ofrece ningún valor diferencial en relación a otras que hacen algo parecido.

En esta lección vamos a sumergirnos en lo que realmente hace a React y sus amigos, un conjunto de herramientas **único**: un nuevo patrón de diseño de aplicaciones, que ha desencadenado una auténtica revolución y el surgimiento de todo un ecosistema de herramientas.

Veremos cómo diseñar nuestras aplicaciones orientadas al flujo de datos en una sola dirección, extrayendo el estado de nuestros componentes a un estado global y disparando cambios de manera homogénea a través de acciones.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 10: [Proyecto React](#)

3h (self-paced)

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx

### Lesson 11: [Proyecto React: deployment](#)

30mins (self-paced)

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | XXXXX      |    Xmin  | xxx


## Autor(es) / Colaboradores

* Mariano Crowe (autor)
* Lupo Montero (coordinador)
* Otros colaboradores?

## Libros

Cada curso debe de estar acompañado de una lista detallada de libros
relacionados con los temas tratados en el curso.

## Benchmarks

Incluir una lista de cursos similares que sirvan como referencia.

* https://reactforbeginners.com/
* http://www.curiouslearning.org/react-form-index/

## Lecturas complementarias

Incluir una lista de capítulos de libros, blog posts, videos, y otros recursos
como links a wikipedia, documentación, ...

* https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c
