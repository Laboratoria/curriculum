# Scope

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

## Background

Para el resto de la lección, es necesario tener claro los siguientes conceptos:

### El `scope` de una variable

El `scope` de una variable son las ubicaciones desde donde puede ser accedida.
Por ejemplo:

```js
function foo() {
  var x;
}
```

Aquí, el _direct scope_ (ámbito directo) de `x` es la función `foo`. Esta
variable podrá ser accedida desde dentro del cuerpo de la función `foo`, pero no
fuera de ella.

Tradicionalmente, en JavaScript solo podíamos crear un nuevo scope o ámbito
creando una nueva función. Más adelante en esta lectura veremos cómo `let` y
`const` introducen el concepto de _block sope_ en ES6.

### Lexical scoping

Las variables en `ES5` son _lexically scoped_ (de ámbito léxico), así que la
estructura estática de un programa determina el ámbito de la variable (no es
influenciada por dónde se invoca la función).

### Nested Scopes (ámbitos anidados)

Si el ámbito está anidado dentro del ámbito directo de una variable, la variable
será accesible en todos los ámbitos:

```js
function foo(arg) {
  function bar() {
    console.log(`arg: ${arg}`);
  }
  bar();
}

console.log(foo('hello')); // arg: hello
```

El ámbito directo de `arg` es `foo`, pero es también accesible del ámbito
anidado `bar`. Con respecto a la anidación, `foo` es el _outer scope_ (alcance o
ámbito externo) y `bar` es el _inner scope_ (alcance o ámbito interno).

### Shadowing (sombra)

Si un scope declara una variable que tiene el mismo nombre que otra en un scope
interno de una función, el acceso a la variable externa es bloqueado en el scope
interno y todos los scopes anidados dentro de ella. Cambios a la variable
interna no afecta a la variable externa, la cual es accesible nuevamente cuando
el scope interno es dejado. Ejemplo:

```js
var x = 'global';
function f() {
  var x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro de la función `f`, la variable `x` es sombreada por la variable local
`x`.

***

## Block-Scoped Declarations

Las declaraciones a nivel de bloque son aquellas que declaran variables
inaccesibles fuera de un ámbito de bloque determinado. Los ámbitos de bloque,
también llamados ámbitos léxicos, se crean:

1. Dentro de una función
2. Dentro de un bloque (indicado por los caracteres { })

## Diferencia entre contexto y alcance

Cada invocación de función tiene tanto un alcance como un contexto asociados a
ella. Fundamentalmente, el alcance es un concepto asociado a funciones mientras
que el contexto está asociado a objetos. En otras palabras, el alcance se
refiere a la accesibilidad de variables de una función cuando es invocada y es
único a cada invocación. En cambio, el contexto es siempre el valor de `this`
cuya referencia es siempre el objeto que está ejecutando el código.

### Alcance de variables

Las variables pueden ser declaradas con **alcance local** o **alcance global**,
lo cual establece su accesibilidad desde diferentes alcances en tiempo de
ejecución. Cualquier variable definida como global será accesible en tiempo de
ejecución por cualquier alcance, ya que se habrá declarado fuera del cuerpo de
una función.

En cambio, las variables locales existen solamente dentro del cuerpo de una
función. El alcance local de una variable solo se define a partir del cuerpo de
la función que la contiene, ya que JavaScript hasta ahora no permitía definir un
alcance local dentro de una condición `if`, bloques `switch`, o iteraciones
`for` y `while`.

## Declaración de variables de ámbito local: `let`

La sentencia `let` declara una variable de alcance local, la cual,
opcionalmente, puede ser inicializada con algún valor.

El alcance de `let` es local al bloque, declaración o expresión donde se está
usando. Lo anterior diferencia la expresión `let` de la palabra reservada `var`,
la cual define una variable global o local en una función sin importar el ámbito
del bloque.

Veamos algunos ejemplos:

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

En el ejemplo anterior, `gamma` solo existe dentro del bloque del `if`.

```js
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

Podemos utilizar `let` para que la variable sea local al alcance del bucle
`for`. Si en su lugar usáramos `var`, la variable sería visible en toda la
función que contiene dicho bucle.

```js
(function () {
  if (true) {
    let x = 'hola mundo';
  }
  console.log(x);
  // Da error, porque "x" ha sido definida dentro del "if"
})();
```

A diferencia de ECMAScript 5, en ESCMAScript 6 el bloque de una sentencia
condicional también actúa como ámbito de bloque. En el ejemplo `console.log(x)`
no tiene acceso a `let x = "hola mundo"`.

En el siguiente ejemplo la consola imprime `Hola Ale`, ya que la variable `x` en
el bloque del `if` se mantiene dentro de su ámbito.

```js
(function () {
  let x = 'Hola Ale';

  if (true) {
    let x = 'Hola Joan';
  }
  console.log(x);
  // Imprime en consola Hola Ale
})();
```

En el ejemplo anterior, la sentencia `console.log` da error, porque `x` ha sido
definida dentro del bloque `if`.

## Variables de solo lectura: `const`

Las variables de solo lectura son otra de las novedades de ECMAScript 6,
mediante la introducción de la nueva palabra reservada `const`. Cualquier
variable declarada como constante, será de solo lectura y su valor no podrá ser
modificado.

Veamos un ejemplo:

```js
(function () {
  const HELLO = 'hello world';
  HELLO = 'hola mundo';
  // Dará ERROR, ya que es de sólo lectura
})();
```

En este ejemplo vemos cómo desde el momento en que declaramos la constante
`HELLO`, su valor queda blindado y el intérprete lanzará error al tratar de
modificarlo.

```js
(function () {
  const PI;
  PI = 3.15;
  // Dará ERROR, ya que ha de asignarse un valor en la declaración
})();
```

Pero, ¿qué pasa cuando la variable no se asigna a un valor, sino a un objeto?
Veámoslo con un ejemplo:

```js
const USER = {
  name: 'Caro',
  surname: 'Covarrubias',
  age: 20
};

/**
 * La siguiente sentencia:
 * Funciona, ya que estamos modificando una propiedad
 * pero el objeto queda intacto
 **/
USER.name = 'Joan';

USER.age = 'veinte'; // modificar el tipo de una propiedad también funciona

console.log(USER);

// Falla, ya que el tipo de dato de una constante no puede ser modificado
USER = 'Caro Covarrubias';
```
