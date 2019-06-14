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




<!--




TODOOOOO




-->



![jQuery - ajax](https://media.giphy.com/media/l1KcRuWi059tT6VYQ/giphy.gif)

Este `request` (petición o solicitud) está siendo realizada hacia un recurso en
Github (información del usuario). El request puede ser revisado desde el panel
de redes (pestaña `Network` en el Dev Tools).

Ya sabemos cómo realizar una petición con `.ajax()` pero aun no estamos
controlando la respuesta.

## Manipular los datos retornados

Si recordamos cómo podemos lograr esto usando un objeto XHR, el `response` era
controlado por una función. Para el método `.ajax()` es exactamente lo mismo,
podemos encadenar a la ejecución de éste, el método `.done()`. Vamos a pasar una
función como argumento al método `.done()` que se ejecutará una vez que la
llamada Ajax haya terminado:

```js
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(handleResponse);
```

![done method](https://media.giphy.com/media/xUOwGiAxN7tYlwAZyg/giphy.gif)

La llamada asíncrona es realizada y controlada una vez que termina por el
método `.done()`, en este caso, muestra el response en la consola.

Para ponernos a prueba, vamos a convertir esta petición asíncrona que usa `XHR`
a una llamada con el método `.ajax()` de jQuery. Esto es lo que tenemos
actualmente:

```js
const githubRequest = new XMLHttpRequest();
githubRequest.onload = addUser;
githubRequest.open('GET', `https://api.github.com/users/${searchedUser}`);
githubRequest.send();
```

Muchas de estas operaciones pueden ser manejadas internamente por jQuery, así
que el primer paso de la conversión sería así:

```js
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(addUser);
```

Usando jQuery para peticiones asíncronas:

- No tenemos la necesidad de crear un objeto XHR
- En vez de especificar que el request es de método `GET`, jQuery lo da por
  defecto y solo tenemos que indicarle la URL del recurso que estamos
  solicitando
- En vez de configurar el evento `.onload`, usamos el método `.done()`

La petición debe enviarse correctamente ahora. ¡Gran trabajo! Pero ahora tenemos
problemas con el response y cómo se está controlando.

## Limpiando el callback de success

Ya hemos obtenido la respuesta en la consola, ahora vamos a ver cómo lo
agregamos a nuestra página a través de jQuery. Primero veamos cómo lo
tendríamos usando el objeto XHR:

```js
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

> **Nota:** En este ejemplo, el HTML que se está agregando es un card de
> Bootstrap 4, para fines de este ejemplo, el _markup_ puede tener otra
> estructura y diseño.

Si usamos jQuery, podríamos cambiarlo de la siguiente manera:

```js
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

### ¿Qué cambió?

- La función ahora tienen un parámetro (el usuario)
- El parámetro ya ha sido convertido de JSON a un objeto de JavaScript, así que
  no necesitamos usar `JSON.parse()`
- Aprovechamos los métodos de jQuery para manipular el DOM

El código que agrega el HTML (plantilla) al contenedor no ha cambiado :).

## ¿Y si ocurre un error, cómo lo controlarías?

Entra a la documentación de jQuery y revisa qué método (así como `.done()`)
encadenarías a la petición AJAX para controlar un posible error. Una vez
encontrado, puedes probarlo metiendo un error dentro de la URL por ejemplo.

## Código fuente de la demo

El código visto en esta lectura lo puedes encontrar en el siguiente pen:

<iframe
  height='400'
  scrolling='no'
  title='AJAX con jQuery'
  src='//codepen.io/ivandevp/embed/vdxNMd/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [AJAX con jQuery](https://codepen.io/ivandevp/pen/vdxNMd/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>
