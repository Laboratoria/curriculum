# AJAX com jQuery

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Usar jQuery para fazer requisições assíncronas e entender quais vantagens ele nos fornece.

## Analogia

Deixe um profissional preparar a torta para você.

[![XHR analogy](https://img.youtube.com/vi/NFGrayBZOVM/0.jpg)](https://youtu.be/NFGrayBZOVM)

## Por que jQuery?

jQuery é uma biblioteca muito popular que você já teve a oportunidade de usar. O uso que lhe demos até o momento foi para manipular o DOM por meio de métodos que fazem nosso código mais simples.

Agora, usaremos esta vantagem de utilizar métodos menores e deixar para o jQuery a responsabilidade de checar a compatibilidade dos navegadores na implementação do AJAX.

Isso é possível graças ao método `.ajax()` que jQuery fornece para realizar requisições assíncronas.

## Método `.ajax()`

O método`.ajax()` é o coração das requisições assíncronas na biblioteca de jQuery. Há duas formas de utilizar esse método:

```javascript
$.ajax(<url-a-realizar-a-requisicao>, <um-objeto-de-configuracao>);

// or

$.ajax(<só um objeto de configuração>);
```

Fonte: [Documentação de jQuery](https://api.jquery.com/jQuery.ajax/)

A maneira mais comum de usar o método`.ajax()` é usando somente o objeto de configuração, em parte devido a esta ser a forma mais antiga que está disponível (versão 1.0). Além disso, toda a configuração pode estar somente em um objeto.

> ### O que é um objeto de configuração?

> É um objeto de JavaScript que utilizamos para configurar algo.
>
> Por exemplo:
>
> ```javascript
> var settings = {
>    name: 'this is my name',
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> };
> ```
>
> O objeto de configuração pode ser passado como parâmetro de uma função construtora. Imaginemos a função construtora `MakeCake`:
>
> ```javascript
> const myDeliciousCake = MakeCake( settings );
> ```
>
> Da mesma forma, o objeto de configuração pode ser passado diretamente:
>
 ```javascript
> const myDeliciousCake = MakeCake({
>    name: 'this is my name',
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> });
> ```

## Fazendo uma chamada AJAX

O método `.ajax()` de jQuery tem que ser incrivelmente versátil e poderoso se é o que dá vida às requisições assíncronas. Uma requisição AJAX simples seria assim:

```javascript
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
});
```

Vamos testá-lo:

1. Vá para o sítio web de [jQuery](http://jquery.com/).
2. Abra as `Developer Tools` do seu navegador.
3. Garanta que está na aba `Network` e que o botão gravação está ligado.
5. Adicione o script anterior na console e execute-o.

![jQuery - ajax](https://media.giphy.com/media/l1KcRuWi059tT6VYQ/giphy.gif)

Esta `request` (requisição) está sendo realizada para um recurso no GitHub (informação do usuário). A requisição pode ser acompanhada no painel de redes (aba `Network`no Dev Tools). 

Já sabemos como realizar uma requisição com `.ajax()` mas ainda não estamos controlando a resposta.

## Manipular os dados retornados

Recordando como podemos fazer isso usando um objeto XHR, a `response` era controlada por uma função. Para o método `.ajax()` é exatamente o mesmo. Podemos encadear a execução dele com o método `.done()`. Passaremos uma função como argumento do método `.done()` que será executada quando a chamada AJAX estiver terminada:

```javascript
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(handleResponse);
```

![done method](https://media.giphy.com/media/xUOwGiAxN7tYlwAZyg/giphy.gif)

A chamada assíncrona é realizada e controlada pelo método `.done()` assim que é finalizada. Neste caso, exibe a resposta no console.

Para testarmos isso, vamos converter essa requisição assíncrona que usa `XHR` em uma chamada com o método `.ajax()` de jQuery. Isso é que temos agora:

```javascript
const githubRequest = new XMLHttpRequest();
githubRequest.onload = addUser;
githubRequest.open('GET', `https://api.github.com/users/${searchedUser}`);
githubRequest.send();
```

Muitas destas operações podem ser manipuladas internamente por jQuery. O primeiro passo da conversão seria assim:

```javascript
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(addUser);
```

Usando jQuery para requisições assíncronas:

- Não temos a necessidade de criar um objeto XHR.
- Ao invés de especificar que a _request_ é do método `GET`, jQuery o faz por padrão e só temos que indicar a URL do recurso que está sendo solicitado.
- Ao invés de configurar o evento `.onload`, usamos o método `.done()`

A requisição deve ser processada corretamente agora. Bom trabalho! Mas agora temos problemas com a `response` e como gerenciá-la.

## Limpando o _callback_ de _success_

Já obtivemos nossa resposta no console. Agora veremos como a adicionamos em nossa página por meio de jQuery. Primeiro vejamos como o faríamos usando o objeto XHR:

```javascript
function addUser() {
    const user = JSON.parse(this.responseText);
    const firstImage = data.results[0];

    userContainer.insertAdjacentHTML('afterbegin', `<div class="card col-md-6 offset-md-3 col-xs-12">
        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${user.name || ''}</h5>
        <h6>@${user.login}</h6>
        <p class="card-text">${user.bio || ''}</p>
        <a href="${user.html_url}" class="btn btn-primary">Stalkear coder</a>
        </div>
    </div>`);
}
```

> **Nota:** Nesta exemplo, o HTML que estamos adicionando é um _card_ de Bootstrap 4. Para a finalidade deste exemplo, você pode usar outra estrutura e projeto.

Se usamos jQuery, poderíamos mudá-lo da seguinte maneira:

```javascript
function addUser(user) {
    $userContainer.html(`<div class="card col-md-6 offset-md-3 col-xs-12">
        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${user.name || ''}</h5>
        <h6>@${user.login}</h6>
        <p class="card-text">${user.bio || ''}</p>
        <a href="${user.html_url}" class="btn btn-primary">Stalkear coder</a>
        </div>
    </div>`);
}
```

### O que mudou?

- A função agora tem um parâmetro (o usuário).
- O parâmetro já foi convertido de JSON para um objeto JavaScript. Assim, não precisamos usar `JSON.parse()`.
- Aproveitamos os métodos de jQuery para manipular o DOM.

O código que adiciona o HTML (template) no contêiner não mudou :).

## E se ocorre um erro, como proceder?

Acesse a documentação de jQuery e revise qual método (assim como `.done()`) você encadearia na requisição AJAX para controlar um possível erro. Uma vez encontrado, você pode testá-lo forçando um erro dentro da URL por exemplo.

## Código fonte do demo

O código visto nesta leitura pode ser encontrado aqui:

<iframe height='400' scrolling='no' title='AJAX con jQuery' src='//codepen.io/ivandevp/embed/vdxNMd/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/vdxNMd/'>AJAX con jQuery</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
