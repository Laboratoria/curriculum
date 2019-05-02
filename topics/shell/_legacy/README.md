# Linha de comandos

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

- O que é a `linha de comandos`?
- Entender a finalidade da `linha de comandos`
- Aprender a navegar pelo nossso `diretório`
- Criar arquivos ou pastas pelo terminal

## Comandos

Vejamos que coisas incríveis podemos fazer dentro da famosa "tela preta". Ao
final da aula, deixarei uma lista de comandos que você pode executar dentro
dela.

### Como executar um comando?

1. Começamos digitando o comando
2. Após pressionar a tecla _enter_, o comando será executado

### Navegando em nosso diretório

O comando `cd` vai nos ajudar a navegar pelos nossos **diretórios** \(também
chamados de **pastas**\) e arquivos. Com ele, poderemos acessar outra pasta ou
retornar à pasta anterior.

Por exemplo, suponha que o terminal é nossa "casa" e que queiramos percorrê-la.
Agora, estou no meu quarto, mas e se eu quiser ir ao _banheiro_?

![Planta](https://user-images.githubusercontent.com/39506102/57093367-0d1f2900-6ce4-11e9-9d47-a15bc74ed341.png)

Se estou no meu quarto \(nº 3\) e desejo ir ao banheiro, primeiro devo entrar
no closet \(nº 2\) e em seguida, no banheiro \(nº 1\). Não posso chegar ao
banheiro sem passar pelo closet.

Algo semelhante acontece na navegação por pastas através do terminal.
Suponhamos que eu esteja em minha _cibercasa_ \(meu computador\) e deseje ir do
meu _ciberquarto_ \(disco local "C"\) ao meu _ciberbanheiro_ \(pasta "Saved
Pictures"\). Então, devo primeiro entrar no _cibercloset_ \(pasta "Pictures"\)
e, em seguida, entrar na pasta desejada.

Naveguemos agora em nosso terminal.

#### Obtendo nosso local

Primeiro, vamos saber em que parte da nossa cibercasa estamos. Saber em que
parte do nosso diretório nos encontramos é muito importante, especialmente se
quisermos criar uma nova pasta, um arquivo, ou simplesmente saber em que parte
do computador nos encontramos.

**Windows**:
Ao executar o comando `cd`, o caminho onde estamos será exibido.

```text
> cd
  C:\Users\Michelle
```

**Mac OS X e Linux**:
Ao executar o comando `pwd`, o caminho onde estamos será exibido.

```bash
$ pwd
/home/Michelle
```

#### Navegando

Se escrevemos `cd` e, em seguida, indicamos o nome de uma pasta existente em
nosso diretório, estaremos entrando nela ao executar esse comando.

**Windows, Mac OS X e Linux**:

```bash
cd nome-pasta
```

Por exemplo, se quisermos entrar na pasta "Pictures" devemos executar:

```bash
cd Pictures
```

Se verificarmos agora a nossa localização, a saída dirá que estamos na pasta
"Pictures":

**Windows**:

```text
> cd
  C:\Users\Michelle\Pictures
```

**MAC OS X e Linux**:

```bash
$ pwd
/home/Michelle/Pictures
```

Agora já sabemos como entrar na pasta que quisermos, mas o que fazer para
_sair_ da pasta em que estamos? Para este caso existe `cd ..`.

Se colocarmos dois pontos \(`..`\) depois de `cd`, sairemos da pasta onde
estamos e voltaremos uma pra trás.

```bash
cd ..
```

Ao ver nosso local atual:

**Windows**:

```text
> cd
  C:\Users\Michelle
```

**Mac OS X e Linux**:

```bash
$ pwd
/home/Michelle
```

Já não estamos dentro da pasta "Pictures".

### Listando arquivos e diretórios

#### Windows: `dir`

O `dir` exibe uma lista de arquivos e subpastas encontradas no local onde
executamos o comando.

Por exemplo, se executo o comando `dir` em "C:\Users\Michelle", vejo a lista
de arquivos ou pastas que se encontram nesse diretório. Esta lista será formada
por uma primeira coluna contendo a data de modificação e a segunda, dizendo-nos
se é um diretório \(`<DIR>`\) ou não. Na última coluna, haverá o nome do
arquivo ou pasta.

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

Ao executarmos `ls`, serão exibidos os nomes de pastas e arquivos que existem
no diretório em que nos encontramos.

```bash
$ ls
Desktop  Documents  Downloads  Music  Pictures
Public   Templates  Videos
```

### Criando diretórios

Agora, vejamos o comando que nos permitirá criar um novo diretório \(pasta\).
Para este comando, é muito importante saber em que parte do diretório estamos,
pois é no local onde será executado que a nova pasta será criada.

#### Windows, Mac OS X e Linux

```bash
mkdir nome-pasta
```

Ao executarmos o comando `mkdir`, criaremos um novo diretório. Após a palavra
`mkdir`, deve-se especificar o nome da nova pasta. Por exemplo, se você quiser
criar a pasta "js" pelo terminal, o comando ficaria assim:

```bash
mkdir js
```

### Criando arquivos

Até então, criávamos nossos arquivos pelo editor de texto ou gerenciador de
arquivos. Mas, agora que conhecemos o terminal, podemos criá-los a partir dele.
Quando executamos este comando, é muito importante o local do computador em que
estamos, pois é lá que o arquivo será criado.

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

Por exemplo, para criar um arquivo de texto que tenha a mensagem "olá", o
comando seria o seguinte:

```text
> echo olá > saudação.txt
```

Agora, se quisermos criar um arquivo HTML vazio, o comando seria:

```text
> echo > index.html
```

#### Mac OS X e Linux

Se executarmos `touch` seguido do nome do novo arquivo com sua respectiva
extensão, ele será criado.

```bash
touch nome-arquivo.extensão
```

Por exemplo, se quisermos criar um arquivo HTML, o comando seria:

```bash
touch index.html
```

Se você quiser criar um arquivo já com algum conteúdo, pode usar o comando
`echo` explicado na parte sobre Windows logo acima, pois ele também funciona no
Linux e Mac OS X.

## Material complementar

Segue uma lista dos comandos utilizados nesta aula:

| Comando (Windows) | Comando (Mac OS X, Linux) | Descrição |
| --- | --- | --- |
| `cd` | `pwd` | Mostra o caminho de onde estamos |
| `cd nome-diretório` | `cd nome-diretório` | Entra no diretório indicado |
| `cd ..` | `cd ..` | Volta um diretório |
| `dir` | `ls` | Lista os diretórios e arquivos |
| `mkdir nome-diretório` | `mkdir nome-diretório` | Cria um novo diretório |
| `echo > nome-arquivo.ext` | `touch nome-arquivo.ext` | Cria um novo arquivo |
| `exit` | `exit` | Encerra a linha de comandos |

Agora vejamos como a Ju navega entre seus arquivos ou diretórios e cria
pastas e arquivos a partir do terminal.

[![Linha de comandos](https://img.youtube.com/vi/Qyox6PJtY9w/0.jpg)](https://www.youtube.com/watch?v=Qyox6PJtY9w)
