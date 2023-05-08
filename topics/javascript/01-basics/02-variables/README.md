---
type: read
duration: 60min
---

# Variables

## Objetivos de Aprendizaje

- Aprender qué son _variables_ y su utilidad.
- Conocer las buenas prácticas de nombramiento de variables.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Variables

Ya conoces los tipos de datos más comunes en JavaScript. Sabes crear, combinar y
transformar `numbers`, `strings` y `booleans`. Pero, ¿qué podemos hacer con
esto? Hasta ahora, todo lo que has trabajado ha sido para uso inmediato. Es
decir, los nuevos valores que generamos deben ser inmediatamente utilizados o se
pierden. Sigue en tu consola el siguiente ejemplo:

```js
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + 19 + ' años';
// retorna: "Hola, mi nombre es Michelle y tengo 19 años"
```

Si quisiera utilizar ese `string` de nuevo, digamos porque Michelle cumplió años
y ahora queremos que diga 20 años en lugar de 19, no lo podemos hacer. Se ha
perdido.

Para atrapar y mantener los valores, JavaScript proporciona una cosa llamada
`variable`. Se utiliza así:

```js
var age = 19;
// retorna: undefined
```

La palabra clave (_keyword_) `var` indica que esta frase va a definir una
variable. Es seguida por el nombre de la variable (el nombre _age_) y, si
queremos asignarle de inmediato un valor, le sigue el operador `=` (operador de
asignación) y una expresión (el número `19`).

***

NOTA: En este primer ejemplo hemos usado [`var`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/var),
que a día de hoy se considera una manera un poco anticuada de declarar
variables. Desde ES6 (ES2015), preferimos usar o [`let`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let)
(para declarar variables a las que después necesitemos _reasignar_ un valor
diferente) o [`const`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const)
(para declarar variables que no se van a reasignar), ambas ahora con ámbito
(_scope_) de bloque, como veremos más adelante.

***

La declaración anterior crea una variable llamada `age` (o edad en español) y se
usa para retener el número `19`. La consola devuelve `undefined`, pero no creas
que es un error. Es lo que JavaScript hace cuando un comando no retorna valor.
Cuando escribes `12 + 5`, la consola retorna `17`. Pero al declarar una variable
llamada `age` asignándole el valor `19`, no hay un valor de retorno. Por eso la
consola simplemente devuelve `undefined` (en el resto de los ejemplos vamos a
omitir ese `undefined` de retorno porque no agrega mucho valor a la
explicación).

Después de que una variable se ha definido, su nombre puede ser usado como una
_expresión_. El valor de esa expresión es el valor que la variable alberga
actualmente. Sigamos con el ejemplo anterior:

```js
// declaramos `age` usando `const` ya que no vamos a reasignar esta variable.
const age = 19;
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años';
// retorna: "Hola, mi nombre es Michelle y tengo 19 años"
```

La consola nos ayuda a saber el valor de una variable. Si escribimos el nombre
de una variable que ha sido declarada en la consola, nos devuelve su valor. Si
esa variable no ha sido declarada, la consola retorna un error. Y si la variabla
ha sido declarada, pero no le hemos asignado valor, la consola devuleve
`undefined`.

```js
age
// retorna: Uncaught ReferenceError: age is not defined
//           at <anonymous>:1:1

const age = 19;
age
// retorna: 19

let weight;
weight
// retorna: undefined
```

Cuando una variable apunta a un valor, eso no quiere decir que está ligada a ese
valor para siempre. De hecho, se llaman variables porque su valor puede variar.
El operador de asignación (`=`) se puede utilizar en cualquier momento en
variables existentes (declaradas con `let` o `var`) para desconectarlas de su
valor actual y apuntarlas a uno nuevo (identificadores declarados con `const` no
se pueden reasignar).

```js
let age = 19;
// retorna: undefined
age = 20;
// retorna: 20
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años';
// retorna: "Hola, mi nombre es Michelle y tengo 20 años"
```

Ten en cuenta que para reasignarle un valor, no tienes que utilizar la _keyword_
`let` o `var` de nuevo. Solo la utilizas cuando queremos _declarar_ nuevas
variables.

Muchas veces se explica el concepto de variables con la analogía de una caja:
las variables son como "caja" en las que puedes meter algún valor que luego
pudes cambiar por otro. Sin embargo, una analogía más fiel es pensar en
variables como **tentáculos**. Las variables en realidad no es que "contengan"
los valores (como una caja); más bien los agarra (como un tentáculo). De hecho,
dos variables pueden referirse a un mismo valor. Un programa puede acceder sólo
a los valores que todavía mantiene "agarrados". Cuando necesitas recordar algo,
creas un tentáculo nuevo para "agarrarlo" o cambias unos de tus tentáculos
existentes para agarrar lo nuevo.

## Nombrando Variables

En JavaScript, existen ciertas reglas para nombrar variables. Los nombres de
variables:

1. **No** pueden incluir espacios
2. **No** pueden ser palabras reservadas (o _keywords_), como la palabra `var`
3. **No** pueden comenzar con números, aunque sí pueden haber números dentro del
   nombre (solo que no al comienzo)
4. **No** pueden contener signos de puntuación, con la excepción de los signos
   `$` y `_`

No seguir alguna de las reglas anteriores resulta en un **error** por parte de
JavaScript.

Además de estas reglas, existen una serie de "sugerencias" que debes tomar en
consideración a la hora de nombrar variables. Son "sugerencias" porque
JavaScript no te dará un error si no las sigues. Sin embargo, son "buenas
prácticas" de escritura de código que hacen que tu trabajo sea de mejor calidad.
Las sugerencias son:

1. Convención _camel case_. Dado que no podemos incluir espacios en los nombres
   de variables, una convención que se utiliza es la de `camel case`. La
   convención dicta que el nombre de la variable empieza con una letra minúscula
   y se coloca en mayúscula la primera letra de las palabras que continúan. Por
   ejemplo: `numberOfCandies` o `studentTechScore`. Se llama _camel case_ porque
   simula una joroba de camello.
2. Utilizar nombres en inglés. La programación está basada en el inglés, así que
   es buena práctica que te acostumbres a escribir tu código en inglés.
3. Utiliza nombres descriptivos. Al igual que las otras sugerencias, algo que
   siempre tienes que tomar en cuenta es que otras personas leerán tu código y
   debes hacer el esfuerzo por utilizar nombres descriptivos que ayuden al
   lector a entender mejor lo que hace tu programa.

Veamos algunos ejemplos:

| Mal nombre | Problema | Mejor nombre
| ------------| -------- | ------------
| age of fiends | Error: contiene espacios | ageOfFriends
| null | Error: palabra clave (keyword) | empty
| 1stName | Error: empieza con número | firstName
| full.price | Error: contiene "." | fullPrice
| full_price | no usa camel case | fullPrice
| x | no es descriptivo | age
| altura | en español | height

## Incrementar y Disminuir

Como programadora, muchas veces tendrás que incrementar o disminuir el valor de
una variable numérica por un cierto valor. Por ejemplo, puede que tengas la
variable `score` que registra el puntaje en un juego de fútbol. Cada vez que
alguien anote un gol, la variable `score` debe aumentar en 1. Esto lo puedes
hacer de la siguiente manera:

```js
let score = 0;
score = score + 1;
score;
// retorna: 1
```

Esto mismo se puede escribir de una manera más sencilla:

```js
let score = 0;
score++;
score;
// retorna: 1
```

Lo mismo podemos hacer para disminuir el valor de una variable. Por ejemplo, en
un video juego puede que tengas una variable llamada `lifePoints` que registra
los "puntos de vida" de un jugador. El jugador parte con 100 puntos y cada vez
que un enemigo lo golpea, pierde 25 puntos. Cada vez que toma una bebida
regenera 10 puntos.

```js
let lifePoints = 100;
lifePoints = lifePoints - 25;
lifePoints
// retorna: 75

lifePoints = lifePoints + 10;
lifePoints
// retorna: 85
```

Esto se puede escribir de una manera reducida, así:

```js
let lifePoints = 100;
lifePoints -= 25;
lifePoints
// retorna: 75

lifePoints += 10;
lifePoints
// retorna: 85
```

Existen otros operadores similares a `+=` y `-=`. Por ejemplo, existen también
`*=` y `/=`:

```js
let balloons = 100;
balloons *= 2;
balloons
// retorna: 200

let balloons = 100;
balloons /= 4;
balloons
// retorna: 25
```

## El scope de una variable

El _scope_ de una variable son las ubicaciones desde donde puede ser accedida.
Por ejemplo:

```js
const foo = () => {
  let x;
}
```

Aquí, el _direct scope_ (ámbito directo) de `x` es la función `foo`. Esta
variable podrá ser accedida desde dentro del cuerpo de la función `foo`, pero no
fuera de ella.

Tradicionalmente, en JavaScript solo podíamos crear un nuevo scope o ámbito
creando una nueva función. Desde ES6 (ES2015) tenemos `let` y `const`, que
introducen el concepto de _block sope_ en JavaScript.

### Lexical scoping

Las variables en JavaScript son _lexically scoped_ (de ámbito léxico), lo que
significa que la estructura estática de un programa determina el ámbito de la
variable (no es influenciada por dónde se invoca la función). En palabras más
simples, significa que las variables declaradas dentro de un _ámbito_ (una
función, o un bloque indicado por los caracteres `{}` en el caso de `let` y
`const`), no son visibles fuera de ese _ámbito_.

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
let x = 'global';
function f() {
  let x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro de la función `f`, la variable `x` es sombreada por la variable local
`x`.

***

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
función o bloque. El alcance local de una variable solo se define a partir del
cuerpo de la función o bloque que la contiene.

## Declaración de variables de ámbito local con "let"

La sentencia `let` declara una variable de alcance local, la cual,
opcionalmente, puede ser inicializada con algún valor y permite ser reasignada
(a diferencia de `const`).

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

En el ejemplo, `console.log(x)` no tiene acceso a `let x = "hola mundo"` y da
error porque `x` ha sido definida dentro del bloque `if`.

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

## Variables no reasignables con "const"

Las variables de solo lectura son otra de las novedades de ECMAScript 6,
mediante la introducción de la nueva palabra reservada `const`. Cualquier
variable declarada como constante no podrá ser reasignada.

Veamos un ejemplo:

```js
(function () {
  const HELLO = 'hello world';
  HELLO = 'hola mundo';
  // Dará ERROR, ya que `HELLO` no puede ser reasignada
})();
```

En este ejemplo vemos cómo desde el momento en que declaramos la constante
`HELLO`, su valor queda blindado y el intérprete lanzará error al tratar de
asignar un nuevo valor.

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
 * La siguiente sentencia funciona, ya que estamos modificando una propiedad
 * del objeto, pero no el valor en sí, que es la referencia al objeto, la cual
 * no cambia.
 **/
USER.name = 'Joan';

USER.age = 'veinte'; // modificar el tipo de una propiedad también funciona

console.log(USER); // {name: 'Joan', surname: 'Covarrubias', age: 'veinte'}

// Si tratamos de asignar un nuevo valor a `USER` veremos un error
USER = 'Caro Covarrubias'; // Error, no esta permitido
```
