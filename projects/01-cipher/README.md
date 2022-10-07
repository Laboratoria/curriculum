# Cifrado César

## Índice

* [1. Preámbulo](#2-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Hito: Criterios de aceptación mínimos del proyecto](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Hito Opcional: Agrega soporte para minúsculas y otros caracteres](#5-hito-opcional-agrega-soporte-para-minúsculas-y-otros-caracteres)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para considerar Project Feedback](#9-para-considerar-project-feedback)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

En este proyecto crearás una aplicación web que servirá para que tu usuaria
pueda cifrar y descifrar un texto en el navegador indicando un desplazamiento específico de
caracteres (_offset_). Lo harás utilizando HTML, CSS y JavaScript.

La temática es libre. Piensa en qué situaciones se necesitaría cifrar un mensaje. Decide 
cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, etc.) 
Algunas ideas de ejemplo:

* Crear claves seguras para el email.
* Encriptar/cifrar una tarjeta de crédito.
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

Como continuación del proyecto de preadmisión, volverás a trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS. Mientras desarrollas este proyecto, te familiarizarás con nuevos conceptos también.

### Los objetivos generales de este proyecto son los siguientes

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles) en JavaScript
* Implementar control de versiones con git (y la plataforma github)

## 3. Consideraciones generales

* Este proyecto lo resolvemos de manera individual. Te recomendamos una duracion de 1-3 sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto. Te va a costar.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear. No te preocupes demasiado ahora por lo que _todavía_ no entiendas. Irás aprendiendo.


## 4. Hito: Criterios de aceptación mínimos del proyecto 

Estos son los requisitos que tu proyecto debe que cumplir para asegurar que tu trabajo cubra los objetivos principales.  

**1. Una interfaz que debe permitir a la usuaria:**

  * **Cifrar un mensaje**
    * Insertar el mensaje (texto) que quiere cifrar. El mensaje usa alfabeto simplificado (solamente mayúsculas y sin ñ).
    * Elegir un numero de desplazamiento (_offset_) indicando cuántas posiciones quieres que
  el cifrado desplace cada caracter en el alfabeto. El numero sera positivo y entero (positive integer).
    * Ver el resultado del mensaje cifrado.

 * **Descifrar un mensaje**
    * Insertar el mensaje (texto) que quieres descifrar. El mensaje usa alfabeto simplificado (solamente mayúsculas y sin ñ).
    * Elegir un numero desplazamiento (_offset_, que corresponda al que usamos para cifrar) indicando cuántas posiciones quieres que
  el cifrado desplace cada caracter en el alfabeto. El numero sera positivo y entero (positive integer).
    * Ver el resultado del mensaje descifrado.

**2. Pruebas unitarios de los métodos.**  
  Los metódos de `cipher` (`encode` y `decode`) deben tener cobertura con pruebas unitarias.

**3. Código de tu proyecto subido a tu repo y interfaz "desplegada".**  
  El código final debe estar subido en un repositorio en GitHub. La interfaz o pagina web, debe ser "desplegada" usando GitHub Pages.

**4. Un README que contiene una definición del producto.**  
  En el README cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz. Estas preguntas sirven como guia:

  * Quiénes son los principales usuarios de producto.
  * Cuáles son los objetivos de estos usuarios en relación con tu producto.
  * Cómo crees que el producto que estás creando está resolviendo sus problemas.

Con estos requisitos cumplidos puedes agendar un Project Feedback con unx coach.

## 5. Hito Opcional: Agrega soporte para minúsculas y otros caracteres

Las partes "opcionales" tienen como intención permitirte profundizar un poco más sobre 
los objetivos de aprendizaje del proyecto. Todo en la vida tiene pros y contras, decide 
sabiamente si quieres invertir el tiempo en profundizar/perfeccionar o aprender cosas 
nuevas en el siguiente proyecto.

El hito de los críterios mínimos no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El _boilerplate_ incluye algunos _tests_ (comentados en principio) que 
puedes usar como punto de partida para implementar el soporte para estos casos adicionales.

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_ es la estructura basica de un proyecto que sirve como un punto de partida con archivos inicial y configuración basica de dependencias y tests.  

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación web,
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).
 
***

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 8. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar.

1. Asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programa que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.app/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-cipher](https://claseslaboratoria.slack.com/archives/C03LJSH6R7D) para conversar y pedir ayuda del proyecto.

A continuación un video que te lleva a través de la fórmula matemática del Cifrado César 
y un par de cosas más que debes saber para resolver este proyecto. La fórmula no es lo iportante del proyecto, no te confundas.

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Desarrollo Front-end:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* Aprende más sobre [objetos](https://es.javascript.info/object) y [como definir métodos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects#definici%C3%B3n_de_m%C3%A9todos) 
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.

***

## 9. Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria cifrar y descifrar.
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de `cipher` (`encode` y `decode`). 
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages. 
* [ ] El README contiene una definición del producto.
