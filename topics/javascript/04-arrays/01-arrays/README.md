---
type: read
duration: 60min
---

# Arreglos

## Objetivos de Aprendizaje

- Aprender qué son `arrays` y para qué sirven
- Aprender a crear, acceder y modificar la información de un `array`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 4 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip), y del capítulo 3
de [JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015.

***

## Agrupando y manipulando data

Como hemos visto, gran parte de la programación consiste en agrupar y manipular
data. Esto nos permite transformar datos en información y utilizar esa información
para resolver problemas. Hasta ahora hemos podido agrupar y manipular data haciendo
uso de tipos de datos simples como: `numbers`,`booleans` y `strings`. Sobre ellos
hemos creado una serie de programas sencillos. También hemos aprendido a modificar
el control de flujo de estos programas, por medio de `estructuras repetitivas`,
`estructuras condicionales` y `funciones`, lo cual nos ha permitido crear productos
un poco más complejos. Sin embargo, nuestros programas han estado seriamente limitados
debido a que operan únicamente con **tipos de datos simples**. Para resolver problemas
más complejos necesitamos poder agrupar y manipular data de una manera más interesante.
Afortunadamente, un entorno JavaScript nos permite lograr esto brindándonos `arrays`
y `objects`.

## ¿Por qué necesitamos arrays?

Digamos, por poner un ejemplo, que queremos representar una colección de
números: `2, 3, 5, 7 y 11`.

Una opción para representar esto sería:

```js
const firstNumber = 2;
const secondNumber = 3;
const thirdNumber = 5;
const fourthNumber = 7;

```

Esta lista es bien extraña y engorrosa. Implica tener una variable para cada
elemento de nuestra lista. Cuando en realidad sólo deberíamos tener una sola
variable que "contenga" a cada una.¡Imagina que luego quieres tener una lista
de 1,000 elementos!

Otra opción -más creativa- sería utilizar un `string`. Después de todo, los
strings pueden ser de cualquier longitud, así que podemos poner mucha información
en ellos. Podríamos usar un `string` con los números intercalados por un
espacio, así:

```js
const listOfNumbers = '2 3 5 7 11';
```

Sin embargo, esto también resulta engorroso. Tendríamos que buscar la manera de
extraer cada elemento del `string` (contando los espacios entre ellos) y además,
tendríamos que convertirlos de vuelta a `number` para acceder y manipular cada
número de manera individual.

Afortunadamente, Javascript proporciona un tipo de dato específico para almacenar
secuencias de valores. Se llama `array` (arreglo en español) y se escribe como una
lista de valores entre corchetes, separados por comas.

```js
const listOfNumbers = [2, 3, 5, 7, 11];

```

Los `arrays` son tremendamente útiles para agrupar y manipular data. Es como
cuando vamos al mercado y tenemos nuestra "lista de compras". Podríamos tener
una hoja de papel para cada artículo que queremos comprar. Por ejemplo, podríamos
tener una hoja de papel que dice "huevos", otra hoja que dice "pan", y otra hoja
que dice "naranjas". Sin embargo, la mayoría de la gente escribe la lista completa
de cosas a comprar en **una sola hoja de papel**.

## Accediendo información de un array

Antes de comenzar, vamos a generar una pequeña función utilitaria,
que nos permita decir si dos string son iguales. La colocaremos
en el `prototype` de `Array`.

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

console.assert(equal([1, 2, 3], [1, 2, 3]));
console.assert(!equal([1, 2, 3], ['a', 'b', 'c']));
console.assert(!equal([1, 2, 3], [3, 2, 1]));

```

Para obtener un elemento dentro de un `array`, se utiliza la notación con corchetes,
con el _index_ (índice en español) del elemento que se desea. Veamos un ejemplo:

```js
listOfNumbers = [2, 3, 5, 7, 11];

console.assert(listOfNumbers[1] === 3);
console.assert(listOfNumbers[1 - 1] === 2);

```

El _index_ es el número que corresponde a (o que coincide con) el punto del `array`
donde se almacena el valor. Al igual que con los `strings`, el primer elemento
de un `array` está en el `index 0`, el segundo está en el `index 1`, el tercero
en el `index 2`, y así sucesivamente. Es por eso que pedir index `1 - 1`
(es decir, 0) del array anterior devuelve el número `2`.

![image](https://user-images.githubusercontent.com/211721/40194836-51eebf22-59d1-11e8-8de8-8b29feb3bbf7.png)

Si no tienes antecedentes en programación, acostumbrarte a esta convención puede
tomarte algún tiempo. Pero el conteo con base cero tiene una larga tradición en
tecnología y mientras la convención se siga de manera consistente (que se ha hecho
en Javascript), funciona bien.

## Definiendo o cambiando los elementos de un array

Podemos utilizar los _indexes_ entre corchetes para establecer, cambiar o incluso
agregar elementos a un `array`. Por ejemplo, para reemplazar el primer elemento del
array `listOfNumbers` por el número 1, podríamos hacer lo siguiente:

```js
listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers[0] = 1;

console.assert(
  equal(listOfNumbers, [1, 3, 5, 7, 11]),
);

```

También podemos utilizar los _indexes_ entre corchetes para agregar elementos en
un `array`. Por ejemplo, para agregar el número 13 al array `listOfNumbers`,
haríamos lo siguiente:

```js
listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers[5] = 13;

console.assert(
  equal(listOfNumbers, [2, 3, 5, 7, 11, 13]),
);

```

De hecho, podemos crear un `array` vacío y luego definir cada elemento de forma
individual, así:

```js
listOfNumbers = [];
listOfNumbers[0] = 2;
listOfNumbers[1] = 3;
listOfNumbers[2] = 5;
listOfNumbers[3] = 7;
listOfNumbers[4] = 11;

console.assert(
  equal(listOfNumbers, [2, 3, 5, 7, 11]),
);

```

## Mezclando tipos de datos en arrays

Los elementos de un `array` no tienen que ser todos del mismo tipo de dato.
Podemos, por ejemplo, tener un `array` que contenga un `number` (el número 3),
un `string` ("hola mundo") y otro `number` (el número 3627.5):

```js
const mixedArray = [3, 'hola mundo', 3627.5];
console.assert(mixedArray[0] === 3);
console.assert(mixedArray[1] === 'hola mundo');
console.assert(mixedArray[2] === 3627.5);

```

Inclusive podemos tener un `array` dentro de otro `array` (algo que mucha gente
llama arrays de 2 dimensiones). Por ejemplo, para organizar la data de preguntas
y respuestas de un quiz, podemos utilizar un `array` en el que cada elemento es,
a su vez, un `array` que tiene dos elementos: una pregunta y una respuesta.

```js
let questions = [
  ['¿En cuántos países opera Laboratoria?', 4],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso'],
];

```

Para acceder a elementos individuales de los arrays internos simplemente se añade
un nuevo par de corchetes con el index correspondiente. Por ejemplo, para obtener
la respuesta a la pregunta '¿Cuál es la moneda de México?' haríamos:

```js
questions = [
  ['¿En cuántos países opera Laboratoria?', 4],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso'],
];
console.assert(questions[3][1] === 'Peso');

```

Vamos a hacerlo de nuevo paso a paso

```js
questions = [
  ['¿En cuántos países opera Laboratoria?', 4],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso'],
];
const quest3 = questions[3];
console.assert(
  equal(quest3, ['¿Cuál es la moneda de México?', 'Peso']),
);
console.assert(quest3[1] === 'Peso');

```

A continuación Michelle nos explica los conceptos principales de `arrays` con un
ejemplo:

[![ejemplo array dinosaurios pg 44 JS for Kids](https://img.youtube.com/vi/-hLSzYr3z44/0.jpg)](https://www.youtube.com/watch?v=-hLSzYr3z44)
