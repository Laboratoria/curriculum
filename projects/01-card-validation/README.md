# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto

En este proyecto tendrás que construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, tendrás que
implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría validar una tarjeta de crédito y pensar en cómo debe ser esa
experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?)
etc.

## 3. Objetivos de aprendizaje

### Habilidades técnicas

* <details id="graphic-user-interface">
    <summary>Proponer una interfaz usuario-computadora.</summary>
    <p>This is the ability to understand and to develop a graphic user interface which with the user can interact.</p>

  - [CSS-selectors-1](#CSS-selectors-1)
  - [CSS-styling-1](#CSS-styling-1)
  - [DOM-events-1](#DOM-events-1)
  - [DOM-manipulation-1](#DOM-manipulation-1)
  - [semantic-html-1](#semantic-html-1)

</details>

* <details id="version-control-system">
    <summary>Usar un sistema de control de versiones para registrar cambios de un programa de manera individual.</summary>
    <p>The ability to use a version control system to manage updates and diff to one's own work.</p>

  - [git-1](#git-1)
  - [github-1](#github-1)

</details>

* <details id="mathematical-problem-solving">
    <summary>Solucionar problemas matemáticos que presenta la usuaria.</summary>
    <p>The ability to resolve mathematical operations using JavaScript.</p>

  - [mathematical-operators-1](#mathematical-operators-1)
  - [mathematical-operators-2](#mathematical-operators-2)

</details>


### Micro-habilidades técnicas

#### Web

* <details id="semantic-html-1">
    <summary>Uso de etiquetas semánticas (nivel-1)</summary>

    <ul>
      <li><code>`p`</code></li>
      <li><code>`a`</code></li>
      <li><code>headings (`h1`, etc)</code></li>
      <li><code>`div`</code></li>
      <li><code>`span`</code></li>
    </ul>

</details>

* <details id="semantic-html-2">
    <summary>Uso de etiquetas semánticas (nivel-2)</summary>

    <ul>
      <li><code>`section`</code></li>
      <li><code>`header`</code></li>
      <li><code>`main`</code></li>
      <li><code>`footer`</code></li>
      <li><code>`aside`</code></li>
      <li><code>When to use `div`s and when to use `section`s</code></li>
    </ul>

</details>

* <details id="form-html-1">
    <summary>Uso de etiquetas del formulario (nivel-1)</summary>

    <ul>
      <li><code>`form`</code></li>
      <li><code>`action`</code></li>
      <li><code>`input`</code></li>
      <li><code>`button`</code></li>
      <li><code>`submit`</code></li>
      <li><code>`textarea`</code></li>
    </ul>

</details>

* <details id="CSS-selectors-1">
    <summary>Selección de elementos con CSS (nivel-1)</summary>

    <ul>
      <li><code>by tag name</code></li>
      <li><code>by id name</code></li>
      <li><code>by classname</code></li>
      <li><code>by attribute</code></li>
    </ul>

</details>

* <details id="box-model-1">
    <summary>Modelo de cajas (nivel-1)</summary>

    <ul>
      <li><code>`margin`</code></li>
      <li><code>`padding`</code></li>
      <li><code>`border`</code></li>
    </ul>

</details>

* <details id="CSS-styling-1">
    <summary>Darle estilos a elementos DOM (nivel-1)</summary>

    <ul>
      <li><code>`color`</code></li>
      <li><code>`background-color`</code></li>
      <li><code>`font-size`</code></li>
      <li><code>`font-family`</code></li>
      <li><code>`border-radius`</code></li>
      <li><code>`height` with pixels and percentages</code></li>
      <li><code>`width` with pixels and percentages</code></li>
      <li><code>`text-align`</code></li>
    </ul>

</details>

* <details id="flow-control-1">
    <summary>Control de flujo (nivel-1)</summary>

    <ul>
      <li><code>introduction to imperative programming</code></li>
      <li><code>`if-else`</code></li>
      <li><code>conditional ternary operator</code></li>
      <li><code>for loops</code></li>
      <li><code>`switch`</code></li>
    </ul>

</details>

* <details id="data-types-1">
    <summary>Tipos de datos (nivel-1)</summary>

    <ul>
      <li><code>introduction to primitives</code></li>
      <li><code>`string`</code></li>
      <li><code>`number`</code></li>
      <li><code>`boolean`</code></li>
    </ul>

</details>

* <details id="data-types-2">
    <summary>Tipos de datos (nivel-2)</summary>

    <ul>
      <li><code>`null`</code></li>
      <li><code>`undefined`</code></li>
      <li><code>differences between both of them</code></li>
    </ul>

</details>

* <details id="DOM-manipulation-1">
    <summary>Selección y manipulación del DOM (nivel-1)</summary>

    <ul>
      <li><code>`document.getElementById`</code></li>
      <li><code>`document.getElementByClassname`</code></li>
      <li><code>`document.querySelector`</code></li>
      <li><code>`document.querySelectorAll`</code></li>
      <li><code>`element.innerHTML`</code></li>
      <li><code>`element.innerText`</code></li>
    </ul>

</details>

* <details id="objects-1">
    <summary>Objetos (nivel-1)</summary>

    <ul>
      <li><code>Object structure</code></li>
      <li><code>Object literals</code></li>
      <li><code>Objects as related data abstraction</code></li>
      <li><code>JSON vs JS objects</code></li>
    </ul>

</details>

* <details id="string-manipulation-2">
    <summary>Manipulación de `strings` (nivel-2)</summary>

    <ul>
      <li><code>`string.chartAt`</code></li>
      <li><code>strings as Array-like Objects (`'a'[0]`)</code></li>
    </ul>

</details>

* <details id="DOM-events-1">
    <summary>Eventos del DOM (nivel-1)</summary>

    <ul>
      <li><code>`eventTarget.addEventListener`</code></li>
      <li><code>`eventTarget.removeEventListener`</code></li>
    </ul>

</details>

* <details id="DOM-events-2">
    <summary>Eventos del DOM (nivel-2)</summary>

    <ul>
      <li><code>`event.preventDefault`</code></li>
      <li><code>`event.stopPropagation`</code></li>
      <li><code>differences between the both of them</code></li>
    </ul>

</details>

* <details id="mathematical-operators-1">
    <summary>Operaciones matemáticas (nivel-1)</summary>

    <ul>
      <li><code>`+`</code></li>
      <li><code>`-`</code></li>
      <li><code>`*`</code></li>
      <li><code>`/`</code></li>
      <li><code>`Math.floor`</code></li>
      <li><code>`Math.ceil`</code></li>
      <li><code>`Math.round`</code></li>
    </ul>

</details>

* <details id="functions-1">
    <summary>Declaración y uso de funciones (nivel-1)</summary>

    <ul>
      <li><code>functions as code blocks</code></li>
      <li><code>functions como bloques de código</code></li>
    </ul>

</details>

* <details id="unit-testing-1">
    <summary>Pruebas unitarias (nivel-1)</summary>

    <ul>
      <li><code>run already written tests</code></li>
      <li><code>import ready to test code</code></li>
      <li><code>explain what a test is</code></li>
    </ul>

</details>

* <details id="git-1">
    <summary>Git (nivel-1)</summary>

    <ul>
      <li><code>`git init`</code></li>
      <li><code>`git clone`</code></li>
      <li><code>`git commit`</code></li>
      <li><code>descriptive commit messages (more why less what)</code></li>
      <li><code>`git log`</code></li>
      <li><code>`git remote`</code></li>
      <li><code>`git push`</code></li>
    </ul>

</details>

* <details id="github-1">
    <summary>GitHub (nivel-1)</summary>

    <ul>
      <li><code>Sign up and configuration</code></li>
      <li><code>Fork</code></li>
      <li><code>GitHub pages</code></li>
    </ul>

</details>


#### ux



## 4. Consideraciones generales

* Este proyecto se debe resolver de manera individual.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub pages](https://pages.github.com). Si
  no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
* Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el
  primer Sprint (una semana) y al final, trata de fijar un estimado de cuándo lo
  terminarás.

## 5. Criterios de aceptación mínimos del proyecto

Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

### Definición del producto

En el `README.md`, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 caracteres.
* No debe poder ingresar un campo vacío.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar y
cómo tu aplicación lo soluciona.

* Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
* Luego valida esta solución con una compañera (pedir feedback).
* Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un
  nuevo prototipo usando alguna herramienta para diseño de prototipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Google Slides](https://www.google.com/intl/es/slides/about/), etc.)
Estos puntos los presentarás en el `README.md`.

### Scripts / Archivos

#### General

##### `README.md`

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML y CSS)

Deberás maquetar de forma exacta el prototipo final que hiciste en balsamiq
utilizando HTML y CSS. En este momento elegirás los colores, tipo de fuente,
etc a usar.

A continuación describimos los archivos que utilizarás:

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

##### `src/style.css`

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
* No se debe utilizar la _pseudo-variable_ `this`.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git)
  instalado. Si usas un sistema operativo 'UNIX-like', como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
  aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
  del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
  darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
  install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
  incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[https://www.youtube.com/watch?v=f0zL6Ot9y_w](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:

* GitHub y GitHub Pages.

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).
