# Adivina el Número - Guess the Number

## Índice

- [1. Consideraciones Generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del Proyecto](#3-resumen-del-proyecto)
- [4. Objetivos de Aprendizaje](#4-objetivos-de-aprendizaje)
- [5. Consideraciones Generales](#5-consideraciones-generales)
- [6. Consideraciones Técnicas](#6-consideraciones-técnicas)
- [7. Hitos del proyecto](#7-hitos-del-proyecto)
- [8. Recomendaciones](#8-recomendaciones)

---

## 1. Consideraciones Generales

- Este proyecto debe desarrollarse de manera **individual**.
- La estimación de tiempo para completar el proyecto es de 1 a 2 Sprints.
- Concéntrate en adquirir conocimientos en lugar de simplemente "terminar" el proyecto.
- Ten paciencia. No te preocupes demasiado por lo que aún no entiendes completamente.
- Tu aprendizaje se desarrollará a medida que progreses.

## 2. Preámbulo

En la actualidad, Java es uno de los lenguajes de programación más utilizados en
el mundo. A pesar de la diversidad de plataformas y herramientas disponibles, es
fundamental tener una base sólida en los conceptos fundamentales de Java y en la
programación orientada a objetos (OOP). El objetivo de este proyecto es
introducirte al mundo de Java a través de un juego simple y divertido.

![GUESS THE NUMBER](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/guess-the-number.png?alt=media)

## 3. Resumen del Proyecto

Es un juego interactivo que se desarrolla en el terminal, donde la jugadora y el
ordenador se turnan para intentar adivinar un número aleatorio entre 1 y 100.
Deben tener en cuenta la tentativa anterior, si fue "muy alta" o "muy baja".

![GUESS THE NUMBER DEMO](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/guess-the-number-demo.gif?alt=media)

## 4. Objetivos de Aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 5. Consideraciones Generales

- Duración del proyecto: Se estima que este proyecto tomará de 1 a 2 sprints.
- Debe implementarse en Java. Las únicas dependencias externas que se pueden utilizar
  son JUnit y Mockito para pruebas unitarias.
- El juego se llevará a cabo en el terminal. Las pruebas se pueden ejecutar
  en el terminal o en su IDE
  (se recomienda usar [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/)).
- Se utilizará un número aleatorio entre 1 y 100 como número secreto.
- La jugadora y el ordenador se turnarán para adivinar el número.
- Después de cada turno, se mostrarán información sobre la suposición realizada.
- El juego terminará cuando se adivine el número.
  Se mostrará una lista de todas las tentativas de la jugadora ganadora.

### Diagrama de Clases

![Diagrama de Clases](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/class-diagram.png?alt=media)

#### `GuessTheNumberGame`

**Propósito:**
Maneja la lógica principal, decide qué jugador asume el próximo turno.

**Atributos:**

- `random`: Generador de números aleatorios.
- `targetNumber`: Número aleatorio entre 1 y 100 a adivinar en la partida actual.

**Métodos estáticos (`static`):**

- `main(String[] args)`: Inicia el juego y genera el número aleatorio.
- `checkGuess(Player player)`: Ejecuta un turno, obtiene la suposición
  y evalúa el nuevo estado de la partida.

#### `Player`

**Propósito:**
Representa a una jugadora genérica. Es una clase abstracta.
Define los atributos y métodos que todas las _clases_ de jugadoras deben compartir:

**Atributos:**

- `name`: El nombre de la jugadora.
- `guesses`: El historial de suposiciones de la jugadora.

**Métodos:**

- `makeGuess()`: Devuelve la suposición de la jugadora. Es un método abstracto.
- `getName()`: Devuelve el nombre de la jugadora.
- `getGuesses()`: Devuelve el historial de suposiciones de la jugadora.

#### `HumanPlayer` y `ComputerPlayer` (heredan de `Player`)

**Propósito:**
Representa a las jugadoras _Humana_ y _Computadora_, respectivamente.

**Métodos:**

- `makeGuess()`: Método que cada clase que hereda de `Player` debe implementar.

**Relaciones:**

- La clase `GuessTheNumberGame` interactúa con las clases `HumanPlayer`
  y `ComputerPlayer` para gestionar el juego.
- Tanto la clase `HumanPlayer` como `Computer Player` son subclases de `Player`,
  lo que implica que heredan todas sus propiedades y métodos,
  pero también tienen algunas características adicionales propias.

Este diseño de clases permite separar las responsabilidades,
facilitando el mantenimiento y posibles extensiones del juego en el futuro.

Por ejemplo, podríamos añadir diferentes jugadoras "máquina" con diferentes
estrategias para la suposición automática, un nuevo tipo de
jugadora "remota" o incluso diferentes niveles de dificultad.

### **Criterios de Aceptación Mínimos del Proyecto**

- La jugadora y el ordenador se turnarán en turnos para intentar adivinar el número.
- Después de cada tentativa, se debe mostrar:
  * El nombre del jugador (persona o computadora).
  * La suposición realizada.
  * Un mensaje indicando si la suposición fue muy alta, muy baja o correcta.
- El juego terminará tan pronto como la jugadora o el ordenador adivine el
  número secreto. Debe mostrarse un mensaje de fin de juego,
  así como una lista de todas las tentativas realizadas por la jugadora ganadora.

## 6. Consideraciones Técnicas

- El juego se llevará a cabo en el terminal usando Java.
- La lógica del juego se basará en estructuras de control, incluyendo bucles,
  condicionales y colecciones.
- Es necesario dividir el código y mejorar su legibilidad y mantenimiento.
- Se debe utilizar una funcionalidad de la biblioteca de utilidades de Java para
  la generación de números aleatorios.
- Se deben realizar **pruebas unitarias** para sus clases y métodos
  utilizando JUnit y simulación de generación de números aleatorios con Mockito.

## 7. Hitos del proyecto

No trabajes como si fueras una fábrica haciendo una clase toda y luego otra.
El riesgo de trabajar así es que obtendrás muchas partes sin ninguna o con media
funcionalidad y aprenderás poco; no hagas lo contrario tampoco,
muchas funcionalidades en la consola, pero sin una finalización que pueda
ser utilizada por una usuaria no desarrolladora.

La metáfora a continuación puede ayudarte a entender mejor la idea.

![MARCOS](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/marcos.png?alt=media)

Estas etapas, desde el monopatín hasta el automóvil, son lo que llamaremos "Hitos".

Estos hitos son pequeñas tareas a implementar, así que evita trabajar como una
fábrica y podrás aprender un poco de cada cosa, agregando valor para tu
usuaria al finalizar cada hito.

A continuación, te dejamos algunos hitos como sugerencia para que construyas tu proyecto.

### 7.1 Hito 1 - Configuración del entorno de trabajo

Debes configurar tu entorno de trabajo, es decir:

- Descargar la versión elegida de Java e instalarla en tu computadora.
  Hoy, en octubre y noviembre de 2023, recomendamos la versión 17,
  ya que es la versión más compatible con la IDE IntelliJ.
- Instalar tu IDE (recomendamos usar
  [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/),
  en casos extremos de recursos computacionales se puede utilizar el VSCode).

#### Contenidos que pueden ayudarte en la configuración del entorno

- [Tutoriales para la preparación del entorno Java](https://github.com/Laboratoria/java-setup)
- [¿Cómo instalo Java?](https://www.java.com/pt-BR/download/help/download_options_pt-br.html)
- [Install IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Guía paso a paso para instalar Intellij Idea en Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

### 7.2 Hito 2 - Primeros pasos con el lenguaje

Crea la primera clase del proyecto que contenga el método main. Puedes agregar
un comando que muestre "¡Hola mundo!" en la consola.
Así podrás verificar si tus configuraciones son correctas.
Además, puedes estudiar conceptos del lenguaje como:

- ¿Qué son las clases y cómo construirlas?
- ¿Qué son los métodos y cómo utilizarlos?
- ¿Qué tipos de datos existen en el lenguaje? (Recuerda los que más usaste en
  JavaScript y trata de buscar tipos similares).
- ¿Cómo crear un array usando Java?
- ¿Qué son los modificadores de acceso como: `public`, `private`, `protected`?
- ¿Qué son los métodos constructores? ¿Cómo hacerlos?
- ¿Qué es el encapsulamiento? ¿Cómo hacerlo?
- ¿Qué es la herencia? ¿Cómo crearla en Java?

Recuerda también utilizar contenidos prácticos para comprender estos conceptos.
¡No pases mucho tiempo solo leyendo o viendo videos!
¡Crea códigos! Inténtalo, equivócate, inténtalo de nuevo, etc.

#### Contenidos que pueden ayudarte en los primeros pasos con Java

- [Learn the Basics of Java Programming](https://www.freecodecamp.org/news/learn-the-basics-of-java-programming/)
- [Programación Orientada a Objetos com Java](https://www.freecodecamp.org/news/object-oriented-programming-concepts-java/)
- [Java Basic Syntax](https://www.geeksforgeeks.org/java-basic-syntax/)
- [Java Data Types And Variables – Explained for Beginners](https://www.freecodecamp.org/news/java-data-types-and-variables/)
- [Learn Java](https://www.w3schools.com/java/default.asp)
- [Java Classes and Objects](https://www.w3schools.com/java/java_classes.asp)
- [Java Methods](https://www.w3schools.com/java/java_methods.asp)

### 7.3 Hito 3 - Comprensión del Diagrama de Clases

Dejamos un [Diagrama de Clases](#diagrama-de-clases) para que te sirva de base
para construir tu proyecto. Pero es necesario comprender lo que significa antes
de empezar a desarrollar lo que será tu proyecto.
En este hito, puedes comprender lo que este diagrama está representando.

#### Contenidos que pueden ayudarte en la comprensión del Diagrama de Clases

- [¿Qué son los Diagramas de Clase?](https://diagramasuml.com/diagrama-de-clases/)

### 7.4 Hito 4 - Iniciando el juego

En este hito, puedes crear el juego para un solo jugador.

Comienza creando las clases que representan a la jugadora humana. Luego, elige
el número objetivo, que debe ser un número aleatorio entre 1 y 100, y finalmente,
crea la lógica para verificar si el número de la jugadora es menor o
mayor que el valor objetivo. Muestra en la terminal si es un valor alto o bajo.

#### Contenidos que pueden ayudarte a comenzar el juego

- [Java: Cómo leer y presentar datos con los comandos de entrada y salida](https://www.programarya.com/Cursos/Java/Entrada-de-datos)
- [Java Scanner](https://www.baeldung.com/java-scanner)
- [Scanner class in Java](https://www.geeksforgeeks.org/scanner-class-in-java/)
- [Java User Input](https://www.w3schools.com/java/java_user_input.asp)
- [Número Aleatorio](https://www.baeldung.com/java-17-random-number-generators)

### 7.5 Hito 5 - Agregando más jugadoras

En este hito, puedes agregar otra jugadora al juego.

Comienza creando las clases que representan a la segunda jugadora, que podría
ser la computadora. Desarrolla la lógica para alternar entre las jugadoras.
Finalmente, agrega información adicional cuando alguna jugadora gane el juego.
Puedes mostrar la cantidad de intentos y cuáles fueron los intentos de la jugadora.

### 7.6 Hito 6 - Configuración para la construcción de pruebas unitarias

En este hito, configura las bibliotecas JUnit5 y Mockito en tu IDE para que
puedas crear pruebas unitarias.

#### Contenidos que pueden ayudarte a agregar dependencias de pruebas

- [Agregar JUnit5 en IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testing Java with VSCode](https://code.visualstudio.com/docs/java/java-testing)

### 7.7 Hito 7 - Creación de pruebas unitarias

Crea las pruebas unitarias para tu proyecto. Asegúrate de cubrir con pruebas
la lógica de tu juego basándote en comportamientos. Por ejemplo, crea pruebas que:

- Simulen que el número de la jugadora es mayor que el número objetivo.
- Simulen que el número de la jugadora es menor que el número objetivo.
- Simulen que el número es el mismo número objetivo.

#### Contenidos que pueden ayudarte a crear pruebas unitarias

- [Calidad y JUnit: Introducción a la automatización de pruebas unitarias en tu software Java en el día a día](https://www.tutorialspoint.com/junit/index.htm)
- [Tutorial de Mockito](https://www.digitalocean.com/community/tutorials/mockito-tutorial)

### 7.8 Hito 8 (Edición Hacker) - Creación de una "inteligencia" para jugar contra la computadora

En este hito, que consideramos como Edición Hacker, puedes crear una lógica
para que los número de la segunda jugadora, cuando estás jugando contra la computadora,
sean más inteligentes. Estos número pueden considerar la información
sobre si el número es alto o bajo en relación con el número objetivo,
haciendo que el juego sea más emocionante.

## 8. Recomendaciones

**Documentación de Java**: La documentación oficial de Java es una excelente
fuente de información sobre las clases y métodos disponibles en
Java (recomendamos usar Java 20).

**Diseño de la Estructura del Juego**: Antes de empezar a escribir código,
considera cómo quieres que funcione el juego. Piensa en cómo alternar los
turnos entre la jugadora y la computadora, cómo generar y
evaluar las suposiciones, y cómo mostrar información a la jugadora.
Tómate un momento para analizar y diseñar tu solución antes de empezar a implementarla.

**Separación de Responsabilidades**: Recomendamos seguir el diagrama de clases
proporcionado para obtener una clara separación de la lógica
del juego en componentes o clases que permitan mantener el código organizado y legible.

**Necesitarás Bucles y Condiciones**: Los bucles y las declaraciones
condicionales serán tus aliados en este proyecto para controlar los turnos,
evaluar las suposiciones y determinar el ganador.

**Manipulación de Números Aleatorios**: Utiliza la clase `Random` de `java.util`
para generar el número aleatorio secreto. Puedes encontrar información
sobre cómo usarla en la documentación de Java.

**Pruebas Unitarias**: A medida que desarrollas el juego, intenta escribir
pruebas unitarias para verificar que las diferentes partes del juego funcionan
como se espera. Puedes usar el framework JUnit para escribir tus pruebas.

Recuerda que este proyecto está diseñado para que apliques tu conocimiento
previo en JavaScript, "traduciéndolo" a Java, y aprendas el paradigma de
programación orientada a objetos en el proceso.

**_¡Diviértete construyendo tu juego de adivinanza de números! 🎲🎮_**
