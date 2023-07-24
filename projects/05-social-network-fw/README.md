# Rehaciendo tu red social usando librerías y frameworks

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

[React](https://es.reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
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
**abstracciones**, un **vocabulario**, una **comunidad**, ...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

![caracoles](https://user-images.githubusercontent.com/110297/135919690-c24009e7-4d6a-4b4d-a046-d9ca73b5587e.png)

_Imagen tomada de [Animated Photography](http://www.animated-photography.com/)_.

## 2. Resumen del proyecto

En este proyecto tendrás la oportunidad de _re-escribir_ tu anterior proyecto de
la _Red Social_, pero esta vez usando un _framework_ o una _librería_.

Creemos que una muy buena manera de profundizar en estas herramientas puede ser
eliminando de la ecuación el hecho de que tengas que entender un proyecto desde
cero, su alcance, sus particularidades, el flujo, las validaciones, etc.
Concéntrate en aprender y utilizar estas nuevas tecnologías.

El alcance del proyecto y el detalle de sus características es exactamente
[el mismo que el original](https://github.com/Laboratoria/curricula-js/tree/main/projects/03-social-network),
incluyendo la parte de Hacker Edition pero excluyendo la parte de UX.

El objetivo principal de aprendizaje es familiarizarse con el desarrollo web
usando el _framework_ o _librería_ elegido, y todo lo que ello conlleva:
**documentación**, **arquitectura**, **principios de diseño**, **paradigma**,
**abstracciones**, **vocabulario**, **herramientas**, **comunidad**, ...

Por otro lado, tener que _re-escribir_ un programa es una experiencia de
aprendizaje muy valiosa en sí misma, llevándonos a re-evaluar e iterar sobre
un producto o prototipo. Dada la velocidad a la que evoluciona la tecnología
web, es muy común tener que enfrentarse a este tipo de escenario donde decidimos
(o alguien decide por nosotros) que lo mejor para seguir evolucionando una
aplicación es re-escribirla usando una nueva tecnología.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

Este proyecto se debe "resolver" en duplas.

Discutan y pónganse de acuerdo sobre cuál de los proyectos van a hacer desde cero.
Si no se pueden poner de acuerdo en 10 minutos, [aquí hay algo que puede ayudar](https://justflipacoin.com/)

Investiguen un poco sobre estas tres herramientas propuestas (React, Angular y
Vue) y elijan con cuál quieren trabajar.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Criterios de aceptación mínimos del proyecto

Ver [03-social-network](https://github.com/Laboratoria/bootcamp/tree/main/projects/03-social-network#5-criterios-de-aceptación-mínimos-del-proyecto).

## 6. Hacker edition

Ver [03-social-network](https://github.com/Laboratoria/curricula-js/tree/main/projects/03-social-network#6-hacker-edition).

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 8. Pistas, tips y lecturas complementarias

Antes de elegir un framework, te recomendamos leer los siguientes artículos:

* [The deepest reason why modern JavaScript frameworks exist](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)
* [Should I use frameworks or libraries such as Angular, React, or VueJS or not?](https://dev.to/ericpaulbasbas/should-i-use-frameworks-or-libraries-such-as-angular-react-or-vuejs-or-not-3dp)

No dejes de explorar la documentación oficial de cada herramienta:

### React

* [React - docs oficiales](https://es.reactjs.org/)
* [React - tutorial](https://egghead.io/courses/the-beginner-s-guide-to-react)
* [Redux - tutorial](https://egghead.io/courses/getting-started-with-redux)
* [create-react-app](https://github.com/facebook/create-react-app)
* [React js en español - tutorial básico, primeros pasos y ejemplos - frontendlabs.io](https://frontendlabs.io/3158--react-js-espanol-tutorial-basico-primeros-pasos-ejemplos)

### :information_source: Nota para estudiantes que elijan React y `create-react-app`

Si tratas de usar [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)
en el directorio del proyecto recibirás un error diciendo que hay archivos que
podrían presentar un conflicto. Para evitar este problema puedes crear una nueva
app usando `create-react-app` y de ahí _mezclarla_ con la carpeta del proyecto:

```sh
# Si estabas en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

# Creamos una nueva aplicación con `create-react-app` en la carpeta
# `social-network-tmp`
npx create-react-app social-network-tmp

# Copiamos el _boilerplate_ del proyecto _encima_ de la aplicación creada con
# `create-react-app`
cp -r <cohort-id>-social-network-fw/* social-network-tmp/

# Copiamos el contenido de la aplicación creada con `create-react-app` de vuelta
# al repo del proyecto (teniendo en cuenta el archivo _oculto_ `.gitignore`).
cp -r social-network-tmp/.gitignore social-network-tmp/* <cohort-id>-social-network-fw/

# Ya podemos borrar la instalación _temporal_ y quedarnos solo con el repo del
# proyecto, con el que partimos.
rm -rf social-network-tmp

# Volvemos a entrar en el directorio del proyecto y ya deberíamos estar listas
# para comenzar.
cd <cohort-id>-social-network-fw

# Para confirmar que todo fue bien arranca la aplicación con el siguinte comando
# y verifica que la interfaz se abre en el navegador.
yarn start
```

### Angular

* [Angular - docs oficiales](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)
* [Angular - tutorial](https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ)
* [Angular - crud](https://www.youtube.com/watch?v=6wVolJfXn1c)
* [Angular - redux](https://www.youtube.com/playlist?list=PLCKuOXG0bPi3FtoplJe0JOpiV6OyK30wd)

### Vue

* [Vue - docs oficiales](https://vuejs.org/)
* [Vue CLI](https://cli.vuejs.org/)
* [Vue- adicional](https://scotch.io/search?q=vue)
* [Vue- school](https://vueschool.io/)

Independientemente de si eliges React, Vue o Angular, todos estas herramientes
se usan muchas veces en conjunción con Redux como manejador de _estado_.

* [Redux - docs oficiales](https://redux.js.org/)

## 9. Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Información sobre instalación y despliegue de tu aplicación.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines,
  y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite filtrar posts por público/amigos.
* [ ] Permite marcar posts como _gustados_ (like).
