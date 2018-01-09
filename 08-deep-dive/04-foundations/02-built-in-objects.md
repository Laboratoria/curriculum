# Objetos preconstruidos

* Formato: `lectura`
* Duración: `15 min`

***

El tipo de datos fundamental de JavaScript es el objeto. Un objeto es un dato
complejo, una colección no ordenada de propiedades cada una formada por un
nombre y un valor. Este valor es un tipo de dato primitivo o por referencia.

En JavaScript todo lo que no es un string, un número, true, false, null o
undefined es un objeto. Incluso los strings, números y booleanos se comportan
como objetos inmutables (no podemos modificar sus propiedades).

Dado que un objeto también ocupa un espacio de memoria: ¿en qué se parecen y en
qué se diferencia un objeto de una variable?.

Consideraremos que las variables son entidades elementales: un número, un
carácter, un valor verdadero o falso; mientras que los objetos son entidades
complejas que pueden estar formadas por mucha información. Pero ambas cosas
ocupan lo mismo: un espacio de memoria (que puede ser más o menos grande).

Existen algunos objetos especiales que pueden ser considerados como _clases_
predefinidas JavaScript (como la clase Date para manejo de fechas, la clase
RegExp para manejo de expresiones regulares y búsqueda de patrones en texto, y
la clase Error para almacenar información relacionada con los errores y otros).

Estos objetos representan básicamente funcionalidades ampliadas o incorporadas
al propio lenguaje que nos permitirán manejar, entre otras cosas, estructuras de
datos y nuevas utilidades, a continuación veremos algunas de ellas.

En realidad, más que de objetos deberíamos hablar de clases de objetos, ya que
un objeto en sí sería por ejemplo una fecha, y la clase de objeto a la que
pertenece sería la clase `Date`.

Para crear un nuevo objeto de una clase ya definida, la forma habitual es
escribir:

```javascript
let nuevoObjeto = new ClaseObjeto();
```

Donde `nuevoObjeto` es el objeto nuevo que creamos. `new` es el operador que
indica a JavaScript que estamos creando un nuevo objeto. `ClaseObjeto` es la
clase a la que pertenecerá el nuevo objeto. Dentro de los paréntesis, y
dependiendo del tipo de objeto, podremos poner algunas características del
objeto, por ejemplo en los arrays podemos poner los elementos que lo componen.

Sin embargo no es la única forma de crear un objeto, ya que dependiendo de la
clase que se trate, puede haber otras formas de crearlo. Por ejemplo al
asignarle un valor a una nueva variable, podemos estar creando un objeto tipo
número (Number) o cadena de texto (String), también los arrays podemos crearlos
de varias maneras.

Algunas clases de objetos son:

* `Number`: Números.
* `Math`: Operaciones con números.
* `Date`: Fechas.
* `String`: Cadenas de texto.
* `Array`: Colecciones de elementos.

Sin embargo nos faltan por ver algunas clases de objetos, los cuales aunque
menos importantes desde el punto de vista de la programación debemos tenerlos en
cuenta.

## El objeto `Boolean`

El objeto o clase de objetos `Boolean` incluye las variables booleanas o lógicas
que sólo pueden tomar los valores `true` y `false`. Para construir un objeto de
clase `Boolean` basta con asignar un valor booleano a una variable, pero también
podemos crearlo por el método general:

```javascript
let booleano = new Boolean();
```

Dependiendo del valor del parámetro que le pasemos dentro del paréntesis el
valor devuelto será `true` o `false`. Si pasamos directamente los valores `true`
o `false`, nos devolverá esos valores. Si no pasamos ningún valor o pasamos como
valor el número 0 o una cadena de texto vacía, devolverá false, en los demás
casos devolverá true. El objeto Boolean no tiene propiedades y métodos propios,
sino los heredados del objeto `Object`, el cual veremos más adelante.

## El objeto `Function`

Las funciones también se consideran objetos en JavaScript, y se forman a partir
de la clase `Function`. Aunque la forma más habitual de declararlas es la que
hemos visto:

```javascript
function miFuncion() { }
```

También lo podemos hacer mediante la forma general de construir objetos:

```javascript
const miFuncion = new Function();
```

Tal como ocurre en la forma habitual de declararlas, dentro del paréntesis
escribiremos, si hace falta, los parámetros que necesite la función y el cuerpo
de la función. No tiene propiedades ni métodos propios, sino los heredados del
objeto `Object` que veremos más adelante.

## El objeto `RegExp`

Las expresiones regulares sirven para comprobar si una cadena de texto sigue un
determinado patrón, o si contiene unos caracteres determinados. Se emplea, por
ejemplo para comprobar en un formulario si el texto pasado por el usuario es un
e-mail, o un número de teléfono, etc.

Estas expresiones van encerradas entre las barras inclinadas `/.../` y tienen
su propia sintaxis. Por ejemplo la siguiente expresión comprueba si el el texto
pasado es una dirección de página web:

```javascript
const patron = /^http[s]?://\w[\.\w]+$/i;
```

Debido a su complejidad lo más cómodo es tener una lista de las expresiones
regulares para los casos más comunes, tales como comprobar direcciones web,
e-mail, num teléfonos, fechas, etc.

Para declarar un objeto RegExp podemos hacerlo simplemente asignando a una
variable una expresión regular, tal como en el ejemplo anterior, o mediante el
método general de crear objetos:

```javascript
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

## El objeto `Object`

El objeto `Object` es el que está en un nivel superior en la jerarquía, y del
que se derivan todos los demás objetos de JavaScript. Permite por lo tanto crear
nuevas clases de objetos. Sus métodos y propiedades son heredados por el resto
de los objetos JavaScript. Algunos de ellos ya los hemos visto antes y otros los
explicaremos más detenidamente.

* Los métodos son: `.toString();` el cual devuelve siempre una cadena de texto
  con el nombre del objeto (por ejemplo transforma true en "true") y `valueOf()`
  el cual dependiendo del objeto devuelve un valor u otro, aunque casi siempre
  es el propio objeto.
* Sus propiedades son `constructor` y `prototype`, las cuales las veremos más
  adelante cuando veamos con más detenimiento el objeto `Object`.

***

[Continuar](../03-exercises.md)
