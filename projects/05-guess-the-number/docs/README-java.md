# Java ☕

## 1. Preámbulo

En la actualidad, Java es uno de los lenguajes de programación más utilizados en
el mundo. A pesar de la diversidad de plataformas y herramientas disponibles, es
fundamental tener una base sólida en los conceptos fundamentales de Java y en la
programación orientada a objetos (OOP). El objetivo de este proyecto es
introducirte al mundo de Java a través de un juego simple y divertido.

## 2. Consideraciones Generales

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

## 3. Consideraciones Técnicas

- El juego se llevará a cabo en el terminal usando Java.
- La lógica del juego se basará en estructuras de control, incluyendo bucles,
  condicionales y colecciones.
- Es necesario dividir el código y mejorar su legibilidad y mantenimiento.
- Se debe utilizar una funcionalidad de la biblioteca de utilidades de Java para
  la generación de números aleatorios.
- Se deben realizar **pruebas unitarias** para sus clases y métodos
  utilizando JUnit y simulación de generación de números aleatorios con Mockito.

## 4. Hitos del proyecto

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

### 4.1 Hito 1 - Configuración del entorno de trabajo

Debes configurar tu entorno de trabajo, es decir:

- Descargar la versión elegida de Java e instalarla en tu computadora.
  Hoy, en octubre y noviembre de 2023, recomendamos la versión 21,
  ya que es la versión más compatible con la IDE IntelliJ.
- Instalar tu IDE (recomendamos usar
  [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/),
  en casos extremos de recursos computacionales se puede utilizar el VSCode).

#### Contenidos que pueden ayudarte en la configuración del entorno

- [Tutoriales para la preparación del entorno Java](https://github.com/Laboratoria/java-setup)
- [¿Cómo instalo Java?](https://www.java.com/es/download/help/develop_es.html)
- [Install IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Guía paso a paso para instalar Intellij Idea en Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

> [!TIP]
> Para verificar el correcto funcionamiento de tus instalaciones,
> te sugerimos crear la primera clase del proyecto que incluya el método main.
> Agrega un comando que imprima "¡Hola mundo!" en la consola.
> Esto te permitirá confirmar la adecuada configuración de tus ajustes.

### 4.2 Hito 2 - Comprensión del Diagrama de Clases

Te proporcionamos un [Diagrama de Clases](#diagrama-de-clases)
como punto de partida para la construcción de tu proyecto.
Utiliza esta [documentación](https://diagramasuml.com/diagrama-de-clases/)
para comprender el diagrama, ya que es esencial entender su
significado antes de comenzar el desarrollo del proyecto.

En este hito, es crucial comprender la representación del
diagrama. Puedes apoyarte en las siguientes preguntas para
validar tu comprensión:

- ¿Qué es una clase?
- ¿Identificas las atributos y métodos más importantes de cada clase?
- ¿En base a las atributos y métodos, puedes indicar qué rol cumplirá cada clase?
- ¿Qué clases se extienden/heredan de otras?
- ¿Qué tipo de relación tiene la clase `Player` con `HumanPlayer`?
- ¿Identificas los diferentes símbolos de visibilidad de las atributos y métodos en cada clase?

> [!NOTE]
> Es comprensible que, en este momento, puedas no sentirte
> completamente segura al responder las preguntas anteriores.
> En los próximos hitos, abordaremos cada una de las clases, y
> a medida que avancemos, te animamos a encontrar una mayor
> conexión entre lo que estás construyendo y el diagrama de clases.

### 4.3 Hito 3 - Comprensión del Diagrama de Clases

Dejamos un [Diagrama de Clases](#diagrama-de-clases) para que te sirva de base
para construir tu proyecto. Pero es necesario comprender lo que significa antes
de empezar a desarrollar lo que será tu proyecto.
En este hito, puedes comprender lo que este diagrama está representando.

#### Contenidos que pueden ayudarte en la comprensión del Diagrama de Clases

- [¿Qué son los Diagramas de Clase?](https://diagramasuml.com/diagrama-de-clases/)

### 4.4 Hito 4 - Iniciando el juego

En este hito, puedes crear el juego para un solo jugador.

Comienza creando las clases que representan a la jugadora humana. Luego, elige
el número objetivo, que debe ser un número aleatorio entre 1 y 100, y finalmente,
crea la lógica para verificar si el número de la jugadora es menor o
mayor que el valor objetivo. Muestra en la terminal si es un valor alto o bajo.

#### Contenidos que pueden ayudarte a comenzar el juego

- [Java: Cómo leer y presentar datos con los comandos de entrada y salida](https://www.programarya.com/Cursos/Java/Entrada-de-datos)
- [Java Scanner](https://www.baeldung.com/java-scanner)
- [Java User Input](https://www.w3schools.com/java/java_user_input.asp)
- [Número Aleatorio](https://www.baeldung.com/java-17-random-number-generators)

### 4.5 Hito 5 - Agregando más jugadoras

En este hito, puedes agregar otra jugadora al juego.

Comienza creando las clases que representan a la segunda jugadora, que podría
ser la computadora. Desarrolla la lógica para alternar entre las jugadoras.
Finalmente, agrega información adicional cuando alguna jugadora gane el juego.
Puedes mostrar la cantidad de intentos y cuáles fueron los intentos de la jugadora.

### 4.6 Hito 6 - Configuración para la construcción de pruebas unitarias

En este hito, configura las bibliotecas JUnit5 y Mockito en tu IDE para que
puedas crear pruebas unitarias.

Le recomendamos que utilice las bibliotecas presentes en el repositorio de Maven:

- org.junit.jupiter:junit-jupiter
- org.mockito:mockito-core

#### Contenidos que pueden ayudarte a agregar dependencias de pruebas

- [Agregar JUnit5 en IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testing Java with VSCode](https://code.visualstudio.com/docs/java/java-testing)

### 4.7 Hito 7 - Creación de pruebas unitarias

Crea las pruebas unitarias para tu proyecto. Asegúrate de cubrir con pruebas
la lógica de tu juego basándote en comportamientos. Por ejemplo, crea pruebas que:

- Simulen que el número de la jugadora es mayor que el número objetivo.
- Simulen que el número de la jugadora es menor que el número objetivo.
- Simulen que el número es el mismo número objetivo.

#### Contenidos que pueden ayudarte a crear pruebas unitarias

- [Calidad y JUnit: Introducción a la automatización de pruebas unitarias en tu software Java en el día a día](https://www.tutorialspoint.com/junit/index.htm)
- [Tutorial de Mockito](https://www.digitalocean.com/community/tutorials/mockito-tutorial)

### 4.8 Hito 8 (Edición Hacker) - Creación de una "inteligencia" para jugar contra la computadora

En este hito, que consideramos como Edición Hacker, puedes crear una lógica
para que los número de la segunda jugadora, cuando estás jugando contra la computadora,
sean más inteligentes. Estos número pueden considerar la información
sobre si el número es alto o bajo en relación con el número objetivo,
haciendo que el juego sea más emocionante.

## 5. Recomendaciones

**Documentación de Java**: La documentación oficial de Java es una excelente
fuente de información sobre las clases y métodos disponibles en
Java (recomendamos usar Java 21).

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

## 6. Pistas / Tips

Consulta los [FAQ](./FAQ-java.md)
Súmate al canal de Slack
[#project-guess-the-number](https://claseslaboratoria.slack.com/archives/C067E8ZT9CY)
para conversar y pedir ayuda del proyecto.
