---
sources:
  - https://facebook.github.io/react/docs/thinking-in-react.html
  - http://redux.js.org/docs/basics/UsageWithReact.html
---

# React + Redux = Awesome!!!

En esta lectura vamos a hacer el proceso completo de diseñar una aplicación usando React y Redux.

Usaremos como base nuestro proyecto de las lecciones anteriores, pero reemplazaremos el `MainSection` por un nuevo componente `FilterableProductTable` que nos muestre una tabla filtrable de productos.

## Setup

Antes que nada vamos a instalar nuestras nuevas dependencias.

```
yarn add redux react-redux
yarn add -D redux-devtools
```

Y desde tu navegador instala la [extensión](http://extension.remotedev.io/).

Y luego dentro de `main.js` reemplazamos
```
import MainSection from './lib/main-section';
```
por
```
import FilterableProductTable from './lib/FilterableProductTable';
```

y reemplazamos la definición de `Main` para que se vea así:

```js
/* ... */
const Main = () => {
  const asideTitulo = 'Links'
  const asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  return (
    <Page>
      <FilterableProductTable />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}
/* ... */

```

y creamos un archivo `lib/FilterableProductTable.js` con el siguiente contenido
```js
import React from 'react'

const FilterableProductTable = () => {
  const style = {
    width: '70%',
    float: 'left'
  }
  return (
    <div style={style}>
      <h2>Filterable Product Table</h2>
    </div>
  )
}

export default FilterableProductTable
```

y por últimos limpiamos un poco nuestro `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ejemplo React + Redux</title>
  </head>
  <body>
    <h1>Ejemplo React + Redux</h1>
    <div id="container">
      <p>
        Si ves esto React <strong>no</strong> está funcionando.
      </p>
  </body>
</html>
```

## Implementación

Entonces vamos a simular el flujo habitual en la vida real.

## Paso 0: Comienza con un Mock

Imagina que ya tenemos un mock de nuestrx diseñadorx que se ve asi:

![Mockup](https://facebook.github.io/react/img/blog/thinking-in-react-mock.png)

Y nuestra API JSON nos devuelve data con la siguiente estructura:

```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

## Paso 1: Divide la interfaz (UI) en una jerarquía de componentes

Lo primero que deberías hacer es dibujar cajitas alrededor de cada uno de los componentes y (y sub componentes) y los nombras. Si trabajas con unx diseñadrx, probablemente ya haya hecho esto asi ve a preguntarle! Si tu diseñadorx es buenx con la semántica, entonces los nombres de los Layers de Photoshop pueden ser buenos nombres para tus componentens de React!

Pero ¿cómo determino que debería tener su propio componente? Sólo usa los mismos criterios que utilizas para decidir si debes crear una nueva función u objecto. De de éstas técnicas es la del [principio de única responsabilidad](https://en.wikipedia.org/wiki/Single_responsibility_principle), que en React sería que un componente debe idealmente hacer una sola cosa. Si comienza a crecer es hora de decomponerlos en componentes mas pequeños.

Como habitualmente estarás proyectando en la interfaz un objeto JSON, entenderás que cuando has modelado correctamente tu `state`, tu UI (y con ella la estructura de tus componentes) se amoldará si problemas. Esto es porque tu UI y tu `state` suelen adherirse a la misma *arquitectura de la información*, lo que implica que en general separar tu UI de tu data es trivial: divide tus componentes de tal manera que representen exactamente una porción de tu data.

![Component diagram](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)

Aquí verás que tenemos 5 componentes:

  1. **`FilterableProductTable` (naranja):** contiene el bloque completo
  2. **`SearchBar` (azul):** recibe el *input del usuario*
  3. **`ProductTable` (verde):** muestra y filtra la *colección* según el *input del usuario*
  4. **`ProductCategoryRow` (turquesa):** muestra la cabecera para cada *categoría*
  5. **`ProductRow` (rojo):** muestra una fila para cada *producto*

Si observas a `ProductTable`, verás que la cabecera de la tabla (que tiene los labels "Name" y "Price") no están en su propio componente. Esto es según la preferencia de cada uno. En este ejemplo, los dejamos como parte de `ProductTable` porque es parte de la lógica de renderizado de la *colección*, que es responsabilidad de `ProductTable`. Sin embargo si con el tiempo este header crece y se complejiza (por ejemplo para permitir ordenamiento), probablemente tenga sentido crearle su propio componente `ProductTableHeader`.

Ahora que hemos identificado cuáles son nuestro componentes, vamos a ordenarlos en una jerarquía. Esto es simple, si un componente aparece dentro de otro componente en el mock, entonces debería aparecer como hijo en la jerarquía:

  * `FilterableProductTable`
    * `SearchBar`
    * `ProductTable`
      * `ProductCategoryRow`
      * `ProductRow`

## Step 2: Construye una versión estática en React

Ahora que ya tenemos los componentes es hora de comenzar a implementar la aplicación. El paso más simple es comenzar con una versión que recibe usa el `state` real pero sin interactividad. Es mejor separar estos procesos porque la construcción de la versión estática es mas que nada tipear pero no pensar, en cambio agregar interacciones require más de pensar que de tipear. Veremos por qué.

Para construir una versión estática que renderice nuestro `state`, querrás contruir componentes que reusen otros componentes pasando información entre unos y otros usando sus `props`.

Puedes construir tu aplicación top-down o bottom-up. Esto quiere decir que puedes comenzar con los componentes más arriba en la jerarquía (i.e. comenzar con `FilterableProductTable`) o con los que están mas abajo (`ProductRow`). En ejemplos simples es generalmente más simple comenzar de arriba hacia abajo, y en proyectos mas grandes, es más simple comenzar por abajo e ir escribiendo test a medida que vas subiendo escalones.

Al final de este proceso tendras una librería de componentes reusables que renderizan tus datos. El componente más arriba en la jerarquía (`FilterableProductTable`) recibirá la data como una prop. Si realizas un cambio en el JSON de productos, estos cambios se verán inmediatamente reflejados en tun interfaz. Esta es la maravilla del **one-way data flow**.

<p data-height="600" data-theme-id="0" data-slug-hash="vXpAgj" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/merunga/pen/NvLbjX">Thinking In React: Step 2</a> on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Paso 3: Identifica la representación mínima (pero completa) del estado de tu UI

Piensa en cuál es el mínimo conjunto de datos mutables que necesita tu aplicación. La clave aquí es DRY: *Don't Repeat Yourself*. Identifica la representación absolutamente mínima del `state` de tu aplicación y toda la información derivada la calculas bajo demanda. Por ejemplo si en nuestro ejemplo quisieramos mostrar la suma total de items disponibles, sólo nos alcanza con tener la lista de productos e iterarla para contabilizar la disponibilidad, sin necesidad de tener otra propiedad en nuestro `state` para guardar el calculo.

Piensa en todas las piezas de informaci[on que tiene nuestra aplicación:

  * La lista de productos original
  * El texto de búsqueda que ingresa el usuario
  * El valor del checkbox
  * La lista filtrada de productos
  
<p data-height="600" data-theme-id="0" data-slug-hash="ORzEkG" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lacker/pen/ORzEkG/">Thinking In React: Step 4</a> by Kevin Lacker (<a href="http://codepen.io/lacker">@lacker</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Paso 4: Identify Where Your State Should Live

<p data-height="600" data-theme-id="0" data-slug-hash="ORzEkG" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lacker/pen/ORzEkG/">Thinking In React: Step 4</a> by Kevin Lacker (<a href="http://codepen.io/lacker">@lacker</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

OK, so we've identified what the minimal set of app state is. Next, we need to identify which component mutates, or *owns*, this state.

Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. **This is often the most challenging part for newcomers to understand,** so follow these steps to figure it out:

For each piece of state in your application:

  * Identify every component that renders something based on that state.
  * Find a common owner component (a single component above all the components that need the state in the hierarchy).
  * Either the common owner or another component higher up in the hierarchy should own the state.
  * If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

Let's run through this strategy for our application:

  * `ProductTable` needs to filter the product list based on state and `SearchBar` needs to display the search text and checked state.
  * The common owner component is `FilterableProductTable`.
  * It conceptually makes sense for the filter text and checked value to live in `FilterableProductTable`

Cool, so we've decided that our state lives in `FilterableProductTable`. First, add an instance property `this.state = {filterText: '', inStockOnly: false}` to `FilterableProductTable`'s `constructor` to reflect the initial state of your application. Then, pass `filterText` and `inStockOnly` to `ProductTable` and `SearchBar` as a prop. Finally, use these props to filter the rows in `ProductTable` and set the values of the form fields in `SearchBar`.

You can start seeing how your application will behave: set `filterText` to `"ball"` and refresh your app. You'll see that the data table is updated correctly.

## Step 5: Add Inverse Data Flow

<p data-height="600" data-theme-id="0" data-slug-hash="qRqmjd" data-default-tab="js,result" data-user="rohan10" data-embed-version="2" data-pen-title="Thinking In React: Step 5" class="codepen">See the Pen <a href="http://codepen.io/rohan10/pen/qRqmjd">Thinking In React: Step 5</a> on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

So far, we've built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it's time to support data flowing the other way: the form components deep in the hierarchy need to update the state in `FilterableProductTable`.

React makes this data flow explicit to make it easy to understand how your program works, but it does require a little more typing than traditional two-way data binding.

If you try to type or check the box in the current version of the example, you'll see that React ignores your input. This is intentional, as we've set the `value` prop of the `input` to always be equal to the `state` passed in from `FilterableProductTable`.

Let's think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, `FilterableProductTable` will pass callbacks to `SearchBar` that will fire whenever the state should be updated. We can use the `onChange` event on the inputs to be notified of it. The callbacks passed by `FilterableProductTable` will call `setState()`, and the app will be updated.

Though this sounds complex, it's really just a few lines of code. And it's really explicit how your data is flowing throughout the app.

## And That's It

Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you're used to, remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code. As you start to build large libraries of components, you'll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)

