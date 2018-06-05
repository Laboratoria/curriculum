# Objetos preconstruidos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

## JavaScript, en el núcleo del lenguaje

Todos los lenguajes de programación tienen objetos intrinsecos (o incorporados/
built-in) que crean la funcionalidad escencial del lenguaje. Los objetos
intrínsecos son la base del lenguaje en el
que escribes código y sirven para
potenciar la funcionalidad de tu código.
JavaScript tiene muchos objetos
intrinsecos que lo definen como un
lenguaje.
El término "objetos globales" (o objetos incorporados estándar) no debe
confundirse con el objeto global. Aquí, los objetos globales se refieren a
objetos en el ámbito global. Estos objetos y funciones especiales que vienen
con JavaScript pero que no son parte del
lenguaje en sí, también se conocen
como la _librería estándar_ (standard
library) ya que siempre podemos contar
con ellos. Son librerías que no tenemos que
importar y siempre están disponibles,
independientemente del entorno donde se ejecute nuestro código (navegador,
node, ...).

*¿Por qué deberías de usar las funciones de la librería estándar disponibles en javascript?*

Hay muchas funciones disponibles  para
ayudarte a escribir un programa bueno y eficiente.

Como desarrolladores de software, nuestro trabajo es encontrar la solución más
simple a un problema. "Más simple" es un poco vago,así que vamos a definirlo
como "funciona, es eficiente (suficiente), es relativamente fácil de entender y
no tarda demasiado en implementarse".

¿Cuánto tardarías en escribir una función que corte una cadena o verifique si
un número es positivo o agrega relleno izquierdo? Muchas funciones que
encontraras en una librería estándar son probablemente triviales por
naturaleza, pero tener un estándar acordado para hacer las cosas acelerará la
implementación del código (habrá menos instancias de "¿hay una función para
esto o debería codificarla yo mismo?") Además otras personas que leen tu código
pueden concentrarse en aprender sobre las dependencias que realmente importan y
no en aprender librerías que consumes para una sola línea de código.

### Ventajas más importantes de usar funciones de librería estándar

* Funcionan

Una de las razones más importantes por las que debes usar las funciones de la
librería estándar es simplemente porque funcionan, ya han pasado por múltiples
pruebas rigurosas y son fáciles de usar.

* Están optimizadas para el rendimiento

Un grupo dedicado de desarrollo las mejora constantemente. En el proceso, estos
equipos pueden crear el código más eficiente y optimizado para obtener el
máximo rendimiento.

* Ahorran un considerable tiempo de desarrollo

Dado que las funciones generales como imprimir en una pantalla, calcular la
raíz cuadrada y muchas más ya están escritas. No debes preocuparte por
crearlas una vez más.
Ahorrarás un tiempo valioso, además que tu código puede no ser siempre el más
eficiente.

* Son soportadas en la mayoría de los navegadores

Con las cambiantes necesidades del mundo real, se espera que tu aplicación
funcione siempre, en cualquier lugar, en cualquier dispositivo.

Estas funciones de la biblioteca te ayudan a que tu aplicación funcione igual
en todas las computadoras.
Esto ahorra tiempo, esfuerzo y hace que tu programa sea compatible con otros
navegadores.

Ejemplo:

Supongamos que quieres encontrar la raíz cuadrada de un número.
Siempre puedes escribir tu propia pieza de código para encontrar la raíz
cuadrada, pero este proceso lleva tiempo y puede no ser el más eficiente.

Sin embargo, en la programación javascript puedes encontrar la raíz cuadrada
simplemente usando la función `Math.sqrt()`.

Aquí abajo mencionaremos algunos de los objetos más utilizados.

#### Objetos incorporados

Estos son algunos de los objetos incorporados en javascript:

* Object
* Function
* Boolean
* Symbol
* Error
* EvalError
* InternalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError
* Number
* Math
* Date
* String
* RegExp
* DataView
* JSON
* Proxy
* Array.prototype methods

Entre estas funciones están los constructores `Date`, `RegExp` o `Error`
y el objeto `Math`.

## `RegExp`

Las expresiones regulares sirven para comprobar si una cadena de texto sigue un
determinado patrón, o si contiene unos caracteres determinados. Se emplea, por
ejemplo para comprobar en un formulario si el texto pasado por el usuario es un
e-mail, o un número de teléfono, etc.

Estas expresiones van encerradas entre las barras inclinadas `/.../` y tienen
su propia sintaxis. Por ejemplo la siguiente expresión comprueba si el el texto
pasado es una dirección de página web:

```js
const patron = /^http[s]?://\w[\.\w]+$/i;
```

Debido a su complejidad lo más cómodo es tener una lista de las expresiones
regulares para los casos más comunes, tales como comprobar direcciones web,
e-mail, números telefónicos, fechas, etc.

Para declarar un objeto RegExp podemos hacerlo simplemente asignando a una
variable una expresión regular, tal como en el ejemplo anterior, o mediante el
método general de crear objetos:

```js
const patron = new RegExp('^http[s]?://\w[\.\w]+$', 'i');
```

Para efectuar las búsquedas y reemplazos, este objeto tiene varios métodos,
algunos de los cuales son iguales que para las cadenas de texto:

* `cadena.search(regexp)`: Comprueba si la cadena se ajusta al patrón, en tal
 caso devuelve verdadero (`true`).
* `cadena.replace(regexp, remplazar)`: Reemplaza el trozo de cadena que se
 ajusta a la expresión regular por la cadena que se pasa como segundo argumento
 (`remplazar`).
* `cadena.split(regexp)`: Devuelve un array en el que la cadena se ha separado
 según las coincidencias con la expresión regular.