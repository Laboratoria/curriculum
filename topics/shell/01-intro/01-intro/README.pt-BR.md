# Shell de UNIX

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## O que é a _shell_ de UNIX?

> Uma _Shell de Unix_ ou também **shell**, é o terminal usado na informática
> para se referir a um intérprete de comandos, o qual consiste na interface de
> usuário tradicional dos sistemas operacionais baseados em Unix e similares
> como GNU/Linux.
>
> Fonte: [Shell de Unix -
> Wikipédia](https://pt.wikipedia.org/wiki/Shell_do_Unix)

Basicamente, o shell é um _intérprete_ que é encarregado de executar os comandos
que escrevemos no terminal (ou emulador de terminal). Assim como o motor do
JavaScript (seja o do navegador, Node.js, ...) é o responsável por interpretar e
executar nosso código JavaScript, a shell se encarrega dos comandos que
escrevemos na linha de comando.

## Shells comuns: bash, zsh, etc

A shell mais comum é provavelmente `bash` ([Bourne Again
SHell](https://pt.wikipedia.org/wiki/Bash)), mas não é demais mencionar que
existem muitas shells distintas que compartilham grande parte de suas
características, mas cada uma com suas peculiaridades. Outras shells comuns são:
`zsh`, `ksh`, `csh`, `ash`, `dash`, ...

Dentro de um emulador do terminal podemos executar diferentes shells, assim como
configurar sua shell por padrão (ver comando
[chsh](https://en.wikipedia.org/wiki/Chsh)).

## A linha de comandos

A linha de comandos também é conhecida como:

* Terminal
* Console
* Prompt de comando
* CLI
* cmd
* Git Bash, etc.

Uma das ferramentas que mais nos acompanhará será a `linha de comandos`. Nessa
lição conheceremos e aprenderemos como usar essa famosa tela preta que os
"hackers" usam. Mas fique tranquila! Não vamos "hackear" nada, nem faremos nada
ilegal.

Pode parecer um pouco assustador no começo, mas é apenas uma tela esperando
pelas suas ordens.

## Para que serve a linha de comandos?

A linha de comandos é uma aplicação que nos permite visualizar, gerenciar e
manipular arquivos de nosso computador através de _comandos_. É como o Windows
Explorer ou Finder do Mac, mas sem a interface gráfica.

Dessa forma, a linha de comandos nos dá um controle rápido e automatizado dos
computadores.

## Acessando a linha de comando

### Windows

Pressione as teclas "Windows" + r:

![Teclas para a janela &quot;Executar&quot;](https://user-images.githubusercontent.com/11894994/58904749-80023200-86de-11e9-8743-97f5829a213f.png)

Uma pequena tela aparecerá na parte inferior esquerda. Nela, escreveremos
`cmd.exe`.

![Executar](https://user-images.githubusercontent.com/11894994/58904748-80023200-86de-11e9-84ba-5b6e471f4d43.png)

Ao clicar no botão "OK", abriremos nosso terminal. Ao abrir a aplicação,
aparecerá uma nova janela aparecer com um fundo preto e letras como abaixo:

![Linha de comandos](https://user-images.githubusercontent.com/11894994/58904746-80023200-86de-11e9-93a9-753e119e00e6.png)

### Mac OS X

Launchpad → Terminal

### Linux

Atividades → Terminal \(pode variar conforme sua distribuição e configuração\)

## Prompt

Agora temos uma tela preta que está esperando por nossas ordens.

* Se estiver no **Windows**, a primeira linha deve terminar com o símbolo `>`:

  ```text
  C:\Users\Michelle>
  ```

  Se não aparecer `Michelle`, não se preocupe, está tudo certo: aqui deve
  aparecer o seu próprio nome de usuário.

* No **Linux**, a primeira linha terminará com o símbolo `$`:

  ```bash
  [Laboratoria@Michelle ~]$
  ```

  No seu computador, "Laboratoria" e "Michelle" serão substituídos pelos seus
  dados.

* Se você tem um **Mac**, a primeira linha será composta pelos dados do seu
  computador terminando com o símbolo `$`:

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

## Personalização

Para finalizar, cabe mencionar que assim como alguém pode configurar sua área de
trabalho com sua própria imagem de fundo, atalhos, ... os shells também permitem
uma grande quantidade de personalização. Os detalhes de como personalizar seu
shell estão fora do escopo deste curso, mas convidamos você a explorar o
seguinte:

* `.profile`
* `.bashrc`
* `.bash_history`
* `oh-my-zsh`

## Leituras Complementares

* [Shell de Unix - Wikipédia](https://pt.wikipedia.org/wiki/Shell_do_Unix)
* [Emulador de terminal -
  Wikipédia](https://en.wikipedia.org/wiki/Terminal_emulator)
* [Bash_(Unix_shell) - Wikipédia](https://pt.wikipedia.org/wiki/Bash)
* [Shell Builtin Commands -
  gnu.org](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html)
