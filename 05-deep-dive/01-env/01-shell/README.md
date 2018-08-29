# Shell de UNIX

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

## Objetivos de aprendizagem

* Que todas tenham um emulador de terminal e *bash* ou *zsh* instalado.
* Conhecer a navegação pelo sistema de arquivos executando comandos.

***

## O que é a *shell* de UNIX?

> Uma *Shell de Unix* ou também **shell**, é o terminal usado na informática para se referir a um intérprete de comandos, o qual consiste na interface de usuário tradicional dos sistemas operacionais baseados em Unix e similares como GNU/Linux.
>
> Fonte: [Shell de Unix - Wikipédia](https://pt.wikipedia.org/wiki/Shell_do_Unix)

Basicamente, o shell é um _intérprete_ que é encarregado de executar os comandos que escrevemos no terminal (ou emulador de terminal). Assim como o motor do JavaScript (seja o do navegador, Node.js, ...) é o responsável por interpretar e executar nosso código JavaScript, a shell se encarrega dos comandos que escrevemos na linha de comando.

## Shells comuns: bash, zsh, etc

A shell mais comum é provavelmente `bash` ([Bourne Again SHell](https://pt.wikipedia.org/wiki/Bash)), mas não é demais mencionar que existem muitas shells distintas que compartilham grande parte de suas características, mas cada uma com suas peculiaridades. Outras shells comuns são: `zsh`, `ksh`, `csh`, `ash`, `dash`, ...

Dentro de um emulador do terminal podemos executar diferentes shells, assim como configurar sua shell por padrão (ver comando [chsh](https://en.wikipedia.org/wiki/Chsh)).

## Interagindo com o sistema de arquivos

Quando abrimos um emulador de terminal, normalmente estamos (por padrão) na nossa pasta `HOME` (por exemplo: `/home/<usuario>` na maioria das distribuições de UNIX). O terminal sempre _está_ em algum lugar do sistema de arquivos. Isso quer dizer que os comandos que executamos serão executados a partir desse _lugar_ (a pasta onde estamos).

Para poder trabalhar com facilidade no terminal é importante conhecer alguns comandos. Sugerimos que você abra seu terminal e execute os comandos detalhados logo abaixo (as linhas com começam com `$`nos blocos de código). Se você seguir a ordem dos exemplos você deve ver resultados similares.

* `pwd`: mostra o caminho de onde estamos atualmente (**P**rint **W**orking **D**irectory)
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
* `touch`: Cria um arquivo em branco se não existe, ou atualiza a data de modificação se existir.
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

<!--
## Execução de comandos

Cada vez que apertamos as teclas _enter_ estamos pedindo ao terminal que execute a linha que escrevemos até aquele momento. É importante entender que todo comando é executado em um contexto (a pasta de onde estamos executando, as variáveis de ambiente, ...).

## Entrada/Saída/Pipes/Redirecionamento;

## Processos;

## Variáveis de ambiente;

## Comandos comuns.

Além de operarmos o sistema de arquivos, como desenvolvedoras web, e usuárias de linha de comando, é recomendável você se habituar com alguns comandos comuns (além dos programas que já conhecemos, como `git`, `node`, `npm`, ...). Aqui temos alguns exemplos de comandos úteis:

* `which`: verifica se um executável está em nosso `PATH`. Muito útil para saber se um comando está disponível e onde o executável está no sistema de arquivos.

  ```sh
  which node
  /usr/local/bin/node
  ```
* `grep`: filtra texto, mostrando somente aquelas linhas que contenham um padrão de busca.
* ...
-->

## Outros temas de interesse

Neste curso não temos intenção de aprofundar em Bash ou na shell de UNIX, mas se você tiver curiosidade (ou necessidade) de aprender um pouco mais te recomendamos ler sobre **entrada e saída** de comandos (**stdin**, **stdout**, **stderr**), **processos** (comandos como `ps`, `bg`, `fg`, `jobs`, ...), **variáveis de ambiente**, ...

## Personalização

Para finalizar, cabe mencionar que assim como alguém pode configurar sua área de trabalho com sua própria imagem de fundo, atalhos, ... os shells também permitem uma grande quantidade de personalização. Os detalhes de como personalizar seu shell estão fora do escopo deste curso, mas convidamos você a explorar o seguinte:

* `.profile`
* `.bashrc`
* `.bash_history`
* `oh-my-zsh`

## Leituras Complementares

* [Shell de Unix - Wikipédia](https://pt.wikipedia.org/wiki/Shell_do_Unix)
* [Emulador de terminal - Wikipédia](https://en.wikipedia.org/wiki/Terminal_emulator)
* [Bash_(Unix_shell) - Wikipédia](https://pt.wikipedia.org/wiki/Bash)
* [Shell Builtin Commands - gnu.org](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html)
