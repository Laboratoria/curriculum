# Clase Práctica
- Tipo: `clase presencial`
- Formato: `guided-learning`
- Duración: `120min`

## Objetivos
- Practicar codeando junto a tu equipo de profes, resolviendo problemas de estructuras condicionales, repetitivas y funciones
- Practicar, practicar y practicar
***

## Enunciados
A continuación tienes más problemas de práctica. Estos problemas serán resueltos, paso a paso, por tu equipo de profes en una sesión presencial (`workshop`).

Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo) **antes** de la sesión presencial. Así, ya vienes con dudas específicas y estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución ante el resto de la clase y así ayudar al resto de tus compañeras :)

#### 1. Ahorcado

Crea una página web que implemente el juego del Ahorcado. El ahorcado es un divertido juego de adivinanzas para dos jugadores (Computador vs Jugador).
> Jugador 1 -> El computador que verifica la presencia de la letra  /     Jugador 2 -> El que trata de adivinar las letras

El jugador 1 piensa en una palabra y el jugador 2 trata de adivinar la palabra.

- Si el jugador 2 sugiere una letra que aparece en la palabra, el jugador 1 la escribe en todas sus posiciones correctas.
- Si la letra sugerida no aparece en la palabra, el jugador 1 dibuja un elemento de la figura del hombre ahorcado como una marca de conteo, descotando 1 a 1 de tus 14 intentos.

El juego termina cuando:

1. El jugador adivinador completa la palabra, o adivina la palabra completa correctamente
2. El otro jugador (el computador) completa de dibujar al ahorcado.

![Screen Shot 2017-08-22 at 10.17.30 A](http://4.bp.blogspot.com/-f3eI_WIPxfI/UbPA6edeD-I/AAAAAAAAAuY/nqA-jy2qPFo/s1600/ahorcado.jpg
)

### Ejemplo de juego

El siguiente ejemplo del juego ilustra un jugador tratando de adivinar la palabra `AHORCADO` utilizando una estrategia basada únicamente en la frecuencia de letra.

![GitHub set up-w350](media/Screen%20Shot%202017-08-23%20at%207.01.53%20AM.png)

¡El jugador gana!, pues descubrió la palabra secreta, AHORCADO.

### Tips para la solución

A continuación, encontrarás tips que podrían ayudarte con la solución, mucha suerte!

#### [Tip 1. | Arte ASCII ]
Los gráficos para el Ahorcado son caracteres del teclado impresos en la pantalla. Este tipo de
gráficos se llama arte ASCII (se pronuncia “asqui”), y fue una especie de precursor a emojii.  

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

Este juego es un poquito más complicado de lo que parece, de modo que tómate un momento para pensar cómo implementarlo. Primero necesitarás crear un diagrama de flujo  para ayudar a visualizar lo que este programa hará.  
Un diagrama de flujo es un diagrama que muestra una serie de pasos como recuadros conectados por flechas. Cada recuadro representa un paso, y las flechas muestran qué pasos llevan a qué otros pasos. Coloca tu dedo sobre el recuadro "Inicio" del diagrama de flujo y recorre el programa siguiendo las flechas a los otros recuadros hasta que llegues al recuadro “Fin”.

![Screen Shot 2017-08-23 at 8.11.08 A](media/Screen%20Shot%202017-08-23%20at%208.11.08%20AM.png)

La Figura anterior es un diagrama de flujo completo para el Ahorcado. Sólo puedes moverte de un recuadro a otro en la dirección de la flecha. Nunca puedes volver hacia atrás a menos que haya una segunda flecha apuntando en dirección opuesta, como en el recuadro “El jugador ya ha probado esa letra”.

¡Eso se ve bien! Este diagrama de flujo reproduce completamente todo lo que puede ocurrir en el Ahorcado y en qué orden. Cuando diseñes tus propios juegos, un diagrama de flujo puede ayudarte a recordar todo lo que necesitas codificar.

Por supuesto, no es estrictamente necesario que hagas un diagrama de flujo. Podrías simplemente comenzar escribiendo código. Pero a menudo una vez que comiences a programar pensarás en cosas que son necesarias agregar o cambiar. Podrías terminar teniendo que borrar una gran parte de tu código, lo que sería un desperdicio de esfuerzo. Para evitar esto, siempre es mejor planear cómo el programa va a funcionar antes de comenzar a escribirlo.


#### 2. Creando animación en el DOM?


#### _Nota: Todos los retos deben validar los inputs antes de correr el programa._

***
[Continuar]( )
