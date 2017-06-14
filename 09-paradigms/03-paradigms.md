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
repasar su historia (aunque sea por encima).

El primer paradigma en aparecer, primera mitad de los años 50, es el
**imperativo**, que se caracteriza por un nivel bajo de abstracción. Por lo
tanto el código está enfocado en las instrucciones que la computadora debe
seguir, y no necesariamente en la semántica o lógica de la funcionalidad que
estamos implementando.

```
section .text             ;section declaration

                          ;we must export the entry point to the ELF linker or
  global  _start          ;loader. They conventionally recognize _start as their
                          ;entry point. Use ld -e foo to override the default.

_start:

                          ;write our string to stdout

  mov     edx,len         ;third argument: message length
  mov     ecx,msg         ;second argument: pointer to message to write
  mov     ebx,1           ;first argument: file handle (stdout)
  mov     eax,4           ;system call number (sys_write)
  int     0x80            ;call kernel

                          ;and exit

  mov     ebx,0           ;first syscall argument: exit code
  mov     eax,1           ;system call number (sys_exit)
  int     0x80            ;call kernel

section .data             ;section declaration

msg db    "Hello, world!",0xa    ;our dear string
len equ   $ - msg                ;length of our dear string
```

http://www.tldp.org/HOWTO/Assembly-HOWTO/hello.html

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
| 1949 | [Assembly](https://en.wikipedia.org/wiki/Assembly_language) | imperativo |
| 1957 | [Fortran](https://en.wikipedia.org/wiki/Fortran) | imperativo |
| 1958 | [Fortran II](https://en.wikipedia.org/wiki/Fortran#FORTRAN_II) | imperativo, procedural |
| 1958 | [Lisp](https://goo.gl/ZbUXeg) | funcional |
| 1965 | [Simula](https://en.wikipedia.org/wiki/Simula) | orientado a objetos |
| 1972 | [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) | orientado a objetos |
| 1972 | [Prolog](https://en.wikipedia.org/wiki/Prolog) | lógico |
| 1972 | [C](https://goo.gl/4bnEHY) | imperativo, procedural, estructurado |
| 1975 | [Scheme](https://goo.gl/x2WMht) | funcional
| 1983 | [C++](https://en.wikipedia.org/wiki/C%2B%2B) | imperativo, procedural, estructurado, orientado a objetos |
| 1987 | [Perl](https://en.wikipedia.org/wiki/Perl) | imperativo, procedural, funcional, orientado a objetos, orientado a eventos
| 1991 | [Python](https://goo.gl/bJ9Wcg) | imperativo, procedural, funcional, orientado a objetos
| 1995 | [Ruby](https://goo.gl/PhfLjJ) | imperativo, funcional, orientado a objetos
| 1995 | [Java](https://goo.gl/aWjoSR) | imperativo, orientado a objetos
| 1995 | [PHP](https://en.wikipedia.org/wiki/PHP) | imperativo, procedural, orientado a objetos
| 1995 | [JavaScript](https://en.wikipedia.org/wiki/JavaScript) | imperativo, funcional, orientado a objetos, orientado a eventos

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

La mejor manera de entender qué es un paradigma es viendo ejemplos.

##### Imperativo

Empecemos por un ejemplo del paradigma imperativo. El siguiente programa imprime
a la consola los números primos menores que `20`:

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

Las variables como contadores, son característicos del estilo imperativo, ya que
en este estilo el principal mecanismo de cómputo se lleva a cabo a través de la
asignación de valores en variables. Veremos así uso de variables globales y
mutación de los valores asignados a variables.

Si nos fijamos detalladamente,  los valores de `i` e `isPrime` van variando durante la ejecución

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

function getPrimes(start, end) {
  var primes = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(getPrimes(2, 20));
```

#### OOP

```js
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};

const note = new Note('hola');

console.log(note.toString());
```

#### FP

Mecanismo principal de cómputo es aplicar argumentos a funciones.

```js
const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

console.log(noteToString({text: 'hola', createdAt: new Date()}));
```


```js
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
```


```js
const sum = array => !array.length ? 0 : array[0] + sum(array.slice(1));
```

```js
function sum(array) {
  if (!array.length) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};
```
