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
componentes: **Bot Builder SDK**, **Bot Connector** y **Bot Directory**.

Nuestros bots siempre estarán compuestos por una lógica que corresponderá al
servicio que queramos ofrecer o la problemática que queramos solucionar. También
contará con una lógica de conversación, la cual se puede implementar con _Bot
Builder SDK_.

_Bot Builder SDK_ es una librería con la cual puedes desarrollar tus bots tanto
en `Node.js` como con `C#`. El código que generamos estará incorporado en el
proyecto del bot y se encargará de gestionar las conversaciones. También
podemos agregar a `LUIS` (Languaje Understanding Intelligent Service), LUIS se
encargá de enriquecer nuestros bots integrándole _"Comprensión de Lenguaje
Natural"_.

Otro componente es el _Bot Connector_, este componente es un servicio online que
nos permite conectar a nuestro bot con alguno de los servicios más conocidos
como **Skype**, **Facebook Messenger** o **Slack** entre otros.

El último componente es _Bot Directory_, que es un directorio publico donde se
encuentran todos los bots registrados por medio de _Bot Connector_.

Si quieres conocer más sobre _Bot Framework_ ingresa a los siguientes enlaces:

* [Introducción a Bots - Microsoft Virtual Academy](https://mva.microsoft.com/es-es/training-courses/introduccin-a-bots-18179)
* [Microsoft Bot Framework](https://dev.botframework.com/)
* [Create a bot with the Bot Builder SDK for Node.js - Bot Service | Microsoft Docs](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart)
* [Intro to Bot Framework | APAC DevSquad Showcase | Channel 9](https://channel9.msdn.com/Series/APAC-DevSquad-Showcase/Intro-to-Bot-Framework)

## Tecnologías con las cuales podemos diseñar un bot en Azure

Bot Builder SDK nos permite desarrolar bots con Node.js y C#.

## Servicios Cognitivos

Los **Servicios Cognitivos** nos permiten agregar inteligencia artificial a
nuestros bots (Algoritmos  Inteligentes), la cual nos permite ver, oír, hablar,
comprender e interpretar las necesidades de los usuarios con formas de
comunicación naturales.

Dentro de los _Servicios Cognitivos_ podemos encontrar:

* **Visión**: Algoritmos de procesamiento de imágenes para identificar, moderar
  y poner una leyenda de forma inteligente a sus imágenes.
* **Conocimiento**: Cree mapas de información y datos complejos para resolver
  tareas como recomendaciones inteligentes y búsqueda semántica.
* **Voz**: Convierta voz en texto, use la voz con fines de comprobación o
  agregue reconocimiento del hablante a sus aplicaciones.
* **Búsqueda**: Agregue Bing Search APIs a sus aplicaciones y aproveche la
  capacidad de buscar en miles de millones de páginas web, imágenes, vídeos y
  noticias con una sola llamada API.
* **Lenguaje**: Permita que las aplicaciones procesen lenguaje natural con
  scripts precompilados, evalúen los sentimientos y aprendan a reconocer lo que
  los usuarios desean.

Si quieres conocer más detalles sobre los Servicios Cognitivos ingresa a
[este enlace](https://azure.microsoft.com/es-es/services/cognitive-services/).

## Configuración de ambiente para desarrollar nuestro primer bot

Para configurar nuestro ambiente, realizaremos los siguientes pasos:

1. Instalar `Node.js`.

2. Abrir Visual Studio Code.

3. Ir al menú Ver -> Terminal Integrado y verificar que Node.js está funcionando
   correctamente.

4. Instalar `restify` y `botbuilder` con el siguiente comando:

   ```sh
   npm install --save restify botbuilder
   ```

## Construcción de bots simples

### Ejemplo 1: Creando nuestro primer bot

```js
var builder = require('botbuilder');
var conector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(conector);

bot.dialog('/', [
  function (session) {
    session.send('Hola Laboratoria!');
  }
]);
```

### Ejemplo 2: Bot Web

Para este ejemplo debemos tener instalado nuestro emulador de bot framework.

```js
// command: npm install botbuilder -save
var builder = require('botbuilder');
// command: npm install restify -save
var restify = require('restify');

var inMemoryStorage = new builder.MemoryBotStorage();

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log('%s escuchando en  %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// This bot ensures user's profile is up to date.
var bot = new builder.UniversalBot(connector,  [
  function(session) {
    builder.Prompts.text(session, '¡Hola! ¿Cúal es tu nombre?');
  },
  function(session, results) {
    session.endDialog(`Hola ${results.response}!`);
  }
]).set('storage', inMemoryStorage); // Register in-memory storage
```

## Configuración de nuestro  chatbot en Azure

[![Chatbot en Azure](https://embed-ssl.wistia.com/deliveries/7a2c7276969d6431ef2b85ea0ef9f1aeb6cf5a3e/file.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/622j8cnnbq?wvideo=622j8cnnbq)

## Lecturas complementarias

* [Desarrollo de Bots con Microsoft Bot Framework y Node.js](https://mva.microsoft.com/es-es/training-courses/desarrollo-de-bots-con-microsoft-bot-framework-y-nodejs-17712)
* [Developing Intelligent Bots from Zero to Hero](https://mva.microsoft.com/en-US/training-courses/developing-intelligent-bots-from-zero-to-hero-17797)
* [Creating Bots in the Microsoft Bot Framework Using Node.js](https://mva.microsoft.com/en-US/training-courses/creating-bots-in-the-microsoft-bot-framework-using-nodejs-16759)
* [Mastering Microsoft Cognitive Services, Part 4: LUIS and QnA Maker](https://mva.microsoft.com/en-US/training-courses/mastering-microsoft-cognitive-services-part-4-luis-and-qna-maker-18042)
* [Microsoft Bot Framework: use Bot Framework para acceder a datos de la aplicación en cualquier momento y lugar](https://msdn.microsoft.com/es-es/magazine/mt790202.aspx)
