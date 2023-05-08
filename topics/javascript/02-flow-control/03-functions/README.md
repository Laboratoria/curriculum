---
type: read
duration: 30min
---

# Funciones

## Objetivos

- Conocer el concepto de _Don't Repeat Yourself (DRY)_
- Entender qué son las funciones y cómo afectan el control de flujo de un
  programa
- Conocer la estructura de las funciones en JavaScript
- Entender cómo pasarle argumentos a una función
- Entender el concepto de `return` de las funciones

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en los
capítulos 2 y 3 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip), y del capítulo 8 de
[JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015;

## DRY

En la programación existe un concepto que escucharás más de una vez. Dice así:
_"Don't Repeat Yourself"_, y es comunmente conocido como `DRY`. En español
significa _"no te repitas"_. Si estás copiando y pegando pedazos de código, o si
tienes sentencias de código similares a lo largo de tu programa, significa que
te estás repitiendo. Ya hemos visto este concepto en práctica con el uso de
`estructuras repetitivas` (bucles): en lugar de tener un mismo bloque de código
repetido, puedes sustituirlo por un `for` o un `while`. Con las funciones puedes
alcanzar el mismo objetivo. Veamos qué son las `funciones`, cómo usarlas y por
qué son importantes.

## ¿Qué es una función?

Una función es una forma de agrupar código para que pueda ser reutilizado. Las
funciones nos permiten ejecutar la misma pieza de código en varios lugares de un
programa sin tener que copiar y pegar el código repetidamente. Dicho de otra
manera, una función es un **pedazo de programa envuelto en un valor**. Ese valor
puede ser "llamado" varias veces, en diferentes lugares de tu programa, para que
ejecute el código que tiene dentro.

A lo largo de este curso hemos venido utilizando funciones, solo que las venimos
llamando _"comandos"_. Los comandos como `alert()`, `prompt()` y `console.log()`
son realmente funciones.

## Funciones en JavaScript

Las funciones son el pan de cada día en la programación con JavaScript.

La aplicación más obvia de las funciones es la de definir un nuevo vocabulario.
Crear nuevas palabras en un lenguaje humano común (como el español o el inglés)
es típicamente algo de mal gusto. Sin embargo, en la programación es
indispensable.

Un adulto promedio tiene unas 20,000 palabras en su vocabulario. Pocos lenguajes
de programación tienen 20,000 comandos incorporados. Y el vocabulario que _sí_
está disponible tiende a ser definido de forma más precisa, y por ende menos
flexible, que en un lenguaje humano. En consecuencia, usualmente _tenemos_ que
añadir algo de nuestro propio vocabulario para evitar repetirnos demasiado.

Agrupando fragmentos de código en una función con un **nombre fácil de
entender** (dado que será parte del vocabulario que estás construyendo) podemos
estructurar mejor nuestro código. Esto porque nos enfocamos en organizar las
funciones, en lugar de cada línea de código que las componen. Al dividir nuestro
código en piezas más pequeñas - y por ende - más manejables, podemos tener una
mirada más completa de lo que estamos haciendo. Nos permite elevarnos a un nivel
superior de abstracción. Como dicen el refrán: podemos visualizar el bosque
completo, viendo más allá de los árboles.

## Definiendo una función

La definición de una función es simplemente una definición regular de una
variable, pero donde el valor dado a la variable es una función. Por ejemplo, el
siguiente código define la variable `square` para referirse a la _función_ que
produce el cuadrado de un número dado:

```js
const square = function (num) {
  return num * num;
};
```

La misma función usando la síntaxis de _función flecha_ (arrow function):

```js
const square = num => num * num;
```

Una función es creada por una expresión que empieza con el keyword `function`,
o alternativamente usando la síntaxis de _función flecha_. Las funciones tienen
un conjunto de _parámetros_ (en el ejemplo anterior solo tenemos **un**
parámetro: `num`) y un _cuerpo_, que contiene las sentencias a ser ejecutadas.
Los parámetros sirven para "pasarle" valores a la función y por ende, cambiar su
comportamiento según los valores brindados. Cuando declaramos una función usando
el _keyword_ `function` el cuerpo de la función tiene que estar siempre
encerrado en llaves, incluso cuando consista de una sola instrucción (como en el
ejemplo previo), mientras que en las funciones flecha podemos hacer _retorno
implícito_ cuando el cuerpo consta de solo una expresión (que será
implícitamente el valor de retorno).

## Llamando una función

Para correr el código dentro de una función, necesitamos _"invocar, llamar, o
aplicar"_ la función. Esto se hace escribiendo el nombre de la función
inmediatamente seguido por unos paréntesis `()`. Dentro de los paréntesis se
incluye lo que le quieres "pasar" a la función para usar como parámetro. Los
valores que se pasan a la función para usar como parámetros son llamados
_argumentos_.

Agregando al ejemplo anterior un llamado a la función `square` pasando como
argumento el valor `12` vemos que nos devuelve `144` (es decir, 12 al cuadrado).

```js
const square = function (num) {
  return num * num;
};

square(12);
// → 144
```

## El valor de retorno

Así como los argumentos son los valores de "entrada" (input) que utiliza una
función al ser llamada, el valor de retorno es el valor de salida (output) que
devuelve la función (el `144` del ejemplo anterior), y que puede ser utilizado
en cualquier lugar del programa. Si una función no especifica el valor de
retorno, entonces, la función retorna `undefined`.

El valor de retorno se especifica con el _keyword_ `return`. En el ejemplo
anterior, se especifica que el valor de retorno es el parámetro multiplicado por
sí mismo; es decir, el parámetro al cuadrado. El keyword `return` sin una
expresión después de él, también hará que la función devuelva `undefined`.

Agreguemos una sentencia adicional al ejemplo anterior en la que se utilice el
valor de retorno de la función `square`:

```js
const square = function (num) {
  return num * num;
};

console.log('El cuadrado de 12 es ' + square(12));
// → El cuadrado de 12 es 144
```

Con esta modificación sucede lo siguiente: el valor de retorno que se obtiene al
llamar (o invocar) la función `square` con el valor `12` de argumento es: `144`.
Éste se concatena con el texto `'El cuadrado de 12 es '` para formar
`'El cuadrado de 12 es 144'`; lo cual, a su vez, se pasa como argumento a la
función `console.log` para que lo imprima en la consola.

## Múltiples parámetros

Una función puede tener varios parámetros o puede no tener ninguno. En el
siguiente ejemplo `makeNoise` no tiene parámetros, mientras que `power` tiene
dos:

```js
const makeNoise = function () {
  console.log('Pling!');
};

makeNoise();
// → Pling!

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```

A continuación Michelle te explica funciones con un ejemplo del libro JavaScript
for Kids.

[![ejercicio guiado JS for Kids pg 128 funcion de imprimir caras](https://img.youtube.com/vi/Y0NgsjdumS8/0.jpg)](https://www.youtube.com/watch?v=Y0NgsjdumS8)

## Saliendo de una función con `return`

Cuando el intérprete JavaScript se topa con un `return` dentro de una función,
inmediatamente salta fuera de la función actual y pasa el valor retornado al
código que la llamó. Es decir, cualquier sentencia que coloquemos **después**
del `return` en una función, **no** será ejecutada.

Una forma común de utilizar `return` es para salir de la función de manera
temprana si alguno de los argumentos brindados no son válidos; es decir, si no
son el tipo de argumentos que la función necesita para funcionar correctamente.
Por ejemplo, la siguiente función devuelve una cadena que indica el quinto
caracter de tu nombre. Si el nombre pasado a la función tiene menos de cinco
caracteres, la función utiliza `return` para dejar la función inmediatamente.
Esto significa que la declaración de devolución al final, que te dice la quinta
letra de tu nombre, nunca se ejecuta.

```js
const fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return 'La quinta letra de tu nombre es ' + name[4] + '.';
};
```

## Funciones y control de flujo

Las funciones también afectan el control de flujo de nuestro programa. Con
funciones podemos crear estructuras repetitivas (con algo que se llama
`recursividad`) y estructuras condicionales (con, por ejemplo, múltiples valores
de `return`). De hecho, las funciones son tan versátiles para armar la
estructura de un programa que existe todo un _paradigma de programación_ basado
en funciones. Es decir, existe toda una manera de pensar en la programación
basada en funciones. Esto se llama el **paradigma de programación funcional**.
Más adelante estudiaremos a mayor profundidad funciones y el paradigma de
programación funcional. Por ahora, lo importante es entender que las funciones
son una forma de agrupar código para que pueda ser reutilizado.

Veamos un ejemplo de crear una estructura condicional con funciones:

## Utilizando múltiples `return` en lugar de `if... else`

Podemos usar varios `return` dentro de diferentes sentencias `if` en el cuerpo
de una función para que la función devuelva un valor diferente, dependiendo del
argumento brindado. Por ejemplo, digamos que estás escribiendo un juego que
otorga medallas a los jugadores basándose en su puntuación. Una puntuación menor
a 3 es una medalla de bronce, una puntuación de 7 o más es oro, y lo que está en
el medio es plata. Podrías utilizar una función como `medalForScore` para
evaluar una puntuación y devolver el tipo de medalla, como se muestra aquí:

```js
const medalForScore = function (score) {
  if (score < 3) {
    return 'Bronze';
  }
  if (score < 7) {
    return 'Silver';
  }
  return 'Gold';
};
```

Aunque estamos comprobando múltiples condiciones, no necesitamos usar sentencias
`if ... else` encadenadas. Utilizamos las sentencias `if ... else` para
garantizar que sólo una de las sentencias se ejecute. Sin embargo, cuando cada
una de las opciones tiene su propia sentencia de `return`,  garantizamos que se
ejecute sólo una de las opciones --- porque, recuerda, **las funciones sólo
pueden devolver una vez**.
