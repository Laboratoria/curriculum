---
type: read
duration: 40min
---

# Más APIs

## Objetivos de Aprendizaje

- Incentivar a explorar otras APIs de HTML5

## Otras APIs

En esta unidad, nos hemos enfocado en algunas APIs específicas, pero como bien
lo hemos mencionado, no son las únicas y te invitamos a explorar por tu cuenta
otras.

Acá te dejamos algunas con las que puedes ir jugando:

### Canvas

El elemento HTML `<canvas>` es usado para dibujar gráficos a través de
JavaScript. A nivel de HTML, el elemento solo es un contenedor de gráficos.
El API provee variados métodos para dibujar rutas, cajas, círculos, texto y
agregar imágenes.

#### Retos

##### Jugando con formas

Dibuja las diversas formas geométricas que conozcas y comienza a darle un estilo
personalizado a cada una.

Ejemplo:

<iframe
  height='265'
  scrolling='no'
  title='CSS Basic Shapes'
  src='//codepen.io/krystalcampioni/embed/bgYxQa/?height=265&theme-id=0&default-tab=result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [CSS Basic Shapes](https://codepen.io/krystalcampioni/pen/bgYxQa/)
  by Krystal Campioni ([@krystalcampioni](https://codepen.io/krystalcampioni))
  on [CodePen](https://codepen.io).
</iframe>

##### Imágenes pixeleadas

Crea una interfaz con tus imágenes preferidas y vuélvelas pixeleadas.

Ejemplo: Mira la sección de **Quiénes somos?** en la web de [Developers
Laboratoria](http://developers.laboratoria.la/).

#### Referencias

- [HTML5 Canvas](https://www.w3schools.com/html/html5_canvas.asp)
- [Uso básico de Canvas](https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial/Basic_usage)

### File

Esta probablemente ya la haz conocido, ya sea a través del elemento `<input
type="file" />` o cuando has querido adjuntar una imagen al momento de postear
en tu red social. Cualquiera que haya sido el escenario, te habrás dado cuenta
que es muy útil saber manipularla.

#### Retos

##### Editando foto de perfil

¿Recuerdas el reto de web storage, donde podías editar los datos tu perfil? ¿Qué
te parece si ahora editas también su foto de perfil? ¿Y si recargas la página,
permanece la imagen que acabas de cambiar? Comienza a mezclar ambas APIs y
comprueba hasta donde te lleva tu imaginación. Recuerda que una buena manera de
indicar al usuario que su edición está correcta es mostrándole como quedaría
antes de guardarlo.

> Debes probar esto en tu móvil una vez terminado, estamos seguros que te
> llamará la atención ver que puedes poner un selfie que te tomas con la cámara
> como foto de perfil. Ooopss, la idea era que lo descubrieras por tu cuenta ;)

##### ¿Instragram?

Si ya sabes cómo mostrar las imágenes que tienes almacenadas en tu PC o móvil,
tienes el poder de agregar interacción con el DOM, loguearte con redes sociales
y almacenarlo en una base de datos gracias a Firebase; esto quiere decir que
¡tienes todo lo necesario para construir tu propio Instagram! Deja volar tu
imaginación y diviértete creando tu red social de fotografía a tu gusto.

> Nota, con CSS puedes hacer [filtros a tus imágenes](https://platzi.com/blog/filtros-css/)
> :scream:

#### Referencias

- [Cómo leer archivos en JavaScript a través del File API](https://www.html5rocks.com/es/tutorials/file/dndfiles/)
- [File Reader API](http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api)

### WebSockets

¿Alguna vez te has preguntado cómo funcionan las aplicaciones en tiempo real?
¿Cómo hace Facebook, WhatsApp u otra red social para notificarte que has
recibido un mensaje inmediatamente después de que el remitente lo envió? Un
ejemplo más técnico sería mediante Firebase, ¿te has dado cuenta que si escuchas
los cambios de su base de datos, tu aplicación se actualzia automáticamente?

Todo esto es gracias a los Web Sockets, HTML5 provee esta API con la que puedes
establecer conecciones _socket_ entre el navegador y un servidor. Esto significa
que existe una conexión persistente en la que puedes enviar datos en cualquier
momento.

Como bien lo menciona en el párrafo anterior, se necesita escribir un script en
el servidor y en el cliente para establecer una conexión de Web Sockets. Esto
puede ser un poco complicado sobre todo porque la implementación varía en el
back-end dependiendo del lenguaje y varía en el cliente por la compatibilidad
entre navegadores. Para hacer probar esta API de una manera sencilla, podrías
usar Node.js (JavaScript del lado del servidor) y una librería que funcione en
ambos lados (cliente y servidor) como [socket.io](https://socket.io/).

#### Retos

##### Real-time chat

Probablemente dirás que con Firebase ya puedes hacer un chat en tiempo real, aun
así te invitamos a vivir la experiencia de crearlo sin Firebase y veas como
puedes armar una aplicación en tiempo real escribiendo código tanto en el cliente
como en el servidor.

##### Canvas + Socket.io

¿Te imaginas tener una pizarra compartida? Con canvas puedes crear un lienzo y
mediante eventos del mouse dibujar en él, si estos gráficos los envías hacia un
socket podrías dibujarlo entre todos los usuarios conectados en tiempo real,
algo así como una pizarra mágina. Piénsalo, puede ayudarte cuando quieres
enseñar o estudiar junto a alguien.

##### ¿Hangouts, Skype?

Si pudieras encender la cámara de tu laptop, mostrarla en la web, y enviarla a
través de un socket, tendrías una aplicación de videollamadas. ¿Crees que aun
no puedes lograrlo? Pues te comentamos, que con un par de APIs más Web Sockets
y sobre todo tus ganas de querer hacerlo, lo puedes lograr ;)

Las APIs serían [`getUserMedia`](https://davidwalsh.name/browser-camera)
(parte de Media API) y Canvas. Y probablemente al investigar al respecto, te
encontrarás con el término de [WebRTC](https://webrtc.org/).

Tranquila, le tendrás que dedicar tiempo, pero si te interesa estamos 100%
seguros de que podrás lograrlo :).

#### Referencias

- [Introducción a los WebSockets: incorporación de sockets a la Web](https://www.html5rocks.com/es/tutorials/websockets/basics/)
- [Real time chat with NodeJS, Socket.io and ExpressJS](https://code.tutsplus.com/tutorials/real-time-chat-with-nodejs-socketio-and-expressjs--net-31708)
- [Dibujando a tiempo real con Canvas, Node.js y Socket.io](http://www.nazariglez.com/2012/07/08/dibujando-a-tiempo-real-con-canvas-node-js-y-socket-io/)
- [Streaming de video con HTML5](http://html5facil.com/tutoriales/streaming-de-video-con-html5/)

### Notifications

> La API de Notificaciones permite a una página web enviar notificaciones que
> se mostrarán fuera de la web al nivel del sistema. Esto permite a las
> aplicaciones web enviar información al usuario aunque estas estén de fondo.

Fuente: [MDN - Usando la API de Notificaciones](https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Usando_la_API_de_Notificaciones)

#### Retos

##### Notificaciones de mensajes

Ya tienes tu chat o red social ya sea con Firebase o tu propia implementación de
Web Sockets, ahora que te parece si cada vez que un usuario interactúa con tu
app, le envías una notificación. Eso estaría muy cool :muscle:

#### Referencias

- [Notificaciones Web con HTML5](https://filisantillan.com/notificaciones-web-html5/)
- [Usando la API de Notificaciones](https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Usando_la_API_de_Notificaciones)

### Vibration

> La mayoría de los dispositivos modernos pueden vibrar a través del hardware,
> esto permite que a través del código de software se pueda emitir estas
> vibraciones. La Vibration API  ofrece a las aplicaciones web la capacidad de
> acceder a este hardware en caso este lo soporte, caso contrario el dispositivo
> no hace nada.

Fuente: [MDN - Vibración API](https://developer.mozilla.org/es/docs/Web/Guide/API/Vibration)

#### Retos

##### Vibración de notificaciones

Ya tienes tus notificaciones, ahora que te parece si agregas la capacidad de
vibrar cuando éstas lleguen a tu usuario.

#### Referencias

- [Vibración API](https://developer.mozilla.org/es/docs/Web/Guide/API/Vibration)
- [Introducción y uso de la API de Vibración en HTML5](https://platzi.com/blog/api-vibracion-html5/)

## Conclusión

Existen muchas APIs que vuelven cada vez más potente al navegador, y esto a
permitido grandes avances en la web, lo único que te podemos decir es que nunca
nos va a dar el tiempo de ver todos, solo hay que ser curiosas y comenzar a
jugar sin miedo con ellas.

Recuerda tener presente que muchas de ellas tienen problemas de compatibilidad
con dispositivos o navegadores específicos así que no vayas a pensar que algo
está fallando en tu código necesariamente, puede que sea algo de hardware. Por
otro lado, recuerda que en [The HTML 5 JavaScript API Index](http://html5index.org/)
puedes indagar un poco más acerca de las APIs existentes.

Y mira de manera interactiva cómo ha evolucionado la web en
[www.evolutionoftheweb.com](http://www.evolutionoftheweb.com/#/evolution/day).

![Evolution of the web](http://www.evolutionoftheweb.com/img/Evolution_of_the_web.jpg)
