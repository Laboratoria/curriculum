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
