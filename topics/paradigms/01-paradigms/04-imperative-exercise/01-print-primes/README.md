---
tracks:
  - web-dev
env: cjs
---

# Imprime los número enteros menores que 20

La programación imperativa tiene un nivel de abstracción bajo, lo que quiere
decir que se enfoca en describir, desde el punto de vista de la computadora,
cómo hacer lo que queremos. Nuestro código expresa de forma explícita el control
de flujo, usando bucles, declara variables para llevar la cuenta, ...

En el mundo real, en un lenguaje como JavaScript, vamos a encontrar
características de este paradigma, pero siempre en el contexto de otro paradigma
con un nivel de abtracción más alto y un mecanismo de reuso de código (cómo la
programación orientada a objetos o la prgramación funcional).

## Tarea

El _boilerplate_ (la plantilla sobre la que hacer el ejercicio) contiene un
programa sin terminar. Este programa debe **imprimir en la consola todos los
números primos menores que `20`**.

El _boilerplate_ impementa sólo parte de la lógica. Por el momento imprime todos
los números enteros del `2` al `19`. Ahora tienes que añadir la lógica para
comprobar si un número es primo o no, y así sólo imprimir los primos.

## Requisitos

* Debes implementar un bucle `for` anidado dentro del `for` ya existente.

## Pistas

* Si un número es divisible por cualquier entero mayor que `1` que no sea el
  número mismo, sabemos que NO es primo.
* Dentro del bucle `for` principal, para ver si un número es primo, vamos a
  tratar de demostrar que NO es primo, y si no podemos probar que no es primo,
  entonces podemos asumir que sí es primo.
* El operador `%` nos da el residuo de una división.
* Una vez que hemos probado que un número no es primo ya no necesitamos
  continuar dividiéndolo.

## Recursos

* [Arithmetic Operators: Remainder - MDN](https://goo.gl/zn7cTu)
* [Statements: for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
