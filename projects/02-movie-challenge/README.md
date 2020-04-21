# Movie Challenge

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Consideraciones generales](#3-consideraciones-generales)
- [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptacion-minimos-del-proyecto)
- [6. Consideraciones técnicas](#6-consideraciones-tecnicas)

---

## 1. Preámbulo

La manera en que vemos películas ha cambiado radicalmente durante los últimos años
debido, en parte, a la aparición de los servicios de  [_streaming_](https://es.wikipedia.org/wiki/Streaming)
que nos permiten hacerlo desde donde estemos y en cualquier momento. El mejor reflejo
de este fenómeno es el éxito de Netflix, HBO y Disney+, etc.

En tiempos en los que una de las principales herramientas para combatir [la pandemia
de Covid-19](https://es.wikipedia.org/wiki/COVID-19) es [evitar](https://es.wikipedia.org/wiki/Distanciamiento_social)
compartir espacios con muchas personas (como en el cine), ver películas por _streaming_
será una de las pocas maneras de hacerlo (¿o la única?).

Creemos que hay una gran oportunidad de proponer productos/experiencias innovadoras
de todo tipo utilizando datos de películas (directorxs, actorxs, sagas, secuelas,
fechas, etc.). Podríamos pensar en juegos, comunidades, catálogos, recomendaciones
basadas en gustos personales, etc. (sólo por mencionar algunas ideas obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumen del proyecto

La idea de este proyecto es que, usando una API con información de películas,
puedas idear, planear, organizar y desarrollar una aplicación web que aproveche
estos datos y tenga una propuesta de valor atractiva para lxs usuarixs.

Aunque la decisión de qué hacer es enteramente tuya, hay algunas consideraciones
generales que se presentan a continuación. Puedes cumplir esos requisitos en
proyectos muy diferentes, ¡depende de tu creatividad y del entendimiento que
tengas de tus potenciales usuarixs!

## 3. Consideraciones generales

- Este proyecto se debe resolver en equipos de 2 o más personas.
- Debes elegir y sustentar qué problema o necesidad estás resolviendo con el
producto que estás diseñando y desarrollando.
- Debes utilizar los datos de la API de [OMDB](http://www.omdbapi.com/) (The Open
Movie Database) con [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
o cualquier otra API que encuentres.
- Piensa en _test driven development_ al momento de programar la
solución. Tendrás que escribir las pruebas unitarias, aprovecha la oportunidad
de comenzar haciéndolo antes de escribir la funcionalidad.
- Este proyecto es "agnóstico" a la tecnología que uses, es decir puedes desarrollarlo
en Vanilla JavaScript o algún _framework_  o biblioteca (librería) de tu elección.
- Intenta pensar en un alcance que, considerando su complejidad y la cantidad de
personas en el equipo, permita terminar el proyecto en 2 semanas.

## 4. Objetivos de aprendizaje

- Diseñar y testear un producto antes de desarrollarlo.
- Poner en práctica todo lo aprendido hasta ahora.
- Obtener datos desde un servicio externo como OMDB usando _Fetch_.
- Entender la idea de aleatoriedad aplicada a algoritmos.

## 5. Criterios de aceptación mínimos del proyecto

- Utilizar la API de OMDB mediante _Fetch_ para obtener y mostrar una interfaz basada
en los datos de cada respuesta.
- Lo que sea que decidas hacer, deberás seleccionar aleatoriamente datos y mostrarlos
en alguna de las características de tu proyecto. Para esto generalmente
se usa el método `random` del objeto `Math` en JavaScript.
- Tu solución debe ser _responsive_. Debe adaptarse a pantallas de escritorio,
tabletas y teléfonos.
- Debes desplegar tu aplicación usando [GitHub Pages](https://pages.github.com/).

## 6. Consideraciones técnicas

- Para poder usar la API de OMDB deberás crear una llave (_key_) de acceso y agregarla
a cada petición que hagas al servidor (revisar sección _Usage_ de su [sitio web](http://www.omdbapi.com/)),
la llave la generas en este [link](http://www.omdbapi.com/apikey.aspx) llenando
el formulario con la versión gratuita (_free_) seleccionada y luego revisando tu
_email_ para activarla y poder usarla.
- Recuerda que GitHub Pages sirve sus páginas con un certificado [SSL](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte)
por lo que las peticiones a la OMDB deben incluir `https` en la URL.
- Recuerda que tienes un máximo de 1.000 peticiones diarias a la API de la OMDB
por cada [IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP), creemos que es suficiente
pero te recomendamos hacer un uso responsable de este recurso gratuito.

## Contenido de referencia

- [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Math.random](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random)

Trata de divertirte. ¡a empezar esta aventura 🎬!
