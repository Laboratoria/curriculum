# Copy or Move

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)
* [10. Achicando el problema](#10-achicando-el-problema)

***

## 1. Preámbulo

Un sistema de archivos en un sistema operativo es una estructura organizada
que permite el almacenamiento y la recuperación de datos en un dispositivo
de almacenamiento, como un disco duro o una memoria USB. Funciona como una
interfaz entre el sistema operativo y el hardware de almacenamiento,
proporcionando un conjunto de funciones esenciales. Estas funciones incluyen
la capacidad de crear, leer, escribir y borrar archivos, así como
organizarlos en directorios y subdirectorios para facilitar la gestión
y la búsqueda eficiente de datos. Además, un sistema de archivos debe ser
capaz de mantener la integridad de los datos, garantizar la seguridad y el
acceso controlado a los archivos, y ofrecer mecanismos de recuperación ante
fallos o errores.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, procesos del sistema, etc.

[Node.js](https://nodejs.org/es/) proporciona una serie de módulos y funciones
integradas que facilitan la manipulación del sistema de archivos. Con su ayuda,
podemos realizar tareas como leer,
escribir, actualizar y eliminar archivos de manera sencilla. Esto se logra
mediante el uso del módulo `fs` (filesystem), el cual nos brinda una amplia
gama de métodos para interactuar con el sistema de archivos del sistema
operativo. Podemos abrir archivos, leer su contenido, escribir datos en
ellos, crear directorios, eliminar archivos y directorios, entre muchas
otras operaciones. [Node.js](https://nodejs.org/es/) nos permite trabajar
de forma asíncrona, lo que significa que podemos realizar operaciones de
lectura y escritura sin bloquear la ejecución de otras tareas, lo que
resulta en un rendimiento eficiente y una manipulación ágil del sistema
de archivos. Además, también ofrece módulos adicionales, como `path`,
que nos ayuda a trabajar con rutas de archivos y directorios de manera
consistente y portátil.

![copy-or-move](https://user-images.githubusercontent.com/12631491/234972777-fe2c40aa-a989-40c5-ad30-ce94f58386d8.png)

## 2. Resumen del proyecto

En este proyecto te enfocarás en trabajar con el sistema de archivos de tu
sistema operativo, utilizando Node.js, para re-crear una funcionalidad que
probablemente utilices diariamente: vas a crear tu propio programa para poder
copiar y mover archivos dentro de tu computadora.

Para lograrlo, vas a intentar replicar el _comportamiento_ que esperamos que
ocurra cuando en la computadora haces _copiar y pegar_ y también
_cortar y pegar_, pero esta vez ejecutado desde tu [_línea de comandos_.](https://tutorial.djangogirls.org/es/intro_to_command_line/)

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

En esta oportunidad nos alejamos un poco del navegador para construir un
programa que se ejecute usando Node.js en una CLI (también llamada _terminal_).
Aprenderemos sobre procesos (`process.env`, `process.argv`, ...), cómo
interactuar con el sistema archivos, rutas de directorios, grupos de archivos,
etc.

Tu programa debe ser publicado como paquete descargable desde
[NPM](https://www.npmjs.com/), el gestor de paquetes de Node.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otras developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

### El funcionamiento del programa debe contemplar lo siguiente

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la _terminal_ (o _CLI_):

`copy-or-move <path-to-source-file-or-directory>
  <path-to-destination-file-or-directory> [options]`

Por ejemplo: Si una usuaria quisiera **mover** el archivo `README.md` contenido
dentro del directorio actual donde está ubicada en su terminal hacia un
directorio llamado `Documentos/` que a su vez también se encuentra _dentro_ del
directorio actual, deberá ejecutar el siguiente comando en su terminal:

`$ copy-or-move ./README.md ./Documentos/`

Otro ejemplo: En caso de que una usuaria quisiera **copiar** todos los
contenidos de un directorio llamado `DCIM/` a un directorio llamado `Fotos/`,
deberá ejecutar el siguiente comando en su terminal, esta vez, incluyendo la
_opción_ (o _flag_) `-c` para hacerle saber a la librería que esta vez, en vez
de mover los contenidos, estos sólo deben ser copiados:

`$ copy-or-move ruta/hacia/DCIM/ ruta/hacia/Fotos/ -c`

#### Options

El comportamiento por defecto del programa será el de **mover** los archivos
o directorios de una fuente hacia un destino, pero en caso de que la usuaria,
en vez de mover, quisiera **copiar** esos archivos o directorios, entonces deberá
pasarle a ese comando la opción (también llamadas _flags_) `-c`.

### Casos de uso

Esta aplicación, que publicarás como librería, debe poder ser ejecutable
en una terminal, y debe contemplar los casos de uso para poder:

#### Copiar un archivo hacia un archivo

![file-file-copy](https://github.com/Laboratoria/bootcamp/assets/16993732/0b6e731b-7dac-4e9f-a6d0-c043cc6e9bff)

#### Copiar un archivo hacia un directorio

![file-folder-copy](https://github.com/Laboratoria/bootcamp/assets/16993732/c27f58d0-3b3f-48c6-ae28-64a65d387a79)

#### Copiar un directorio hacia un directorio

![folder-folder-copy](https://github.com/Laboratoria/bootcamp/assets/16993732/c7ad0320-984e-4cff-a14e-134939145490)

#### Mover un archivo hacia un archivo

![file-file-move](https://github.com/Laboratoria/bootcamp/assets/16993732/4f7a8506-8a14-4abb-a760-83be67a235fc)

#### Mover un archivo hacia un directorio

![file-folder-move](https://github.com/Laboratoria/bootcamp/assets/16993732/4b535772-c7ac-4f0c-b7f7-5be834dbfe30)

#### Mover un directorio hacia un directorio

![folder-folder-move](https://github.com/Laboratoria/bootcamp/assets/16993732/c88d01df-7f7d-4d96-ae85-d74b384831dd)

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una librería con Node.js
* Trabajar con el sistema de archivos del computador
* Trabajar con asincronía en JavaScript
* Trabajar utilizando recursividad
* Crear una suite de pruebas unitarias que permitan testear código asíncrono
* Publicar tu librería en NPM

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 4 Sprints.

* La **librería** como **script ejecutable** (herramienta de línea de comando -
  CLI - terminal) debe estar implementada en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via
  `npm install <github-user>/copy-or-move`. Este módulo debe incluir el
  _ejecutable_ que podamos invocar en la línea de comandos.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Vitest](https://vitest.dev/)
  para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto te sugerimos **no utilizar** ninguna función síncrona
  como `copyFileSync`, `renameSync` o `mkdirSync`, y en cambio intentar
  resolver este desafío de manera asíncrona.

* Cómo excepcion a la recomendación anterior, te recomendamos utilizar
  la versión síncrona de la función para leer directorios, `readdirSync`,
  para disminuir la complejidad de tu algoritmo recursivo.

## 5. Criterios de aceptación mínimos del proyecto

Para comenzar este proyecto tendrás que hacer un **_fork_** y **_clonar_** este
repositorio.

Antes de comenzar a codear, es necesario crear un **plan de acción**. Esto debería
quedar detallado en el `README.md` de tu repo y en una serie de **_issues_**
y **_milestones_** para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso. Además de eso, te recomendamos crear un
**diagrama de flujo** de tu programa.

Dentro de cada **_milestone_** se crearán y asignarán los **_issues_** que
consideres necesario.

### Archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación y ejemplos. Todo lo relevante para que cualquier
  usuaria que quiera utilizar tu librería pueda hacerlo sin inconvenientes.
* `index.js` desde este archivo debes exportar **una** función (`copyOrMove`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  deberás modificar este archivo.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/copy-or-move.spec.js` debe contener los tests unitarios para la función
  `copyOrMove()`. Tu implementación debe pasar estos tests.

## 6. Entregables

Módulo instalable via `npm install <github-user>/copy-or-move`. Este módulo
debe incluir **un ejecutable** para ser utilizado desde la terminal.

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes intentar agregarle a tu aplicación la opción de tomar un conjunto de
  archivos siguiendo un patrón utilizando un wildcard (`*`).
  
  Por ejemplo:
  `$ copy-or-move "package*" ./Documentos/ -c`
  
  O también:
  `$ copy-or-move "*.js" ./Proyectos/`
  
* Puedes agregar más opciones aparte de `-c`, por ejemplo una opción `-n` que
  le haga saber a tu programa que no es necesario sobreescribir un archivo
  en el directorio de destino si este ya existe ahí.

## 8. Pistas, tips y lecturas complementarias

### FAQs

#### ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

### Sugerencias de implementación

La implementación de este proyecto tiene varias partes: Leer del sistema de
archivos, recibir argumentos a través de la línea de comando, discernir entre
archivos y directorios, crear directorios, etc... Y todas estas cosas pueden
enfocarse de muchas formas, tanto usando librerías como implementando en
VanillaJS.

En los ejemplos anteriores, a propósito, hemos declarado que el input
de la usuaria tenga un orden específico, donde primero viene el _origen_,
luego el _destino_ y **al final** la opción (o flag) `-c`. Te recomendamos
seguir ese orden específico, de manera que sea más fácil poder analizar ese
input (o argumentos) recibido desde la terminal.

No dudes en consultar a tus compañeras y coaches si tienes dudas existenciales
con respecto a estas decisiones. No existe una "única" manera correcta de
desarrollarlo.

### Tutoriales / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [Función async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un directorio](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options)
* [Checkear si es directorio](https://nodejs.org/docs/latest/api/fs.html#statsisdirectory)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

## 9. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/copy-or-move`

### `README.md`

* [ ] Un board con el backlog para la implementación de la librería.
* [ ] Documentación técnica de la librería.
* [ ] Guía de uso e instalación de la librería.

### CLI

* [ ] Expone ejecutable `copy-or-move` en el path (configurado en `package.json`)
* [ ] Se ejecuta sin errores / output esperado
* [ ] Permite mover o copiar archivos y directorios completos
* [ ] Implementa `-c`

### Pruebas / tests

* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

## 10. Achicando el problema

Un "superpoder" que esperamos puedas desarrollar durante el bootcamp
es el de definir "mini-proyectos" que te acerquen paso a paso a
la solución del "gran proyecto". Es el equivalente a comenzar armando
esquinas o bordes del rompecabezas/puzzle sin saber necesariamente
cómo encajarán al final. Déjate llevar y explora.

Estas son algunas sugerencias:

### Empieza con un diagrama de flujo

Este proyecto es distinto de los que has venido trabajando hasta ahora
dado que no hay una interfaz web, todo se desarrollará en tu editor y terminal.

Es por ello que, para visualizar mejor lo que tendrás que hacer
y planificar tus tareas y objetivos, es recomendable hacer un
`diagrama de flujo`.

Si nunca has hecho un diagrama de flujo revisa este [recurso](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Una alternativa al diagrama de flujo puede ser el `pseudocódigo`.

### Planificación

En este proyecto te recomendamos usar la herramienta de planificación
y organización de GitHub llamada **Github Projects**.

Mediante **issues** y **milestones** podrás organizar y planificar
tareas y objetivos concretos.

Tomando en consideración los **entregables** del proyecto, el
[9. Checklist](#9-checklist) y los **pasos** que definiste en tu
`diagrama de flujo`, crea tu planificación en GitHub Projects.

### Antes de codear

En esta ocasión estarás trabajando en **NodeJS**, asegúrate
de saber para qué sirve y sus consideraciones.

En particular, deberás decidir desde un comienzo si usarás
`ES Modules`, es decir, **import/export**, o, por el contrario,
`CommonJS Modules`, es decir, **require/module.exports**.

Asegurate de tener clara esta decisión desde un inicio para
que no encuentres problemas más adelante.

### Lee el contenido de un directorio

Como primer reto, puedes tratar de leer un solo directorio con
una ruta fija e imprimir su contenido en la consola con un `console.log`.

La librería nativa `FS` (FileSystem) te será de mucha utilidad.

### Averigua si un elemento contenido es un directorio o un archivo

Para este proyecto será necesario poder discernir si un elemento
es un archivo o un directorio, lo puedes hacer utilizando
la función `fs.stat`.

### Une dos rutas

Para poder acceder a carpetas y archivos será necesario que
indiques en qué lugar de tu computadora se encuentran, a esto
le llamamos **rutas**.

Usa la librería nativa `path` para unir dos segmentos de ruta,
por ejemplo, si queremos unir:

1) /home/Laboratoria/
2) ./test

El resultado sería: /home/Laboratoria/test

### Recursividad

Este proyecto se ha de resolver de forma casi natural con
**recursividad**.

¿Por qué?.

Porque no conocemos realmente cuantas carpetas y archivos
tendremos que recorrer antes de terminar.

Si recibes una ruta de carpeta, no sabrás de ante mano si
dentro hay más carpetas o muchos archivos.

Por ello, asegurate bien de entender de qué trata la
recursividad y ver algunos ejemplos.
