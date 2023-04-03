---
type: read
duration: 15min
---

# Try...catch

JavaScript soporta un conjunto compacto de sentencias específicamente para el
manejo de flujo, que pueden ser utilizadas para incorporar mayor interactividad
a tus aplicaciones.

La guía de referencia de JavaScript contiene detalles exhaustivos sobre las
sentencias mencionadas en este capítulo. El punto y coma (`;`) se utiliza para
separar sentencias de código JavaScript.

En Javascript cualquier expresión es también una sentencia. Una sentencia
condicional es un conjunto de comandos que se ejecutan si una condición es
verdadera. JavaScript soporta dos sentencias condicionales: `if...else` y
`switch`.

A través de toda la formación que a este minuto has recibido, ya sabes cuáles
son las sentencias condicionales, además conoces los bucles o loops, que
pertenecen a toda el área de control de flujo en JavaScript, en ésta parte me
gustaría más contarte a cerca de las sentencias de manejo de excepciones.
Prácticamente cualquier objeto puede ser lanzado (_thrown_ en inglés) en
JavaScript. Sin embargo, no todos los objetos lanzados son creados igual.
Mientras que es bastante común lanzar números o strings como errores,
frecuentemente es más efectivo utilizar uno de los tipos de excepciones
específicamente creados para este proposito:

## Sentencia throw

Utiliza la sentencia throw para lanzar una excepción. Cuando lanzas un
excepción, se especifica la expresión que contiene el valor para ser lanzado:

```js
throw expresión;
```

Puedes lanzar cualquier expresión, no solo expresiones de un tipo especifico. En
el siguente código lanzamos varias excepciones de varios tipos:

```js
throw "Error2";   // Tipo string
throw 42;         // Tipo número
throw true;       // Tipo booleano
throw {toString: function() { return "¡Soy un objeto!"; } };
```

Puedes especificar un objeto cuando lanzas una excepción. A continuación, puedes
hacer referencia a las propiedades del objeto en un bloque catch. En el
siguiente ejemplo se crea un objeto myUserException del tipo UserException y lo
usa en la sentencia throw.

```js
// Crear un tipo de objeto UserException
function UserException (aviso){
  this.aviso=aviso;
  this.nombre="UserException";
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function () {
  return this.nombre + ': "' + this.aviso + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");
```

## try...catch

La sentencia `try...catch` marca un bloque de instrucciones a intentar que
pueden causar alguna excepción, y declarar una o más respuestas en caso de que
una excepción sea arrojada. Si una excepción es arrojada, la sentencia
`try...catch` se encarga de atraparla.

La sentencia `try...catch` consiste en un bloque `try`, el cuál contiene una o
más instrucciones, y ninguno o varios bloques `catch`, conteniendo sentencias
que especifican que hacer si una excepción es arrojada en un bloque `try`. Se
desea que las instrucciones dentro del bloque `try` se ejecuten con éxito, de
caso contrario caerán en el bloque `catch` para ser controladas. Si ninguna
instrucción dentro del bloque `try` (o en una función llamada dentro del bloque
try) arroja una excepción, el control pasa inmediatamente al bloque `catch`. Si
ninguna excepción es arrojada en el bloque `try`, el bloque `catch` es ignorado.
Por último se ejecuta el bloque `finally` luego de que los bloques `try` y
`catch` hayan sido ejecutados, pero antes de las instrucciones que se encuentren
luego de la sentencia `try...catch`.

El siguiente ejemplo usa la sentencia `try...catch`. El ejemplo llama a una
función que retorna el nombre de un mes desde un arreglo basado en un valor
pasado como argumento a la función. Si el valor no corresponde con el número de
un mes (entre `1` y `12`), una excepción es arrojada con el valor
`'InvalidMonthNo'` y las instrucciones en el bloque catch le asignarán a la
variable `monthName` el valor de `'unknown'`.

```js
function getMonthName (mo) {
  mo = mo - 1; // Ajusta el indice del arreglo para el arreglo de meses (1=Jan, 12=Dec)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //Arroja la palabra "InvalidMonthNo" al ocurrir una excepción
  }
}

try { // instrucciones a probar
  monthName = getMonthName(myMonth); // La función puede arrojar una excepción
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // Pasa el objeto de la excepción a un manejador de errores
}
```

## El bloque catch

Un bloque `catch` es usado para manejar todas las excepciones que pueden ser
generadas en el bloque `try`.

El bloque `catch` especifica un identificar (catchID en la sintaxis anterior)
que mantiene el valor especificado por la sentencia `throw`; puedes usar este
identificador para obtener información acerca de la excepción que fue arrojada.
JavaScript crea este identificador cuando ha entrado en el bloque `catch`; el
identificador dura mientras dure el bloque `catch`; después de que el bloque
`catch` termine su ejecución, el identificador ya no está disponible.

Por ejemplo, el siguiente código arroja una excepción. Cuando la excepción
ocurre, el control es transferido al bloque `catch`.

```js
try {
  throw "myException" // genera una excepción
}
catch (e) {
  // instrucciones para manejar cualquier excepción generada
  logMyErrors(e) // Pasa el objeto de excepción a un manejador de errores
}
```
