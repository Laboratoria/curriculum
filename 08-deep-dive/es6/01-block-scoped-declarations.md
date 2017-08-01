# Introduccion ES6- Syntax

* Introduccion ES6

## Block-Scoped Declarations

## Diferencia entre contexto y alcance

Cada invocación de función tiene tanto un alcance como un contexto asociados a ella. Fundamentalmente, el alcance es un concepto asociado a funciones mientras que el contexto está asociado a objetos. En otras palabras, el alcance se refiere a la accesibilidad de variables de una función cuando es invocada y es único a cada invocación. En cambio, el contexto es siempre el valor de `this` cuya referencia es siempre el objeto que está ejecutando el código.

### Alcance de variables

Las variables pueden ser declaradas con **alcance local** o **alcance global**, lo cual establece su accesibilidad desde diferentes alcances en tiempo de ejecución. Cualquier variable definida como global será accesible en tiempo de ejecución por cualquier alcance, ya que se habrá declarado fuera del cuerpo de una función.

En cambio, las variables locales existen solamente dentro del cuerpo de una función. El alcance local de una variable solo se define a partir del cuerpo de la función que la contiene, ya que JavaScript hasta ahora no permitía definir un alcance local dentro de una condición `if`, bloques `switch`, o iteraciones `for` y `while`.

### Qué es el contexto `this`
El contexto casi siempre viene determinado por la forma en que una función es invocada. Cuando se llama a la función como método de un objeto, `this` se asigna al objeto cuyo método está siendo ejecutado:

```javascript
var obj = {
  foo: function() {
    console.log(this === obj);
  }
};

obj.foo(); // true
```

El mismo principio se aplica cuando invocamos una función con el operador `new` para crear una instancia del objeto. Cuando se invoca de esta manera, el valor de `this` dentro del alcance de la función se asignará a la nueva instancia creada:

```javascript
function foo() {
  console.log(this);
}

foo(); // window (if node, global)
new foo(); // foo
```

## Hoisting: Lidiando con el contexto en ECMAScript 5

Tomemos como ejemplo la siguiente función en ES5:

```javascript
(function() {
    console.log(x); // x no está definida aún.
    if(true) {
        var x = 'hola mundo';
    }
    console.log(x);
    // Imprime "hola mundo", porque "var" hace que la variable sea global a la función
})();
```

Uno de los mayores problemas a los que nos hemos enfrentado siempre los desarrolladores de JavaScript es el conocido como **hoisting** ("elevación"). El término *hoisting*, el cual no está definido dentro del actual ECMAScript, es comúnmente utilizado para describir el particular comportamiento que JavaScript hace de las variables en el interior de las funciones.

Se entiende como *hoisting* el comportamiento por defecto de cualquier intérprete de JavaScript, que ubica cualquier variable declarada al comienzo de su contexto.

Dicho funcionamiento ha sido ampliamente discutido por la comunidad de desarrolladores sobre si se trataba de un *bug* o una *feature*. Por citar un ejemplo, **John Resig**, creador de **jQuery**, es un poderoso aliado a la hora de gestionar el alcance nuestras variables. Sin embargo hay otros que pensamos que se trata de una fuente irremediable de inconsistencias en nuestros códigos y errores potenciales difíciles de diagnosticar.

Por ejemplo, observemos el siguiente código:

```javascript
function foo(){
    bar();
    var x = 1;
}
```

Cuando dicho código pase a ser tratado por un intérprete de JavaScript, se convertirá en lo siguiente:

```javascript
function foo(){
    var x;
    bar();
    x = 1;
}
```

Algo que podría parecer trivial, puede llegar a ocasionar comportamientos no esperados:

```javascript
var x = 'Hello World'; // variable global

(function foo() {
 console.log(x); // esperamos el valor global
 var x = 'New Value'; // redefinimos la variable en contexto local
 console.log(x);  // esperamos el nuevo valor local
})();
```

En el ejemplo anterior, declaramos la variable `x` en el contexto global. Dentro de la función `foo()`, se define un nuevo contexto, local a la función declarada. En la primera sentencia esperamos que la consola imprima `Hello World`, para después re-definir el valor de `x` y volverla a imprimir por consola, esta vez con el nuevo valor: `New Value`. Sin embargo, lo que ocurre es lo siguiente:

```terminal
> undefined
> New Value
```

¿Qué ha ocurrido? Por qué el intérprete imprime un `undefined` en lugar del esperado `Hello World`?

La respuesta, como te imaginarás, es el **hoisting**. Al crear un nuevo contexto de función, la declaración de la variable se eleva hasta el inicio del nuevo contexto, quedando la función tal que así:

```javascript
var x = 'Hello World';

(function foo(){
 var x;
 console.log( x );
 x = 'New Value';
 console.log( x );
})();
```

Como ves, `x` se *define* antes de la primera impresión por consola, sobrescribiendo el valor asignado en contexto global. Sin embargo, no es hasta después del primer `console.log` cuando se le asigna el nuevo valor.

Esto, como imaginarás, genera todo tipo de inconsistencias en el código de aplicaciones complejas que obligan a pensar dos veces dónde declarar y asignar valores a nuestras variables.

Por este motivo, se dice que es una buena práctica declarar las variables al principio del contexto, ya que así además incrementamos la legibilidad del código.

## Declaración de variables de ámbito local: `let`

La sentencia `let` declara una variable de alcance local, la cual, opcionalmente, puede ser inicializada con algún valor.

El alcance de `let` es local al bloque, declaración o expresión donde se está usando. Lo anterior diferencia la expresión `let` de la palabra reservada `var`, la cual define una variable global o local en una función sin importar el ámbito del bloque.

Veamos algunos ejemplos:

```javascript
if(x > y) {
    let gamma = 12.7 + y;
    i = gamma * x;
}
```

En el ejemplo anterior, `gamma` solo existe dentro del bloque del `if`.

```javascript
for(let i = 0; i < students.length; i++){
    console.log(students[i].name);
}
```

Podemos utilizar `let` para que la variable sea local al alcance del bucle `for`. Si en su lugar usáramos `var`, la variable sería visible en toda la función que contiene dicho bucle.

```javascript
(function() {
    if(true){
        let x = 'hola mundo';
    }
    console.log(x);
    // Da error, porque "x" ha sido definida dentro del "if"
})();
```

A diferencia de ECMAScript 5, en ESCMAScript 6 el bloque de una sentencia condicional también actúa como ámbito de bloque. En el ejemplo `console.log(x)` no tiene acceso a `let x = "hola mundo"`.

En el siguiente ejemplo la consola imprime `Hola Dani`, ya que la variable `x` en el bloque del `if` se mantiene dentro de su ámbito.

```javascript
(function() {
    let x = 'Hola Dani';

    if(true) {
        let x = 'Hola Joan';
    }
    console.log(x);
    // Imprime en consola Hola Dani
})();
```

En el ejemplo anterior, la sentencia `console.log` da error, porque `x` ha sido definida dentro del bloque `if`.

# Variables de solo lectura: `const`

Las variables de solo lectura son otra de las novedades de ECMAScript 2015, mediante la introducción de la nueva palabra reservada `const`. Cualquier variable declarada como constante, será de solo lectura y su valor no podrá ser modificado.

Veamos un ejemplo:

```javascript
(function(){
    const HELLO = 'hello world';
    HELLO = 'hola mundo';
    // Dará ERROR, ya que es de sólo lectura
})();
```

En este ejemplo vemos cómo desde el momento en que declaramos la constante `HELLO`, su valor queda blindado y el intérprete lanzará error al tratar de modificarlo.

```javascript
(function() {
    const PI;
    PI = 3.15;
    // Dará ERROR, ya que ha de asignarse un valor en la declaración
})();
```

Pero, ¿qué pasa cuando la variable no se asigna a un valor, sino a un objeto? Veámoslo con un ejemplo:

```javascript
const USER = {
  name: 'Caro',
  surname: 'Covarrubias',
  age: 20
};

USER.name = 'Joan'; // works, as we are modifying a property, but the object remains intact
USER.age = 'veinte'; // modifying a property type also works
// USER = 'Caro Covarrubias'; // fails, since the const type can't be modifyied

console.log(USER);
```





* let Declarations
* const Declarations
* lock-scoped Functions
* Spread/Rest (ES6 introduces a new ... operator that's typically referred to as the spread or rest operator, depending on where/how it's used. Let's take a look:)
* Arrow Functions
* Default Parameter Values
* Default Value Expressions
* Destructuring
* Object Property Assignment Pattern



