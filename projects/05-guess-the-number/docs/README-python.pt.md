# Python 🐍
# Adivinhe o Número

## Índice# Python 🐍
# Adivinhe o Número

## Índice

- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Considerações Gerais](#2-considerações-gerais)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações Técnicas](#4-considerações-técnicas)
  - [4.1 Configurar o ambiente de desenvolvimento](#41-configurar-o-ambiente-de-desenvolvimento)
  - [4.2 Criar um script Python](#42-criar-um-script-python)
  - [4.3 Implementar o jogo](#43-implementar-o-jogo)
  - [4.4 Melhorar o jogo](#44-melhorar-o-jogo)
  - [4.5 Criar uma "inteligência" para jogar contra o computador (Edição Hacker)](#45-criar-uma-inteligência-para-jogar-contra-o-computador-edicao-hacker)
  - [4.6 Extensão: Versão Orientada a Objetos (OOP)](#46-extensão-versão-orientada-a-objetos-oop)

## 4. Considerações Técnicas

### 4.1 Configurar o ambiente de desenvolvimento

1. Instale Python 3.
2. Configura o teu editor ou IDE para usar Python 3.

#### Algumas referências sobre o tema

- [Visual Studio Code para Python](https://code.visualstudio.com/docs/languages/python)

### 4.2 Criar um script Python

A seguir, vais criar um script Python simples para te certificares de que a tua configuração funciona corretamente.

1. Cria um novo arquivo chamado `main.py`.
2. Executa `main.py`.

#### Referências

- [Como escrever e executar um script Python](https://entrenamiento-python-basico.readthedocs.io/es/3.7/leccion1/holamundo.html#ejecucion)

### 4.3 Implementar o jogo

Agora que tens um ambiente de desenvolvimento Python a funcionar, podes começar a implementar o jogo.

1. Gera um número aleatório entre 1 e 100. Podes usar a função `randint` no módulo `random` para fazer isso.
2. Implementa um loop que peça ao jogador para adivinhar o número. Usa a função `input` para obter a entrada do jogador.
3. Compara a entrada do jogador com o número secreto. Se o jogador adivinhar corretamente, termina o jogo. Se o jogador adivinhar incorretamente, fornece uma dica sobre se o número secreto é maior ou menor do que a entrada do jogador.
4. Implementa a lógica para a vez do computador. O computador pode fazer um palpite aleatório, ou podes implementar alguma estratégia para que os seus palpites sejam mais inteligentes.
5. Continua o jogo até que o jogador ou o computador adivinhe corretamente o número.
6. Adiciona testes unitários para o teu código. Python tem um módulo incorporado chamado `unittest` que podes usar para isso.

#### Referências

- [Geração de números aleatórios em Python](https://docs.python.org/3/library/random.html)
- [Loops em Python](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- [A função input em Python](https://docs.python.org/3/library/functions.html#input)
- [Comparisons in Python](https://docs.python.org/3/library/stdtypes.html#comparisons)
- [Testes unitários em Python com unittest](https://docs.python.org/4/library/unittest.html)

### 4.4 Melhorar o jogo

Uma vez que tenhas uma versão básica do jogo a funcionar, podes fazer melhorias.

1. Mantém um registo dos palpites do jogador e do computador. Quando o jogo terminar, mostra todos os palpites que o jogador vencedor fez.
2. Adiciona uma opção para jogar novamente. Quando o jogo terminar, pergunta ao jogador se quer jogar novamente.
3. Adiciona comentários ao teu código para explicar o que cada parte faz. Isto tornará o teu código mais fácil de entender e manter.

#### Referências

- [Manuseio de listas em Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Como escrever comentários em Python](https://www.w3schools.com/python/python_comments.asp)

### 4.5 Criar uma "inteligência" para jogar contra o computador (Edição Hacker)

Uma vez que tenhas implementado o jogo básico e feito algumas melhorias, podes levar as coisas ao próximo nível criando uma "inteligência" para jogar contra o computador. Esta "inteligência" poderia ser simplesmente outra implementação do jogo que utiliza uma estratégia diferente, ou poderia ser um algoritmo de aprendizagem automática que melhora com cada jogo que joga.

1. Implementa uma nova versão do jogo que utiliza uma estratégia diferente. Por exemplo, em vez de adivinhar aleatoriamente, esta versão poderia tentar adivinhar o número mais provável com base nos palpites anteriores.
2. Testa a tua nova "inteligência" jogando contra o computador. Consegues vencer o computador com a tua nova estratégia?
3. Se te sentires ambicioso, poderias tentar implementar um algoritmo de aprendizagem automática. Este algoritmo poderia aprender de cada jogo que joga, melhorando os seus palpites com cada jogo. Poderias usar uma biblioteca de aprendizagem automática como scikit-learn para fazer isso.
4. Certifica-te de adicionar testes unitários para a tua nova "inteligência". Também poderias querer adicionar algumas métricas para rastrear como o teu algoritmo melhora com cada jogo que joga.

#### Referências

- [Introdução ao scikit-learn](https://scikit-learn.org/stable/getting_started.html)
- [Como implementar um algoritmo de aprendizagem automática](https://machinelearningmastery.com/start-here/#algorithms)

### 4.6 Extensão: Versão Orientada a Objetos (OOP)

Uma vez que tenhas implementado e melhorado a versão básica do jogo, podes reescrever o jogo utilizando o paradigma da Programação Orientada a Objetos (OOP). Isto permitirá estruturar o teu código de uma maneira mais modular e reutilizável. Além disso, algumas ferramentas como ORMs que vais encontrar no mundo do Python, estão desenhadas para trabalhar com OOP.

1. Cria uma classe `Game` que represente uma instância do jogo. Esta classe pode ter métodos como `start`, `play_turn`, `check_guess`, e `end_game`.
2. Cria uma classe `Player` que represente um jogador. Esta classe pode ter atributos como `name` e `guesses`, e métodos como `make_guess`.
3. Cria uma subclasse `ComputerPlayer` que herde da classe `Player`. Esta classe pode sobrescrever o método `make_guess` para implementar a lógica de adivinhação do computador.
4. Na classe `Game`, usa instâncias das classes `Player` e `ComputerPlayer` para representar o jogador e o computador.
5. Adiciona testes unitários para as tuas classes


- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Considerações Gerais](#2-considerações-gerais)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações Técnicas](#4-considerações-técnicas)
  - [4.1 Configurar o ambiente de desenvolvimento](#41-configurar-o-ambiente-de-desenvolvimento)
  - [4.2 Criar um script Python](#42-criar-um-script-python)
  - [4.3 Implementar o jogo](#43-implementar-o-jogo)
  - [4.4 Melhorar o jogo](#44-melhorar-o-jogo)
  - [4.5 Criar uma "inteligência" para jogar contra o computador (Edição Hacker)](#45-criar-uma-inteligência-para-jogar-contra-o-computador-edicao-hacker)
  - [4.6 Extensão: Versão Orientada a Objetos (OOP)](#46-extensão-versão-orientada-a-objetos-oop)

## 4. Considerações Técnicas

### 4.1 Configurar o ambiente de desenvolvimento

1. Instale Python 3.
2. Configura o teu editor ou IDE para usar Python 3.

#### Algumas referências sobre o tema

- [Visual Studio Code para Python](https://code.visualstudio.com/docs/languages/python)

### 4.2 Criar um script Python

A seguir, vais criar um script Python simples para te certificares de que a tua configuração funciona corretamente.

1. Cria um novo arquivo chamado `main.py`.
2. Executa `main.py`.

#### Referências

- [Como escrever e executar um script Python](https://entrenamiento-python-basico.readthedocs.io/es/3.7/leccion1/holamundo.html#ejecucion)

### 4.3 Implementar o jogo

Agora que tens um ambiente de desenvolvimento Python a funcionar, podes começar a implementar o jogo.

1. Gera um número aleatório entre 1 e 100. Podes usar a função `randint` no módulo `random` para fazer isso.
2. Implementa um loop que peça ao jogador para adivinhar o número. Usa a função `input` para obter a entrada do jogador.
3. Compara a entrada do jogador com o número secreto. Se o jogador adivinhar corretamente, termina o jogo. Se o jogador adivinhar incorretamente, fornece uma dica sobre se o número secreto é maior ou menor do que a entrada do jogador.
4. Implementa a lógica para a vez do computador. O computador pode fazer um palpite aleatório, ou podes implementar alguma estratégia para que os seus palpites sejam mais inteligentes.
5. Continua o jogo até que o jogador ou o computador adivinhe corretamente o número.
6. Adiciona testes unitários para o teu código. Python tem um módulo incorporado chamado `unittest` que podes usar para isso.

#### Referências

- [Geração de números aleatórios em Python](https://docs.python.org/3/library/random.html)
- [Loops em Python](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- [A função input em Python](https://docs.python.org/3/library/functions.html#input)
- [Comparisons in Python](https://docs.python.org/3/library/stdtypes.html#comparisons)
- [Testes unitários em Python com unittest](https://docs.python.org/4/library/unittest.html)

### 4.4 Melhorar o jogo

Uma vez que tenhas uma versão básica do jogo a funcionar, podes fazer melhorias.

1. Mantém um registo dos palpites do jogador e do computador. Quando o jogo terminar, mostra todos os palpites que o jogador vencedor fez.
2. Adiciona uma opção para jogar novamente. Quando o jogo terminar, pergunta ao jogador se quer jogar novamente.
3. Adiciona comentários ao teu código para explicar o que cada parte faz. Isto tornará o teu código mais fácil de entender e manter.

#### Referências

- [Manuseio de listas em Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Como escrever comentários em Python](https://www.w3schools.com/python/python_comments.asp)

### 4.5 Criar uma "inteligência" para jogar contra o computador (Edição Hacker)

Uma vez que tenhas implementado o jogo básico e feito algumas melhorias, podes levar as coisas ao próximo nível criando uma "inteligência" para jogar contra o computador. Esta "inteligência" poderia ser simplesmente outra implementação do jogo que utiliza uma estratégia diferente, ou poderia ser um algoritmo de aprendizagem automática que melhora com cada jogo que joga.

1. Implementa uma nova versão do jogo que utiliza uma estratégia diferente. Por exemplo, em vez de adivinhar aleatoriamente, esta versão poderia tentar adivinhar o número mais provável com base nos palpites anteriores.
2. Testa a tua nova "inteligência" jogando contra o computador. Consegues vencer o computador com a tua nova estratégia?
3. Se te sentires ambicioso, poderias tentar implementar um algoritmo de aprendizagem automática. Este algoritmo poderia aprender de cada jogo que joga, melhorando os seus palpites com cada jogo. Poderias usar uma biblioteca de aprendizagem automática como scikit-learn para fazer isso.
4. Certifica-te de adicionar testes unitários para a tua nova "inteligência". Também poderias querer adicionar algumas métricas para rastrear como o teu algoritmo melhora com cada jogo que joga.

#### Referências

- [Introdução ao scikit-learn](https://scikit-learn.org/stable/getting_started.html)
- [Como implementar um algoritmo de aprendizagem automática](https://machinelearningmastery.com/start-here/#algorithms)

### 4.6 Extensão: Versão Orientada a Objetos (OOP)

Uma vez que tenhas implementado e melhorado a versão básica do jogo, podes reescrever o jogo utilizando o paradigma da Programação Orientada a Objetos (OOP). Isto permitirá estruturar o teu código de uma maneira mais modular e reutilizável. Além disso, algumas ferramentas como ORMs que vais encontrar no mundo do Python, estão desenhadas para trabalhar com OOP.

1. Cria uma classe `Game` que represente uma instância do jogo. Esta classe pode ter métodos como `start`, `play_turn`, `check_guess`, e `end_game`.
2. Cria uma classe `Player` que represente um jogador. Esta classe pode ter atributos como `name` e `guesses`, e métodos como `make_guess`.
3. Cria uma subclasse `ComputerPlayer` que herde da classe `Player`. Esta classe pode sobrescrever o método `make_guess` para implementar a lógica de adivinhação do computador.
4. Na classe `Game`, usa instâncias das classes `Player` e `ComputerPlayer` para representar o jogador e o computador.
5. Adiciona testes unitários para as tuas classes
