# Trivia

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

La trivia es un tipo de juego, generalmente en el marco de un concurso, en el
que se plantea una serie de preguntas cuyas respuestas deben ser escogidas entre
diferentes opciones.

En la actualidad, con lo extendido del uso de smartphones, sus aplicaciones, y
el acceso a Internet, existen muchas posibilidades de participar de una trivia
online. Con una rápida búsqueda en internet, te podrás dar cuenta que existen
trivias de muchas temáticas (ciencia, series, televisión, etc.), Hay varias que,
incluso, ofrecen dinero como recompensa.

![TRIVIA](https://phandroid.s3.amazonaws.com/wp-content/uploads/2018/01/hq-trivia-android-screenshot.jpg)

## 2. Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto tendrás que construir una
aplicación web que le permita a un usuario responder distintas preguntas
escogiendo sus respuestas de una lista de alternativas.

La temática es libre. Tú debes crear la mejor trivia que puedas y luego pensar
en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes,
colores, ¿marca?) etc.

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es, tener una primera experiencia
desarrollando aplicaciones web (WebApp) que interactúen con el usuario a
través del navegador y la lógica, utilizando HTML, CSS y JavaScript como
herramientas.

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en
tu proyecto.
Piensa en eso al decidir tu estrategia de trabajo individual y de equipo.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Estructura del código y guía de estilo

* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener _feedback_ e iterar.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* Tiempo para completarlo: Toma como referencia 3 días. Trata de fijar un
estimado de cuándo lo terminarás.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios que deberás considerar para saber si has completado este proyecto
son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
No tienes tiempo ilimitado para trabajar, así es que deberás priorizar.

El [MVP](https://www.youtube.com/watch?v=0Dn-BHj6l2E) (producto mínimo viable)
de tu implementación debe:

1. Mostrar una pantalla de bienvenida, pida tu nombre para comenzar a jugar.
2. Mostrar un mensaje de Hola [tu nombre] y dos botones para comenzar a jugar.
   - Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
   - Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)
3. Lanzar la pregunta 1 con alternativas, el usuario responde, luego se muestra
   la pregunta 2 y luego la 3.
4. Mostrar una pantalla de resultados (respuestas correctas) y dos botones de
   volver a jugar:
   - Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
   - Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)

## 6. Hacker edition

Si **terminaste** con todo lo anterior y te queda tiempo, intenta explorar y
completar lo siguiente:

* Agregar una cuenta regresiva con un tiempo límite para responder cada pregunta.
* Subir tu código a GitHub (commit/push) y desplegar la interfaz usando GitHub
pages.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JS, HTML y CSS
En este proyecto NO está permitido usar librerías o frameworks,
solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

### `src/index.html`

Acá va la página que se mostrará al usuario, también nos sirve para indicar
qué script se usará y unir todo lo que hemos hecho.

Encontrarás 1 etiqueta inicial, la cual si deseas puedes borrar y empezar de
cero:

```html
 <div id="root"></div>
```

### `src/style.css`

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS
(Bootstrap, materialize, etc).

### `src/main.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos), entre otras
funciones que sean necesarias para actualizar el resultado en la pantalla (UI).

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
  aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
  del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
  darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

#### Diseño de experiencia de usuario (User Experience Design)

* Ideación
* Prototipado (sketching)

#### Desarrollo Front-end

* Tipos de valores
* Declaración de variables
* Control de flujo

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)

#### Organización del Trabajo

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto.
