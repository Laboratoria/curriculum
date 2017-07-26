# Funciones
- Formato: `lectura`
- Duración: `30min`

## Objetivos

- Conocer el concepto de _Don't Repeat Yourself (DRY)_
- Entender qué son las funciones y cómo afectan el control de flujo de un programa
- Conocer la estructura de las funciones en JavaScript
- Entender cómo pasarle argumentos a una función
- Entender el conepto de `return` en las funciones

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](http://hectorip.github.io).

***

## DRY
En la programación existe un concepto que dice: Don't Repeat Yourself, conocido como DRY. En español esto significa no te repitas. Si estás copiando y pegando pedazos de código, o si tienes sentencias de código repetidas multiples veces, significa que hay una mejor manera de hacerlo. Ya viste este concepto con bucles; en lugar de tener un mismo bloque de código repetido, puedes sustituirlo por una estructura repetitiva. Con funciones puedes hacer algo similar para no repetirte. Veamos qué son las `funciones` y cómo usarlas.

## ¿Qué es una función?
Una función es una forma de agrupar código para que pueda ser reutilizado. Las funciones nos permiten ejecutar la misma pieza de código en varios lugares de un programa sin tener que copiar y pegar el código repetidamente. Dicho de otra manera, una función es un pedazo de programa envuelto en un valor. Ese valor puede ser "llamado" varias veces, en diferentes lugares de tu programa, para que ejecute el código que tiene dentro.

A lo largo de este curso hemos venido utilizando funciones, solo que las venimos llamando _"comandos"_. Los comandos como `alert()`, `prompt()` y `console.log()` son realmente funciones.

## Funciones en JavaScript
Las funciones son el pan de cada día en la programación con JavaScript.

La aplicación más obvia de las funciones es la de definir un nuevo vocabulario. Crear nuevas palabras en un lenguaje humano común (como el español o el inglés) es típicamente algo de mal gusto. Sin embargo, en la programación es indispensable.

Un adulto promedio tiene unas 20,000 palabras en su vocabulario. Pocos lenguajes de programación tienen 20,000 comandos incorporados. Y el vocabulario que _sí_ está disponible tiende a ser definido de forma más precisa, y por ende menos flexible, que en un lenguaje humano. En consecuencia, usualmente _tenemos_ que añadir algo de nuestro propio vocabulario para evitar repetirnos demasiado.

Agrupando fragmentos de código en una función con un **nombre fácil de entender** (dado que será parte del vocabulario que estás construyendo) podemos estructurar mejor nuestro código. Esto porque nos enfocamos en organizar las funciones, en lugar de cada línea de código que las componen. Al dividir nuestro código en piezas más pequeñas - y por ende - más manejables, podemos tener una mirada más completa de lo que estamos haciendo. Nos permite elevarnos a un nivel superior de abstracción. Como dicen el refrán: podemos visualizar el bosque completo; viendo más allá de los árboles.

## Definiendo una función
La definición de una función es simplemente una definición regular de una variable, pero donde el valor dado a la variable es una función. Por ejemplo, el siguiente código define la variable `square` para referirse a la _función_ que produce el cuadrado de un número dado:

```js
var square = function(num) {
  return num * num;
};

```

Una función es creada por una expresión que empieza con el keyword `function`. Las funciones tienen un conjunto de _parámetros_ (en el ejemplo anterior solo tenemos **un** parámetro: `num`) y un _cuerpo_, que contiene las sentencias a ser ejecutadas. Los parámetros sirven para "pasarle" valores a la función y por ende, cambiar su comportamiento según los valores brindados. El cuerpo de la función tiene que estar siempre encerrado en llaves, incluso cuando consista de una sola instrucción (como en el ejemplo previo).

## Llamando una función
Para correr el código dentro de una función, necesitamos _"invocar, llamar, o aplicar"_ la función. Esto se hace escribiendo el nombre de la función inmediatamente seguido por unos paréntesis. Dentro de los paréntesis se incluye lo que le quieres "pasar" a la función para usar como parámetro. Los valores que se pasan a la función para usar como parámetros son llamados _argumentos_.

Agregando al ejemplo anterior un llamado a la función `square` pasando como argumento el valor `12` vemos que nos devuelve `144` (es decir, 12 al cuadrado).

```js
var square = function(num) {
  return num * num;
};

square(12);
// → 144
```

## El valor de retorno
Así como los argumentos son los valores de "entrada" (input) que utiliza una función al ser llamada, el valor de retorno es el valor de salida (output) que devuelve la función (el `144` del ejemplo anterior), y que puede ser utilizado en cualquier lugar del programa. Si una función no especifica el valor de retorno, entonces, la función retorna  `undefined`.

El valor de retorno se especifica con el _keyword_ `return`. En el ejemplo anterior, se especifica que el valor de retorno es el parámetro multiplicado por sí mismo; es decir, el parámetro al cuadrado. El keyword `return` sin una expresión después de él, también hará que la función devuelva `undefined`.

Agreguemos una sentencia adicional al ejemplo anterior en la que se utilice el valor de retorno de la función `square`:

```js
var square = function(num) {
  return num * num;
};

console.log("El cuadrado de 12 es " + square(12));
// → El cuadrado de 12 es 144
```

Con esta modificación sucede lo siguiente: el valor de retorno que se obtiene al llamar (o invocar) la función `square` con el valor `12` de argumento es: `144`. Éste se concatena con el texto `"El cuadrado de 12 es "` para formar `"El cuadrado de 12 es 144"`; lo cual, a su vez, se pasa como argumento a la función `console.log` para que lo imprima en la consola.

## Múltiples parámetros

Una función puede tener varios parámetros o puede no tener ninguno. En el siguiente ejemplo `makeNoise` no tiene parámetros, mientras que `power` tiene dos:

```js
var makeNoise = function() {
 console.log("Pling!");
};

makeNoise();
// → Pling!

var power = function(base, exponent) {
 var result = 1;
 for (var count = 0; count < exponent; count++)
   result *= base;
 return result;
};

console.log(power(2, 10));
// → 1024

```

A continuación Michelle te explica funciones con un ejemplo del libro JavaScript for Kids.

[![ejercicio guiado JS for Kids pg 128 funcion de imprimir caras](https://img.youtube.com/vi/QP9FF9eoh-k/0.jpg)](https://www.youtube.com/watch?v=QP9FF9eoh-k)

## Saliendo de una función con `return`

Cuando el intérprete JavaScript se topa con un `return` dentro de una función, inmediatamente salta fuera de la función actual y pasa el valor retornado a la código que llamó la función. Es decir, cualquier sentencia que coloquemos **después** del `return` en una función, **no** será ejecutada.

One common way to use
return is to leave a function early
if any of the arguments to the
function are invalid; that is, if
they’re not the kind of arguments
the function needs in order to run
properly. For example, the following
function returns a string
telling you the fifth character of
your name. If the name passed
to the function has fewer than
five characters, the function uses
return to leave the function immediately.
This means the return
statement at the end, which tells
you the fifth letter of your name,
is never executed.
```js
var fifthLetter = function (name) {
  if (name.length < 5) {
  return;
  }
  return "The fifth letter of your name is " + name[4] + ".";
};
```
## Utilizando múltiples `return` en lugar de `if... else`
We can use multiple return keywords
inside different if statements in a
function body to have a function
return a different value depending
on the input. For example, say you’re
writing a game that awards players
medals based on their score. A score
of 3 or below is a bronze medal, scores
between 3 and 7 are silver, and anything
above 7 is gold. You could use a
function like medalForScore to evaluate
a score and return the right kind of
medal, as shown here:

```js
var medalForScore = function (score) {
 if (score < 3) {
 return "Bronze";
 }
 if (score < 7) {
 return "Silver";
 }
 return "Gold";
};
```

Although we’re checking multiple conditions, we don’t need to
use chained if...else statements. We use if...else statements to
ensure that only one of the options is executed. When each of the
options has its own return statement, this also ensures that only
one of the options will be executed (because functions can return
only once).

***

[Continuar](03-structured-programming-paradigm.md)
