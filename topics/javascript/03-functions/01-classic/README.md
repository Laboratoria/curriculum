---
type: read
duration: 20min
---

# Funciones clásicas

## Definiendo una función

La definición de una función es simplemente la definición de una variable
regular donde el valor dado a dicha variable resulta ser una función. Por
ejemplo, el siguiente código define la variable `square` para referirse a la
función que devuelve el cuadrado de un número dado:

```js
const square = function (x) {
  return x * x;
};

console.log(square(12)); // => 144
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
id('hello'); // => 'hello'
```

Si no se retorna nada de la función `undefined` es retornado (implícitamente):

```js
function f() {}
f(); // => undefined
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

console.log(id instanceof Function); // => true
```

Por lo tanto, las funciones obtienen sus métodos de `Function.prototype`.

### Function Expressions

Un _function expression_ produce un valor - un objeto de función. Por ejemplo:

```js
const add = function (x, y) {
  return x + y;
};

console.log(add(2, 3)); // => 5
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
const factorial = function fact(number) {
  if (number <= 1) {
    return 1;
  }
  return number * fact(number - 1);
};

console.log(factorial(3)); // => 6
```

**Nota:** Los nombres de las funciones como expresión con nombre solo son
accesibles dentro de la función:

```js
const repeat = function me(n, str) {
  return n > 0 ? str + me(n - 1, str) : '';
};

console.log(repeat(3, 'Yeah')); // => YeahYeahYeah
console.log(me); // => ReferenceError: me is not defined
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
const add = function (x, y) {
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
const add = new Function('x', 'y', 'return x + y');
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
welcome(); // => 'Welcome to Laboratoria'
function welcome() { // esta función es elevada - hoisting
  console.log('Welcome to Laboratoria');
}
```

La razón por la cual el código anterior funciona es que el motor de JavaScript
mueve la declaración de la función `welcome` al inicio del scope. Termina
ejecutándose como si estuviera escrito de la siguiente manera:

```js
function welcome() { // esta función es elevada - hoisting
  console.log('Welcome to Laboratoria');
}
welcome(); // => 'Welcome to Laboratoria'
```

Las declaraciones de variables son elevadas también, pero solo las declaraciones
más no las asignaciones. Por lo tanto, definir una función como expresión
asignándola a una variable termina en un error en el ejemplo anterior:

```js
welcome(); // TypeError: undefined is not a function
const welcome = function welcome() {
  console.log('Welcome to Laboratoria');
};
```

Solo las declaraciones son elevadas. El motor de JavaScript ejecuta el código
anterior como si estuviese escrito de la siguiente manera:

```js
let welcome; // undefined
welcome(); // TypeError: undefined is not a function
welcome = function welcome() {
  console.log('Welcome to Laboratoria');
};
```
