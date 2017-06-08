# Tipos de Datos y Variables
## Objetivos de Aprendizaje
- Conocer _datatypes_ en JavaScript
- ¿Qué son _variables_ y para qué sirven?
- Cómo nombrar _variables_

***
_El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014_
***

## Vivimos en un mundo de Data
En el 2010, el entonces CEO de Google, Eric Schmidt, mencionaba que ["cada dos días creamos tanta data como lo hicimos desde los inicios de la civilización hasta el 2003"](https://techcrunch.com/2010/08/04/schmidt-data/). Las compras que haces son data, tus notas en el colegio son data, tu perfil de Facebook está lleno de data. Tus búsquedas en Google, las señales de GPS de tu celular, los videos que miras y subes a YouTube, las imágenes que ves en Instagram, los registros del clima, los corrreos electrónicos ... todo eso es data!

La data es crucial porque nos ayuda a tomar decisiones y a entender el mundo que nos rodea. La data es información, la información es conocimiento, y el conocimiento se traduce en mejores decisiones. Desde decisiones simples, como elegir un lugar para almorzar en base a los reviews de Yelp; hasta decisiones complejas, como [predecir si una mujer está embarazada, según su historial de compra en un hipermercado](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4).

## Valores y tipos de datos

Las computadoras son un gran recurso para trabajar con grandes cantidades de data. De hecho, en el mundo de las computadoras solo existe data. Con las computadores podemos leer data, modificar data y crear nueva data. Toda la data es almacenada como secuencias largas de los famosos _bits_ - esas secuencias de unos y ceros que viste en Matrix.  

Las computadoras manejan billones de bits. Para hacer más fácil el manejo de grandes cantidades de bits, los podemos dividir en pedazos que representan piezas de información. En un entorno JavaScript, estos pedazos son llamados _values_ (valores en Español). Cada _value_ tiene un "tipo" que determina su rol. En JavaScript existen seis (5) tipos de datos primitivos:
1. `numbers` (números)
2. `strings` (cadenas)
3. `booleans` (booleanos)
4. `undefined` (indefinido)
5. `null` (nulo)

La data y los tipos de datos forman las bases de cualquier lenguaje de programación. Nos permiten organizar información y determinar cómo correr el programa. En esta lección aprenderás a definir y manipular estos tipos de datos.

## Numbers
Los valores de tipo `number` son, sin sorpresa alguna, valores numéricos. En un programa en JavaScript, se escriben de la siguiente forma:

<html>
   <head>
     <link rel="stylesheet" href="bower_components/xterm.js/dist/xterm.css" />
     <script src="bower_components/xterm.js/dist/xterm.js"></script>
   </head>
   <body>
     <div id="terminal"></div>
     <script>
       var term = new Terminal();
       term.open(document.getElementById('#terminal'));
       term.write('Hello from \033[1;3;31mxterm.js\033[0m $ ')
     </script>
   </body>
 </html>

13
Usa eso en un programa y causará que el patrón de bits para el número 13 exista dentro de la memoria de la computadora.

JavaScript usa una cantidad fija de bits, 64, para guardar un valor del tipo número. Existe un límite en la cantidad de patrones que se pueden hacer con 64 bits, lo que significa que la cantidad de números que puedes representar también es limitada. Para N dígitos decimales, la cantidad de números que pueden ser representados es 10N. Similarmente, dados 64 dígitos binarios, puedes representar 264 números diferentes, que es cerca de 18 cuatrillones (un 18 con 18 ceros después). Eso es mucho.

La memoria de la computadora solía ser mucho más pequeña, y la gente tendía a usar grupos de 8 ó 16 bits para representar sus números. Era fácil desbordar accidentalmente números tan pequeños: terminar con un número que no pudiera ser almacenado en el número dado de bits. Hoy, incluso las computadoras personales tienen mucha memoria, así que eres libre de usar grupos de 64 bits, lo que significa que necesitas preocuparte del desbordamiento sólo cuando estés tratando con números verdaderamente astronómicos.

No todos los número enteros debajo de 18 cuatrillones caben en un número de JavaScript. Esos bits también guardan números negativos, así que un bit indica el signo del número. Un problema mayor es que los números no enteros también deben ser representados. Para hacer esto, algunos de los bits son usados para guardar la posición del punto decimal. El número entero máximo real que puede ser guardado está más cerca del rango de los 9 trillones (15 ceros), que aún es satisfactoriamente grande.
