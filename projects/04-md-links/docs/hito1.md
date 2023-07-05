### **HITO 1:** Javascript API

Comienza haciendo la versión más sencilla de mdlinks. Crea una función que
devuelva una promesa con los links encontrados dentro de un archivo markdown
específico.

Esta función debe ser un módulo que puede **importarse** en otros scripts de
Node.js y debe ofrecer la siguiente interfaz:

`mdLinks(path)`

Argumento:

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node (transformar a absoluta).

Valor de retorno:

La función `mdLinks(path)` debe **retornar una promesa** que **resuelva a un**
**arreglo de objetos**, donde cada objeto representa un link y contiene las
siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.

Ejemplo:

(resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

Test unitarios:

Los tests unitarios son una excelente forma de verificar si tus funciones están
funcionando correctamente mientras escribes el código. En este proyecto,
recuerda que no hay una interfaz gráfica de navegador, por lo tanto para
poderlo probar es necesario recurrir a los test unitarios.

Recuerda que es muy importante testear tus funciones puras, mientras
escribes la función `mdLinks`. Y cuando ésta esté terminada, también deberás
testearla  al final asegurándote que resuelva un arreglo con la
información esperada.

Ejemplo:

```js

describe('mdLinks', () => {
  it('debería retornar un arreglo con 3 links para un archivo .md con 3 links', ()=>{
    return mdLinks('miArchivo.md').then((result) => {
      expect...;
    });
  });
});

```

#### Tareas de este hito

* Crea una promesa

  El valor de retorno de nuestra librería es una _Promesa_ que resuelve un
  _array_. Prueba leyendo sobre las promesas y creando una por tu cuenta
  utilizando `new Promise()`

  Es importante que sepas qué es un callback pues las promesas los utilizarán.

* Comprueba si la ruta ingresada es relativa o absoluta

  Los módulos de node.js que utilizarás después, trabajan con rutas absolutas.
  Entonces, si a la función mdlinks, se le pasa una ruta relativa, debes
  convertirla a absoluta primero. Puedes valerte del módulo `path`, con su
  método `isAbsolute()`

* Comprueba que la ruta existe en el computador

  Una vez que tienes la ruta absoluta, asegúrate que la ruta exista en el
  computador. Este paso es importante, ya que si la ruta ingresada es erronea
  la función `mdLinks` deberá rechazarse con un error.

* Asegúrate que el archivo es markdown

  Como la ruta que se utilizará para este hito, será la ruta de un archivo
  en específico, aventúrate a conocer cuál es su extensión.

  Recuerda, las extensiones son esas letras al final del nombre de un archivo,
  por ejemplo: .js, .txt, .doc, etc

  Aquí podrá ser útil el módulo `path`.

  En caso de que la extensión del archivo no sea md, la promesa de la función
  mdLinks debería rechazarse con un error.

* Lee un archivo

  Ahora que sabes que el archivo es del tipo markdown, lee este archivo y
  retorna su contenido. Para ver este contenido puedes utilizar un
  `console.log()` al momento de ejecutar la función.

  El módulo `fs` (FileSystem) te será de utilidad. Como mencionamos en las
  consideraciones técnicas, preferimos que uses `readFile` (en lugar de
  `readFileSync`) y recomendamos el módulo `fs/promises` para utilizar estas
  funciones con promesas.

* Encuentra los links dentro del documento.

  Una vez tienes acceso al contenido del archivo, extrae los links que
  encuentres dentro del mismo. Estos links los tendrás que armar dentro de un
  arreglo para que la función de mdLinks los pueda resolver.

⚠️ Antes de pasar al siguiente hito, asegúrate de escribir los tests
correspondientes al código del hito actual.

***