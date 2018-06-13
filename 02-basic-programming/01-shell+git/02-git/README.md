# Git

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem

* Entender o que é `Git` e por que ele é importante
* Criar sua conta no `GitHub`
* Entender a diferença entre `Git` e `GitHub`
* Instalar e configurar o `Git`
* Aprender o _workflow_ de uma desenvolvedora
* Compreender os conceitos básicos: repositórios local e remoto, _working
  directory_, _staging area_ e _branches_
* Saber utilizar os comandos essenciais: `init`,`status`, `add`, `commit`,
  `push` e `pull`

O texto a seguir é baseado em grande parte, com alguns ajustes, nas seguintes referências:

* [Pro Git book](https://git-scm.com/book/en/v2)
* [Getting Started with Git - Arun Sood](https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro)

## O que é Git?

`Git` é um _Sistema de Controle de Versões_.

> ** O que é um Sistema de Controle de Versões? **

Um _Sistema de Controle de Versões_ \(VCS em inglês\) é um sistema que registra as alterações de um, dois ou mais arquivos o tempo todo para, caso necessário, recuperarmos uma versão facilmente. Por exemplo, se você alguma vez elaborou um projeto para uma tarefa qualquer, já fez algo como ilustrado na imagem abaixo?

![Vers&#xF5;es](http://fotos.subefotos.com/e6ea20e7174abf68ba4a047eaa0d5373o.png)

Graças ao VCS, podemos fazer com que isso não ocorra, pois ele permite:

* Reverter arquivos para um estado anterior.
* Reverter o projeto inteiro para um estado anterior.
* Comparar as alterações realizadas ao longo do projeto.
* Ver quem introduziu uma mudança ou atualizou o arquivo, e quando.
* E o mais importante: assegurar que os arquivos não se percam.

De agora em diante, o `Git` vai nos ajudar a salvar e identificar todas as mudanças que faremos durante o desenvolvimento de um projeto, seja de um ou mais arquivos.

Cada vez que confirmar uma mudança, ou salvar o estado de seu projeto no `Git`, ele basicamente tira uma foto do estado de todos os seus arquivos naquele momento, e salva uma referência a essa foto. Para ser eficiente, se os arquivos não foram modificados, o `Git` não armazena o arquivo novamente, apenas um link para o arquivo idêntico que já estava armazenado.

Tanto a coleção de arquivos como suas versões completas serão salvas em um `repositório`.

Em suma, o `Git` pensa em seus arquivos como um fluxo de "imagens". Assim, a cada mudança que realizamos, ele tirará uma foto no instante em que lhe indicarmos e tudo isso será armazenado em um `repositório local`.

Vamos conhecer agora algumas palavras-chave que você certamente irá ouvir quando trabalhar com Git.

* **Repositório local**: Quando falamos repositório local, fazemos referência

  aos arquivos e suas versões localizados em nosso equipamento. Aqui,

  encontraremos duas partes muito importantes:

  * _**Working directory**_: é o nosso diretório de trabalho.
  * _**Staging area**_: área intermediária, de preparação, na qual alterações

    são adicionadas para formar uma nova versão do projeto.

* **Repositório remoto**: o `Git` nos permite sincronizar nosso repositório

  local com um repositório remoto que pode estar na "nuvem".

## O que é GitHub?

`GitHub` é conhecido como a "rede social" dos desenvolvedores, pois muitos deles enviam seus projetos para lá. Ele permite criar `repositórios remotos` que sempre terão uma cópia do seu código facilmente acessível pelo Git, o controlador de versões.

Mas o `GitHub` não serve apenas para guardar o nosso código. Ele também contribuirá para o desenvolvimento colaborativo do projeto fornecendo ferramentas como:

* Um _sistema de acompanhamento de problemas_ que permite aos membros da equipe

  detalhar um problema ou sugerir alterações no projeto.

* Uma _ferramenta de revisão código_, através da qual é possível adicionar

  anotações em qualquer ponto do projeto e discutir sobre uma alteração em

  específico.

* Um _visualizador de versões_ para comparar o progresso do projeto ao longo

  das diferentes versões.

**Resumindo, poderíamos dizer que GitHub é como o Dropbox, mas para desenvolvedores.**

## Qual é a diferença entre Git e GitHub?

**Git e GitHub se complementam, mas não são iguais.**

GitHub utiliza Git como sistema de controle de versões. Graças ao Git, podemos salvar localmente os diferentes progressos \(estado\) do nosso projeto e, graças ao GitHub, podemos enviá-los à nuvem e iniciar um trabalho colaborativo ou trabalhar em nossos projetos pessoais sem depender do computador onde se encontra o projeto ou de um _pen drive_ para copiá-lo a outra máquina.

## Por que Git e GitHub são importantes?

A programação é feita, na maioria das vezes, em equipes. Várias empresas têm uma equipe que se complementa para cada projeto. Diante dessa situação, você pode se perguntar:

> Como se organizam para trabalhar todos em um único projeto? Talvez eles tenham tudo em um USB e se revezam para poderem trabalhar, ou cada um trabalha por si e, na hora de juntar todas as partes, precisam analisar detalhadamente se repetiram ou não algum pedaço.

Isso não seria nada eficiente, pois não seria possível trabalhar ao mesmo tempo em algo específico e dependeríamos do progresso de outra pessoa para que pudéssemos avançar.

Para esses casos, existem ferramentas como o Git e GitHub que nos ajudam a trabalhar de forma colaborativa. GitHub é o lugar perfeito para trabalhar em conjunto num projeto com um ou vários companheiros, pois você poderá: criar um projeto e adicionar os membros de sua equipe como colaboradores; trazer ao seu repositório local as alterações que seus companheiros enviaram ao repositório remoto; ver automaticamente o que seu companheiro acabou de adicionar.

## Como criar uma conta no GitHub?

Para criar sua conta no GitHub, siga estes passos:

1. Vá à [página oficial do GitHub](https://github.com)
2. Uma vez na página, clique em **"Sign up"**
3. Digite um nome de usuário \(**username**\) que pode ser um que você já

   tenha. Por exemplo, se você já criou um _username_ para um jogo online,

   poderá usar ele mesmo. Há infinitas possibilidades para criar um novo, mas

   tenha em mente que seu _username_ será visível para o mundo todo e poderá

   ser solicitado quando alguém for incluí-la no time de colaboradores de um

   projeto. Portanto, tenha cuidado com sua escolha de _username_. Em seguida,

   digite seu e-mail, senha e clique em **"Create an account"**.

4. Na próxima tela, certifique-se de marcar a opção **"Unlimited public**

   **repositories for free"**, a versão "free" do GitHub. Em seguida, clique em

   **"continue"**.

5. No terceiro passo do registro, você pode completar com seus dados e clicar

   em **"Submit"**, ou somente clicar em **"Skip this step"**.

E pronto! Ao finalizar essas etapas, teremos nossa conta GitHub criada.

Agora a Michelle, seguindo os passos acima, criará sua conta no GitHub.

[![Criando uma conta no GitHub](https://img.youtube.com/vi/1r9ixrSftaI/0.jpg)](https://www.youtube.com/watch?v=1r9ixrSftaI)

## Como criamos um repositório remoto no GitHub?

Siga os passos de Michelle para criar um repositório no GitHub:

[![Criando reposit&#xF3;rio](https://img.youtube.com/vi/KCLpcq9BPcc/0.jpg)](https://www.youtube.com/watch?v=KCLpcq9BPcc)

Por último, temos a tela onde encontramos a _URL_ do nosso repositório remoto que, mais adiante, será vinculada ao nosso repositório local.

## Como instalar o Git?

Se estivermos usando Linux ou Mac OS X, não será necessário instalar o Git porque ele já vem instalado, mas se nosso sistema operacional for Windows, devemos baixar e instalar o Git em nossa máquina.

[Download Git](https://git-scm.com/download/win)

Quando terminar o download do nosso programa, começaremos a instalação com um duplo clique no arquivo que acabamos de baixar e, em seguida, aparecerão as seguintes telas:

1. Clique no botão "Run"

   ![Passo 1, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/dc926ac2d62764c9861d890a87cae1d1o.png)

2. Agora em "Next &gt;"

   ![Passo 2, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/66ccdc66224e1b301c143e2f228c56d4o.png)

3. Na tela que surgir, selecione as seguintes opções e clique em "Next &gt;":

   ![Passo 3, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/6695c2d71e3574fea5a79d61ea8e8e11o.png)

4. Selecione a opção "Use Git and optional Unix tools from the Windows Command Prompt" e clique em "Next &gt;"

   ![Passo 4, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/3aeac78b635775f55e4365939b87d8e6o.png)

5. Selecione a opção "Use the OpenSSL library" e continue \("Next &gt;"\)

   ![Passo 5, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/febf4d79afaa6d625173dca24d290dc8o.png)

6. Escolha a primeira opção e prossiga

   ![Passo 6, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/3794e27ec38776180c13c14819fdc0f9o.png)

7. Certifique-se de escolher a opção "Use MinTTY"

   ![Passo 7, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/7da9d7c8c7ee9eb92ef2cc548c0f0315o.png)

8. Selecione as duas primeiras opções e clique em "Install"

   ![Passo 8, instal&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/93a5079b8524142b8e07fd97981afe38o.png)

9. Finalmente, a instalação começará

   ![Passo 9, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/7ce940e5dec200b7203115b1ee22c6ffo.png)

10. Com o Git já instalado em nosso computador, clique em "Finish"

    ![Passo 10, instala&#xE7;&#xE3;o do Git](http://fotos.subefotos.com/47a5605681eec98bd81c7f60489187e4o.png)

### O que é Git Bash?

Quando concluirmos a instalação do Git, encontraremos, em nossas novas aplicações, uma chamada `Git Bash`.

No sistema operacional Windows, pelo fato do _Command Prompt_ \(ou terminal do Windows\) não ser muito amigável e não suportar comandos UNIX, o Git nos dá uma ferramenta muito boa chamada `Git Bash` que vai nos permitir executar comandos como se estivéssemos no Linux ou Mac OS X.

> Assim, `Git Bash` será a "linha de comandos" que usaremos no Windows. Já no Linux ou Mac OS X, utilizaremos o terminal.

## Como configuramos o Git?

Com o Git já instalado em nosso computador, vamos agora personalizar o ambiente do Git.

> Lembre-se de que se você quiser executar comandos Git e estiver no Mac OS X ou Linux, deverá executá-los na linha de comandos. Porém, se seu sistema operacional é Windows, utilizará o Git Bash para executar os mesmos comandos de Git.

A primeira coisa a fazer é definir nosso nome de usuário \(_username_\) e e-mail que o Git utilizará para gravar as alterações de código \(o que veremos mais adiante: _commits_\). Podemos configurar esses dados através do comando `git config`, o qual nos permite visualizar e configurar variáveis que controlam a aparência e funcionamento do Git. Por exemplo, se executo o comando `git config --list` em meu terminal, obtenho o seguinte resultado:

```text
user.name = michellesegv
user.email = michelle@laboratoria.la
```

\(Esse são os dados que eu já havia configurado\)

Agora, vamos definir o nosso ambiente de `Git`:

* Para definir seu **username** \(nome de usuário\), substitue `seu-username` na seguinte linha e depois pressione a tecla "enter":

  ```bash
  git config --global user.name seu-username
  ```

* Para definir seu **e-mail**, escreva o comando abaixo, pressionando "enter" em seguida:

  ```bash
  git config --global user.email seuemail@gmail.com
  ```

Os dados das linhas acima devem ser os mesmos que você usou ao criar a sua conta no GitHub, pois eles ficarão gravados nos _commits_ e farão parte do histórico do projeto que está armazenado no GitHub.

[![Configurando o Git](https://img.youtube.com/vi/g9iNK_11KV4/0.jpg)](https://www.youtube.com/watch?v=g9iNK_11KV4)

## Como usar o Git e GitHub?

Já lemos as vantagens que Git e GitHub podem nos oferecer: com eles, podemos fazer upload de um repositório local a outro remoto, trabalhar com versões e de forma colaborativa, etc. Agora, vamos a "mágica" do Git com GitHub: enviar nosso repositório _local_ a um repositório _remoto_ e trabalhar colaborativamente.

A seguir, você encontrará uma lista dos comandos mais comuns ao trabalhar com Git e GitHub. Se parecer muito "teórico", não se preocupe, pois há um vídeo da Michelle utilizando-os mais abaixo.

* `init`: Este comando diz ao Git para começar a monitorar o diretório atual, criando um repositório. Em outras palavras, o Git vai começar a vigiar essa pasta. O comando para tal é:

  ```bash
  git init
  ```

  Ao executar essa linha, o Git vai criar uma pasta oculta chamada `.git` no _working directory_, o diretório raiz do projeto, local onde você digitou o comando.

* `add`: Com este comando, indicaremos quais arquivos queremos passar do nosso _working directory_ para _staging area_. Isto é, dizer quais arquivos estão **preparados** para a nova versão do projeto.

  Por exemplo, se quisermos adicionar o arquivo HTML **index.html** à nossa _staging area_, devemos executar a seguinte linha:

  ```bash
  git add index.html
  ```

  Se desejarmos que todos os arquivos do diretório atual sejam adicionados à _staging area_ \(definir que já estão preparados para a nova versão\), executamos a seguinte linha:

  ```bash
  git add .
  ```

* `commit`: Com `commit`, **confirmaremos** os arquivos que já definimos como preparados pelo comando anterior \(`add`\). A estrutura do comando é a seguinte:

  ```bash
  git commit -m 'Adicionar um comentário'
  ```

  O texto entre aspas \(''\) pode ser qualquer um. Eu recomendo que você escreva um resumo do que está sendo modificado nessa versão para melhor se organizar. Além disso, um bom comentário irá ajudá-la se for necessário voltar a uma determinada funcionalidade sem precisar ler todo o código, mas apenas guiando-se pelos comentários dos commits. Por exemplo, se a "**nova versão** _cria a estrutura do HTML_", um bom comentário seria:

  ```bash
  git commit -m 'Cria a estrutura do HTML'
  ```

* `remote`: Com `remote`, **vincularemos** nosso repositório local ao nosso repositório localizado na "nuvem" por meio de uma **URL**. Este passo _não_ é feito a cada versão criada, mas somente uma vez para especificarmos o repositório remoto que temos à disposição. Para ligar o nosso repositório local com nosso repositório remoto, devemos executar o seguinte comando:

  ```bash
  git remote add nome-remoto url
  ```

  Normalmente, a maioria dos desenvolvedores utilizam _origin_ \(origem\) como `nome-remoto` e `url` é o endereço do repositório no GitHub. Por exemplo, criei um repositório "teste" no GitHub há pouco tempo atrás e, para vincular meu repositório local a esse repositório remoto, eu devo executar a seguinte linha de comando:

  ```bash
  git remote add origin https://github.com/michellesegv/teste.git
  ```

* `push`: Através do `push`, **enviaremos** nossa nova versão, confirmada pelo `commit`, ao nosso repositório remoto. O comando é o seguinte:

  ```bash
  git push nome-remoto master
  ```

  O `nome-remoto` é aquele atribuído com o comando anterior \(`remote add`\) e, no nosso caso, é _origin_. Em seguida, digitamos `master`, o nome da _branch_. Veremos mais adiante como trabalhar com _branches_ \(ramos\). Os ramos são uma cópia paralela que podemos criar do nosso código. Por padrão, os repositórios possuem um ramo chamado _master_ \(mestre\) e, por enquanto, trabalharemos somente nele. Dessa forma, para enviar as mudanças ao ramo remoto _master_, executamos:

  ```bash
  git push origin master
  ```

* `status`: Com `status`, podemos saber o estado dos arquivos no nosso repositório local. Ou seja, o comando nos dirá se há algum arquivo modificado que não foi atualizado no repositório ou se há arquivos que ainda não foram enviados, e também nos informará se está em nosso _working directory_ ou _staging area_. Este comando será muito útil para determinar quais arquivos devemos declarar como "preparados" \(via `add`\) e, em seguida, "confirmá-los" para a nova versão \(através do comando `commit`\) que enviaremos ao repositório remoto. O comando para ver o estado do nosso repositório é:

  ```bash
  git status
  ```

* `pull`: Permite atualizar nosso repositório local para o último `commit` registrado no repositório remoto. Este comando irá nos ajudar muito ao trabalharmos de forma colaborativa, pois poderemos trazer o progresso que nossos colaboradores enviaram ao repositório remoto para o repositório local, mantendo-o atualizado. O comando é o seguinte:

  ```bash
  git pull nome-remoto master
  ```

  No nosso caso, como já declaramos o nome do repositório remoto como _origin_ e estamos trabalhando no ramo _master_ \(padrão\), o comando seria:

  ```bash
  git pull origin master
  ```

### Material complementar

A seguir, temos uma lista de comandos do Git usados nesta aula:

| Comando | Descrição |
| --- | --- |
| `git config --global user.name seu-username` | Configura o nome do usuário |
| `git config --global user.email seu@email.com` | Configura o e-mail |
| `git init` | Inicia o monitoramento do diretório indicado |
| `git add arquivo.extensão` | Passa o arquivo do _working directory_ à _staging area_ |
| `git add .` | Passa todos os arquivos do _working directory_ à _staging area_ |
| `git commit -m 'Adicionando comentário'` | Confirma os arquivos **preparados** anteriormente com `git add` |
| `git remote add nome-remoto URL` | Vincula o repositório local com o repositório da "nuvem" por meio da **URL** |
| `git push nome-remoto master` | Envia a nova versão ao ramo (_branch_) _master_ do repositório remoto |
| `git status` | Mostra o estado dos arquivos do diretório local |
| `git pull nome-remoto master` | Atualiza o repositório local ao último _commit_ registrado no repositório remoto |

Agora, vejamos como Michelle usa o Git e GitHub para lidar com o controle de versões de seus projetos e colaborar com outras professoras da Laboratoria.

[![Subindo o reposit&#xF3;rio](https://img.youtube.com/vi/Af51B0tI8Zs/0.jpg)](https://www.youtube.com/watch?v=Af51B0tI8Zs)
