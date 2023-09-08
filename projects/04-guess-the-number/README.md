# Guess the Number - Adivina el número

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Consideraciones generales](#5-consideraciones-generales)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)
---

## 1. Consideraciones generales

* Este proyecto lo resolvemos de manera **individual**.
* El rango de tiempo estimado para completar el proyecto es de 1 a 2 Sprints.
* Concentra tu atención en adquirir conocimiento en lugar de simplemente "terminar" el proyecto.
* ¡Paciencia! No te inquietes en exceso por lo que aún no comprendas completamente.
Tu aprendizaje se desarrollará a medida que avances.

## 2. Preámbulo

En la actualidad, Java es uno de los lenguajes de programación más utilizados
en el mundo. A pesar de la diversidad de plataformas y herramientas disponibles,
es esencial tener una base sólida en los conceptos fundamentales de Java y la
programación orientada a objetos (OOP). El objetivo de este proyecto es
introducirte en el mundo de Java mediante un juego sencillo y entretenido.

![GUESS THE NUMBER](/assets/guess-the-number.png)

## 3. Resumen del proyecto

Es un juego interactivo que se lleva a cabo en la terminal, en el que la
jugadora y la computadora toman turnos para intentar adivinar un número aleatorio
entre 1 y 100. Se deberá tener en cuenta el intento anterior si fue "muy alto" o "muy bajo".

![Guess the number demo](/assets/guess-the-number-demo.gif)

## 4. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 5. Consideraciones generales

* Duración del proyecto: Se estima que este proyecto tomará entre 1 y 2 sprints.
* Enfoque exclusivo en Java.
* El juego se desarrollará en la terminal.
* Se utilizará un número aleatorio entre 1 y 100 como número secreto.
* La jugadora y la computadora se turnarán para adivinar el número.
* Después de cada turno, se mostrará información sobre la suposición realizada.
* El juego terminará cuando se adivine el número. Se debe mostrar la lista de
todos los intentos de la jugadora ganadora.

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

![Diagrama de clases](https://mermaid.ink/svg/pako:eNp9UlFPwjAQ_itN5YHJINHHhZAYTdBEjRGfdD4c2zEma7u0VxOC8NttVwYjQV_W9fvuvrv7ehueqRx5wrMKjLkrodAgUslYc2dTi8a8LfHZijnqKQhkG88yNmRf8A0jS2U1egWZK8F0c_RavpTECHSBFLIPxEsFa9Ssbo6rs-h1i2ZLzFZNF32vV_i_-DQ26rG5UhWCDEkDJqCU_RnpUhYfn8y1YCJX3LNb_zkz1OWwbcAH7OXHPw69twLkeepWidoS6iM7HsPckIaMJpOOXvAy3Fv7QntMuuoBubjRGtaPpaHdgyQsUO_CuGiOc60weBFdentb3FvsdPoRC6odfBoUHNXI71zW7mBE6KszYfu4g06ltlAn43Tww0b8sRD_SPKYC9TuuXK3gY1MymmJzhKeuN8cF2ArSnkqfShYUrO1zHhC2mLMbZ0D4X5nebKAyjgU85KUftpvtT9iXoN8V6qN2f4CAl791g)

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
  - Un mensaje que indique si la suposición fue demasiado alta, demasiado baja
  o correcta.
* El juego finalizará en cuanto la jugadora o la computadora acierte el
número secreto. Se debe mostrar un mensaje de fin del juego, así como una lista
todos los intentos realizados por la jugadora ganadora.

## 6. Consideraciones técnicas

* El juego se llevará a cabo en la terminal haciendo uso de Java.
* La lógica del juego se basará en estructuras de control,
incluyendo ciclos y sentencias condicionales.
* Se recomienda emplear funciones para segmentar el código y mejorar
su legibilidad y mantenimiento.
* Es posible hacer uso de bibliotecas o paquetes adicionales para
la generación de números aleatorios.
* Considerar realizar **tests unitarios** haciendo uso de JUnit.

## 7. Pistas, tips y lecturas complementarias

**Documentación de Java**: La documentación oficial de Java es una excelente fuente de información sobre las clases y métodos disponibles en Java
(recomendamos utilizar Java 20).

**Diseña la estructura del juego**: Antes de empezar a escribir código, considera cómo deseas que funcione el juego. Piensa en cómo alternar los turnos entre la jugadora y la computadora, cómo generar y evaluar las suposiciones, y cómo mostrar la información al jugador.

**Separación de responsabilidades**: Divide la lógica del juego en componentes o clases separadas para mantener el código organizado. La clase `GameLogic` podría ser responsable de controlar el flujo del juego, mientras que las clases `Player` y `Computer` se encargan de las suposiciones.

**Utiliza bucles y condicionales**: Los bucles y las sentencias condicionales serán esenciales en este proyecto para controlar los turnos, evaluar las suposiciones y determinar el ganador.

**Manejo de números aleatorios**: Utiliza la clase `Random` de Java para generar el número secreto aleatorio. Puedes encontrar información sobre cómo usarla en la documentación de Java.

**Pruebas unitarias**: A medida que desarrolles el juego, considera escribir pruebas unitarias para verificar que las diferentes partes del juego funcionen como se espera. Puedes utilizar el framework JUnit para escribir tus pruebas.


***Recuerda que este proyecto es una oportunidad para aprender y practicar tus habilidades en Java, asó que ¡diviértete mientras construyes tu juego de adivinar el número! 🎲🎮***
