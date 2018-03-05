# Valores, tipos de datos y operadores

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender qué se entiende por _values_ (valores) en JavaScript.
- Conocer los diferentes _data types_ (tipos de datos) en JavaScript.
- Aprender cómo combinar y transformar valores con operadores en JavaScript.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Vivimos en un mundo de Data

En el 2010, el entonces CEO de Google, Eric Schmidt, mencionaba que
cada dos días creamos tanta data como lo hicimos desde los inicios de la
civilización hasta el 2003 ([fuente](https://techcrunch.com/2010/08/04/schmidt-data/)).
Las compras que haces son data, tus notas en el colegio son data, tu perfil de
Facebook está minado de data. Tus búsquedas en Google, las señales de GPS de tu
celular, los videos que miras y subes a YouTube, las imágenes que ves en
Instagram, los registros del clima, los corrreos electrónicos ... todo eso es
data!

La data es crucial porque nos ayuda a tomar decisiones y a entender el mundo que
nos rodea. La data es información, la información es conocimiento, y el
conocimiento se traduce en mejores decisiones. Desde decisiones simples, como
elegir un lugar para almorzar en base a los reviews de Yelp; hasta decisiones
complejas, como predecir si una mujer está embarazada, según su historial de
compra en un hipermercado ([fuente](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4)).

## Tipos de datos

Las computadoras son un gran recurso para trabajar con grandes cantidades de
datos. De hecho, en el mundo de las computadoras solo existen datos. Con las
computadores podemos leer data, modificar data y crear nueva data. Toda la data
es almacenada como secuencias largas de los famosos _bits_ - esas secuencias de
unos y ceros que viste en Matrix.

Las computadoras manejan billones de bits. Para hacer más fácil el manejo de
grandes cantidades de bits, los podemos dividir en "pedazos" que representan
piezas de información. En un entorno JavaScript, estos pedazos son llamados
_**values**_ (valores en español). Cada _value_ tiene un _data type_ (tipo de
dato) que determina su rol. En JavaScript existen cinco (5) tipos de datos
primitivos:

1. `numbers` (números).
2. `strings` (cadenas).
3. `booleans` (booleanos).
4. `undefined` (indefinido).
5. `null` (nulo).

La data y los tipos de datos forman las bases de cualquier lenguaje de
programación. Nos permiten organizar información y determinar cómo correr el
programa. En esta lección aprenderás a definir y manipular estos tipos de datos.

## 1. Numbers

Los _values_ de tipo `number` son, sin sorpresa alguna, valores numéricos. Es
decir, pedazos de data que representan información numérica se representan con
el tipo `number`. Esto incluye números positivos, negativos, enteros y
decimales. Además,el tipo de datos `number` tiene tres valores simbólicos:
+Infinity, -Infinity y NaN (no-un-número).

Veamos varios ejemplos. Abre tu consola (recuerda que lo haces haciendo click
con el botón derecho del mouse -> inspect -> console) y escribe los siguientes
números. Al hacerlo, la consola te lo regresa el número de vuelta.

```js
13
// returns > 13

-9.81
// returns > -9.81
```

También puedes hacer uso de la notación científica para números muy grandes o
muy pequeños, añadiendo una "e" de "exponente", seguido por el exponente del
número:

```js
5e10
// returns > 50000000000

-2.998e8
// returns > -299800000
```

### Operadores Aritméticos

Lo principal que se hace con los números es aritmética. Sigamos explorando el
comportamiento del tipo de dato `numbers` en tu consola. Escribe el siguiente
ejemplo en tu consola y confirma que tienes el mismo resultado:

```js
100 + 4 * 11
// returns > 144
```

Los símbolos `+` y `*` son llamados _operators_ (operadores). El primero
representa la suma y el segundo la multiplicación. Al poner un operador entre
dos valores, se aplicará la operación a esos valores y producirá un nuevo valor.
Como ves, la multiplicación ocurre primero. Pero como en matemáticas, puedes
cambiar esto encerrando en paréntesis la suma.

```js
(100 + 4) * 11
// returns > 1144
```

Para la resta existe el operador `-`, y la división se puede hacer con el
operador `/`. Veamos más ejemplos (recuerda hacerlos en tu consola también!):

```js
12345 / 250
// returns > 49.38

1234 + 57 * 3 - 31 / 4
// returns > 1397.25

100 / 0
// returns > Infinity

100 / -0
// returns > -Infinity

1000 * Infinity
// returns > Infinity

0/0
// returns > NaN

Infinity - Infinity
// returns > NaN
```

También existe un operador aritmético más, que podrías no reconocer
inmediatamente. El símbolo `%` es usado para representar la operación _residuo_.
X % Y resulta en el residuo de dividir X entre Y. Por ejemplo, 314 % 100 produce
14 (porque 100 multiplicado por 3 + 14 = 314), y 144 % 12 da 0 (porque 12
multiplicado por 12 + 0 = 144). Verás a menudo este operador referido como
_módulo_, aunque técnicamente residuo es más preciso.

```js
5 % 3
// returns > 2

7 % 2
// returns > 1
```

## 2. Strings

El siguiente _data type_ básico son los `strings`. Es el tipo de dato que
utilzamos para representar texto. Se declaran al poner el contenido entre
comillas.

Abre tu consola y escribe lo siguiente:

```js
"Hola, mi nombre es Michelle"
// returns > "Hola, mi nombre es Michelle"

'Soy desarrolladora web'
// returns > "Soy desarrolladora web"

"123"
// returns > "123"
```

Tanto las comillas simples como las dobles pueden ser usadas para declarar
`strings`, siempre y cuando coincidan al principio y al final. Casi cualquier
cosa puede colocarse entre comillas, y JavaScript creará un _string value_ de
esa cosa.

Existen un par de caracteres en los _data types_ `strings` que tienen un
comportamiento especial. Por ejemplo, cuando una diagonal invertida ("\") se
encuentra dentro de un texto entre comillas, indica que el carácter siguiente
tiene un significado especial. Esto se denomina _escapar el carácter_. Cuando el
carácter _n_ sigue a una diagonal invertida, se interpreta como una nueva línea.
Similarmente, una _t_ después de la diagonal invertida significa un tab. Escribe
los siguientes textos en tu consola (recuerda siempre colocarlos entre comillas,
sean simples o dobles).

```js
"Esta es la primera línea \n Y esta la segunda"
// returns > "Esta es la primera línea
//            Y esta la segunda"

'Mi lenguaje favorito es \t JavaScript'
// retuns > "Mi lenguaje favorito es JavaScript"
```

Cuando una comilla es precedida por una diagonal invertida, la comilla no
terminará la cadena sino que será parte de ella.

```js
"Yo \"estudio\" en Laboratoria"
// returns > "Yo "estudio" en Laboratoria"
```

Existen, por supuesto, situaciones en las que querrás que una diagonal invertida
sea sólo eso en una cadena de texto, no un código especial. Si dos diagonales
invertidas están juntas, se volverán una, y sólo eso quedará como resultado en
el valor de la cadena.

```js
"Un carácter de nueva línea es escrito \"\\n\"."
// returns > "Un carácter de nueva línea es escrito "\n"."
```

Las cadenas de texto no pueden ser divididas numéricamente, multiplicadas, o
restadas, pero el carácter + puede ser usado en ellas. No suma, sino que
concatena; pega dos `strings`. La siguiente línea produce el `string`
"concatenar":

```js
"con" + "cat" + "e" + "nar"
// returns > "concatenar"
```

Ten cuidado mezclando operaciones entre _numbers_ y _strings_. Por ejemplo,
multiplicar un _number_ por un _string_ resulta en NaN.

```js
"hola" * 3
// returns > NaN
```

Hay más maneras de manipular `strings`, que veremos más adelante.

### Operadores Unarios

No todos los operadores son símbolos. Algunos son escritos como palabras. Un
ejemplo es el operador typeof, que produce una cadena de texto que representa el
tipo del valor que le pasaste.

```js
typeof 4.5
// returns > "number"

typeof "hola"
// returns > "string"

typeof NaN
// returns > "number"

typeof Infinity
// returns > "number"
```

Fíjate que verificamos que _NaN_ e _Infinity_ son del tipo `number` (de valor
simbólico), tal como lo mencionamos anteriormente.

Los otros operadores que hemos visto operaban sobre dos valores, pero typeof
sólamente toma uno. Los operadores que usan dos valores son llamados operadores
_binarios_, mientras que aquellos que sólo toman uno son llamados operadores
_unarios_.

El operador menos puede usar tanto como operador binario como operador unario.

```js
- (10 - 2)
// returns > -8
```

## 3. Booleans

A menudo, necesitarás un valor que simplemente distinga entre dos posibilidades,
como "sí" y "no" o "encendido" y "apagado". Para esto, JavaScript tiene un tipo
de dato _boolean_, que tiene sólo dos valores: _true_ (verdadero) y _false_
(falso).

### Operadores comparativos

Realiza esta comparación en tu consola:

```js
3 > 2
// returns > true

2 > 3
// returns > false

typeof (3 > 2)
// returns > "boolean"

typeof (2 > 3)
// returns > "boolean"
```

Los signos > y < son los símbolos tradicionales para "es mayor que" y "es menor
que", respectivamente. Estos son operadores binarios (porque opera sobre dos
valores). Aplicarlos resulta en un valor de tipo _boolean_ que indica si son
ciertos.

Los `strings` pueden ser comparados de la misma manera.

```js
"Aardvark" < "Zoroaster"
// returns > true
```

La manera en que los `strings` son ordenadas es más o menos alfabéticamente: las
letras mayúsculas son siempre "menores" que las minúsculas, así que "Z" < "a" es
_true_, y los caracteres no alfabéticos (!, -, y así por el estilo) son también
incluidos en el ordenamiento.La comparación real está basada en el estándar
[Unicode](https://unicode-table.com/en/#control-character).

```js
"Zeyla" < "ana"
// returns > true

"Zeyla" < "!na"
// returns > false
```

Otros operadores similares son >= (mayor o igual que), <= (menor o igual que),
== (igual que), y != (no es igual que).

```js
"Itchy" == "Itchy"
// returns > true

"Itchy" != "Scratchy"
// returns > true

5 == 5
// returns > true

10 != "diez"
// returns > true
```

Sólo existe un valor en JavaScript que no es igual a sí mismo, y este es NaN,
que significa "no es un número".

```js
NaN == NaN
// returns > false
```

La intención de NaN es representar el resultado de un cálculo sin sentido y como
tal, no es igual al resultado de cualquier otro cálculo sin sentido.

### Operadores Lógicos

Hay también algunas operaciones que pueden ser aplicadas a los valores
`Booleans`. JavaScript soporta tres operadores lógicos: _and_, _or_ y _not_.
Estos pueden ser usados para "razonar" con los `Booleans`.

El operador `&&` representa la operación lógica _and_ ("y"). Es un operador
binario, y su resultado es _true_ (verdadero) sólo si los dos valores dados son
verdaderos. El operador `||` denota la operación lógica or ("o"). Devuelve
verdadero si cualquiera de los dos valores dados es verdadero. _Not_ (Negación)
es escrito como un símbolo de admiración `!`. Es un operador binario que voltea
el valor que se le de; !true produce false y !false produce true. Veamos unos
ejemplos:

```js
true && true
// returns > true

true && false
// returns > false

false && false
// returns > false

true || true
// returns > true

true || false
// returns > true

!true
// returns > false

!false
// returns > true

```

El último operador lógico del que aprenderás no es unario, ni binario, sino
ternario, opera en tres valores. Este es escrito con un símbolo de interrogación
y dos puntos, como sigue:

```js
true ? 1 : 2
// returns > 1

false ? 1 : 2
// returns > 2
```

Este es llamado el operador condicional (o algunas veces el operador tenario
  dado que es el único operador de este tipo en el lenguaje). El valor a la
  izquierda del signo de interrogación "escoge" cuál de los otros dos valores
  resultará. Cuando es verdadero, el valor central es escogido, y cuando es
  falso, el valor de la derecha se da como resultado.

## 4. Null y undefined

Existen dos valores especiales, escritos `null` y `undefined`, que son usados
para denotar la ausencia de un valor significativo. Son valores en sí mismos,
pero no poseen ninguna información. Muchas operaciones en el lenguaje que no
producen un valor con significado (lo verás después) producen `undefined`
simplemente porque tienen que producir algún valor.

La diferencia en el significado entre `undefined` y `null` es un accidente del
diseño de JavaScript, y no importa la mayoría del tiempo.

### Conversión automática de tipo

Cuando un operador es aplicado al tipo "incorrecto" de valor, JavaScript
convertirá silenciosamente el valor en el tipo de dato que espera, usando un
conjunto de reglas que a menudo no son lo que tú quieres o esperas. Esto es
llamado _coerción de tipo_. Mira estos ejemplos:

```js
8 * null
// returns > 0

"5" - 1
// returns > 4

"5" + 1
// returns > 51

"cinco" * 2
// returns > NaN

false == 0
// returns > true
```

El null en la primera expresión se vuelve 0, y el "5" en la segunda expresión se
convierte en 5 (de string a number). Aún así, en la tercera expresión, + intenta
hacer concatenación de strings antes de una suma numérica, así que el 1 es
convertido en "1" (de number a string). Cuando algo que no se corresponde con un
número de manera obvia (como "cinco" o undefined) es convertido a un número, el
valor resultante es NaN. Las siguientes operaciones aritméticas sobre NaN
seguirán produciendo NaN. Por eso, en la cuarta expresión, "cinco" * 2 retorna
NaN.

En el caso de la quinta expresión, cuando comparamos valores que tienen tipos de
dato diferentes, JavaScript usa un complicado y confuso conjunto de reglas para
determinar qué hacer. En la mayoría de los casos, sólo trata de convertir uno de
los valores al tipo de dato del otro valor. Sin embargo, cuando null o undefined
están en cualquier lado de la operación, resulta verdadero sólo en el caso de
que los dos lados sean null o undefined.

Siguiendo con la quinta expresión, las reglas para convertir cadenas y números a
Booleanos dicen que 0, NaN y la cadena vacía ("") cuentan como _false_, mientras
que todos los demás valores cuentan como _true_. Debido a esto, las siguientes
expresiones retornan _true_:

```js
false == 0
// returns > true

"" == 0
// returns > true
```

Para casos en el que no quieres que ocurra ninguna conversión automática de
tipos, existen dos operadores extra: === y !==. El primero prueba si un valor es
precisamente igual a otro, y el segundo si no es precisamente igual. Por lo
tanto, al cambiar de == a === las mismas expresiones anteriores, tenemos el
resutado contrario: _false_:

```js
false === 0
// returns > false

"" === 0
// returns > false
```
