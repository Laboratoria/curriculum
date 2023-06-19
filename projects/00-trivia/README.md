# Trivia

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Recomendaciones](#5-recomendaciones)
* [6. Alcance del proyecto](#6-alcance-del-proyecto)
* [7. Ambiente de trabajo y lecturas complementarias](#7-ambiente-de-trabajo-y-lecturas-complementarias)

***

## 1. Preámbulo

Una _trivia_ es un tipo de juego, generalmente en el marco de un concurso, en el
que se plantea una serie de preguntas cuyas respuestas deben ser elegidas entre
diferentes opciones predeterminadas.

En la actualidad existen muchas posibilidades de participar de una _trivia
online_. Con una rápida búsqueda en Internet, te podrás dar cuenta de que existen
_trivias_ de diversas temáticas (ciencia, series, televisión, etc.).

![TRIVIA](https://phandroid.s3.amazonaws.com/wp-content/uploads/2018/01/hq-trivia-android-screenshot.jpg)

## 2. Resumen del proyecto

**¿Qué tengo que hacer exactamente?**  
Construirás la aplicación Web de una _trivia_.  
No temas, vas a aprender mucho estos días.

El objetivo principal de este proyecto es que tengas una primera experiencia
desarrollando aplicaciones Web que interactúen con las usuarias a través del
navegador, utilizando HTML, CSS y JavaScript.

La temática es libre, decídela rápidamente y luego piensa en cómo debe ser la
experiencia para tus usuarias. Piensa en las pantallas, el flujo,
los mensajes, colores, etc.

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar
en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Completar el proyecto **no es un requisito para ser admitida al _bootcamp_**.
* Este proyecto se debe trabajar en duplas.
* La lógica del proyecto debe estar implementada completamente en JS, HTML y CSS.
En este proyecto NO está permitido usar librerías o frameworks,
solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
* Preocúpate de que ambas puedan hacer y aprender de todo. Esto no se trata
de "repartir" el trabajo para hacer "más". El objetivo es aprender
colaborativamente, no "terminar y entregar".
* Queremos verte aprender lo que aún no sabes. Sé transparente para que podamos
entender tu proceso de aprendizaje. Nos interesa el proceso y no solamente el
resultado final.

## 5. Recomendaciones

### Prototipo

Algo que siempre ayuda a "poner en concreto” lo que tienes en mente,
es hacer un simple prototipo en papel y lápiz **de todo el proyecto**.
Dibujar es un proceso rápido que permite entender cómo, cuándo y dónde
suceden las cosas; Dónde exactamente debe decir tal o cual cosa, qué pasa
si la usuaria hace A o B, dónde debe hacer _click_, qué información
exactamente quieres mostrarle, etc.
**Dedica un máximo de dos horas a esto antes de ponerte a codear**.

### No postergues lo que no sabes hacer, comienza por ahí

No gastes horas discutiendo la temática de la _trivia_ o haciendo logotipos
teniendo la sensación de que estás “avanzando”. Es natural que tengas el
impulso de hacerlo, es tu cerebro pidiendo su dosis de
**satisfacción inmediata**. No te dejes engañar por la “ilusión” del
avance, **tu objetivo es aprender**. Enfréntate a lo que no sabes lo más
pronto posible, es el único camino
para lograrlo.

### Aprender por encima de completar el proyecto

Evita la tentación de copiar y pegar código que “funcione” para ir completando
el proyecto sin entender cómo ni por qué funciona. Prefiere siempre hacer poco
pero que sea algo que entiendes y puedes explicar, antes que mucho que
funciona a medias y/o que no sabes bien cómo ni por qué funciona.

### Achicar el gran problema en problemas más pequeños

Un "superpoder" que esperamos puedas desarrollar durante el _bootcamp_ es el
de definir "micro-proyectos" que te acerquen paso a paso, pero de manera
transversal, a la solución del "gran proyecto".  Podríamos decir que es algo
así como comenzar armando un rompecabezas/_puzzle_ por las esquinas o bordes
sin saber necesariamente cómo encajarán al final. Déjate llevar y explora
libremente, no tienes que saberlo todo antes de comenzar.

Más adelante te daremos algunas sugerencias como ejemplo.

## 6. Alcance del proyecto

Sabemos que cada una de ustedes sabe un poco más o un poco menos de
Desarrollo Web; No olvidamos que cada una tiene experiencias de vida y
motivaciones distintas, personalidad diferente, aprende a su propio ritmo,
etc. Pretender que todo lo anterior no existe y pedir a todas que logren
aprender y completar lo mismo sería absurdo. Te proponemos trabajar en hitos
o etapas incrementales según tus posibilidades, hasta donde logres llegar.
**No esperamos que todas completen todos 3 hitos**.

No trabajes como si fuera una fábrica haciendo _todo_ el
HTML y CSS de _todas_ las pantallas que imaginaste para luego comenzar con el
_todo_ el JavaScript y la funcionalidad. El riesgo de
trabajar así es que consigas muchas partes sin ninguna funcionalidad o a
medias y que aprendas poco; tampoco hagas lo inverso, un montón de
funcionalidad en la consola pero que no tiene una interfaz para ser utilizada
por una usuaria no-_developer_.

La siguiente metáfora te puede ayudar a comprender mejor la idea.
![AGILE](https://miro.medium.com/max/1400/1*qINsG4WH_BDN-viMJUH6Ng.png)

Esas etapas, desde la patineta hasta el auto, es a lo que llamaremos "hitos".
Eres libre de seguir esta recomendación o trabajar como tú prefieras. Quizás te
sea útil si recién estás comenzando a aprender de Desarrollo Web, tú decides.

_Spoiler alert_: anda practicando tomar tus propias decisiones de aprendizaje,
así serán los 6 meses de _bootcamp_.

***

### Hito 1

Comienza intentando hacer la versión más simple de una _trivia_.

* 1 sola pantalla o vista.
* 2 preguntas con, al menos, 3 alternativas de respuesta cada una.
* 1 botón para responder y ver cuál es la alternativa correcta.
* No te dice si acertaste o no, sólo te dice cuál alternativa era la correcta.

#### Sugerencia de micro-proyecto A: Prueba hacer el "esqueleto" estático en HTML

Una interfaz básica con:

* Dos preguntas con sus respectivas alternativas de respuesta en forma de
_radio buttons_ (🔘)
* El botón para “Responder y ver resultados”.

**Aprenderás:**

Cómo construir una página básica HTML con elementos de formulario.

#### Sugerencia de micro-proyecto B: Prueba darle algo de interacción

Cuando la usuaria dé _click_ en alguno de los _radio button_, muéstrale un
mensaje de alerta (_alert_) en el navegador que contenga el valor (texto) del
_radio button_ cliqueado.

_Pista:_ Para mostrar un mensaje de alerta básico hay una función de
JavaScript llamada “_alert_”. Esta función puede “escuchar” eventos del
navegador como _click_ y hacer algo cuando suceda usando _onclick_
o _addEventListener_.

**Aprenderás:**

* A detectar eventos en el navegador (los _clicks_ de la usuaria) y hacer algo
  cuando sucedan.
* Identificar los elementos HTML que hay en el navegador y obtener sus valores
  y/o estados.

#### Sugerencia de micro-proyecto C: Prueba darle interacción más cercana a la que pide el proyecto

En lugar de mostrar el valor de cada _radio button_ cuando se le hace _click_,
que esta vez solamente se marque el _radio button_ seleccionado y que el
mensaje _alert_ con  los valores de los _radio button_ seleccionados se muestre
cuando al hacer _click_ en el botón “Responder y ver resultados”.

**Aprenderás:**

* A detectar eventos en el navegador (los _clicks_ de la usuaria) .
* Identificar los elementos HTML que hay en el navegador y obtener sus valores/estados.

***

### Hito 2

Agrega una pantalla simple de bienvenida con los siguientes elementos y
características:

* Una caja de texto (_input text_) en la que escribe su nombre quien juega.
* Un botón de "jugar" o "comenzar" para ir a las preguntas.
* Esta vez deberán haber al menos 3 preguntas con sus respectivas alternativas
  de respuesta.
* Antes de las peguntas debe decir "Hola [el nombre que se escribió en la
  pantalla de bienvenida]"
* El botón para responder muestra la alternativa correcta para cada pregunta y,
  además, muestra si cada una de las respuestas fue correcta o incorrecta.
* Un botón para volver a jugar que vuelve a la pantalla inicial en la que se
  pide el nombre.

#### Sugerencia de micro-proyecto: Prueba evaluar las respuestas de tu usuaria

Para determinar si las respuestas seleccionadas son correctas o incorrectas,
necesitas predefinir cuál alternativa es la correcta para cada pregunta y
evaluar (comparar) si la respuesta de tu usuaria coincide o no.

_Pista:_ Lee sobre condicionales y control de flujo (`if`, `else`, `else if`).

**Aprenderás:**

* A identificar los elementos HTML que hay en el navegador y obtener sus
  valores/estados.
* Comparar los valores/estados de los elementos y hacer algo según el
  resultado que obtengas de la comparación/evaluación.

***

### Hito 3

* Permítele a la usuaria elegir entre 2 tipos de preguntas después de escribir
  su nombre y antes de ir a responder.
  Por ejemplo, unas sobre comida y otras sobre cervezas.
* Agrega un puntaje a respuestas correctas e incorrectas y muestra un puntaje
  total al final.

***

### Hito 4

Si hiciste todo lo anterior y tienes un poco más de tiempo, decide qué más
quisieras hacer para mejorar tu proyecto. Podrías, por ejemplo:

* Agregar una cuenta regresiva con un tiempo límite para responder cada
  pregunta. Para lograrlo, les dejamos
  [una pista de javascript](https://es.javascript.info/settimeout-setinterval).
* [Subir tu código a GitHub](https://developer.mozilla.org/es/docs/Learn/Common_questions/Using_Github_pages)
  (commit/push) y desplegar la interfaz usando [GitHub pages](https://pages.github.com/).

Independientemente de hasta qué hito alcances a hacer, asegúrate de documentar
**brevemente** tu trabajo en un documento de Google o el archivo `README.md`
de tu repositorio (si es que estás trabajando con uno). Cuéntanos un poco cómo
fue tu proceso de diseño de la experiencia de uso y cómo crees que resuelve el
la necesidad (o "problema") que tiene tu usuaria. Incluye algunas imágenes de
tus prototipos en papel y lápiz que nos ayuden a entender el proceso,
no el resultado. ¿Fuiste cambiando cosas en el camino?, ¿Cuáles?, ¿Por qué?.

## 7. Ambiente de trabajo y lecturas complementarias

### Prepara tu ambiente de trabajo

#### Si estás dando tus primeros pasos en el Desarrollo Web

Quizás prefieras trabajar con alguna herramienta de edición de código en línea
como [Glitch](https://glitch.com/) o [Stackblitz](https://stackblitz.com/).
<!--Agregar los tutoriales de glitch y stackblitz-->

### Recursos y temas relacionados

#### Diseño de experiencia de usuario (User Experience Design)

* [Blog sobre diseño de experiencia de usuario](https://medium.com/laboratoria/qu%C3%A9-es-ser-una-ux-designer-f81fbc45a44c)

#### Desarrollo Front-end

* [Tipos de valores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
* [Declaración de variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
* [Control de flujo](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control)

#### Organización del Trabajo

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://youtu.be/nOlwF3HRrAY). No
  esperamos que hagas todo eso desde este proyecto.

#### Entrega

* Todo tu proyecto debe estar como entregable en un link funcional que nos
  permita ver tu código, puede ser el link de tu proyecto en linea ya sea
  [Glitch](https://glitch.com/) o [Stackblitz](https://stackblitz.com/).
