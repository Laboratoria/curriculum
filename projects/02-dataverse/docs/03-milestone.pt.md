# **MARCO 3:** Filtrar e Ordenar Dados

Este marco tem como objetivo alcançar a filtragem e
ordenação dos dados. Não se esqueça de que é essencial seguir
a prática de utilizar pelo menos um
[branch](https://www.atlassian.com/br/git/tutorials/comparing-workflows/feature-branch-workflow)
por marco ou por funcionalidade.

## Tarefas deste marco

- [Filtrar dados do dataset](#filtrar-dados-do-dataset)
- [Teste da função de filtro](#teste-da-função-de-filtro)
- [Ordenar dados do dataset](#ordenar-dados-do-dataset)
- [Teste da função de ordenar](#teste-da-função-de-ordenar)
- [Teste OAS](#teste-oas)

### Filtrar dados do dataset

Como primeiro passo, volte às seções
[4. Funcionalidades](../README.md/#4-funcionalidades),
[5. Considerações técnicas](../README.md/#5-considerações-técnicas) e
[src/dataFunctions.js](../README.md/#srcdatafunctionsjs)
para obter detalhes sobre os elementos que você deve usar e
o nome que a função de filtro deve ter.

> [!TIP]
> [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

1. No arquivo HTML, crie um elemento `<select>`
que inclua os valores a serem utilizados para a filtragem.
2. No arquivo principal `src/main.js`, use algum seletor
do DOM e manipulador de eventos para selecionar e vincular um
evento ao elemento `<select>`. Isso permitirá capturar o valor
selecionado no `<select>` adequadamente.
3. Em `src/dataFunctions.js`, remova o conteúdo de exemplo
e crie a função `filterData(data, filterBy, value)` que
irá realizar a filtragem de dados.
4. Em `src/main.js`, invoque a função `filterData` e forneça
como argumentos a `data`, o campo pelo qual deseja realizar a
filtragem `filterBy`, e o valor específico `value` que deseja
filtrar.
5. Volte para `src/dataFunctions.js` e verifique se sua função está
recebendo os valores; você pode fazer isso usando `console.log`.
6. Depois de confirmar os valores, execute o método
`filter` e retorne o novo array filtrado.
7. Após obter o valor de retorno em `src/main.js`,
chame a função responsável por exibir os dados `renderItems`,
passando como argumento o novo array já filtrado.
8. [Aplique estilos ao `select` recém-criado](#estilos)

> [!IMPORTANT]
> **Não se limite a este exemplo**. Você pode criar
> uma interface que permita filtrar por diferentes
> propriedades ou com diferentes elementos. Explore
> sua criatividade e descubra novas maneiras
> de organizar seus dados.
> O poder está em suas mãos!

### Teste da função de filtro

Não deixe os testes para o final! Agora que sua função
de filtragem está funcionando, é o momento ideal
para realizar testes. Você pode consultar a seguinte
[lista de reprodução no YouTube](https://www.youtube.com/watch?v=gsTfbwfVvDE&list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg)
para aprender sobre testes e ver exemplos com o Jest.

### Ordenar dados do dataset

> [!IMPORTANT]
> Aqui fornecemos instruções para ordenar
> dados com base em uma propriedade específica,
> mas é importante destacar que você tem a
> liberdade de adicionar uma interface do usuário que
> permita a ordenação por diversas propriedades.
> **Este é apenas um exemplo, não a única técnica possível.**
>

A função de ordenação `sortData` deve receber dados, um campo de
referência e a direção da ordenação. Em seguida, ela aplica a ordenação
com `sort` e retorna o novo array. Isso permite ordenar
dinamicamente os dados de acordo com critérios específicos.

1. No arquivo `HTML`, crie um elemento `<select>` com opções
`<option>` para ordenar dados de forma ascendente ("asc") e descendente ("desc").
2. Em `src/main.js`, use um seletor do DOM e um manipulador
de eventos para vincular o `<select>` e capturar eficientemente
o valor selecionado.
3. Em `src/dataFunctions.js`, crie `sortData(data, sortBy, sortOrder)`
para ordenar dados de acordo com os parâmetros especificados.
4. Em `src/main.js`, chame `sortData` com a `data`,
o campo para ordenar `sortBy` e a direção da ordenação
`sortOrder` (ascendente ou descendente).
5. Em `src/dataFunctions.js`, verifique a função
com `console.log` para confirmar os valores.
6. Faça uma cópia dos dados, execute o método `sort`
e retorne o novo array ordenado.
7. Em `src/main.js`, use o resultado em
`renderItems` para mostrar os dados ordenados.
8. [Aplique estilos ao `select` recém-criado](#estilos)

> [!TIP]
> [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### Teste da função de ordenar

Realize os testes; agora que você tem a função de
ordenar funcionando, escreva os testes. Você pode usar esta
[lista de reprodução no YouTube](https://www.youtube.com/watch?v=gsTfbwfVvDE&list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg)
como referência.

### Estilos

Certifique-se de posicioná-lo adequadamente, estabelecer um
[tamanho padrão](https://www.w3.org/TR/WCAG21/#target-size)
para que seja facilmente clicável e diferenciar
visualmente o chamado à ação
[CTA](https://www.40defiebre.com/que-es/call-to-action).
Você pode usar propriedades como `width`, `height`, `margin`,
`padding` e `font-size` para ajustar o tamanho e o
espaço, e `border`, `background-color` e `color`
para dar uma aparência atraente. Considere também a
possibilidade de usar estilos adicionais como sombras, bordas
arredondadas para melhorar a aparência e usabilidade ou estilos
específicos para os estados

 `hover` e `focus` para melhorar a
interatividade.

### Teste OAS

Verifique o estado dos testes;
este é um momento propício para executá-los
e realizar ajustes nas seções do
código que forem necessários. Embora seja provável que alguns
testes ainda não deem resultado
positivo, é crucial abordar qualquer problema
identificado para garantir a solidez e exatidão do código.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
```

[👈Todos os marcos](../README.pt.md#6-marcos)
