# **MARCO 5:** Refatoração e Modularização

O objetivo deste **marco opcional** é melhorar a estrutura
e organização do aplicativo através da refatoração
e modularização.

A refatoração e modularização são essenciais para
melhorar a estrutura de um aplicativo. A primeira
otimiza o código sem alterar seu comportamento, enquanto
a segunda divide o aplicativo em componentes mais
gerenciáveis. É crucial executar e corrigir os testes
simultaneamente para garantir a integridade do código.

Ao dividir um aplicativo em componentes menores,
podemos alcançar os seguintes benefícios:

* Melhora a legibilidade e compreensão do código.
* Facilita a manutenção e atualização do código.
* Reduz a complexidade do aplicativo.
* Melhora o desempenho do aplicativo.

## Tarefas deste marco

* [Identificar partes para dividir](#identificar-partes-para-dividir)
* [Implementar a divisão dos componentes menores](#implementar-a-divisão-dos-componentes-menores)
* [Assegurar o funcionamento pós-refatoração](#assegurar-o-funcionamento-pós-refatoração)

### Identificar partes para dividir

Para esta tarefa, você deve examinar o aplicativo e buscar áreas
que possam ser divididas em componentes menores.
Algumas coisas a serem consideradas são:

1. Funções que realizam tarefas independentes.
2. Dados que são usados de forma independente.
3. Interface do usuário que pode ser dividida em partes menores.

### Implementar a divisão dos componentes menores

Uma vez identificadas as partes que podem ser divididas,
você deve implementar a divisão em componentes menores.
Isso pode ser feito de várias maneiras, como:

1. Criar novos componentes a partir de código existente.
2. Mover código existente para componentes existentes.
3. Reestruturar o código existente para que seja mais modular.

### Assegurar funcionamento pós-refatoração

É importante testar o aplicativo após a refatoração para garantir
que ele funcione corretamente. Isso pode ser feito testando
o aplicativo manualmente ou utilizando um framework de testes automatizados.

#### Exemplo

Vamos supor que temos um aplicativo que mostra uma lista de personagens.
O aplicativo possui uma visualização que exibe a lista de personagens,
e uma função que obtém os dados dos personagens.

Para melhorar a estrutura e organização do aplicativo,
podemos dividir a função `getCharacters()` em dois componentes
menores:

1. Um componente `CharacterRepository` que é responsável por obter
os dados dos personagens.

2. Um componente `CharacterList` que é responsável por exibir a lista de personagens.

Essa divisão nos permite separar a lógica de obtenção de dados
da lógica de visualização. Isso torna o aplicativo mais fácil de entender e manter.

[👈Todos os marcos](../README.md#6-marcos)
