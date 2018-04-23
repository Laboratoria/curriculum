# Funciones

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `45min`

***

<iframe src="https://goo.gl/hsqvjb" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

Veremos en profundidad el tema de funciones, aprovechando que JavaScript está
fuertemente influenciado por la programación funcional desde su diseño, y nos
ofrece características importantes como asignar funciones a una variable, pasar
como parámetro de otra función, cambiar el scope de variables, asignar como
valor de una propiedad de un objeto, etc.

Las funciones son bloques de construcción de aplicaciones que engloban múltiples
sentencias de código. Son particularmente importantes en JavaScript porque
soporta características como `first-class functions`, `functions as objects`,
`runtime function definition` y más que veremos en esta lección.

A continuación, se listan algunos principios que te ayudarán a escribir mejores
funciones:

* **Don't Repeat Yourself (DRY)**: Es muy común que a lo largo del desarrollo de
  una solución nos encontremos con un patrón que se va repitiendo a lo largo de
  nuestro código. Una vez identificado un patrón, es tiempo de escribir una
  función, objeto o módulo que encapsule dicho patrón para que sea fácilmente
  reusable. Esto ayuda también a que si encontramos algún bug o quisiéramos
  agregar funcionalidad, solo se tendría que hacer en un lugar. Además,
  escribiendo una función reusable te obliga a aislar el patrón del problema, lo
  cual ayuda a tener funcionalidad relacionada de manera agrupada.

* **Do One Thing (DOT)**: Cada función debe hacer solo una cosa y hacerlo lo
  mejor posible. Siguiendo este principio hará tu función más reusable, legible y
  fácil de depurar.

* **Keep It Simple Stupid (KISS)**: Si bien las funciones deben de hacer solo
  una cosa, es mejor hacerlo súper claro manteniendo la sencillez y no agregando
  complejidad innecesaria para llevar a cabo una solución. Esto no quiere decir
  que la solución no sea óptima, sino que pueda ser legible para poder mantenerla
  a lo largo del tiempo.

* **Less Is More**: Para alcanzar la mayor legibilidad posible y reducir la
  tentación de hacer más de una cosa, las funciones deben ser tan cortas como sea
  posible. Si la función se vuelve muy extensa, es bueno considerar separarlo en
  subtareas y datos a lo largo de funciones y objetos.

***

## Definiendo una función

La definición de una función es simplemente la definición de una variable
regular donde el valor dado a dicha variable resulta ser una función. Por
ejemplo, el siguiente código define la variable `square` para referirse a la
función que devuelve el cuadrado de un número dado:

```js
  var square = function(x) {
    return x * x;
  };

  console.log(square(12));
  // -> 144
```

***

Funciones son valores que pueden ser llamados. Una manera de definir una función
es llamada una `function declaration` o `declaración de función`. Por ejemplo,
el siguiente código define una función `id` que tiene un simple parámetro `x`:

```js
function id(x) {
  return x;
}
```

La sentencia `return` retorna un valor de la función `id`. Puedes llamar una
función a través de su nombre, seguido de sus `argumentos` entre paréntesis:

```js
// `>` simula el prompt que aparece en la consola del navegador
> id('hello');
'hello'
```

Si no se retorna nada de la función `undefined` es retornado (implícitamente):

```js
> function f() { }
> f();
undefined
```

Esta sección mostró solo una manera de definir y llamar una función. Otras
formas serán mostradas luego.

## Los 3 roles de funciones en JavaScript

Una vez definida una función, esta puede desarrollar diversos roles:

### Nonmethod function (función normal)

Puedes llamar a una función directamente como visto hace un momento. Acá un
ejemplo de invocación:

```js
id('hello');
```

Por convención, los nombres de estas funciones _normales_ empiezan con minúscula
siguiendo el estilo **lowerCamelCase**.

### Constructor

Puedes invocar una función a través del operador `new`. Es usado para la
creación de objetos. Aquí un ejemplo de invocación:

```js
new Date();
```

Por convención, los nombres de los constructores empiezan con mayúscula,
siguiendo el estilo **UpperCamelCase**.

### Método

Puedes almacenar una función en una propiedad de un objeto, lo que lo convierte
en un _método_. Aquí un ejemplo de como invocar un método definido en un objeto
`obj`:

```js
obj.method();
```

Por convención, los nombres de los métodos siguen el estilo de las funciones
normales (_lowerCamelCase_).

## Terminología: "Parámetro" vs. "Argumento"

Los términos `parámetro` y `argumento` son a menudo usados para referirse a lo
mismo ya que se logra enteder a lo que se refiere. Sin embargo, a continuación
se muestra una regla para diferenciarlos:

* **Parámetros** son usados para definir una función. En el siguiente ejemplo,
  `param1` y `param2` son parámetros:

  ```js
  function foo(param1, param2) {
    // ...
  }
  ```
* **Argumentos** son usados para invocar una función. En el siguiente ejemplo,
  `3` y `7` son argumentos:

  ```js
  foo(3, 7);
  ```

## Definición de Funciones

En esta sección veremos 3 formas de crear una función:

* Mediante un _function expression_ (función como expresión).
* Mediante un _function declaration_ (declaración de una función).
* Mediante el constructor `Function()`.

Todas las funciones son objetos, instancias de `Function`:

```js
function id(x) {
  return x;
}

console.log(id instanceof Function); // true
```

Por lo tanto, las funciones obtienen sus métodos de `Function.prototype`.

### Function Expressions

Un _function expression_ produce un valor - un objeto de función. Por ejemplo:

```js
var add = function(x, y) {
  return x + y;
};

console.log(add(2, 3)); // 5
```

El código anterior asigna el resultado de una función como expresión a la
variable `add` y puede ser llamado a través de esta variable. En este tipo de
función se puede asignar una función a una variable, pasar como parámetro de
otra función y más. Debido a que este tipo de funciones no tienen un nombre,
pueden ser llamadas _anonymous function expressions_ (funciones anónimas).

#### Named Function Expressions

Se puede poner nombre a una función como expresión. Los _named function
expressions_ (funciones como expresión con nombre) permiten a la función poder
referirse a si misma, su utilidad se ve reflejada cuando se desea aplicar
recursividad por ejemplo:

```js
var factorial = function fact(number) {
  if (number <= 1) {
    return 1;
  }
  return number * fact(number - 1);
};

console.log(factorial(3)); // 6
```

**Nota:** Los nombres de las funciones como expresión con nombre solo son
accesibles dentro de la función:

```js
var repeat = function me(n, str) {
  return n > 0 ? str + me(n-1, str) : '';
};

console.log(repeat(3, 'Yeah')); // YeahYeahYeah
console.log(me); // ReferenceError: me is not defined
```

### Function Declarations

La siguiente es una declaración de función:

```js
function add(x, y) {
  return x + y;
}
```

El código anterior se parece al de una función como expresión, pero es una
sentencia. De cierta forma, es equivalente al siguiente código:

```js
var add = function(x, y) {
  return x + y;
};
```

En otras palabras, un _function declaration_ consiste de la palabra clave
reservada _function_, una lista de parámetros para la función, encerrados en
paréntesis y separados por comas, y la sentencia JavaScript que define la
función, encerrada por llaves.

### Function Constructor

El constructor `Function()` evalua código JavaScript almacenado en strings. Por
ejemplo, el siguiente código es equivalente a los ejemplos anteriores:

```js
var add = new Function('x', 'y', 'return x + y');
```

Sin embargo, esta forma de definir una función es lenta y deja código en strings
(inaccesible a herramientas, por ejemplo, al depurar con _Dev Tools_). Por lo
tanto es mejor usar un _function expression_ o un _function declaration_ si es
posible.

## Hoisting

**Hoisting** significa "mover al inicio del ámbito". _Function declarations_ son
elevadas (_hoisted_) completamente, mientras las declaraciones de variables solo
parcialmente.

_Function declarations_ son completamente elevadas, esto permite llamar a una
función antes de que se hayan declarado:

```js
welcome(); // 'Welcome to CE - JS Deep Dive'
function welcome() { // esta función es elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
```

La razón por la cual el código anterior funciona es que el motor de JavaScript
mueve la declaración de la función `welcome` al inicio del scope. Termina
ejecutándose como si estuviera escrito de la siguiente manera:

```js
function welcome() { // esta función es elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
welcome(); // 'Welcome to CE - JS Deep Dive'
```

Las declaraciones de variables son elevadas también, pero solo las declaraciones
más no las asignaciones. Por lo tanto, definir una función como expresión
asignándola a una variable termina en un error en el ejemplo anterior:

```js
welcome(); // TypeError: undefined is not a function
var welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```

Solo las declaraciones son elevadas. El motor de JavaScript ejecuta el código
anterior como si estuviese escrito de la siguiente manera:

```js
var welcome; // undefined
welcome(); // TypeError: undefined is not a function
welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```

***

## Arrow Functions

### Diferencias entre arrow functions y funciones clásicas

Una de las novedades más interesantes de ES6 son las denominadas **funciones
flecha**, o *arrow functions*. Las funciones flecha son, como su
nombre indica, definidas mediante una nueva sintaxis que utiliza una "flecha"
(`=>`). Las funciones flecha se comportan de forma sensiblemente distinta a las
funciones tradicionales de JavaScript, a continuación alguna de sus diferencias:

* **No pueden llamarse con `new`**: Al no tener un método constructor, no pueden
  ser utilizadas como constructores. Las funciones flecha lanzarán un error
  cuando se utilicen con `new`.
* **No hay prototipo**: Al no disponer de constructor, tampoco es necesario un
  prototipo. Por lo tanto, no existirá la propiedad `prototype` en una función
  flecha.
* **No crean un nuevo contexto**. El valor de `this`, `super`, `arguments` y
  `new.target` dentro de la función será el mismo que el de la función
  tradicional (*non-arrow*) más cercana.
* **No puedes cambiar `this`**: El valor de `this` dentro de la función flecha
  permanece inmutable a lo largo de todo el ciclo de vida de la función.
* **No hay objeto `arguments`**: Tan solo es posible proporcionarle parámetros a
  una función flecha mediante parámetros nombrados y *rest parameters*.
* **No es posible duplicar parámetros con el mismo nombre**: Tanto en modo
  estricto como no estricto, a diferencia de las funciones clásicas, que no lo
  permiten tan solo en modo estricto.

### Sintaxis

El ejemplo más simple de *arrow function* es el siguiente, aunque veremos en
los ejemplos siguientes que existen diversas variaciones.

```js
// ES6
const echo = text => text;
```

Esta función sería equivalente a la siguiente:

```js
// ES5
var echo = function(text) {
  return text;
};
```

En ambos casos, la ejecución de la función daría la siguiente salida:

```js
console.log(echo('Hola Mundo!')); // Hola Mundo!
```

Como con cualquier función, podemos pasar tantos argumentos como queramos a la
función:

```js
const sum = (a, b) => a + b;
console.log(sum(1, 1)); // 2
```

O ninguno, claro:

```js
const greet = () => 'Hola, forastero!';
console.log(greet()); // Hola, forastero!
```

Si queremos realizar operaciones más complicadas, podemos hacerlo con llaves y
definiendo un valor de retorno:

```js
const resize = ({x, y}, ratio) => {
  return {
    x: x * ratio,
    y: y * ratio
  };
};

console.log(resize({x: 5, y: 15}, 100)); // { x: 500, y: 1500 }
```

Una función flecha no crea un nuevo contexto. Una de las mayores fuentes de
errores en JavaScript venía dada por la creación de distintos contextos en una
función dependiendo de quien las esté ejecutando. Tomemos el siguiente ejemplo:

```js
const randomWinner = function(drivers) {
  const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
  return drivers[winner];
};

const F1Race = {
  drivers: [
    'Alonso',
    'Vettel',
    'Button',
    'Massa'
  ],
  init: function() {
    console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    setTimeout((function() {
      console.log('El ganador es', randomWinner(this.drivers));
    }), 1000);
  }
};

F1Race.init();
```

`F1Race` es un objeto que lanza una carrera de Fórmula 1 mediante su función
`init()`. Al cabo de un segundo, se ejecutará la función `randomWinner()`, que a
partir de un array de conductores, seleccionará uno al azar.

Cuando ejecutamos la función `init()`, el programa escribe por consola lo
siguiente:

```text
Los siguientes pilotos van a comenzar la carrera: [ 'Alonso', 'Vettel', 'Button', 'Massa']
```

Esto es posible ya que la función `init` tiene como contexto el propio objeto
`F1Race`. Sin embargo, la función da error tras un segundo, mientras intenta
calcular el ganador de forma aleatoria. ¿Cómo es posible?

El motivo es que la función de callback que se le pasa a `setTimeout` crea un
nuevo contexto, en el que no existe el array drivers.

En ES5 podíamos solucionar este problema utilizando `bind(this)` para asignar
el contexto de la función de callback al del objeto que la contiene, de la
siguiente forma:

```js
init: function() {
  console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
  setTimeout((function() {
    console.log('El ganador es', randomWinner(this.drivers));
  }).bind(this), 1000);
}
```

Con ES2015, podemos solucionar este contratiempo utilizando arrow functions de
una forma mucho más elegante, ya que al no crear un nuevo contexto, `this`
siempre vendrá determinado por la función que lo contiene:

```js
init: function() {
  console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
  setTimeout(() => console.log('El ganador es', randomWinner(this.drivers)), 1000);
}
```
