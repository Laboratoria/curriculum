# Flujo de Trabajo

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `30min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

Le llamamos flujo de trabajo a la organización de nuestros diálogos o más bien
conocido como flujo de conversación, el core de un flujo de trabajo es el
diálogo.

## Bot Builder SDK para Node.js

_Bot Builder SDK para Node.js_ es un framework potente y fácil de usar que
proporciona una forma familiar para que los desarrolladores de Node.js escriban
bots. Puedes usarlo para crear una amplia variedad de interfaces de usuario
conversacionales, desde simples avisos hasta conversaciones complejas.

La lógica conversacional de los bot está alojada como un servicio web. El SDK de
Bot Builder usa restify, una librería muy popular para crear servicios web, en
este caso nos ayudará a crear el servicio web de nuestros bots.

Con el SDK, puedes aprovechar las siguientes características:

* Potente sistema para crear diálogos para encapsular la lógica conversacional.
* Indicaciones incorporadas para cosas simples como Sí / No, cadenas, números y
  enumeraciones, así como soporte para mensajes que contienen imágenes y
  archivos adjuntos, y tarjetas enriquecidas que contienen botones.
* Soporte integrado para poderosos marcos de inteligencia artificial como LUIS.
* Reconocedores incorporados y manejadores de eventos que guían al usuario a
  través de la conversación, brindando ayuda, navegación, aclaración y
  confirmación según sea necesario.
* Para este curso utilizaremos Bot Builder como crear nuestros bot en nuestros
  equipos, pero luego al pasar a la nube utilizaremos Bot Services, que es lo
  mismo que nuestro SDK para Node.js pero alojado como servicio en Azure.

Para introducirnos al mundo de los bot con **Microsoft Bot Framework**, primero
debemos aprender y comprender algunos conceptos y componentes de **Microsoft Bot
Framework**:

## Workflow (Flujo de conversación)

Los flujo de trabajo o de conversación es la organización de nuestros diálogos y
core de nuestros bot, comprender el **flujo de conversación** debe ser tu
principal objetivo en esta unidad.

Los flujos de conversación contemplan componentes como conectores, mensajes,
diálogos, canales y estado de información, bueno vamos a introducirnos al mundo
de los bot, profundizando en los conceptos:

## Conector

El Bot Framework Connector es un servicio que conecta tu bot a múltiples canales,
que son clientes como Skype, Facebook, Slack y SMS. El Connector facilita la
comunicación entre bot y usuario transmitiendo mensajes de bot a channel y de
channel a bot. La lógica de tu bot está alojada en las primeras etapas en tu
equipo, luego al pasar a ser un bot producción estará hosteado en Azure como un
servicio web que recibe mensajes de los usuarios a través del servicio Connector,
y las respuestas de su bot se envían al conector mediante HTTPS POST.

El **SDK de Bot Builder para Node.js** proporciona las clases de **UniversalBot**
y **ChatConnector** para configurar el bot para enviar y recibir mensajes a
través del conector de tu Bot. La clase de **UniversalBot** forma corazón de tu
bot. Es responsable de administrar todas las conversaciones que tu robot tiene
con un usuario. La clase **ChatConnector** conecta tu bot al Servicio de conector
de tu Bot.

El Conector también normaliza los mensajes que el bot envía a los canales para
que pueda desarrollar su bot de una manera independiente de la plataforma.

La normalización de un mensaje implica convertirlo del esquema de Bot Framework
en el esquema del canal. En los casos en que el canal no admite todos los
aspectos del esquema, el Conector intentará convertir el mensaje a un formato
compatible con el canal. Por ejemplo, si el robot envía un mensaje que contiene
una tarjeta con botones de acción al canal de SMS, el Conector puede representar
la tarjeta como una imagen e incluir las acciones como enlaces en el texto del
mensaje.

**ChatConnector** requiere que se configure un punto final API dentro de su bot.
**Con el SDK de Node.js**, esto generalmente se logra instalando el módulo
restify Node.js.

## Diálogos

Los diálogo te ayudarán a organizar la lógica de conversación de tus bots y son
fundamentales para diseñar el flujo de conversación, **es muy importante** que
estudies la interacción de los dialogos, ya que estos serán el corazón de tu
bot.

## Messages

Los mensajes pueden consistir en texto que se mostrará, texto que se debe
pronunciar, archivos adjuntos, tarjetas enriquecidas y acciones sugeridas.

Utiliza el método session.send para enviar mensajes en respuesta a un mensaje
del usuario. Su bot puede enviar tantas veces como quiera en respuesta a un
mensaje del usuario.

## Comportamiento

Diseñar tu bot para que pueda manejar interrupciones, como solicitudes de
cancelación o ayuda en cualquier momento durante el flujo de conversación. El
**SDK de Bot Builder para Node.js** proporciona controladores de mensajes
globales que desencadenan acciones como la cancelación o la invocación de otros
cuadros de diálogo.

## Reconocedores

Cuando los usuarios le pregunten a tu bot algo, como "ayuda" o "encontrar
noticias", su bot necesita comprender lo que el usuario está pidiendo y luego
tomar las medidas adecuadas. Puedes diseñar tu bot para que reconozca las
intenciones en función de los comentarios del usuario y asociar esa intención
con las acciones.

Puede usar el reconocedor de expresiones regulares integrado que proporciona el
**SDK de Bot Builder**, llamar a un servicio externo como la API LUIS o
implementar un reconocedor personalizado para determinar la intención del
usuario.

## Sistema de Almacenamiento

Una clave para un buen diseño de bot es rastrear el contexto de una
conversación, para que tu bot recuerde cosas como la última pregunta que hizo el
usuario. Los Bots construidos usando **Bot Builder SDK** están diseñados para
ser escalables, de modo que puedan escalarse fácilmente para ejecutarse en
múltiples nodos. El Framework Bot proporciona un sistema de almacenamiento que
almacena datos bot, de modo que el servicio web de bot puede escalarse.

Debido a eso, generalmente debe evitar el uso de variables globales o cierre de
función. Hacerlo creará problemas cuando quieras escalar tu bot.

## Comprensión del lenguaje natural

Bot Builder nos permite usar LUIS para agregar una comprensión del lenguaje
natural a su bot usando la clase LuisRecognizer. Puede agregar una instancia de
un LuisRecognizer que haga referencia a su modelo de lenguaje publicado y luego
agregar controladores para realizar acciones en respuesta a los enunciados del
usuario.

## Lecturas complementarias

* [Introducción a Dialogos - Bot Builder SDK for Node.js](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-overview)
* [Introducción a Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt)
* [Uso de Tarjeta Enriquecidas](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-send-rich-cards)
