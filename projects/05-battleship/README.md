# Battleship

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos generales](#3-objetivos-generales)
* [4. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [5. Consideraciones generales](#4-consideraciones-generales)
* [6. Pistas, tips y lecturas complementarias](#5-pistas-tips-y-lecturas-complementarias)
* [7. Hacker edition](#6-hacker-edition)

## 1. Preámbulo

Los videojuegos son una verdadera prueba cuando se trata de tecnología. Uno de
los factores de éxito para el equipo de android, por ejemplo, fue que pudiesen
tener un juego corriendo en los primeros teléfonos. La idea era que si un juego
podía ejecutarse en la plataforma, un programa más simple con pantallas mucho
más fáciles de trabajar que solo tuviese botones y texto debería funcionar aun
mejor.

Entonces la idea de este proyecto es llevar los frameworks de aplicaciones web
al límite de lo que pueden ofrecer, tratar de explorar sus funcionalidades más
avanzadas y lograr un producto que se luzca con tu talento y creatividad
dominando el framework que elijas.

![battleship](https://user-images.githubusercontent.com/7809496/66517403-78ea9680-eab9-11e9-8ab4-8d3c2cc21646.png)

## 2. Resumen del proyecto

Battleship es un juego clásico, con múltiples versiones en juegos de mesa y en
linea (si no lo conoces, puedes verlo en este link :
[battle-ship](https://es.wikipedia.org/wiki/Batalla_naval_(juego))).

El juego es para dos personas. Consiste en que en un tablero cada jugador coloca
un conjunto de barcos, ocultando su posición del contrincante. Luego, por
turnos, van anunciando una posición del tablero y el enemigo informa si le han
dado a uno de sus barcos o no. El juego termina cuando un jugador ha conseguido
hundir todos los barcos del otro.

En este proyecto deberás crear una nueva versión, agregándole algún giro para
actualizarlo y hacerlo más atractivo para las nuevas generaciones. También, no
estás atada a hacer este juego sobre barcos, puedes hacerlo con el tema que más
te guste, siempre y cuando el modo de juego sea parecido.

También el juego debe ser para dos jugadores, para lograrlo debes pensar en cómo
puedes estructurar la información, estado de la aplicación y cómo guardarlos en
alguna base de datos como __Firebase__ o __MongoDB Stitch__.

## 3. Objetivos generales

1. El objetivo principal de hacer este juego es que puedas diseñar un esquema de
datos y lo apliques a una base de datos conocida, como _Firebase_ o _MongoDB_.
Muchas veces el como modeles la información es más importante a como estructures
tu código, ya que los problemas que puedan aparecer en el futuro tendrán su
origen acá.

2. No menos importante, tendrás que diseñar y mantener el estado dentro de la
aplicación, esto es la información que usas y guardas temporalmente por cada
ejecución. Para esto unas herramientas para _React_ que te pueden servir son
__Redux__ o también __Context API__ así como también los estados internos de
cada componente. Por el lado de _Angular_ tendrás a los __observables__
y su uso conjunto con los __servicios__ y por supuesto las propiedades que uses
en cada componente.

3. Y finalmente tendrás que diseñar una interfaz llamativa, usando y abusando de
todo lo que sabes de CSS y animaciones para que tengas un juego vistoso y que
guste a la gente. Tienes que invitar a jugar tu juego.


## 4. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 5. Consideraciones generales

Este proyecto se debe resolver en equipos de 3 personas.

La planificación es clave, por lo que debes coordinarte con tu equipo e
identificar las historias de usuario, priorizarlas y trabajarlas sprint a sprint
cuidando de que hayan test para el código, se haya hecho test con usuarios sobre
la usabilidad y cumpliendo con las ceremonias de SCRUM que has aprendido a lo
largo del bootcamp.

También para este proyecto, usa cualquier framework (_React_, _Angular_, etc...)
cuidando de que se vea bien en las pantallas de celular o computador, que los
jugadores puedan elegir la plataforma libremente sin prejuicio de la
jugabilidad. Para esto considera un tamaño variable de pantalla y que los
elementos del juego se redimensionen dependiendo de ella.

Para la base de datos, trata de modelar bien cómo guardarás los datos y piensa
bien el cómo soportar varios usuarios a la vez en diferentes salas de juego.
Recuerda que "battleship" se juega de a dos. Usa tu creatividad para asignar
contrincantes a cada jugador.

### Definición de terminado para cada historia de usuario

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

## 6. Pistas, tips y lecturas complementarias

1. Modelar los datos, es un paso muy importante, considera que el juego es de
dos personas, pero más de una pareja puede estar jugando a la vez (modelo de
salón de juego).

2. Haz un _fork_ de este repositorio (en GitHub). Luego que tus compañeras de
proyecto hagan a su vez _fork_ de __tu__ repositorio. Recuerda, como en
proyectos anteriores, que una de ustedes debe ser la integradora o _maestra_ del
repositorio principal.

3. Para facilidad piensa en una cuadrícula y que cada _barco_ solo ocupa una de
ellas. Si quieres escalar en dificultad para este proyecto, puedes intentar con
barcos de formas y tamaños diferentes.

4. Ten el concepto de turno y guarda de quién es el turno cada vez en la base de
datos. También define la condición de término en una forma que tu código lo
pueda detectar, como por ejemplo : todos los barcos se han hundido.

5. Llevar el estado del juego es primordial, define bien las acciones,
reducidores y datos que estarán en cada juego, turno y movida de los jugadores.
Puedes hacer un diagrama de estados para esto :
[diagrama-estados](https://www.lucidchart.com/pages/es/diagrama-de-maquina-de-estados)

### Otros recursos

#### Bibliotecas y componentes

* [redux](https://es.redux.js.org/)
* [animaciones-react](https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)
* [animaciones-angular](https://blog.angularindepth.com/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
* [servicios-angular](https://angular.io/tutorial/toh-pt4)
* [contexto-react](https://es.reactjs.org/docs/context.html)
* [hooks-react](https://es.reactjs.org/docs/hooks-intro.html)
* [Más animaciones para frameworks](https://popmotion.io/pose/)

#### Conceptos

* [observables](https://angular.io/guide/observables)
* [visualizador-observables](https://rxviz.com/)
* [visualizador-observables-2](https://rxmarbles.com/)

## 7. Hacker edition

Hasta el momento has usado javascript, html, css, react, angular, y otras
herramientas para hacer tus aplicaciones, pero ¿qué tal si te aventuras con tu
grupo a hacer este proyecto usando algún framework orientado a videojuegos?. Te
invitamos a aceptar el desafío e intentar hacer el juego usando algún
__game engine__ como los que están a continuación o el que tu encuentres en la
internet:

* [GDevelop](https://gdevelop-app.com/)
* [Moddio](https://www.modd.io/)
* [Construct](https://www.scirra.com)
* [Babylon](https://www.babylonjs.com/)
* [Impact](https://github.com/phoboslab/impact)
* [Phaser](https://phaser.io)
