---
type: practice
duration: 120min
---

# Ejercicios Guiados

## Objetivos

- Practicar codeando junto a tu equipo de profes, resolviendo problemas de
  estructuras condicionales, repetitivas y funciones
- Practicar, practicar y practicar

***

## Enunciados

A continuación tienes más problemas de práctica. Estos problemas serán
resueltos, paso a paso, por tu equipo de profes en una clase presencial.

Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo)
**antes** de la sesión presencial. Así, ya vienes con dudas específicas y
estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución
ante el resto de la clase y así ayduar al resto de tus compañeras :)

### 1. Funciones matemáticas

Crea dos funciones, `add` y `multiply`. Cada una debe tomar dos argumentos. La
función `add` debe sumar sus argumentos y devolver el resultado. La funcion
`multiply` debe multiplicar sus argumentos. Usando solamente estas dos
funciones, resuelva este simple problema matemático: 36325 * (9824 + 777).

### 2. Ordenando comida

Imagina que estás pidiendo comida en un restaurante. Tu plato favorito es
`ceviche`, así que lo elegirías si está en el menú. Si no hay `ceviche`,
elegirías `tacos al pastor`. Si eso no está, te irías por `empanada chilena`.
En el caso raro que ninguna de esas opciones esté disponible, te irías por una
`hamburguesa`. Escribe una función, que de acuerdo a la disponibilidad de los
platos en el menú, decidas qué ordenar.

### 3. Edades y etapas

Crea una web que pida, por medio de un `prompt()`, la edad de una persona, en
años. Dependiendo del número brindado, la web debe dar un mensaje que clasifica
a la persona en: `toddler`, `preschooler`, `gradeschooler`, `teenager`,
`young adult` and `adult`, según el criterio de esta
[página](https://www.healthychildren.org/English/ages-stages/Pages/default.aspx).

Si la persona ingresa un dato que **no** es un número entero (por ejemplo: un
`string`, un número decimal, un cero, o un campo vacío), la web debe dar un
mensaje de error. Revisa este [link](https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer)
que tiene un par de tips interesantes relacionados a este proyecto.

### 4. Contando caracteres y espacios

Crea una web que pida, por medio de un `prompt()`, una frase al usuario. La web
debe presentar un mensaje que diga: el número de caracteres y de espacios que
componen el `string` ingresado. En la consola, debe aparecer cada caracter
impreso en una línea separada, en mayúscula. Si el usuario ingresa un campo
vacío, la web debe dar un mensaje de error.

Arma tu archivo JavaScript para que tenga 3 funciones:

- Una función que imprima todos los caracteres de un `string`, cada uno en una
  línea separada, en mayúscula.
- Una función que cuente el número de caracteres de un `string` (¡sin utilizar
  `.length`!)
- Una función que cuente el número de espacios de un `string`
