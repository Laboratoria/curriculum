# XHR

- Tipo: `leitura`
- Formato: `individual`
- Duração: `90min`

***

## Objetivos de Aprendizagem

- Entender o que é XHR

## Analogia

Uma boa maneira de entender XHR é usando a seguinte analogia:

> **Preparar uma torta!**
> Para prepará-la, precisamos de farinha, ovo, leite, manteiga e um forno. Acendemos o forno. Em seguida podemos misturar os 4 ingredientes e já pronta a massa a colocamos no forno. Aqui demora um pouco até que asse, mas enquanto isso podemos ir fazendo o recheio.

Um objeto XHR é fornecido pelo ambiente de JavaScript e é utilizado para fazer requisições AJAX. É muito parecido com a parte da preparação da massa em que primeiro devemos "preparar" as configurações e em seguida enviar nossa requisição. Uma vez isto feito, nosso código pode seguir adiante e fazer outras requisições ou tarefas.

> Quando o forno nos devolve a torta assada, podemos continuar a decorá-la.

Uma vez que nossa requisição tem uma resposta, o programa pode seguir em frente com o que programamos para esta "tarefa".

## XMLHttpRequest

O ambiente de JavaScript proporciona uma forma de realizar requisições HTTP assíncronas. Isso é feito com um objeto `XMLHttpRequest`. Podemos usar este objeto com a função do construtor `XMLHttpRequest`.

XMLHttpRequests (comummente abreviado como XHR ou xhr) podem ser utilizados para requisitar qualquer tipo de arquivo (por exemplo, arquivos de texto puro, HTML, JSON, de imagem, etc.) ou dados de uma API.

Agora aprofundaremos o estudo no objeto XMLHttpRequest. Veremos como criá-lo, quais métodos e propriedades devem ser usadas e como enviar requisições assíncronas.

[XMLHttpRequests](https://www.youtube.com/watch?v=nz9S3uZE_dM)

### O objeto XHR e seu método `.open()`

Construímos um objeto XHR chamado _asyncRequestObject_.

```javascript
const asyncRequestObject = new XMLHttpRequest();
```

Podemos acessar seus métodos. Um dos mais importantes é o método `.open()`

`asyncRequestObject.open();`

`.open()` recebe uma série de parâmetros, mas os mais importantes são os dois primeiros: o método HTTP e a URL para enviar a requisição.

![sintax-open](https://github.com/AnaSalazar/curricula-js/blob/ivandevp-06-spa/06-spa/02-asynchronous-js-request/04-xhr/sintax_open.png?raw=true)

Se queremos requisitar de maneira assíncrona a página inicial do popular sítio de imagens de alta resolução, Unsplash, usaremos uma requisição `GET` e forneceremos a URL:

```javascript
asyncRequestObject.open('GET', 'https://unsplash.com');
```

> Os métodos HTTP que mais usaremos por enquanto são:
> GET - para recuperar dados.
> POST - para enviar dados.

## O objeto XHR e seu método `.send()`

Para enviar a requisição, precisamos usar o método de envio:

```javascript
asyncRequestObject.send();
```

Já sabemos que não há melhor maneira de aprender do que fazendo. Para ver como funciona, vá ao [Unsplash](https://unsplash.com), abra suas *developer tools* e adicione no console o objeto e seus métodos `open` e `send`.

![XHR send method](https://d17h27t6h515a5.cloudfront.net/topher/2017/August/59938614_ud109-l1-send-xhr-request-1/ud109-l1-send-xhr-request-1.gif)

No vídeo a seguir podemos ver o que acontece. Está em inglês, mas vá fazendo passo a passo com o vídeo e certamente você entenderá.

[![XHR send method analysis](https://img.youtube.com/vi/m9C0LJoWhOE/0.jpg)](https://youtu.be/m9C0LJoWhOE)

## Manipulação dos sucessos

Uma vez que a petição foi enviada, devemos estabelecer a propriedade `onload` no objeto a uma função que manejará a resposta bem sucedida da nossa requisição XHR:
XHR:

```javascript
function handleSuccess () {
    // na função, `this` é o valor do objeto XHR
    // this.responseText contém a resposta do servidor

    console.log( this.responseText ); // o HTML de https://unsplash.com/
}

asyncRequestObject.onload = handleSuccess;
```
Com isso percebemos que se `onload` não estiver configurado, a solicitação retorna mas não faz nada. 

## Manipulação de erros

Agora vejamos o que passa se algo acontece com a requisição e não acontece com sucesso. Nesse caso, precisamos usar a propriedade `onerror`:

```javascript
function handleError () {
    console.log( 'Um erro aconteceu 😞' );
}

asyncRequestObject.onerror = handleError;
```

Assim como com `onload`, se `onerror` não estiver configurado e um erro acontece, esse erro simplesmente ficará em _silêncio_ e seu código (e seu usuário!) não saberá o que deu de errado e nem como refazer a operação.

## Juntando tudo

Aqui está o código completo que desenvolvemos:

Criamos o objeto XHR, dissemos qual informação requisitar, configuramos os manipuladores para sucesso ou erro e por fim enviamos a requisição:

```javascript
function handleSuccess () {
  console.log( this.responseText );

}

function handleError () {
  console.log( 'Um erro aconteceu 😞' );
}

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
```

## APIs e JSON

Obter o HTML de um sítio web é fácil, mas provavelmente não é muito útil. Os dados que retornam estão em um formato que é extremamente difícil de analisar e consumir.

Seria muito mais fácil (e útil) se pudéssemos obter somente os dados que queremos em uma estrutura de dados melhor ordenada. Aqui entra **JSON**.

Ao realizar uma requisição de uma API que retorna um JSON, tudo o que precisamos fazer é converter esse retorno JSON em um objeto JavaScript. Podemos fazer isso com `JSON.parse();`. Modifiquemos a função de carregamento para manipular uma resposta JSON:

```javascript
function handleSuccess () {
  const data = JSON.parse( this.responseText );
  console.log( data );
}

asyncRequestObject.onload = handleSuccess;
```

Para obter mais informação sobre o uso do objeto XHR para realizar requisições assíncronas, você pode consultar estes links:

- [MDN's docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)

- [WHATWG Spec](https://xhr.spec.whatwg.org/)

- [W3C Spec](https://www.w3.org/TR/XMLHttpRequest/)
