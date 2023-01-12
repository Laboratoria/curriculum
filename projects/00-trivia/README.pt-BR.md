# Trivia

## Índice

* [1. Preâmbulo](#1.-preâmbulo)
* [2. Resumo do projeto](#2.-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3.-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4.-considerações-gerais)
* [5. Recomendações](#5.-recomendações)
* [6. Escopo do projeto](#6.-escopo-do-projeto)
* [7. Ambiente de trabalho e leitura complementar](#7.-ambiente-de-trabalho-e-leitura-complementar)
* [8. Considerações técnicas](#8.-considerações-técnicas)

***

## 1. Preâmbulo

Trivia é um tipo de jogo, geralmente no âmbito de uma competição,
no qual se coloca uma série de perguntas cujas respostas devem ser escolhidas
entre diferentes opções pré-determinadas.

Atualmente, existem muitas possibilidades de participar de uma trivia online.
Com uma busca rápida na internet, você poderá perceber que existem trivias
sobre diversos temas (ciências, séries, televisão etc.).

![TRIVIA](https://phandroid.s3.amazonaws.com/wp-content/uploads/2018/01/hq-trivia-android-screenshot.jpg)

## 2. Resumo do projeto

**O que devo fazer exatamente?** Obviamente, você vai criar o aplicativo
_web_ de uma _trivia_. Não tenha medo, você vai aprender muito nesses dias.

O objetivo principal deste projeto é que você tenha uma primeira experiência
no desenvolvimento de aplicativos _Web_ que interajam com as usuárias
através do navegador, utilizando HTML, CSS e JavaScript.

O tema é livre, decida rapidamente e depois pense em como deve ser a
experiência para suas usuárias. Pense nas telas, no fluxo,
nas mensagens, cores etc.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu
projeto. Pense nisso para decidir sua estratégia de trabalho.

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

## 4. Considerações gerais

* Concluir o projeto **não é um requisito para ser admitida no _bootcamp_**.
* Este projeto deve ser feito em dupla.
* Certifique-se de que ambas possam fazer e aprender tudo. Não se trata
  de "dividir" o trabalho para fazer "mais". O objetivo é aprender
  colaborativamente, e não "terminar e entregar".
* Queremos que você aprenda o que ainda não sabe. Seja transparente
  para que possamos entender seu processo de aprendizagem. Estamos
  interessados no processo e não apenas no resultado final.

## 5. Recomendações

### 5.1. Protótipo

Algo que sempre ajuda a "concretizar" o que você tem em mente é fazer
um protótipo simples **de todo o projeto** no papel. Desenhar é um processo
rápido que permite entender como, quando e onde as coisas acontecem;
onde exatamente você deve dizer isso ou aquilo, o que acontece se a usuária
fizer A ou B, onde ela deve _clicar_, quais informações exatamente você deseja
mostrar a ela etc.
**Gaste um máximo de duas horas nisso antes de começar a programar.**

### 5.2. Não adie o que você não sabe fazer, comece por aí

Não gaste horas discutindo o tema da trivia ou fazendo logotipos com a
sensação de que você está "avançando". É natural que você tenha o impulso
de fazer isso - é o seu cérebro pedindo um pouco de **satisfação imediata**.
Não se deixe enganar pela "ilusão" de avanço; **seu objetivo é aprender**.
Enfrente o mais rápido possível o que você não sabe, pois essa é a única
maneira de alcançá-lo.

### 5.3 Aprender acima de concluir o projeto

Evite a tentação de copiar e colar código que "funciona" para concluir o
projeto sem entender como ou por que funciona. Prefira sempre fazer pouco,
mas que seja algo que você entende e pode explicar, ao invés de fazer muito que
funciona pela metade e/ou que você não sabe bem como ou por que funciona.

### 5.4 Divida o problema maior em problemas menores

Um "superpoder" que esperamos que você possa desenvolver durante o _bootcamp_ é
definir "microprojetos" que o levarão passo a passo, mas transversalmente,
à solução do "grande projeto". Poderíamos dizer que é como começar montando
um quebra-cabeça pelos cantos ou arestas sem necessariamente saber como eles
vão se encaixar no final. Deixe-se levar e explore livremente. Você não
precisa saber tudo antes de começar.

Posteriormente, daremos algumas sugestões como exemplo.

## 6. Escopo do projeto

Sabemos que cada uma de vocês sabe um pouco mais ou menos sobre
Desenvolvimento Web. Não esquecemos que cada uma tem experiências de vida e
motivações diferentes, personalidades diferentes, aprende no seu ritmo etc.
Fingir que tudo isso não existe e pedir a todas que aprendam e concluam de
forma idêntica seria um absurdo. Propomos que você trabalhe em marcos ou etapas
incrementais de acordo com suas possibilidades.
**Não esperamos que completem os 3 marcos**.

Não trabalhe como se fosse uma fábrica fazendo toooooooooooooooooodo o HTML
e CSS de todas as telas que você imaginou para depois começar com
tooooooooooooooooooooodo o JavaScript e a funcionalidade. O risco de trabalhar
assim é que você obtenha muitas partes sem nenhuma ou meia funcionalidade e
aprenda pouco; não faça o inverso também - muitas funcionalidades no console,
mas sem uma interface que possa ser usada por uma usuária _não desenvolvedora_.

A metáfora a seguir pode ajudá-la a entender melhor a ideia.

![AGILE](https://miro.medium.com/max/1400/1*qINsG4WH_BDN-viMJUH6Ng.png)

Essas etapas, do skate ao carro, são o que chamaremos de "marcos".

Estes marcos são pequenas tarefas a serem implementadas,
assim, você evita trabalhar como uma fábrica, fazendo HMTL, CSS e Javascript
separadamente.
Nesse formato, você consegue ir aprendendo um pouco de cada coisa,
e agregando valor para seu usuário ao término de cada marco.

Você é livre para seguir esta recomendação ou trabalhar como preferir. Pode ser
útil se você está apenas começando a aprender Desenvolvimento Web - você decide.

Alerta de spoiler: vá praticando tomar suas próprias decisões de aprendizagem,
pois assim serão os 6 meses de bootcamp.

***

### Marco 1

A versão mais simples de uma _trivia_.

* 1 única tela ou visualização.
* 2 questões com pelo menos 3 alternativas de resposta cada.
* 1 botão para responder e ver qual é a alternativa correta.

Não informa se você estava correto ou não, apenas informa qual
alternativa estava correta.

<details>
<summary>
  Sugestão de microprojeto A
</summary>

#### Somente o "esqueleto" estático

* Duas perguntas com as suas respectivas alternativas de respostas em forma de
  _radio buttons_ (🔘)
* Um botão para “Responder e ver resultados”.

#### O que você aprenderá

Como construir uma página básica HTML com elementos de formulário.

![Microprojeto-1A](./media/trivia-1a.gif)
</details>

<details>
<summary>
  Sugestão de microprojeto B
</summary>

#### Experimente dar alguma interação

Quando a usuária der um _click_ em algum dos _radio button_, mostre uma
mensagem de alerta (_alert_) no navegador que contenha o valor (texto) do
_radio button_ clicado.

**Dica**: Para mostrar uma mensagem de alerta básica há uma função JavaScript
chamada “_alert_”. Esta função pode “escutar” eventos do navegador como
_click_ e fazer algo quando isso acontecer, usando _onclick_ ou
_addEventListener_.

#### O que você aprenderá

* Detectar eventos do navegador (os _clicks_ da usuária) e fazer algo
  quando isso acontecer.
* Identificar os elementos HTML que estão no navegador e obter seus valores
  e/ou estados.

![Microprojeto-1B](./media/trivia-1b.gif)
</details>

<details>
<summary>
  Sugestão de microprojeto C
</summary>

#### Experimente dar um pouco de interação mais parecida com o que você precisa

Ao invés de mostrar o valor de cada _radio button_ quando se _clica_ nele,
a opção é apenas selecionada. O _alert_ com os valores dos _radio button_
selecionados é mostrado quando se tem o _click_ no botão “Responder e ver
resultados”.

#### O que você aprenderá

* Detectar eventos no navegador (os clicks do usuário).
* Identificar os elementos HTML que existem no navegador e obter seus
  valores/estados.

![Microprojeto-1C](./media/trivia-1c.gif)
</details>

***

### Marco 2

Adicione uma tela de boas-vindas simples com os seguintes elementos e
características:

* Uma caixa de texto (input text) na qual o jogador escreve seu nome.
* Um botão "jogar" ou "começar" para ir para as perguntas.
* Desta vez, deve haver pelo menos 3 perguntas com suas respectivas alternativas
  de resposta.
* Antes das perguntas deve-se dizer "Olá, [o nome que foi inserido na tela
  de boas-vindas]"
* O botão de resposta mostra a alternativa correta para cada pergunta e também
  mostra se cada uma das respostas estava correta ou incorreta.
* Um botão para jogar novamente que retorna à tela inicial onde o nome é solicitado.

<details>
<summary>
  Sugestão de microprojeto A
</summary>

#### Avaliando as respostas de seu usuário

Avalie se as respostas selecionadas estão corretas ou incorretas. Para fazer isso,
escolha uma das alternativas da pergunta 1 como a resposta “correta”. Ao dar
_click_ no botão “Responder e ver resultados” mostra um _alert_
que diga “Resposta correta” ou “Resposta incorreta” conforme apropriado.

**Dicas:** Leia sobre condicionais e controle de fluxo (IF, ELSE).

#### O que você aprenderá

* Identificar os elementos HTML que estão no navegador e obter seus valores
  e/ou estados.
* Comparar os valores/estados dos elementos e fazer algo conforme o
  resultado obtido da comparação/avaliação.

</details>

***

### Marco 3

* Permite à usuária escolher entre 2 tipos de perguntas depois de escrever
  seu nome e antes de responder. Por exemplo, umas sobre comida e outras sobre
  cervejas.
* Adiciona uma pontuação para respostas corretas e incorretas e exibe uma
  pontuação total no final.

***

### Marco 4

Se você fez tudo acima e tem um pouco mais de tempo, decida o que mais gostaria
de fazer para melhorar seu projeto. Você pode, por exemplo:

* Adicionar uma contagem regressiva com um limite de tempo para responder às
  perguntas.
* Você pode enviar seu código para um repositório GitHub e publicar seu
  aplicativo _Web_ no GitHub Pages e compartilhar a URL com quem você quiser.

Independentemente de quão longe você vá, certifique-se de documentar
**brevemente** seu trabalho em um documento do Google ou no arquivo README.md
do seu repositório (se você estiver trabalhando com um). Conte-nos um pouco
sobre seu processo de design da experiência de uso e como você acha que ele
resolve a necessidade (ou "problema") da sua usuária. Inclua algumas imagens
de seus protótipos em papel para nos ajudar a entender o processo, não o
resultado. Você mudou algumas coisas ao longo do caminho? Quais? Por quê?

## 7. Ambiente de trabalho e leitura complementar

### Prepare o seu ambiente de trabalho

#### Se você está dando os primeiros passos no desenvolvimento Web

Talvez você prefira trabalhar com uma ferramenta de edição de código on-line,
como [Replit](https://replit.com/) ou [CodeSandbox](https://codesandbox.io).

#### Se você já tem alguma experiência e vai trabalhar com um repositório de código

1. Antes de tudo, certifique-se de ter um :pencil: bom editor de texto, algo
   como [Atom](https://atom.io/) ou [VSCode](https://code.visualstudio.com/).
2. Para executar os comandos a seguir você precisará de uma :shell: [UNIX Shell](https://curriculum.laboratoria.la/pt/topics/shell),
   que é um programa que interpreta linhas de comando (command-line interpreter)
   assim como ter o [git](https://curriculum.laboratoria.la/pt/topics/scm/01-git)
   instalado. Se você já utiliza um sistema operacional "UNIX-like", como
   GNU/Linux ou MacOS já terá uma _shell_ (terminal) instalada por padrão (e
   provavelmente `git` também). Se seu sistema é Windows você poderá usar
   [Git bash](https://git-scm.com/download/win), mas indicamos testar :penguin:
   GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   mentores vão compartilhar um \_link* para o repositório com acesso de leitura.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   seu _fork_ em seu computador (cópia local).

### Recursos e tópicos relacionados

#### Design de experiência do usuário (User Experience Design)

* [Blog sobre design de experiência do usuário](https://medium.com/laboratoria/qu%C3%A9-es-ser-una-ux-designer-f81fbc45a44c)

#### Desenvolvimento Front-end

* [Tipos de dados](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
* [Declaração de variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
* [Controle de fluxo](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control)

#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)

#### Organização do trabalho

* [Metodologias Ágeis](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum em detalhes](https://www.youtube.com/watch?v=XfvQWnRgxG0). Não
  esperamos que faça tudo isso neste projeto.

#### Entrega

* A entrega será feita via form (a ser disponibilizado) através de um link
  funcional do seu projeto. Pode ser o link do seu
  **repositório github ou o link do seu projeto online** [Replit](https://repl.it)
  ou [CodeSandbox](https://codesandbox.io/)

![URL](./media/entrega-links.gif)
