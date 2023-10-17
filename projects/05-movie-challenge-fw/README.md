# Movie Challenge con Framework

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Consideraciones técnicas](#5-consideraciones-técnicas)
- [6. Criterios mínimos de aceptación del proyecto](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [7. Despliegue](#7-despliegue)
- [8. Consideraciones para pedir tu Project Feedback](#8-consideraciones-para-pedir-tu-project-feedback)
- [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)

---

## 1. Preámbulo

La manera en que vemos películas ha cambiado radicalmente durante los últimos
años debido, en parte, a la aparición de los servicios de
[_streaming_](https://es.wikipedia.org/wiki/Streaming) que nos permiten hacerlo
desde donde estemos y en cualquier momento. El mejor reflejo de este fenómeno es
el éxito de Netflix, HBO y Disney+, etc.

Creemos que hay una gran oportunidad de proponer productos/experiencias
innovadoras de todo tipo utilizando datos de películas (directorxs, actorxs,
sagas, secuelas, fechas, etc.). Podríamos pensar en juegos, comunidades,
catálogos, recomendaciones basadas en gustos personales, etc. (sólo por
mencionar algunas ideas obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumen del proyecto

En este proyecto, crearás una página web destinada a visualizar, filtrar y
ordenar el catálogo de películas de
[_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página puede servir como un catálogo de
películas general, pero también, si te animas,
puedes considerar la posibilidad de diseñarla
para un público y usuarias específicas
con preferencias como "películas western"
o "películas de las 80's" por ejemplo.

Para implementar este proyecto deberás elegir un framework entre
[React](https://reactjs.org/) y [Angular](https://angular.io/).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web:
[_mantener la interfaz sincronizada con el estado_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Esto nos permite concentrarnos mejor (dedicar más tiempo) en las
características _específicas_ de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

Este proyecto se debe "resolver" de manera individual.

El rango de tiempo estimado para completar el proyecto es de 2 a 3 Sprints.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 5. Consideraciones técnicas

La aplicación debe ser un _Single Page App_.

La aplicación no debe ser _responsive_.

Para poder usar la API de
[_The Movie Database API V3_](https://developer.themoviedb.org/docs)
deberás crear una cuenta, luego
una llave (_key_) de acceso y usarla en cada petición
que hagas al servidor. Recuerda que tienes un máximo
de 1.000 peticiones diarias a la APIs por cada
[IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP),
creemos que es suficiente, pero te recomendamos hacer un uso
responsable de este recurso gratuito.

Uno de los mayores objetivos de este proyecto es aprender a usar una librería o
framework popular para desarrollar una web app.
Debes elegir entre [React](https://es.react.dev/) o [Angular](https://angular.io/).

Ten en cuenta que si eliges Angular, tienes la obligación de usar [TypeScript](https://www.typescriptlang.org/).
_Typescript_ es un lenguaje de programación fuertemente tipado basado en
javascript.

Si eliges React, la decisión de usar Typescript es opcional (pero te lo
recomendamos!). Aquí puedes encontrar más información en relación a cómo iniciar
tu proyecto con [Typescript y React](https://itnext.io/create-react-v18-typescript-project-with-vite-d0d602e4a60e).

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

## 6. Criterios mínimos de aceptación del proyecto

### Prototipo de baja fidelidad

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos entrega una primera iteración del prototipo de baja fidelidad
de la aplicación en [esta imagen](./docs/movie-list.png) y esta [otra](./docs/movie-detail.png).

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

---

#### [Historia de usuario 1] Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

##### Criterios de aceptación

- Se debe usar el _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- La aplicación cuenta con una paginación para explorar el catálogo por páginas.
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 2] Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando
los criterios soportados por _TheMovie Database API V3_

##### Criterios de aceptación

- Para filtrar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _with_genres_.
- Para ordenar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _sort_by_.
- La paginación debe conservar el filtro y ordenamiento
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 3] Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

##### Criterios de aceptación

- Se debe usar el _endpoint_
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para la película se debe mostrar como mínimo: poster, título original,
año de lanzamiento, géneros, promedio de votación y total de votos.
- La interfaz debe permitir retornar al listado de películas conservando
el filtro y ordenamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

## 7. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Te recomendamos explorar las siguientes opciones:

- [Vercel](https://vercel.com/) es una plataforma de _despliegue_ que
nos permite desplegar nuestra aplicación web estática (HTML, CSS y
JavaScript) y también nos permite desplegar aplicaciones web que se
ejecutan en el servidor (Node.js).
- [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

- [ ] Protipo de alta fidelidad en Figma
- [ ] Cumple con todos los [criterios mínimos de aceptación](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [ ] Está subido a GitHub
- [ ] Esta [desplegado](#7-despliegue)
- [ ] Tiene un README con la definición del producto.

Recuerda que debes hacer una autoevaluación de objetivos de aprendizaje
y life skills desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista
para tu sesión de Project Feedback.

## 9. Pistas, tips y lecturas complementarias

Súmate al canal de Slack
[#project-movie-challenge-fw](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar y pedir ayuda del proyecto.

### Prototipo de alta fidelidad

Tomando como base el prototipo de baja fidelidad entregado, crea uno de alta
fidelidad en Figma. Define una paleta de colores y un diseño grafico. Procura
que esto te tome entre 1 o 2 días.

### Explora y consume The Movie Database API

Explora la
[documentación](https://developer.themoviedb.org/docs)
de The Movie Database API. Inicia leyendo la sección
[_Getting Started_](https://developer.themoviedb.org/docs/getting-started),
luego
[_AUTHENTICATION_ --> _Application_](https://developer.themoviedb.org/docs/authentication-application)
y finalmente las referencias de endpoints
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
y
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Luego crear una cuenta y genera una llave
(key) de acceso para consumir la API.

Finalmente, realiza peticiones HTTP de prueba a la API usando herramientas como
[Postman](https://www.postman.com/)
o
[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
Identifica los headers, body, verbos, códigos de respuesta y encodings las peticiones.

### Explora la documentacion del framework  elegido

La comunidad de desarrolladoras de cada framework se ha forzado mucho por crear
documentaciones amigables para quienes inician con cada tecnología. Por lo tanto,
date la oportunidad de explorar la documentación y probar sus ejemplos y tutoriales.

### Planifica la implementación de la primera historia de usuaria

Toma la primera historia de usuaria y
divídela en tareas más pequeñas. Identifica
el orden y prioridad de cada tarea.
Documenta tu planificacion en Trello o Github Project.

### Implementa tu primer componente

Toma la primera vista de prototipo de alta e implementala.
Te sugerimos seguir los siguientes
pasos independiente del framework  que uses:

- Paso 1: Separa la UI en una jerarquía de componentes
- Paso 2: Construye una versión estática de la UI sin añadir ninguna
interactividad aún
- Paso 3: Encuentra la representación mínima pero completa del estado de la UI.
Piensa en el estado como el conjunto mínimo de datos cambiantes que
la aplicación necesita recordar.
- Paso 4: Después de identificar los datos mínimos de estado de tu aplicación,
debes identificar qué componente es responsable de cambiar este estado,
o posee el estado.
- Paso 5: Identifica el flujo de comunicación entre cada componente:
padre a hijo o hijo a padre. Implementa la estrategia identificada tal como
te sugiere el framework.

### Frameworks / libraries

- [React](https://react.dev/)
- [Angular](https://angular.io/)
- [ViteJs](https://vitejs.dev/)
