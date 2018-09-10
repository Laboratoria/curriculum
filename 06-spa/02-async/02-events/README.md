# Events handling

* Tipo: `leitura`
* Formato: `individual`
* Duração: `20min`

***

<iframe src="https://goo.gl/wBwVRr" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

Um evento de JavaScript por si só precisa de utilidade. Para que os eventos sejam úteis, devemos associar funções ou código JavaScript a cada evento. Desta forma, quando um evento é disparado, o código associado é executado, de forma que durante a execução da aplicação se possa responder a qualquer evento.

As funções ou códigos JavaScript que são definidos em cada evento são denominadas manipuladores de eventos (*event handlers* em inglês) e como JavaScript é uma linguagem muito flexível, existem várias formas diferentes que indicar os manipuladores:

* Manipuladores como atributos dos elementos XHMTL
* Manipuladores como funções JavaScript externas
* Manipuladores "semânticos"

## Manipuladores como Atributos dos Elementos XHMTL

Trata-se do método mais simples e ao mesmo tempo menos profissional de indicar o código JavaScript que deve ser executado quando ocorra o evento. Neste caso, o código é incluído como um atributo do próprio elemento XHTML. No exemplo a seguir, desejamos mostrar uma mensagem quando o usuário clique com o mouse sobre um botão:

```html
<input type="button" value="Clique em mim e verás" onclick="console.log('Obrigado por clicar');" />
```

Neste método, são definidos atributos XHTML com o mesmo nome dos eventos que desejamos manipular. O exemplo anterior só quer controlar o evento de clicar com o mouse, cujo nome é *onclick*. Assim, o elemento XHTML para o qual queremos definir esse evento deve incluir um atributo chamado *onclick*.

O conteúdo do atributo é uma cadeia de texto que contém todas as instruções JavaScript que são executadas quando o evento é disparado. Neste caso, o código JavaScript é muito simples:

```js
(console.log('Obrigado por clicar');) // já que só se trata de mostrar uma mensagem.
```

Neste outro exemplo, quando o usuário clica sobre o elemento `<div>` é mostrada uma mensagem e quando o usuário passa o mouse por cima do elemento, outra mensagem é exibida:

```html
<div onclick="console.log('Você clicou com o mouse.');" onmouseover="console.log('Você passou com o mouse por cima de mim.');">
Você pode clicar neste elemento ou simplesmente passar o mouse por cima dele.
</div>
```

Este outro exemplo inclui uma das instruções mais utilizadas nas aplicações JavaScript mais antigas:

```html
<body onload="console.log('A página foi totalmente carregada.');">
 ...
</body>
```

A mensagem anterior é exibida após a página ter sido totalmente carregada, ou seja, depois que todo seu código HTML, suas imagens e qualquer outro objeto da página tenham sido carregados.

O evento *onload* é um dos mais utilizados já que, como vimos no capítulo sobre DOM, as funções que permitem acessar e manipular os nós da árvore DOM só estão disponíveis quando toda a página tenha sido carregada.

## Manipuladores de eventos e variável `this`

JavaScript define uma variável especial chamada `this` que é criada automaticamente e que utiliza algumas técnicas avançadas de programação. Nos eventos, é possível utilizar a variável `this` para se referir ao elemento XHTML que disparou o evento. Esta variável é muito útil para exemplos como o seguinte:

Quando o usuário passa o mouse por cima da `<div>`, a cor da borda se torna preta. Quando o mouse sai da `<div>`, volta a mostrar a cor cinza original.

```html
<div id="conteudos" style="width:150px; height:60px; border:thin solid silver">
  Seção de conteúdos ...
</div>
```

Se a variável `this` não é utilizada, o código necessário para modificar a cor das bordas seria o seguinte:

```html
<div id="conteudos" style="width:150px; height:60px; border:thin solid silver" onmouseover="document.getElementById('conteudos').style.borderColor='black';" onmouseout="document.getElementById('conteudos').style.borderColor='silver';">
    Seção de conteúdos ...
</div>
```

O código anterior é muito grande e muito propenso a erros. Dentro do código de um evento, JavaScript cria automaticamente a variável `this`, que faz referência ao elemento XHTML que disparou o evento. Assim, o exemplo anterior pode ser reescrito da seguinte maneira:

```html
<div id="conteudos" style="width:150px; height:60px; border:thin solid silver" onmouseover="this.style.borderColor='black';" onmouseout="this.style.borderColor='silver';">
    Seção de conteúdos ...
</div>
```

O código acima é muito mais compacto, mais fácil de ler e de escrever e segue funcionando corretamente sem que se modifique o valor do atributo id da `<div>`.

## Manipuladores de eventos como funções externas

A definição de manipuladores de eventos nos atributos XHTML é um método simples mas pouco aconselhável para trabalhar com eventos em JavaScript. O principal inconveniente é que fica muito complicado quando são adicionadas algumas poucas instruções, o que é recomendável somente para os casos mais simples.

Quando o código da função manipuladora é mais complexo, como por exemplo a validação de um formulário, é aconselhável agrupar todo o código JavaScript em uma função externa que é invocada no código XHTML quando o evento é disparado.

Desta forma, o exemplo a seguir:

```html
<input type="button" value="Clique em mim e verá." onclick="console.log('Obrigado por clicar.');" />
```

pode ser transformado em:

```js
function exibirMensagem() {
  console.log('Obrigado por clicar.');
}
```

```html
<input type="button" value="Clique em mim e verá" onclick="exibirMensagem()" />
```

Nas funções externas não é possível utilizar a variável `this` da mesma forma em que fazemos nos manipuladores inseridos nos atributos XHTML. Logo, é necessário passar a variável `this` como parâmetros para a função manipuladora:

```js
function realcar(elemento) {
  switch(elemento.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
      elemento.style.borderColor = 'black';
      break;
    case 'black':
    case 'black black black black':
    case '#000000':
      elemento.style.borderColor = 'silver';
      break;
  }
}
```

```html
<div style="padding: .2em; width: 150px; height: 60px; border: thin solid silver" onmouseover="realcar(this)" onmouseout="realcar(this)">
  Seção de conteúdos...
</div>
```

No exemplo anterior, passamos o parâmetro `this` na função externa, que dentro da função se chama _elemento_. Ao passar `this` como parâmetro, é possível acessar de forma direta a partir da função externa as propriedades do elemento que disparou o evento.

Por outro lado, o exemplo anterior é complicado devido à forma com a qual os diferentes navegadores armazenam o valor da propriedade `borderColor`. Enquanto o Firefox armazena (no caso das quatro bordas terem a mesma cor) o valor simples `black`, Internet Explorer armazena como `black` `black` `black` `black` e o Opera armazena sua representação hexadecimal `#000000`.

## Manipuladores de eventos semânticos

Utilizar os atributos XHTML ou as funções externas para adicionar manipuladores de eventos possui um grave inconveniente: "sujam" o código XHTML da página.

Como sabemos, ao criar páginas web é recomendado separar os conteúdos (XHTML) da apresentação (CSS). Dentro do possível, também é recomendado separar os conteúdos (XHTML) da programação (JavaScript). Mesclar JavaScript e XHTML complica excessivamente o código fonte da página, dificulta sua manutenção e reduz a semântica do documento final produzido.

Felizmente, existe um método alternativo para definir os manipuladores de eventos de JavaScript. Esta técnica consiste em alocar as funções externas por meio das propriedades DOM dos elementos XHTML. Assim, o exemplo a seguir:

```html
<input id="clicavel" type="button" value="Clique em mim e verá." onclick="console.log('Obrigado por clicar.');" />
```
pode ser transformado em:

```js
function exibirMensagem() {
  console.log('Obrigado por clicar.');
}
document.getElementById('clicavel').onclick = exibirMensagem();
```

```html
<input id="clicavel" type="button" value="Clique em mim e verá." />
```

O código XHTML resultante é muito "limpo", já que não se mistura com o código JavaScript. A técnica dos manipuladores semânticos consiste em:

* Atribuir um identificador único ao elemento XHTML por meio do atributo `id`;
* Criar uma função de JavaScript encarregada de manipular o evento;
* Atribuir a função a um evento concreto do elemento XHTML por meio do DOM;

Outra vantagem adicional desta técnica é que as funções externas podem utilizar a variável `this` referente ao elemento que disparou o evento.

Atribuir a função manipuladora por meio do DOM é um processo que requer uma explicação detalhada. Em primeiro lugar, obtemos a referência do elemento ao qual vamos atribuir o manipulador:

```js
document.getElementById('clicavel');
```

Em seguida, é atribuída a função externa ao evento desejado por meio de uma propriedade do elemento com o mesmo nome do evento:

```js
document.getElementById('clicavel').onclick = ...
```

Por fim, atribuímos a função externa. Como já comentamos em capítulos anteriores, o mais importante (e a causa mais comum de erros) é indicar somente o nome da função, ou seja, dispensar os parênteses ao atribuir a função:

```js
document.getElementById('clicavel').onclick = exibirMensagem;
```

Se os parênteses são adicionados, na verdade estamos invocando a função e atribuindo o valor devolvido pela função ao evento `onclick` do elemento.

O único inconveniente deste método é que os manipuladores são atribuídos por meio das funções DOM, que podem somente ser utilizadas após o carregamento completo da página. Dessa maneira, para que a atribuição dos manipuladores não cause erro, é necessário ter certeza de que a página está carregada.

Uma das formas mais simples de garantir que certo código será executado após o carregamento total da página é utilizar o evento `onload`

```js
window.onload = function () {
  document.getElementById('clicavel').onclick = exibirMensagem;
}
```

A técnica anterior utiliza uma função anônima para atribuir algumas instruções ao evento `onload` da página (neste caso utilizando o objeto `window`). Desta forma, para garantir que certo código será executado após o carregamento da página, só é necessário incluí-lo no interior da seguinte estrutura:

```js
window.onload = function () {
  // ...
}
```
