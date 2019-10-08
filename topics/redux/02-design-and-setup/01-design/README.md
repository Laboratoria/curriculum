# Diseño

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

En las siguientes lecturas vamos a ir siguiendo el proceso completo de diseñar
una aplicación usando `React` y `Redux`. Trataremos de simular un flujo habitual
de tareas de la vida real.

La aplicación (componente en este caso) que vamos a construir es una tabla
filtrable de productos para una tienda online. El usuario debe poder filtrar por
artículos "en stock" además de buscar por texto.

## Comienza con un Mock

Imagina que ya tenemos un mock de nuestrx diseñadorx que se ve asi:

![Mockup](https://es.reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

Y nuestra API JSON nos devuelve data con la siguiente estructura:

```js
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
];
```

## Divide la interfaz (UI) en una jerarquía de componentes

Lo primero que deberías hacer es dibujar cajitas alrededor de cada uno de los
componentes (y sub componentes) y les das nombres. Si trabajas con unx
diseñadrx, probablemente ya haya hecho esto, asi que ve a preguntarle! Si tu
diseñadorx es buenx con la semántica, entonces los nombres de los Layers de
Photoshop pueden ser buenos nombres para tus componentes de React!

Pero ¿cómo determino qué debería tener su propio componente? Sólo usa los mismos
criterios que utilizas para decidir si debes crear una nueva función u objecto.
Una de éstas técnicas es la del [principio de única responsabilidad](https://en.wikipedia.org/wiki/Single_responsibility_principle),
que en React sería que un componente debe idealmente hacer una sola cosa. Si
comienza a crecer es hora de decomponerlos en componentes más pequeños.

Como habitualmente estarás proyectando en la interfaz un objeto JSON, entenderás
que cuando has modelado correctamente tu `state`, tu UI (y con ella la
estructura de tus componentes) se amoldará si problemas. Esto es porque tu UI y
tu `state` suelen adherirse a la misma *arquitectura de la información*, lo que
implica que en general separar tu UI de tu data es trivial: divide tus
componentes de tal manera que representen exactamente una porción de la
información.

![Component diagram](https://es.reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

Aquí verás que tenemos 5 componentes:

1. **`FilterableProductTable` (naranja):** contiene el bloque completo
2. **`SearchBar` (azul):** recibe el *input del usuario*
3. **`ProductTable` (verde):** muestra y filtra la *colección* según el *input
   del usuario*
4. **`ProductCategoryRow` (turquesa):** muestra la cabecera para cada
   *categoría*
5. **`ProductRow` (rojo):** muestra una fila para cada *producto*

Si observas a `ProductTable`, verás que la cabecera de la tabla (que tiene los
labels "Name" y "Price") no están en su propio componente. Esto es según la
preferencia de cada uno. En este ejemplo, los dejamos como parte de
`ProductTable` porque es parte de la lógica de renderizado de la *colección*,
que es responsabilidad de `ProductTable`. Sin embargo si con el tiempo este
header crece y se complejiza (por ejemplo para permitir ordenamiento),
probablemente tenga sentido crearle su propio componente `ProductTableHeader`.

Ahora que hemos identificado cuáles son nuestro componentes, vamos a ordenarlos
en una jerarquía. Esto es simple, si un componente aparece dentro de otro
componente en el mock, entonces debería aparecer como hijo en la jerarquía:

* `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    * `ProductCategoryRow`
    * `ProductRow`

***

Fuentes:

* [Thinking in React - Documentación oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentación oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
