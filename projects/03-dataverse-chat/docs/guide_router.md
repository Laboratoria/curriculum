# Cómo codificar un router
Antes de comenzar a codificar un router, debemos cubrir un par de conceptos,
como la razón por la que existen los routeres: la aplicación de página única (SPA).

## Qué es un Single Page Application (SPA)
Una aplicación de página única, en inglés Single Page Application o SPA, es una aplicación web que utiliza un único archivo HTML (probablemente `index.html``)
y actualiza dinámicamente el contenido de ese `index.html` a medida que el usuario interactúa con la aplicación.
En lugar de cargar páginas HTML separadas para cada interacción o navegación, los SPA utilizan JavaScript
para buscar y representar datos en la misma página HTML, dando la ilusión de que estamos navegando
para separar páginas HTML, cuando en realidad es la misma página con contenido diferente representado (dibujado).

## Qué es un router
En el contexto de los SPA, un router es un módulo de JavaScript que gestiona la navegación dentro
la aplicación. Un router ayuda a crear una sensación de múltiples páginas o "vistas" dentro de un SPA al manejar
interacciones del usuario que provocan cambios en la URL y la presentación del contenido apropiado.

Por ejemplo, si está en la página de inicio de un SPA `www.website.com` y luego hace clic en un elemento del menú `<nav>` en la página
que te lleva a `www.website.com/about`, el router se encarga de responder cambiando la URL,
encontrar el contenido apropiado para "acerca de" y reemplazar el HTML en "index.html" con el nuevo contenido.

### Entonces, qué son "routes" y "views"
En su forma más simple, las rutas (routes) generalmente se definen como pares `key-value`, donde `key` es la ruta o pathname de URL y el `value` es la función asociada que representará la vista (view).

```js
const routes = {
  "/": Home,
  "/about": About
}
```

Las rutas se pueden definir de formas más complejas pero la idea base es la misma, un determinado ruta se relaciona con
una determinada función de view.

En este ejemplo, `Home` y `About` son funciones que, cuando se invocan, representarán el html para el
página y devolverá un elemento DOM que el router agregará al `index.html`.

```js
const Home = () => {
   const el = document.createElement("h1");
   el.innerHTML("I'm the Home Page");
  return el;
}
```

Entonces, si cargamos la página web y el nombre de la ruta es `/`, el router lo sabrá por `routes["/"]`
Deberíamos invocar la función `Home` y veremos "I'm the Home Page".
O si cargamos la página web en `/about`, el router
sepa por `routes["/about"]` cómo llamar a la función `About`. Hay algunos pasos intermedios, pero
Esa es más o menos la idea.

## ventana.ubicación

Ya que mencionamos "nombre de ruta", revisemos brevemente "ubicación.ventana".
Con el objeto `window.location`, podemos acceder a partes de la URL actual mediante programación.

Ubicación de ventana de ejemplo:

* `href`: `https://example.org:8080/foo/bar?q=baz#bang`
* `origin`: `https://example.org:8080`
* `port`: `8080`
* `pathname`: `/foo/bar`
* `search`: `?q=baz`
* `hash`: `#bang`

[Ver interactivamente partes de la URL](https://developer.mozilla.org/en-US/play)

Si no está familiarizado con `window.location` y sus propiedades `origin`, `pathname`, `search`,
ahora sería un buen momento para leer [los documentos de ubicación]https://developer.mozilla.org/es/docs/Web/API/Location.

## Presentamos la Histoy API

A medida que navega por páginas web y carga una página tras otra, agrega contenido al historial de su navegador. La parte de atrás
y los botones de flecha hacia adelante en cada navegador le permiten avanzar y retroceder en su historial.
Con la History API podemos acceder y manipular el historial del navegador sin activar recargas de página completa.
Un router en una aplicación de página única funciona junto con la API de historial para lograr esto
Carga de página "simulada" mientras se agrega al historial del navegador, preservando así la forma en que un usuario puede moverse atrás y adelante usando los botones
en su navegador. Si no fuera así, un SPA aún podría mostrar nuevas vistas en el mismo html,
pero la URL probablemente no se actualizará y el historial nunca se agregará, por lo que presionar
Volver al navegador saldría del sitio web por completo.

Enlaces relacionados :

Los actores clave relacionados con la API de historial que utiliza un router son:

Método `pushState` - enlace - nos permite agregar un nuevo estado a la cola del historial de la ventana
Evento `popstate` - enlace - es un evento que la ventana se activa cuando cambia el historial (por ejemplo, cuando alguien presiona hacia atrás en el navegador)

Otros métodos de interés son replaceState, go, forward, back [Consulte los documentos completos de History API aquí](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
Y [trabajar con los documentos de la API de historial](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)
Otro evento de interés es "hashchange". [Consulte los documentos de hashchange aquí](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)

## Funcionalidades del router

Un router básico debería:

* Almacenar las rutas de las aplicaciones.
* Para un nombre de ruta determinado en la URL, muestre la vista adecuada
   (y pasar los argumentos apropiados a la vista si hay parámetros de búsqueda)
* Responder a la navegación dentro de la aplicación (enlace, clics en botones, etc.)
   * agregar un nuevo estado al historial del navegador para actualizar la URL
   * luego renderiza la vista apropiada según el nombre de la ruta
     (y pasar el argumentos apropiados si hay parámetros)
* Responder a la navegación con los botones de avance y retroceso en el navegador
   * analizar la nueva URL para la ruta y los parámetros
   * luego renderiza la vista apropiada según el nombre de la ruta
     (y pasar los argumentos apropiados si hay parámetros)
* Cargando una página de error cuando el nombre de la ruta no está definido en las rutas

No hay ningún error, mencionamos renderizar la vista apropiada según el nombre de la ruta tres veces,
Entonces esto significa que escribiremos una función reutilizable para esto para poder usarla varias veces.

Ahora profundizaremos explicando cómo lograr estas funcionalidades en código en `router.js`

### 1. Almacenar las rutas de la aplicación
El router necesita conocer las rutas de la aplicación para determinar qué vista representar para una ruta.
Las rutas deben definirse en un módulo fuera del router pero luego pasarse al router para almacenarlas.
El router debe tener su propia variable "privada" para almacenar las rutas y una función que pueda llamarse desde
otro módulo para asignar o configurar las rutas. En código, eso significa que el router debe tener:

* RUTAS - objeto {}: Esta variable almacena información sobre las rutas en tu SPA.
* setRoutes(rutas): Esta función asigna el valor del argumento rutas al objeto RUTAS.

### 2. Para una ruta determinada en la URL, genere la vista adecuada
El router debe tener una función que, cuando se le da un nombre de ruta, muestre la vista.
Entonces, ¿qué significa "renderizar la vista"? Si piensa en pseudocódigo, debemos borrar el html de la página actual,
llame a la nueva función de vista correcta para renderizar y luego coloque el nuevo html en la página.

```js
const renderView = (pathname, params) => {
  // clear the current html
  // find the correct view to render
  // call the view function (with the params) and get the new html element
  // put new html in the page
}
```
Para poder "borrar" el html, el router también necesita conocer el elemento de su
app que es la raíz o padre de todos los elementos. A esto lo llamaremos elemento raíz.
El router debe tener su propia variable para almacenar el elemento raíz y una función que pueda llamarse desde
otro módulo para asignar o configurar el elemento raíz.

Para lograr esta funcionalidad en el código, `router.js` debe tener:

* `rootEl` - Elemento DOM: Una variable para almacenar el elemento raíz donde el contenido cambiará/aparecerá.
* `setRootEl(el)`: Una función para establecer el elemento raíz del router.
* `renderView(pathname, params)`: una función que representa una vista en el elemento raíz especificado.
   Borra el contenido existente, encuentra la función de visualización para el nombre de ruta dado y luego
   llama a esa función de vista (también pasa el objeto params como argumento a la vista, más sobre eso en un momento).
   Agrega el elemento devuelto por la función de vista al elemento raíz.

### 3. Responder a la navegación dentro de la aplicación
Cuando un usuario hace clic en un enlace o botón, etc. en su aplicación para navegar a otra página dentro de su aplicación,
el router debe intervenir para simular la carga de una nueva página. Necesita:

   * agregar un nuevo estado al historial del navegador para actualizar la URL
   * renderizar la vista apropiada según el nombre de la ruta (y pasar los argumentos apropiados si hay parámetros)

El router utiliza la API History para actualizar la URL e insertar un nuevo estado en la pila del historial del navegador.
Normalmente, esto se hace usando `window.history.pushState`. Recuerde, es importante impulsar un nuevo estado.
y no solo renderizar la vista ya que queremos soportar el avance y retroceso en el navegador y tener nuestro
El SPA se comporta como cualquier otra página web.

Entonces, para lograr esto en el código, `router.js` debe tener una función para navegar mediante programación a
una nueva ruta dentro de SPA.

`navigateTo(pathname, props)`: una función que recibe una ruta, envía un nuevo estado histórico y representa la nueva vista.

Un ejemplo con algún pseudocódigo.


```js
export const navigateTo = (pathname, params) => {
  // push new history state with window.history.pushState
  // render view passing it params
}
```

Nota: ya hablamos de una función `renderView`, podemos usarla dentro de `navigateTo` para mantener el código SECO
(No te repitas)

Esta función se puede importar a cualquier vista que tenga enlaces, botones o necesite cargar una nueva vista y
llamado en un detector de eventos.

```js
linkEl.addEventListener('click', () => navegateTo("/about", { nombre: "Xochitl" }))
```


#### Pasar argumentos a las vistas

Hablemos de esto "y pasemos los argumentos apropiados si hay parámetros"
y por qué podría ser útil. Hay ocasiones en las que queremos pasar datos a una vista, para que la misma vista pueda renderizarse.
información más específica dependiendo de qué datos pasemos.

Por ejemplo, es posible que tengas una ruta para mostrar información del usuario.

```js
  const routes = { "/user": User }
```
Para cualquier usuario, queremos mostrar la misma página en general, pero también con información específica, tal vez el nombre del usuario,
dependiendo del usuario. En lugar de tener una ruta separada definida para cada posible usuario
(tedioso y tal vez imposible) tenemos una ruta `/usuario` que llama Es una función de vista `Usuario`, pero esta vista
La función tiene parámetros para mostrar algo un poco diferente dependiendo del valor.

```js
const User = ({ name }) => {
  const el = document.createElement("p");
  el.innerHTML = `Hello ${name}`;
  return el;
}
```

Pero, ¿cómo podemos hacer que los datos pasen como argumentos a la función de vista?
Con `navigateTo` es más sencillo ya que podemos pasar el argumento.

```js
linkEl.addEventListener('click', () => navegateTo("/about", { nombre: "Xochitl" }))
```

Pero, ¿qué pasa si el usuario carga la URL directamente? ¿De dónde vendrá el valor de "nombre"?
Hay varias formas de hacerlo y algunas son más sofisticadas y requieren más código que otras.
El objeto `window.location` tiene algunas funciones básicas que podemos usar para comunicar datos.
Se llama parte de "búsqueda" o "consulta" de la URL, es lo que viene después de "?".
Piense en ello como pares clave/valor separados por "&".

Y de `www.website.com?name=Noemi&color=green` podemos extraer

```js
{ nombre: Noemí, color: verde }
```

Si observa las URL mientras navega, verá parámetros de búsqueda en todas partes.

Entonces, ¿cómo llegamos de la URL al objeto?
Podemos usar `window.location.search` para obtener la cadena de búsqueda y usar la API web llamada
[`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

```js
const params = new URLSearchParams("foo=1&bar=2");
```
nos dará un objeto `URLSearchParams` con los parámetros dados que podemos iterar para formar un
objeto regular. (Pista: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) o
  [`fromEntries`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

Cuando se carga su SPA, antes de llamar a `renderView`, el router debe analizar la URL y
extraiga el nombre de la ruta y los parámetros para pasar a la vista. Lo mismo ocurre cuando el usuario
utiliza los botones de avance y retroceso `popstate`.

### 4. Responda a la navegación con los botones de avance y retroceso en el navegador
Cuando un usuario utiliza los botones de avance o retroceso en el navegador dentro de su SPA
el router necesita saber cuándo sucede esto, analice `window.location` para los parámetros `pathname` y `search`
luego llame a la vista apropiada para el nombre de ruta pasando cualquier parámetro como argumento.

En `router.js`, agregaríamos

  `onURLChange(location)`: una función para manejar cambios de URL con `popstate`.
   Cuando la URL cambia, analiza el `pathname` y la `search` desde la `location` (`window.location`)
   y luego llama a `renderView`.

Necesitamos conectar esta función para que se active cuando el usuario avance o retroceda.
Para lograr esto, podemos escuchar el evento `popstate` de la `window`.
Cuando se activa `popstate`, significa que la URL ha cambiado debido a la navegación o interacción del usuario.

[Más información sobre `popstate` aquí](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event)

### 5. Cargando una página de error cuando el nombre de la ruta no está definido en las rutas
Cuando el usuario carga una URL que no existe en la aplicación, la aplicación debería mostrar una vista.
que le dice al usuario que hay un error de algún tipo, o que no se encuentra. Para apoyar esto
comportamiento, las `routes` de una aplicación deben tener una ruta con una vista definida para "/error" o "/not-found".
En el momento en que el router va a renderizar la vista y busca encontrar la vista para una ruta,
si no existe ninguno, puede utilizar "/error" o "/no t-found" como alternativa.

```js
const renderView = (pathname, params) => {
  // clear the current html
  find the correct view to render **or if there is none, use the error view**
  // call the view function (with the params) and get the new html element
  // put new html in the page
}
```

## API de router básico

Aquí hay una API completa de un router básico que tiene la funcionalidad que acabamos de cubrir.

* `routes` - objeto {}: Esta variable almacena información sobre las rutas en tu SPA.
   Cada ruta está asociada con una ruta y una vista o componente correspondiente.
   Si un usuario navega a una ruta específica, el router mostrará la vista correspondiente.

* `rootEl` - Elemento DOM: Esta variable almacena el elemento donde el contenido SPA cambiará/aparecerá.

* `setRootEl(el)`: Esta función tiene un parámetro (elemento).
   Establece el elemento raíz donde se representarán las vistas/componentes, lo que le permite
   para especificar en qué parte de su documento HTML aparecerá el contenido SPA.

* `setRoutes(routes)`: Esta función asigna el valor del argumento `routes` al objeto ROUTES.
   `routes` debe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así).
   Utilice esta función para definir las rutas para su SPA.

* `queryStringToObject(queryString)`: una función de utilidad para convertir una cadena de consulta
   (por ejemplo, `?param1=valor1&param2=valor2`) en un objeto JavaScript para acceder fácilmente a los parámetros de consulta.
   Toma una `queryString` como argumento y devuelve un objeto de pares clave-valor creados a partir de la cadena.
   (por ejemplo, `{ parámetro1: valor1, parámetro2: valor2 }`). Puede hacer esto usando `URLSearchParams` para cinvertir la cadena
   en un tipo de datos iterable. Luego puede usar `for...of` o `Object.fromEntries` para crear el objeto a partir del iterable.
  
* `renderView(pathname, props)`: esta función representa una vista en el elemento raíz especificado.
   Borra el contenido existente, busca la función de vista para el nombre de ruta y luego busca la vista.
   funciona en `routes` y llama a la función de vista pasando el valor `props` como argumento a la vista.
   Agrega el elemento DOM devuelto por la función de vista al elemento raíz.

* `navigateTo(pathname, props)`: esta función se utiliza para navegar mediante programación a una nueva ruta
   dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando
   `window.history.pushState` y luego llama a `renderView` con el `pathname` y los `props` dados
   para mostrar la vista correspondiente.

* `onURLChange(location)`: esta función está destinada a manejar cambios de URL con `popstate`.
   Cuando la URL cambia, analiza el `nombre de ruta` y la `búsqueda` desde la `ubicación` (`window.location`)
   y luego llama a `renderView`. Tendrás que usar `queryStringToObject` para obtener los parámetros del objeto.
   formato de la cadena de búsqueda para pasar a `renderView`.


## Codificación de un SPA y un router

Armemos el router junto con algunas vistas sencillas para hacer un SPA:

1. Configure su estructura HTML
Crea un archivo HTML con la estructura básica de tu SPA.
Defina un elemento raíz (por ejemplo, un `<div>` con una identificación) donde se representarán sus vistas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your CSS and other head elements here -->
</head>
<body>
    <div id="app-root"></div> <!-- This is your root element -->
    <script src="your-app-script.js"></script>
</body>
</html>
```

2. Crear las vistas "views"

Defina los views. Los views son componentes que representa una pagina entero.
Son funciones que crean el contenido de la vista para cada ruta y debe devolver un elemento DOM para el router
usar.
Por ejemplo:

```js
// src/views/Home.js

function Home(accesorios) {
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

3. Codifique el router

En su propio archivo `router.js`, implemente las partes del router siguiendo [la API descrita anteriormente] (##API básica del router).
La API define dos variables (`ROUTES` y `rootEl`) y seis funciones.
Considere escribir pruebas en paralelo para cada función para comprender mejor su intención.

Exporte las funciones que serán utilizadas por otros módulos `setRoutes`, `onURLChange`, `setRootEl`, `navigateTo`.


Aquí hay un resumen de `router.js` presentado con pseudocódigo
```js

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
  // assign ROUTES
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
```

4. Configura el Router
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
  setRootEl(/** root element **/);
});
```

5. Manejar la carga de la primera página

Asegúrese de manejar la carga de la página inicial llamando a `onURLChange` con `window.location`.

```js
// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
});
```
Pruebe para ver si no importa con qué URL válida de su SPA comience,
se carga la vista correcta.

6. Implementar la Navegación en la SPA

En sus vistas, puede utilizar enlaces de anclaje `<a>` o `<button>`
con `navigateTo` para navegar a diferentes rutas.
Recuerde que `navigateTo` debe tomar argumentos para `pathname` y `props` objeto.


```js
// import navigateTo

const Home = (props) => {
  // ...
  linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
  // return el
}
```


7. Manejar hacia `forward` y `back`
Asegúrese de estar escuchando `popstate` en `index.js` y llame a la función `onURLChange`
cuando hay un `popstate`. Cuando un usuario hace clic en un enlace o navega usando los botones atrás/adelante del navegador,
Se llamará a esta función para actualizar la vista mostrada.

```js
// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
   onURLChange(/* ... */);
});
```

Pruébelo usando los botones de avance y retroceso.

8. Probar la funcionalidad del parámetro de consulta

En una de sus vistas, experimente leyendo los parámetros de búsqueda de la URL y utilizándolos en el
vista. Las funciones de vista deben tener un parámetro, llamémoslo "props", que es un objeto.
donde podemos pasar información a las vistas.

```js
const Home = (props) => {
     const el = document.createElement('div');
     el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
     console.log(props.id);
     return el;
}
```

Luego, en la URL, agregue los parámetros de búsqueda `localhost[PORT]/?name=Xochitl&id=100`.
Recuerde que también puede pasar `props` con `navigateTo` con el segundo argumento.
```js
navigateTo("/", { nombre: "Xóchitl", id: "100"});
```
9. Manejo de errores de enrutamiento

Un caso de uso común es que su router presente una página de error cuando no puede encontrar
recurso definido para la URL. Para lograr esto, agregue una ruta para error o no encontrada
  a su objeto de rutas (ejemplo `{ "/error": ErrorView }`) y en `renderView` usándolo como alternativa si
`routes [nombre de ruta]` no produce nada.

10. ¡Listo!

Pruebe el comportamiento de su SPA manualmente haciendo clic e ingresando las URL.
Escriba pruebas para la funcionalidad `router.js` si aún no lo ha hecho.
