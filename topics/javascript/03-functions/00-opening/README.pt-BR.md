# Opening

* Tipo: `leitura`
* Formato: `self-paced`
* Duração: `15min`

***

Nesta unidade veremos com maior profundidade o tema de funções, aproveitando que
o Javascript é fortemente influenciado pela programação funcional desde seu
desenho inicial e que nos oferece características importante para atribuir
funções a uma variável, passar como parâmetro à outra função, mudar o escopo de
variáveis, atribuir como valor de um objeto, etc.

As funções são blocos de construção de aplicações que englobam múltiplas
sequências de código. São particularmente importantes no Javascript porque
suportam características como _first-class functions_, _functions as objects_,
_runtime function definition_ e mais que veremos nesta unidade.

Listamos alguns princípios que te vão te ajudar a escrever funções melhores:

* **Don't Repeat Yourself (DRY)**: É muito comum que ao longo do desenvolvimento
  de uma solução encontremos um padrão que se repete ao longo de nosso código.
  Uma vez identificado um padrão, é hora de escrever uma função, objeto ou
  módulo que encapsule o padrão encontrado para que seja reutilizado facilmente.
  Isso ajuda também se encontrarmos algum _bug_ ou quisermos adicionar alguma
  funcionalidade, só precisaremos fazer em um lugar. Além disso, escrevendo uma
  função reutilizável obriga você a analisar o padrão do problema, o que ajudar
  ter a funcionalidade relacionada de maneira agrupada.

* **Do One Thing (DOT)**: Cada função deve fazer somente uma coisa e fazê-la o
  melhor possível. Seguindo este princípio, você escreverá funções mais
  reutilizáveis, legíveis e fáceis de depurar.

* **Keep It Simple Stupid (KISS)**: Se as funções devem fazer somente uma coisa,
  é melhor fazê-la claramente mantendo a simplicidade e não adicionando
  complexidade desnecessária para resolver um problema. Isto não quer dizer que
  a solução seja ótima, mas que pode ser legível para poder dar manutenção ao
  longo do tempo.

* **Less Is More**: Para alcançar a maior legibilidade possível e reduzir a
  tentação de fazer mais de uma coisa, as funções devem ser tão pequenas quanto
  possível. Se a função se torna muito longa, é melhor considerar separá-la em
  subtarefas e dados ao longo de funções e objetos.
