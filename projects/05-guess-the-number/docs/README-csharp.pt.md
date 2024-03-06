
# C# 💻

## 1. Preâmbulo

No coração da programação moderna, C# se estabelece como um pilar fundamental,
combinando poder, elegância e versatilidade. Projetado pela Microsoft como parte
da sua plataforma .NET, C# evoluiu para ser muito mais que a linguagem de
escolha para aplicações Windows; tornou-se uma ferramenta indispensável
para desenvolver aplicações web, móveis e de desktop em um amplo espectro
de domínios. O projeto "Adivinhe o Número", não é apenas uma apresentação
do universo C#, é também um guia pelos princípios essenciais da
programação orientada a objetos e o manuseio dos princípios básicos desta
linguagem. Prepare-se para embarcar em uma aventura que te levará desde os
fundamentos até os aspectos mais interessantes da programação em C#, tudo isso
enquanto constrói um jogo que desafiará sua criatividade.

## 2. Considerações Gerais

Antes de mergulharmos no código e na lógica por trás de "Adivinhe o Número",
é crucial estabelecer algumas considerações gerais para garantir uma
experiência de aprendizado fluida e eficaz:

- **Conhecimentos prévios**:
  Embora este projeto seja direcionado a iniciantes em C#,
  é recomendável ter uma compreensão básica de conceitos de programação como variáveis,
  loops e condições. Isso facilitará o acompanhamento das explicações
  e a implementação do jogo.

- **Experimentação ativa**:
  Encorajamos você a se aventurar no código além
  das instruções e exemplos fornecidos. Modificar e brincar com o código
  é uma das melhores maneiras de aprender e consolidar suas habilidades de programação.

- **Paciência e persistência**:
  **_O tempo estimado para desenvolver este projeto é de 2 sprints_**.
  É normal enfrentar erros e desafios.
  Tome seu tempo, pratique e não hesite em buscar ajuda quando necessário.

## 3. Considerações Técnicas

Para garantir o sucesso deste projeto, é importante prestar atenção
às seguintes considerações técnicas:

- **Versão do .NET**: Este projeto é baseado no .NET 5.0 ou superior.
  Certifique-se de ter instalada a versão correta do SDK do .NET para poder
  compilar e executar o jogo sem problemas.

- **Estrutura do projeto**: O projeto "Adivinhe o Número" é organizado em uma
  estrutura de projeto simples, com uma classe principal que contém
  o fluxo lógico do jogo. Familiarizar-se com a estrutura do projeto
  te ajudará a entender melhor como o código
   funciona e como você pode expandi-lo ou modificá-lo.

- **Documentação e Comentários**: Mantenha seu código bem documentado
  e comente as seções complexas ou importantes.
  Isso não só ajudará a você e a outros a entender o código,
  mas também é uma prática recomendada no desenvolvimento de software.

- **Outros aspectos importantes**:

  + _Ambiente_: Seu projeto deve poder ser executado a partir do terminal
    (_comece criando um projeto de console_).

  + _Organização_: Seu código deve estar dividido para facilitar a manutenção.

  + _Aleatoriedade_: Você deve usar `new Random()` para gerar números aleatórios.

  + _Testes Unitários_: Você deve realizar testes unitários para validar suas funções.

## 4. Marcos do Projeto

Para tornar este processo de aprendizado mais gerenciável e gratificante,
dividimos o projeto em marcos claramente definidos.
Cada marco representa um passo crucial na construção do jogo,
permitindo que você se concentre em tarefas específicas,
compreenda melhor cada componente do projeto e,
o mais importante, celebre seus sucessos à medida que avança.

Estes marcos são projetados não apenas para guiá-lo através do desenvolvimento
do jogo, mas também para fornecer oportunidades de experimentação
e personalização. A seguir, apresentaremos cada marco,
explicando seu objetivo, os conceitos chave que abrangidos e
sugestões para explorar além dos requisitos básicos.

Encorajamos você a explorar estes marcos com curiosidade e criatividade,
adaptando o projeto aos seus interesses e
desafiando-se a aprender mais a cada etapa.

### Marco 1: Configuração do Ambiente de Desenvolvimento

#### Objetivos

- Instalar o SDK do .NET e um IDE (Visual Studio Code ou Visual Studio).
- Familiarizar-se com o ambiente de desenvolvimento e as ferramentas básicas.
- Criar um projeto de console em C# e executar um programa simples ("Olá Mundo").

#### Recursos

- Guias para iniciar:

  + [Tutorial: Criação de uma aplicação de console .NET com Visual Studio Code](https://learn.microsoft.com/pt-br/dotnet/core/tutorials/with-visual-studio-code?pivots=dotnet-8-0)
  + [Tutorial de .NET: Olá mundo em 5 minutos](https://dotnet.microsoft.com/pt-br/learn/dotnet/hello-world-tutorial/intro)

### Marco 2: Estruturas de Controle e Entrada/Saída

#### Objetivos

- Familiarizar-se com as estruturas de controle básicas em C#
(`if`, `else`, `while`, `for`).
- Aprender a ler a entrada do usuário e exibir mensagens no console.

#### Desafio

Desenvolver um programa que solicite ao usuário adivinhar um número fixo,
indicando depois se sua escolha é correta, muito alta ou muito baixa.

Para isso, seu projeto deve contar com 2 classes: `Program` e `Game`
(lembre-se de que as classes devem estar em 2 arquivos distintos),
a classe `Game` implementará um método com as seguintes responsabilidades:

  1. Gerar um número aleatório entre 1 e 100.
  2. Implementar um loop que solicite ao jogador que adivinhe o número.
  3. Comparar a entrada do jogador com o número secreto.
    Se o jogador adivinhar corretamente, termina o jogo.
    Se o jogador não adivinhar o número, fornece uma dica sobre se o número
    secreto é maior ou menor que a entrada do jogador.

A classe `Program` será responsável por dar as boas-vindas ao jogador e inicializar
o jogo (_executar alguma função da classe `Game`_).

#### Recursos

- Documentação sobre estruturas de controle em C#:

  + [Declarações de Seleção](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/statements/selection-statements)
  + [Gerar números aleatórios com C#](https://learn.microsoft.com/pt-br/dotnet/api/system.random.next?view=net-8.0)

- Tutoriais sobre como usar `Console.ReadLine()` e `Console.WriteLine()`
 para entrada/saída de dados:

  + [Método Console.ReadLine](https://learn.microsoft.com/pt-br/dotnet/api/system.console.readline?view=net-8.0)
  + [Método Console.WriteLine](https://learn.microsoft.com/pt-br/dotnet/api/system.console.writeline?view=net-8.0)

#### Para aprofundar

- Operadores de comparação: [Operadores de Comparação](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/operators/comparison-operators)
- Converter para número: [Convert.ToInt32](https://learn.microsoft.com/pt-br/dotnet/api/system.convert.toint32?view=net-8.0)

### Marco 3: Classes e Objetos

#### Objetivos

- Compreender e aplicar o uso de classes e objetos em C#.
- Introduzir o conceito de campos (atributos) e métodos em uma classe.

#### Desafio

Desenvolver classes em C# que encapsulem a funcionalidade requerida para jogar.
Você deve adicionar uma classe extra ao que já conseguiu até este ponto.
Seu projeto deve incluir:

Uma classe `Player`, que deve encapsular as características e ações que um
jogador pode realizar durante um jogo.

- Características da classe Player:

  1. Propriedade que armazena o nome.
  2. Propriedade que armazena a última tentativa feita pelo jogador.
  3. Construtor que inicializa a última tentativa em zero e o nome de acordo
     com o valor com que foi instanciado.
  4. Método responsável por fazer a previsão (`MakeGuess()`)
     solicitando um número pelo terminal e validando se está correto.

Uma classe `Game` que gerencie a lógica do jogo,
como iniciar um novo jogo, gerar o número secreto e determinar
o resultado das tentativas do jogador.

- Características da classe Game:

  1. Propriedade que armazena um número aleatório.
  2. Propriedade que armazena uma instância de Jogador (propriedade do tipo `Player`).
  3. Construtor que inicializa seu número aleatório e
     cria um novo objeto do tipo Player. Este construtor é inicializado
     com um nome, que depois será utilizado para o construtor de `Player`.
  4. Ao método existente, adiciona-se a responsabilidade de instanciar o
     comportamento do jogador,
     (ou seja, de executar a função `Player.MakeGuess()`),
     caso ele não consiga adivinhar o número na sua última tentativa.
     Se o jogador conseguir adivinhar, finaliza o jogo.

Sua classe `Program` mantém a responsabilidade de inicializar o jogo,
ou seja, dentro do seu método `Main` você deve instanciar a classe
`Game` e executar seu método para iniciar o jogo.

#### Recursos

- Documentação sobre classes e objetos em C#:

  + [Classes e Objetos em C#](https://learn.microsoft.com/pt-br/dotnet/csharp/fundamentals/tutorials/classes)

#### Para aprofundar

- Modificadores de acesso: [Modificadores de Acesso](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/keywords/access-modifiers)
- Interpolação de strings: [Interpolação de Strings](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/tokens/interpolated)

### Marco 4: Encapsulamento e Métodos de Classe

#### Objetivos

- Aplicar o princípio do encapsulamento
para proteger o estado interno da classe `Game`.
- Criar métodos específicos para manusear as funcionalidades do jogo.

#### Desafio

Refatorar o código do jogo para que sua lógica interna
esteja oculta e acessível apenas através de métodos públicos da classe `Game`.

- Características da classe Game:

  1. Suas propriedades agora devem ser privadas.
  2. Adicione um método privado que nos permitirá gerar um número aleatório (`RandomNumberGenerator()`).
  3. Adicione um método privado que nos permitirá validar a previsão
     (`CheckGuess(int guess, int targetNumber)`).
  4. Agora os únicos métodos públicos são o construtor e
     o método para iniciar o jogo.

- Características da classe Player:

  1. A propriedade que armazena a última tentativa agora é privada.
  2. A propriedade de Nome é pública.
  3. Adicionaremos um método público que
  nos permita consultar a última tentativa (`GetLastGuess()`).
  4. O método construtor e o responsável por gerenciar a lógica para fazer a
  previsão (`MakeGuess()`) devem ser públicos.

#### Recursos

- Guias sobre encapsulamento e acesso aos membros de uma classe em C#
  + [accessibility levels](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/keywords/restrictions-on-using-accessibility-levels)

### Marco 5: Herança e Polimorfismo

#### Objetivos

- Explorar a herança como meio de estender ou modificar
a funcionalidade das classes existentes.
- Compreender o polimorfismo e como ele pode ser implementado em C#.

#### Desafio

Transformar a classe `Player` em uma classe abstrata e criar as classes
`AIPlayer` e `HumanPlayer`
(derivadas) para representar diferentes tipos de jogadores, implementando
a lógica de adivinhação específica para cada tipo por meio de herança e polimorfismo.

- Características da classe Player:

1. Agora é uma classe abstrata.
2. As propriedades são públicas.
3. Adiciona uma propriedade do tipo `List`
para armazenar as tentativas realizadas.
4. O construtor é `protected`, recebe um nome como parâmetro,
além de inicializar a lista.
5. O método de adivinhação (`MakeGuess()`) agora é abstrato.

- Características da classe AIPlayer:

1. Implementa a classe abstrata `Player`.
2. Propriedade privada que permite gerar um número aleatório.
3. Implementação do método de adivinhação (`MakeGuess()`)
que retorna um número aleatório.

- Características da classe HumanPlayer:

1. Implementa a classe abstrata `Player`.
2. Implementação do método de adivinhação (`MakeGuess()`)
que solicita um número ao usuário.

- Características da classe Game:

1. Agora possui 2 novas propriedades: `_humanPlayer` e `_AIPlayer` do tipo `Player`.
2. Seu construtor inicializa essas novas variáveis além do número aleatório.
3. O método para iniciar o jogo agora também gerencia
os turnos, permitindo o turno do jogador e mostrando
a adivinhação feita pelo computador
(`_AIPlayer.MakeGuess()`).

#### Recursos

- Herança em C#: [Herança em C#](https://learn.microsoft.com/pt-br/dotnet/csharp/fundamentals/object-oriented/inheritance)
- Polimorfismo em C#: [Polimorfismo em C#](https://learn.microsoft.com/pt-br/dotnet/csharp/fundamentals/object-oriented/polymorphism)

#### Para aprofundar

- Listas e arrays em C#: [Trabalhando com listas e arrays em C#](https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/tutorials/arrays-and-collections)
- Listas [arrays and collections](https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/tutorials/arrays-and-collections)
- Ciclos [declarações de iteração](https://learn.microsoft.com/pt-br/dotnet/csharp/language-reference/statements/iteration-statements)

### Diagrama de Classes do Projeto "Adivinhe o Número"

O projeto é estruturado em torno das seguintes classes principais,
com as seguintes responsabilidades e relações:

#### Classes

##### Game

- **Responsabilidades**:

  + Iniciar o jogo.
  + Gerar e manter o número secreto a ser adivinhado.
  + Controlar o fluxo do jogo, alternando turnos entre os jogadores.

- **Relações**:

  + Associação com `Player` (incluindo `HumanPlayer` e `AIPlayer`).

##### Player (abstrata)

- **Responsabilidades**:

  + Definir uma interface comum para todos os jogadores.
  + Manter o nome e o histórico de palpites do jogador.

- **Relações**:

  + Superclasse de `HumanPlayer` e `AIPlayer`.

##### HumanPlayer

- **Responsabilidades**:

  + Permitir ao usuário fazer suposições inserindo números.

- **Relações**:

  + Herda de `Player`.

##### AIPlayer

- **Responsabilidades**:

  + Gerar suposições automaticamente (simulando uma IA básica).

- **Relações**:

  + Herda de `Player`.

#### Relações

- `Game` tem duas instâncias de `Player`:
uma para o jogador humano e outra para a IA, demonstrando uma relação de associação/composição.
- `Player` é uma classe abstrata que define a estrutura e comportamento
comuns para todos os jogadores, com `HumanPlayer` e `AIPlayer`
especializando esta definição por meio de herança.

Este design fornece uma clara separação de responsabilidades
entre a gestão do jogo e a lógica específica do jogador,
facilitando a extensão e manutenção do código.

![Diagrama de Clases](https://raw.githubusercontent.com/Laboratoria/curriculum/bccce863b4bca2aac6cad8548866ed8697553c94/projects/05-guess-the-number/docs/classDiagramRelation.png)

### Marco 6: Implementação de Testes Unitários

#### Objetivos

- Implementar testes unitários com MSTest para validar
a lógica e o funcionamento do jogo.
- Assegurar a qualidade do software por meio da detecção
precoce de erros e comportamentos inesperados.

#### Desafio

Criar uma suíte (conjunto) de testes unitários que cubra os diferentes
componentes e funcionalidades do jogo,
incluindo a geração do número secreto,
a validação de entradas do usuário,
e a lógica do jogo para determinar vitórias e derrotas.

#### Recursos

- Introdução ao MSTest e testes unitários em .NET:

  + [Testes unitários em C# com MSTest e .NET Core](https://learn.microsoft.com/pt-br/dotnet/core/testing/unit-testing-with-mstest)
  + [MSTest - Microsoft Test Framework](https://learn.microsoft.com/pt-br/dotnet/api/microsoft.visualstudio.testtools.unittesting?view=mstest-net-1.2.0)

- Tutoriais e guias sobre como escrever testes unitários eficazes:

  + [Melhores práticas de testes unitários](https://learn.microsoft.com/pt-br/dotnet/core/testing/unit-testing-best-practices)
