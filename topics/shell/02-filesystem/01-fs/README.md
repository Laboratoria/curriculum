---
type: read
duration: 10min
---

# Sistema de archivos

Cuando abrimos un emulador de terminal, normalmente nos encontramos (por
defecto) en nuestra carpeta `HOME` (por ejemplo: `/home/<usuario>` en la mayoría
de distribuciones de UNIX). El terminal siempre _está_ en el algún lugar del
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
