# **HITO 2:** Javascript API con segundo parámetro opcional "validate"

Agrega un parámetro más a la función `mdLinks` que se llamará _validate_ y que
recibirá un valor booleano. _validate_ será un argumento opcional.

Ahora la función deberá ofrecer la siguiente interfaz:

`mdLinks(path, validate)`
  
Argumentos:

* `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada
  es relativa, debe resolverse como relativa al directorio desde donde se
  invoca node (transformar a absoluta).

* `validate`: Booleano que determina si se desea validar los links encontrados.

**Valor que resuelve la promesa con validate = false ó undefined:**
Un arreglo con objetos que representan links. Cada objeto tiene las
propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Recuerda que el valor anterior es el mismo que el del hito 1

**Valor que resuelve la promesa con validate = true:**
Un arreglo con objetos que representan links. Cada objeto tiene las
propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

Ejemplo:

(resultados como comentarios)

```js

const mdLinks = require("md-links");


mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", true)
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

⚠️ **Test unitarios.** Antes de pasar al siguiente hito, asegúrate de hacer los
tests del hito actual. Los tests aquí van a mockear http, fecth o axios.

[👈Todos los hitos](../README.md#6-hitos)
