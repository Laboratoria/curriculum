# Shell de UNIX

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

## Objetivos de aprendizaje

* Que todas tengan un emulador de terminal y bash o zsh instalado
* Familiarizarse navegando el sistema de archivos y ejecutando comandos

***

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

## Shells comunes: bash, zsh, etc

La shell más común es problemente `bash` ([Bourne Again SHell](https://es.wikipedia.org/wiki/Bash)),
pero no está de más mencionar que existen muchas shells distintas, que comparten
gran parte de sus características, pero cada una con sus peculiaridades. Otras
shells comunes son: `zsh`, `ksh`, `csh`, `ash`, `dash`, ...

Dentro de un emulador de terminal podemos ejecutar diferentes shells, así como
configurar tu shell por defecto (ver comando [chsh](https://en.wikipedia.org/wiki/Chsh)).

## Interactuando con el sistema de archivos

Cuando abrimos un emulador de terminal, normalmente nos encontramos (por
defecto) en nuestra carpeta `HOME` (por ejemplo: `/home/<usuario>` en la mayoría
de distribuciones de UNIX). El terminal siempre _está_ en el agun lugar del
sistema de archivos. Esto quiere decir que los comandos que ejecutemos se
ejecutarán desde ese _lugar_ (la carpeta donde estemos).

Para poder manejarse con facilidad en el terminal es importante familiarizarse
con algunos comandos. Te recomendamos abrir tu terminal y ejecutar los comandos
detallados más abajo (las líneas que empiezan con `$` en los bloques de código).
Si sigues el orden de los ejemplos deberías de ver resultados equivalentes.

* `pwd`: muestra la ruta donde estamos actualmente (**P**rint **W**orking
  **D**irectory)
  ```sh
  $ pwd
  /Users/lupo
  ```
* `mkdir`: crea una carpeta (**M**a**K**e **DIR**ectory)
  ```sh
  mkdir ejemplo
  ```
* `cd`: cambia de directorio a una nueva ruta (**C**hange **D**irectory)
  ```sh
  $ cd ejemplo
  $ pwd
  /Users/lupo/ejemplo
  ```
* `touch`: Crea un archivo en blanco si no existe o actualiza la fecha de
  modificación si existse.
  ```sh
  touch README.md
  touch index.js .gitignore
  ```
* `ls`: lista los archivos (y directorios/carpetas) en la carpeta actual
  (**L**i**S**t)
  ```sh
  $ ls
  README.md index.js
  $ ls -l
  total 0
  -rw-r--r--  1 Lupo  staff  0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  0 Jan 15 17:32 index.js
  $ ls -la
  total 0
  drwxr-xr-x    5 Lupo  staff   160 Jan 15 17:32 .
  drwxr-xr-x+ 151 Lupo  staff  4832 Jan 15 17:33 ..
  -rw-r--r--    1 Lupo  staff     0 Jan 15 17:32 .gitignore
  -rw-r--r--    1 Lupo  staff     0 Jan 15 17:32 README.md
  -rw-r--r--    1 Lupo  staff     0 Jan 15 17:32 index.js
  ```
* `cat`: muestra el contenido de un archivo en el terminal (stdout)
  (con**CAT**enate)
  ```sh
  $ echo 'hola mundo' > file.txt
  $ cat file.txt
  hola mundo
  ```
* `mv`: Mueve un archivo o carpeta de un lugar a otro en el sistema de archivos
  (**M**o**V**e)
  ```sh
  $ mv file.txt hola-mundo.txt
  $ ls -l
  total 8
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 hola-mundo.txt
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 index.js
  ```
* `cp`: Copia un archivo o carpeta de un lugar a otro (**C**o**P**y)
  ```sh
  $ cp hola-mundo.txt hello-world.txt
  $ ls -l
  total 16
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:37 hello-world.txt
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 hola-mundo.txt
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 index.js
  ```
* `rm`: Borra un archivo o carpeta (**R**e**M**ove)
  ```sh
  $ rm index.js
  $ ls -l
  total 16
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:37 hello-world.txt
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 hola-mundo.txt
  ```

<!--
## Ejecución de comandos

Cada vez que apretamos la tecla _enter_ le estamos pidiendo al terminal que
ejecute la línea que hayamos escrito hasta ese punto. Es importante entender
que todo comando se ejecuta en un contexto (la carpeta desde la que ejecutamos,
las variables de entorno, ...).

## Entrada/Salida/Pipes/Redirección

## Procesos

## Variables de entorno

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

## Otros temas de interés

En este curso no pretendemos profundizar en Bash o la shell de UNIX, pero si
tienes curiosidad (o necesidad) de aprender un poco más te recomendamos leer
sobre **entrada y salida** de comandos (**stdin**, **stdout**, **stderr**),
**procesos** (comandos como `ps`, `bg`, `fg`, `jobs`, ...),
**variables de entorno**, ...

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
