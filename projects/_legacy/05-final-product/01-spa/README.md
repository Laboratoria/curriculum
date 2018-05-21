# Single-page Application

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `25min`

***

## Objetivos

- Entender qué es un SPA y qué componentes lo hacen particular

## ¿Qué es un SPA?

> El término "single-page application" (o SPA) usualmente describe aplicaciones
> que fueron contruidas para la web. Estas aplicaciones son accedidas a través
> de un navegador web como otros websites, pero ofrece más interacciones 
> dinámicas como si fuese una aplicación móvil nativa o aplicaciones de escritorio.
> 
> La diferencia más notable entre un website y un SPA es la cantidad reducida de
> refrescar la página. Los SPAs tienen un mayor uso de AJAX - una manera de 
> comunicarnos con servidores back-end sin hacer un refrescado completo de la 
> página - para traer datos que use nuestra aplicación. Como resultado, el proceso
> de renderizar la página ocurre mayormente en el lado del cliente (navegador).

Este es un extracto traducido al español del blogpost sobre 
[Single-page Applications de CodeSchool](https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications).

## Componentes de un SPA

Los SPAs cuentan con algunos componentes que hacen que todo el desarrollo de los
mismos sea más rápido y a su vez particular. Estos son: routing, templates 
(plantillas en español), manejo de eventos y un patrón de arquitectura de 
software (comunmente MVC o derivados).

### Routing

La particularidad de los SPAs es que cada enlace que redirige a un sitio, es 
manejado por el navegador y no necesita refrescar la página entera.

#### Ejemplo

Si vamos a la documentación de una librería para manejo de rutas en JavaScript
como [Page.js](https://visionmedia.github.io/page.js/) podemos encontrar 
ejemplos como el siguiente. Presta especial atención a la URL que muestra en el 
navegador en cada interacción con los enlaces.

![Routing SPA](https://media.giphy.com/media/piK4xKsqCG7H8ESRyL/giphy.gif)

### Templates

Cuando vamos a crear un sitio complejo, es común encontrar cosas repetidas en la
estructura de nuestro sitio como el header, footer, listado de posts en un
blog u otra sección de nuestro sitio. Lo que sucede en estos casos es que 
nuestro HTML en particular comienza a redundar y ser muy repetitivo, los 
frameworks de SPA suelen usar un sistema de plantilla o templates. Para que te 
des una idea de que son estos sistemas, puedes revisar [Pug](https://pugjs.org/api/getting-started.html) o [Handlebars](http://handlebarsjs.com/).
Más adelante te darás que cada framework implementa su propio sistema de 
templating por lo general.

#### Ejemplo

En este ejemplo, cada item que se agrega está en una plantilla y si quisieramos
cambiar su estructura, solo sería necesario hacerlo en un lugar:

<iframe height='760' scrolling='no' title='JSD - jQuery - Handlebars-  To Do List - Solution' src='//codepen.io/jkeohan/embed/LkoXGo/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jkeohan/pen/LkoXGo/'>JSD - jQuery - Handlebars-  To Do List - Solution</a> by Joe (<a href='https://codepen.io/jkeohan'>@jkeohan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Manejo de eventos

Una de las particularidades de los frameworks de JavaScript que permiten crear 
SPAs es que no tienes que preocuparte por estar haciendo `.addEventListener` a
cada momento o cómo manipular el DOM, usualmente estos proveen una manera más
directa y abstracta de cómo hacerlo.

#### Ejemplo

El siguiente ejemplo está usando un framework llamado [Vue.js](https://vuejs.org/),
si analizas el HTML, la menera en cómo agrega el evento click es a través de un
atributo personalizado `@click` y la manera de mostrar todas las tareas es a 
través de `v-for`. ¿Qué otros atributos y/o particularidades encuentras?

<iframe height='760' scrolling='no' title='Vue Todo List' src='//codepen.io/cojdev/embed/pdKBWE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/cojdev/pen/pdKBWE/'>Vue Todo List</a> by Charles Ojukwu (<a href='https://codepen.io/cojdev'>@cojdev</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### MVC

> El MVC o Modelo-Vista-Controlador es un patrón de arquitectura de software que, 
> utilizando 3 componentes (Vistas, Models y Controladores) separa la lógica de la 
> aplicación de la lógica de la vista en una aplicación. Es una arquitectura 
> importante puesto que se utiliza tanto en componentes gráficos básicos hasta 
> sistemas empresariales; la mayoría de los frameworks modernos utilizan MVC (o 
> alguna adaptación del MVC) para la arquitectura, entre ellos podemos mencionar 
> a Ruby on Rails, Django, AngularJS y muchos otros más. En este pequeño artículo 
> intentamos introducirte a los conceptos del MVC.

Este es un extracto de un blogpost sobre [MVC de Código Facilito](https://codigofacilito.com/articulos/mvc-model-view-controller-explicado).

Si bien aquí abordamos el patrón MVC, en el desarrollo web, debido a la cantidad
inmensa de herramientas que tenemos a disposición, existen muchos derivados de 
este patrón como MVVM, MVT, MVP, entre otros. Por ello se ha adoptado las siglas
MV* ó MVW (Model-View-Whatever), para referirse a estos patrones.

#### Ejemplo

En este ejemplo, podemos ver como nuestros datos (arreglo de objetos) está 
representado por el modelo, las vistas hacen referencia al HTML, mientras que
la respuesta a la interacción del usuario es manejada por el controlador.

<iframe height='760' scrolling='no' title='Cat Clicker: MVC JS Pattern' src='//codepen.io/veer_cg/embed/VLoOrY/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/veer_cg/pen/VLoOrY/'>Cat Clicker: MVC JS Pattern</a> by Veer Chandra (<a href='https://codepen.io/veer_cg'>@veer_cg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Recursos

Aquí te dejamos un video que explica la gran diferencia que tienen los SPAs de
un website común.

<iframe src="https://player.vimeo.com/video/76871491?color=00adef" width="760" height="570">
</iframe>  

Si te gustaría tener un poco más de detalle sobre los componentes de un SPA, y 
particularmente de los frameworks de JS que permiten realizar esto, aquí te 
dejamos un video (en inglés) de nuestros amigos de Udacity.

[![Core Framework Components](https://img.youtube.com/vi/ZxnZj7UTw1c/0.jpg)](https://youtu.be/ZxnZj7UTw1c)

Por último, por si quieres revisar qué frameworks existen o comenzar a comparar
algunos de estos, te comentamos que existe un sitio llamado [TodoMVC](http://todomvc.com/) 
que tiene una aplicación (un To Do List) construida con diversas librerías y 
frameworks para que analices su código fuente y vayas viendo cuál te llama más 
la atención.
