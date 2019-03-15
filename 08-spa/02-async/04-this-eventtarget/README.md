# `this` vs `event.target`

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Quando começamos a ter aplicações com muito JavaScript podem começar a surgir pequenos problemas de otimização, como lentidão de resposta ou consumo excessivo de memória. Um desses problemas pode estar nos eventos atribuídos ao DOM. 

Suponhamos que temos uma lista bastante grande de elementos. Ao fazer `click` em cada um desses elementos será executada uma função que mostra a informação do item selecionado. O código que implementamos percorre todos os elementos da lista com um *loop* e atribui a cada elemento um evento. É aí que podemos ter problemas. A cada elemento está sendo atribuído um evento, que por sua vez está recebendo uma função anônima. Isso quer dizer que se tivermos uma lista de 1000 elementos, estaremos atribuindo 1000 eventos, aumentando o uso de RAM de nossa aplicação.

Para otimizar isso, podemos fazer somente um evento sobre a lista inteira e quando se clica testar qual elemento foi clicado. Podemos obter esse elemento com `event.target`.

Você já sabe que quando queremos ouvir eventos em JavaScript (por exemplo, quando alguém clica em um botão), a sintaxe é a seguinte:

```js
//vanilla
el.addEventListener('eventType', () =>
  // eventHandler
);
// jQuery
$('seletor').on('eventType', () =>
  // eventHandler
);
```

Em que `eventType` é um tipo de evento (você pode encontrar isso na documento de JS) e o `eventHandler` é a função que será executado quando `eventType` é disparado.

Até aqui, perfeito. Porém, se você quiser que vários elementos ouçam o mesmo `eventType` e executem o mesmo `eventHandler` (por exemplo, em uma galeria de fotos poder `click` em qualquer uma das miniaturas para mostrar a versão ampliada), nossa primeira ideia seria iterar sobre eles. 

```js
var galleryImg = document.querySelectorAll('.gallery-item');
for(let i = 0; i < galleryImg.length; i++) {
  galleryImg[i].addEventListener('eventType', () =>
    // eventHandler
  )
}
```

Se usamos jQuery, é mais simples ainda, pois ele faz a iteração:

```js
$('.gallery-item').on('eventType', () =>
  // eventHandler
)
```

Contudo, o principal problema com essas estratégias é que só são aplicados aos elementos existentes no DOM ao carregar a página. Com o qual, se adicionarmos elementos dinamicamente, estes não serão afetados pelo evento. Por outro lado, se evitamos a iteração, podemos ganhar desempenho. Para isso, utilizamos a delegação de eventos que consiste em ouvir o evento em um elemento pai somente para em seguida capturá-lo quando aconteça a seus filhos. Isso graças a um comportamento dos eventos que vimos na leitura passada `Bubbling`.

## Recordemos Bubbling

`Bubbling` (borbulhando) é uma fase dos eventos (a outra é `capturing` e as duas serão vistas em um outro post com mais detalhes) que significa que, quando um evento ocorre no DOM, captura-se o elemento HTML mais profundo possível e então vai-se voltando por seus pais pela ordem hierárquica até chegar ao objeto global (`window`). Por outro lado, quando um evento ocorre em um elemento, também está acontecendo com seus pais.

## Delegação de eventos

Agora que sabemos que se um evento ocorre em um filho, também ocorre em seus pais, voltemos ao exemplo da galeria. Agora não precisamos iterar sobre os elementos e sim ouvir o evento no pai.

Consideremos o seguinte HTML

```html
<div class="gallery-container">
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
</div>
```

Temos nove elementos `gallery-item`. Mas poderiam ser mais. Contudo, como já conhecemos a delegação, ouviremos o evento somente uma vez no pai. Lembre-se que podemos passar o objeto `Event` como parâmetro (o chamaremos de `e` em nossos exemplos) no `eventHandler` para então obter o `target` que é o elemento que dispara o evento.

```js
let gallery = document.querySelector('.gallery-item');
gallery.addEventListener('eventType', e =>
  console.log(e.target) // imprime no console o elemento que dispara o evento
);
```

E como em nosso caso queremos capturar o evento em todos os elementos com a classe `gallery-item`, faremos assim:

```js
// vanilla
let gallery = document.querySelector('gallery-container');
gallery.addEventListener('eventType', e => {
  if(e.target.classList.contains('gallery-item')){
    //...
  }
});
// jQuery
$('.gallery-container').on('eventType', '.gallery-item', () =>
  //...
);
```

## Sobre ES6 e `this`

Nesta leitura estamos usando `ES6` (se não o está utilizando, deveria). Tenha em conta que se usar uma `arrow function` para o `eventHandler` não poderá capturar o elemento que dispara o evento usando `this` (como em `ES5`) e por isso se recomenda usar `e.target`.
