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

### Habilidades técnicas

Estas son las habilidades que podrás desarrollar en este proyecto.

* <details>
    <summary>Proponer una interfaz usuario-computadora.</summary>
    <!-- <p>This is the ability to understand and to develop a graphic
    user interface which with the user can interact.</p> -->
    <p>La habilidad para entender y desarrollar una interfaz gráfica de
    usuario con la cual una usuaria puede interactuar.</p>

    <ul>
      <li><a href="#semantic-html-1">Uso de etiquetas semánticas (nivel-1)</a></li>
      <li><a href="#dom-manipulation-1">Selección y manipulación del DOM (nivel-1)</a></li>
      <li><a href="#dom-events-1">Eventos del DOM (nivel-1)</a></li>
      <li><a href="#css-selectors-1">Selección de elementos con CSS (nivel-1)</a></li>
      <li><a href="#css-styling-1">Darle estilos a elementos DOM (nivel-1)</a></li>
    </ul>

</details>

* <details>
    <summary>Entender los fundamentos de programación imperativa.</summary>
    <!-- <p>The ability to give instructions to a computer in a procedural
    way.</p> -->
    <p>La habilidad de darle instrucciones a una computadora de forma
    procedural.</p>

    <ul>
      <li><a href="#flow-control-1">Control de flujo (nivel-1)</a></li>
      <li><a href="#string-manipulation-1">Manipulación de `strings` (nivel-1)</a></li>
      <li><a href="#functions-1">Declaración y uso de funciones (nivel-1)</a></li>
      <li><a href="#data-types-1">Tipos de datos (nivel-1)</a></li>
      <li><a href="#logical-operators-1">Operaciones lógicas (nivel-1)</a></li>
      <li><a href="#logical-operators-2">Operaciones lógicas (nivel-2)</a></li>
    </ul>

</details>

* <details>
    <summary>Agendar tareas basadas en entender el bucle de eventos de JS.</summary>
    <!-- <p>The ability to pospone actions (functions) to be executed in the
    future and the ability to schedule recurrent tasks at certain
    intervals.</p> -->
    <p>La habilidad para posponer acciones a ser ejecutadas en el futuro y
    la habilidad para agendar tareas recurrentes que sucedan bajo intervalos.</p>

    <ul>
      <li><a href="#functions-1">Declaración y uso de funciones (nivel-1)</a></li>
      <li><a href="#scheduling-1">Planificación de tiempo (nivel-1)</a></li>
    </ul>

</details>

### Micro-habilidades técnicas

Estas son las micro-habilidades que vas a poder revisar en el proyecto.

#### Web

* <details id="semantic-html-1">
    <summary>Uso de etiquetas semánticas (nivel-1)</summary>

    <ul>
      <li>
        <a href="//developer.mozilla.org/en-US/docs/Web/HTML/Element/p"><code>p</code></a>
      </li>
      <li>
        <a href="//developer.mozilla.org/en-US/docs/Web/HTML/Element/a"><code>a</code></a>
      </li>
      <li>
        <a href="//developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">
          <code>headings (h1, etc)</code>
        </a>
      </li>
      <li>
        <a href="//developer.mozilla.org/en-US/docs/Web/HTML/Element/div"><code>div</code></a>
      </li>
      <li>
        <a href="//developer.mozilla.org/en-US/docs/Web/HTML/Element/span"><code>span</code></a>
      </li>
    </ul>

</details>

* <details id="dom-manipulation-1">
    <summary>Selección y manipulación del DOM (nivel-1)</summary>

    <ul>
      <li><code>document.getElementById</code></li>
      <li><code>document.getElementByClassname</code></li>
      <li><code>document.querySelector</code></li>
      <li><code>document.querySelectorAll</code></li>
      <li><code>element.innerHTML</code></li>
      <li><code>element.innerText</code></li>
    </ul>

</details>

* <details id="dom-events-1">
    <summary>Eventos del DOM (nivel-1)</summary>

    <ul>
      <li><code>eventTarget.addEventListener</code></li>
      <li><code>eventTarget.removeEventListener</code></li>
    </ul>

</details>

* <details id="css-selectors-1">
    <summary>Selección de elementos con CSS (nivel-1)</summary>

    <ul>
      <li>by tag name</li>
      <li>by id name</li>
      <li>by classname</li>
      <li>by attribute</li>
    </ul>

</details>

* <details id="css-styling-1">
    <summary>Darle estilos a elementos DOM (nivel-1)</summary>

    <ul>
      <li><code>color</code></li>
      <li><code>background-color</code></li>
      <li><code>font-size</code></li>
      <li><code>font-family</code></li>
      <li><code>border-radius</code></li>
      <li><code>height</code> with pixels and percentages</li>
      <li><code>width</code> with pixels and percentages</li>
      <li><code>text-align</code></li>
    </ul>

</details>

* <details id="string-manipulation-1">
    <summary>Manipulación de `strings` (nivel-1)</summary>

    <ul>
      <li>concatenation with <code>+</code></li>
      <li>concatenation with template literals</li>
    </ul>

</details>

* <details id="flow-control-1">
    <summary>Control de flujo (nivel-1)</summary>

    <ul>
      <li>introduction to imperative programming</li>
      <li><code>if-else</code></li>
      <li>conditional ternary operator</li>
      <li>for loops</li>
      <li><code>switch</code></li>
    </ul>

</details>

* <details id="functions-1">
    <summary>Declaración y uso de funciones (nivel-1)</summary>

    <ul>
      <li>functions as code blocks</li>
    </ul>

</details>

* <details id="data-types-1">
    <summary>Tipos de datos (nivel-1)</summary>

    <ul>
      <li>introduction to primitives</li>
      <li><code>string</code></li>
      <li><code>number</code></li>
      <li><code>boolean</code></li>
    </ul>

</details>

* <details id="logical-operators-1">
    <summary>Operaciones lógicas (nivel-1)</summary>

    <ul>
      <li>AND operator <code>&&</code></li>
      <li>OR operator <code>||</code></li>
      <li>NOT operator <code>!</code></li>
    </ul>

</details>

* <details id="logical-operators-2">
    <summary>Operaciones lógicas (nivel-2)</summary>

    <ul>
      <li>Short circuit evaluation</li>
      <li>Double NOT <code>!!</code></li>
      <li>truthiness and falsiness</li>
    </ul>

</details>

* <details>
    <summary>Operaciones matemáticas (nivel-1)</summary>

    <ul>
      <li><code>+</code></li>
      <li><code>-</code></li>
      <li><code>&ast;</code></li>
      <li><code>/</code></li>
      <li><code>Math.floor</code></li>
      <li><code>Math.ceil</code></li>
      <li><code>Math.round</code></li>
    </ul>

</details>

* <details id="scheduling-1">
    <summary>Planificación de tiempo (nivel-1)</summary>

    <ul>
      <li><code>window.setTimeout</code></li>
      <li><code>window.setInterval</code></li>
      <li>Differences between both of them</li>
      <li>Introduction to the event loop</li>
    </ul>

</details>

#### UX

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
