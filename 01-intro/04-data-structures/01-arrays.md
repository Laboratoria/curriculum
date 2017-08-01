# Arreglos
- Formato: `lectura`
- Duración: `30min`

## Objetivos de Aprendizaje

- Aprender qué son `arrays` y para qué sirven
- Aprender a manipular `arrays`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 4 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](http://hectorip.github.io), y del capítulo 3 de [JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf), Nick Morgan, 2015;

***

## Agrupando y manipulando data
Como hemos visto, gran parte de la programación consiste en agrupar y manipular data. Esto nos permite transformar datos en información y utilizar esa información para resolver problemas. Hasta ahora hemos podido agrupar y manipular data haciendo uso de tipos de datos simples como: `numbers`, `booleans` y `strings`. Sobre ellos hemos creado una serie de programas sencillos. Sin embargo, aun cuando hemos aprendido a modificar el control de flujo de estos programas - con el uso de `estructuras repetitivas`, `estructuras condicionales` y `funciones` - nuestros programas han estado seriamente limitados debido al hecho de que estaban operando únicamente con **tipos de datos simples**. Es decir, para resolver problemas más complejos necesitamos poder agrupar y manipular data de una manera más interesante. Afortunadamente, un entorno JavaScript nos permite lograr esto brindándonos los `arrays` y los `objects`.

## ¿Por qué necesitamos `arrays`?
Digamos, como un pequeño ejemplo, que queremos representar una colección de números: 2, 3, 5, 7 y 11.

Podríamos ponernos creativos usando cadenas; después de todo, las cadenas pueden ser de cualquier longitud, así que podemos poner mucha información en ellas; y usar `"2 3 5 7 11"` como nuestra representación. Pero esto es incómodo. De alguna forma tendrías que extraer los dígitos y convertirlos de vuelta a números para acceder a ellos.

Afortunadamente, Javascript proporciona un tipo de dato específico para almacenar secuencias de valores. Se le llama arreglo (array) y se escribe como una lista de valores entre corchetes, separados por comas.

```js
var listaDeNumeros = [2, 3, 5, 7, 11];
console.log(listaDeNumeros[1]);
// → 3
console.log(listaDeNumeros[1 - 1]);
// → 2
```

La notación para obtener los elementos dentro de un arreglo también utiliza corchetes. Un par de corchetes inmediatamente después de una expresión, con otra expresión dentro de los corchetes, buscará el elemento en la expresión de la izquierda que corresponda al índice dado por la expresión en corchetes.

El primer índice de un arreglo es cero, no uno. Así que el primer elemento puede leerse usando listaDeNumeros[0]. Si no tienes antecedentes en programación, acostumbrarte a esta convención puede tomarte algún tiempo. Pero el conteo con base cero tiene una larga tradición en tecnología y mientras la convención se siga de manera consistente (que se ha hecho en Javascript), funciona bien.


For example, if your friend asked you what ...:

```js
var myTopThreeDinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus"];
```

So instead of giving your friend three separate strings, you can just use the single array myTopThreeDinosaurs.

It’s like if you had a shopping list, but every item was on a different piece of paper. You’d have one piece of paper that said “eggs,” another piece that said “bread,” and another piece that said “oranges.” Most people would write the full list of things they want to buy on a single piece of paper. Wouldn’t it be much easier if you could group all nine dinosaurs together in just one place?

You can, and that’s where arrays come in.

## Creando `arrays`

## Accediendo información de un `array`

## Manipulando `arrays`

- `.length`
- `.push()`
- `.shift()`
- `.unshift()`
- `.pop()`
- `.concat()`
- `.indexOf()`
- `.join()`
- `.slice()`
- `.lastIndexOf()`
- `.trim()`
