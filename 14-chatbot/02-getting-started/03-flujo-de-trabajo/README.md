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

## Diálogos

Los diálogos en el SDK de Bot Builder para `Node.js` nos permiten modelar
conversaciones y administrar el flujo de conversación. Un bot se comunica con un
usuario a través de conversaciones. Las conversaciones están organizadas en
diálogos. Los cuadros de diálogo pueden contener pasos de cascada y pautas. A
medida que el usuario interactúa con el bot, éste se iniciará, se detendrá y
cambiará entre varios cuadros de diálogo en respuesta a los mensajes del
usuario. Comprender cómo funcionan los diálogos es clave para diseñar y crear
bots geniales con éxito.

Bot Builder SDK para `Node.js` define una conversación como la comunicación
entre un bot y un usuario a través de uno o más cuadros de diálogo. Un diálogo,
en su nivel más básico, es un módulo reutilizable que realiza una operación o
recopila información de un usuario. Podemos encapsular la lógica compleja de
nuestros bots en código de diálogo reutilizable.

Una conversación puede ser estructurada y cambiada de muchas maneras:

* Puede originarse a partir de su diálogo predeterminado.
* Se puede redirigir de un cuadro de diálogo a otro.
* Se puede reanudar.
* Puede seguir un patrón de cascada, que guía al usuario a través de una serie
  de pasos o solicita al usuario una serie de preguntas.
* Puede usar acciones que escuchan palabras o frases que activan un diálogo
  diferente.
* Podemos pensar en una conversación como un padre en los diálogos. Como tal,
  una conversación contiene una pila de diálogo y mantiene su propio conjunto de
  datos de estado; a saber, **conversationData** y **privateConversationData**.
  Un diálogo, por otro lado, mantiene **dialogData**.

## Dialog Stack

Un bot interactúa con un usuario a través de una serie de diálogos que se
mantienen en una pila de diálogo. Los diálogos se añaden (o agregan) y salen de
la pila en el transcurso de una conversación. La pila funciona como una pila
LIFO (Last In First Out) normal; lo que significa que el último cuadro de
diálogo agregado será el primero en completarse. Una vez que se completa un
diálogo, se devuelve el control al cuadro de diálogo anterior en la pila.

Cuando una conversación de bot comienza o cuando termina, la pila de diálogo
está vacía. En este punto, cuando el usuario envía un mensaje al bot, el bot
responderá con el diálogo predeterminado.

### Inicio y fin de diálogos

Para iniciar un nuevo diálogo (y colocarlo en la pila) usamos
**session.beginDialog()**. Para finalizar un diálogo (y eliminarlo de la pila,
devolviendo el control al cuadro de diálogo de llamada), usamos
**session.endDialog()** o **session.endDialogWithResult()**.

## Veamos un ejemplo básico de un flujo de trabajo

```js
bot.dialog('/', [
  function (session){
    builder.Prompts.text(session, '¿Cómo te llamas?');
  },
  function (session, results){
    let msj = results.response;
    session.send(`Hola, ${msj}!`);
    session.beginDialog('/preguntar-lugar');
  },
  function (session, results){
    session.send(`Saludos por ${result.response}`);
  }
]);

bot.dialog('/preguntar-lugar', [
  function(session){
    builder.Prompts.text(session, '¿Donde estás?');
  },
  function(session, results){
    let lugar = results.response;
    session.endConversation(`Saludos por ${lugar}`);
  }
]);
```

## Administrar datos de estado

Framework de Bot Builder nos permite almacenar y recuperar datos de estado
asociados con un usuario, una conversación o un usuario específico dentro del
contexto de una conversación específica. Los datos de estado se pueden usar para
muchos propósitos, como determinar dónde dejó la conversación anterior o
simplemente saludar a un usuario que regresa por su nombre. Si almacenamos las
preferencias de un usuario, podemos usar esa información para personalizar la
conversación la próxima vez que chatee. Por ejemplo, podemos alertar al usuario
sobre un artículo de noticias sobre un tema que le interese, o alertar a un
usuario cuando haya una cita disponible.

Para fines de prueba y creación de prototipos, podemos utilizar el
almacenamiento de datos en memoria para el bot. Para los bots de producción,
podemos implementar su propio adaptador de almacenamiento o usar una de las
extensiones de Azure. Las extensiones de Azure nos permiten almacenar los datos
de estado de nuestros bots en Table Storage, CosmosDB o SQL.

## Ahora veremos un ejemplo básico como administrar estados

```js
var bot = new builder.UniversalBot(connector,[
  function (session) {
    builder.Prompts.text(session, '¿Cómo te llamas?');
  },
  function (session, results) {
    let msj = results.response;
    session.send(`Hola, ${msj}!`);
    session.beginDialog('/preguntar-lugar');
  },
  function (session, results) {
    // Recuerda: dialogData no guarda las conversaciones de forma global, solo
    // guarda la conversación dentro del dialog
    // si pasamos a otro dialog no podremos obtener la información
    if (session.dialogData.lugar) {
      session.send(`Saludos por ${session.userData.lugar}`);
    } else {
      session.send(`Ya no me acuerdo donde estás.`);
    }
  }
]).set('storage', inMemoryStorage);


bot.dialog('/preguntar-lugar', [
  function (session) {
    builder.Prompts.text(session, '¿Donde estás?');
  },
  function (session, results) {
    // cambiar por userData para revisar el comportamiento de la variable Global
    session.dialogData.lugar = results.response;
    session.endDialog(`Saludos por ${session.dialogData.lugar} (recuerdo donde estas...)`);
  }
]);
```

## Waterfalls y Prompts

**Waterfall** es una forma simple de modelar y administrar el flujo de
conversación. Una cascada contiene una secuencia de pasos. En cada paso, puede
completar una acción en nombre del usuario o solicitarle información al usuario.

Una cascada se implementa mediante un diálogo que se compone de una colección de
funciones. Cada función define un paso en la cascada. El siguiente ejemplo de
código muestra una conversación simple que usa una cascada de dos pasos para
indicar al usuario su nombre y saludarlo por su nombre.

Cuando un bot alcanza el final de la cascada sin finalizar el diálogo, el
siguiente mensaje del usuario reiniciará ese diálogo en el paso uno de la
cascada. Esto puede provocar frustraciones ya que el usuario puede sentir que
está atrapado en un bucle. Para evitar esta situación, cuando una conversación o
diálogo ha llegado a su fin, se recomienda llamar explícitamente a
**endDialog**, **endDialogWithResult** o **endConversation**.

Un **Prompt** se usa cuando un bot necesita algún tipo de entrada específica del
usuario. Podemos usar indicaciones para pedirle al usuario una serie de entradas
encadenando las indicaciones en una cascada. Podemos usar avisos junto con
cascada para ayudarlo a administrar el flujo de conversación en su bot.

### Tipos de "Prompt"

* Confirm: Pide al usuario que confirme una acción.
* Text: Pide al usuario que ingrese una cadena de texto
* Number: Pide al usuario que ingrese un número.
* Choice: Pide al usuario que elija de una lista de opciones.
* Time: Pide al usuario una hora o fecha / hora.
* Attachment: Pide al usuario que cargue una imagen o video.

## Ejemplo de Prompts

```js
bot.dialog('/', [
    function (session, results, next) {
        builder.Prompts.text(session, '¿Cómo te llamas?');
    },
    function (session, results) {
        session.dialogData.nombre = results.response;
        builder.Prompts.number(session, `Ok, ${session.dialogData.nombre}. ¿Cuál es tu edad?`);
    },
    function (session, results) {
        session.dialogData.edad = results.response;
        builder.Prompts.time(session, `¿Qué hora es?`);
    },
    function (session, results) {
        session.dialogData.hora = builder.EntityRecognizer.resolveTime([results.response]);
        builder.Prompts.choice(session, '¿Cuál prefieres?', 'Mar|Montaña');
    },
    function (session, results) {
        session.dialogData.preferencia = results.response.entity;
        builder.Prompts.confirm(session, '¿Quieres ver un resumen?');
    },
    function (session, results) {
        if (results.response) {
            session.endDialog(`Me contaste que tu nombre es **${session.dialogData.nombre}**, tienes **${session.dialogData.edad}** años, son las **${session.dialogData.hora}** y prefieres **${session.dialogData.preferencia}**`);
        }
        else {
            session.endDialog('Adios!');
        }
    }
]);
```

## Introducción a las tarjetas (Cards)

Varios canales, como Skype y Facebook, admiten el envío de cartas gráficas ricas
a los usuarios con botones interactivos en los que el usuario hace clic para
iniciar una acción.

El SDK proporciona varias clases de creador de mensajes y tarjetas que se pueden
usar para crear y enviar tarjetas. El servicio de conector del Bot Framework
representará estas tarjetas usando un esquema nativo del canal, admitiendo la
comunicación multiplataforma. Si el canal no admite tarjetas, como SMS, el Marco
de trabajo de Bot hará todo lo posible para brindar una experiencia razonable a
los usuarios.

### Tipos de Tarjetas

* Tarjeta Personalizada: Una tarjeta personalizable que puede contener cualquier
  combinación de texto, voz, imágenes, botones y campos de entrada
* Tarjeta de Animación: Una tarjeta que puede reproducir GIF animados o videos
  cortos.
* Tarjeta de Audio: Una tarjeta que puede reproducir un archivo de audio.
* Tarjeta Hero: Una tarjeta que generalmente contiene una sola imagen grande,
  uno o más botones y texto.
* Tarjeta Miniatura: Una tarjeta que generalmente contiene una sola imagen en
  miniatura, uno o más botones y texto.
* Tarjeta de Recibo (boleta): Una tarjeta que permite que un bot proporcione un
  recibo al usuario. Por lo general, contiene la lista de elementos para incluir
  en el recibo, los impuestos y la información total, y otro texto.
* Tarjeta Inicio de sesión: Una tarjeta que permite a un bot solicitar que el
  usuario inicie sesión. Por lo general, contiene texto y uno o más botones en
  los que el usuario puede hacer clic para iniciar el proceso de inicio de
  sesión.
* Tarjeta de Video: Una tarjeta que puede reproducir videos.

## Cómo utilizar las tarjetas

En este ejemplo veremos cómo utilizar una Tarjeta Hero:

```js
bot.dialog('/', [
  function (session) {
    var heroCard = new builder.HeroCard(session)
      .title('Esta es una tarjeta de tipo Hero Card')
      .subtitle('Este es su correspondente subtítulo')
      .text('Sigan a Marcelo Felman en Twitter: @mfelman')
      .images([
        //imagen de la Card
        builder.CardImage.create(
          session,
          'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg'
        )
      ])
      .buttons([
        //definimos la url que tendrá el botón y abrira una vez presionado
        builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
      ]);

    // Adjuntamos la tarjeta al mensaje
    var msj = new builder.Message(session).addAttachment(heroCard);
    session.send(msj);
  }
]);
```

## Lectura complementaria

* [Introducción a Dialogos - Bot Builder SDK for Node.js](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-overview)
* [Introducción a Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt)
* [Uso de Tarjeta Enriquecidas](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-send-rich-cards)
