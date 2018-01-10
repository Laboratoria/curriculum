# Microsoft Bot Framework

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `30min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

## ¿Qué es Microsoft Bot Framework?

Microsoft Bot Framework es un conjunto de herramientas para ayudarte a crear
bots, este conjunto de herramientas se dividen principalmente en 3 grandes
componentes Bot Builder SDK, Bot Connector y Bot Directory.

Nuestros bots siempre estarán compuestos por una lógica que corresponderá al
servicio que queramos ofrecer o la problemática que queramos solucionar, también
contará con una lógica de conversación esta lógica de conversación se puede
implementar con Bot Builder SDK.

Bot Builder SDK es una librería con la cual puedes desarrollar tus bot tanto en
Node.js como con C#, el código que generamos estará incorporado en el proyecto
del bot y se encargará de gestionar las conversaciones., también podemos agregar
a LUIS (Languaje Understanding Inteligent Service), LUIS se encarga de
enriquecer nuestros bots integrándole "Compresión del Lenguaje Natural".

Otro componente es el Bot Connector, este componente es un servicio online que
nos permite conectar a nuestro bot con alguno de los servicios más conocidos
como Skype, Facebook Messenger, Slack, entro otros.

El último componente es Bot Directory es un directorio publico donde se
encuentran todos los bots registrados por medio de bots Connector.

Si quieres conocer más sobre Bot Framework ingresa a los siguientes enlaces:

* https://dev.botframework.com/
* https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart
* https://channel9.msdn.com/Series/APAC-DevSquad-Showcase/Intro-to-Bot-Framework


## Tecnologias con las cuales podemos diseñar Bot en Azure

Bot Builder SDK nos permite desarrolar bots con Node.js y C#

## Servicios Cognitivos

Los Servicios Cognitivos nos permiten agregar inteligencia artificial a nuestros
bots (Algoritmos  Inteligentes) la cual nos permite ver, oír, hablar, comprender
e interpretar las necesidades de los usuarios con formas de comunicación
naturales.

Dentro de los servicios Cognitivos podemos encontrar:

* Visión: Algoritmos de procesamiento de imágenes para identificar, moderar y
  poner una leyenda de forma inteligente a sus imágenes.
* Conocimiento: Cree mapas de información y datos complejos para resolver tareas
  como recomendaciones inteligentes y búsqueda semántica.
* Voz: Convierta voz en texto, use la voz con fines de comprobación o agregue
  reconocimiento del hablante a sus aplicaciones.
* Búsqueda: Agregue Bing Search APIs a sus aplicaciones y aproveche la capacidad
  de buscar en miles de millones de páginas web, imágenes, vídeos y noticias con
  una sola llamada API.
* Lenguaje: Permita que las aplicaciones procesen lenguaje natural con scripts
  precompilados, evalúen los sentimientos y aprendan a reconocer lo que los
  usuarios desean.

Si quieres conocer más detalles sobre los Servicios Cognitivos ingresa al
siguiente enlace https://azure.microsoft.com/es-es/services/cognitive-services/

## Configuración de ambiente para desarrollar nuestro primer bot

Para configurar nuestro ambiente, realizaremos los siguientes pasos:

1. Instalarán Node.js

2. Abrir Visual Studio Code

3. Ir al menú ver->terminal Integrado y verificarán si node.js esta funcionando
   correctamente

4. Instalaremos restify y botbuilder con los siguientes comandos:

   ```sh
   npm install restify -save
   npm intall botbuilder -save
   ```

## Construcción de bots simples

### Ejemplo 1: Creando nuestro primer bot

```js
var builder = require('botbuilder');
var conector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(conector);

bot.dialog('/', [
    function(session){
        session.send('Hola Laboratoria!');
    }
])
```

### Ejemplo 2: Bot Web

Para este ejemplo debemos tener instalado nuestro emulador bot framework.

```js
//command: npm install botbuilder -save
var builder = require('botbuilder');
//command: npm install restify -save
var restify = require('restify');

//Creamos el server para comunicarno con nuestro bot
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s escuchando %s', server.name, server.url);
});

//Por ahora esto queda en blanco
var conector = new builder.ChatConnector({
  appId: '',
  appPassword: ''
});

var bot = new builder.UniversalBot(conector);
//Este será nuestro endpoint de nuetro bot
server.post('/api/mensajes', conector.listen());

//acá es donde sucede la magia de nuestro bot
bot.dialog('/', [
  function (session) {
    builder.Prompts.text(session, '¿Cómo te llamas?');
  },
  function (session, results) {
    let msj = results.response;
    session.send(`Hello ${msj}!`);
  }
]);
```
