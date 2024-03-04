# **HITO 3:** Filtrar y ordenar datos

Este hito tiene como objetivo lograr la filtración y
ordenación de la data. No olvides que es esencial seguir
la práctica de utilizar al menos una
[rama](https://www.atlassian.com/es/git/tutorials/comparing-workflows/feature-branch-workflow)
por hito o por característica.

## Tareas de este hito

- [Filtrar datos del dataset](#filtrar-datos-del-dataset)
- [Test de la función del filtro](#test-de-la-función-del-filtro)
- [Ordenar datos del dataset](#ordenar-datos-del-dataset)
- [Test de la función ordenar](#test-de-la-función-ordenar)
- [Test OAS](#test-oas)

### Filtrar datos del dataset

Como primer paso, vuelve las secciónes
[4. Funcionalidades](../README.md/#4-funcionalidades),
[5. Consideraciones técnicas](../README.md/#5-consideraciones-técnicas) y
[src/dataFunctions.js](../README.md/#srcdatafunctionsjs)
para obtener detalles sobre los elementos que debes utilizar y
el nombre que debe tener la función para el filtro.

> [!TIP]
> [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

1. En el archivo HTML, crea un elemento `<select>`
que incluya los valores a ser utilizados para el filtrado.
2. En el archivo principal `src/main.js`, emplea algún selector
del DOM y manejador de eventos para seleccionar y vincular un
evento al elemento `<select>`. Esto permitirá capturar el valor
seleccionado en el `<select>` de manera adecuada.
3. En `src/dataFunctions.js`, elimina el contenido de ejemplo
y crea la función `filterData(data, filterBy, value)` que se
encargará de realizar el filtrado de datos.
4. En `src/main.js`, invoca la función `filterData` y proporciona
como argumentos la `data`, el campo por el cual deseas realizar el
filtrado `filterBy`, y el valor específico `value` que deseas
filtrar.
5. Regresa a `src/dataFunctions.js` y verifica que tu función esté
recibiendo los valores; puedes hacerlo mediante un `console.log`.
6. Una vez que hayas confirmado los valores ejecuta el método
`filter` y retorna el nuevo arreglo filtrado.
7. Una vez obtenido el valor de retorno en `src/main.js`,
llama a la función encargada de mostrar la data `renderItems`,
pasando como argumento el nuevo arreglo ya filtrado.
8. [Aplica estilos al `select` recién creado](#estilos)

> [!IMPORTANT]
> **No te limites a este ejemplo**. Puedes crear
> una interfaz que te permita filtrar por diferentes
> propiedades o con diferentes elementos. Explora
> tu creatividad y descubre nuevas formas
> de organizar tus datos.
> ¡El poder está en tus manos!
>

### Test de la función del filtro

¡No dejes las pruebas para el final! Ahora que tu función
de filtrado está en funcionamiento, es el momento ideal
para realizar pruebas. Puedes consultar la siguiente
[lista de reproducción en YouTube](https://www.youtube.com/watch?v=gsTfbwfVvDE&list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg)
para aprender sobre pruebas y ver ejemplos con Jest.

### Ordenar datos del dataset

> [!IMPORTANT]
> Aquí proporcionamos instrucciones para ordenar
> datos basándonos en una propiedad específica,
> pero es importante destacar que tienes la
> libertad de agregar una interfaz de usuaria que
> permita el ordenamiento por diversas propiedades.
> **Este es solo un ejemplo, no la única técnica posible.**
>

La función de ordenar `sortData` debe recibir datos, un campo de
referencia y la dirección del orden. Luego aplica el ordenamiento
con `sort` y devuelve el nuevo arreglo. Esto permite ordenar
dinámicamente la data según criterios específicos.

1. En el archivo `HTML`, crea un elemento `<select>` con opciones
`<option>` para ordenar datos ascendente ("asc") y descendente ("desc").
2. En `src/main.js`, utiliza un selector del DOM y un manejador
de eventos para vincular el `<select>` y capturar eficientemente
el valor seleccionado.
3. En `src/dataFunctions.js`, `crea sortData(data, sortBy, sortOrder)`
para ordenar datos según los parámetros especificados.
4. En `src/main.js`, llama a `sortData` con la `data`,
el campo para ordenar `sortBy`, y la dirección del orden
`sortOrder` (ascendente o descendente).
5. En `src/dataFunctions.js`, verifica la función
con `console.log` para confirmar los valores.
6. Realiza una copia de data, ejecuta el método `sort`
y retorna el nuevo arreglo ordenado.
7. En `src/main.js`, usa el resultado en
`renderItems` para mostrar la data ordenada.
8. [Aplica estilos al `select` recién creado](#estilos)

> [!TIP]
> [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
> Hacer una copia del
> array antes de ordenarlo en JavaScript es crucial para
> evitar modificaciones no deseadas. El método `sort()`
> altera directamente el array original, por lo que crear
> una copia previa garantiza la preservación del estado
> original del array.

### Test de la función ordenar

Realiza los test; ahora que tienes la función de
ordenar funcionando, escribe los tests. Puedes usar esta
[lista de reproducción en YouTube](https://www.youtube.com/watch?v=gsTfbwfVvDE&list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg)
como referencia.

### Estilos

Asegúrate de posicionarlo adecuadamente, establecer un
[tamaño estándar](https://www.w3.org/TR/WCAG21/#target-size)
para que sea fácilmente pulsables y diferenciar
visualmente el llamado a la acción
[CTA](https://www.40defiebre.com/que-es/call-to-action).
Puedes utilizar propiedades como `width`, `height`, `margin`,
`padding`, y `font-size` para ajustar el tamaño y el
espacio, y `border`, `background-color`, y `color`
para darle un aspecto atractivo. Considera también la
posibilidad de utilizar estilos adicionales como sombras, bordes
redondeados para mejorar la apariencia y usabilidad o estilos
específicos para los estados `hover` y `focus` para mejorar la
interactividad

### Test OAS

Comprueba el estado de los tests;
este es un momento propicio para ejecutarlos
y realizar ajustes en aquellas secciones del
código que sean necesarios. Aunque es probable que algunos tests aún no den resultado
positivo, es crucial abordar cualquier problema
identificado con el fin de asegurar la solidez y exactitud del código.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
```

[👈Todos los hitos](../README.md#6-hitos)
