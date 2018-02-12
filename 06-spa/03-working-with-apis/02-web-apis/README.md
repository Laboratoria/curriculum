# Web APIs

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `15min`

***

## Objetivos de Aprendizaje

- Conocer e identificar los distintos tipos de Web APIs con los que podemos
  trabajar

## ¿Dónde puedo saber qué Web APIs públicas hay? 

Ya que en esta unidad vamos a trabajar con Web APIs públicas, debemos de saber 
dónde podemos ver cuáles existen. Para ello, te dejamos los siguientes recursos:

- [Public-APIS](https://github.com/abhishekbanthia/Public-APIs)
- [Any API](https://any-api.com/)
- [Public APIs - Github Repo](https://public.apis.zone/)
- [API Directory](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun/)

> **Nota:** ¿Sabías que todos estos recursos los encontramos googleando 
> `publci APIS`? Así que tu puedes encontrar aun más recursos ;).

Para el objetivo de esta lectura, vamos a enfocarnos en un recurso que no hemos
listado hace un momento: [Public APIs](https://github.com/toddmotto/public-apis).
Este repositorio a diferencia de los demás, tiene una manera sintetizada de 
mostrar la autenticación que requiere un API (los demás recursos también 
muestran este detalle pero no están a primera vista).

![Different Web APIs Auth](https://github.com/ivandevp/curricula-js/blob/378ca9e9ad8d178bf783ebbcea6383d9c44a783b/06-spa/03-working-with-apis/02-web-apis/web-apis.png?raw=true)

En la imagen anterior, podemos visualizar el apartado de las APIs de Música, en
la cual, la columna de `Auth` tiene valores distintos como: `NO`, `apiKey` u 
`OAuth`. Esto nos da un espacio a darles de cierta manera una clasificación a
las Web APIs en base a su medio de autenticación. Así que veamos un poco de qué
trata.

### Web APIs sin autenticación

Éste tipo de APIs es el más sencillo de consumir a través de AJAX y a su vez el
de mayor uso público debido a que no debes de registrarte para obtener una clave
o algo. simplemente haces una petición al endpoint especificado y listo. Ejemplo
de estas APIs pueden ser: Pokeapi, Swapi, entre otras. Aquí te dejamos un _pen_
mostrando lo que puedes hacer con la API de [Lyrics.ovh](https://lyricsovh.docs.apiary.io/#).

<iframe height='760' scrolling='no' title='Lyrics API' src='//codepen.io/ivandevp/embed/NyjmMm/?height=760&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/NyjmMm/'>Lyrics API</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Web APIs con `apiKey`

En estas APIs, su método de autenticación es a través de un `API Key` que 
acompaña a todas las peticiones que se realizan hacia algún endpoint (recurso).
En la mayoría de casos, deberás registrarte para obtener este `apiKey`. Aquí
te dejamos un ejemplo con Google Maps.

<iframe height='760' scrolling='no' title='Laboratoria en Google Maps' src='//codepen.io/ivandevp/embed/qxmGaY/?height=760&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/qxmGaY/'>Laboratoria en Google Maps</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

En algunas ocasiones, los API Keys generados deben de ir en las cabeceras HTTP
de la petición para que en el backend se haga la verificación del token y pueda
autenticarse correctamente. Por ejemplo, en la API de [CoinAPI.io](https://www.coinapi.io/),
el token se envía a través del header `X-CoinAPI-Key`, acá te mostramos un pen
de cómo se haría la petición en este caso:

<iframe height='760' scrolling='no' title='BYReOj' src='//codepen.io/ivandevp/embed/BYReOj/?height=760&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/BYReOj/'>BYReOj</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

