---
type: read
duration: 20min
---

# GitHub

## Objetivos de Aprendizagem

* Criar sua conta no `GitHub`
* Entender a diferença entre `Git` e `GitHub`
* Compreender os conceitos básicos: repositórios local e remoto, _working
  directory_, _staging area_ e _branches_
* Saber utilizar os comandos essenciais: `init`,`status`, `add`, `commit`,
  `push` e `pull`

## O que é Github?

`GitHub` é conhecido como a "rede social" dos desenvolvedores, pois muitos deles
enviam seus projetos para lá. Ele permite criar `repositórios remotos` que
sempre terão uma cópia do seu código facilmente acessível pelo `Git`, o
controlador de versões.

Mas o `GitHub` não serve apenas para guardar o nosso código. Ele também
contribuirá para o desenvolvimento colaborativo do projeto fornecendo
ferramentas como:

* Um _sistema de acompanhamento de problemas_ que permite aos membros da equipe
  detalhar um problema ou sugerir alterações no projeto.

* Uma _ferramenta de revisão código_, através da qual é possível adicionar
  anotações em qualquer ponto do projeto e discutir sobre uma alteração em
  específico.

* Um _visualizador de versões_ para comparar o progresso do projeto ao longo das
  diferentes versões.

**Resumindo, poderíamos dizer que GitHub é como o Dropbox, mas para
desenvolvedores.**

## Qual é a diferença entre Git e GitHub?

**`Git` e `GitHub` se complementam, mas não são iguais.**

`GitHub` utiliza `Git` como sistema de controle de versões. Graças ao Git,
podemos salvar localmente os diferentes progressos \(estado\) do nosso projeto
e, graças ao GitHub, podemos enviá-los à nuvem e iniciar um trabalho
colaborativo ou trabalhar em nossos projetos pessoais sem depender do computador
onde se encontra o projeto ou de um _pen drive_ para copiá-lo a outra máquina.

## Por que Git e GitHub são importantes?

A programação é feita, na maioria das vezes, em equipes. Várias empresas têm uma
equipe que se complementa para cada projeto. Diante dessa situação, você pode se
perguntar:

> Como se organizam para trabalhar todos em um único projeto? Talvez eles tenham
> tudo em um USB e se revezam para poderem trabalhar, ou cada um trabalha por si
> e, na hora de juntar todas as partes, precisam analisar detalhadamente se
> repetiram ou não algum pedaço.

Isso não seria nada eficiente, pois não seria possível trabalhar ao mesmo tempo
em algo específico e dependeríamos do progresso de outra pessoa para que
pudéssemos avançar.

Para esses casos, existem ferramentas como o `Git` e `GitHub` que nos ajudam a
trabalhar de forma colaborativa. `GitHub` é o lugar perfeito para trabalhar em
conjunto num projeto com um ou vários companheiros, pois você poderá: criar um
projeto e adicionar os membros de sua equipe como colaboradores; trazer ao seu
repositório local as alterações que seus companheiros enviaram ao repositório
remoto; ver automaticamente o que seu companheiro acabou de adicionar.

## Como criar uma conta no GitHub?

Para criar sua conta no GitHub, siga estes passos:

1. Vá à [página oficial do GitHub](https://github.com)
2. Uma vez na página, clique em **"Sign up"**
3. Digite um nome de usuário \(**username**\) que pode ser um que você já tenha.
   Por exemplo, se você já criou um _username_ para um jogo online, poderá usar
   ele mesmo. Há infinitas possibilidades para criar um novo, mas tenha em mente
   que seu _username_ será visível para o mundo todo e poderá ser solicitado
   quando alguém for incluí-la no time de colaboradores de um projeto. Portanto,
   tenha cuidado com sua escolha de _username_. Em seguida, digite seu e-mail,
   senha e clique em **"Create an account"**.
4. Na próxima tela, certifique-se de marcar a opção **"Unlimited public**
   **repositories for free"**, a versão "free" do GitHub. Em seguida, clique em
   **"continue"**

5. No terceiro passo do registro, você pode completar com seus dados e clicar em
   **"Submit"**, ou somente clicar em **"Skip this step"**

E pronto! Ao finalizar essas etapas, teremos nossa conta GitHub criada.

Agora Juliana, seguindo os passos anteriores, criará
sua conta no `Github`.

[![Criando conta no
Github](https://img.youtube.com/vi/UciuMoszpp8/0.jpg)](https://www.youtube.com/watch?v=UciuMoszpp8)

## Como criamos um repositório remoto no GitHub?

Siga os passos a seguir para criar um repositório no `Github`:

[![Criando um
repositório](https://img.youtube.com/vi/ZPoYWdQdJRs/0.jpg)](https://www.youtube.com/watch?v=ZPoYWdQdJRs)

Por último temos a tela onde encontramos a `url` do nosso `repositório remoto`,
com o qual (mais adiante) vincularemos nosso repositório remoto com nosso
repositório local.

## Como usar o Git e GitHub?

Já lemos as vantagens que `Git` e `GitHub` podem nos oferecer: com eles, podemos
fazer upload de um repositório local a outro remoto, trabalhar com versões e de
forma colaborativa, etc. Agora, vamos a "mágica" do Git com GitHub: enviar nosso
repositório _local_ a um repositório _remoto_ e trabalhar colaborativamente.

* `remote`: Com `remote`, **vincularemos** nosso repositório local ao nosso
  repositório localizado na "nuvem" por meio de uma **URL**. Este passo _não_ é
  feito a cada versão criada, mas somente uma vez para especificarmos o
  repositório remoto que temos à disposição. Para ligar o nosso repositório
  local com nosso repositório remoto, devemos executar o seguinte comando:

  ```bash
  git remote add nome-remoto url
  ```

  Normalmente, a maioria dos desenvolvedores utilizam _origin_ \(origem\) como
  `nome-remoto` e `url` é o endereço do repositório no GitHub. Por exemplo,
  criei um repositório "teste" no GitHub há pouco tempo atrás e, para vincular
  meu repositório local a esse repositório remoto, eu devo executar a seguinte
  linha de comando:

  ```bash
  git remote add origin https://github.com/michellesegv/teste.git
  ```

* `push`: Através do `push`, **enviaremos** nossa nova versão, confirmada pelo
  `commit`, ao nosso repositório remoto. O comando é o seguinte:

  ```bash
  git push nome-remoto master
  ```

  O `nome-remoto` é aquele atribuído com o comando anterior \(`remote add`\) e,
  no nosso caso, é _origin_. Em seguida, digitamos `master`, o nome da _branch_.
  Veremos mais adiante como trabalhar com _branches_ \(ramos\). Os ramos são uma
  cópia paralela que podemos criar do nosso código. Por padrão, os repositórios
  possuem um ramo chamado _master_ \(mestre\) e, por enquanto, trabalharemos
  somente nele. Dessa forma, para enviar as mudanças ao ramo remoto _master_,
  executamos:

  ```bash
  git push origin master
  ```

* `pull`: Permite atualizar nosso repositório local para o último `commit`
  registrado no repositório remoto. Este comando irá nos ajudar muito ao
  trabalharmos de forma colaborativa, pois poderemos trazer o progresso que
  nossos colaboradores enviaram ao repositório remoto para o repositório local,
  mantendo-o atualizado. O comando é o seguinte:

  ```bash
  git pull nome-remoto master
  ```

  No nosso caso, como já declaramos o nome do repositório remoto como _origin_ e
  estamos trabalhando no ramo _master_ \(padrão\), o comando seria:

  ```bash
  git pull origin master
  ```

## Exemplo

Agora vamos ver como Juliana utiliza `Git` e `Github` para manejar o controle
de versões de ses projetos e colaborar com outras coaches de Laboratoria.

[![Subindo um
repositório](https://img.youtube.com/vi/rfb3abnbkxM/0.jpg)](https://www.youtube.com/watch?v=rfb3abnbkxM)

### Material complementar

A seguir, temos uma lista de comandos do Git usados nesta aula:

| Comando | Descrição |
| --- | --- |
| `git config --global user.name seu-username` | Configura o nome do usuário |
| `git config --global user.email seu@email.com` | Configura o e-mail |
| `git init` | Inicia o monitoramento do diretório indicado |
| `git add arquivo` | Passa o arquivo do _working directory_ à _staging area_ |
| `git add .` | Passa tudo do _working directory_ à _staging area_ |
| `git commit -m 'Comentário'` | Confirma os arquivos para serem salvos |
| `git remote add nome-remoto URL` | Vincula o repositório local com remoto |
| `git push nome-remoto master` | Envia o conteúdo local no repositório remoto|
| `git status` | Mostra o estado dos arquivos do diretório local |
| `git pull nome-remoto master` | Atualiza o repositório local |

## Leituras complementares

Recomendamos as seguintes leituras:

* [Try Git](https://try.github.io/levels/1/challenges/1)
* [GitHub Flow](https://services.github.com/on-demand/intro-to-github/)
* [Learn git branching](https://learngitbranching.js.org/)
* [Outro tutorial interativo e
  visual](http://www.ndpsoftware.com/git-cheatsheet.html)
