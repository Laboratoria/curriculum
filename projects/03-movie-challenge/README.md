# Movie Challenge

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Consideraciones técnicas](#5-consideraciones-técnicas)
- [6. Criterios mínimos de aceptación del proyecto](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [7. Deploy](#7-deploy)
- [8. Consideraciones para pedir tu project feedback](#8-consideraciones-para-pedir-tu-project-feedback)
- [9. Consejos, guías y lecturas complementarias](#9-consejos-guías-y-lecturas-complementarias)

---

## 1. Preámbulo

La manera en que vemos películas ha cambiado radicalmente durante los últimos
años debido, en parte, a la aparición de los servicios de
[_streaming_](https://es.wikipedia.org/wiki/Streaming) que nos permiten hacerlo
desde donde estemos y en cualquier momento. El mejor reflejo de este fenómeno es
el éxito de Netflix, HBO y Disney+, etc.

En tiempos en los que una de las principales herramientas para combatir
[la pandemia de Covid-19](https://es.wikipedia.org/wiki/COVID-19) es
[evitar](https://es.wikipedia.org/wiki/Distanciamiento_social) compartir
espacios con muchas personas (como en el cine), ver películas por _streaming_
es una de las pocas maneras de hacerlo (¿o la única?).

Creemos que hay una gran oportunidad de proponer productos/experiencias
innovadoras de todo tipo utilizando datos de películas (directorxs, actorxs,
sagas, secuelas, fechas, etc.). Podríamos pensar en juegos, comunidades,
catálogos, recomendaciones basadas en gustos personales, etc. (sólo por
mencionar algunas ideas obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumen del proyecto

En este proyecto, crearás una página web para ver, filtrar y ordenar el
catálogo de peliculas de la [_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página puede servir como un catálogo de películas general, pero también si
ud quiere, puede considerar la posibilidad de diseñarlo para un público en
específico con preferencias como "películas occidentales" o "películas de los
80", por ejemplo.

Aunque la decisión de qué hacer es enteramente tuya, hay algunas consideraciones
generales que se presentan a continuación. Puedes cumplir esos requisitos en
proyectos muy diferentes, ¡depende de tu creatividad y del entendimiento que
tengas de tus potenciales usuarixs!

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a
partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

- Este proyecto se debe resolver individual.
- El plazo estimado para completar el proyecto es de 4 Sprints.
- Las pruebas unitarias deben cubrir al menos el 90% statements, functions,
lines y branches.
- Además, debes definir la estructura de carpeta y los archivos que considera
que sean necesario. Por lo tanto, las pruebas y la configuración requeridas
para ejecutarlos será su responsabilidad, para hacerlo puedes basarte en los
proyectos anteriores.

## 5. Consideraciones técnicas

- La aplicación debe ser una aplicación de una sola página.

- La aplicación debe ser responsive.

- Para poder usar la [La API V3 de la Base de Datos de Películas]](https://developer.themoviedb.org/docs/getting-started)
deberás crear una llave (key) de acceso agregarla a cada petición que hagas al
servidor

- Recuerda que tienes un máximo de 1.000 peticiones diarias a la API
por cada [IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP), creemos que es
suficiente, pero te recomendamos hacer un uso responsable de este recurso
gratuito.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
├── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── index.html
    ├── main.js
    └── style.css

```

### `src/index.html`

Como en el proyecto anterior, hay un archivo `index.html` . Como ya sabes, aquí
ingresa la página que se mostrará al usuario. También sirve para indicar cuales
son los scripts se utilizarán y armarán todo lo que se ha hecho.

### `src/main.js`

Recomendamos usar `src/main.js`, como punto de entrada de tu aplicación. El
_boilerplate_  incluye este archivo para conectar o montar el componente `App`
en el DOM. De esta manera podemos hacer test unitarios de nuestros componentes
que necesitemos que están conectados a una DOM global.

Aquí es donde recomendamos implementar su SPA.

Esta no es la única manera de dividir tu código. Puede utilizar más archivos y
carpetas, siempre que la estructura esté clara.

### `src/components/App.js`

Este archivo contiene un componente ejemplo que muestra cómo podemos representar
un componente en función que devuelve un `HTMLElement`. A la hora de construir
interfaces, es útil pensar en los términos de los _componentes_ o vistas que
podemos anidar una dentro de las otras. Te invitamos a  que pienses
en qué _componentes_ o cajita se necesitas para construir tu aplicación y que
_componentes_ añade en la dirección `components` a aplicar a cada uno de ellos.
Aunque de nuevo al final, la manera de organizar sus archivos depende de de ti y
tu equipo. Hay muchas maneras de hacerlo, y el _boilerplate_ es sólo una
sugerencia".

### `scr/components/App.spec.js`

Este archivo muestra cómo podemos crear archivos con especificaciones (expresado
como test unitarios) de nuestros componentes.

## 6. Criterios mínimos de aceptación del proyecto

### Prototipo de baja fidelidad

El [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
proporciona una primera iteración del prototipo de baja fidelidad de la
aplicación en esta [imagen](https://github.com/Laboratoria/SAP012-movie-challenge/blob/main/docs/movie-detail.png)
y en [este](https://github.com/Laboratoria/SAP012-movie-challenge/blob/main/docs/movie-list.png)
otro.

### Definición del producto

El [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
resenta este _backlog_ que es el resultado de su trabajo con el cliente hasta el
momento.

---

#### [Historia de Usuario 1] Lista de Películas**

Yo como ususario, quiero ver un catálogo de películas en una tabla (líneas y
columnas).

##### Criterios de apectación

- [El endpoint `/discover/movie`](https://developer.themoviedb.org/reference/discover-movie) debe ser utilizado.
- La aplicación debe incluir la paginación para explorar el catálogo por páginas
- Cada película debe mostrar al menos : póster, título original y año de estreno

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

#### [Historia de Usuario 2] Detalles de película

Yo, como usuario, quiere consultar detalles de las películas

##### Criterios de aceptación

- El endpoint debe ser utilizado [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Cada película debe mostrar al menos : póster, título original, año de
lanzamiento, género, votación media, votos totales.
- La interfaz debe permitir volver a la lista de películas manteniendo el filtro
y la orden.

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

#### [Historia de Usuario 3 - Hacker Edition] Filtrar y Ordenar**

Yo, como usuario, quiero filtrar y ordenar el catálogo de la película usando los
críterios compatibles con Themovie Database API V3.

##### Criterios de aceptación

- Para filtrar, se debe utilizar el endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemeplo with_genres.
- Para ordenar, debes utilizar el enpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemplo sort_by
- La página debe mantener el filtro y el ordenamiento.
- Cada película debe mostrar al menos: póster, título original y año de estreno.

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

## 7. Deploy

Puede elegir el proveedor (o proveedores) que prefiera, junto con el mecanismo
de deploy y la estrategia de hospedía. Recomendamos explorar las siguientes
opciones:

- [Vercel](https://vercel.com/) es una plataforma que permite desplegar nuestra
aplicación web estática (HTML, CSS, JavaScript) y también permite implementar
aplicaciones web que se ejecutan en el servidor (Node.js).
- [Netlify](https://www.netlify.com/) es similar a Vercel, siendo una plataforma
que permite implementar nuestra aplicación web estática (HTML, CSS y JavaScript)
y también permite implementar aplicaciones web que se ejecutan en el servidos
(Node.js).

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

- [ ] Tiene prototipo de alta fidelidad en Figma
- [ ] Tiene todos los [Criterios minimos de Aceptación](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [ ] El código deberá esta en Github
- [ ] Esta con [Deploy](#7-deploy)
- [ ] Tiene un Readme con definición de producto

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.

## 9. Consejos, guías y lecturas complementarias

### Propotito de alta fidelidad

Basandote en el prototipo de baja fidelidad proporcionado, deberás crear un
prototipo de alta fidelidad en Figma. Agrega paleta de colores y un diseño
gráfico. Intenta terminar en 1 o 2 días como máximo.

#### Explorar y consumir la API de la base de datos de películas

Explora la [documentación](https://developer.themoviedb.org/docs) de la API de
la base de datos de la Película. Comienza leyendo la sección [Getting Started](https://developer.themoviedb.org/docs/getting-started),
despues continúa [AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
y finalmente las referencias de los endpoints [/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
y [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details)

Deberás crear una cuenta y generar una clave(key) de acceso para consumir la API

Por último, puedes probar hacer peticiones HTTP a la API utilizando herramientas
como [Postam](https://www.postman.com/) o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
Identificando encabezados(header), cuerpo(body), verbos, códigos de respuesta y
códigos de solicitudes.

#### Planear la implementación de la primera Historia de Usuario

Toma la primera historia de usuario y dividela en tareas más pequeñas,
identificando el orden y prioridades de cada tarea. Documenta tu planificación
en Trello o Github Project.

#### Entendiendo los conceptos de SPA (Single Page Aplication) y Router

Antes de comenzar con el código, asegúrate de entender los conceptos de una
single page aplication(SPA) y enrutado de páginas. Esto te permitirá crear una
experiencia de usuario fluida y dinámica. Investiga las mejores prácticas y
herramientas disponibles para implementar una SPA en tu proyecto.

Recomendamos hacer una SPA más simple usando `hashchange` . Este [video](https://youtu.be/hf8x3A1e57Y)
puede ayudarte a construir tu SPA en `main.js` de tu proyecto.

Si puedes tomarte el tiempo y quieres profundizar en las rutas y en la
construcción de una SPA mas robusta, como `Hacker Edition`, puedes inplementar
[Router con JavaScript puro](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md)

Trata de divertirte. ¡a empezar esta aventura 🎬!
