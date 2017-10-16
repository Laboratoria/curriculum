# Apertura

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `15min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Explicar los entregables que se esperan de las alumnas
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

En esta unidad nos concentraremos en control de flujo usando funciones:
_recursividad_ y _asincronía_.

## ¿Por qué aprender esto?

La recursión es un concepto fundamental en programación, que nos puede llevar a
soluciones elegantes y eficientes a problemas algorítmicos. De hecho, la
recursión es tan poderosa, que toda lógica iterativa puede ser expresada usando
funciones recursivas. A la hora de iterar estructuras de datos anidadas, la
recursión se convierte en una herramienta indispensable.

Como desarrolladora de JavaScript, dominar la recursividad es fundamental para
resolver ciertos problemas así como para visualizar el comportamiento de las
funciones. Para ser una buena programadora debes interiorizar la recursión como
segunda naturaleza.

En la programación funcional, que es de estilo declarativo, intentamos evitar
sentencias imperativas como bucles, usando recursividad como alternativa.

Por otro lado, en JavaScript a menudo necesitamos lidiar con el comportamiento
asincrónico, que puede ser confuso para los programadores que sólo tienen
experiencia con código síncrono. A continuación se explicará qué es código
asíncrono, algunas de las dificultades de usar código asíncrono, y maneras de
manejar estas dificultades.

## Hoja de ruta

### Semana 1

* Sesión 1: presencial 3h => Funciones puras e inmutabilidad**
* Sesión 2: self-paced 2h => Refactorizar `Loader`

### Semana 2

* Pre-tarea: Lectura _Higher Order Functions_ (Unidad 03)
* Sesión 3: presencial 3h => Higher Order Functions
* Sesión 4: self-paced 2h => Refactorizar

### Semana 3

* Pre-tarea: Lectura _Recursividad_ (Unidad 05)
* **Sesión 5: presencial 3h => Control de flujo (recursión y asincronía)**
* Sesión 6: self-paced 2h => Refactorizar

### Semana 4

* Pre-tarea: Implementación, refactoring, pull request
* Sesión 7: presencial 3h => Code review + Demos de proyectos

## Guía de preguntas y conceptos clave

* Toda iteración puede reemplazarse con recursión y viceversa
* La recursividad nos permite explorar estructuras con un nivel indeterminado de
  anidación.
* ¿Cómo identificamos el caso base en una función recursiva?
* ¿Cómo identificamos el caso recursivo en una función recursiva? ¿hay más de un
  caso recursivo?
* ¿He incluido alguna otra condición de terminación necesaria?
* ¿Las declaraciones de la función conducen al caso base?
* ¿Se construye la recursión en el caso base hasta que el resultado deseado es
  devuelto por la función?
* El call stack o pila de llamadas aumenta con cada invocación a una función
* El call stack limita la profundidad de anidación en funciones recursivas.
* Cómo podemos evitar "reventar" el call stack?
* Usando funciones asícronas podemos ejecutar tareas que dependen de servicios
  externos (por ejemplo AJAX) sin bloquear la ejecución del programa.
* Gracias a la asincronía podemos diseñar procesos que ejecuten tareas en
  paralelo, en series o una combinación de ambos.
