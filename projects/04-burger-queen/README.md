# Burger Queen

## Preámbulo

Somos **Burguer Queen**, una cadena de comida rápida 24hrs.

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
clientes.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

## Introducción

[ tbd - intro a sistemas de pedidos en restautantes? ]

## Requisitos del negocio

Tenemos 2 menús: uno para el desayuno, que es bien sencillo:

| Item                      |Precio|
|---------------------------|------|
| Cafe americano            |    5 |
| Cafe con leche            |    7 |
| Sandwich de jamón y queso |   10 |
| Jugo natural              |    7 |

Y un menú para el resto del dia:

<table width="100%">
  <tbody>
    <tr>
      <td colspan="2" rowspan="1">Hamburguesas</td>
      <td>Acompañamientos (S/.5)</td>
      <td colspan="3" rowspan="1">Bebidas</td>
    </tr>
    <tr>
      <td>Simple</td>
      <td>10</td>
      <td>Papas fritas</td>
      <td></td>
      <td>500ml</td>
      <td>750ml</td>
    </tr>
    <tr>
      <td>Doble</td>
      <td>15</td>
      <td>Onion Rings</td>
      <td>Agua</td>
      <td>5</td>
      <td>8</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Gaseosa</td>
      <td>7</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
**Y por S/. 1 pueden agregarle queso o huevo.**

Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
pedido varias veces antes de finalizarlo.

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_aplicación web_ **offline first**, usando una arquitectura _serverless_ (algo
como [Firebase](https://firebase.google.com/)) y con una interfaz que debe
correr en dispositivos móviles (celulares y tablets).

Tópicos: _offline-first_, _web-storage_, _service-worker_, _serverless_, _cloud
functions_, _frameworks_, _react_, _redux_, _angular_, _vue_.

## Consideraciones generales

Este proyecto se debe "resolver" en tríos.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada con
[Babel](https://babeljs.io/) o [webpack](https://webpack.js.org/).
En este proyecto SI está permitido usar librerías o frameworks
([React](https://reactjs.org/), [Vue](https://vuejs.org/),
[Angular](https://angular.io/)) y recomendamos usar alguna librería de manejo de
estado, como [Redux](https://redux.js.org/).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_. En este proyecto, no contamos con un _boilerplate_, por lo
cual, deberás de definir la estructura de carpetas y archivos que consideres
necesaria, puedes guiarte de las trabajadas en los proyectos anteriores. Por
ende, los tests y el setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos cómo pensaste y te acercaste a los usuarios al
desarrollar tu producto y cuál fue tu proceso para definir el producto final a
nivel de experiencia y de interfaz. Si tienes fotos de entrevistas,
cuestionarios y/o sketches compártelos. La especificación de ésta la encontrarás
en el apartado de entregables.

### UI

#### Autenticación

* Inicio de sesión
* Restaurar contraseña

#### Tomar pedidos

* Seleccionar mesa
* Agregar ítem al pedido (ver [requisitos del negocio](#requisitos-del-negocio))
* Modificar pedido
* Enviar a cocina (esto debe salvar el pedido)

#### Ver pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo

#### Administración

Esto sólo lo deben poder hacer los _admins_.

* Crear/editar/borrar usuarios
* Crear/editar/borrar mesas
* Ver historial de pedidos
* Ver estadísticas de pedidos

## Implementación

* La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
  `test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
  empaquetar y desplegar la aplicación respectivamente.
* Diseño *responsive* y *mobile*. El cliente va a usar el sistema en un
  **navegador**, pero en **tablets**.
* Despeglado en una URL accesible universalmente.

### UX

[ tbd ]

### Habilidades Blandas

[ tbd ]

## Hacker edition

Una vez que tengamos el sistema básico implementado, nos gustaría explorar
nuevas posibilidades, y estamos abiertos a cualquier sugerencia que tengan.
Algunas de las ideas que nos ha sugerido nuestros clientes son: agregar combos
al menú, cupones de descuento, descuento por pago con efectivo, programa de
fidelidad, etc.

## Entregables

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 3
| Nomenclatura/semántica | 3
| Funciones/modularidad | 3
| Estructuras de datos | 3
| Tests | 3
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 3
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

[ tbd ]

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 0
| Entrevistas | 0
| Testing | 0
| User Flow | 0
| Jerarquía | 0
| Alineación | 0
| Contraste | 0
| Color | 0
| Tipografía | 0

### Habilidades Blandas

[tbd]

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 0
| Autoaprendizaje | 0
| Solución de Problemas | 0
| Dar y recibir feedback | 0
| Adaptabilidad | 0
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 0
| Comunicación eficaz | 0
| Presentaciones | 0

## Pistas / Tips

### Offline first

* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

### Cloud functions

* [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

## Checklist

[ tbd ]
