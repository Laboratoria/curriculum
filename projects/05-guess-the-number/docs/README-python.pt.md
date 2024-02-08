# Python 🐍

## 1. Prelúdio

Python é uma das linguagens de programação mais populares e versáteis
atualmente. Seu sucesso reside em sua simplicidade e legibilidade, tornando-o
uma opção ideal para aqueles que estão começando a programar. Apesar da
diversidade de plataformas e ferramentas disponíveis, é essencial ter um sólido
entendimento dos conceitos fundamentais do Python. Além disso, Python é uma
linguagem de programação multiparadigma, o que significa que você pode usar
diferentes estilos de programação para resolver problemas, o que aumenta sua
flexibilidade e poder. O objetivo deste projeto é apresentar-lhe o mundo do
Python através de um jogo simples e divertido.

## 2. Considerações Gerais

- Duração do projeto: Estima-se que este projeto levará de 1 a 2 sprints.
- Deve ser implementado em Python. As únicas dependências externas que podem
  ser utilizadas são pytest para testes unitários.
- O jogo será realizado no terminal. Os testes podem ser executados no terminal
  ou em seu IDE (VSCode é mais do que adequado).
- Será utilizado um número aleatório entre 1 e 100 como número secreto.
- O jogador e o computador se revezarão para adivinhar o número.
- Após cada turno, serão mostradas informações sobre a suposição feita.
- O jogo terminará quando o número for adivinhado. Será mostrada uma lista de
  todas as tentativas do jogador vencedor.

## 3. Considerações Técnicas

O jogo será realizado no terminal usando Python. A lógica do jogo será baseada
em estruturas de controle, incluindo loops, condicionais e coleções. É
necessário dividir o código e melhorar sua legibilidade e manutenção. Deve-se
utilizar uma funcionalidade da biblioteca de utilidades do Python para a
geração de números aleatórios. Deve-se realizar testes unitários para suas
classes e métodos utilizando PyTest e simulação de geração de números
aleatórios com unittest.mock.

## 4. Marcos

A seguir, deixamos alguns marcos como sugestão para você construir seu projeto.

### 4.1 Criar o ambiente de desenvolvimento

O primeiro passo é configurar seu ambiente de desenvolvimento. Para este
projeto, você precisará do Python 3 e de um editor de texto ou um ambiente de
desenvolvimento integrado (IDE).

1. Instale o Python 3 se ainda não o tiver. Você pode baixá-lo do [site oficial
do Python](https://www.python.org/downloads/).

2. Escolha um editor de texto ou um IDE. Algumas opções populares são
[PyCharm](https://www.jetbrains.com/pycharm/), [Visual Studio
Code](https://code.visualstudio.com/), ou [Sublime
Text](https://www.sublimetext.com/).

3. Configure seu editor ou IDE para usar Python 3.

#### Algumas referências sobre o assunto

- [Visual Studio Code para
  Python](https://code.visualstudio.com/docs/languages/python)

### 4.2 Criar um script Python

A seguir, você criará um script Python simples para garantir que sua
configuração funcione corretamente.

1. Crie um novo arquivo chamado `main.py`. <br>
2. Execute `main.py`.

#### Referências

- [Como escrever e executar um script
  Python](https://entrenamiento-python-basico.readthedocs.io/es/3.7/leccion1/holamundo.html#ejecucion)

### 4.3 Implementar o jogo

Agora que você tem um ambiente de desenvolvimento Python funcionando, você pode
começar a implementar o jogo.

1. Gere um número aleatório entre 1 e 100. Você pode usar a função `randint` no
módulo `random` para fazer isso.

2. Implemente um loop que solicite ao jogador que adivinhe o número. Use a
função `input` para obter a entrada do jogador.

3. Compare a entrada do jogador com o número secreto. Se o jogador adivinhar
corretamente, termine o jogo. Se o jogador adivinhar incorretamente, forneça
uma dica se o número secreto é maior ou menor que a entrada do jogador.

4. Implemente a lógica para a vez do computador. O computador pode fazer um
palpite aleatório, ou você pode implementar alguma estratégia para que suas
suposições sejam mais inteligentes.

5. Continue o jogo até que o jogador ou o computador adivinhem corretamente o
número.

6. Adicione testes unitários para o seu código. Python tem um módulo
incorporado chamado `unittest` que você pode usar para isso.

#### Referências

- [Geração de números aleatórios em
  Python](https://docs.python.org/3/library/random.html)
- [Loops em
  Python](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- [A função input em
  Python](https://docs.python.org/3/library/functions.html#input)
- [Comparações em
  Python](https://docs.python.org/3/library/stdtypes.html#comparisons)
- [Testes unitários em Python com
  unittest](https://docs.python.org/4/library/unittest.html)

### 4.4 Melhorar o jogo

Uma vez que você tenha uma versão básica do jogo funcionando, você pode fazer
melhorias.

1. Mantenha um registro das suposições do jogador e do computador. Quando o
jogo terminar, mostre todas as suposições que o jogador vencedor fez.

2. Adicione uma opção para jogar novamente. Quando o jogo terminar, pergunte ao
jogador se ele quer jogar novamente.

3. Adicione comentários ao seu código para explicar o que cada parte faz. Isso
tornará seu código mais fácil de entender e manter.

#### Referências

- [Manipulação de listas em
  Python](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Como escrever comentários em
  Python](https://www.w3schools.com/python/python_comments.asp)

### 4.5 Criar uma "inteligência" para jogar contra o computador (Edição Hacker)

Depois de ter implementado o jogo básico e feito algumas melhorias, você pode
levar as coisas para o próximo nível criando uma "inteligência" para jogar
contra o computador. Esta "inteligência" poderia ser simplesmente outra
implementação do jogo que usa uma estratégia diferente, ou poderia ser um
algoritmo de aprendizado de máquina que melhora a cada jogo que joga.

1. Implemente uma nova versão do jogo que usa uma estratégia diferente. Por
exemplo, em vez de adivinhar aleatoriamente, esta versão poderia tentar
adivinhar o número mais provável com base nas suposições anteriores.

2. Teste sua nova "inteligência" jogando contra o computador. Você pode vencer
o computador com sua nova estratégia?

3. Se você se sentir ambicioso, você pode tentar implementar um algoritmo de
aprendizado de máquina. Este algoritmo poderia aprender de cada jogo que joga,
melhorando suas suposições a cada jogo. Você poderia usar uma biblioteca de
aprendizado de máquina como scikit-learn para fazer isso.

4. Certifique-se de adicionar testes unitários para sua nova "inteligência".
Você também pode querer adicionar algumas métricas para rastrear como seu
algoritmo melhora a cada jogo que joga.

#### Referências

- [Introdução ao
  scikit-learn](https://scikit-learn.org/stable/getting_started.html)
- [Como implementar um algoritmo de aprendizado de
  máquina](https://machinelearningmastery.com/start-here/#algorithms)

### 4.6 Extensão: Versão Orientada a Objetos (OOP)

Depois de ter implementado e melhorado a versão básica do jogo, você pode
reescrever o jogo usando o paradigma da Programação Orientada a Objetos (OOP).
Isso permitirá que você estruture seu código de uma maneira mais modular e
reutilizável. Além disso, algumas ferramentas como ORMs que você encontrará no
mundo do Python, são projetadas para trabalhar com OOP.

1. Crie uma classe `Game` que represente uma instância do jogo. Esta classe
pode ter métodos como `start`, `play_turn`, `check_guess`, e `end_game`.

2. Crie uma classe `Player` que represente um jogador. Esta classe pode ter
atributos como `name` e `guesses`, e métodos como `make_guess`.

3. Crie uma subclasse `ComputerPlayer` que herde da classe `Player`. Esta
classe pode sobrescrever o método `make_guess` para implementar a lógica de
adivinhação do computador.

4. Na classe `Game`, use instâncias das classes `Player` e `ComputerPlayer`
para representar o jogador e o computador.

5. Adicione testes unitários para suas classes e métodos. Python tem um módulo
incorporado chamado `unittest` que você pode usar para isso.

#### Referências

- [Programação Orientada a Objetos em
  Python](https://docs.python.org/3/tutorial/classes.html)
