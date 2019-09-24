# Procesamiento de lenguaje natural con LUIS

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `40min`

***

## Objetivos del seminario

En esta unidad vamos a explicar  los servicios de procesamiento de lenguaje
natural de azure (LUIS).

### Sobre Procesamiento de Lenguaje natural

El procesamiento de lenguajes naturales —abreviado PLN, o NLP del idioma inglés
Natural Language Processing— es un campo de las ciencias de la computación,
inteligencia artificial y lingüística que estudia las interacciones entre las
computadoras y el lenguaje humano. El PLN se ocupa de la formulación e
investigación de mecanismos eficaces computacionalmente para la comunicación
entre personas y máquinas por medio de lenguajes naturales.

El PLN no trata de la comunicación por medio de lenguajes naturales de una
forma abstracta, sino de diseñar mecanismos para comunicarse que sean
eficaces computacionalmente —que se puedan realizar por medio de programas que
ejecuten o simulen la comunicación.

### Sobre LUIS

LUIS nos proporciona herramientas para que pueda crear sus propios modelos
de lenguaje, lo que permite que cualquier aplicación o bot comprenda
sus órdenes y actúe en consecuencia.

![Without-Luis](https://user-images.githubusercontent.com/3615859/35949336-fa5e4ffa-0c3e-11e8-8635-7c188217634a.PNG)

![With-Luis](https://user-images.githubusercontent.com/3615859/35949335-fa2b1c2a-0c3e-11e8-9747-1a5cfb732c84.PNG)

## Conceptos sobre LUIS

### Intents o intenciones

Conjunto finito de posibles intenciones de un enunciado. Generalmente se
correlacionan con funcionalidades de una aplicación.

Ejemplos:

* "Quiero encendeder la luz" : "EncenderLuz" ;
* "Por favor enviarme un taxi" : "OrdenarTaxi"

### Entities o entidades

Son partes de un enunciado, generalmente adjetivos o sustantivos que representan
una entidad. Generalmente se correlacionan con parámetros de una funcionalidad.

Ejemplos:

* "Por favor enviarme un taxi a Olivos" : "Barrio: Olivos"

### Listas

Listar entidades o palabras.
Ejemplo con ciudades: "Buenos Aires", "Bogotá", "Santiago"

### Ejemplo de Intenciones de LUIS

```js
// Crear un procesador LUIS que apunte a nuestro modelo
var model = `https://.../luisApp/luisKey`;

var recognizer = new builder.LuisRecognizer(model);
var dialog = new builder.IntentDialog({ recognizers: [recognizer] });

//...

// Esta función se ejecuta cuando el Intent == PreguntarPeso
dialog.matches('ordenarTaxi', [
  function (session, args, next) {
    //...
  }
]);
```

Ejemplo de entidades de LUIS

```js
// Extraer las entidades reconocidas por LUIS
var barrios = builder.EntityRecognizer.findAllEntities(args.entities, 'lugar');
```

### Ventajas de LUIS

Diseñado para identificar información importante en las conversaciones,
Language Understanding interpreta los objetivos del usuario (intenciones) y
sintetiza información de valor de las oraciones (entidades), a fin de ofrecer un
modelo de lenguaje de alta calidad y matizado

Se combinan eficaces herramientas para desarrolladores con diccionarios de
entidades y aplicaciones precompiladas personalizables, como calendario,
música y dispositivos, para que pueda compilar e implementar una solución con
más rapidez

El aprendizaje reforzado se usa para mejorar constantemente la calidad de
los modelos de procesamiento del lenguaje natural. Una vez que el modelo
empieza a procesar las entradas, Language Understanding inicia el
aprendizaje activo, que permite actualizar y mejorar constantemente el modelo.
