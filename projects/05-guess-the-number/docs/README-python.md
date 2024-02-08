# Python 🐍

## 1. Preámbulo

Python es uno de los lenguajes de programación más populares y versátiles en la
actualidad. Su éxito radica en su simplicidad y legibilidad, convirtiéndolo en
una opción ideal para aquellos que se inician en la programación. A pesar de la
diversidad de plataformas y herramientas disponibles, es esencial tener un
sólido entendimiento de los conceptos fundamentales de Python. Además, Python
es un lenguaje de programación multiparadigma, lo que significa que puedes
utilizar diferentes estilos de programación para resolver problemas, lo que
añade a su flexibilidad y poder. El objetivo de este proyecto es presentarte el
mundo de Python mediante un juego sencillo y entretenido.

## 2. Consideraciones Generales

- Duración del proyecto: Se estima que este proyecto tomará de 1 a 2 sprints.
- Debe implementarse en Python. Las únicas dependencias externas que se pueden
  utilizar son pytest para pruebas unitarias.
- El juego se llevará a cabo en el terminal. Las pruebas se pueden ejecutar en
  el terminal o en su IDE (VSCode es más que adecuada).
- Se utilizará un número aleatorio entre 1 y 100 como número secreto.
- La jugadora y el ordenador se turnarán para adivinar el número.
- Después de cada turno, se mostrarán información sobre la suposición
  realizada.
- El juego terminará cuando se adivine el número. Se mostrará una lista de
  todas las tentativas de la jugadora ganadora.

## 3. Consideraciones Técnicas

El juego se llevará a cabo en la terminal usando Python. La lógica del juego se
basará en estructuras de control, incluyendo bucles, condicionales y
colecciones. Es necesario dividir el código y mejorar su legibilidad y
mantenimiento. Se debe utilizar una funcionalidad de la biblioteca de
utilidades de Python para la generación de números aleatorios. Se deben
realizar pruebas unitarias para sus clases y métodos utilizando PyTest y
simulación de generación de números aleatorios con unittest.mock.

## 4. Hitos

A continuación, te dejamos algunos hitos como sugerencia para que construyas tu
proyecto.

### 4.1 Crear el entorno de desarrollo

El primer paso es configurar tu entorno de desarrollo. Para este proyecto,
necesitarás Python 3 y un editor de texto o un entorno de desarrollo integrado
(IDE).

1. Instala Python 3 si aún no lo tienes. Puedes descargarlo desde el [sitio
oficial de Python](https://www.python.org/downloads/).

2. Elige un editor de texto o un IDE. Algunas opciones populares son
[PyCharm](https://www.jetbrains.com/pycharm/), [Visual Studio
Code](https://code.visualstudio.com/), o [Sublime
Text](https://www.sublimetext.com/).

3. Configura tu editor o IDE para usar Python 3.

#### Algunas referencias sobre el tema

- [Visual Studio Code para
  Python](https://code.visualstudio.com/docs/languages/python)

### 4.2 Crear un script de Python

A continuación, crearás un script de Python simple para asegurarte de que tu
configuración funciona correctamente.

1. Crea un nuevo archivo llamado `main.py`. <br>
2. Ejecuta `main.py`.

#### Referencias

- [Cómo escribir y ejecutar un script de
  Python](https://entrenamiento-python-basico.readthedocs.io/es/3.7/leccion1/holamundo.html#ejecucion)

### 4.3 Implementar el juego

Ahora que tienes un entorno de desarrollo de Python funcionando, puedes empezar
a implementar el juego.

1. Genera un número aleatorio entre 1 y 100. Puedes usar la función `randint`
en el módulo `random` para hacer esto.

2. Implementa un bucle que solicite a la jugadora que adivine el número. Usa la
función `input` para obtener la entrada de la jugadora.

3. Compara la entrada de la jugadora con el número secreto. Si la jugadora
adivina correctamente, termina el juego. Si la jugadora adivina
incorrectamente, proporciona una pista sobre si el número secreto es mayor o
menor que la entrada de la jugadora.

4. Implementa la lógica para el turno del ordenador. El ordenador puede hacer
una suposición aleatoria, o puedes implementar alguna estrategia para que sus
suposiciones sean más inteligentes.

5. Continúa el juego hasta que la jugadora o el ordenador adivinen
correctamente el número.

6. Añade pruebas unitarias para tu código. Python tiene un módulo incorporado
llamado `unittest` que puedes usar para esto.

#### Referencias

- [Generación de números aleatorios en
  Python](https://docs.python.org/3/library/random.html)
- [Bucles en
  Python](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- [La función input en
  Python](https://docs.python.org/3/library/functions.html#input)
- [Comparaciones en
  Python](https://docs.python.org/3/library/stdtypes.html#comparisons)
- [Pruebas unitarias en Python con
  unittest](https://docs.python.org/4/library/unittest.html)

### 4.4 Mejorar el juego

Una vez que tengas una versión básica del juego funcionando, puedes hacer
mejoras.

1. Lleva un registro de las suposiciones de la jugadora y del ordenador. Cuando
el juego termine, muestra todas las suposiciones que hizo la jugadora ganadora.

2. Añade una opción para jugar de nuevo. Cuando el juego termine, pregunta a la
jugadora si quiere jugar de nuevo.

3. Añade comentarios a tu código para explicar qué hace cada parte. Esto hará
que tu código sea más fácil de entender y mantener.

#### Referencias

- [Manejo de listas en
  Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Cómo escribir comentarios en
  Python](https://www.w3schools.com/python/python_comments.asp)

### 4.5 Crear una "inteligencia" para jugar contra la computadora (Edición Hacker)

Una vez que hayas implementado el juego básico y hecho algunas mejoras, puedes
llevar las cosas al siguiente nivel creando una "inteligencia" para jugar
contra la computadora. Esta "inteligencia" podría ser simplemente otra
implementación del juego que utiliza una estrategia diferente, o podría ser un
algoritmo de aprendizaje automático que mejora con cada juego que juega.

1. Implementa una nueva versión del juego que utiliza una estrategia diferente.
Por ejemplo, en lugar de adivinar al azar, esta versión podría intentar
adivinar el número más probable basándose en las suposiciones anteriores.

2. Prueba tu nueva "inteligencia" jugando contra la computadora. ¿Puedes
ganarle a la computadora con tu nueva estrategia?

3. Si te sientes ambicioso, podrías intentar implementar un algoritmo de
aprendizaje automático. Este algoritmo podría aprender de cada juego que juega,
mejorando sus suposiciones con cada juego. Podrías usar una biblioteca de
aprendizaje automático como scikit-learn para hacer esto.

4. Asegúrate de añadir pruebas unitarias para tu nueva "inteligencia". También
podrías querer añadir algunas métricas para rastrear cómo mejora tu algoritmo
con cada juego que juega.

#### Referencias

- [Introducción a
  scikit-learn](https://scikit-learn.org/stable/getting_started.html)
- [Cómo implementar un algoritmo de aprendizaje
  automático](https://machinelearningmastery.com/start-here/#algorithms)

## 5. Extensión: Versión Orientada a Objetos (OOP)

Una vez que hayas implementado y perfeccionado la versión base del juego,
es posible que desees considerar la posibilidad de reescribirlo utilizando
el paradigma de la Programación Orientada a Objetos (OOP). Esta sería una
ampliación (no un requisito) que te permitiría familiarizarte con los
objetivos de aprendizaje de la programación orientada a objetos. Quizás te
resulte útil si tus futuros proyectos en Python involucran el uso de
frameworks que se basan en este paradigma. Por ejemplo, algunas
herramientas como los ORM (mapeadores objeto-relacional) que se
encuentran en el mundo de Python
están diseñadas para funcionar con la programación orientada a objetos.

1. Crea una clase `Game` que represente una instancia del juego. Esta clase
puede tener métodos como `start`, `play_turn`, `check_guess`, y `end_game`.

2. Crea una clase `Player` que represente a una jugadora. Esta clase puede
tener atributos como `name` y `guesses`, y métodos como `make_guess`.

3. Crea una subclase `ComputerPlayer` que herede de la clase `Player`. Esta
clase puede sobrescribir el método `make_guess` para implementar la lógica de
adivinación del ordenador.

4. En la clase `Game`, usa instancias de las clases `Player` y `ComputerPlayer`
para representar a la jugadora y al ordenador.

5. Añade pruebas unitarias para tus clases y métodos. Python tiene un módulo
incorporado llamado `unittest` que puedes usar para esto.

#### Referencias

- [Programación Orientada a Objetos en
  Python](https://docs.python.org/3/tutorial/classes.html)
