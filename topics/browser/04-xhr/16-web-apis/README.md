# Web APIs

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `40min`

***

## Objetivos de Aprendizaje

- Conocer e identificar los distintos tipos de Web APIs con los que podemos
  trabajar

## ¿Dónde puedo saber qué Web APIs públicas hay?

Ya que en esta unidad vamos a trabajar con Web APIs públicas, debemos de saber
dónde podemos ver cuáles existen. Para ello, te dejamos los siguientes recursos:

- [Public-APIS](https://github.com/abhishekbanthia/Public-APIs)
- [Any API](https://any-api.com/)
- [Public APIs - Github Repo](https://github.com/public-apis/public-apis)
- [API Directory](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun/)

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

<iframe
  height='760'
  scrolling='no'
  title='Lyrics API'
  src='//codepen.io/ivandevp/embed/NyjmMm/?height=760&theme-id=0&default-tab=css,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [Lyrics API](https://codepen.io/ivandevp/pen/NyjmMm/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

### Web APIs con `apiKey`

En estas APIs, su método de autenticación es a través de un `API Key` que
acompaña a todas las peticiones que se realizan hacia algún endpoint (recurso).
En la mayoría de casos, deberás registrarte para obtener este `apiKey`. Aquí
te dejamos un ejemplo con Google Maps.

<iframe
  height='760'
  scrolling='no'
  title='Laboratoria en Google Maps'
  src='//codepen.io/ivandevp/embed/qxmGaY/?height=760&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen[ Laboratoria en Google Maps](https://codepen.io/ivandevp/pen/qxmGaY/)
  by Ivan ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

En algunas ocasiones, los API Keys generados deben de ir en las cabeceras HTTP
de la petición para que en el backend se haga la verificación del token y pueda
autenticarse correctamente. Por ejemplo, en la API de [CoinAPI.io](https://www.coinapi.io/),
el token se envía a través del header `X-CoinAPI-Key`, acá te mostramos un pen
de cómo se haría la petición en este caso:

<iframe
  height='760'
  scrolling='no'
  title='BYReOj'
  src='//codepen.io/ivandevp/embed/BYReOj/?height=760&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [BYReOj](https://codepen.io/ivandevp/pen/BYReOj/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

### Web APIs con `OAuth`

OAuth es un protocolo de autorización que te permite obtener acceso limitado a
aplicaciones de terceros para obtener datos y luego usar dichos datos para el
registro o uso de un web service o API. Aquí dejamos un ejemplo para que veas
a qué nos referimos:

<iframe
  height='760'
  scrolling='no'
  title='YeQwOe'
  src='//codepen.io/ivandevp/embed/YeQwOe/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [YeQwOe](https://codepen.io/ivandevp/pen/YeQwOe/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

¿No notaste la diferencia? Si bien esta implementación es similar a las que
usan un API Key como método de autenticación, para generar ese `key` que se puede
ver en la URL del **GET Request**, se debe crear una aplicación en [Stack Apps](https://stackapps.com/)
y para poder hacerlo, es necesario registrarse, al momento del registro ofrece
una opción de realizarlo mediante Facebook. Cuando esto sucede, el usuario
garantiza que StackExchange puede obtener ciertos datos de su cuenta de Facebook
y estos datos son usados para crear la cuenta y configurar la app que se cree
en Stack Apps. Ese proceso es lo que OAUth permite realizar de manera
estandarizada.

Otro ejemplo, si pruebas acceder al API de Spotify, tu te puedes conectar a él
mediante Facebook y obtener acceso a hacer búsquedas de canciones, artistas,
playlists y demás.

## Autenticación y Autorización

Estos dos términos fueron mencionados a lo largo de esta lectura, es importante
hacer mención que son 2 aspectos de seguridad que las APIs toman en cuenta al
momento del diseño e implementación.

La autenticación es el proceso de verificar que eres el usuario que indicas ser.
Es decir, en un inicio de sesión, tu usuario y contraseña deben de coincidir con
los datos que tiene almacenado el sistema, este es un ejemplo de autenticación.

Mientas que la autorización, una vez comprobado que eres quien dices ser,
verifica si tienes acceso o permisos al recurso solicitado.

Aquí te dejamos un par de videos (lo sabemos, está en inglés pero Google
Translate nos puede apoyar, no a la perfección pero seguro podrás entenderlo
bajo el contexto adecuado).

[![Authorization](https://img.youtube.com/vi/ATB23YVOSq4/0.jpg)](https://youtu.be/ATB23YVOSq4)

[![Authorization](https://img.youtube.com/vi/lyHrVjx8MSw/0.jpg)](https://youtu.be/lyHrVjx8MSw)

## Más recursos

- [¿Qué es la autenticación basada en tokens?](https://carlosazaustre.es/que-es-la-autenticacion-con-token/)
- [¿Qué es OAuth?](https://aplicacionesysistemas.com/que-es-oauth/)
