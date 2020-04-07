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

La industria cinematográfica va a tener que adaptarse a muchos cambios en el corto
y mediano plazo. Empezando por la aparición de varios servicios de _streaming_ de
contenido como Netflix, HBO y Disney+ y agregándole la necesidad del público de pasar
más tiempo realizando [distanciamiento social](https://es.wikipedia.org/wiki/Distanciamiento_social).
Es un gran reto y oportunidad para proponer soluciones innovadoras que llamen la
atención de lxs usuarixs y ganen popularidad rápidamente.

![Pelis](https://i.giphy.com/media/3o6Ztl7RvfwCp9mqhW/source.gif)

## 2. Resumen del proyecto

La idea de este proyecto es que usando un API de películas disponibles puedas idear,
planear, organizar y desarrollar una aplicación web que aproveche estos datos y
tenga una propuesta de valor interesante para lxs usuarixs.

Algunas ideas se encuentran en el rango de desarrollar un buscador de películas
en general, un sistema de recomendación de películas basado en gustos personales,
un juego donde tienes que adivinar el título de una película por su portada o una
trivia sobre el año de aparición de los títulos de una franquicia, por poner ejemplos.

Aunque al final la decisión de qué hacer es tuya, hay algunas consideraciones
generales que se presentan a continuación pero cumpliendo esos requisitos ¡todo
lo demás viene de tu investigación e imaginación!

## 3. Consideraciones generales

- Este proyecto se debe resolver en equipos o duplas.
- Usa los datos de la API de [OMDB](http://www.omdbapi.com/) (The Open Movie
Database) con [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).
- La aplicación web debe mostrar alguna instancia de aleatoriedad, es decir se debe
presentar a lx usuarix algún elemento de forma aleatoria ya sea la recomendación
de alguna película o la aparición de preguntas de una trivia. Para esto generalmente
se usa el método `random` del objeto `Math` en JavaScript.
- Se te recomienda pensar en _test driven development_ al momento de programar la
solución. Tendrás que escribir las pruebas unitarias, aprovechen la oportunidad
de comenzar haciéndolo antes de escribir la funcionalidad.
- Este proyecto es agnóstico a la tecnología que uses, es decir puedes desarrollarlo
en Vanilla JavaScript o algún _framework_  o biblioteca (librería) de tu elección.

## 4. Objetivos de aprendizaje

1. Enfrentarte a un reto de corta duración en el que pongas en práctica todo lo
aprendido hasta ahora. Asume 2 semanas como una referencia inicial.
2. Obtener datos desde un servicio externo como OMDB usando _Fetch_.
3. Entender la idea de aleatoriedad aplicada a algoritmos.
4. Afianzar tus conocimientos de _Responsive Web Design_.

## 5. Criterios de aceptación mínimos del proyecto

- Utilizar la API de OMDB mediante _Fetch_ para obtener y mostrar una interfaz basada
en los datos de cada respuesta.
- Lo que sea que decidas hacer, deberás seleccionar aleatoriamente datos y mostrarlos
en alguna de las características de tu proyecto.
- Tu solución debe presentar la misma experiencia y adaptarse a cada pantalla que
lx usuarix pueda tener, tanto escritorio, tableta y/o celular.
- Debes desplegar tu aplicación usando [GitHub Pages](https://pages.github.com/).

## 6. Consideraciones técnicas

- Para poder usar la API de OMDB deberás crear una llave (_key_) de acceso y agregarla
a cada petición que hagas al servidor (revisar sección _Usage_ de su [sitio web](http://www.omdbapi.com/)),
la llave la generas en este [link](http://www.omdbapi.com/apikey.aspx) llenando
el formulario con la versión gratuita (_free_) seleccionada y luego revisando tu
email para activar a esta y así poder empezar a usarla.
- Recuerda que GitHub Pages sirve sus páginas con un certificado [SSL](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte)
por lo que las peticiones a la OMDB deben incluir `https` en el URL.
- Recuerda que tienes un máximo de 1000 peticiones por día por IP, no creemos que
te pases de ese número, pero también te recomendamos hace un uso responsable
de este recurso gratuito.

## Contenido de referencia

- [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Math.random](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random)

¡Trata de divertirte y a empezar esta aventura 🎬!
