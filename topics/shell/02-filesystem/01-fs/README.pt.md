---
type: read
duration: 10min
---

# Interagindo com o sistema de arquivos

Quando abrimos um emulador de terminal, normalmente estamos (por padrão) na
nossa pasta `HOME` (por exemplo: `/home/<usuario>` na maioria das distribuições
de UNIX). O terminal sempre _está_ em algum lugar do sistema de arquivos. Isso
quer dizer que os comandos que executamos serão executados a partir desse
_lugar_ (a pasta onde estamos).

Para poder trabalhar com facilidade no terminal é importante conhecer alguns
comandos. Sugerimos que você abra seu terminal e execute os comandos detalhados
logo abaixo (as linhas com começam com `$`nos blocos de código). Se você seguir
a ordem dos exemplos você deve ver resultados similares.

* `pwd`: mostra o caminho de onde estamos atualmente (**P**rint **W**orking
  **D**irectory)

  ```sh
  $ pwd
  /Users/lupo
  ```

* `mkdir`: cria uma pasta (**M**a**K**e **DIR**ectory)

  ```sh
  mkdir exemplo
  ```

* `cd`: muda o diretório para uma nova rota (**C**hange **D**irectory)

  ```sh
  $ cd exemplo
  $ pwd
  /Users/lupo/exemplo
  ```

* `touch`: Cria um arquivo em branco se não existe, ou atualiza a data de
  modificação se existir.

  ```sh
  touch README.md
  touch index.js .gitignore
  ```

* `ls`: lista os arquivos (e diretórios/pastas) na pasta atual
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

* `cat`: mostra o conteúdo de um arquivo no terminal (stdout)
  (con**CAT**enate)

  ```sh
  $ echo 'olá mundo' > file.txt
  $ cat file.txt
  olá mundo
  ```

* `mv`: Move um arquivo ou pasta de um lugar para outro no sistema de arquivos
  (**M**o**V**e)

  ```sh
  $ mv file.txt ola-mundo.txt
  $ ls -l
  total 8
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 ola-mundo.txt
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 index.js
  ```

* `cp`: Copia um arquivo ou pasta de um lugar para o outro (**C**o**P**y)

  ```sh
  $ cp ola-mundo.txt hello-world.txt
  $ ls -l
  total 16
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:37 hello-world.txt
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 ola-mundo.txt
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 index.js
  ```

* `rm`: Apaga um arquivo ou pasta (**R**e**M**ove)

  ```sh
  $ rm index.js
  $ ls -l
  total 16
  -rw-r--r--  1 Lupo  staff   0 Jan 15 17:32 README.md
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:37 hello-world.txt
  -rw-r--r--  1 Lupo  staff  11 Jan 15 17:34 ola-mundo.txt
  ```
