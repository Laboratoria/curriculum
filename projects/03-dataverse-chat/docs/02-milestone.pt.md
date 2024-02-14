# **MARCO 2:** Visualização de dados

A divisão do código em funções pequenas facilita sua
reutilização em projetos diferentes. O objetivo deste marco é fazer com que o Dataverse
funcione a 100% dentro da sua SPA,
incluindo as funções de filtragem,
ordenação e cálculo.

## Tarefas deste marco

- [Migração do conjunto de dados do Dataverse](#migração-do-conjunto-de-dados-do-dataverse)
- [Reutilização de Funções do Dataverse](#reutilização-de-funções-do-dataverse)
- [Configuração de testes para funções migradas](#configuração-de-testes-para-funções-migradas)
- [Visualizar o conjunto de Dados](#visualizar-o-conjunto-de-dados)

### Migração do conjunto de dados do Dataverse

Crie uma pasta chamada `data` dentro de `src`.
Dentro dessa pasta, crie um arquivo `dataset.js` e
copie seu conjunto de dados para esse arquivo.

``` js
// src/data/dataset.js

export default [
  {
    "id": "marie-curie",
    "name": "Marie Curie",
    "shortDescription": "Física e química, ganhadora de dois Prêmios Nobel.",
    "description": "física e química ...",
    "imageUrl": "https://laboratoria-dataverse-talks.netlify.app/public/marie-curie.jpg",
    "facts": {
      "yearOfBirth": "1867",
      "yearOfDeath": "1934",
      "birthPlace": "Varsóvia, Polônia",
      "mainField": "Física e Química"
    },
    "extraInfo": {
      "imageSource": "https://www.historyextra.com/period/first-world-war/life-of-the-week-marie-curie/"
    }
  },
]
```

### Reutilização de Funções do Dataverse

Vamos reutilizar as funções de filtragem, ordenação e
cálculo do seu projeto anterior neste novo projeto.
Para isso, crie um novo arquivo no seguinte caminho:
`src/lib/dataFunctions.js` e copie as funções mencionadas
para esse arquivo. Se ainda não existir, você precisará criar uma pasta
chamada `lib` dentro da pasta `src` (src/lib).

>[!TIP]
> Volte ao README principal tantas vezes quanto necessário.
> [5. Considerações técnicas](../README.md#5-considerações-técnicas)

Exemplo:

```js
// src/lib/dataFunctions.js

export const filterData = (data, filterBy, value) => {
  return 'example';
};

export const sortData = (data, sortBy, sortOrder) => {
  return [];
};

export const computeStats = (data) => {
  return [];
};
```

>[!TIP]
> Consulte estes links para obter mais informações sobre como importar
> [módulos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
> e [funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions)

### Configuração de testes para funções migradas

Para continuar com as migrações, é necessário criar uma
pasta `test` na
raiz do projeto. Dentro da pasta `test`, crie um arquivo
`dataFunctions.spec.js`. Neste arquivo, copie seus testes do Dataverse
e ajuste as importações para que funcionem corretamente.

``` js
// test/dataFunctions.spec.js

import { data } from '../src/data/dataset.js';
import { filterData } from '../src/lib/dataFunctions.js';

console.log(data);

describe('filterData', () => {

  it('returns `filterData`', () => {
    expect(filterData()).toBe('example');
  });
});
```

>[!TIP]
> Na pasta de testes, considere ter um arquivo de teste
(suite) para cada arquivo JavaScript que deseja testar.

### Visualizar o conjunto de Dados

Uma vez que as funções estejam em `dataFunctions.js`
junto com seus respectivos testes,
podemos avançar com a visualização do conjunto de dados.
O objetivo é conseguir visualizar
o conjunto de dados de forma semelhante ao Dataverse, mas dentro da SPA.

Para alcançar isso, recomendamos que você faça modificações
no arquivo `Home.js` localizado na pasta `views`.
Este arquivo deve conter o código necessário para
visualizar o conjunto de dados. Tenha em mente que,
neste caso, cada visualização deve retornar
um elemento para que possa ser renderizado pelo router.
É provável que você precise adaptar o
código da sua visualização anterior para modificar um novo elemento
dentro desta visualização `Home.js`.
Se tiver dúvidas, você pode revisar novamente o
[guia do router](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md)
e consultar os coaches para obter
mais clareza neste processo.

``` js
// src/views/Home.js

import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export function Home(props) {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>DataVerse</h1>
    ...
  `;
  return viewEl;
}
```

[👈Todos os marcos](../README.md#6-marcos)
