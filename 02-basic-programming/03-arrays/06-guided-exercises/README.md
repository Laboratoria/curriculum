# Exercícios Guiados

* Tipo: `oficina`
* Formato: `guiado`
* Duração: `3h`

***

## Objetivos

* Praticar escrevendo código com sua equipe de professores, resolvendo
  problemas com estruturas de controle de fluxo básicas que você já conhece
  e vetores \(_arrays_\).
* Praticar, praticar e praticar

## Enunciados

A seguir, há mais problemas para você praticar. Estes problemas serão
resolvidos, passo a passo, pela sua equipe de professores em uma sessão
presencial \(_oficina_\).

Sugerimos que você tente resolver os exercícios sozinho \(ou em equipe\)
**antes** da sessão presencial. Assim, você já terá dúvidas específicas e
estará familiarizada com os desafios. Talvez você possa apresentar sua solução
para a turma e assim ajudar o restante de suas colegas :\)

### 1. Sum

Crie uma função `range` que receba dois argumentos: `start` \(início\) e `end`
\(fim\) e devolva um vetor \(_array_\) que contenha a sequência de números
desde `start` até `end` \(inclusive\).

Em seguida, escreva uma função `sum` que receba um vetor de números e devolva
a soma de todos eles. Confira que o resultado 55 seja impresso ao executar
`console.log(sum(range(1,10)))`.

Agora, modifique a função de intervalo \(`range`\) para receber um terceiro
argumento, opcional, que indique o valor de _step_ \(passo\) a ser utilizado
na construção do vetor. Quando nenhum passo for informado, os elementos do
_array_ aumentam de um em um, como no comportamento anterior. A chamada
`range(1, 10, 2)` deve devolver `[1, 3, 5, 7, 9]` . Certifique-se de que
também funciona com passos negativos, de modo que `range(5, 2, -1)` devolva
`[5, 4, 3, 2]`.

### 2. Ordenação e busca binária

Crie uma função que ordene um vetor de números, do menor para o maior. Dica:
use o algoritmo [_selection sort_](https://pt.wikipedia.org/wiki/Selection_sort).
Pesquise outros algoritmos de ordenação \(por exemplo: [_insertion sort_](https://en.wikipedia.org/wiki/Insertion_sort#/media/File:Insertion-sort-example-300px.gif) 
e [_bubble sort_](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)\).

Agora que você já sabe ordenar um _array_, escreva uma função que busque um
elemento em um vetor ordenado usando o algoritmo de busca binária \(lembre-se
de que Lourdes explicou o conceito de _Binary Search_ na seção de
[casos práticos](03-guided-exercises)\).

### 3. Remoção de Duplicações

Escreva uma função que receba um vetor como parâmetro e devolva outro, mas
sem elementos repetidos.

### 4. Comparação

Escreva uma função chamada `areArraysSame` que receba dois _arrays_ como
argumentos. Ela deve devolver verdadeiro se ambos os _arrays_ forem iguais
\(ou seja, se os dois têm os mesmos números, na mesma ordem\), e falso se
forem diferentes.

> _Nota: Todos os desafios devem verificar as entradas antes de executar o
  programa._

