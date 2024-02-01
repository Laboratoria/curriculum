# **MARCO 4:** Conectar a API OpenAI (chat grupal)

O objetivo deste marco é permitir que os usuários interajam com
todos os personagens através de um chat grupal.

## Tarefas deste marco

- [Criação de uma visualização para interagir com todos os elementos do conjunto de dados](#criação-de-uma-visualização-para-interagir-com-todos-os-elementos-do-conjunto-de-dados)
- [Consumo da integração com Open AI](#consumo-da-integração-com-open-ai)
- [Implementação de testes](#implementação-de-testes)

### Criação de uma visualização para interagir com todos os elementos do conjunto de dados

1. Navegue até a pasta `views` em seu projeto e dentro dela,
crie um componente para a visualização do chat grupal,
por exemplo, `ChatGroup.js` ou `Panel.js`,
que mostrará um chat grupal com todos os personagens.
Este componente deve permitir aos usuários enviar
mensagens para todos os personagens ou elementos do conjunto de dados
e receber respostas.

2. A visualização deve ser capaz de obter os dados necessários (id) para
mostrar os elementos do conjunto de dados.
Isso pode ser feito passando os dados como parâmetros ou utilizando
funções que obtêm os dados.

### Consumo da integração com Open AI

Obtenha as respostas de todos os elementos nos dados utilizando
a função designada para consumir a API da OpenAI,
neste exemplo, `communicateWithOpenAI`.
Isso permitirá que os usuários interajam com todos os
personagens através
de um chat grupal.

> [!DICA]
> Revise o tópico de
>[Promessas](https://curriculum.laboratoria.la/pt/topics/javascript/async/promises)
>e o método
>[Promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

Para alcançar este objetivo, siga estes passos:

1. Obtenha a lista de elementos nos dados.

2. Para cada elemento na lista:

   + Envie uma mensagem para a função communicateWithOpenAI.
   + Guarde a resposta da função communicateWithOpenAI.
   + Mostre a resposta da função communicateWithOpenAI.

![Preview Chat Grupal](./assets/previewGrupalChat.gif)

### Implementação de testes

Para verificar o funcionamento das funções criadas, crie um arquivo
`openAIApi.spec.js` na pasta `test`.

> [!DICA]
> Você pode revisar esta documentação sobre [Testes de código assíncrono](https://jestjs.io/pt-BR/docs/asynchronous).

``` js
// test/openAIApi.spec.js

import { communicateWithOpenAI } from '../src/utils/openAIApi.js';

describe('communicateWithOpenAI', () => {
  test('communicateWithOpenAI', () => {
    return communicateWithOpenAI().then(data => {
      expect(data).toBe('example');
    });
  });
});

```

> [!NOTA]
> `communicateWithOpenAI` é uma sugestão para o nome
da sua função. Você pode escolher o nome que preferir.

[👈Todos os marcos](../README.md#6-marcos)
