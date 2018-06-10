# Linha de Comandos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem

Nesta unidade, aprenderemos:

* O que é a **linha de comandos**
* A finalidade da linha de comandos
* Como navegar pelo nosso **diretório**
* Criação de arquivos ou diretórios/pastas a partir do terminal

## A linha de comandos

A linha de comandos também é conhecida como:

* Terminal
* Console
* Prompt de comando
* CLI
* cmd
* Git Bash, etc.

Uma das ferramentas que mais nos acompanhará em nossa jornada pelos códigos é a _linha de comandos_. Nesta aula, vamos conhecer e aprender como usar essa famosa tela preta que os "hackers" usam; mas calma, não vamos "hackear" nada, nem faremos qualquer coisa ilegal :\)

Pode parecer um pouco assustador no começo, mas é apenas uma tela esperando pelas suas ordens.

## Para que serve a linha de comandos?

A linha de comandos é uma aplicação que nos permite visualizar, gerenciar e manipular arquivos de nosso computador através de _comandos_. É como o Windows Explorer ou Finder do Mac, mas sem a interface gráfica.

Dessa forma, a linha de comandos nos dá um controle rápido e automatizado dos computadores.

## Acessando a linha de comando

### Windows

Pressione as teclas "Windows" + r:

![Teclas para a janela &quot;Executar&quot;](https://fotos.subefotos.com/5b80f161eee85749b3825fc14406872eo.png)

Uma pequena tela aparecerá na parte inferior esquerda. Nela, escreveremos `cmd.exe`.

![Executar](https://fotos.subefotos.com/98de3a4aec5f117f023ba85addc08298o.png)

Ao clicar no botão "OK", abriremos nosso terminal. Ao abrir a aplicação, aparecerá uma nova janela aparecer com um fundo preto e letras como abaixo:

![Linha de comandos](https://fotos.subefotos.com/4fda00e92300cda89ff141f0265d6227o.png)

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

  Se não aparecer `Michelle`, não se preocupe, está tudo certo: aqui deve aparecer o seu próprio nome de usuário.

* No **Linux**, a primeira linha terminará com o símbolo `$`:

  ```bash
  [Laboratoria@Michelle ~]$
  ```

  No seu computador, "Laboratoria" e "Michelle" serão substituídos pelos seus dados.

* Se você tem um **Mac**, a primeira linha será composta pelos dados do seu computador terminando com o símbolo `$`:

  ```text
  Laboratoria-MacBook-Air:~ Michelle$
  ```

## Comandos

Vejamos que coisas incríveis podemos fazer dentro da famosa "tela preta". Ao final da aula, deixarei uma lista de comandos que você pode executar dentro dela.

### Como executar um comando?

1. Começamos digitando o comando
2. Após pressionar a tecla _enter_, o comando será executado

### Navegando em nosso diretório

O comando `cd` vai nos ajudar a navegar pelos nossos **diretórios** \(também chamados de **pastas**\) e arquivos. Com ele, poderemos acessar outra pasta ou retornar à pasta anterior.

Por exemplo, suponha que o terminal é nossa "casa" e que queiramos percorrê-la. Agora, estou no meu quarto, mas e se eu quiser ir ao _banheiro_?

![Planta](https://fotos.subefotos.com/31c6b9a7726517ce121b0e66f283deaao.png)

Se estou no meu quarto \(nº 3\) e desejo ir ao banheiro, primeiro devo entrar no closet \(nº 2\) e em seguida, no banheiro \(nº 1\). Não posso chegar ao banheiro sem passar pelo closet.

Algo semelhante acontece na navegação por pastas através do terminal. Suponhamos que eu esteja em minha _cibercasa_ \(meu computador\) e deseje ir do meu _ciberquarto_ \(disco local "C"\) ao meu _ciberbanheiro_ \(pasta "Saved Pictures"\). Então, devo primeiro entrar no _cibercloset_ \(pasta "Pictures"\) e, em seguida, entrar na pasta desejada.

Naveguemos agora em nosso terminal.

#### Obtendo nosso local

Primeiro, vamos saber em que parte da nossa cibercasa estamos. Saber em que parte do nosso diretório nos encontramos é muito importante, especialmente se quisermos criar uma nova pasta, um arquivo, ou simplesmente saber em que parte do computador nos encontramos.

**Windows**

Ao executar o comando `cd`, o caminho onde estamos será exibido.

```text
> cd
  C:\Users\Michelle
```

**Mac OS X e Linux**

Ao executar o comando `pwd`, o caminho onde estamos será exibido.

```bash
$ pwd
/home/Michelle
```

#### Navegando

Se escrevemos `cd` e, em seguida, indicamos o nome de uma pasta existente em nosso diretório, estaremos entrando nela ao executar esse comando.

**Windows, Mac OS X e Linux**

```bash
cd nome-pasta
```

Por exemplo, se quisermos entrar na pasta "Pictures" devemos executar:

```bash
cd Pictures
```

Se verificarmos agora a nossa localização, a saída dirá que estamos na pasta "Pictures":

**Windows**

```text
> cd
  C:\Users\Michelle\Pictures
```

**MAC OS X e Linux**

```bash
$ pwd
/home/Michelle/Pictures
```

Agora já sabemos como entrar na pasta que quisermos, mas o que fazer para _sair_ da pasta em que estamos? Para este caso existe `cd ..`.

Se colocarmos dois pontos \(`..`\) depois de `cd`, sairemos da pasta onde estamos e voltaremos uma pra trás.

```bash
cd ..
```

Ao ver nosso local atual:

**Windows**

```text
> cd
  C:\Users\Michelle
```

**Mac OS X e Linux**

```bash
$ pwd
/home/Michelle
```

Já não estamos dentro da pasta "Pictures".

### Listando arquivos e diretórios

#### Windows: `dir`

O `dir` exibe uma lista de arquivos e subpastas encontradas no local onde executamos o comando.

Por exemplo, se executo o comando `dir` em "C:\Users\Michelle", vejo a lista de arquivos ou pastas que se encontram nesse diretório. Esta lista será formada por uma primeira coluna contendo a data de modificação e a segunda, dizendo-nos se é um diretório \(`<DIR>`\) ou não. Na última coluna, haverá o nome do arquivo ou pasta.

```text
> dir
  Directory of C:\Users\Michelle
  19/09/2017  10:40 a. m.    <DIR>          .
  19/09/2017  10:40 a. m.    <DIR>          ..
  12/09/2017  10:13 p. m.               288 .bash_history
  12/09/2017  08:01 p. m.                27 .gitconfig
  19/09/2017  10:40 a. m.    <DIR>          .vscode
  30/06/2017  08:29 p. m.    <DIR>          Contacts
  06/09/2017  09:46 p. m.    <DIR>          Desktop
  19/09/2017  10:51 a. m.    <DIR>          Documents
  20/09/2017  11:55 a. m.    <DIR>          Downloads
  30/06/2017  08:29 p. m.    <DIR>          Favorites
  12/09/2017  07:02 p. m.    <DIR>          Links
  30/06/2017  08:29 p. m.    <DIR>          Music
  12/09/2017  07:02 p. m.    <DIR>          OneDrive
  20/09/2017  11:55 a. m.    <DIR>          Pictures
  30/06/2017  08:29 p. m.    <DIR>          Saved Games
  30/06/2017  08:32 p. m.    <DIR>          Searches
  30/06/2017  08:29 p. m.    <DIR>          Videos
              2 File(s)             315 bytes
             15 Dir(s)  223,511,490,560 bytes free
```

#### Mac OS X e Linux: `ls`

Ao executarmos `ls`, serão exibidos os nomes de pastas e arquivos que existem no diretório em que nos encontramos.

```bash
$ ls
Desktop  Documents  Downloads  Music  Pictures
Public   Templates  Videos
```

### Criando diretórios

Agora, vejamos o comando que nos permitirá criar um novo diretório \(pasta\). Para este comando, é muito importante saber em que parte do diretório estamos, pois é no local onde será executado que a nova pasta será criada.

#### Windows, Mac OS X e Linux

```bash
mkdir nome-pasta
```

Ao executarmos o comando `mkdir`, criaremos um novo diretório. Após a palavra `mkdir`, deve-se especificar o nome da nova pasta. Por exemplo, se você quiser criar a pasta "js" pelo terminal, o comando ficaria assim:

```bash
mkdir js
```

### Criando arquivos

Até então, criávamos nossos arquivos pelo editor de texto ou gerenciador de arquivos. Mas, agora que conhecemos o terminal, podemos criá-los a partir dele. Quando executamos este comando, é muito importante o local do computador em que estamos, pois é lá que o arquivo será criado.

#### Windows: `echo`

Com o `echo` criamos um novo arquivo. Sua estrutura é assim:

1. Comando: `echo`
2. Texto com o qual será criado: `texto`
3. Símbolo `>`
4. Por último, indicamos o nome do arquivo com sua respectiva extensão:

   `nome-arquivo.extensão`

Por acima, nosso comando seria:

```text
> echo texto > nome-arquivo.extensão
```

Por exemplo, para criar um arquivo de texto que tenha a mensagem "olá", o comando seria o seguinte:

```text
> echo olá > saudação.txt
```

Agora, se quisermos criar um arquivo HTML vazio, o comando seria:

```text
> echo > index.html
```

#### Mac OS X e Linux

Se executarmos `touch` seguido do nome do novo arquivo com sua respectiva extensão, ele será criado.

```bash
touch nome-arquivo.extensão
```

Por exemplo, se quisermos criar um arquivo HTML, o comando seria:

```bash
touch index.html
```

Se você quiser criar um arquivo já com algum conteúdo, pode usar o comando `echo` explicado na parte sobre Windows logo acima, pois ele também funciona no Linux e Mac OS X.

## Material complementar

Segue uma lista dos comandos utilizados nesta aula:

![comandos-cli](https://fotos.subefotos.com/e6a2257e5c80534c28d721c34390b20bo.png)

Agora vejamos como Michelle navega entre seus arquivos ou diretórios e cria pastas e arquivos a partir do terminal.

[![Linha de comandos](https://img.youtube.com/vi/DWFZaG6qU5w/0.jpg)](https://www.youtube.com/watch?v=DWFZaG6qU5w)
