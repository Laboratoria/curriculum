# Cómo codificar un router

## Índice

- [Qué es un Single Page Application (SPA)](#qué-es-un-single-page-application-spa)
- [Qué es un router](#qué-es-un-router)
- [Sobre window.location](#sobre-windowlocation)
- [Presentamos la History API](#presentamos-la-history-api)
- [Funcionalidades del router](#funcionalidades-del-router)
- [API de router básico](#api-de-router-básico)
- [Codificación de un SPA y un router](#codificación-de-un-spa-y-un-router)

Antes de comenzar a codificar un router, debemos cubrir un par de conceptos,
como la razón por la que existen los routers: la aplicación de página única
(Single Page Application - SPA).

## Qué es un Single Page Application (SPA)

Una aplicación de página única, en inglés Single Page Application o SPA,
es una aplicación web que utiliza un único archivo HTML
(probablemente `index.html`) y actualiza dinámicamente el contenido de ese
`index.html` a medida que el usuario interactúa con la aplicación.

En lugar de cargar páginas HTML separadas para cada navegación,
los SPA utilizan JavaScript para buscar y representar datos en la misma página
HTML, dando la ilusión de que estamos navegando para separar páginas HTML,
cuando en realidad es la misma página con contenido diferente renderizado
(dibujado).

## Qué es un router

En el contexto de los SPA, un router es un módulo de JavaScript que
gestiona la navegación dentro la aplicación.
Un router ayuda a crear una sensación de múltiples páginas o "vistas"
dentro de un SPA al manejar interacciones del usuario que provocan
cambios en la URL y la presentación del contenido apropiado.

Por ejemplo, si está en la página de inicio de un SPA `www.website.com` y
luego hace clic en un link del `<nav>` que te lleva a `www.website.com/about`,
el router se encarga de responder cambiando la URL, encontrar el contenido
apropiado para "about" y reemplazar el HTML en `index.html`
con el nuevo contenido. No existe un archivo `about.html` tal cual
pero con el router y view parece que estamos navegando a una pagina nueva.

### Entonces, qué son "routes" y "views"

En su forma más simple, las rutas (routes) generalmente se definen como pares
`key-value`,
donde `key` es la ruta o pathname de URL y el `value` es
una función asociada que representará la vista (view).

```js
const routes = {
  "/": Home,
  "/about": About
}
```

Las rutas se pueden definir de formas más complejas pero la idea base es
la misma, un determinado ruta se relaciona con una determinada función de
vista.

En este ejemplo, `Home` y `About` son funciones que, cuando se invocan,
construirán el html para la página y devolverá un elemento DOM que el
router agregará al `index.html`.

```js
const Home = () => {
   const el = document.createElement("h1");
   el.innerHTML("I'm the Home Page");
  return el;
}
```

Entonces, si cargamos la página web y el nombre de la ruta es `/`,
el router lo sabrá por `routes["/"]` deberíamos invocar la función `Home`
y veremos "I'm the Home Page".

O si cargamos la página web en `/about`, el router
sepa por `routes["/about"]` cómo llamar a la función `About`.
Hay algunos pasos intermedios, pero esa es más o menos la idea.

## Sobre window.location

Ya que mencionamos `pathname`, revisemos brevemente `window.location`.
Con el objeto `window.location`, podemos acceder a partes de la URL
actual mediante programación.

Ubicación de ventana de ejemplo:

- `href`: `https://example.org:8080/foo/bar?q=baz#bang`
- `origin`: `https://example.org:8080`
- `port`: `8080`
- `pathname`: `/foo/bar`
- `search`: `?q=baz`
- `hash`: `#bang`

[Ver interactivamente partes de la URL](https://developer.mozilla.org/en-US/play)

Si no está familiarizado con `window.location` y sus propiedades
`origin`, `pathname`, `search`, ahora sería un buen momento para leer
[los documentos de `location`.](https://developer.mozilla.org/es/docs/Web/API/Location)

## Presentamos la History API

A medida que navega por páginas web y carga una página tras otra, agrega
contenido al historial de su navegador. Los botones de flecha hacia adelante
y atrás en cada navegador le permiten avanzar y retroceder en su historial.

Con la History API podemos acceder y manipular el historial del navegador
sin activar recargas de página completa. Un router en una SPA funciona
junto con la History API para lograr esto. Carga de vista
mientras se agrega al historial del navegador, preservando
así la forma en que un usuario puede moverse atrás y adelante
usando los botones en su navegador.

Si no fuera así, un SPA aún podría mostrar nuevas vistas
en el mismo html, pero la URL probablemente no se actualizará
y el historial nunca se agregará, por lo que presionar "back"
al navegador saldría del sitio web por completo.

Los actores clave relacionados con la History API que
utiliza un router son:

- [El método `pushState`](https://developer.mozilla.org/es/docs/Web/API/History/pushState)
  nos permite agregar un nuevo estado a la cola del historial de la ventana
- [El evento `popstate`](https://developer.mozilla.org/es/docs/Web/API/Window/popstate_event)
  es un evento que la ventana se activa cuando cambia el historial.
  Por ejemplo, cuando alguien presiona hacia atrás en el navegador.

Otros métodos de interés son `replaceState`, `go`, `forward`, `back`.
Consulte [los documentos completos de History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
y [Trabajando con la History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)

Otro evento de interés es `hashchange`, que no vamos a usar en nuestra router
pero vale la pena saber. Consulte [los documentos de `hashchange`](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)
para mas información.

## Funcionalidades del router

Un router básico debería:

- Almacenar las rutas de la aplicación
- Para un nombre de ruta determinado en la URL, muestre la vista
  adecuada (y pasar los argumentos apropiados a la vista si hay
  search parámetros)
- Responder a la navegación dentro de la aplicación
  (enlaces, clics en botones, etc.)
  + agregando un nuevo estado al historial del navegador para actualizar la URL
  + luego renderiza la vista apropiada según la ruta
    (y pasar el argumentos apropiados si hay parámetros)
- Responder a la navegación con los botones de avance y retroceso en el
  navegador
  + analizando la nueva URL para la ruta y los parámetros
  + luego renderiza la vista apropiada según la ruta
    (y pasar los argumentos apropiados si hay parámetros)
- Cargando una página de error cuando la ruta no está definido en las rutas

No hay ningún error, mencionamos "renderizar la vista apropiada según la ruta"
tres veces, entonces esto significa que escribiremos una función para esto
para poder usarla varias veces.

Ahora profundizaremos explicando cómo lograr estas funcionalidades en código
en `router.js`.

### 1. Almacenar las rutas de la aplicación

El router necesita conocer las rutas de la aplicación para determinar qué vista
representar para una ruta.
Las rutas deben definirse en un módulo fuera del
router pero luego pasarse al router para almacenarlas.
El router debe tener su propia variable "privada" para almacenar las rutas
y una función que pueda llamarse desde otro módulo para asignar las rutas.

En código, eso significa que el router debe tener:

- `ROUTES` - objeto `{}`: Esta variable almacena información sobre
  las rutas en tu SPA.
- `setRoutes(routes)`: Esta función asigna el valor del parámetro
  `routes` al objeto `ROUTES`.

### 2. Para una ruta determinada en la URL, genere la vista adecuada

El router debe tener una función que, cuando se le da un `pathname`,
muestre la vista. Entonces, ¿qué significa "muestra la vista"?

Si piensas en pseudocódigo, debemos borrar el html de la página actual,
llame a la nueva función de vista correcta para renderizarla,
y luego coloque el nuevo html en la página.

```js
const renderView = (pathname, props) => {
  // clear the current html
  // find the correct view to render
  // call the view function (with the props) and get the new html element
  // put new html in the page
}
```

Para poder "borrar" el html, el router también necesita conocer
el elemento de su app que es la raíz o padre de todos los elementos.
A esto lo llamaremos elemento `root`.

El router debe tener su propia variable para almacenar el elemento `root`
y una función que pueda llamarse desde otro módulo para asignar el elemento.

Para lograr esta funcionalidad en el código, `router.js` debe tener:

- `rootEl` - Elemento DOM: Una variable para almacenar el elemento raíz donde
  el contenido cambiará/aparecerá.
- `setRootEl(el)`: Una función para establecer el elemento raíz del router.
- `renderView(pathname, props)`: Una función que renderiza una vista en el
  elemento `root` especificado. Tiene dos parametros, `pathname` que es el
  parte de `window.location` y `props` que es un objeto de datos que podemos
  pasar a la vista. La función `renderView` borra el contenido existente,
  encuentra la función de view para el `pathname` dado y
  llama a esa función de vista pasando `props` como argumento
  ([más sobre eso en un momento](####pasar_argumentos_a_las_vistas)).
  Luego agrega el elemento devuelto por la función de vista al elemento `root`.

### 3. Responder a la navegación dentro de la aplicación

Cuando un usuario hace clic en un enlace o botón, etc. en su aplicación
para navegar a otra página dentro de su aplicación, el router debe intervenir
para simular la carga de una nueva página.

Para eso, el router necesita:

- agregar un nuevo estado al historial del navegador para actualizar la URL
- renderizar la vista apropiada según el `pathname` (y pasar los argumentos
  apropiados a la función vista si hay)

El router utiliza la API History para actualizar la URL e insertar un nuevo
estado en la pila del historial del navegador. Esto se hace usando
`window.history.pushState`.

Recuerde, es importante impulsar un nuevo estado y no solo renderizar la vista,
ya que queremos soportar el avance y retroceso en el navegador y tener nuestro
SPA se comporta como cualquier otra página web.

Entonces, para lograr esto en el código, `router.js` debe tener una función
para navegar mediante programación a una nueva ruta dentro de SPA.

`navigateTo(pathname, props)`: una función que recibe una ruta, envía un nuevo
estado histórico y representa la nueva vista.

Un ejemplo con algún pseudocódigo:

```js
export const navigateTo = (pathname, props) => {
  // push new history state with window.history.pushState
  // render view passing it props
}
```

Nota: ya hablamos de una función `renderView`, podemos usarla dentro de
`navigateTo` para mantener el código DRY (Don't Repeat Yourself, No te repitas)

Esta función se puede importar a cualquier vista que tenga enlaces,
botones o necesite cargar una nueva vista y llamado en un detector de eventos.

```js
linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
```

#### Pasar argumentos a las vistas

Hablemos de esto - "y pasemos los argumentos apropiados a las vistas si hay" -
y por qué podría ser útil.

Hay ocasiones en las que queremos pasar datos a una vista, para que la misma
vista pueda renderizarse con información más específica dependiendo de qué
datos pasemos.

Por ejemplo, es posible que tengas una ruta para mostrar una vista de
información de la usuaria.

```js
  const routes = { "/profile": Profile }
```

Para cualquiera usuaria, queremos mostrar la misma página en general,
pero también con información específica, como el nombre de la usuaria en
particular.

En lugar de tener una ruta separada definida para cada posible
usuaria (tedioso y tal vez imposible) tenemos una ruta `/profile` que llama una
función de vista `Profile`, pero la función tiene parámetros para mostrar
algo diferente dependiendo del valor.

Ejemplo:

```js
const Profile = ({ name }) => {
  const el = document.createElement("p");
  el.innerHTML = `Hello ${name}`;
  return el;
}
```

Ojo que `Profile` recibe un objeto, y estamos [usando destructuracion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#asignar_nombres_a_nuevas_variables_y_proporcionar_valores_predeterminados)
para solo sacar y nombrar la propiedad que nos importa `name`.

Pero, ¿cómo podemos hacer que los datos pasen como argumentos a
la función de vista?

Con `navigateTo` es más sencillo ya que podemos pasar el argumento
en formato objeto.

```js
linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
```

Pero, ¿qué pasa si el usuario carga la URL directamente?
¿De dónde vendrá el valor de `name`?

Hay varias formas de hacerlo con la definición de rutas - algunas son más
sofisticadas y requieren más código que otras.

El objeto `window.location` tiene algunas propiedades básicas
que podemos usar para comunicar datos. Se llama parte de `search` o
`queryString` de la URL, es lo que viene después de "?".

`http://www.website.com?name=Noemi&color=green`
`window.location.search`: `?name=Noemi&color=green`

Piense en ello como pares `key/value` separados por "&".

De `http://www.website.com?name=Noemi&color=green` podemos extraer:

```js
{ name: Noemi, color: green }
```

Si observa las URL mientras navega, verá parámetros de `search` en todas partes.

Entonces, ¿cómo llegamos de la URL al objeto?
Podemos usar `window.location.search` para obtener el parte de URL
que nos interesa (el query string) y usar
una interfaz llamada [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

```js
const params = new URLSearchParams("foo=1&bar=2");
```

Este nos dará una instancia de objeto de tipo `URLSearchParams`
con los parámetros dados, y con eso podemos iterar para formar un objeto.
(Pista: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
o [`fromEntries`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
pueden ayudar)

Cuando se carga su SPA, antes de llamar a `renderView` de frente, el router
debe analizar la URL y extraiga el `pathname` y los parámetros `search`
para pasar a la vista. Lo mismo debe ocurrir cuando hay un evento `popstate`.

### 4. Responda a la navegación `forward` y `back` en el navegador

Cuando un usuario utiliza los botones de avance o retroceso en el
navegador dentro de su SPA el router necesita saber cuándo sucede esto,
analice `window.location` para los parámetros `pathname` y `search`
luego llame a la vista apropiada para el nombre de ruta pasando
cualquier parámetro como argumento.

En `router.js`, agregaríamos:

`onURLChange(location)`: una función para manejar cambios de URL con `popstate`.
Cuando la URL cambia, analiza el `pathname` y `search` desde la
`location` (`window.location`) y luego llama a `renderView`.

Necesitamos conectar esta función para que se active cuando el usuario avance
o retroceda. Para lograr esto, podemos escuchar el evento `popstate`
de la `window`. Cuando se activa `popstate`, significa que la URL ha cambiado
debido a la navegación o interacción del usuario.

[Más información sobre `popstate`.](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)

### 5. Cargando una página de error

Cuando el usuario carga una URL que no existe en la aplicación, la aplicación
debería mostrar una vista que le dice al usuario que hay un error de algún
tipo, o que no se encuentra.

Para apoyar esto comportamiento, las `routes` de una aplicación deben tener
una ruta con una vista definida para `/error` o `/not-found`.
En el momento en que el router va a renderizar la vista y busca
encontrar la vista para una ruta, si no existe ninguno, puede utilizar `/error`
como alternativa.

```js
const renderView = (pathname, props) => {
  // clear the current html
  find the correct view to render --or if there is none, use the error view--
  // call the view function (with the props) and get the new html element
  // put new html in the page
}
```

## API de router básico

Aquí hay una API completa de un router básico que tiene la funcionalidad
que acabamos de cubrir.

- `routes` - objeto `{}`: Esta variable almacena información sobre las rutas en
  tu SPA. Cada ruta está asociada con una ruta y una vista o componente
  correspondiente. Si un usuario navega a una ruta específica, el router
  mostrará la vista correspondiente.

- `rootEl` - Elemento DOM: Esta variable almacena el elemento donde el
  contenido SPA cambiará/aparecerá.

- `setRootEl(el)`: Esta función tiene un parámetro (elemento).
   Establece el elemento raíz donde se representarán las vistas,
   lo que le permite para especificar en qué parte de su documento HTML
   aparecerá el contenido SPA.

- `setRoutes(routes)`: Esta función asigna el valor del argumento `routes`
  al objeto `ROUTES`. `routes` debe ser un objeto (considere verificar que
  sea un objeto y arrojar un error si no es así). Utilice esta función para
  definir las rutas para su SPA.

- `queryStringToObject(queryString)`: una función de utilidad para convertir
  una cadena de `search` o `query string` (ejemplo
  `?name=Noemi&color=blue`) en un objeto para acceder fácilmente
  a los parámetros de consulta. Convierte el valor de `queryString`
  y devuelve un objeto de pares `key/value` creados a partir de `queryString`
  (por ejemplo,`{ name: "Noemi", color: "blue" }`). Puede hacer esto usando
  `URLSearchParams` para convertir la cadena  en un tipo de datos iterable.
  Luego puede usar `for...of` o `Object.fromEntries` para crear el objeto a
  partir del iterable.
  
- `renderView(pathname, props)`: esta función representa una vista en el
  elemento raíz especificado. Borra el contenido existente, busca la función
  de vista para el nombre de ruta y luego busca la vista. funciona en `routes`
  y llama a la función de vista pasando el valor `props` como argumento a
  la vista. Agrega el elemento DOM devuelto por la función de vista al
  elemento `root`.

- `navigateTo(pathname, props)`: esta función se utiliza para navegar mediante
  programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en
  botones o enlaces dentro de la aplicación). Actualiza la URL usando
  `window.history.pushState` y luego llama a `renderView` con el `pathname`
  y los `props` dados para mostrar la vista correspondiente.

- `onURLChange(location)`: esta función está destinada a manejar cambios de URL
  con `popstate` y también cuando el app carga la primera vez.
  Cuando la URL cambia, analiza el `pathname` y la `search`
  desde la `location` (`window.location`) y luego llama a `renderView`.
  Debes usar `queryStringToObject` para obtener los parámetros de la
  cadena de `search` en formato de objeto para pasar a `renderView`.

## Codificación de un SPA y router

Armemos el router junto con algunas vistas sencillas para hacer un SPA!

### 1. Configura su estructura HTML

Crea un archivo HTML con la estructura básica de tu SPA.
Defina un elemento raíz (por ejemplo, un `<div id="root">`)
donde se representarán sus vistas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your CSS and other head elements here -->
</head>
<body>
    <div id="root"></div> <!-- This is your root element -->
    <script src="your-app-script.js"></script>
</body>
</html>
```

### 2. Crear las vistas "views"

Defina views. Un view es un componente función que representa una pagina entero.
Es una función que crea el contenido de la vista y debe devolver
un elemento DOM para el router usar.

Por ejemplo:

```js
// src/views/Home.js

function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';
  return viewEl;
}

// src/views/About.js

function About(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'This is the About page.';
  return viewEl;
}

// Definir funciones/componentes similares para otras rutas
```

### 3. Codifique el router

En su propio archivo `router.js`, implemente las partes del router siguiendo
[la API descrita anteriormente](##API_básica_del_router).
La API que revisamos define dos variables (`ROUTES` y `rootEl`)
y seis funciones.

Considere escribir pruebas en paralelo para cada función para comprender
mejor su intención.

Exporte las funciones que serán utilizadas por otros módulos
`setRoutes`, `onURLChange`, `setRootEl`, `navigateTo`.

Aquí hay un resumen de `router.js` presentado con pseudocódigo:

```js

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
```

### 4. Configura el router

En su código JavaScript (por ejemplo, `index.js`), inicialice su router
definiendo sus rutas y configurando el elemento raíz:

```js
import HomeView from './views/HomeView';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': HomeView,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});
```

### 5. Manejar la carga de la primera página

Asegúrese de manejar la carga de la página inicial llamando a `onURLChange`
con `window.location`. 

En `index.js`

```js
// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
});
```

Pruebe para ver si no importa con qué URL válida de su SPA comience,
se carga la vista correcta.

### 6. Implementar la navegación en la SPA

En sus vistas, puede utilizar enlaces de anclaje `<a>` o `<button>`
con `navigateTo` para navegar a diferentes rutas.
Recuerde que `navigateTo` debe tomar argumentos para `pathname` y `props`.

```js
// import navigateTo

const Home = (props) => {
  // ...
  linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
  // return el
}
```

### 7. Manejar hacia `forward` y `back`

Asegúrese de estar escuchando `popstate` en `index.js` y llame a la función
`onURLChange` cuando hay un `popstate`.

Cuando un usuario hace clic en un enlace o navega usando los botones
atrás/adelante del navegador, se llamará a esta función para actualizar
la vista mostrada.

```js
// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
   onURLChange(/* location */);
});
```

Pruébelo usando los botones de avance y retroceso.

### 8. Probar la funcionalidad del `search` params

En una de sus vistas, experimente leyendo los parámetros de `search` de la
URL y utilizándolos en el vista. Las funciones de vista deben tener un
parámetro, llamémos `props`, que es un objeto con que podemos pasar información
a las vistas.

```js
const Home = (props) => {
  const el = document.createElement('div');
  el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
  console.log(props.id);
  return el;
}
```

Luego, en la URL, agregue los parámetros de búsqueda
`http://localhost[PORT]/?name=Xochitl&id=100`.

Recuerde que también puede pasar `props` con `navigateTo`
con el segundo argumento.

```js
navigateTo("/", { nombre: "Xóchitl", id: "100"});
```

### 9. Manejo de errores de enrutamiento

Un caso de uso común es que su router presente una página de
error cuando no puede encontrar recurso definido para la URL.

Para lograr esto, agregue una ruta para error o no encontrada
a su objeto de rutas (ejemplo `{ "/error": ErrorView }`) y
en `renderView` usándolo como alternativa si
`routes[pathname]` no produce nada.

### 10. Listo

Pruebe el comportamiento de su SPA manualmente haciendo clic e ingresando las URL.
Escriba pruebas para la funcionalidad `router.js` si aún no lo ha hecho.
