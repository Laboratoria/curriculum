# Cifrado César

## Índice

- [Índice](#índice)
- [Preámbulo](#preámbulo)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Consideraciones generales](#consideraciones-generales)
- [Requerimientos del proyecto](#requerimientos-del-proyecto)
  - [Planificación (Agile-Scrum)](#planificación-agile-scrum)
  - [UX (Diseño de experiencia de usuario)](#ux-diseño-de-experiencia-de-usuario)
  - [Front-end](#front-end)
- [Entrega](#entrega)
- [Parte opcional o "Hacker edition"](#parte-opcional-o-hacker-edition)
- [Recursos y temas relacionados](#recursos-y-temas-relacionados)
- [Detalles de aprendizaje](#detalles-de-aprendizaje)

## Preámbulo

Cifrar significa codificar. El [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar)
es un tipo de **cifrado por sustitución**, es decir que una letra en el texto original es
reemplazada por otra letra que se encuentra un número de posiciones más adelante en el alfabeto.

Veamos los siguientes ejemplos:
- Si ciframos la letra A usando un desplazamiento (_offset_) de 3 posiciones, entonces la **A**
se convierte en **D**.
- Ahora, si ciframos la palabra **CASA** con el mismo desplazamiento de 3, ésta se convierte en
**FDVD**.
- Y para el alfabeto completo, con el mismo desplazamiento de 3 posiciones, sería:
  - Sin cifrado: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
  - Ya cifrado : D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

  ![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

> En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad
  y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el
  cifrado César sí puede formar parte de sistemas más complejos de codificación, como el
  cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia desarrollando aplicaciones web (_WebApp_) que
interactúen con el usuario a través del navegador y la lógica, utilizando HTML5, CCS3 y JavaScript (ES6)
como herramientas.

En este proyecto tendrás que construir una aplicación web que le permita a un usuario cifrar y descifrar un
mensaje.

Para completar el proyecto tendrás que familiarizarte con conceptos como las necesidades del usuario y propuesta
de una solución; etiquetas semánticas y formularios en HTML5; modelo de cajas y selectores en CSS3; métodos de
selección y eventos del DOM; manipulación de strings, control de flujo y funciones en JS; así como pruebas
unitarias en Mocha. Recuerda que parte fundamental es organizar tu tiempo y priorizar tus tareas.

## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- Primero se deberá _forkear_ y _clonar_ este repositorio.
- El tiempo sugerido para presentar este proyecto es de aproximadamente 2 semanas (2 sprints):

  | Tiempos           | Fechas         | Detalles                           |
  | :---------------: | :------------: | :--------------------------------- |
  | **1er Sprint**    | 30/05 al 07/06 |Planificación del sprint 1, prototipado de baja fidelidad (papel y lapiz) + iteración (herramienta [balsamiq](https://balsamiq.com/)), _code review_ (revisión de código), _peer feedback_ (retroalimentación por parejas)  _retrospectiva_ (identificar, documentar e internalizar las lecciones aprendidas en la 1ra semana), planificación del sprint 2  |
  | **2do Sprint**    | 07/06 al 14/06 | _Code review_ (revisión de código), _peer feedback_ (retroalimentación por parejas),  _retrospectiva_ (identificar, documentar e internalizar las lecciones aprendidas en la 2da semana), _demo_ (presentación) y _feedback_ final del proyecto |

## Requerimientos del proyecto

La temática es libre pero la interfaz debe permitir al usuario:

- Mostrar una vista de ingreso que tenga como contraseña LABORATORIA. En caso de colocar una clave
incorrecta, se mostrará un mensaje de error; sin embargo al tercer intento debería mostrar el mensaje
_"Ya utilizaste todos tus intentos, en este momento no podrás ingresar"_.
- Escribir un mensaje (texto) para ser cifrado.
- Elegir un desplazamiento (_offset_) a usar en el cifrado y/o descifrado.
- Ver el resultado del mensaje cifrado correctamente.
- Escribir un mensaje (texto) para ser descifrado.
- Ver el resultado del mensaje descifrado correctamente.

En este proyecto, tu producto debe utilizar este alfabeto simple (solamente mayúsculas y sin ñ):

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Planificación (Agile-Scrum)

Identifica y prioriza las tareas de tu proyecto; deberás escribirlas y mantenerlas
actualizadas en un archivo de Google Docs mediante esta [plantilla](https://docs.google.com/document/d/1lgfQKRar21wmIhdNiiSDuL6odChMN16gAgeeHejLVcg).
No dudes en solicitar ayuda a tus coaches.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar y cómo tu
aplicación lo soluciona.
- Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
- Luego valida esta solución con una compañera (pedir feedback).
- Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un nuevo prototipo
usando [Balsamiq](https://balsamiq.com/)). Estos puntos los presentarás en el `README.md`.

**`README.md`**:

Debe contener lo siguiente:
- Un título con el nombre de tu proyecto.
- Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
- La imagen final de tu proyecto.
- Investigación UX:
  - Explicar quiénes son los usuarios y los objetivos en relación con el producto.
  - Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios.
  - Luego colocarás la foto de tu primer prototipo en papel.
  - Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  - Imagen del prototipo final en Balsamiq.

### Front-end

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en balsamiq utilizando
HTML5 y CSS3. En este momento elegirás los colores, tipo de fuente, etc a usar.

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). Encontrarás
3 etiquetas iniciales:

- `<header>`: encabezado de tu proyecto.
- `<main>`: contenido principal de tu proyecto.
- `<footer>`: pie de página de tu proyecto.

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus propias reglas,
por eso NO está permitido el uso de frameworks de CSS3 (Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript ES6 - pruebas unitarias)

- La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
- En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
- No se debe utilizar la _pseudo-variable_ `this`.

Vamos a tener 2 archivos JavaScript separando responsabilidades, a continuación indicamos qué
harás en cada archivo:

**`src/cipher.js`**:

Acá escribirás las 2 funciones necesarias para el usuario pueda cifrar o descifrar.
Para esto debes implementar el **objeto `cipher`**, el cual ya se encuentra _exportado_ en el
objeto global (`window`). Este objeto (`cipher`) contiene dos métodos:

  - **`cipher.encode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos cifrar.
  - **`cipher.decode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la izquierda en el alfabeto y `string` el mensaje (texto) que queremos descifrar.

**`src/index.js`**:

Acá escribirás todo el código que tenga que ver con la interacción del DOM (seleccionar,
actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar a `cipher.encode(offset, string)` y
`cipher.decode(offset, string)` según sea necesario para actualizar el resultado en la
pantalla(UI).

**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
`cipher.encode(offset, string)` y `cipher.decode(offset, string)` implementadas en `cipher.js`
utilizando Mocha.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_ (sentencias),
_functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% de _branches_ (ramas).

## Entrega

El proyecto será entregado subiendo tu código a GitHub (_commit/push_) y la interfaz será
desplegada usando GitHub pages. Recuerda también completar el archivo `README.md` con la
información solicitada.

## Parte opcional o “Hacker edition”

Esta sección es **opcional** y solo debería realizarse una vez **terminado todo lo anterior**.
Acá podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.
Si te queda tiempo, puedes explorar algunos de estos ejemplos:

- Cifra/descifra minúsculas.
- Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...).
- Permite usar un `offset` negativo.

## Recursos y temas relacionados

### Para la planificación:

- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente
para comenzar a entender cómo organizar tu trabajo.

### Para UX:

- [El proceso de diseño](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
- [Balsamiq](https://balsamiq.com/)

### Para el Desarrollo Front-end:

#### HTML5

- [HTML, semántica y formularios](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/html/02-html5/00-opening)
- [Validador de html](https://validator.w3.org/)

#### CSS3

- [Modelo de cajas](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/css/01-css/02-boxmodel-and-display)
- [Selectores CSS](https://disenowebakus.net/selectores-en-css.php)

#### Javascript ES6 y pruebas unitarias

- Video de Michelle, acá encontrarás la fórmula matemática del Cifrado César y un par de cosas
más que debes saber para resolver este proyecto. ¡Escúchala con detenimiento y sigue sus
consejos! :)
  [![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)
- [Aprende más sobre `ASCII`](https://elcodigoascii.com.ar/)
- [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
- [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
- [Valores y tipos de datos](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/javascript/01-basics/01-values-variables-and-types)
- [Variables](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/javascript/01-basics/02-variables)
- [Control de flujo](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/javascript/02-flow-control/00-opening)
- [Tests unitarios](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/javascript/11-testing/00-opening)
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Documentación de NPM](https://docs.npmjs.com/)

## Detalles de aprendizaje

### A nivel de planificación

- Aprender que antes de empezar a desarrollar un producto lo primero que se debe hacer es pensar
en cómo solucionar un problema identificando tareas específicas (diagrama de flujo, pseudocódigo
y tablero de planificación).
- Planificar y realizar las tareas específicas y presentar el proyecto dentro del tiempo indicado
(sprint).
- Organizar el tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

### A nivel de UX

- Entender las **necesidades del usuario** y cómo proponer una solución para él.
- Entender la importancia del proceso de prototipado durante la creación de un proyecto digital.
- Conocer los principios básicos del diseño visual.

### A nivel del Desarrollo Front-end

#### HTML5

- Utilizar etiquetas semánticas  de HTML5 y elementos de formulario.
- Validar que tu marcado HTML5 esté correctamente implementado a través del
[validador de html](https://validator.w3.org/).

#### CSS3

- Utilizar diversos tipos de selectores en CSS: de elemento, de clase, de id, etc.
- Comprender el modelo de cajas (border, margin, padding)
- Definir reglas de estilos

#### DOM (Document Object Model)

- Utilizar eventos del DOM que le permitan al usuario interactuar con la aplicación.
- Utilizar los métodos de selección del DOM.
- Actualizar de manera dinámica el contenido de la aplicación a través de innerHTML o
textContent

#### JavaScript (ES6)

- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo if-else, do-while** (bucles y condicionales).
- _Implementar funciones_ dada una descripción de su comportamiento.
- Verifica que tus funciones hagan las cosas para las que fueron creadas
(**pruebas unitarias (_test_) con Mocha**)

#### Git-Github

- Configurar tu cuenta de git
- _Forkear_ y _clonar_ el repositorio del proyecto.
- Mantener actualizado los cambios  (commit, pull, push)
- Desplegar tu proyecto en gh-pages
