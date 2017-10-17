# Clase Práctica

- Tipo: `taller`
- Formato: `guiado`
- Duración: `120min`

## Objetivos

- Practicar codeando junto a tu equipo de profes, resolviendo problemas de
  estructuras condicionales, repetitivas y funciones
- Practicar, practicar y practicar

***

## Enunciados

A continuación tienes más problemas de práctica. Estos problemas serán
resueltos, paso a paso, por tu equipo de profes en una sesión presencial
(`workshop`).

Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo)
**antes** de la sesión presencial. Así, ya vienes con dudas específicas y
estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución
ante el resto de la clase y así ayudar al resto de tus compañeras.

### 1. Ahorcado

Crea una página web que implemente el juego del Ahorcado. El ahorcado es un
divertido juego de adivinanzas para dos jugadores (Computador vs Jugador).
> Jugador 1 -> El computador que verifica la presencia de la letra /
Jugador 2 -> El que trata de adivinar las letras

El jugador 1 piensa en una palabra y el jugador 2 trata de adivinar la
palabra.

- Si el jugador 2 sugiere una letra que aparece en la palabra, el jugador 1
  la escribe en todas sus posiciones correctas.
- Si la letra sugerida no aparece en la palabra, el jugador 1 dibuja un
  elemento de la figura del hombre ahorcado como una marca de conteo,
  descotando 1 a 1 de tus 14 intentos.

El juego termina cuando:

1. El jugador adivinador completa la palabra, o adivina la palabra completa
   correctamente
2. El otro jugador (el computador) completa de dibujar al ahorcado.

![Screen Shot 2017-08-22 at 10.17.30 A](http://4.bp.blogspot.com/-f3eI_WIPxfI/UbPA6edeD-I/AAAAAAAAAuY/nqA-jy2qPFo/s1600/ahorcado.jpg
)

### Tips para la solución

A continuación, encontrarás tips que podrían ayudarte con la solución, mucha
suerte!

#### [Tip 1. | Arte ASCII ]

Los gráficos para el Ahorcado son caracteres del teclado impresos en la
pantalla. Este tipo de gráficos se llama arte ASCII (se pronuncia “asqui”)
y fue una especie de precursor a emojii.

```js
var figure = [
   '+------------+      ',
   '|            |      ',
   '|           / \\    ',
   '|           \\ /    ',
   '|            |      ',
   '|           /|\\    ',
   '|          / | \\   ',
   '|         /  |  \\  ',
   '|            |      ',
   '|           / \\    ',
   '|          /   \\   ',
   '|         /     \\  ',
   '+------------------+',
   '|//////////////////|'
];
```

#### [Tip 2. | Flujo del programa ]

Este juego es un poquito más complicado de lo que parece, de modo que tómate
un momento para pensar cómo implementarlo. Primero necesitarás crear un
diagrama de flujo  para ayudar a visualizar lo que este programa hará.

Un diagrama de flujo es un diagrama que muestra una serie de pasos como
recuadros conectados por flechas. Cada recuadro representa un paso, y las
flechas muestran qué pasos llevan a qué otros pasos.

Por supuesto, no es estrictamente necesario que hagas un diagrama de flujo.
Podrías simplemente comenzar escribiendo código. Pero a menudo una vez que
comiences a programar pensarás en cosas que son necesarias agregar o cambiar.
Podrías terminar teniendo que borrar una gran parte de tu código, lo que
sería un desperdicio de esfuerzo. Para evitar esto, siempre es mejor planear
cómo el programa va a funcionar antes de comenzar a escribirlo.

### 2. Creando animación en el DOM?

Necesitamos generar 12 cuadros blancos en filas de 3. Uno de esos cuadros
será de un color diferente. Necesitamos mover ese cuadro a través de los
cuadros blancos usando las flechas del teclado.

En el siguiente video explicamos un poco más el ejercicio:

[![Animación DOM](https://img.youtube.com/vi/LtfSKzCjCC4/0.jpg)](https://www.youtube.com/watch?v=LtfSKzCjCC4)

### 3. Freelancer v2

¿Recuerdas el reto de código de [Freelancer](https://github.com/Laboratoria-learning/freelancer)?
Ahora, nos enfocaremos en replicar la funcionalidad de la sección de `Portfolio`
que es el modal al dar click sobre cada una de las imágenes. Debe quedar como
en la siguiente imagen:

![Freelancer Portfolio](https://media.giphy.com/media/xT9IgDSValpayTy8QE/giphy.gif)

### 4. Nuestras Coders v2

¿Recuerdas el ejercicio guíado de [Nuestras Coders](https://lms.laboratoria.la/cohorts/test/courses/interactive-site/00-html-and-css/14-guided-exercises)
Ahora agregaremos un filtro para seleccionar a las coders dependiendo de su sede.
Al final, deberá quedarte algo así:

![Nuestras Coders](https://media.giphy.com/media/xT9IgwHr6d1LObJt16/giphy.gif)

### 5. Captcha

En la vida diaria usamos servicios que generan el **CAPTCHA**. 
El más usado es el de Google, puedes encontrar su documentación [aquí](https://developers.google.com/recaptcha/docs/display?authuser=1).
Estos CAPTCHA tienen como objetivo final poder identificar si eres o no un
humano y van cambiando conforme avanza la tecnología.

Inicialmente consistía en un conjunto de imágenes que el usuario debía
determinar el contenido de las mismas e indicarlo al sistema. Hoy en día
evalúan tu comportamiento en el navegador, y de tener dudas te pide evaluar un
conjunto de imágenes mucho más grande.

Armaremos un Captcha (tal cual se muestra en el diseño de abajo), este
comprobará que el usuario escriba lo mismo que el Captcha que le
proporcionaremos. El valor ingresado se evaluará al momento de que el usuario
haga clic en el símbolo **✓** y se generará otro código cuando el usuario haga
clic en el símbolo **↻**.

Dato: Genera los números y letras de manera random

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

![Captcha](https://fotos.subefotos.com/299269b4ed8aac7e0a445f0c76355612o.gif)