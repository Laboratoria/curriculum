
# Guess the number - Adivina el número

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

***

## 1. Preámbulo

En la actualidad, Java es uno de los lenguajes de programación más utilizados en el mundo. A pesar de la diversidad de plataformas y herramientas disponibles, es esencial tener una base sólida en los conceptos fundamentales de Java y la programación orientada a objetos (OOP). El objetivo de este proyecto es introducirte en el mundo de Java mediante un juego sencillo y entretenido. Para este proyecto, se deberá crear un juego por turnos en el que una usuaria se enfrente a la computadora para adivinar un número aleatorio entre 1 y 100. El objetivo es proporcionar una experiencia interactiva y divertida para la jugadora.

![GUESS THE NUMBER](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*t80SXGgrKGHGbLYzDMCYvg.png)

## 2. Resumen del proyecto

Es un juego interactivo que se lleva a cabo en la terminal, en el que la jugadora y la computadora toman turnos para intentar adivinar un número aleatorio entre 1 y 100. Tras cada intento, se ofrece una pista que indica si la suposición fue demasiado alta, demasiado baja o acertada. El juego prosigue hasta que el número es correctamente adivinado por alguna de las dos participantes (computadora y usuaria).

## 3. Objetivos de aprendizaje


## 4. Consideraciones generales

- Duración del proyecto: Se estima que este proyecto tomará entre 1 y 2 sprints.
- Enfoque exclusivo en Java: A lo largo de este proyecto, el enfoque estará únicamente en el lenguaje Java. No se introducirán otras tecnologías o lenguajes.
- El juego se desarrollará en la terminal.
- Se utilizará un número aleatorio entre 1 y 100 como número secreto.
- La jugadora y la computadora se turnarán para adivinar el número.
- Después de cada turno, se mostrará información sobre la suposición realizada.
- El juego terminará cuando se adivine el número.

### **Diagrama de clases**

En la estructura propuesta para el juego, se sugiere dividir la lógica y las entidades en varias clases para mantener el código organizado y modular. A continuación, se describe el diseño básico de las clases:

**GameLogic**

**Propósito:** Esta clase es el corazón del juego. Maneja la lógica principal, decide qué jugador toma el siguiente turno y evalúa las suposiciones.
**Atributos:**

- `randomNumber`: Guarda el número aleatorio entre 1 y 100 que los jugadores deben adivinar.

**Métodos:**
- `startGame()`: Inicia el juego y genera el número aleatorio.
- `checkGuess(int)`: Evalúa la suposición del jugador y proporciona feedback sobre si la suposición es demasiado alta, demasiado baja o correcta.\

**Player**

**Propósito:** Representa a la jugadora humana. Proporciona la funcionalidad para que la jugadora haga suposiciones.
**Atributos:**

- `name: El nombre del jugador.`

**Métodos:**

- `guess()`: Permite a la jugadora introducir su suposición.
- `getName()`: Devuelve el nombre de la jugadora.\



**Computer (hereda de Player)**

**Propósito**: Representa a la computadora como jugador. Hace suposiciones automáticas basadas en la lógica definida.

**Métodos:**

- `autoGuess()`: La computadora realiza una suposición. Esta podría estar basada en alguna lógica (por ejemplo, búsqueda binaria) o ser completamente aleatoria.


**Relaciones:**
- La clase GameLogic interactúa con las clases Player y Computer para gestionar el juego.
- La clase Computer es una subclase de Player, lo que significa que hereda todas las propiedades y métodos de Player, pero también tiene algunas características adicionales propias.

```
+------------------+
|     GameLogic    |
+------------------+
|- randomNumber    |
|------------------|
|+startGame()      |
|+checkGuess(int)  |
+------------------+

+--------------+
|   Player     |
+--------------+
|- name        |
|--------------|
|+guess()      |
|+getName()    |
+--------------+
      ^
      |
+--------------+
|  Computer    |
+--------------+
|+autoGuess()  |
+--------------+

```

Este diseño de clases permite separar las responsabilidades, facilitando la mantenimiento y posibles extensiones del juego en el futuro. Por ejemplo, podríamos añadir diferentes estrategias para la suposición automática de la computadora o incluso introducir niveles de dificultad.


### **Criterios de aceptación mínimos del proyecto**

- La jugadora y la computadora se alternarán en turnos para intentar adivinar dicho número.
- Tras cada intento, se debe mostrar:
    - El nombre del jugador (persona o computadora).
    - La suposición que se hizo.
    - Un mensaje que indique si la suposición fue demasiado alta, demasiado baja o correcta.
- El juego finalizará en cuanto la jugadora o la computadora acierte el número secreto.

## 5. Consideraciones técnicas

- El juego se llevará a cabo en la terminal haciendo uso de Java.
- La lógica del juego se basará en estructuras de control, incluyendo ciclos y sentencias condicionales.
- Se recomienda emplear funciones para segmentar el código y mejorar su legibilidad y mantenimiento.
- Es posible hacer uso de bibliotecas o paquetes adicionales para la generación de números aleatorios.

**¡Diviértete con este desafío de construir el juego de adivinar el número! 🎲🎮**
