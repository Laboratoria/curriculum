# 09. Paradigmas de programación

## Lección 03: Introducción a Paradigmas de Programación

* Formato: `video/code/quiz` (self-paced)
* Duración: `1h`

En esta lección aprenderás las características y diferencias entre los
paradigmas más relevantes para JavaScript: imperativo, por procedimientos,
orientado a eventos, orientado a objetos (OOP) y funcional (FP).

### Objetivos de la lección

* Entender el concepto de "paradigma"
* Entender y reconocer las diferencias entre los paradigmas más comunes
* Entender y reconocer los principios de OOP y FP

***

### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | video      |    2min  | ¿Qué son los paradigmas de programación?
|   2   | video      |    3min  | Declarativo vs Imperativo
|   3   | video      |    3min  | Comparativa de paradigmas
|   4   | video      |    4min  | Por procedimientos
|   5   | code       |   10min  | Ejercicio por procedimientos
|   6   | video      |    4min  | Orientado a objetos
|   7   | code       |   10min  | Ejercicio OOP
|   8   | video      |    4min  | Funcional
|   9   | code       |   10min  | Ejercicio funcional
|  10   | quiz       |   10min  | Prueba tu conocimiento

***

#### ¿Qué son los paradigmas de programación?

`video: 2min`

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas
diferentes de pensar en cómo se organiza un programa basado en una serie de
principios, los cuales resultan en estilos muy distintos y lenguages muy
diversos.

**JavaScript** es un leguage _híbrido_, por decirlo de alguna forma, y contiene
elementos propios de lenguages funcionales (por ejemplo funciones como objetos
de primera clase, lambdas, ...) pero no estamos limitados al paradigma
funcional, si no que en su dinamismo y rareza, **JavaScript nos permite
programar de forma _funcional_, _orientado a objetos_, _orientado a eventos_,
_por procedimientos_, ...**

#### Historia

Para tener una idea general de los paradigmas y sus peculiaridades, es útil
repasar la historia de los paradigmas (aunque sea por encima).

El primer paradigma en aparecer, primera mitad de los años 50, es el
**imperativo**, que se caracteriza por un nivel bajo de abstracción. Por lo
tanto el código está enfocado en las instrucciones que la computadora debe
seguir, y no necesariamente en la semántica o lógica de la funcionalidad que
estamos implementando.

Según la programación fue evolucionando, y los programas creciendo, vemos cómo
van a ir surgiendo diferentes formas de "abstraer" y "organizar" el código. A
finales de los años 50 vemos como aparecen **Fortran II** y **Lisp**,
introduciendo la programación **procedural** y **funcional**. Con ambos enfoques
pasamos a nuevos nieveles de abstracción y mejora en el reuso de código.

En los años 70 y 80 se da el boom de la programación orientada a objetos,
primero con **Smalltalk** y después **C++**.

**JavaScript** nace en 1995, el mismo año que **Java**, **Ruby** y **PHP**. La
década de los 90 se caracteriza por los lenguajes multi-paradigma. En ese
contexto JavaScript destaca por su dinamismo y su naturaleza funcional.

| Año  | Lenguaje   | Paradigma  |
|------|------------|------------|
| 1951 | Assembly   | imperativo |
| 1957 | Fortran    | imperativo |
| 1958 | Fortran II | imperativo, procedural |
| 1958 | Lisp       | funcional |
| 1965 | Simula     | orientado a objetos |
| 1972 | Smalltalk  | orientado a objetos |
| 1972 | Prolog     | lógico |
| 1972 | [C](https://goo.gl/4bnEHY) | imperativo, procedural, estructurado |
| 1983 | [C++](https://en.wikipedia.org/wiki/C%2B%2B) | imperativo, procedural, estructurado, orientado a objetos |
| 1987 | [Perl](https://en.wikipedia.org/wiki/Perl) | imperativo, procedural, funcional, orientado a objetos, orientado a eventos
| 1991 | [Python](https://goo.gl/bJ9Wcg) | imperativo, procedural, funcional, orientado a objetos
| 1995 | [Ruby](https://goo.gl/PhfLjJ) | imperativo, funcional, orientado a objetos
| 1995 | [Java](https://goo.gl/aWjoSR) | imperativo, orientado a objetos
| 1995 | [JavaScript](https://en.wikipedia.org/wiki/JavaScript) | imperativo, funcional, orientado a objetos, orientado a eventos
| 1995 | [PHP](https://en.wikipedia.org/wiki/PHP) | imperativo, procedural, orientado a objetos

#### Declarativo vs Imperativo

Hemos mencionado que los primeros lenguajes de programación eran imperativos, y
que se centraban en el "cómo" más que en el "qué". Como contrapartida, el estilo
imperativo se caracteriza por lo contrario, preocuparse más por "qué" queremos
hacer, en vez de cómo lo debe ejecutar la computadora.

Algunos paradigmas son más imperativos y otros más declarativos. Por ejemplo,
la programación orientada a procedimientos y orientada objetos van a tener un
caracter imperativo mientras que la programación funcional tiene un caracter
mucho más declarativo.

#### Comparativa de paradigmas

La mejor manera de entender qué es un paradigma es viendo ejemplos. Empecemos
por un ejemplo del paradigma imperativo, que es el

##### Imperativo

```js
for (var i = 2; i < 20; i++) {
  var isPrime = true;
  for (var j = 2; j <= (i / 2); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
```

#### Por procedimientos

```js
function isPrime(num) {
  for (var i = 2; i <= (num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(start, end) {
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(2, 20);
```

#### OOP

```js
//...
```

#### FP

```js
//...
```
