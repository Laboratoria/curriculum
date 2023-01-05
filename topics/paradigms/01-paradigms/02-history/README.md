---
type: read
duration: 5min
---

# Historia

[![Paradigmas - Historia](https://embedwistia-a.akamaihd.net/deliveries/6d2aee6d54a3d5450fba55ae21b0cd427fa500a5.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/an9covln5w?wvideo=an9covln5w)

Para tener una idea general de los paradigmas y sus peculiaridades, es útil
repasar brevemente su historia.

El primer paradigma en aparecer, primera mitad de los años 50, es el
**imperativo**, que se caracteriza por un nivel bajo de abstracción. Por lo
tanto el código está enfocado en las instrucciones que la computadora debe
seguir, y no necesariamente en la semántica o lógica de la funcionalidad que
estamos implementando (el cómo nosotros pensamos en lo que hace el programa).

Veamos un ejemplo de `Assembly`, el primer lenguaje "moderno", que apareció en
el año 1949, y que sigue vivo a día de hoy, eso sí, para cosas muy específicas,
que nos son necesariamente lo que vemos los desarrolladores web, pero que sirve
para este ejemplo ;-)

```assembly_x86
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

[Fuente: Assembly-HOWTO](http://www.tldp.org/HOWTO/Assembly-HOWTO/hello.html)

El snippet de arriba es un "hello world" escrito en `Assembly` (una versión
moderna, pero muy parecido a lo que hubieras visto en los años 50). Lo único que
hace este programa es imprimir el string `Hello, world!`. El equivalente a todo
el código de arriba en JavaScript sería:

```js
console.log('Hello, world!');
```

En nuestro caso, JavaScript tiene un nivel de abstracción mucho más alto. Con lo
cual, no tenemos que preocuparnos de muchos detalles que JavaScript ya abstrae
para nosotros, como manejo de memoria, instrucciones del procesador, etc. Esto
nos permite expresar de forma más "humana" la intención de nuestro programa, y
con mucho menos código.

Regresamos a los años 50. Según la programación va evolucionando, y los
programas creciendo, vemos cómo van a ir surgiendo diferentes formas de
"abstraer", "organizar" y "reusar" el código. A finales de los años 50 vemos
como aparecen **Fortran II** y **Lisp**, introduciendo la programación
**procedural** y **funcional**. Con ambos enfoques pasamos a nuevos nieveles de
abstracción y mejora en el reuso de código.

En los años 70 y 80 se da el boom de la programación orientada a objetos,
primero con **Smalltalk** y después **C++**.

**JavaScript** nace en 1995, el mismo año que **Java**, **Ruby** y **PHP**. La
década de los 90 se caracteriza por los lenguajes multi-paradigma. En ese
contexto JavaScript destaca por su dinamismo y su naturaleza funcional. De hecho
a nivel conceptual, JavaScript está fuertemente inspirado por **Scheme**, que es
un lenguaje funcional, y los prototipos de **Self**, aunque por necesidades del
mercado, la sintáxis se parece más a la familia de lenguajes de **C** y
**Java**, que son imperativos. Por esta razón, JavaScript se considera muchas
veces [el lenguaje más
incomprendido](http://javascript.crockford.com/javascript.html), y quizás
confuso.

Como referencia, abajo podemos ver una tabla con algunos de los lenguajes más
significativos a nivel de cambios de paradigma, y el conexto en el que aparece
JavaScript.

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

***

## Referencias

Otros recursos:

* [History of programming languages](https://en.wikipedia.org/wiki/History_of_programming_languages)
