# Tipos de Datos y Variables
## Objetivos de Aprendizaje
- Conocer _datatypes_ en JavaScript
- ¿Qué son _variables_ y para qué sirven?
- Cómo nombrar _variables_

***
_El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 1 y 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014. Traducción en Español: http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html ._
***

## Vivimos en un mundo de Data
En el 2010, el entonces CEO de Google, Eric Schmidt, mencionaba que ["cada dos días creamos tanta data como lo hicimos desde los inicios de la civilización hasta el 2003"](https://techcrunch.com/2010/08/04/schmidt-data/). Las compras que haces son data, tus notas en el colegio son data, tu perfil de Facebook está lleno de data. Tus búsquedas en Google, las señales de GPS de tu celular, los videos que miras y subes a YouTube, las imágenes que ves en Instagram, los registros del clima, los corrreos electrónicos ... todo eso es data!

La data es crucial porque nos ayuda a tomar decisiones y a entender el mundo que nos rodea. La data es información, la información es conocimiento, y el conocimiento se traduce en mejores decisiones. Desde decisiones simples, como elegir un lugar para almorzar en base a los reviews de Yelp; hasta decisiones complejas, como [predecir si una mujer está embarazada, según su historial de compra en un hipermercado](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4).

## Valores y tipos de datos

Las computadoras son un gran recurso para trabajar con grandes cantidades de data. De hecho, en el mundo de las computadoras solo existe data. Con las computadores podemos leer data, modificar data y crear nueva data. Toda la data es almacenada como secuencias largas de los famosos _bits_ - esas secuencias de unos y ceros que viste en Matrix.  

Las computadoras manejan billones de bits. Para hacer más fácil el manejo de grandes cantidades de bits, los podemos dividir en pedazos que representan piezas de información. En un entorno JavaScript, estos pedazos son llamados _values_ (valores en Español). Cada _value_ tiene un "tipo" que determina su rol. En JavaScript existen cinco (5) tipos de datos primitivos:
1. `numbers` (números)
2. `strings` (cadenas)
3. `booleans` (booleanos)
4. `undefined` (indefinido)
5. `null` (nulo)

La data y los tipos de datos forman las bases de cualquier lenguaje de programación. Nos permiten organizar información y determinar cómo correr el programa. En esta lección aprenderás a definir y manipular estos tipos de datos.

## Numbers
Los _values_ de tipo `number` son, sin sorpresa alguna, valores numéricos. Es decir, pedazos de data que representan información numérica se representan con el tipo `number`. Esto incluye números positivos, negativos, enteros y decimales. Además,el tipo de data `number` tiene tres valores simbólicos: +Infinity, -Infinity y NaN (no-un-número).

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

### Aritmética
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
5%3
// returns > 2

7%2
// returns > 1
```

## Material de referencia

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014. Traducción en Español por [hectorip](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
