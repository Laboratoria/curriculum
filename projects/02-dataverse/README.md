# Dataverse

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Hacker edition](#7-hacker-edition)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
las usuarias, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por las
usuarias, al lado derecho.

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que vas a generar con [prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/).
Esta página web se adecuará a lo que descubras que tu usuaria
necesita.

Además, en este proyecto utilizarás herramientas de
[inteligencia artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial)
como [ChatGPT](https://openai.com/chatgpt), [ExplainDev](https://explain.dev/),
entre otras para generar un set de datos en un archivo javascript.

El propósito de generar los datos en esta manera es brindarte la oportunidad de
adentrarte en el empleo de herramientas impulsadas por la inteligencia
artificial, así como en [técnicas de
prompting](https://learnprompting.org/es/docs/intro).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**. Con estadística
nos referimos a distintos cálculos que puedes hacer con los datos para mostrar
información aún más relevante a las usuarias (promedio, el valor máximo
o mínimo, etc).

## 3. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El rango de tiempo estimado para completar el proyecto es de 3 a 4 Sprints.
* El tiempo estimado que deberías dedicar a la [generación de los datos](#generar-los-datos)
  es de máximo un sprint. Además, al final del proyecto deberás presentar
  un [screenshot del prompt utilizado](#prompt-utilizado).
* Si ves que te va a tomar más tiempo,
  deberás utilizar los datos de ejemplo que los vas a encontrar en
  esta ruta: `./src/data/dataset.js`.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 4. Funcionalidades

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**.

Aquí definimos en más detalle las funcionalidades mínimas que debe tener:

* La aplicación debe permitir a la usuaria ver los items de la data en una visualización,
  que puede ser [tipo tarjetas](http://www.uxables.com/diseno-ux-ui/que-es-y-como-disenar-una-card/)
  o cualquier otra forma que tú decidas como la adecuada (pero desde aquí
  referimos a los items como "tarjetas"). **Cada una de las tarjetas debe estar
  contenida en un elemento `<li>` y estos a su vez contenido en
  un elemento `<ul>`.**

* El elemento `<ul>` deberá ser hijo de un elemento con atributo _id_
  de valor "root". **Este es un paso importante para que tu**
  **aplicación tenga la estructura requerida**

* Las tarjetas deben resaltar los valores de las propiedades de la data que
  le interesaría a la usuaria ver. Por ejemplo: nombre, fecha, imagen, etc.
  **Si vas a filtrar u ordenar por una propiedad, la tarjeta tiene que mostrar
  el valor de esta propiedad a la usuaria.**

* La interfaz debe estructurar semánticamente la data usando el estándar [microdatos](https://developer.mozilla.org/es/docs/Web/HTML/Microdata).
  Es obligatorio usar al menos los atributos [`itemscope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope),
  [`itemtype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype)
  y el atributo [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop).

  Por ejemplo, la siguiente data correspondiente a Ada Lovelace:

  ```json
    {
      "id": "ada-lovelace",
      "name": "Ada Lovelace",
      "shortDescription": "Pionera de la informática, fue la primera programadora.",
      "description": "Una visionaria del siglo XIX ...",
      "imageUrl": "URL_DE_LA_IMAGEN_GENERADA",
      "facts": {
        "yearOfBirth": 1843,
        "placeOfBirth": "London, England",
        "mainField": "Computer Science",
      }
    }
  ```

  puede ser estructurada semánticamente en HTML como:

  ```html
   <dl itemscope itemtype="WomenInTech">
    <img src="URL_DE_LA_IMAGEN_GENERADA" alt="Ada Lovelace" />
    <dt>Nombre:</dt><dd itemprop="name">Ada Lovelace</dd>
    <dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
    <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">1843</dd>
    <dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">London, England</dd>
    <dt>Campo de desempeño:</dt><dd itemprop="mainField">Computer Science</dd>
  </dl>
  ```

* La aplicación debe calcular y visualizar una estadística de la data. Puede
  ser una propiedad computada de cada item, como una propiedad adicional
  (por ejemplo, el índice de masa corporal de cada pokemon) o unas estadísticas
  de la data completa (por ejemplo, total de personas nacidas en los años 80s).

* La aplicación debe permitir a la usuaria filtrar la data. Deberás usar
  un elemento [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
  con [un atributo de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
  `data-testid="select-filter"`, y un atributo `name` con el nombre
  de la propiedad por la que filtrará (por ejemplo, si vas a filtrar por "type",
  el `<select>` tendrá  `name="type"`). Los `<option>` de este `<select>` deberán
  tener en el atributo `value` el valor del filtro (por ejemplo, si vas a filtrar
  por type "fire" sería `<option value="fire">Fire</option>`).

* La aplicación debe permitir a la usuaria ordenar la data.
  - Tendrá al menos un control `<select>` para ordenar.
  - Si usas solo un control `<select>`, debe tener
    [un atributo de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
    `data-testid="select-sort"` y un atributo `name` con el nombre de la
    propiedad por la que ordenará. (por ejemplo, si vas a ordenar por
    "num" seria `name="num"`). Este `<select>` tendrá dos [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
    con `value` `asc` y `desc`, para ordenar ascendente y descendente la data
    respectivamente (por ejemplo, `<option value="asc">A - Z</option>`).
  - Una alternativa es ofrecer la usuaria un ordenamiento mas complejo.
    Podrías implementar ordenar por varios propiedades. En este caso sería con
    un `<select>` con un atributo de datos `data-testid="select-sort"`, y que
    contiene hijos `<option>` con un `value` del nombre de la propiedad con
    cual vas a ordenar. (Por ejemplo, `<option value="name">Nombre</option>`).
    También, necesitarás otro control (`<radio>`,`<select>`, etc.) para decir
    que el ordenamiento es ascendente o descendente. Este control secundaria
    tendrá un atributo `name="sort-order"`, y tiene values `asc` y `desc`.

* Las funcionalidades de ordenar deben operar sobre la data filtrada.
  Por ejemplo, si filtro los pokemones de tipo fuego y luego los ordeno por
  nombre ascendente, la aplicación deberá mantener el filtro aplicado y
  ordenar los pokemones de tipo fuego.

* La aplicación debe permitir a la usuaria reiniciar la aplicación, limpiando
  filtros y ordenamiento, con un `<button>` con un atributo de datos
  `data-testid="button-clear"`.

* Las operaciones de filtrar, ordenar, limpiar, etc. no deben recargar
  la página, si no que deben agregar el contenido en una manera
  dinámica via javascript.

* La aplicación será _responsive_, es decir, debe visualizarse sin problemas
  desde distintos tamaños de pantallas: móviles, tablets y desktops.

Los siguientes wireframes, son ejemplos de una interfaz que puede cumplir con esta
funcionalidad. Como podrás ver, estos diseños cumplen con la metodología
[Mobile First](https://developer.mozilla.org/es/docs/Glossary/Mobile_First), la misma
que te recomendamos utilizar en todos tus proyectos:

Diseño Mobile:

* [Wireframe mobile 1](https://github.com/Laboratoria/curriculum/assets/123121338/54711bb7-cb05-448e-b677-3cbd9bf13c14)
* [Wireframe mobile 2](https://github.com/Laboratoria/curriculum/assets/123121338/bf96d3ce-150f-47a2-a605-2efac2e0497b)

Diseño Desktop:

* [Wireframe desktop 1](https://github-production-user-asset-6210df.s3.amazonaws.com/92090/261137084-1625aeb8-883c-4b79-86da-5fab34fa5b88.png)
* [Wireframe desktop 2](https://github-production-user-asset-6210df.s3.amazonaws.com/92090/261137087-6cef16bc-643a-4d6d-bc1c-e0daaeb21c88.png)

## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#7-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── dataset.js (La que hayas generado con la IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only

```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará a la usuaria. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_).

En este archivo encontrarás una serie de _imports_ listos para _cargar_
las diferentes fuentes de datos.

Por ejemplo, los datos con los que vas a trabajar,
los encontrarás en la siguiente línea:

```js
import data from './data/dataset.js';
```

### `src/dataFunctions.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo va a contener toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada, esta función debe usar el método reduce.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que la usuaria interactúe
(click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos con los que vas a trabajar (los datos de ejemplo
o los datos que generarías con ayuda de la inteligencia artificial).

### `test/dataFunctions.spec.js`

En este archivo tendrás hacer pruebas unitarias de las funciones
implementadas en el archivo `dataFunctions.js`. (`filterBy`, `sortBy`, etc.)

### `test/data.js`

En esta archivo puedes construir y exportar data "mock" para usar en los tests.
Es mas fácil probar un arreglo de 5 elementos de un arreglo de 24, por eso
vas a crear una muestra de la data que quieres probar. Como mínimo
debes exportar un variable se llama `data`, pero puedes definir y exportar mas
si sea necesario para tus tests.

### `src/view.js`

Para alcanzar una mejor separación de responsabilidades en el código, éste
archivo debe tener todas las funciones que se utilizarán para renderizar
los elementos dinámicamente.

Al menos se requiere una función obligatoria:

* `renderItems(data)`: esta función recibe el arreglo de data para renderizar
  los elementos de cada item, y debería volver un elemento DOM o
  un string de HTML.

Recuerda que todas las funciones que se encuentren en este archivo deberán ser	
exportadas para poder ser utilizadas en otros archivos.

Recomendamos esta estructura para no solo proporcionar un marco claro y
organizado para el proyecto, facilitando la navegación comprensión, y
escalabilidad del código, sino también para seguir un principio de diseño
[Separación de Responsabilidades](https://dev.to/tamerlang/separation-of-concerns-the-simple-way-4jp2)
en codigo, donde cada archivo y carpeta
tiene una responsabilidad específica. La responsabilidad de los funciones en
`view.js` es para crear partes del DOM con la data. 

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

## 6. Criterios de aceptación mínimos del proyecto

### Criterios de código

Con cada objetivo de aprendizaje, evaluamos que el código cumpla con algunos
criterios. Lo cual no excluye que puedas usar otras opciones, por ejemplo
en el caso de los selectores, proponemos el uso de `querySelector`,
no significa que no puedes usar `querySelectorAll` o `getElementById` también.

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de manera
individual con los siguientes comandos:

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas // Esto es para correr todos los tests de OAs
```

Nota: para el correcto funcionamiento de los tests, es necesario que tengas
instalado `Node.js (LTS)` con la versión 14.0.0 o superior. Para verificar
la versión de node ejecuta `node -v` en la terminal. Si el comando no te
devuelve ninguna versión, necesitas instalarlo, para esto, puedes descargarlo
desde su [sitio oficial](https://nodejs.org/).

#### HTML

* **Uso de HTML semántico**

  - [ ] Tiene un `<header>` con `<h1>`
  - [ ] Tiene un `<footer>`
  - [ ] Tiene un `<main>` con `<h2>`
  - [ ] Todas las etiquetas de controles (inputs, selects, radio, etc) tienen `<label>`
  - [ ] `<ul>` esta usado para dibujar la data
  - [ ] Los hijos de `<li>` usan attributos de [microdata](https://recursivos.com/html/microdatos/) `itemscope` e `itemprop`

Nota: ten en cuenta que para poder tener etiquetas `<ul>` y `<li>` en tu proyecto,
es necesario que ya tengas una data creada, ya que a partir de la data se
crearán las listas.

#### CSS

* **Uso de selectores de CSS**

  - [ ] Uso de selector class para los items `<li>`
  - [ ] Uso de flexbox en sentido `row` y `column`
  - [ ] Uso de flexbox para el elemento que contiene los items
  - [ ] Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    para buscar los elementos del DOM
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] `addEventListener` con callback que tiene parámetro de `event`,
    lo que permite el uso del objeto [`event`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
    con `event.target` o `event.currentTarget`
  - [ ] La aplicación registra [Event Listeners](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
    para escuchar `click`, `change`, `keyup` dependiendo del evento que
    se quiere escuchar

* **Manipulación dinámica del DOM**

  - [ ] La aplicación actualiza el atributo [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).
  - [ ] La aplicación usa `createElement` y `appendChild`, o template strings
    para crear elementos

#### JavaScript

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    y [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    en manera adecuada

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
    [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
      para evaluar condiciones

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    o método [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    para iterar

* **Funciones (params, args, return)**

  En el archivo `dataFunctions.js` define las siguientes funciones:
  - [ ] una función `sortBy` que tiene 3 parámetros (`data`, `sortBy`, `sortOrder`)
    y devuelve el arreglo ordenado
  - [ ] una función `filterBy` que tiene 3 parámetros (`data`, `filterBy`, `value`)
    y devuelve el arreglo filtrado
  - [ ] una función `computeStats` que tiene al menos un parámetro (`data`)
    y devuelve un valor computado

  Más sobre estos puntos en [la sección dataFunctions.js](#src/dataFunctions.js)

* **Arrays (arreglos)**

  - [ ] Uso de [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [ ] Uso de [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    o [Array.prototype.toSorted - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
  - [ ] Uso de [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [ ] Uso de [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [ ] Uso de [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [ ] Uso de [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

* **Objetos**

  - [ ] Uso de notación de punto para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  - [ ] Uso de notación de brackets para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usa [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    y [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    para importar y exportar valores desde un modulo JavaScript.

### Criterios del proyecto

#### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.

#### Historias de usuario

Una vez que entiendas las necesidades de tus usuarias, escribe las [Historias
de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuario para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuario antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios de Aceptación).

#### Generar los datos

La temática será a tu gusto, por ejemplo, pueden ser personajes importantes
en la historia, personajes inventados, países, películas... etc.

En el próximo proyecto, con la ayuda de la inteligencia artificial, deberás
hacer que la usuaria pueda chatear con la data generada.
Por ejemplo, si la data está mostrando un país, la usuaria podría
preguntarle en que año fue fundado o cuál es su capital, etc.
Tenlo en cuenta a la hora de generar tu dataset.

Esta data la vas a guardar en un archivo javascript. Este archivo,
debe exportar un arreglo con 24 objetos. Y la estructura de cada objeto
debe ser la siguiente:

* `id`: Identificador único (no pueden haber dos elementos con el mismo `id`).
  Debe ser un string de no más de 32 caracteres, en minúscula, compuesto solo
  por letras, números, underscore (`_`) o guión (`-`). Por ejemplo: `"ada-lovelace"`.
* `name`: El nombre del personaje, país, película, etc.
* `shortDescription`: Descripción corta del elemento. Esta descripción deberá
  tener como máximo 20 palabras.
* `description`: Descripción extendida del elemento. Esta descripción deberá
  tener entre 80 y 100 palabras. Al momento de mostrar este dato en pantalla
  puedes truncarlo para que no ocupe tanto espacio.
* `imageUrl`: URL de la imagen. Esta imagen será generada a través de alguna
  herramienta basada en inteligencia artificial. Una vez generada la imagen,
  y guardada en tu repo, deberás agregar la URL en este campo.
* `facts`: Un objeto con al menos **3** "hechos" o "info" sobre este elemento, en
  formato `"nombre": "valor"`, por ejemplo:

  ```json
  "facts": {
    "yearOfBirth": 1843,
    "placeOfBirth": "London, England",
    "mainField": "Computer Science",
  }
  ```

  Los _nombres de las propiedades_, deben estar en formato _camelCase_.
  Por ejemplo **ninguno** de los siguientes nombres sería válido:

  ```json
  "facts": {
    "year_of_birth": 1843,
    "Place of Birth": "London, England",
    "MainField": "Computer Science",
  }
  ```

  Los _valores de las propiedades_, sólo pueden ser de tipo `number`, `boolean`
  o un `string` de no más de 64 caracteres (este **no** tiene restricciones sobre
  el tipo de caracteres que puede contener).

  Y por último ten en cuenta 2 cosas:
  - Todos los elementos del dataset deben compartir las mismas propiedades en
    `facts`, es decir, que si un elemento tiene una propiedad `yearOfBirth`,
    el resto de elementos del array también deben tener esa propiedad.
  - No es necesario que los nombres de las propiedades estén en inglés,
    `"lugarDeNacimiento"` es un nombre igual de válido.

* `extraInfo`: Y por último un campo libre opcional, similar a `facts`. Si lo
  necesitas, aquí puedes poner cualquier otro tipo de información en formato
  donde puedes poner otra info que necesites en formato `"nombre": "valor"`,
  pero sin restricciones sobre el tipo de dato del valor. Por ejemplo:

  ```json
  "extraInfo": {
    "imagePrompt": "Un texto bien, bien largo...",
    "writings": [
      "Vol. 1",
      "Vol. 2",
      "Vol. 3",
      "Vol. 4"
    ]
  }
  ```

Un ejemplo de data, según los requisitos anteriores podría ser:

```js
export default [
  {
    "id": "ada-lovelace",
    "name": "Ada Lovelace",
    "shortDescription": "Pionera de la informática, fue la primera programadora.",
    "description": "Una visionaria del siglo XIX ...",
    "imageUrl": "URL_DE_LA_IMAGEN_GENERADA",
    "facts": {
      "yearOfBirth": 1843,
      "placeOfBirth": "London, England",
      "mainField": "Computer Science",
    }
  },
  //... 23 objetos más
]
```

La data generada deberás reemplazarla por el contenido de este archivo:
`./src/data/dataset.js`.

**El tiempo estimado que deberías dedicar a la generación de estos datos
es de máximo un sprint.** Si transcurrido un sprint, no tienes un
conjunto de datos generados, deberás
utilizar los datos de ejemplo ubicados en la ruta:
`./src/data/dataset.js`.

Las URLs de las imágenes dentro del archivo javascript, deben enlazar
a las imágenes para cada elemento del array.
Estas imágenes pueden ser generadas por la inteligencia artificial o imágenes
que puedas encontrar en la web.
Para la generación de imágenes te recomendamos usar el
[generador de imágenes de Bing](https://www.bing.com/create).
Una vez que tengas la imagen, descárgala u obtén su URL, para agregársela
al dataset.

Una vez que tengas el archivo javascript completo, recuerda correr los test con
`npm run test` para verificar que el archivo esté cumpliendo con lo
solicitado.

Una vez que hayas delimitado tu campo de interés y generado el archivo
javascript con la asistencia de la inteligencia artificial, dedica
tiempo a comprender a fondo a tu usuaria y sus
necesidades específicas. A partir de esta comprensión, podrás diseñar la
interfaz que facilite una interacción más efectiva y una comprensión más
completa de los datos presentados.

Nota: aunque observes que no estás empleando toda la información generada en
tu interfaz, es necesario generarla por completo. En el próximo proyecto 
utilizarás el dataset completa sobre todo al momento de permitir que la usuaria
pueda interactuar mediante el chat con la data generada.

#### Prompt utilizado

Dentro del readme que armarás, debe incluir una captura de pantalla
de tu prompt utilizado para generar los datos. Si utilizaste varios prompts,
puedes adjuntar todas las capturas que necesites.

#### Diseño de la Interfaz de Usuaria

##### Prototipo de alta fidelidad

Usando los wireframes o bocetos (_sketches_) de tu solución de interfaz
como base, lo siguiente es diseñar tu Interfaz de Usuaria (UI por sus
siglas en inglés - _User Interface_). Para eso debes aprender a
utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

#### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar.

Revisa [las funcionalidades](#3-funcionalidades) que el proyecto pide del interfaz.

#### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Este proyecto usa
el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias por lo
que te recomendamos consultar su documentación.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/dataFunctions.js` que contenga tus funciones y
está detallado en la sección de [Consideraciones técnicas](#src/data.js).

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* Visualizar la estadística calculada mediante un gráfico. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 8. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 9. Pistas, tips y lecturas complementarias

### Primeros pasos

Súmate al canal de Slack
[#project-dataverse](https://claseslaboratoria.slack.com/archives/C03MV35EP5M)
para conversar y pedir ayuda del proyecto.

Antes de empezar a escribir código, debes definir qué deberá hacer el
producto con base en el conocimiento que puedas obtener de tu usuaria.
Estas preguntas te pueden ayudar:

* ¿Quiénes son las principales usuarias del producto?
* ¿Cuáles son los objetivos de estas usuarias en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuaria de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Desarrollo Front-end

* [Tópicos en la currícula de Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Buscando elementos con querySelector*](https://es.javascript.info/searching-elements-dom)
* [Objeto del evento](https://es.javascript.info/introduction-browser-events#objeto-del-evento)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.toSorted en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Atributos de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [Datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Módulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Módulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diferencia entre array y objetos](https://youtu.be/mJJloQY7A8Y)
* [¿Cómo puedo recorrer un objeto?](https://youtube.com/01RHn23Bn_0)
* [`map`, `filter`, `sort` y `reduce` también son métodos para objetos](https://youtu.be/bUl1R2lQvKo)
* [Diferencia entre expression y statements](https://youtu.be/wlukoWco2zk)
* [Diferencia entre createElement e innerHTML](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/)
* [¿Qué es el Scope?](https://youtu.be/s-7C09ymzK8)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Para preguntas sobre Git recomendamos ver este playlist](https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)

## 10. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [ ] Está subido a GitHub y desplegado en GitHub Pages
* [ ] Captura de pantalla del prompt utilizado para generar los datos.
* Tiene un `README.md` con la siguente:
  - [ ] _Definición del producto_ clara e informativa
  - [ ] Historias de usuario
  - [ ] Un _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [ ] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ ] Muestra lista con datos y/o indicadores
  - [ ] Permite ordenar data por uno o más campos (asc y desc)
  - [ ] Permite filtrar data con base en una condición
  - [ ] Permite limpiar los filtros con un botón
  - [ ] Es _responsive_

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.
