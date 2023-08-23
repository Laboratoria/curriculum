# Movie Challenge con Framework

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Consideraciones generales](#3-consideraciones-generales)
- [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Consideraciones técnicas](#6-consideraciones-tecnicas)

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

La idea de este proyecto es que, usando una API con información de películas,
puedas idear, planear, organizar y desarrollar una aplicación web que aproveche
estos datos y tenga una propuesta de valor atractiva para lxs usuarixs.

Aunque la decisión de qué hacer es enteramente tuya, hay algunas consideraciones
generales que se presentan a continuación. Puedes cumplir esos requisitos en
proyectos muy diferentes, ¡depende de tu creatividad y del entendimiento que
tengas de tus potenciales usuarixs!

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

## 3. Consideraciones generales

- Este proyecto se debe resolver en equipos de 3 personas como máximo.
- Debes elegir y sustentar qué problema o necesidad estás resolviendo con el
  producto que estás diseñando y desarrollando.
- Debes utilizar los datos de la API de
  [The Movie Database API V3](https://developers.themoviedb.org/3/getting-started/introduction)
  o
  [OMDB](http://www.omdbapi.com/) (The Open Movie Database)
  o cualquier otra API que encuentres.
- Para implementar este proyecto debes elegir un framework entre React o Angular.
- Intenta pensar en un alcance que, considerando su complejidad y la cantidad de
  personas en el equipo, permita terminar el proyecto en 3 o 4 semanas.

## 4. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 5. Criterios de aceptación mínimos del proyecto

- Utilizar la _The Movie Database API V3_ o _OMDB_ o cualquier otra API
  mediante _fetch_ para obtener y mostrar una interfaz basada en los datos
  de cada respuesta.
- Tu solución debe ser _responsive_. Debe adaptarse a pantallas de escritorio,
  tabletas y teléfonos.
- Debes desplegar tu aplicación en cualquier servicio en la nube.
  Algunas opciones son [GitHub Pages](https://pages.github.com/)
  o [Vercel](https://vercel.com/)
  o [Netlify](https://www.netlify.com/)

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

---

#### [Historia de usuario 1] Búsqueda de Películas

Como usuaria, quiero poder buscar películas por título para encontrar información detallada sobre ellas.

##### Criterios de aceptación

- Debe existir un campo de búsqueda en la página principal.
- La usuaria puede ingresar el título de una película en el campo de búsqueda.
- Al presionar el botón de búsqueda o la tecla "Enter", se deben mostrar los resultados de la búsqueda.
- Los resultados deben incluir al menos el título de la película y una imagen de la portada.
- Recibir mensajes de error comprensibles,
dependiendo de cuál es el error con la
información ingresada.

##### Definición de Terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- El campo de búsqueda funciona correctamente y muestra resultados relevantes.
- Se han probado diferentes búsquedas para garantizar que los resultados sean precisos.
- Se ha probado en dos dispositivos (PC, movil) y es responsive.
- Haces _test_ unitarios.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Detalles de la Película

Como usuaria, quiero poder ver detalles completos de una película cuando hago clic en un resultado de búsqueda.

##### Criterios de aceptación

- En la lista de resultados de búsqueda, la usuaria puede hacer clic en un título o imagen de película para ver detalles adicionales.
- Los detalles deben incluir información adicional de la película.
- Debe haber un botón para volver a la lista de resultados de búsqueda desde la página de detalles.

##### Definición de Terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Los detalles de la película se muestran de manera clara y organizada.
- La información es precisa y se obtiene de la API de películas.
- La navegación entre la lista de resultados y los detalles funciona sin problemas.
- Haces _test_ unitarios.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Registro de Mis Búsquedas

Como usuaria, quiero tener la capacidad de ver un registro de mis búsquedas anteriores para tener un historial de las películas que he buscado.

##### Criterios de aceptación

- Las usuarias pueden acceder a un historial de sus búsquedas anteriores directamente desde la página principal de la aplicación.
- Las búsquedas anteriores se mostrarán en una lista con detalles básicos de las películas buscadas.
- Las usuarias pueden hacer clic en una búsqueda anterior para volver a ver los detalles de esa película.

##### Definición de Terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Las usuarias pueden ver su historial de búsquedas anteriores.
- Las búsquedas anteriores se muestran de manera clara y organizada.
- Las usuarias pueden hacer clic en una búsqueda anterior y ver los detalles de la película correspondiente.
- Haces _test_ unitarios.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

## 6. Consideraciones técnicas

- Para poder usar la API de _The Movie Database API V3_ o _OMDB_ deberás crear
  una llave (_key_) de acceso y agregarla a cada petición que hagas al servidor.
  - Para _The Movie Database API V3_ deberás crear una cuenta y luego una
    llave en este [link](https://www.themoviedb.org/settings/api).
  - Para _OMDB_ la llave la generas en este
  [link](http://www.omdbapi.com/apikey.aspx) llenando el formulario con la
  versión gratuita (_free_) seleccionada y luego revisando tu _email_ para
  activarla y poder usarla.
- Recuerda que GitHub Pages sirve sus páginas con un certificado
  [SSL](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte) por lo
  que las peticiones a las APIs deben incluir `https` en la URL.
- Recuerda que tienes un máximo de 1.000 peticiones diarias a la APIs por cada
  [IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP), creemos que es
  suficiente, pero te recomendamos hacer un uso responsable de este recurso
  gratuito.

## Contenido de referencia

- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Trata de divertirte. ¡a empezar esta aventura 🎬!
