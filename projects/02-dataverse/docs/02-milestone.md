# **HITO 2:** Visualización de datos

A partir de este momento, es fundamental que
trabajes en cada hito utilizando una
[rama](https://www.atlassian.com/es/git/tutorials/comparing-workflows/feature-branch-workflow)
individual para facilitar la claridad, coherencia y colaboración.
El objetivo de este hito es lograr la visualización de
los elementos de tu conjunto de datos con todos los estilos.

## Tareas de este hito

- [Visualizar](#visuzlizar)
- [Estilos](#estilos)
- [Test](#test)

### Visuzlizar

> [!IMPORTANT]
> Para visualizar los datos, es crucial que repases
> los conceptos de
> [parámetros y argumentos](https://www.youtube.com/watch?v=5VVBrfWQ2Wk)
> de una función, ya que los utilizarás extensivamente.

En el archivo `src/main.js`, observarás que las primeras líneas
están ocupadas por las importaciones de la `data` y de `renderItems`.
En este archivo, llama a `renderItems` para enviar la data como argumento.

```js
import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

// Invocación de renderItems
renderItems(data)
```

Ahora en el archivo `src/view.js`, existe la función `renderItems`,
la cual tiene la responsabilidad de:

1. Recibir el parámetro data, que representa todo el conjunto de datos.
1. Crear un elemento `<ul>` utilizando el método
[createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement).
1. Recorrer la data mediante un
[bucle](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
o algún método de array como
[forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
o
[map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
1. Por cada elemento de la data, crear un elemento `<li>`.
1. Agregar cada `<li>` al `<ul>` utilizando
[innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) ,
[appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
u otro método apropiado.
1. Finalmente, retornar el elemento `<ul>`.

Hasta este punto, aún no se visualiza la data, pero puedes utilizar
`console.log` en todo momento. Por ejemplo, dentro del bucle o método que
elijas, para verificar la iteración.

Para concluir esta fase, debes seleccionar el elemento HTML mediante un
[selector del DOM](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors).
Posteriormente, indica dónde se debe colocar el resultado de la invocación de
renderItems, recurriendo nuevamente a
[innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) o
[appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)

> [!NOTE]
> **appendChild()**: Este método agrega un elemento hijo al final de un elemento padre.
> **innerHTML**: Esta propiedad asigna el contenido de un elemento HTML a otro elemento.

### Estilos

Para crear una cuadrícula adaptable a diferentes dispositivos
con Flexbox, utiliza la propiedad `flex` y ten en cuenta el uso
de `wrap` para manejar múltiples filas o columnas.

Recursos utiles:

- [Flexbox](https://curriculum.laboratoria.la/es/topics/css/css/flexbox)
- [Flexbox Froggy](https://flexboxfroggy.com/#es)
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Test

Verifica qué está sucediendo con los tests;
este es un buen momento para ejecutarlos y ajustar
las partes del código que sean necesarias. Aunque
es posible que varios tests aún no pasen, es
fundamental abordar cualquier problema identificado
para garantizar la robustez y precisión del código.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
```

[👈Todos los hitos](../README.md#6-hitos)
