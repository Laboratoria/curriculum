# Lab Notes

## Índice

- [Lab Notes](#lab-notes)
  - [Índice](#%c3%8dndice)
  - [Preámbulo](#pre%c3%a1mbulo)
  - [Resumen del Proyecto](#resumen-del-proyecto)
    - [Archivos del proyecto](#archivos-del-proyecto)
  - [Objetivos de Aprendizaje](#objetivos-de-aprendizaje)
  - [Consideraciones Generales](#consideraciones-generales)
  - [Hacker Edition](#hacker-edition)
- [Pistas & Tips](#pistas--tips)
    - [Primeros pasos](#primeros-pasos)
    - [Otros recursos](#otros-recursos)

## Preámbulo

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


## Resumen del Proyecto

No existe día que no tomemos notas, siempre necesitamos apuntar alguna dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs favoritas para  poder consultarlas más tarde. Muchas veces para esta actividad utilizamos libretas o agendas que terminan siendo olvidadas, las anotamos en algún mensaje de texto o terminan siendo escritas en la palma de nuestra mano.

Hoy en día la mayoría de la población cuenta con algún dispositivo mobile o laptop y además todas nos estamos preocupando por implementar acciones para salvar el medio ambiente, por ello a una Laboratorian se le ocurre la idea de implementar una  web app para tomar notas, que nos permita crear, editar, elimina y consultar las notas en cualquier momento.

Ella esta enamorada de la idea y quiere llevarla acabo, pero no tiene el tiempo necesario para empezar el proyecto,  planea que sea un proyecto independiente a su trabajo, por ello esta buscando algunas colaboradoras dentro de la comunidad de Laboratoria para que implementen la idea, por lo cual te pedimos que la ayudes.

![Shows CRUD functionalities](https://raw.githubusercontent.com/florenciasilva/lab-notes/master/demo-crud.gif?token=AGJBHNTVAQRWOVF2IGMP6FK5NVFAS)


Para este proyecto necesitas crear una Web App con `React`, `Firebase` y `react-router`.

Si bien la temática es libre, tendrá que tener ciertas funcionalidades básicas:
* Autenticación con Correo y/o Google y/o Facebook.
* Cerrar sesión.
* Crear una nueva nota
* Ver mis notas
* Editar mis notas
* Borrar mis enotas


Para este proyecto deberemos manejar `vistas`. Esto significa que cada sección tendrá su propia URL, la cual indica que `vista` o `componente` será mostrado en pantalla. Para ello necesitaremos investigar acerca de `react-router` y el concepto de `Single Page Application`.

### Archivos del proyecto

El proyecto debera de contener los siguientes archivos base de configuración, aunque no seran los unicos archivos que quizás tendras que crear. 

- `README.md` es donde se encontrara la descripción del proyecto y cosas relevantes de tu proyecto.
- `.editorconfig` este archivo contiene la configuración para editores de texto.
- `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
- `.prettierrc` este archivo contiene reglas para formatear el codigo, el cual aplica estilos consistentes apartir de tus reglas.



## Objetivos de Aprendizaje

   El objetivo principal de este proyecto es aprender a construir una _interfaz web_ usando
   el _framework_ elegido (En este caso vamos a preferir usar React). Este Framework resuelve el problema de: **cómo mantener la interfaz y el estado sincronizados**. Así que esta experiencia espera familiarizarte con el
   concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos una
   _nota_, la interfaz debe actualizar la lista de notas).

1. La interfaz debe estar diseñada específicamente para correr en **tablets**.
2. Este será nuestro primer proyecto utilizando la biblioteca de React. 
3. Por ello nos concentraremos en entender las bases de React

- #### React
     - [ ] Que es React
     - [ ] ReactDOM rendering
     - [ ] Que es un React component
     - [ ] JSX
     - [ ] State and setState
     - [ ] Manejo de eventos
     - [ ] Props
     - [ ] Refs
     - [ ] Lifecycle Methods
- ### React-router
    - [ ] Route Config
    - [ ] Links
    - [ ] URL Parametros
    - [ ] Navegación programatica
    - [ ] Rutas protegidas
    - [ ] Redirect
- ### Firebase
    - [ ] Firestore
    - [ ] Firebase Auth
    - [ ] Firebase security rules
    - [ ] Uso de onSnapshot
    - [ ] onAuthStateChanged
- ### Buenas prácticas de desarrollo
    - [ ] Modularización
    - [ ] Nomenclatura / Semántica
    - [ ] Linting
  
  


## Consideraciones Generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La aplicación debe ser un _Single Page App_. Las notas seran realizadas desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de quienes van a tomar las notas,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.


 La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

 Implementar test unitarios incluyendo el porcentaje de coverage.

La lógica del proyecto debe estar implementada completamente en React.

La aplicación debe ser un Single Page Application.





## Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del navegador se cierra, cuando vuelva a abrir esta, la nota debería mostrarse como estaba.
* Ver el número de veces que he editado mi nota
* Subir imágenes
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc)
* Progressive Web App (PWA)


# Pistas & Tips

### Primeros pasos

Al usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
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
