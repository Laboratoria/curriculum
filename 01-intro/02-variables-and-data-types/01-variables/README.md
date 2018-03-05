# Variables

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Aprender qué son _variables_ y su utilidad.
- Conocer las buenas prácticas de nombramiento de variables.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](http://hectorip.github.io).

## Variables

Ya conoces los tipos de datos más comunes en JavaScript. Sabes crear, combinar y
transformar `numbers`, `strings` y `booleans`. Pero, ¿qué podemos hacer con
esto? Hasta ahora, todo lo que has trabajado ha sido para uso inmediato. Es
decir, los nuevos valores que generamos deben ser inmediatamente utilizados o se
pierden. Sigue en tu consola el siguiente ejemplo:

```js
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + 19 + ' años';
// returns > "Hola, mi nombre es Michelle y tengo 19 años"
```

Si quisiera utilizar ese `string` de nuevo, digamos porque Michelle cumplió años
y ahora queremos que diga 20 años en lugar de 19, no lo podemos hacer. Se ha
perdido.

Para atrapar y mantener los valores, JavaScript proporciona una cosa llamada
`variable`. Se utiliza así:

```js
var age = 19;
// returns > undefined
```

La palabra clave (_keyword_) `var` indica que esta frase va a definir una
variable. Es seguida por el nombre de la variable (el nombre _age_) y, si
queremos asignarle de inmediato un valor, le sigue el operador `=` y una
expresión (el número 19).

La declaración anterior crea una variable llamada age (o edad en español) y se
usa para retener el número 19. La consola devuelve undefined, pero no creas que
es un error. Es lo que JavaScript hace cuando un comando no retorna valor.
Cuando escribes 12 + 5, la consola retorna 17. Pero al declarar una variable
llamada age asignándole el valor 19, no hay un valor de retorno. Por eso la
consola simplemente devuelve undefined (en el resto de los ejemplos vamos a
omitir ese undefined de retorno porque no agrega mucho valor a la explicación).

Después de que una variable se ha definido, su nombre puede ser usado como una
expresión. El valor de esa expresión es el valor que la variable alberga
actualmente. Sigamos con el ejemplo anterior:

```js
var age = 19;
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años';
// returns > "Hola, mi nombre es Michelle y tengo 19 años"
```

La consola nos ayuda a saber el valor de una variable. Si escribimos el nombre
de una variable que ha sido declarada en la consola, nos devuelve su valor. Si
esa variable no ha sido declarada, la consola retorna un error. Y si la variabla
ha sido declarada, pero no le hemos asignado valor, la consola devuleve
undefined.

```js
age
// returns > Uncaught ReferenceError: age is not defined
//           at <anonymous>:1:1

var age = 19;
age
// returns > 19

var weight;
weight
// returns > undefined
```

Cuando una variable apunta a un valor, eso no quiere decir que está ligada a ese
valor para siempre. De hecho, se llaman variables porque su valor puede variar.
El operador `=` se puede utilizar en cualquier momento en variables existentes
para desconectarlas de su valor actual y apuntarlas a uno nuevo.

```js
var age = 19;
// returns > undefined
age = 20;
// returns > 20
'Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años';
// returns > "Hola, mi nombre es Michelle y tengo 20 años"
```

Ten en cuenta que para reasignarle un valor, no tienes que utilizar la _keyword_
`var` de nuevo. Solo la utilizas cuando queremos _crear_ nuevas variables.

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
var score = 0;
score = score + 1;
score;
// returns > 1
```

Esto mismo se puede escribir de una manera más sencilla:

```js
var score = 0;
score++;
score;
// returns > 1
```

Lo mismo podemos hacer para disminuir el valor de una variable. Por ejemplo, en
un video juego puede que tengas una variable llamada `lifePoints` que registra
los "puntos de vida" de un jugador. El jugador parte con 100 puntos y cada vez
que un enemigo lo golpea, pierde 25 puntos. Cada vez que toma una bebida
regenera 10 puntos.

```js
var lifePoints = 100;
lifePoints = lifePoints - 25;
lifePoints
// returns > 75

lifePoints = lifePoints + 10;
lifePoints
// returns > 85
```

Esto se puede escribir de una manera reducida, así:

```js
var lifePoints = 100;
lifePoints -= 25;
lifePoints
// returns > 75

lifePoints += 10;
lifePoints
// returns > 85
```

Existen otros operadores similares a `+=` y `-=`. Por ejemplo, existen también
`*=` y `/=`:

```js
var balloons = 100;
balloons *= 2;
balloons
// returns > 200

var balloons = 100;
balloons /= 4;
balloons
// returns > 25
```
