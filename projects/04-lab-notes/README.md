# Lab Notes

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de Aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones Generales](#4-consideraciones-generales)
* [5. Hacker Edition](#5-hacker-edition)
* [6. Pistas & Tips](#6-pistas--tips)

***

## 1. Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del Proyecto

No existe día que no tomemos notas, siempre necesitamos apuntar alguna
dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs
favoritas para poder consultarlas más tarde. Muchas veces para esta actividad
utilizamos libretas o agendas que terminan siendo olvidadas, las anotamos en
algún mensaje de texto o terminan siendo escritas en la palma de nuestra mano.

Hoy en día la mayoría de la población cuenta con algún dispositivo mobile o
laptop y además todas nos estamos preocupando por implementar acciones para
salvar el medio ambiente, por ello a una Laboratorian se le ocurre la idea de
implementar una web app para tomar notas, que nos permita crear, editar,
eliminar y consultar las notas en cualquier momento.

Ella esta enamorada de la idea y quiere llevarla acabo, pero no tiene el tiempo
necesario para empezar el proyecto, planea que sea un proyecto independiente a
su trabajo, por ello esta buscando algunas colaboradoras dentro de la comunidad
de Laboratoria para que implementen la idea, por lo cual te pedimos que la
ayudes.

![Shows CRUD functionalities](https://raw.githubusercontent.com/florenciasilva/lab-notes/master/demo-crud.gif?token=AGJBHNTVAQRWOVF2IGMP6FK5NVFAS)

Para este proyecto necesitas crear una Web App con `React`, `Firebase` y
`react-router`.

Si bien la temática es libre, tu aplicación tendrá que tener ciertas
funcionalidades básicas:

* Autenticación con correo y/o Google y/o Facebook.
* Cerrar sesión.
* Crear una nueva nota.
* Ver mis notas.
* Editar mis notas.
* Borrar mis enotas.

Para este proyecto tendrás que manejar `vistas`. Esto significa que cada sección
tendrá su propia URL, la cual indica que `vista` o `componente` será mostrado en
pantalla. Para ello necesitaremos investigar acerca de `react-router` y el
concepto de `Single Page Application`.

### Archivos del proyecto

El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y cosas
  relevantes de tu proyecto.
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.prettierrc` este archivo contiene reglas para formatear el codigo, el cual
  aplica estilos consistentes apartir de tus reglas.

## 3. Objetivos de Aprendizaje

El objetivo principal de este proyecto es aprender a construir una interfaz web
usando el _framework_ elegido (en este caso vamos a preferir usar React). Este
framework resuelve el problema de: **cómo mantener la interfaz y el estado
sincronizados**. Así que esta experiencia espera familiarizarte con el concepto
de _estado de pantalla_, y cómo cada cambio sobre el estado se va a ir
reflejando en la interfaz (por ejemplo, cada vez que agregamos una _nota_, la
interfaz debe actualizar la lista de notas).

### React

* [ ] ¿Qué es React?
* [ ] ReactDOM rendering
* [ ] ¿Qué es un componente de React?
* [ ] JSX
* [ ] Props
* [ ] Renderizado condicional
* [ ] Manejo de estado (ej: `this.state`, `useState`, `redux`, ...)
* [ ] Manejo de eventos
* [ ] Refs
* [ ] Component Lifecycle

### `react-router`

* [ ] Route Config
* [ ] Links
* [ ] Parámetros de URL
* [ ] Navegación programatica
* [ ] Rutas protegidas
* [ ] Redirect

### Firebase

* [ ] Firestore
* [ ] Firebase Auth
* [ ] Firebase security rules
* [ ] Uso de onSnapshot
* [ ] onAuthStateChanged

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

## 4. Consideraciones Generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La aplicación debe ser un _Single Page App_. Las notas serán realizadas desde
una _tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de quienes van a tomar las notas, el
tamaño y aspecto de los botones, la visibilidad del estado actual del pedido,
etc.

La aplicación debe hacer uso de npm-scripts y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Implementar pruebas unitarias de tus componentes.

## 5. Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes
pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del
  navegador se cierra, cuando la vuelva a abrir, la nota debería mostrarse como
  estaba.
* Subir imágenes.
* Ver el número de veces que he editado mi nota.
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc).
* Progressive Web App (PWA).

## 6. Pistas & Tips

### Primeros pasos

Al usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

# Creamos app con create-react-app en dir temporal
create-react-app lab-notes-tmp
# Borramos README de create-react-app
rm lab-notes-tmp/README.md
# Copiamos archivos de create-react-app en repo de lab-notes
cp -r lab-notes-tmp/.gitignore lab-notes-tmp/* lab-notes/
# Borramos carpeta temporal donde instalamos reate-react-app
rm -rf lab-notes-tmp
# Entramos en repo de lab-notes ya con instalación de create-react-app
cd lab-notes
```

### Otros recursos

* [Reactjs](https://reactjs.org/)
* [create-react-app](https://create-react-app.dev/docs/getting-started)
* [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [deploy con gh-pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [What is a Single Page Application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
