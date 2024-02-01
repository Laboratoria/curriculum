# **HITO 3:** Filtrar y ordenar datos

Este hito tiene como objetivo lograr la filtración y
ordenación de la data. No olvides que es esencial seguir
la práctica de utilizar al menos una
[rama](https://www.atlassian.com/es/git/tutorials/comparing-workflows/feature-branch-workflow)
por hito o por característica.

## Tareas de este hito

- [Filtro](#filtro)
- [Test filtro](#test-filtro)
- [Ordenar](#ordenar)
- [Test ordenar](#test-ordenar)
- [Test OAS](#test-oas)

### Filtro

Como primer paso, vuelve las secciónes
[4. Funcionalidades](../README.md/#4-funcionalidades),
[5. Consideraciones técnicas](../README.md/#5-consideraciones-técnicas) y
[src/dataFunctions.js](../README.md/#srcdatafunctionsjs)
para obtener detalles sobre los elementos que debes utilizar y el nombre que debe tener la función para el filtro.

1. En el archivo HTML, crea un elemento `<select>`
que incluya los valores a ser utilizados para el filtrado.
1. En el archivo principal `src/main.js`, emplea algún selector
del DOM y manejador de eventos para seleccionar y vincular un evento al elemento `<select>`. Esto permitirá capturar el valor
seleccionado en el `<select>` de manera adecuada.
1. En `src/dataFunctions.js`, elimina el contenido de ejemplo
y crea la función `filterData(data, filterBy, value)` que se
encargará de realizar el filtrado de datos.
1. En `src/main.js`, invoca la función filterData y proporciona
como argumentos la `data`, el campo por el cual deseas realizar el
filtrado `filterBy`, y el valor específico `value` que deseas
filtrar.
1. Regresa a `src/dataFunctions.js` y verifica que tu función esté
recibiendo los valores; puedes hacerlo mediante un `console.log`.
1. Una vez que hayas confirmado los valores, realiza una copia del
parámetro `data`. Es una buena práctica no modificarla
directamente. Luego, ejecuta el método `filter` y retorna el nuevo
arreglo filtrado.
1. Una vez obtenido el valor de retorno en `src/main.js`, llama a la función encargada de mostrar la data `renderItems`, pasando como argumento el nuevo arreglo ya filtrado.
1. [Aplica estilos al `select` recién creado](#estilos)

> [!TIP]
> [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Test filtro

No dejes los tests para después; ahora que tienes la función de
filtrado funcional, realiza los tests. Puedes apoyarte en esta
[guía](./test.md)
como referencia.

### Ordenar

La función de ordenar `sortData` debe recibir datos, un campo de
referencia y la dirección del orden. Luego aplica el ordenamiento
con `sort` y devuelve el nuevo arreglo. Esto permite ordenar
dinámicamente la data según criterios específicos.

1. EEn el archivo HTML, crea un elemento `<select>` que tenga dos `<option>` con valores `"asc"` y `"desc"` para ordenar la data de forma ascendente y descendente, respectivamente.
1. En el archivo principal `src/main.js`, utiliza un selector del
DOM y un manejador de eventos para elegir y vincular un evento al
elemento `<select>`. Esto permitirá capturar eficientemente el valor seleccionado en el `<select>`.
1. En `src/dataFunctions.js`, crea la función `sortData(data, sortBy, sortOrder)`,
encargada de realizar el ordenamiento de datos.
1. En `src/main.js`, invoca la función `sortData` y proporciona
como argumentos la `data`, el campo por el cual deseas realizar el
ordenamiento `sortBy`, y la dirección del orden `sortOrder`
(ascendente o descendente).
1. Regresa a `src/dataFunctions.js` y verifica que la función esté recibiendo los valores; puedes hacerlo mediante un `console.log`.
1. Una vez confirmados los valores, realiza una copia del
parámetro `data`. Es una buena práctica no modificarla
directamente. Luego, ejecuta el método `sort` y retorna el nuevo
arreglo ordenado.
1. Una vez obtenido el valor de retorno en `src/main.js`, llama a la función encargada de mostrar la data `renderItems`, pasando como argumento el nuevo arreglo ya ordenado.
1. [Aplica estilos al `select` recién creado](#estilos)

> [!TIP]
> [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### Test ordenar

Realiza los test; ahora que tienes la función de
ordenar funcionando, escribe los tests. Puedes usar esta
[guía](./test.md)
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
