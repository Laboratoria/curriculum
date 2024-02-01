# Adivinhe o Número - Guess the Number

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do Projeto](#2-resumo-do-projeto)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizado)
- [4. Considerações Gerais](#4-considerações-gerais)
- [5. Considerações Técnicas](#5-considerações-técnicas)
- [6. Marcos do projeto](#6-marcos-do-projeto)
- [6. Recomendações](#7-recomendações)
- [8. Dicas / Sugestões](#8-dicas--sugestões)

---

## 1. Prefácio

Atualmente, Java é uma das linguagens de programação mais utilizadas no mundo.
Apesar da diversidade de plataformas e ferramentas disponíveis, é fundamental
ter uma base sólida nos conceitos fundamentais de Java e na programação
orientada a objetos (OOP). O objetivo deste projeto é te introduzir ao mundo do
Java por meio de um jogo simples e divertido.

![GUESS THE NUMBER](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/guess-the-number.png?alt=media)

## 2. Resumo do Projeto

É um jogo interativo que se realiza no terminal, no qual a
jogadora e o computador se alternam para tentar adivinhar um número
aleatório entre 1 e 100. Deve-se levar em consideração a tentativa anterior, se
foi "muito alta" ou "muito baixa".

![GUESS THE NUMER DEMO](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/guess-the-number-demo.gif?alt=media)

## 3. Objetivos de Aprendizado

> ℹ️ Esta seção será gerada automaticamente no idioma relevante, com base nos
objetivos de aprendizagem declarados em
> a partir dos objetivos de aprendizado declarados em [`project.yml`](./project.yml),
> ao criar o repositório do projeto para um determinado grupo usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> que estão incluídos em nosso currículo.

## 4. Considerações Gerais

- Este projeto deve ser desenvolvido de manera **individual**.
- Duração do projeto: Estima-se que este projeto levará de 1 a 2 sprints.
- Concentre-se em adquirir conhecimento ao invés de simplesmente "terminar" o projeto.
- Tenha paciência! Não se preocupe muito com o que você ainda não entende completamente.
- Seu aprendizado se desenvolverá à medida que você progredir.
- Deve ser implementado em Java. As únicas dependências externas que podem ser
  usadas são JUnit e Mockito para testes unitários.
- O jogo será realizado no terminal. Os testes podem ser executados no
  terminal ou em seu IDE (recomendamos usar
  [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/))
- Será usado um número aleatório entre 1 e 100 como número secreto.
- A jogadora e o computador se alternarão para adivinhar o número.
- Após cada turno, informações sobre a suposição feita serão exibidas.
- O jogo terminará quando o número for adivinhado. A lista de
  todas as tentativas da jogadora vencedora deve ser exibida.

### Diagrama de Classes

![Diagrama de Clases](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/class-diagram.png?alt=media)

#### `GuessTheNumberGame`

**Propósito:**
Lida com a lógica principal, decide qual jogador assume o próximo turno.

**Atributos:**

- `random`: Gerador de números aleatórios.
- `targetNumber`: Número aleatório entre 1 e 100 a ser adivinhado na partida atual.

**Métodos estáticos (`static`):**

- `main(String[] args)`: Inicia o jogo e gera o número aleatório.
- `checkGuess(Player player)`: Executa um turno, obtém a suposição e avalia
  o novo estado da partida.

#### `Player`

**Propósito:**
Representa uma jogadora genérica. É uma classe abstrata. Define os
atributos e métodos que todas as _classes_ de jogadoras devem compartilhar:

**Atributos:**

- `name`: O nome da jogadora.
- `guesses`: O histórico de suposições da jogadora.

**Métodos:**

- `makeGuess()`: Retorna a suposição da jogadora. É um método abstrato.
- `getName()`: Retorna o nome da jogadora.
- `getGuesses()`: Retorna o histórico de suposições da jogadora.

#### `HumanPlayer` e `ComputerPlayer` (herdam de `Player`)

**Propósito:**
Representa as jogadoras _Humana_ e _Computadora_, respectivamente.

**Métodos:**

- `makeGuess()`: Método que cada classe que herda de `Player` deve implementar.

**Relações:**

- A classe `GuessTheNumberGame` interage com as classes `HumanPlayer` e
`ComputerPlayer` para gerenciar o jogo.
- Tanto a classe `HumanPlayer` quanto `Computer Player` são subclasses de
`Player`, o que implica que herdam todas as suas propriedades e métodos, mas
também têm algumas características adicionais próprias.

Este design de classes permite separar as responsabilidades, facilitando
a manutenção e possíveis extensões do jogo no futuro.
Por exemplo, poderíamos adicionar diferentes jogadoras "máquina" com diferentes
estratégias para a suposição automática, um novo tipo de jogadora "remota" ou
até mesmo diferentes níveis de dificuldade.

### **Critérios de Aceitação Mínimos do Projeto**

- A jogadora e o computador se alternarão em turnos para
  tentar adivinhar o número.
- Após cada tentativa, deve ser exibido:
  * O nome do jogador (pessoa ou computador).
  * A suposição feita.
  * Uma mensagem indicando se a suposição foi muito alta, muito baixa ou correta.
- O jogo terminará assim que a jogadora ou o computador adivinhar o
  número secreto. Deve ser exibida uma mensagem de fim de jogo, bem como uma lista
  de todas as tentativas feitas pela jogadora vencedora.

## 5. Considerações Técnicas

- O jogo será realizado no terminal usando Java.
- A lógica do jogo será baseada em estruturas de controle,
  incluindo loops, condicionais e coleções.
- Deve-se dividir o código e melhorar
  sua legibilidade e manutenção.
- Deve-se usar uma funcionalidade da biblioteca de utilitários do Java para
  geração de números aleatórios.
- Devem ser realizados **testes unitários** para suas classes e métodos usando
  JUnit e simulação de geração de números aleatórios com Mockito.

## 6. Marcos do projeto

Não trabalhe como se fosse uma fábrica fazendo uma classe toda e depois outra.
O risco de trabalhar assim é que você obtenha muitas partes sem nenhuma ou meia funcionalidade
e aprenda pouco; não faça o inverso também - muitas funcionalidades no console,
mas sem uma finalização que possa ser usada por uma usuária não desenvolvedora.

A metáfora a seguir pode ajudá-la a entender melhor a ideia.

![MARCOS](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/marcos.png?alt=media)

Essas etapas, do skate ao carro, são o que chamaremos de "marcos".

Estes marcos são pequenas tarefas a serem implementadas, assim, você evita
trabalhar como uma fábrica e você consegue ir aprendendo
um pouco de cada coisa, agregando valor para seu usuário ao término de cada marco.

A seguir deixamos alguns marcos como sugestão para que você construa o seu projeto.

### 6.1 Marco 1 - Configurações do ambiente de trabalho

Para começar a trabalhar com Java, é necessário configurar nosso ambiente
de trabalho para fazer download e configurar os requisitos mínimos.
Para isso, preparamos um guia que o ajudará a ter tudo pronto para começar
a trabalhar nesse projeto você pode encontrá-lo [aquí](https://github.com/Laboratoria/java-setup/blob/main/README.pt.md).

#### Conteúdos que podem te apoiar na configuração do ambiente

- [Tutoriais para preparação de ambiente Java](https://github.com/Laboratoria/java-setup/blob/main/README.pt.md)
- [Como eu instalo o Java?](https://www.java.com/pt-BR/download/help/download_options_pt-br.html)
- [Install IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Step by Step guide to install Intellij Idea
on Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

### 6.2 Marco 2 - Primeiros passos com a linguagem

Crie a primeira classe do projeto que contenha o método main.
Você pode adicionar um comando que exiba "Olá mundo!" no console. Assim vc
poderá checar se as suas configurações estão corretas.
Além disso, você pode estudar conceitos da linguagem como:

- O que são classes e como construí-las?
- O que são métodos e como utilizá-los?
- Quais o tipos de dados existentes na linguagem?
(Lembre-se dos que você mais utilizou em JavaScript e tente buscar por tipos similares)
- Como criar um array usando Java?
- O que são modificadores de acesso como: `public`, `private`, `protected`?
- O que são métodos construtores? Como fazê-lo?
- O que é encapsulamento? Como fazê-lo?
- O que é herança? Como criar no Java?

Lembre-se de também utilizar conteúdos práticos para compreender esses
conceitos. Não passe muito tempo somente lendo ou assistindo vídeos!
Crie códigos! Tente, erre, tente de novo, etc.

#### Conteúdos que podem te apoiar nos primeiros passos com Java

- [Learn the Basics of Java Programming](https://www.freecodecamp.org/news/learn-the-basics-of-java-programming/)
- [Programação Orientada a Objetos com Java - Kamila Code](https://www.youtube.com/watch?v=zHPx0vyFMOI&list=PL_pqVN-1MnwNhaNktj8ukfX9yfjWFf7S-)
- [Java Basic Syntax](https://www.geeksforgeeks.org/java-basic-syntax/)
- [Java Data Types And Variables – Explained for Beginners](https://www.freecodecamp.org/news/java-data-types-and-variables/)
- [Learn Java](https://my-learning.w3schools.com/tutorial/java)
- [Java Classes and Objects](https://www.w3schools.com/java/java_classes.asp)
- [Java Methods](https://www.w3schools.com/java/java_methods.asp)

### 6.3 Marco 3 - Compreendendo o Diagrama de Classes

Deixamos um [Diagrama de Classes](#diagrama-de-classes) para que você possa se
basear para construir o seu projeto. Mas é preciso compreender o que ele significa
antes mesmo de começar a desenvolver o que será o seu projeto.
Neste marco você pode compreender o que esse diagrama está representando.

#### Conteúdos que podem te apoiar na compreensão do Diagrama de Classes

- [O que é um diagrama de classe UML?](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)
- [O que são os Diagramas de Classe](https://www.devmedia.com.br/orientacoes-basicas-na-elaboracao-de-um-diagrama-de-classes/37224)

### 6.4 Marco 4 - Começando o jogo

Neste marco você pode criar o jogo para somente um jogador.

Comece criando as classes que representam a jogadora humana.
Depois sorteie o número alvo que deve ser um número aleatório
entre 1 a 100 e por fim crie a lógica para verificar se o palpite da
jogadora é abaixo ou acima do valor alvo.
Exiba no terminal informando se é um valor alto ou baixo!

#### Conteúdos que podem te apoiar para iniciar o jogo

- [Java: Como ler e apresentar dados com os comandos de entrada e saída](https://www.devmedia.com.br/java-como-ler-e-apresentar-dados-com-os-comandos-de-entrada-e-saida/22266)
- [Java Scanner](https://www.baeldung.com/java-scanner)
- [Scanner class in Java](https://www.geeksforgeeks.org/scanner-class-in-java/)
- [Java User Input](https://www.w3schools.com/java/java_user_input.asp)
- [Random Number](https://www.baeldung.com/java-17-random-number-generators)

### 6.5 Marco 5 - Adicionando mais jogadores

Neste marco você pode adicionar mais uma jogadora ao jogo!

Comece criando as classes que representam a segunda jogadora, que pode
ser o computador. Crie a lógica para alternar entre as jogadoras.
Por fim, coloque informações adicionais quando alguma jogadora ganhar o jogo!
Você pode exibir a quantidade de tentativas e quais foram as tentativas da jogadora.

### 6.6 Marco 6 - Configurações para construção dos testes unitários

Neste marco você pode configurar as bibliotecas JUnit5 e Mockito na sua IDE,
assim você poderá criar os testes unitários.

Recomendamos que você utilize as bibliotecas presentes no repositório Maven:

- org.junit.jupiter:junit-jupiter
- org.mockito:mockito-core

#### Conteúdos que podem te apoiar para adicionar dependências de testes

- [Adicionar JUnit5 no IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testing Java with VSCode](https://code.visualstudio.com/docs/java/java-testing)

### 6.7 Marco 7 - Criação dos testes unitários

Crie os testes unitários do seu projeto. Preocupe-se em cobrir com testes os a
lógica do seu jogo baseando-se em comportamentos. Por exemplo, crie testes que:

- Simule que o palpite da jogadora é menor que o número alvo.
- Simule que o palpite é o próprio número alvo.

#### Conteúdos que podem te apoiar a criar testes unitários

- [Qualidade e JUnit: introduzindo automatização de testes unitários do seu software Java no dia-a-dia](https://mari-azevedo.medium.com/qualidade-e-junit-introduzindo-automatiza%C3%A7%C3%A3o-de-testes-unit%C3%A1rios-do-seu-software-java-no-dia-a-dia-849611de5574)
- [Mockito Tutorial](https://www.digitalocean.com/community/tutorials/mockito-tutorial)

### 6.8 Marco 8 (Hacker Edition) - Criação de uma "inteligência" para jogar contra o computador

Neste marco, que entendemos como Hacker Edition, você poderá criar uma lógica para
que os palpites da segunda jogadora, quando estivermos jogando contra o computador,
sejam palpites mais inteligentes.
Esse palpites podem considerar a informação se o palpite é alto ou baixo
em relação ao número alvo e assim o jogo pode se tornar mais emocionante.

## 7. Recomendações

**Documentação do Java**: A documentação oficial do Java é uma excelente
fonte de informações sobre as classes e métodos disponíveis em Java
(recomendamos usar o Java 21).

**Projete a Estrutura do Jogo**: Antes de começar a escrever código,
considere como deseja que o jogo funcione. Pense em como alternar
os turnos entre a jogadora e a computadora, como gerar e avaliar
as suposições e como mostrar informações ao jogador. Pare um momento
para analisar e projetar sua solução antes de começar a implementá-la.

**Separação de Responsabilidades**: Recomendamos seguir o diagrama de
classes fornecido para obter uma clara separação da lógica do jogo em
componentes ou classes que permitam manter o código organizado e legível.

**Você Precisará de Loops e Condicionais**: Loops e declarações condicionais
serão seus aliados neste projeto para controlar os turnos, avaliar as
suposições e determinar o vencedor.

**Manipulação de Números Aleatórios**: Use a classe `Random` de `java.util` para
gerar o número aleatório secreto. Você pode encontrar informações sobre como
usá-la na documentação do Java.

**Testes Unitários**: À medida que desenvolve o jogo, tente escrever
testes unitários para verificar se as diferentes partes do jogo funcionam
como o esperado. Você pode usar o framework JUnit para escrever seus testes.

Lembre-se de que este projeto foi projetado para que você possa aplicar seu
conhecimento prévio em JavaScript, "traduzindo-o" para Java,
aprendendo o paradigma de programação orientada a objetos no processo.

## 8. Dicas / Sugestões

Confira o [FAQ](./docs/FAQ.pt.md) e participe do canal do Slack
[#project-guess-the-number](https://claseslaboratoria.slack.com/archives/C067E8ZT9CY)
para conversar e pedir ajuda sobre o projeto.

**_Divirta-se construindo seu jogo de adivinhação de números! 🎲🎮_**
