# **MARCO 4:** Cálculos

O objetivo deste marco é realizar cálculos com
as informações. Lembre-se da importância de seguir
a prática de usar pelo menos um
[branch](https://www.atlassian.com/br/git/tutorials/comparing-workflows/feature-branch-workflow)
por marco ou característica.

## Tarefas deste marco

- [Cálculos estatísticos do dataset](#cálculos-estatísticos-do-dataset)
- [Teste da função de cálculo](#teste-da-função-de-cálculo)
- [Teste OAS](#teste-oas)
- [Edição Hacker](#edição-hacker)

### Cálculos estatísticos do dataset

A função `computeStats` deve receber os `dados` e realizar
cálculos de acordo com os critérios que você está estabelecendo.

1. Selecione o tipo de cálculo que deseja realizar e
avalie a necessidade de um ativador, como um botão ou
um menu suspenso, para realizar a operação.
Certifique-se de considerar a experiência do usuário
e o contexto da aplicação ao tomar essa decisão.
2. No arquivo principal `src/main.js`, use um
seletor do DOM e um manipulador de eventos para
selecionar e vincular um evento ao elemento `<button>` ou `<select>`.
3. Em `src/dataFunctions.js`, crie a função `computeStats(data)`
responsável por realizar os cálculos de acordo com o critério.
4. Em `src/main.js`, invoque a função `computeStats`
e forneça os `dados` como argumento para realizar os
cálculos necessários.
5. Volte para `src/dataFunctions.js` e verifique se a
função está recebendo os valores;
você pode fazer isso usando `console.log`.
6. Uma vez confirmados os valores, realize os cálculos necessários, como a média de comprimento dos nomes, usando o método [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) e retorne o resultado.
7. Apresente os resultados do cálculo em sua interface.

> [!TIP]
> [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Teste da função de cálculo

Realize os testes; agora que você implementou
a função de cálculo, prossiga escrevendo os testes.
Você pode usar esta
[lista de reprodução no YouTube](https://www.youtube.com/watch?v=gsTfbwfVvDE&list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg)
como referência.

### Teste OAS

Neste ponto, a verificação contínua dos testes deve fazer
parte de sua rotina diária. Execute os testes e faça as alterações
ou ajustes necessários para que cada um deles seja bem-sucedido.
Esse processo contínuo garante a qualidade
e confiabilidade do código ao longo do desenvolvimento do projeto.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
```

### Edição Hacker

Antes de se aventurar na seção "Edição Hacker", é
crucial avaliar sua disponibilidade de tempo. Não é aconselhável
prolongar a execução de um projeto além do necessário,
pois o bootcamp tem um prazo definido, e permanecer
indefinidamente no mesmo projeto não é viável. Você sempre pode
consultar essa decisão com seus coaches para obter orientação adicional.

[Edição Hacker](../README.md/#8-edição-hacker)

[👈Todos os marcos](../README.md/#6-marcos)
