# Servicios Cognitivos

* Tipo: `webinar`
* Formato: `guiado`
* Duración: `60min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

## ¿Por qué aprender esto?

En este curso nos vamos a enfocar en LUIS la inteligencia de procesamiento natural de texto de Microsoft para darle vida a nuestro bot

## ¿Qué son los servicios cognitivos?

Son servicios que le pueden agregar inteligencia artificial a tu bot o a cualquier aplicación web, estos servicios integran algoritmos y técnicas avanzadas de inteligencia artificial
Dentro de los servicios cognitivos nos podemos encontrar con los siguientes:

* Reconocimiento facial
* Reconocimiento de voz
* Reconocimiento de texto en una imagen
* Conversación de texto a voz y viceversa
* Traducción en tiempo real

## ¿Qué es Microsoft Cognitive Services?

Es una colección de APIs inteligentes que hacen que apps puedan ver, escuchar, hablar, entender e interpretar las necesidades de negocio utilizando métodos naturales de comunicación

Con _Microsoft Cognitive Services_ podemos construir apps que brinden experiencias inteligentes, atractivas, naturales personalizadas y humanas gracias al poder de la inteligencia artificial.
También con _Microsoft Cognitive Services_ podemos crear apps poderosas con pocas líneas de código y podemos integrar las Apis de _Machine Learning_ para dar vida a nuestras ideas.

## ¿Por qué Microsoft Cognitive Services?

* Fácil integración con APIs REST
* Código multiplataforma
* Plataforma construida por expertos
* Documentación y código de ejemplos de calidad
* Soporte de la comunidad

##¿Qué es LUIS?

LUIS (Language Understanding Intelligent Service) es un servicio de Azure que nos ayuda a entender lo que el usuario quiere realizar, además nos proporciona un dashboard donde podemos crear diferentes mapas conceptuales

Los conceptos que debemos tener claros son:

* Declaraciones: Frase que queramos construir
_Ejemplo: Hola, ¿cómo te llamas?_

* Intenciones: Son el conjunto de declaraciones
_Ejemplo: **Intención:**Saludos, **Declaración:**Hola_
* Entidades: Las entidades son equivalentes a variables que nos permite capturar alguna frase en alguna declaración
* Entidades Pre Construidas: Son entidades ya pre construidas en el API, esto facilita mucho la tarea en estar creado Entidades, ya que detecta valores automáticamente

## Interactuemos con algo de código

Acá estamos viendo un ejemplo de intenciones

```js

// Crear un procesador LUIS que apunte a nuestro modelo
var model = `https://.../luisApp/luisKey`;

var recognizer = new builder.LuisRecognizer(model);
var dialog = new builder.IntentDialog({ recognizers: [recognizer] });
...
// Esta función se ejecuta cuando el Intent == PreguntarPeso
dialog.matches('ordenarTaxi', [
	function (session, args, next) {
		...
	}
]);
```


