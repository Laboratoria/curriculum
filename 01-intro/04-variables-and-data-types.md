# Valores, tipos de datos y operadores
## Objetivos de Aprendizaje
- Conocer _data types_ (tipos de datos) en JavaScript
- ¿Qué son _variables_ y para qué sirven?
- Cómo nombrar _variables_

***
_El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 1 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014. Traducción en Español disponible por [hectorip](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)_
***

## Vivimos en un mundo de Data
En el 2010, el entonces CEO de Google, Eric Schmidt, mencionaba que ["cada dos días creamos tanta data como lo hicimos desde los inicios de la civilización hasta el 2003"](https://techcrunch.com/2010/08/04/schmidt-data/). Las compras que haces son data, tus notas en el colegio son data, tu perfil de Facebook está lleno de data. Tus búsquedas en Google, las señales de GPS de tu celular, los videos que miras y subes a YouTube, las imágenes que ves en Instagram, los registros del clima, los corrreos electrónicos ... todo eso es data!

La data es crucial porque nos ayuda a tomar decisiones y a entender el mundo que nos rodea. La data es información, la información es conocimiento, y el conocimiento se traduce en mejores decisiones. Desde decisiones simples, como elegir un lugar para almorzar en base a los reviews de Yelp; hasta decisiones complejas, como [predecir si una mujer está embarazada, según su historial de compra en un hipermercado](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4).

## Tipos de datos
Las computadoras son un gran recurso para trabajar con grandes cantidades de data. De hecho, en el mundo de las computadoras solo existe data. Con las computadores podemos leer data, modificar data y crear nueva data. Toda la data es almacenada como secuencias largas de los famosos _bits_ - esas secuencias de unos y ceros que viste en Matrix.  

Las computadoras manejan billones de bits. Para hacer más fácil el manejo de grandes cantidades de bits, los podemos dividir en pedazos que representan piezas de información. En un entorno JavaScript, estos pedazos son llamados _values_ (valores en Español). Cada _value_ tiene un _data type_ (tipo de dato) que determina su rol. En JavaScript existen cinco (5) tipos de datos primitivos:
1. `numbers` (números)
2. `strings` (cadenas)
3. `booleans` (booleanos)
4. `undefined` (indefinido)
5. `null` (nulo)

La data y los tipos de datos forman las bases de cualquier lenguaje de programación. Nos permiten organizar información y determinar cómo correr el programa. En esta lección aprenderás a definir y manipular estos tipos de datos.

## 1. Numbers
Los _values_ de tipo `number` son, sin sorpresa alguna, valores numéricos. Es decir, pedazos de data que representan información numérica se representan con el tipo `number`. Esto incluye números positivos, negativos, enteros y decimales. Además,el tipo de datos `number` tiene tres valores simbólicos: +Infinity, -Infinity y NaN (no-un-número).

Veamos varios ejemplos. Abre tu consola (recuerda que lo haces haciendo click con el botón derecho del mouse) y escribe los siguientes números. Al hacerlo, la consola te lo regresa el número de vuelta.

```JavaScript
13
// returns > 13

-9.81
// returns > -9.81

```

También puedes hacer uso de la notación científica para números muy grandes o muy pequeños, añadiendo una "e" de "exponente", seguido por el exponente del número:

```JavaScript
5e10
// returns > 50000000000

-2.998e8
// returns > -299800000

```

### Operadores Aritméticos
Lo principal que se hace con los números es aritmética. Sigamos explorando el comportamiento del tipo de dato `numbers` en tu consola. Escribe el siguiente ejemplo en tu consola y confirma que tienes el mismo resultado:


```JavaScript
100 + 4 * 11
// returns > 144
```

Los símbolos + y * son llamados _operators_ (operadores). El primero representa la suma y el segundo la multiplicación. Al poner un operador entre dos valores, se aplicará la operación a esos valores y producirá un nuevo valor. Como ves, la multiplicación ocurre primero. Pero como en matemáticas, puedes cambiar esto encerrando en paréntesis la suma.

```JavaScript
(100 + 4) * 11
// returns > 1144
```

Para la resta existe el operador -, y la división se puede hacer con el operador /. Veamos más ejemplos (recurda hacerlos en tu consola también!)

```JavaScript
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

También existe un operador aritmético más, que podrías no reconocer inmediatamente. El símbolo % es usado para representar la operación _residuo_. X % Y resulta en el residuo de dividir X entre Y. Por ejemplo, 314 % 100 produce 14 (porque 100*3 + 14 = 314), y 144 % 12 da 0 (porque 12*12 + 0 = 144). Verás a menudo este operador referido como _modulo_, aunque técnicamente residuo es más preciso.

```JavaScript
5 % 3
// returns > 2

7 % 2
// returns > 1
```

## 2. Strings
El siguiente _data type_ básico son los `strings`. Es el tipo de dato que utilzamos para representar texto. Son declaradas al poner el contenido entre comillas.

Abre tu consola y escribe lo siguiente:
```JavaScript
"Hola, mi nombre es Michelle"
// returns > "Hola, mi nombre es Michelle"

'Soy desarrolladora web'
// returns > "Soy desarrolladora web"

"123"
// returns > "123"

```

Tanto las comillas simples como las dobles pueden ser usadas para declarar `strings` mientras coincidan al principio y al final. Casi cualquier cosa puede colocarse entre comillas, y JavaScript creará un _string value_ de esa cosa.

Existen un par de caracteres en los _data types_ `strings` que tienen un comportamiento especial. Por ejemplo, cuando una diagonal invertida ("\") se encuentra dentro de un texto entre comillas, indica que el carácter siguiente tiene un significado especial. Esto se denomina _escapar el carácter_. Cuando el carácter _n_ sigue a una diagonal invertida, se interpreta como una nueva línea. Similarmente, una _t_ después de la diagonal invertida significa un tab. Escribe los siguientes textos en tu consola (recurda siempre colocarlos entre comillas, sean simples o dobles).

```JavaScript
"Esta es la primera línea \n Y esta la segunda"
// returns > "Esta es la primera línea
//            Y esta la segunda"

'Mi lenguaje favorito es \t JavaScript'
// retuns > "Mi lenguaje favorito es 	 JavaScript"
```
Cuando una comilla es precedida por una diagonal invertida, la comilla no terminará la cadena sino que será parte de ella.

```JavaScript
"Yo \"estudio\" en Laboratoria"
// returns > "Yo "estudio" en Laboratoria"
```

Existen, por supuesto, situaciones en las que querrás que una diagonal invertida sea sólo eso en una cadena de texto, no un código especial. Si dos diagonales invertidas están juntas, se volverán una, y sólo eso quedará como resultado en el valor de la cadena.

```JavaScript
"Un carácter de nueva línea es escrito \"\\n\"."
// returns > "Un carácter de nueva línea es escrito "\n"."
```

Las cadenas de texto no pueden ser divididas numéricamente, multiplicadas, o restadas, pero el carácter + puede ser usado en ellas. No suma, sino que concatena; pega dos `strings`. La siguiente línea produce el `string` "concatenar":

```JavaScript
"con" + "cat" + "e" + "nar"
// returns > "concatenar"
```

Ten cuidado mezclando operaciones entre _numbers_ y _strings_. Por ejemplo, multiplicar un _number_ por un _string_ resulta en NaN.

```JavaScript
"hola" * 3
// returns > NaN

```

Hay más maneras de manipular `strings`, que veremos más adelante.

### Operadores Unarios
No todos los operadores son símbolos. Algunos son escritos como palabras. Un ejemplo es el operador typeof, que produce una cadena de texto que representa el tipo del valor que le pasaste.

```JavaScript
typeof(4.5)
// returns > "number"

typeof("hola")
// returns > "string"

typeof(NaN)
// returns > "number"

typeof(Infinity)
// returns > "number"

```
Fíjate que verificamos que _NaN_ e _Infinity_ son del tipo `number` (de valor simbólico), tal como lo mencionamos anteriormente.

Los otros operadores que hemos visto operaban sobre dos valores, pero typeof sólamente toma uno. Los operadores que usan dos valores son llamados operadores _binarios_, mientras que aquellos que sólo toman uno son llamados operadores _unarios_.

El operador menos puede usar tanto como operador binario como operador unario.

```JavaScript
- (10-2)
// returns > -8
```

## Booleans
A menudo, necesitarás un valor que simplemente distinga entre dos posibilidades, como "sí" y "no" o "encendido" y "apagado". Para esto, JavaScript tiene un tipo de dato _boolean_, que tiene sólo dos valores: _true_ (verdadero) y _false_ (falso).

### Comparaciones
Realiza esta comparación en tu consola:

```JavaScript
3 > 2
// returns > true

2 < 3
// returns > false

typeof(3 > 2)
// returns > "boolean"

typeof(2 > 3)
// returns > "boolean"
```

Los signos > y < son los símbolos tradicionales para "es mayor que" y "es menor que", respectivamente. Estos son operadores binarios (porque opera sobre dos valores). Aplicarlos resulta en un valor de tipo _boolean_ que indica si son ciertos.

Los `strings` pueden ser comparados de la misma manera.

```JavaScript
"Aardvark" < "Zoroaster"
// returns > true

```

La manera en que los `strings` son ordenadas es más o menos alfabéticamente: las letras mayúsculas son siempre "menores" que las minúsculas, así que "Z" < "a" es _true_, y los caracteres no alfabéticos (!, -, y así por el estilo) son también incluidos en el ordenamiento.La comparación real está basada en el estándar [Unicode](https://unicode-table.com/en/#control-character).

```JavaScript
"Zeyla" < "ana"
// returns > true

"Zeyla" < "!na"
// returns > false
```

Otros operadores similares son >= (mayor o igual que), <= (menor o igual que), == (igual que), y != (no es igual que).

```JavaScript
"Itchy" == "Itchy"
// returns > true

"Itchy" != "Scratchy"
// returns > true

5 == 5
// returns > true

10 != "diez"
// returns > true
```

Sólo existe un valor en JavaScript que no es igual a sí mismo, y este es NaN, que significa "no es un número".

```JavaScript
"NaN" == "NaN"
// returns > false
```
La intención de NaN es representar el resultado de un cálculo sin sentido y como tal, no es igual al resultado de cualquier otro cálculo sin sentido.

### Operadores Lógicos

## Material de referencia

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014. Traducción en Español por [hectorip](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
