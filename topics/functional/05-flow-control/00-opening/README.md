---
type: read
duration: 5min
---

# Apertura

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
