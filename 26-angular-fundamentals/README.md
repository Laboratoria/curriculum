# Angular Fundamentals

Este curso presenta los fundamentos para comprender y utilizar
[Angular](https://angular.io) como plataforma de desarrollo web.

El curso se basa en una selección de los capítulos esenciales de la
[guía oficial de Angular](https://angular.io/docs), incluyendo el motor
de plantillas, formularios, enrutamiento, consumo de servicios de red,
pruebas, entre otros.

Angular es una plataforma que facilita la construcción de aplicaciones
web. Combina el uso de plantillas declarativas, inyección de dependencias,
herramientas end-to-end, entre otros. Es una tecnología elaborada y
respaldada por Google, y en [amplia demanda laboral](https://www.linkedin.com/jobs/search/?keywords=angular).

Asimismo, Angular es una plataforma en constante evolución, con versiones
mayores siendo liberadas [cada 6 meses](http://angularjs.blogspot.pe/2016/12/ok-let-me-explain-its-going-to-be.html).
Esta es la razón por la que el curso se guía de la documentación oficial
y no prepararemos un syllabus exhaustivo que puede quedar obsoleto en 
algunos meses :hushed:.

Previo a cada sesión presencial, se requerirá la lectura de este contenido
y, en algunos casos, la codificación de ejercicios.

Tags: `angular`, `typescript`, `web`

## Público objetivo

Desarrolladoras y desarrolladores web con conocimientos de Javascript
básicos o intermedios que deseen conocer un framework de aplicación inmediata
y con capacidades end-to-end.

## Requerimientos previos

* Programación orientada a objetos
* HTML, Javascript, CSS
* Inglés básico
* Git :octocat:

## Aprenderás

* Qué es Angular :ghost:
* Plantillas y data binding
* Formularios
* Inyección de dependencias
* Consumo de servicios de red
* Enrutamiento y navegación
* Cómo probar aplicaciones Angular
* Cómo desplegar aplicaciones Angular

## Metodología
Deberás cubrir todas las Lecturas obligatorias **antes de la clase**.
En algunos casos, esto incluirá publicar código fuente.

Durante las sesiones presenciales expandiremos el contenido de las
Lecturas obligatorias, absolveremos dudas y haremos ejemplos juntos.

Las lecturas, código fuente, mensajes de git, discusiones, entre otros
deberán ser escritas en inglés. :blush:

Cada sesión tendrá un ejercicio, que debe ser completado antes del final del curso.
**Para cada ejercicio**:
 - [x] Codificar
 - [x] Publicar el código fuente
 - [x] Desplegar la aplicación en Firebase Hosting

## Producto
Construiremos un juego multijugador basado en [Cadáver Exquisito](https://es.wikipedia.org/wiki/Cad%C3%A1ver_exquisito).
>  Es una técnica usada por los surrealistas en 1925, (...) en el cual los jugadores escriben por turno en una hoja de papel, la doblan para cubrir parte de la escritura, y después la pasan al siguiente jugador para otra colaboración.
>
>  Los teóricos y asiduos al juego (...) sostenían que la creación, en especial la poética, debe ser anónima y grupal, intuitiva, espontánea, lúdica y en lo posible automática.

El juego consiste en escribir un texto de manera colaborativa.
Cada jugador escribe un texto corto sin poder ver los textos de los demás jugadores.
Luego de que todos los jugadores han participado, se unen los textos uno tras otro y se lee el resultado completo.

El backend estará hospedado en [Firebase](https://firebase.google.com/).

## Syllabus

### Semana 01: Pantillas y Data binding

<table>
  <tr>
    <th rowspan="4">Lecturas Obligatorias</td>
    <td>Angular CLI</td>
    <td>https://github.com/angular/angular-cli/wiki</td>
  </tr>
  <tr>
    <td>Qué es un componente</td>
    <td>https://angular.io/api/core/Component#description</td>
  </tr>
  <tr>
    <td>Mostrar datos</td>
    <td>https://angular.io/guide/displaying-data</td>
  </tr>
  <tr>
    <td>Flexbox</td>
    <td>https://css-tricks.com/snippets/css/a-guide-to-flexbox/</td>
  </tr>
  <tr>
    <th rowspan="2">Lecturas Opcionales</td>
    <td>Qué es un módulo</td>
    <td>https://angular.io/guide/bootstrapping</td>
  </tr>
  <tr>
    <td>Desplegar Angular en Firebase</td>
    <td>https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase</td>
  </tr>
  <tr>
    <th rowspan="1">Antes de clase</td>
    <td colspan="2">Crear un proyecto utilizando Angular CLI y publicar el código fuente en Github.
        No es necesario modificar el código generado por el CLI (pero... por qué no? :eyes:)</td>
  </tr>
  <tr>
    <th rowspan="1">Avance de producto</td>
    <td colspan="2">
    Crear el componente que muestra un texto final. El texto debe ser mostrado en lírica; es decir, como un poema, donde la contribución de cada jugador representa un verso.<br/>
    El componente debe mostrar los datos desde un arreglo de cadenas de texto.
    </td>
  </tr>
</table>

### Semana 02: Formularios

<table>
  <tr>
    <th rowspan="2">Lecturas Obligatorias</td>
    <td>Formularios Reactivos</td>
    <td>https://angular.io/guide/reactive-forms</td>
  </tr>
  <tr>
    <td>Validación de formularios</td>
    <td>https://angular.io/guide/form-validation#reactive-form-validation</td>
  </tr>
  <tr>
    <th rowspan="1">Lecturas Opcionales</td>
    <td>Validadores personalizados</td>
    <td>https://angular.io/guide/form-validation#custom-validators</td>
  </tr>
  <tr>
    <th rowspan="1">Avance de producto</td>
    <td colspan="2">Crear el componente que permite el ingreso de un texto individual. El componente debe hacer uso de formularios reactivos, validar los datos de entrada y añadir los datos ingresados al arreglo local.</td>
  </tr>
</table>
      
### Semana 03: Consumo de servicios web

<table>
  <tr>
    <th rowspan="2">Lecturas Obligatorias</td>
    <td>HttpClient</td>
    <td>https://angular.io/guide/http</td>
  </tr>
  <tr>
    <td>AngularFire2</td>
  <td>https://github.com/angular/angularfire2</td>
  </tr>
  <tr>
    <th rowspan="1">Lecturas Opcionales</td>
    <td>Cross-Site Request Forgery</td>
    <td>https://en.wikipedia.org/wiki/Cross-site_request_forgery</td>
  </tr>
  <tr>
    <th rowspan="1">Avance de producto</td>
    <td colspan="2">
      Crear un servicio que envíe cada contribución al backend como texto corto y recibe el texto completo cuando el juego ha terminado.<br/>
      Cuando el juego termina, se debe mostrar el texto completo en el componente creado anteriormente.
    </td>
  </tr>
</table>

### Semana 04: Enrutamiento y navegación

<table>
  <tr>
    <th rowspan="1">Lecturas Obligatorias</td>
    <td>Enrutamiento y Navegación</td>
    <td>https://angular.io/guide/router</td>
  </tr>
  <tr>
    <th rowspan="1">Avance de producto</td>
    <td colspan="2">
    Crear un servicio que reciba desde el backend una lista con todos los juegos terminados.<br/>
    Crear un componente que muestre dicha lista al usuario.<br/>
    Crear dos rutas, una para la vista de resumen y otra para la vista de detalle, donde se muestra un único texto completo.
    </td>
  </tr>
</table>

## Evaluación

Para aprobar:
1. Codificar y publicar todos los ejercicios dejados durante el curso.
Los ejercicios son acumulativos. :dancer:
2. Todo el código debe contener Pruebas unitarias.
