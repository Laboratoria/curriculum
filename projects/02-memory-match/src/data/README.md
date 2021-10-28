# Data (sets de cartas)

Este directorio (carpeta) contiene dos fuentes de datos (sets de cartas) que
podemos usar en el proyecto. Cada set está en una sub-carpeta distinta:

* [`pokemon`](./pokemon)
* [`webdev`](./webdev)

Dentro de cada carpeta encontrarás dos archivos: uno con la extensión `.js` y
otro `.json`. Ambos archivos contienen la misma data; la diferencia es que el
`.js` lo usaremos a través de un [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import),
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

## ¿Cómo agrego mis propios sets de cartas?

Éstas no son las únicas cartas que podemos usar. Si quieres puedes añadir los
sets de cartas que consideres para tu aplicación. Si eliges agregar sets de
cartas te recomendamos mantener la misma estructura de los datos (ambos sets de
ejemplo usan la misma estructura).

Por ejmplo, imaginemos que queremos agregar un set de cartas de gatitos. Para
hacernos la vida más fácil, dupliquemos un set existente y modifiquémoslo:

```sh
# Desde el directorio raíz de la aplicación en el terminal, copiamos
# recursivamente (con la opción `-r`, ya que se trata de un directorio) el
# directorio `data/pokemon` a la ruta `data/gatitos`.
cp -r data/pokemon data/gatitos

# Renombramos los archivos de la carpeta gatitos...
mv data/gatitos/pokemon.js data/gatitos/gatitos.js
mv data/gatitos/pokemon.json data/gatitos/gatitos.json
```

Ahora ya puedes editar el contenido de los archivos de gatitos según tus
necesidades. Ten en cuenta que puedes cambiar el número de elementos (cartas) en
cada set si quieres también cambiar la dificultad del juego :wink:.
