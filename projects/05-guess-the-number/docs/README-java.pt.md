# Java ☕

## 1. Preâmbulo

Atualmente, o Java é uma das linguagens de programação mais utilizadas no
mundo. Apesar da diversidade de plataformas e ferramentas disponíveis, é
fundamental ter uma base sólida nos conceitos fundamentais do Java e na
programação orientada a objetos (OOP). O objetivo deste projeto é introduzir
você ao mundo do Java através de um jogo simples e divertido.

## 2. Considerações Gerais

- Duração do projeto: Estima-se que este projeto levará de 1 a 2 sprints.
- Deve ser implementado em Java. As únicas dependências externas que podem ser
  utilizadas são JUnit e Mockito para testes unitários.
- O jogo será realizado no terminal. Os testes podem ser executados no terminal
  ou em seu IDE (recomenda-se usar [IntelliJ Community
  Edition](https://www.jetbrains.com/idea/download/)).
- Será utilizado um número aleatório entre 1 e 100 como número secreto.
- O jogador e o computador se revezarão para adivinhar o número.
- Após cada turno, serão mostradas informações sobre o palpite feito.
- O jogo terminará quando o número for adivinhado. Será mostrada uma lista de
  todas as tentativas do jogador vencedor.

### Diagrama de Classes

![Diagrama de
Classes](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/class-diagram.png?alt=media)

#### `GuessTheNumberGame`

**Propósito:** Gerencia a lógica principal, decide qual jogador assume o
próximo turno.

**Atributos:**

- `random`: Gerador de números aleatórios.
- `targetNumber`: Número aleatório entre 1 e 100 para adivinhar na partida
  atual.

**Métodos estáticos (`static`):**

- `main(String[] args)`: Inicia o jogo e gera o número aleatório.
- `checkGuess(Player player)`: Executa um turno, obtém o palpite e avalia o
  novo estado do jogo.

#### `Player`

**Propósito:** Representa um jogador genérico. É uma classe abstrata. Define os
atributos e métodos que todas as _classes_ de jogadores devem compartilhar:

**Atributos:**

- `name`: O nome do jogador.
- `guesses`: O histórico de palpites do jogador.

**Métodos:**

- `makeGuess()`: Retorna o palpite do jogador. É um método abstrato.
- `getName()`: Retorna o nome do jogador.
- `getGuesses()`: Retorna o histórico de palpites do jogador.

#### `HumanPlayer` e `ComputerPlayer` (herdam de `Player`)

**Propósito:** Representam os jogadores _Humano_ e _Computador_,
respectivamente.

**Métodos:**

- `makeGuess()`: Método que cada classe que herda de `Player` deve implementar.

**Relações:**

- A classe `GuessTheNumberGame` interage com as classes `HumanPlayer` e
  `ComputerPlayer` para gerenciar o jogo.
- Tanto a classe `HumanPlayer` como `Computer Player` são subclasses de
  `Player`, o que implica que herdam todas as suas propriedades e métodos, mas
  também têm algumas características adicionais próprias.

Este design de classes permite separar as responsabilidades, facilitando a
manutenção e possíveis extensões do jogo no futuro.

Por exemplo, poderíamos adicionar diferentes jogadores "máquina" com diferentes
estratégias para o palpite automático, um novo tipo de jogador "remoto" ou até
diferentes níveis de dificuldade.

## 3. Considerações Técnicas

- O jogo será realizado no terminal usando Java.
- A lógica do jogo será baseada em estruturas de controle, incluindo loops,
  condicionais e coleções.
- É necessário dividir o código e melhorar sua legibilidade e manutenção.
- Deve-se utilizar uma funcionalidade da biblioteca de utilidades do Java para
  a geração de números aleatórios.
- Devem ser realizados **testes unitários** para suas classes e métodos
  utilizando JUnit e simulação de geração de números aleatórios com Mockito.

## 4. Marcos do projeto

Não trabalhe como se fosse uma fábrica fazendo uma classe inteira e depois
outra. O risco de trabalhar assim é que você terá muitas partes sem nenhuma ou
com meia funcionalidade e aprenderá pouco; não faça o contrário também, muitas
funcionalidades no console, mas sem uma finalização que possa ser utilizada por
um usuário não desenvolvedor.

A metáfora a seguir pode ajudá-lo a entender melhor a ideia.

![MARCOS](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/marcos.png?alt=media)

Estas etapas, desde o skate até o carro, são o que chamaremos de "Marcos".

Estes marcos são pequenas tarefas a serem implementadas, então evite trabalhar
como uma fábrica e você poderá aprender um pouco de cada coisa, agregando valor
para o seu usuário ao finalizar cada marco.

A seguir, deixamos alguns marcos como sugestão para você construir seu projeto.

### 4.1 Marco 1 - Configuração do ambiente de trabalho

Você deve configurar seu ambiente de trabalho, ou seja:

- Baixar a versão escolhida do Java e instalá-la em seu computador. Hoje, em
  outubro e novembro de 2023, recomendamos a versão 21, pois é a versão mais
  compatível com a IDE IntelliJ.
- Instalar seu IDE (recomendamos usar [IntelliJ Community
  Edition](https://www.jetbrains.com/idea/download/), em casos extremos de
  recursos computacionais, pode-se utilizar o VSCode).

#### Conteúdos que podem ajudá-lo na configuração do ambiente

- [Tutoriais para a preparação do ambiente
  Java](https://github.com/Laboratoria/java-setup)
- [Como instalar o
  Java?](https://www.java.com/pt-BR/download/help/download_options_pt-br.html)
- [Instalar IntelliJ
  IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Guia passo a passo para instalar Intellij Idea no
  Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

### 4.2 Marco 2 - Primeiros passos com a linguagem

Crie a primeira classe do projeto que contém o método main. Você pode adicionar
um comando que exiba "Olá, mundo!" no console. Assim, você poderá verificar se
suas configurações estão corretas. Além disso, você pode estudar conceitos da
linguagem como:

- O que são classes e como construí-las?
- O que são métodos e como utilizá-los?
- Quais tipos de dados existem na linguagem? (Lembre-se dos que mais usou em
  JavaScript e tente encontrar tipos semelhantes).
- Como criar um array usando Java?
- O que são modificadores de acesso como: `public`, `private`, `protected`?
- O que são métodos construtores? Como fazê-los?
- O que é encapsulamento? Como fazê-lo?
- O que é herança? Como criá-la em Java?

Lembre-se também de usar conteúdos práticos para entender esses conceitos. Não
passe muito tempo apenas lendo ou assistindo vídeos! Crie códigos! Tente, erre,
tente novamente, etc.

#### Conteúdos que podem ajudá-lo nos primeiros passos com o Java

- [Learn the Basics of Java
  Programming](https://www.freecodecamp.org/news/learn-the-basics-of-java-programming/)
- [Programación Orientada a Objetos com
  Java](https://www.freecodecamp.org/news/object-oriented-programming-concepts-java/)
- [Java Basic Syntax](https://www.geeksforgeeks.org/java-basic-syntax/)
- [Java Data Types And Variables – Explained for
  Beginners](https://www.freecodecamp.org/news/java-data-types-and-variables/)
- [Learn Java](https://www.w3schools.com/java/default.asp)
- [Java Classes and Objects](https://www.w3schools.com/java/java_classes.asp)
- [Java Methods](https://www.w3schools.com/java/java_methods.asp)

### 4.3 Etapa 3 - Compreensão do Diagrama de Classes

Deixamos um [Diagrama de Classes](#diagrama-de-clases) para que sirva de base
para construir seu projeto. Mas é necessário compreender o que significa antes
de começar a desenvolver o que será seu projeto. Nesta etapa, você pode
compreender o que este diagrama está representando.

#### Conteúdos que podem ajudar na compreensão do Diagrama de Classes

- [O que são Diagramas de
  Classe?](https://diagramasuml.com/diagrama-de-clases/)

### 4.4 Etapa 4 - Iniciando o jogo

Nesta etapa, você pode criar o jogo para um único jogador.

Comece criando as classes que representam a jogadora humana. Em seguida,
escolha o número alvo, que deve ser um número aleatório entre 1 e 100, e
finalmente, crie a lógica para verificar se o número da jogadora é menor ou
maior que o valor alvo. Mostre no terminal se é um valor alto ou baixo.

#### Conteúdos que podem ajudar a iniciar o jogo

- [Java: Como ler e apresentar dados com os comandos de entrada e
  saída](https://www.programarya.com/Cursos/Java/Entrada-de-dados)
- [Scanner em Java](https://www.baeldung.com/java-scanner)
- [Entrada de Dados do Usuário em
  Java](https://www.w3schools.com/java/java_user_input.asp)
- [Número Aleatório](https://www.baeldung.com/java-17-random-number-generators)

### 4.5 Etapa 5 - Adicionando mais jogadoras

Nesta etapa, você pode adicionar outra jogadora ao jogo.

Comece criando as classes que representam a segunda jogadora, que poderia ser o
computador. Desenvolva a lógica para alternar entre as jogadoras. Finalmente,
adicione informações adicionais quando alguma jogadora ganhar o jogo. Você pode
mostrar a quantidade de tentativas e quais foram as tentativas da jogadora.

### 4.6 Etapa 6 - Configuração para a construção de testes unitários

Nesta etapa, configure as bibliotecas JUnit5 e Mockito no seu IDE para que você
possa criar testes unitários.

Recomendamos que use as bibliotecas presentes no repositório Maven:

- org.junit.jupiter:junit-jupiter
- org.mockito:mockito-core

#### Conteúdos que podem ajudar a adicionar dependências de teste

- [Adicionar JUnit5 no
  IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testando Java com
  VSCode](https://code.visualstudio.com/docs/java/java-testing)

### 4.7 Etapa 7 - Criação de testes unitários

Crie os testes unitários para o seu projeto. Certifique-se de cobrir com testes
a lógica do seu jogo baseando-se em comportamentos. Por exemplo, crie testes
que:

- Simulem que o número da jogadora é maior que o número alvo.
- Simulem que o número da jogadora é menor que o número alvo.
- Simulem que o número é o mesmo número alvo.

#### Conteúdos que podem ajudar a criar testes unitários

- [Qualidade e JUnit: Introdução à automação de testes unitários no seu
  software Java no dia a dia](https://www.tutorialspoint.com/junit/index.htm)
- [Tutorial de
  Mockito](https://www.digitalocean.com/community/tutorials/mockito-tutorial)

### 4.8 Etapa 8 (Edição Hacker) - Criação de uma "inteligência" para jogar contra o computador

Nesta etapa, que consideramos como Edição Hacker, você pode criar uma lógica
para que os números da segunda jogadora, quando você está jogando contra o
computador, sejam mais inteligentes. Esses números podem considerar a
informação sobre se o número é alto ou baixo em relação ao número alvo,
tornando o jogo mais emocionante.

## 5. Recomendações

**Documentação Java**: A documentação oficial do Java é uma excelente fonte de
informação sobre as classes e métodos disponíveis em Java (recomendamos usar
Java 21).

**Desenho da Estrutura do Jogo**: Antes de começar a escrever código, considere
como você quer que o jogo funcione. Pense em como alternar os turnos entre a
jogadora e o computador, como gerar e avaliar as suposições, e como mostrar
informações à jogadora. Tire um momento para analisar e desenhar sua solução
antes de começar a implementá-la.

**Separação de Responsabilidades**: Recomendamos seguir o diagrama de classes
fornecido para obter uma clara separação da lógica do jogo em componentes ou
classes que permitam manter o código organizado e legível.

**Você vai precisar de Loops e Condições**: Os loops e as declarações
condicionais serão seus aliados neste projeto para controlar os turnos, avaliar
as suposições e determinar o vencedor.

**Manipulação de Números Aleatórios**: Utilize a classe `Random` de `java.util`
para gerar o número aleatório secreto. Você pode encontrar informações sobre
como usá-la na documentação do Java.

**Testes Unitários**: À medida que desenvolve o jogo, tente escrever testes
unitários para verificar que as diferentes partes do jogo funcionam como
esperado. Você pode usar o framework JUnit para escrever seus testes.

Lembre-se de que este projeto foi projetado para que você aplique seu
conhecimento prévio em JavaScript, "traduzindo-o" para Java, e aprenda o
paradigma de programação orientada a objetos no processo.
