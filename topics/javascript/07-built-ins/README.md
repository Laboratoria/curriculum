# Objetos preconstruidos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

Existen algunos objetos y funciones especiales que vienen con JavaScript pero
que no son parte del lenguaje en sí. Se conocen como la _librería estándar_
(standard library) ya que siempre podemos contar con ellos. Son como unas
librerías que no tenemos que importar y siempre están disponibles,
independientemente del entornos donde se ejecute nuestro código (navegador,
node, ...). Entre estas funciones están los constructores `Date`, `RegExp` o
`Error` y el objeto `Math`.

## El constructor `RegExp`

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
e-mail, num teléfonos, fechas, etc.

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
