# **MARCO 3:** Conectar a API OpenAI (chat individual)

Armazenar de forma segura sua chave de API e garantir que nosso aplicativo se
conecte de forma eficaz à API OpenAI são o cerne deste marco.
<!-- Este é um dica do Github Pages, https://github.com/orgs/community/discussions/16925 -->
> [!IMPORTANTE]
> Para isso, certifique-se de solicitar sua APIKEY aos coaches.

## Tarefas deste marco

- [Manejo da API KEY na Aplicação](#manejo-da-api-key-na-aplicação)
- [Armazenamento Seguro da API KEY com Local Storage](#armazenamento-seguro-da-api-key-com-local-storage)
- [Testes para funções de API Key](#testes-para-funções-de-api-key)
- [Criação de uma visualização para interagir com cada elemento do conjunto de dados](#criação-de-uma-visualização-para-interagir-com-cada-elemento-do-conjunto-de-dados)
- [Integração com Open AI](#integração-com-open-ai)

### Manejo da API KEY na Aplicação

O manejo das API KEYs é crucial para manter a segurança.
A fim de não incluir a chave diretamente no código do aplicativo,
crie um campo de entrada que permita inserir ou colar a API KEY.
Este campo de entrada pode estar localizado em uma visualização,
diálogo ou modal.

![Preview apiKey](./assets/previewApiKey.png)

### Armazenamento Seguro da API KEY com Local Storage

Para garantir a segurança e persistência da
API KEY, sugere-se utilizar [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).
Recomendamos seguir estes passos:

1. Na pasta `lib`, crie um novo arquivo chamado `apiKey.js`.

2. Dentro de `apiKey.js`, implemente duas funções essenciais:

```js
// src/lib/apiKey.js

export const getApiKey = () => {
   // Implementa el código para obtener la API KEY desde Local Storage
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
};
```

### Testes para funções de API Key

Dentro da pasta `test`, crie um arquivo chamado
`apiKey.spec.js`. Neste arquivo, desenvolva os
testes correspondentes. Você pode utilizar o seguinte
esquema como ponto de partida:

``` js
// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   // Desarrolla el test correspondiente aquí
  });
});

```

### Criação de uma visualização para interagir com cada elemento do conjunto de dados

Para facilitar a interação com um elemento específico do nosso
conjunto de dados, criaremos uma nova visualização. Siga estes passos:

1. Acesse a pasta `views` do seu projeto.
Se encontrar um arquivo chamado `About.js`,
renomeie-o conforme o conjunto de dados
com o qual está lidando, como por exemplo `Planet.js`
se estiver trabalhando com dados de planetas.
Se o arquivo `About.js` não existir,
você pode criar um novo com um nome relevante.

2. Dentro deste arquivo, desenvolva a visualização que permitirá interagir
com os elementos do conjunto de dados. Você pode incluir componentes como botões,
formulários ou qualquer outro elemento necessário para alcançar o objetivo específico
da sua aplicação.

3. Certifique-se de que esta visualização seja capaz de receber um identificador (id)
ou outros dados necessários para mostrar o elemento específico do conjunto
de dados. Você pode conseguir isso usando parâmetros, como por
exemplo através dos
[search params](https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams)
da URL que o router pode comunicar.

![Preview Detail](./assets/previewDetail.gif)

> [!IMPORTANTE]
> Lembre-se de utilizar as funções que criamos anteriormente em `apiKey.js`
para gerenciar de forma segura a API KEY.

### Integração com Open AI

Para obter respostas de cada elemento ou personagem e poder interagir
com ele ou ela, é essencial fazer uma solicitação HTTP para a OpenAI.
Neste processo, é recomendável se familiarizar com os conceitos de
[promessas](https://curriculum.laboratoria.la/pt/topics/javascript/async/promises)
e considerar o uso de
[fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
ou [axios](https://axios-http.com/docs/intro)
para realizar a solicitação.

Sugerimos que você organize o código associado a esta tarefa dentro da pasta `lib`.
Nesta pasta, você pode criar um arquivo chamado `openAIApi.js`,
que conterá uma função específica. Esta função deve receber um parâmetro
que armazena as mensagens; tenha em mente que essas mensagens devem seguir uma
estrutura específica, que você pode entender melhor consultando a
[documentação](https://platform.openai.com/docs/api-reference/chat/create)
fornecida pela OpenAI.

```js
// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
};

```

> [!NOTA]
> `communicateWithOpenAI` é uma sugestão para o nome
da sua função. Você pode escolher o nome que preferir.

[👈Todos os marcos](../README.md#6-marcos)
