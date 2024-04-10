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

> [!TIP]
> Considera crear una rama para el desarrollo de cada hito.
> Crear ramas para cada hito te ayudará a tener un
> desarrollo más organizado, flexible y eficiente.

### Hito 1 - Configuración del entorno de trabajo

Debes configurar tu entorno de trabajo, es decir:

- Descargar la versión elegida de Java e instalarla en tu computadora.
  Hoy, en octubre y noviembre de 2023, recomendamos la versión 21,
  ya que es la versión más compatible con la IDE IntelliJ.
- Instalar tu IDE (recomendamos usar
  [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/),
  en casos extremos de recursos computacionales se puede utilizar el VSCode).

🛠️ Recursos útiles:

- [Tutoriales para la preparación del entorno Java](https://github.com/Laboratoria/java-setup)
- [¿Cómo instalo Java?](https://www.java.com/es/download/help/develop_es.html)
- [Install IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Guía paso a paso para instalar Intellij Idea en Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

> [!TIP]
> Para verificar el correcto funcionamiento de tus instalaciones,
> te sugerimos crear la primera clase del proyecto que incluya el método main.
> Agrega un comando que imprima "¡Hola mundo!" en la consola.
> Esto te permitirá confirmar la adecuada configuración de tus ajustes.

### Hito 2 - Comprensión del Diagrama de Clases

Te proporcionamos un [Diagrama de Clases](#diagrama-de-clases)
como punto de partida para la construcción de tu proyecto.
Utiliza esta [documentación](https://diagramasuml.com/diagrama-de-clases/)
para comprender el diagrama, ya que es esencial entender su
significado antes de comenzar el desarrollo del proyecto.

En este hito, es crucial comprender la representación del
diagrama. Puedes apoyarte en las siguientes preguntas para
validar tu comprensión:

- ¿Qué es una clase?
- ¿Identificas las atributos y métodos cada clase?
- ¿En base a las atributos y parámetros de cada método,
puedes identificar los tipos de datos de cada uno ?
- ¿Qué tipo de relación tiene la clase `Player` con `HumanPlayer`?
- ¿Identificas los diferentes modificadores de acceso relacionados
 a los símbolos de visibilidad de atributos y métodos?
- ¿Cómo se define y se utiliza un constructor en Java?
- ¿Qué es el encapsulamiento y cómo lo
aplicarías a las clases del diagrama?
- Examina el diagrama UML, ¿puedes identificar
y explicar los diferentes tipos de relaciones
entre las clases (como composición,
asociación, herencia, etc.)? y
¿Cómo se representan estas relaciones en el código Java?

> [!NOTE]
> Es normal que, en este momento, puedas no sentirte
> segura al responder las preguntas anteriores.
> En los próximos hitos, abordaremos cada una de las clases, y
> a medida que avances, te animamos a encontrar una mayor
> conexión entre lo que estás construyendo y el diagrama de clases.

### Hito 3 - Crea y estructura tu proyecto

Es crucial que en este punto crees tu proyecto
y desarrolles las primeras clases
`GuessTheNumberGame`, `Player` y `HumanPlayer`
del juego conforme al diagrama de clases
proporcionado, ya que serán las primeras
clases que debes usar para hacer pruebas
en tu proyecto. Cada clase debe definir
cuidadosamente sus atributos y métodos,
respetando la adecuada configuración de visibilidad,
como se explica en este enlace sobre
[modificadores de acceso en Java](https://www.simplilearn.com/tutorials/java-tutorial/access-modifiers#:~:text=Access%20modifiers%20in%20Java%20allow,control%20access%20from%20other%20classes.).

🛠️ Recursos útiles:

- [Crear proyecto con IntelliJ](https://drive.google.com/file/d/1xGL7mPTrvqwSCzbKyfjyUyK42RC1LbEh/view?usp=sharing)
- [Crear proyecto con VScode](https://drive.google.com/file/d/1TORaOzmnJ3kJd-4qtP9FmamFK3FGVlwj/view?usp=sharing)

Por ahora nada funcionará, pero ve paso a paso hasta resolver el
problema. No intentes correr antes de gatear.

### Hito 4 - Iniciando el juego

Inicia con la clase predeterminada del proyecto,
`GuessTheNumberGame`. Esta clase requiere dos
[atributos](https://portalacademico.cch.unam.mx/cibernetica2/principios-programacion-orientada-a-objetos/atributos):
`random` y `targetNumber`. `targetNumber`
debe ser de tipo primitivo [int](https://www.geeksforgeeks.org/data-types-in-java/).

Es fundamental señalar que el atributo `random`
es de un tipo de referencia especial. Para
gestionarlo, importa
[java.util.Random](https://www.geeksforgeeks.org/java-util-random-nextint-java/).
Al trabajar con tipos de referencia, especialmente fuera de los tipos
primitivos, es posible que necesites realizar importaciones adicionales.

Ahora, en la misma clase `GuessTheNumberGame`,
concéntrate en obtener el número ingresado por la
jugadora utilizando el método `makeGuess` de la propia
clase `HumanPlayer`. Para lograrlo, haz referencia e
importa la clase
[java.util.Scanner](https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html).
A continuación, compara el número introducido
por la jugadora con el número a adivinar,
`targetNumber`. Utiliza el método `checkGuess`
para evaluar el resultado y, en función del mismo,
indica si el número es demasiado alto, demasiado
bajo o si ha acertado.

Toma en cuenta que debes almacenar cada una
de las suposiciones de la jugadora en el
atributo `guesses`. Para ello profundiza en las
diferencias entre
[arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) y
[ArrayLists](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html).
🛠️ Recursos utiles:

- [Java: Cómo leer y presentar datos con los comandos de entrada y salida](https://www.programarya.com/Cursos/Java/Entrada-de-datos)
- [Java Scanner](https://www.baeldung.com/java-scanner)
- [Java User Input](https://www.w3schools.com/java/java_user_input.asp)
- [Número Aleatorio](https://www.baeldung.com/java-17-random-number-generators)

> [!IMPORTANT]
> En este momento, la jugadora ya puede proponer un número,
> y al hacerlo, el juego concluye. El objetivo a tener en
> cuenta es implementar la posibilidad de que pueda
> seguir jugando hasta adivinar el número.

### Hito 5 - Agregando más jugadoras

En este hito, incorporaras una nueva jugadora al
juego creando la clase `ComputerPlayer`.

1. `makeGuess()` en `ComputerPlayer`:
Permite que la computadora u oponente virtual
realice una suposición aleatoria. Utiliza la clase
Random para generar números aleatorios. Asegúrate de
almacenar cada suposición en el historial de suposiciones
(`guesses`) de la nueva jugadora.

2. Actualización de la lógica del juego en `GuessTheNumberGame`:
Es necesario actualizar la lógica del juego en la clase
`GuessTheNumberGame` para que pueda interactuar con la nueva
jugadora y ambas clases.
Agrega instancias de las jugadoras. En la clase `GuessTheNumberGame`,
define e inicializa
[instancias](https://es.stackoverflow.com/questions/7576/qu%C3%A9-es-una-instancia-en-poo)
de `HumanPlayer` y `ComputerPlayer`. Puedes tener múltiples
instancias de cada tipo de jugadora si lo deseas. Además,
modifica el método `checkGuess(Player player)` para que invoque
el método `makeGuess()` correspondiente a la jugadora pasada como
argumento. Luego, compara la suposición con el número objetivo
y proporciona el resultado adecuado.

### Hito 6 - Configuración para la construcción de pruebas unitarias

En este hito, configura las bibliotecas JUnit5 y Mockito en tu IDE para que
puedas crear pruebas unitarias.

Le recomendamos que utilice las bibliotecas presentes en el repositorio de
[Maven](https://www.arquitecturajava.com/que-es-maven/):

- org.junit.jupiter:junit-jupiter
- org.mockito:mockito-core

🛠️ Recursos útiles:

- [Agregar JUnit5 en IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testing Java with VSCode](https://code.visualstudio.com/docs/java/java-testing)

### Hito 7 - Creación de pruebas unitarias

Crea las pruebas unitarias para tu proyecto. Asegúrate de cubrir con pruebas
la lógica de tu juego basándote en comportamientos. Por ejemplo, crea pruebas que:

- Simulen que el número de la jugadora es mayor que el número objetivo.
- Simulen que el número de la jugadora es menor que el número objetivo.
- Simulen que el número es el mismo número objetivo.

🛠️ Recursos útiles:

- [Calidad y JUnit: Introducción a la automatización de pruebas unitarias en tu software Java en el día a día](https://www.tutorialspoint.com/junit/index.htm)
- [Tutorial de Mockito](https://www.digitalocean.com/community/tutorials/mockito-tutorial)
- [JUnit5 en VSCode](https://drive.google.com/file/d/1QL9nz4fZPK3OxNJUCME4OYSwWF_pWZ04/view?usp=sharing)
- [Mockito en VSCode](https://drive.google.com/file/d/16B0Sg0RUYSvp2_Drh_I6Q2-be3wLFTcs/view?usp=sharing)
- [JUnit5 en IntelliJ](https://drive.google.com/file/d/1opSSwWxog7voh2TO8skFsXxXqRYfi8S9/view?usp=sharing)
- [Mockito en IntelliJ](https://drive.google.com/file/d/1GYP6Q4X8dkaxGbeQF4sLW5W2BkeHph2q/view?usp=sharing)

### Hito 8 (Edición Hacker) - Creación de una "inteligencia" para jugar contra la computadora

En este hito, que consideramos como Edición Hacker, puedes crear la lógica
para que los número de la segunda jugadora, cuando estás jugando contra la computadora,
sean más inteligentes.  Estos números pueden aprovechar la información
sobre si la suposición anterior fue alta o baja en relación con el número
objetivo, generando así un juego más emocionante.

Para lograrlo, puedes crear un método adicional en
la clase `ComputerPlayer`, por ejemplo, llamado
`makeSmartGuess()`. En esta función, se utilizaría
la información sobre si la suposición anterior fue
alta o baja en relación con el número objetivo. La
intención es ajustar la lógica de generación de
suposiciones para que la computadora realice
estimaciones más precisas y estratégicas.

Seguidamente, necesitarás actualizar el método
`checkGuess(Player player)` en la clase `GuessTheNumberGame`.
Cuando la jugadora sea la computadora, deberás modificar la
llamada al método `makeGuess()` por `makeSmartGuess()`.
Es esencial asegurarse de proporcionar la información
necesaria sobre la suposición anterior a la función
`makeSmartGuess()`, de modo que la estrategia de suposición
se base en datos históricos, mejorando así la inteligencia del juego.
Para la implementación de este lógica adicional es posible
que necesites agregar nuevos atributos o métodos que
modifiquen el diagrama de clases inicial, no hay ningún
problema en esto siempre y cuando mantengan la misma semántica

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
