# **MARCO 2:** Visualização de Dados

A partir deste momento, é fundamental que você
trabalhe em cada marco utilizando uma
[branch](https://www.atlassian.com/br/git/tutorials/comparing-workflows/feature-branch-workflow)
individual para facilitar a clareza, coerência e
colaboração. O objetivo deste marco é alcançar a visualização
dos elementos do seu conjunto de dados com todos os estilos.

## Tarefas deste marco

- [Visualizar](#visualizar)
- [Estilos](#estilos)
- [Teste](#teste)

### Visualizar

> [!IMPORTANT]
> Para visualizar os dados, é crucial que você reveja
> os conceitos de
> [parâmetros e argumentos](https://www.youtube.com/watch?v=5VVBrfWQ2Wk)
> de uma função, pois você os utilizará extensivamente.

No arquivo `src/main.js`, você verá que as primeiras linhas
estão ocupadas pelas importações de `data` e `renderItems`.
Neste arquivo, chame `renderItems` para enviar os dados
como argumento.

```js
import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

// Invocação de renderItems
renderItems(data)
```

Agora, no arquivo `src/view.js`, existe a função `renderItems`,
que tem a responsabilidade de:

1. Receber o parâmetro data, que representa todo o conjunto de dados.
2. Criar um elemento `<ul>` usando o método
[createElement](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement).
3. Percorrer os dados usando um
[loop](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
ou algum método de array como
[forEach](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
ou
[map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. Para cada elemento dos dados, criar um elemento `<li>`.
5. Adicionar cada `<li>` ao `<ul>` usando
[innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) ,
[appendChild](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
ou outro método apropriado.
6. Finalmente, retornar o elemento `<ul>`.

Até este ponto, os dados ainda não são visualizados, mas você pode usar
`console.log` a qualquer momento. Por exemplo, dentro do loop ou método que
escolher, para verificar a iteração.

Para concluir esta fase, você deve selecionar o elemento HTML por meio de um
[seletor do DOM](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors).
Em seguida, indique onde deve ser colocado o resultado da invocação de
renderItems, recorrendo novamente a
[innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) ou
[appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)

> [!NOTE]
> **appendChild()**: Este método adiciona um elemento filho ao final
> de um elemento pai.
> **innerHTML**: Esta propriedade atribui o conteúdo de um elemento
> HTML a outro elemento.

### Estilos

Para criar uma grade adaptável a diferentes dispositivos
com Flexbox, use a propriedade `flex` e leve em consideração o uso
de `wrap` para lidar com várias linhas ou colunas.

Recursos úteis:

- [Flexbox](https://curriculum.laboratoria.la/es/topics/css/css/flexbox)
- [Flexbox Froggy](https://flexboxfroggy.com/#es)
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Teste

Verifique o que está acontecendo com os testes;
este é um bom momento para executá-los e ajustar
as partes do código que forem necessárias. Embora
vários testes ainda possam não passar, é
fundamental abordar qualquer problema identificado
para garantir a robustez e precisão do código.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
```

[👈Todos os marcos](../README.pt.md#6-marcos)
