# Exercícios Guiados

* Tipo: `oficina`
* Formato: `guiado`
* Duração: `5h`

***

## Objetivos

* Praticar o desenvolvimento de código com professores, resolvendo problemas de estruturas condicionais, de repetição e funções.
* Praticar, praticar e praticar

## Enunciados

A seguir, você terá mais problemas práticos. Estes problemas serão resolvidos passo a passo pela sua equipe de professores em uma sessão presencial \(`oficina`\).

Sugerimos que você tente resolver os exercícios sozinha \(ou em equipe\) **antes** da sessão presencial. Então, você já virá com dúvidas específicas e estará familiarizada com os desafios. Talvez você possa apresentar sua solução para a turma e assim ajudar o restante de suas colegas :\)

### 1. Placar

Imagine que você está jogando um jogo com algumas amigas e quer registrar a pontuação de cada uma delas. Crie um `object` chamado `scores` em que as chaves ou propriedades sejam os nomes das suas amigas e os valores, as pontuações \(todas começam com 0\).

Escreva uma função que recebe dois argumentos: o nome da sua amiga e o número de novos pontos obtidos, e atualize os pontos da jogadora no `object` "scores". Escreva também uma função que imprima no console o total de pontos.

### 2. Caixa Automático

Crie um programa que um caixa automático pode usar para determinar o número **mínimo** de notas a serem entregues, de acordo com o valor solicitado. O caixa começa com:

* 100 notas de 100
* 50 notas de 50
* 200 notas de 20
* 300 notas de 10
* 500 notas de 5
* 800 notas de 1

Vamos ver um caso de uso:

Se o usuário solicitar US$ 250, a saída deve ficar assim:

```javascript
Valor solicitado 250 dólares.
Entregamos 3 notas:

100: 2
50: 1

No caixa restam:

100: 98
50: 49
20: 200
10: 300
5: 500
1: 800
```

O caixa lembra quanto dinheiro sobrou para as próximas transações. Por exemplo, se o usuário quiser retirar 150 dólares adicionais, a saída deve ficar assim:

```javascript
Valor solicitado 150 dólares, entregamos 2 notas:

100: 1
50: 1

No caixa restam:

100: 97
50: 48
20: 200
10: 300
5: 500
1: 800
```

### 3. Reserva de assentos de companhias aéreas

Uma pequena companhia aérea acaba de comprar um computador para seu novo sistema de reservas automatizado. Você foi solicitada para desenvolver o novo sistema usando apenas `prompt` e `alert`. Você vai escrever um pedido para atribuir assentos em cada voo do único avião da companhia \(capacidade: 10 assentos\).

Seu aplicativo deve mostrar um `menu principal` com as seguintes alternativas:

* Por favor escreva 1 para `reservar assento`
* Por favor, escreva 2 para `liberar assento`
* Por favor, escreva 3 para `buscar por documento de identificação`
* Por favor, escreva 4 para `listar todos os passageiros`
* Por favor, escreva -1 para `sair do sistema`

Se o usuário digitar 1, seu aplicativo deverá solicitar que você escolha um dos lugares livres e, em seguida, solicitar informações pessoais \(`nome e sobrenome` e `documento de identificação`\). Então você deve retornar para o `menu principal`.

Se o usuário digitar 2, seu aplicativo deve pedir para ele escolher o assento reservado que deseja liberar, e depois ele deve solicitar uma confirmação \(SIM/NÃO\) mostrando as informações associadas ao assento \(`nome e sobrenome`, `documento de identificação`\). Então você deve retornar para o `menu principal`.

Se o usuário digitar 3, seu aplicativo deve solicitar que você insira o documento de identificação e, em seguida, mostre as informações associadas ao passageiro \(`nome e sobrenome`, `assento`\) com o `documento de identificação` pesquisado. Em seguida, você deve retornar para o `menu principal`.

Se o usuário digitar 4, sua aplicação deve mostrar a lista de passageiros e informações relacionadas registradas no sistema \(`nome e sobrenome`, `documento de identificação`, `assento`\). A seguir, você deve retornar para o `menu principal`.

Se o usuário digitar -1, sua aplicação deve sair do sistema.

**Dicas para a solução**

\[Dica 1. \| Os assentos\]

Para imprimir \(via `prompt` ou `alert`\) a lista de lugares, você pode usar a seguinte dica:

```javascript
var str = "1[ ] 3[ ] 5[ ] 7[ ] 9[ ]" +
          "2[ ] 4[ ] 6[ ] 8[ ] 10[ ]";

alert(str); // todos os assentos estão livres

var str = "1[ ] 3[*] 5[ ] 7[ ] 9[ ]" +
          "2[*] 4[ ] 6[ ] 8[ ] 10[ ]";

alert(str); // o assento 2 e 3 estão reservados.
```

**Nota: Todos os desafios devem validar as entradas antes de executar o programa.**
