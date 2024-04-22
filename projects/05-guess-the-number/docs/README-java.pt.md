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

>[!TIP]
> Considere a criação de um branch para o desenvolvimento de cada marco.
> Criar ramificações para cada marco ajudará você a ter um
> desenvolvimento mais organizado, flexível e eficiente.

### Marco 1 - Configuração do ambiente de trabalho

Você deve configurar seu ambiente de trabalho, ou seja:

- Baixar a versão escolhida do Java e instalá-la em seu computador. Hoje, em
  outubro e novembro de 2023, recomendamos a versão 21, pois é a versão mais
  compatível com a IDE IntelliJ.
- Instalar seu IDE (recomendamos usar [IntelliJ Community
  Edition](https://www.jetbrains.com/idea/download/), em casos extremos de
  recursos computacionais, pode-se utilizar o VSCode).

🛠️ Recursos úteis:

- [Tutoriais para a preparação do ambiente
  Java](https://github.com/Laboratoria/java-setup)
- [Como instalar o
  Java?](https://www.java.com/pt-BR/download/help/download_options_pt-br.html)
- [Instalar IntelliJ
  IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Guia passo a passo para instalar Intellij Idea no
  Mac](https://www.geeksforgeeks.org/step-by-step-guide-to-install-intellij-idea)

>[!TIP]
> Para verificar o correto funcionamento das suas instalações,
> sugerimos que você crie a primeira classe do projeto que inclua o método principal.
> Adicione um comando que imprima "Olá, mundo!" no console.
> Isso permitirá que você confirme a configuração adequada de suas configurações.

### Marco 2 - Compreensão do Diagrama de Classes

Nós fornecemos a você um [diagrama de classes](#diagrama-de-classes)
como ponto de partida para a construção do seu projeto.
Use esta [documentação](https://diagramasuml.com/diagrama-de-clases/)
entender o diagrama, pois é essencial entender seu
significado antes de iniciar o desenvolvimento do projeto.

Neste marco, é crucial compreender a representação do
diagrama. Você pode confiar nas seguintes perguntas para
valide sua compreensão:

- O que é uma aula?
- Você identifica os atributos e métodos de cada classe?
- Com base nos atributos e parâmetros de cada método,
Você consegue identificar os tipos de dados de cada um?
- Que tipo de relacionamento a classe `Player` tem com `HumanPlayer`?
- Você identifica os diferentes modificadores de acesso relacionados
 atribuir símbolos de visibilidade de métodos?
- Como um construtor é definido e usado em Java?
- O que é encapsulamento e como fazer?
Você se inscreveria nas classes de diagrama?
- Examine o diagrama UML, você consegue identificar
e explicar os diferentes tipos de relacionamento
entre aulas (como composição,
associação, herança, etc.)? e
Como esses relacionamentos são representados no código Java?

>[!NOTE]
>É normal que, neste momento, você não sinta
> confiante em responder às perguntas acima.
> Nos próximos marcos abordaremos cada uma das aulas, e
> à medida que você avança, encorajamos você a encontrar maiores
> conexão entre o que você está construindo e o diagrama de classes.

### Marco 3 - Crie e estruture seu projeto

É crucial que neste ponto você crie seu projeto
e desenvolver as primeiras aulas
`GuessTheNumberGame`, `Player` e `HumanPlayer`
do jogo de acordo com o diagrama de classes
fornecidos, pois serão os primeiros
classes que você deve usar para testes
no seu projecto. Cada classe deve definir
cuidadosamente seus atributos e métodos,
respeitando a configuração de visibilidade adequada,
conforme explicado neste link sobre
[modificadores de acesso em Java](https://www.simplilearn.com/tutorials/java-tutorial/access-modifiers#:~:text=Access%20modifiers%20in%20Java%20allow,control%20access%20from%20other%20classes.).

🛠️ Recursos úteis:

- [Criar projeto com IntelliJ](https://drive.google.com/file/d/1xGL7mPTrvqwSCzbKyfjyUyK42RC1LbEh/view?usp=sharing)
- [Criar projeto com VScode](https://drive.google.com/file/d/1TORaOzmnJ3kJd-4qtP9FmamFK3FGVlwj/view?usp=sharing)

Por enquanto nada vai funcionar, mas vá passo a passo até resolver o problema.
problema. Não tente correr antes de rastejar.

### Marco 4 - Iniciando o jogo

Comece com a classe padrão do projeto,
`GuessTheNumberGame`. Esta aula requer dois
atributos
`random` e `targetNumber`. `targetNumber`
deve ser do tipo primitivo [int](https://www.geeksforgeeks.org/data-types-in-java/).

É essencial notar que o atributo `random`
É um tipo especial de referência. Para
gerencie isso, é importante
[java.util.Random](https://www.geeksforgeeks.org/java-util-random-nextint-java/).
Ao trabalhar com tipos de referência, especialmente tipos externos
primitivas, talvez seja necessário fazer importações adicionais.

Agora, na mesma classe `GuessTheNumberGame`,
concentre-se em obter o número inserido pelo
jogadora usando seu próprio método `makeGuess`
classe `HumanPlayer`. Para conseguir isso, referência e
assuntos de aula
[java.util.Scanner](https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html).
Em seguida, compare o número inserido
pelo jogador com o número a ser adivinhado,
`targetNumber`. Use o método `checkGuess`
avaliar o resultado e, com base nele,
indica se o número também é muito alto
baixo ou se ele estava certo.

Observe que você deve montar cada unidade.
as suposições do jogador
atribuir `guesses`. Para fazer isso, não se aprofunda
diferenças entre
[matrizes](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) e
[ArrayLists](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html).

🛠️ Recursos úteis:

- [Java: como ler e apresentar dados com comandos de entrada e saída](https://www.programarya.com/Cursos/Java/Entrada-de-datos)
- [Java Scanner](https://www.baeldung.com/java-scanner)
- [Java User Input](https://www.w3schools.com/java/java_user_input.asp)
- [Número Aleatório](https://www.baeldung.com/java-17-random-number-generators)

>[!IMPORTANT]
> Neste momento, o jogador pode propor um número,
> e ao fazer isso, o jogo termina. O objetivo a ter em mente
> conta é implementar a possibilidade de que você possa
> continue jogando até adivinhar o número.

### Marco 5 - Adicionando mais jogadoras

Neste marco, você adicionará um novo jogador ao
jogo criando a classe `ComputerPlayer`.

1. `makeGuess()` em `ComputerPlayer`:
Permite ao computador ou oponente virtual
faça um palpite aleatório. Use a classe
Aleatório para gerar números aleatórios. Tenha certeza de
armazenar cada suposição no histórico de suposições
(`guesses`) do novo jogador.

2. Atualize a lógica do jogo em `GuessTheNumberGame`:
A lógica do jogo precisa ser atualizada na aula
`GuessTheNumberGame` para que você possa interagir com o novo
jogador e ambas as classes.
Adicione instâncias dos jogadores. Na classe `GuessTheNumberGame`,
definir e inicializar
[instâncias](https://es.stackoverflow.com/questions/7576/qu%C3%A9-es-una-instancia-en-poo)
de `HumanPlayer` e `ComputerPlayer`. Além do mais,
modifique o método `checkGuess (Player player)` para chamar
o método `makeGuess()` correspondente ao jogador passado como
argumento. Em seguida, compare a estimativa com o número alvo
e fornece o resultado apropriado.

### Marco 6 - Configuração para a construção de testes unitários

Nesta etapa, configure as bibliotecas JUnit5 e Mockito no seu IDE para que você
possa criar testes unitários.

Recomendamos que use as bibliotecas presentes no repositório Maven:

- org.junit.jupiter:junit-jupiter
- org.mockito:mockito-core

🛠️ Recursos úteis:

- [Adicionar JUnit5 en IntelliJ](https://www.jetbrains.com/help/idea/junit.html#intellij)
- [Testing Java with VSCode](https://code.visualstudio.com/docs/java/java-testing)

### Marco 7 - Criação de testes unitários

Crie os testes unitários para o seu projeto. Certifique-se de cobrir com testes
a lógica do seu jogo baseando-se em comportamentos. Por exemplo, crie testes
que:

- Simulem que o número da jogadora é maior que o número alvo.
- Simulem que o número da jogadora é menor que o número alvo.
- Simulem que o número é o mesmo número alvo.

🛠️ Recursos úteis:

- [Qualidade e JUnit: Introdução à automação de testes unitários no seu
  software Java no dia a dia](https://www.tutorialspoint.com/junit/index.htm)
- [Tutorial de
  Mockito](https://www.digitalocean.com/community/tutorials/mockito-tutorial)
- [JUnit5 en VSCode](https://drive.google.com/file/d/1QL9nz4fZPK3OxNJUCME4OYSwWF_pWZ04/view?usp=sharing)
- [Mockito en VSCode](https://drive.google.com/file/d/16B0Sg0RUYSvp2_Drh_I6Q2-be3wLFTcs/view?usp=sharing)
- [JUnit5 en IntelliJ](https://drive.google.com/file/d/1opSSwWxog7voh2TO8skFsXxXqRYfi8S9/view?usp=sharing)
- [Mockito en IntelliJ](https://drive.google.com/file/d/1GYP6Q4X8dkaxGbeQF4sLW5W2BkeHph2q/view?usp=sharing)

### 4.8 Etapa 8 (Edição Hacker) - Criação de uma "inteligência" para jogar contra o computador

Neste marco, que consideramos como Hacker Edition,
você pode criar a lógica
de modo que o número do segundo jogador, quando
você está jogando contra o computador,
seja mais inteligente. Esses números podem
aproveite as informações
sobre se a suposição anterior era alta ou baixa
em relação ao número
objetivo, gerando assim um jogo mais emocionante.

1. Crie a classe `SmartComputerPlayer` que
[estender](https://www.w3schools.com/java/ref_keyword_extends.asp) do `Player`.

2. Na classe `SmartComputerPlayer`,
substituir
([@Override](https://www.geeksforgeeks.org/overriding-in-java/))
o método `makeGuess()` herdado de `Player`
e adicione propriedades
extras como `min` e `max` para ajustar
intervalo de pesquisa dinamicamente
do número aleatório a ser gerado.
Este método usará as informações
na suposição anterior para
fazer estimativas mais precisas e
estratégico. Caso o último
suposição foi muito alta,
`makeGuess()` reduzirá o limite superior
do intervalo de pesquisa até o valor do último
suposição menos um.

3. Atualize o método `checkGuess(Player player)`
na classe `GuessTheNumberGame`. Quando
jogador seja o computador, modifique a chamada
para o método `makeGuess()` de `SmartComputerPlayer`.

4. Certifique-se de fornecer as informações
necessário na suposição antes de
função `makeGuess()` de `SmartComputerPlayer`, para que a estratégia
suposição é baseada em dados históricos e melhora
a inteligência do jogo.

5. Execute testes de unidade para `SmartComputerPlayer`,
garantindo que seu comportamento funcione conforme planejado
espere em diferentes cenários de jogo:
    1. **Teste de limite superior e inferior**:
    Verifique se `makeGuess()` gera
    corretamente uma suposição dentro do
    faixa esperada, tanto no limite
    limite superior e inferior
    do intervalo de pesquisa.
    2. **Teste de suposição consecutiva**:
    Faça várias suposições consecutivas e
    verifique se `makeGuess()` define o
    limites de intervalo de pesquisa corretamente
    Com base nas suposições acima,
    manter uma estratégia coerente.
    3. **Teste de comportamento aleatório**:
    Faça suposições aleatórias e verifique
    que `makeGuess()` responda corretamente,
    mantendo o comportamento estratégico
    independentemente da sequência de suposições.

Com estas etapas, a classe `SmartComputerPlayer`
estará instalado e funcionando, permitindo que o
jogadora de computador feminina gera estimativas
mais inteligente e mais estratégico durante o jogo.

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

## 6. Dicas / Sugestões

Confira o [FAQ](./FAQ-java.md) e participe do canal do Slack
[#project-guess-the-number](https://claseslaboratoria.slack.com/archives/C067E8ZT9CY)
para conversar e pedir ajuda sobre o projeto.
