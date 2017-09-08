# Trabajando con `arrays` y `objects`
- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Aprender qué son propiedades y métodos en JavaScript
- Aprender los principales propiedades y métodos de `arrays` y `objects`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 4 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](http://hectorip.github.io), y del capítulo 3 y 4 de [JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf), Nick Morgan, 2015;

***

## Propiedades y métodos
A lo largo de este curso hemos visto una serie de comandos un tanto extraños que nos permiten hacer cosas en JavaScript. Por ejemplo, hemos visto que al colocar `.length` al final de un `string` nos devuelve la cantidad caracteres del `string`. También hemos visto que al colocar `.toUpperCase()` al final de un `string` nos devuelve el mismo `string` pero todo en mayúscula.

Estos son ejemplos de **propiedades** y **métodos** en JavaScript. Las propiedades generalmente nos _**dicen**_ algo sobre el valor asociado y los métodos usualmente _**hacen**_ algo sobre el valor asociado. Por ejemplo, `lenght` es una propiedad que nos dice la longitud del valor asociado, mientras que `toUpperCase()` es un método que hace la acción de transformar a mayúscula el valor asociado.

Lo interesante de las propiedades y los métodos es que no son únicamente para los `strings`, que es lo que hemos usado hasta ahora. Podemos acceder a las propiedades y utilizar métodos en los `arrays` y los `objects` también. De hecho, casi todos los valores en JavaScript tienen propiedades o métodos. Las excepciones son solo `null` y `undefined`.

Las dos maneras comunes de acceder a propiedades o métodos en Javascript son con un punto (`.`) y con corchetes (`[]`). Ambas `valor.x` y `valor[x]` acceden a una propiedad en valor, pero no necesariamente la misma propiedad. La diferencia radica en cómo se interpreta `x`. Cuando usamos un punto, la parte después del punto debe ser un nombre de variable válido y nombra de manera directa a la propiedad o el método. Cuando usamos corchetes, la expresión dentro de los corchetes es _**evaluada**_ para obtener el nombre de la propiedad. Mientras que `valor.x` busca la propiedad del valor llamada “x”, `valor[x]` intenta _evaluar_ la expresión x y usa el resultado como el nombre de la propiedad.

## Propiedades y métodos de los `arrays`

Ya hemos visto una manera de acceder a las propiedades de un `array`. Cuando accedemos a los elementos de un `array` (utilizando los corchetes `[]` y el _index_) estamos realmente accediendo a sus propiedades. Esto porque **los elementos de un array se almacenan en propiedades**. Entonces, cuando hacemos `myArray[0]` le estamos realmente diciendo a JavaScript que nos devuelva el valor almacenado en la propiedad `0` del array, que está definido como el primer valor de la "primera casilla" del `array`.

### Encontrando la longitud de un `array`
Al igual que los `strings`, los `arrays` en JavaScript vienen con una propiedad `length` que nos devuelve la longitud del `array`, es decir, el número de elementos que componene el array. Veamos un ejemplo:

```js
var myArray = [300, "hola mundo", [100, "HOLA MUNDO"]];

console.log(myArray.length);
// → 3

```

### Añadiendo elementos a un `array`
Para añadir un elemento al final de un `array` JavaScript cuenta con el **método** `push`. Recordemos que es un método porque **hace** algo con el valor asociado - en este caso, agrega un elemento al final del array. Veamos un ejemplo:

```js
var myArray = [300, "hola mundo", [100, "HOLA MUNDO"]];
console.log(myArray.length);
// → 3

myArray.push("último elemento");
// → 4

console.log(myArray);
// → (4) [300, "hola mundo", Array(2), "último elemento"]
```

El acto de correr un método se conoce como "llamar" al método. Esto es porque, en el fondo, **los métodos son propiedades que continenen funciones** - y las funciones se "llaman" o "invocan". Tiene sentido, ¿cierto? Las propiedades nos _**dicen**_ algo sobre el valor asociado y los métodos usualmente _**hacen**_ algo sobre el valor asociado. Los métodos logran _**hacerlo**_ gracias a que contienen funciones.  

Cuando llamamos el método `push` dos cosas suceden. Primero, el elemento que colocamos entre paréntesis (en el ejemplo anterior, el `string` "último elemento") es añadido al `array`. Segundo, la nueva longitud se retorna. Por eso es que despues de correr el código `myArray.push("último elemento");` se imprime el número `4` en la consola - porque el array ahora tiene una longitud de `4`.

### Otros métodos de los `arrays`

JavaScript nos brinda varios métodos para manipular `arrays`. Con ellos podemos añadir elementos al principio del `array`, remover elementos del `array`, concatenar `arrays`, unir más de un `array` y muchas cosas más.

Como es costumbre en este curso, debes acostumbrarte a "aprender a aprender". Recordemos que en el mundo de la tecnología, el **auto-aprendizaje** es esencial. Constantemente salen herramientas, lenguajes o tecnologías nuevas que debes aprender por tu cuenta para mantenerte al día. Por eso, es importante que, desde el principio, te acostumbres a aprender por tu cuenta y a tomar el control de tu desarrollo profesional.

A continuación te damos una lista de métodos de los `arrays` que debes investigar por tu cuenta y aprender a utilizar.

- `push()`
- `shift()`
- `unshift()`
- `pop()`
- `concat()`
- `indexOf()`
- `join()`
- `slice()`
- `splice()`
- `lastIndexOf()`

Recuerda que para tu investigación te recomendamos la información que ofrece la [MDN sobre arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). También puedes buscar en Google e ir experimentando con la consola tú misma viendo cómo se comporta cada método. Te sugiero que abras la consola, crees un `array` cualquiera y vayas probando lo que aprendes para garantizar que entienes cómo funcionan las cosas.

Recuerda también que puedes explorar otras formas de auto-aprendizaje:

* Busca otros recursos en la web. Uno muy bueno es stackoverflow. En español suele haber menos contenido de calidad, así que quizás tengas que apoyarte con el traductor de Google.
* Consulta con una compañera de clases
* Consulta con una amiga (o amigo) que sepa de programación :)
***
_NOTA: Es importante NO avanzar si no has logrado comprender bien los conceptos anteriores. Lo que continúa de este curso se construye sobre estos conceptos, así que tómate el tiempo para aprender bien antes de avanzar._
***

## Propiedades y métodos de los `objects`

Ya hemos visto que los _keys_ de los `objects` son equivalente a sus propiedades. Y hemos visto cómo acceder a estas propiedades. Precisamente al crear par _key-value_ de un objeto le estamos creando una propiedad que almacena el valor brindado. Recordemos nuestro el ejemplo con el object `movie`:

```js
  var movie = {
    title: "Back to the Future",
    director: "Robert Zemeckis",
    stars: [ "Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    "year of release": 1984,
    plot: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    oscar: 1,
    tags: ["Adventure", "Comedy", "Sci-Fi"],
    "other awards": ["best sound", ]
  }

  console.log(movie["title"]);
  // → Back to the Future

  console.log(movie[title]);
  // → Uncaught ReferenceError: title is not defined

  console.log(movie."title");
  // → Uncaught SyntaxError: Unexpected string

  console.log(movie.title);
  // → Back to the Future
```

Con `movie["title"]` o `movie.title` estamos accediendo a la **propiedad** llamada "title" del object `movie`.

A los `objects` que nosotros creamos (como el object `movie` del ejemplo) también podemos crearle **métodos**. Esto lo logramos incluyendo una `función` como propiedad. Pero, de momento, no te preocupes por esto. Lo veremos más adelante. Por ahora lo importante es saber es que, así como los `strings` y `arrays` tienen tanto **propiedades** como **métodos**, lo mismo sucede con los `objects`. Y recuerda: las propiedades nos _**dicen**_ algo sobre el valor asociado y los métodos usualmente _**hacen**_ algo sobre el valor asociado. Los métodos logran _**hacerlo**_ gracias a que contienen funciones.  

### ¿La longitud de un `object`?
La propiedad `length` que podemos usar para calcular la longitud de un `string` o de un `array`, no es una propiedad válida para los `objects` que nosotros creamos. Es decir, si nuestro object `movie` que hemos venido usando tratamos de aplicar la propiedad `length` el resultado es `undefined`.

```js
var movie = {
  title: "Back to the Future",
  director: "Robert Zemeckis",
  stars: [ "Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
  "year of release": 1984,
  plot: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
  oscar: 1,
  tags: ["Adventure", "Comedy", "Sci-Fi"],
  "other awards": ["best sound", ]
}

console.log(movie.length);
// → undefined

```

Lo que sí podemos hacer es acceder a la lista de _keys_ de un `object`. Esto lo podemos hacer con el método `Object.keys()`, así:

```js
var movie = {
  title: "Back to the Future",
  director: "Robert Zemeckis",
  stars: [ "Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
  "year of release": 1984,
  plot: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
  oscar: 1,
  tags: ["Adventure", "Comedy", "Sci-Fi"],
  "other awards": ["best sound", ]
}

console.log(Object.keys(movie));
// → (8) ["title", "director", "stars", "year of release", "plot", "oscar", "tags", "other awards"]

```

***

[Continuar](07-combining-arrays-with-objects.md)
