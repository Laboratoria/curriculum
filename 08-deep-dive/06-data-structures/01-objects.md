# Objetos

* Formato: `lectura`
* Duración: `Xmin`

***

Todos los objetos en JavaScript son mapas (diccionarios) de strings a valores.
Una entrada (llave, valor) en un objeto es llamada una _propiedad_. La llave de
la propiedad es siempre una cadena de texto (string). El valor de una propiedad
puede ser cualquier valor en JavaScript, incluido una función. Los _métodos_ son
propiedades cuyo valor es una función.

## Tipos de propiedades

Existen 3 tipos de propiedades:

### Properties (o propiedades de datos con nombre)

Son las propiedades normales en un objeto, eso es, las llaves y valores. _Named
data properties_ (propiedades de datos con nombre) incluyen métodos. Esto es el
tipo de propiedad más común.

### Accesors (o propiedades de acceso)

Son métodos especiales que su invocación luce como propiedades de lectura y
escritura. Las propiedades normales son lugares de almacenamiento para valorespm
de propiedades; los `accesors` te permiten operar sobre los valores de esas
propiedades. También puede ser _propiedades virtuales_ si se desea.

### Internal properties

Estas propiedades existen solo en la especificación del lenguaje ECMAScript. No
son directamente accesibles desde JavaScript, pero existen formas indirectas de
hacerlo. La especificación escribe las llaves de las propiedades internas entre
corchetes (`[]`). Por ejemplo, `[[Prototype]]` almacena el prototipo de un
objeto y se puede leer a través del método `Object.getPrototypeOf()`.
