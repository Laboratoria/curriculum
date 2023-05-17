---
type: read
duration: 30min
---

# AJAX con fetch

## Objetivos de Aprendizaje

- Aprender cómo hacer llamadas asíncronas con Javascript moderno
- Revisar fetch y sus funcionalidades
- Usar promesas para encadenar varias llamadas http, o hacerlas en paralelo

## Alternativa a XHR y JQuery, pero solo con javascript puro

Cuando usamos XHR vemos que se vuelve tedioso hacer peticiones. Tenemos que
poner un montón de código para que recién funcione, además estamos en la
obligación de usar callbacks, que rápidamente puede resultar en nuestro código
transformado en espagueti.

¿qué sucede si queremos hacer varias peticiones al mismo tiempo?

¿qué pasa si necesitamos datos de una llamada, para luego hacer otra, y otra?

Por suerte para nosotras actualmente existe `fetch`, implementado por la mayoría
de los navegadores (excepto _Internet Explorer_ y _Safari_), que usa _Promesas_
para retornar los resultados, lo que trae como beneficio inmediato el no tener
que depender de _callbacks_ para recibir las respuestas de las peticiones. El
usar promesas también nos permite anidarlas o ejecutarlas en paralelo, haciendo
nuestro código mucho más ordenado. Ahora, mucha charla, mejor veamos cómo usarla
y algunos ejemplos.

## Uso básico de fetch

```js
fetch(url).then((response) => {
  if (response.status !== 200) {
    // Código cuando recibimos una respuesta corréctamente del servidor
  } else {
    // Código en caso de que nos respondan con algún error
  }
}).catch((error) => {
  /* Código en caso de que la llamada falle
   * Como cuando el usuario NO tiene internet, o se haya cortado la
   * comunicación.
   */
});
```

Como podemos ver, lo único que debemos proveer a fetch es la URL a la que
llamaremos, luego a través de `then` escribimos la función que recibirá la
respuesta desde el servicio. La diferencia con XHR o JQuery acá, es que
cualquiera sea la respuesta, esta llegará a la función que colocas en `then`. La
promesa solo fallará (pasando a ejecutar la función que está en `catch`) si es
que hay algún problema con la conexión o no se recibe respuesta alguna.

Observa también que la respuesta llega como un objeto `response`, que contiene
el estado HTTP de la respuesta.

Ahora, como vimos antes, muchas **API** usan el formato JSON para comunicar los
datos, en el caso de `fetch`, tenemos que hacer solo un paso extra para obtener
el JSON :

```js
fetch(url).then((response) => {
  if (response.status !== 200) {
    return response.json();
    // Solo si es que sabemos que la respuesta es JSON, o fallará
  } else {
    // Código en caso de que nos respondan con algún error
  }
}).then((respuestaJson) => {
  // Código que usa el JSON
}).catch((error) => {
  /* Código en caso de que la llamada falle
   * Como cuando el usuario NO tiene internet, o se haya cortado la
   * comunicación.
   */
});
```

Como vemos, `response.json()` también retorna una promesa (todo es muy
asíncrono), pero obtener el JSON queda bastante cómodo a través de un segundo
`then` que nos da el JSON que nos devuelve la API finalmente.

Si la URL en cambio, no responde con un JSON, si no que con una imagen, por
ejemplo, entonces debemos usar el método acorde :

```js
response.json() //Para respuestas en JSON
response.blob() //Para archivos binarios como imágenes
response.text() //Para respuestas en texto simple y plano
```

Todos los métodos anteriores funcionan con promesas, así que hay que anidar
las funciones `then` acorde a esto.

Puede que hacer todo así parezca más trabajo, o mucho más código que en las
soluciones anteriores, pero ahora veremos que para hacer llamadas una tras otra,
o incluso hacer peticiones en paralelo, esta es la mejor opción de todas.

## Llamadas sucesivas con fetch

Muchas veces cuando estamos usando una API, necesitamos ciertos datos de una
llamada para poder hacer la siguiente y así. Gracias a que `fetch` usa promesas
esto se vuelve mucho más fácil y natural, veamos un ejemplo :

```js
fetch(url1).then((response) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error("La llamada a la API falló");
  }
}).then((jsonData) => {
  return fetch(jsonData.url); // Supongamos que obtenemos otra url de los datos
}).then((response) => {
  if (response.status == 200){
    return response.json();
  } else {
    throw new Error("La segunda llamada a la API falló");
  }
}).then((jsonData) => {
  // Código que procesa los datos de la segunda llamada
}).catch((error) => {
  // Código que se ejecuta en caso de **cualquier** error
});
```

Como vemos, podemos aprovechar todo el poder de las promesas para poder hacer
una tras otras las peticiones, de una forma ordenada, sin caer en
_callback hell_ (callbacks dentro de callbacks dentro de callbacks...). Otra
cosa que ganamos al hacer las llamadas de esta forma es que concentramos todo el
código que maneja errores en solo una función que se coloca en `catch`.

## Muchas llamadas a la vez

Otro caso muy común mientras programamos nuestras aplicaciones es que
necesitemos de varias peticiones a API, o recursos de la internet, como
imágenes, todo al mismo tiempo. En estos casos, nuevamente, gracias a que
`fetch` usa promesas para retornar los resultados, es que podemos aprovecharnos
de ellas para hacer cosas como la siguiente :

```js
const llamadas = [];
llamadas.push(fetch(url1));
llamadas.push(fetch(url2));
llamadas.push(fetch(url3));

Promise.all(llamadas).then((responses) => {
  return responses.map(response => response.json());
  // En caso de que sean llamadas a api
}).then((jsonResponses) => {
  // Código que maneja las múltiples llamdas y sus respuestas en JSON
}).catch((error) => {
  // Código que maneja errores
});
```

Como vemos, el código es mucho más directo y corto que si usaramos XHR o JQuery
para hacer lo mismo. Otra cosa es el uso de map, que recorre todas las
respuestas y devuelve un arreglo con las promesas de extraer la respuesta en
JSON.
