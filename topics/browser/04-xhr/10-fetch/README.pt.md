---
type: read
duration: 30min
---

# AJAX com fetch

## Objetivos de aprendizagem

- Aprender como fazer chamas assíncronas com JavaScript moderno
- Revisão de fetch e suas funcionalidades
- Usar promessas para encadear várias chamadas http, ou fazer em paralelo

## Alternativa ao XHR e JQuery com JavaScript puro

Quando usamos o XHR, vemos que se torna tedioso fazer requisições. Temos que
colocar um monte de código para que tudo funcione e também temos a obrigação de
usar callbacks, o que rapidamente pode resultar em um código espaguete.

O que acontece se quisermos fazer várias solicitações ao mesmo tempo?

O que acontece se precisarmos dos dados de uma chamada em uma outra chamada?

Para a nossa sorte o `fetch` está aqui, e já foi implementado pela maioria
(exceto _Internet Explorer_). Com ele você pode utilizar _promises_ para
retornar os resultados, só de não depender de _callbacks_ já é um benefício.
Usar promessas também nos permite aninhar e executar elas em paralelo, deixando
o nosso código muito mais ordenado. Agora, vamos ver como usar.

## Uso básico de fetch

```js
fetch(url).then((response) => {
  if (response.status !== 200) {
    // O status de 200 é uma resposta de que deu tudo certo no servidor
  } else {
    // Caso respondam com algum erro
  }
}).catch((error) => {
  /*
   * Código em caso de erro na chamada.
   * Como por exemplo quando cai da internet
   */
});
```

Como vimos a cima, a única coisa que de precisamos passar o o `fetch` é a URL
que queremos chamar, logo depois usamos o `then` para receber a respostas da
requisição. A diferença do `fetch` para o `XHR` e `JQuery` é que independente da
resposta, ela chegará na `then` podendo ser um erro ou um sucesso. A promessa
apenas irá falhar (passando pelo `catch`) se houver algum problema com a conexão
ou se não receber nenhuma resposta.

Veja também que a respostas chega em um objeto `response` que contém o estado
HTTP da resposta.

Muitas **APIs** usam o formato `JSON` como o tipo de resposta, para isso temos
que fazer um passo a mais:

```js

fetch(url).then((response) => {
  if (response.status !== 200) {
    // O status de 200 é uma resposta de que deu tudo certo no servidor
    return response.json();
  } else {
    // Caso respondam com algum erro
  }
}).then((responseJSON) => {
  // Código que irá usar o JSON
}).catch((error) => {
  /*
   * Código em caso de erro na chamada.
   * Como por exemplo quando cai da internet
   */

```

Como vimos, `response.json()` também retorna uma promessa (tudo é assíncrono),
mas para obter o JSON precisamos de um segundo `then` para nos retornar o JSON
que a API envia.

Se a URL responder com um JSON, ou com uma imagem, ou com um texto, podemos
usar:

```js
response.json() //Para resposta deJSON
response.blob() //Para arquivos binários como imagens
response.text() //Para respostas em texto simples
```

Todos os métodos anteriores funcionam com promessas, com isso você terá que
utilizar funções `then` para todas elas.

Pode parecer muito mais trabalhoso, ou muito mais código do que nas soluções
anteriores, mas agora vamos ver como fazer uma chamada depois da outra. E até
fazer chamadas em paralelo.

## Chamada sucessiva com fetch

Muitas vezes quando estamos usando uma API, precisamos de certos dados de uma
chamada anterior. Graças ao `fetch` isso irá ficar muito mais fácil e natural,
vejamos o exemplo:

```js
fetch(url1).then((response) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error("Primeira chamada falhou");
  }
}).then((jsonData) => {
  return fetch(jsonData.url); // Imagina que precisamos da url da resposta da primeira requisição
}).then((response) => {
  if (response.status == 200){
    return response.json();
  } else {
    throw new Error("Segunda chamada falhou");
  }
}).then((jsonData) => {
  // Código que irá utilizar o json da segunda chamada
}).catch((error) => {
  // Código executado em caso de erro
});
```

Como vimos, podemos aproveitar todo o poder das promessas para fazer uma chamada
depois da outra, de uma maneira ordenada e sem cair em um _callback hell_
(callback dentro de callback). Outra coisa que ganhamos ao fazer as chamadas
desta forma é que os erros irão retornar dentro da função `.catch`.

## Muitas chamadas de uma vez

Outro caso muito comum que ocorre quando estamos programando, é precisar chamar
várias APIs de uma vez. E o `fetch` mais uma vez poderá nos ajudar com isso,
veja os exemplos a seguir:

```js
const chamadas = [];
chamadas.push(fetch(url1));
chamadas.push(fetch(url2));
chamadas.push(fetch(url3));

Promise.all(chamadas).then((responses) => {
  return responses.map(response => response.json());
  // Caso todas devam retornar JSON
}).then((jsonResponses) => {
  // Código para manipular todas as chamadas
}).catch((error) => {
  // Código para lidar com os erros
});
```

Como vimos, este código é muito mais direto e simples do que usar XHR ou JQuery
para fazer o mesmo. E com a ajuda do `map`, conseguimos transformar todas as
respostas em objetos JSON.
