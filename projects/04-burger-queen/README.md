# Burger Queen

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos (S/.5)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>10</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>15</td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>5</td>
>       <td>8</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>Gaseosa</td>
>       <td>7</td>
>       <td>10</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por S/. 1 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React, Vue o Angular). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**. Para guiarte con respecto a este tema te recomendamos usar
[Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es), que es
una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan
buenas prácticas. De hecho, usaremos Lighthouse a la hora de evaluar el
proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _angular_, _vue_, _pwa_, _offline-first_, _service-worker_.

## Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto SI está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/), [Vue](https://vuejs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting, firestore y
functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md

```

Por otro lado, la parte de la interfaz no está incluida, por lo cual, deberás de
definir la estructura de carpetas y archivos que consideres necesaria, puedes
guiarte de las convenciones del framework elegido. Por ende, los tests y el
setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos qué decisiones de diseño tomaste, incluye bocetos
tipo _story board_, info de despliegue e instrucciones para developers
(dependencias, instalación, tests, ...).

### UI

#### Hito 1: Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo
* Ver historial de pedidos

#### Hito 3: Autenticación

* Inicio de sesión
* Restaurar contraseña

### UX

* Debe **verse bien y funcionar bien en tablets**.
* **No queremos una app nativa**, sino una web app que se pueda _agregar a la
  pantalla de inicio_ como PWA.
* Queremos botones grandes para fácil uso en pantallas táctiles (touch screens).
* Queremos el estado actual del pedido siempre visible mientras tomamos un
  pedido.
* Queremos que sea accesible y que funcione bien en tablets iOS y Android.

## Hacker edition

Una vez que tengamos el sistema básico implementado, nos gustaría explorar
nuevas posibilidades, y estamos abiertos a cualquier sugerencia que tengan.
Algunas de las ideas que nos ha sugerido nuestros clientes son:

* agregar combos al menú
* cupones de descuento
* programa de fidelidad, etc.
* agregar _mesas_, de forma que los pedidos se puedan tomar en mesa en vez de
  dando el nombre del cliente al cajero.
* crear/editar/borrar usuarios
* ver estadísticas de pedidos

## Entregables

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 4
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

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Entrevistas | n/a |
| Testing | 3
| User Flow | 3
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 4 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 4
| Autoaprendizaje | 4
| Solución de Problemas | 4
| Dar y recibir feedback | 4
| Adaptabilidad | 4
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | n/a
| Comunicación eficaz | 4
| Presentaciones | 4

## Primeros pasos

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

3. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

4. Crear proyecto en [Firebase](https://firebase.google.com/)

5. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

6. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

7. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

8. Instalar dependencias de cloud functions:

   ```sh
   # usando yarn
   cd functions && yarn && cd ..
   # alternativamente, usando npm
   cd functions && npm install && cd ..
   ```

9. Desplegar:

   ```sh
   firebase deploy
   ```

10. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

***

Nota para estudiantes que elijan React y quieran usar `create-react-app`:

Si tratas de usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

***

## Pistas / Tips

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
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

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Lighthouse

* [ ] 80% o más en sección _Performance_.
* [ ] 80% o más en sección _Progressive Web App_.
* [ ] 80% o más en sección _Accessibility_.
* [ ] 80% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UI

#### Hito 1: Tomar pedidos

* [ ] Ingresar nombre del cliente.
* [ ] Filtrar _menú_ por _desayuno_ y _resto del día_.
* [ ] Agregar ítem al pedido.
* [ ] Eliminar ítem del pedido.
* [ ] Mostrar _resumen_ de pedido con todos los items y el total.
* [ ] Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* [ ] Vista de pedidos pendientes.
* [ ] Marcar pedido como listo.
* [ ] Ver historial de pedidos.

#### Hito 3: Autenticación

* [ ] Inicio de sesión.
* [ ] Restaurar contraseña.

### UX

* [ ] Se _ve_ bien y _funciona_ bien en tablets.
* [ ] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest,
  íconos, ...) en iOS y Android.
* [ ] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.
