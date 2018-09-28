# O que é o `React`?

* Tipo: `leitura`
* Formato: `individual`
* Duração: `4min`

***

`React` é uma biblioteca (não um *framework*, uma **biblioteca**) _open source_ desenvolvida pelo Facebook para criar interfaces de usuários por meio de componentes dinâmicos e reutilizáveis.

Um dos principais benefícios de `React` é que nos permite criar ***single page apps*** de uma maneira ordenada, simples e sustentável.

`React` é um dos principais atores no movimento da programação funcional dentro do mundo JavaScript. Ou seja, em `React`preferimos a composição à herança e é alinhado com os princípios da imutabilidade.

Por trás, `React` utilizar uma estrutura chamada `Virtual DOM` que é encarregada de renderizar de forma granular os nós, em função do estado da aplicação, realizando a menor quantidade possível de modificações no `DOM`para manter a interface atualizada.

## Como funciona o `Virtual DOM`?

Pense no `Virtual DOM` como um espelho do estado atual do `DOM`.

Cada vez que ocorre uma ação, o `React` se encarrega de três coisas:

1. propaga os efeitos colaterais dessas ações no `Virtual DOM`
2. analiza as diferenças (`diff`) para ver quais sub-árvores mudaram em relação à "versão anterior"
3. por último realiza uma "reconciliação", na qual atualiza o `DOM`com o resultado do `diff`

Isso quer dizer que quando ocorre uma mudança no `Virtual DOM` somente as sub-árvores modificadas são substituídas no `DOM`. Então, se por exemplo temos um `input` no qual o usuário digitou um valor e haja uma mudança no `Virtual DOM`, enquanto nenhum nó pai do `input` tenha sido marcado para "reconciliação", o texto continua inalterado.

No vídeo a seguir você pode ver por que `React` (Virtual DOM) e `HTML` se dão tão bem

[![React e HTML](https://img.youtube.com/vi/BYbgopx44vo/0.jpg)](https://www.youtube.com/watch?v=BYbgopx44vo)

## Recursos recomendados

* [Documentação oficial](https://facebook.github.io/react/) (em inglês)
* [Recursos de `React` em espanhol](https://github.com/jlobos/react-espanol)
