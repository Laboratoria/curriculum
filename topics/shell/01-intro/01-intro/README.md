---
type: read
duration: 10min
---

# Shell de UNIX

## Qué es la shell de UNIX?

> Una Shell de Unix o también shell, es el término usado en informática para
> referirse a un intérprete de comandos, el cual consiste en la interfaz de
> usuario tradicional de los sistemas operativos basados en Unix y similares
> como GNU/Linux.
>
> Fuente: [Shell de Unix - Wikipedia](https://es.wikipedia.org/wiki/Shell_de_Unix)

Básicamente, la shell es el _intérprete_ que se encarga de ejecutar los comandos
que escribimos en el terminal (o emulador de terminal). Así como el motor de
JavaScript (ya sea del navegador, Node.js, ...) es el responsable en interpretar
y ejecutar nuestro código JavaScript, la shell se encarga de los comandos que
escribimos en la línea de comando.

## Shells comunes

La shell más común es problemente `bash` ([Bourne Again SHell](https://es.wikipedia.org/wiki/Bash)),
pero no está de más mencionar que existen muchas shells distintas, que comparten
gran parte de sus características, pero cada una con sus peculiaridades. Otras
shells comunes son: `zsh`, `ksh`, `csh`, `ash`, `dash`, ...

Dentro de un emulador de terminal podemos ejecutar diferentes shells, así como
configurar tu shell por defecto (ver comando [chsh](https://en.wikipedia.org/wiki/Chsh)).

## La línea de comandos

La línea de comandos es también conocida como

* Terminal
* Consola
* Command Prompt
* Símbolo de Sistema
* cmd
* Git Bash, etc.

Una de las herramientas que más nos acompañará en nuestro camino del código
será la `línea de comandos`. En esta lección conoceremos y aprenderemos cómo
usar esa famosa pantalla negra que los "hackers" usan; pero tranquila, no
vamos a "hackear" nada, ni haremos nada ilegal :)

Puede parecer un poco aterrador al principio pero solo es una pantalla que
espera a que le des órdenes.

## ¿Para qué sirve la línea de comandos?

La `línea de comandos` es una aplicación que nos permite ver, manejar y
manipular archivos de nuestra computadora por medio de `comandos`. Es como el
Explorador de Windows o Finder en Mac, pero sin la "interfaz".

Por lo tanto, nos da un control que es rápido y automatizado de las
computadoras.

## Accediendo a la línea de comandos

### Windows

Presionamos la tecla "windows" + r:

![teclas](https://fotos.subefotos.com/5b80f161eee85749b3825fc14406872eo.png)

Ahora nos aparecerá una pequeña pantalla en la parte inferior izquierda en la que
escribiremos **cmd.exe**

![run](https://fotos.subefotos.com/98de3a4aec5f117f023ba85addc08298o.png)

Hacemos clic en el botón **OK** y estaremos abriendo nuestra terminal. Al abrir
la aplicación nos aparecerá una nueva ventana con un fondo negro y letras así:

![línea de comandos](https://fotos.subefotos.com/4fda00e92300cda89ff141f0265d6227o.png)

### Mac OS X

Launchpad → Terminal

### Linux

Actividades → Terminal

## Prompt

Ahora tendremos una pantalla negra que está esperando nuestras órdenes.

* Si nos encontramos en **Windows** debe de aparecernos una primera línea que termina
  con el símbolo `>`

  ```text
   C: \Users\Michelle >
  ```

  Si no te aparece "Michelle" no te preocupes, está bien, ahí debería de
  aparecer tu nombre de usuario.

* Si te encuentras en **Linux**, te aparecerá una primera línea que termina con el
  símbolo `$`

  ```text
  [Laboratoria@Michelle ~] $
  ```

  En tu computadora, "Laboratoria" y "Michelle" serán reemplazados por tus datos.

* Si tienes una **Mac**, la primera línea estará compuesta por los datos de tu
  computadora y terminará con el símbolo `$`

  ```text
  Laboratoria-MacBook-Air:~ Michelle$
  ```

<!--
## Comandos comunes

Además de manejarnos en el sistema de archivos, como desarrolladorxs web, y
usuarixs de la línea de comando, es recomendable familiarizarse con algunos
comandos comunes (además de los programas que ya conocemos, como `git`, `node`,
`npm`, ...). Acá algunos ejemplos de comandos útiles:

* `which`: averigua si un ejecutable se encuentra en nuestro `PATH`. Muy útil
  para saber si un comando está disponible y dónde está ele ejecutable en el
  sistema de archivos.
  ```sh
  which node
  /usr/local/bin/node
  ```
* `grep`: filtra texto, mostrándonos solamente aquellas líneas que contengan un
  patrón de búsqueda.
* `curl`
* ...
-->

## Personalización

Para finalizar, cabe mencionar que así como uno puede configurar su escritorio,
con tu propia imagen de fondo, shortcuts, ... los shells también permiten un
montón de personalización. Los detalles de cómo personalizar tu shell quedan
fuera del scope de este curso, pero te invitamos a que explores lo siguiente:

* `.profile`
* `.bashrc`
* `.bash_history`
* `oh-my-zsh`

## Lecturas complementarias

* [Shell de Unix - Wikipedia](https://es.wikipedia.org/wiki/Shell_de_Unix)
* [Emulador de terminal - Wikipedia](https://es.wikipedia.org/wiki/Emulador_de_terminal)
* [Bash_(Unix_shell) - Wikipedia](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
* [Shell Builtin Commands - gnu.org](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html)
