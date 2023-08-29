# Guess the Number - Adivina el número

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

---

## 1. Preámbulo

En la actualidad, Java es uno de los lenguajes de programación más utilizados
en el mundo. A pesar de la diversidad de plataformas y herramientas disponibles,
es esencial tener una base sólida en los conceptos fundamentales de Java y la
programación orientada a objetos (OOP). El objetivo de este proyecto es
introducirte en el mundo de Java mediante un juego sencillo y entretenido.

![GUESS THE NUMBER](guess-the-number.png)

## 2. Resumen del proyecto

Es un juego interactivo que se lleva a cabo en la terminal, en el que la
jugadora y la computadora toman turnos para intentar adivinar un número aleatorio
entre 1 y 100.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Duración del proyecto: Se estima que este proyecto tomará entre 1 y 2 sprints.
* Enfoque exclusivo en Java.
* El juego se desarrollará en la terminal.
* Se utilizará un número aleatorio entre 1 y 100 como número secreto.
* La jugadora y la computadora se turnarán para adivinar el número.

### Diagrama de clases

#### GameLogic

**Propósito:**
Maneja la lógica principal, decide qué jugador toma el siguiente turno.

**Atributos:**

* `randomNumber`: Guarda el número aleatorio entre 1 y 100.

**Métodos:**

* `startGame()`: Inicia el juego y genera el número aleatorio.
* `checkGuess(int)`: Evalúa la suposición del jugador.

#### Player

**Propósito:**
Representa a la jugadora humana. Proporciona la funcionalidad para suposiciones.

**Atributos:**

* `name`: El nombre del jugador.

**Métodos:**

* `guess()`: Permite a la jugadora introducir su suposición.
* `getName()`: Devuelve el nombre de la jugadora.

#### Computer (hereda de Player)

**Propósito:**
Representa a la computadora como jugador.
Hace suposiciones automáticas.

**Métodos:**

* `autoGuess()`: La computadora realiza una suposición.

**Relaciones:**

* La clase GameLogic interactúa con las clases Player y Computer
para gestionar el juego.
* La clase Computer es una subclase de Player, lo que significa
que hereda todas las propiedades y métodos de Player, pero también
tiene algunas características adicionales propias.

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

Este diseño de clases permite separar las responsabilidades, facilitando
el mantenimiento y  posibles extensiones del juego en el futuro.
Por ejemplo, podríamos añadir diferentes estrategias para la suposición
automática de la computadora o incluso introducir niveles de dificultad.

### **Criterios de aceptación mínimos del proyecto**

* La jugadora y la computadora se alternarán en turnos para
 intentar adivinar dicho número.
* Tras cada intento, se debe mostrar:
  - El nombre del jugador (persona o computadora).
  - La suposición que se hizo.
  - Un mensaje que indique si la suposición fue demasiado alta,
  demasiado baja o correcta.
* El juego finalizará en cuanto la jugadora o la computadora
 acierte el número secreto.

## 5. Consideraciones técnicas

* El juego se llevará a cabo en la terminal haciendo uso de Java.
* La lógica del juego se basará en estructuras de control,
incluyendo ciclos y sentencias condicionales.
* Se recomienda emplear funciones para segmentar el código y mejorar
su legibilidad y mantenimiento.
* Es posible hacer uso de bibliotecas o paquetes adicionales para
la generación de números aleatorios.

***¡Diviértete con este desafío de construir el juego de adivinar el número! 🎲🎮***
