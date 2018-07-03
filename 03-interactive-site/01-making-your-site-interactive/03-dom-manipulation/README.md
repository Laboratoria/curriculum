# Modificando o DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `120min`

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

* Como manipular os nós do DOM
* Como criar, adicionar e remover nós do DOM.
* Conhecer as seguintes propriedades:
  * `.innerHTML`
  * `.textContent`
  * `.innerText`
  * `.value`
  * `.style.property`
* Conhecer os seguintes métodos:
  * `document.createTextNode()`
  * `document.createElement()`
  * `.appendChild()`
  * `.removeChild()`
  * `.replaceChild()`
  * `.insertBefore()`

***

[Aqui, outra leitura sobre o DOM](http://eloquentjavascript.net/13_dom.html)

## Modificando elementos e conteúdo do DOM

No tópico anterior vimos o que é o DOM e como selecionar nós usando JavaScript. Desta vez vamos usar o DOM para modificar o documento HTML usando JavaScript.

Os atributos `.textContent` e `.innerHTML` funcionam como propriedades para obter e modificar o valor de um elemento específico.

### textContent

Ao usar textContent em um nó, ele mostrará o conteúdo do texto que existe no nó e seus filhos. Se houver tags HTML, elas serão ignoradas. Se um valor for atribuído, ele substituirá todo o conteúdo do nó pela _string_ atribuída a ele. Se a _string_ contiver tags HTML, elas serão interpretadas e exibidas como texto. As alterações feitas não serão permanentes, o documento retornará ao seu estado original assim que o site for recarregado.

![textContent](http://blog.eamexicano.com/wp-content/uploads/2014/02/textcontent.png)

### innerHTML

Funciona de maneira semelhante ao textContent, mas, além de mostrar o texto que existe no nó selecionado e nos filhos, ele mostrará as tags HTML que podem existir. Se um valor for atribuído a ele, o conteúdo do nó será substituído, incluindo seus filhos, pela sequência de texto atribuída a ele. Ao contrário do`textContent`, se as tags HTML existirem na _string_ atribuída, elas serão exibidas no navegador. As alterações feitas não serão permanentes, o documento retornará ao seu estado original assim que o site for recarregado.

![innerHTML](http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png)

 No vídeo a seguir, vemos de uma maneira prática, como usar `.innerHTML` e `.textContent`:

 [Modificando, substituindo e excluindo nós](https://www.youtube.com/watch?v=jWpUT_dF8EA)

### value

A propriedade `value` define ou retorna o valor do atributo **value** de um campo de texto.

* Sintaxe
  * Retorna a propriedade **value**: `elemento.value`;
  * Modifica a propriedade **value**: `elemento.value = texto`;

> Nota: o valor de retorno é uma _string_, que representa o valor do campo de texto.

Você pode ver um exemplo mais claro neste [pen](https://codepen.io/Si7v4n4/pen/prBzoX?editors=1010#0) .

### insertBefore

 Permite escolher um nó do documento e incluir outro antes dele.

```javascript
pai.insertBefore(novoNo, noDeReferencia);
```

 Se tivéssemos um fragmento de um documento como este:

```html
<div id="container">
    <p>Primeiro parágrafo.</p>
    <p>Segundo paragráfo.</p>
</div>
```

 e quiséssemos adicionar um novo parágrafo antes do segundo, faríamos assim:

```javascript
// Criamos o novo parágrago com seu texto filho
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Novo parágrafo.');
newParagraph.appendChild(paragraphText);

// Armazenamos em uma varipavel o pai e em outra variável o segundo parágrafo
var container = document.getElementById('container');
var secondParagraph = container.getElementsByTagName('p')[1];

// Agora inserimos
container.insertBefore(newParagraph, secondParagraph);
```

### replaceChild

Este método é usado para substituir um nó secundário por outro. Tome como argumentos dois nós: um novo nó e o nó a ser substituído. O nó substituído deve ser um filho do elemento para o qual o método é chamado.

*  Sintaxe:

  ```javascript
    pai.replaceChild(novoNo, noParaSubstituir);
  ```

Com o mesmo HTML do exemplo de `.insertBefore()`, se quiséssemos substituir o segundo parágrafo pelo qual criamos, faríamos assim:

```javascript
container.replaceChild(newParagraph, secondParagraph);
```

> Note que tanto `.replaceChild()` tanto quanto `.insertBefore()` esperam que o novo nó seja o primeiro argumento.

## Criando nós

O DOM oferece uma variedade de métodos para adicionar nós para a árvore de um documento, masos mais básicos são `.createElement()`, que cria um elemento, e `.createTextNode()`, que cria um nó de texto.

### createElement

Considerando que pode meio do DOM podemos criar um documento praticamente do nada, não é surpreendente que ele forneça um método para criar um elemento concreto.

Lembre-se de que o DOM é a interface que conecta o documento HTML ao JavaScript. É por isso que, ao usar `.createElement(),` o nó não ficará visível no navegador até que seja adicionado ao documento.

*  Sintaxe:

  ```javascript
    document.createElement('elemento');
  ```

Assim, criar um novo parágrafo é tão simples quanto `document.createElement('p');`, atenção às aspas simples. Dessa maneira, o item não estará visível, não será nada além de um fantasma que existe no documento. Enquanto você não atribuir a uma posição na árvore não será exibido para o usuário. Como incluí-lo na árvore, veremos na seção de _adicionar nós ao DOM_ .

### createTextNode

Assim como podemos criar um elemento, podemos criar um texto com o qual ocupá-lo por meio de createTextNode.

* Sintaxe:

  ```javascript
    document.createTextNode('texto');
  ```

Assim como o elemento criado acima com o método `.createElement()`, o texto a ser criado por meio desse método deve ser colocado entre aspas simples. E da mesma forma também, o texto existe, mas em nenhum lugar. Se quiséssemos para , por exemplo, criar um novo parágrafo em um documento com texto _Parabéns programadoras_, teríamos que primeiro criar o elemento `p`, em seguida o nó de texto, e, finalmente, converter o nó de texto em filho do parágrafo por meio de `.appendChild()`, método que vamos ver na seção _adicionar nós ao DOM_ .

```javascript
var paragraph = document.createElement('p');
var message = document.createTextNode('Parabéns programadoras');
paragraph.appendChild(message);
```

Com isso, nossa variável _paragraph_ conteria um elemento `p` com seu texto correspondente, pronto para ser incluído na árvore do documento.

## Adicionar nós ao DOM

Acabamos de ver como criar elementos de texto e nós, mas também vimos que esses nós criados são mantidos no _limbo_ do documento até incluí-los na árvore.

Para trabalhar incorporando, modificando ou eliminando nós, temos os métodos que veremos abaixo.

### appendChild

Por meio desse método, podemos adicionar um novo filho a um nó, desta maneira:

*  Sintaxe

  ```javascript
    padre.appendChild(novoNo);
  ```

O novo nó é incluído imediatamente após os filhos existentes, se houver algum e o nó pai tiver um novo filho.

```javascript
// Criar nó de tipo Element
var paragraph = document.createElement('p');

// Criar nó de tipo Text
var content = document.createTextNode('Olá Mundo!');

// Adicionar o nó Text como filho do nó Element
paragraph.appendChild(content);

// Adicionar o nó Element como filho da página
document.body.appendChild(paragraph);
```

## Remover nós do DOM

Como podemos incluir novos filhos em um nó, faz sentido eliminá-los. Para isso, existe o seguinte método:

### removeChild

Para remover um nó do documento, temos que selecionar o pai do nó e, a partir daí, remover o nó desejado.

Se não soubermos o pai do nó, podemos selecionar diretamente o nó, obter o pai \(com `.parentElement`\) e usar `.removeChild()` para excluí-lo.

*  Sintaxe:

  ```javascript
    pai.removeChild(noParaEliminacao);
  ```

```javascript
var container = document.getElementById('container');
var paragraph = document.getElementById('paragraph');
container.removeChild(paragraph);

/*
 * Com o nó selecionado utilizamos '.parentElement'
 * para selecionar o pai. A partir do pai utilizamos
 * '.removeChild()' para eliminar o nó selecionado.
 */

var paragraph = document.getElementById('paragraph');
paragraph.parentElement.removeChild(paragraph);
```

## AGORA, PRATIQUEMOS UM POUCO

Nos vídeos a seguir vamos colocar em prática a parte teórica já que eles usam os métodos como criar, adicionar e eliminar os nós do DOM por meio do Javascript e assim poder criar páginas dinâmicas. sugerimos que você faça o exercício junto com o vídeo e se necessário, você pode ir pausando.

* Este vídeo dura 8:18, no minuto 2:25 começa a usar os métodos `.createElement()` e `.createTextNode()`.

  [Criando nós DOM](https://www.youtube.com/watch?v=b-ZWMiqsAeU&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=14)

* Este outro vídeo adiciona os nós criados ao DOM.

  [Agregação de nós ao DOM](https://www.youtube.com/watch?v=yQdi_8nh9HE&index=15&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G)

## Modificando atributos

### Atributos

Além de modificar o conteúdo do nó ou nó, também podemos modificar os atributos do nó, saber o valor ou valores que eles possuem e atribuir valores diferentes.

Os atributos com os quais podemos trabalhar diretamente são aqueles que usam a interface `HTMLElement`.

![Nodos](http://blog.eamexicano.com/wp-content/uploads/2014/02/atributos.png)

```javascript
var paragraph = document.getElementById('paragraph');
/*
 * Para obter o valor atribuído utilizamos o nó seguido do atributo que
 * queremos obter
 */
paragraph.id;
/*
 * Para atribuir valor ou valores além do nome do atributo, atribuí-se ele ou
 * os valores
 */
paragraph.className = 'nova mensagem';
/*
 * Utiliza-se '.className' para fazer referência ao 'class'. Em
 * JavaScript, class é uma palavra reservada.
*/
```

Haverá momentos em que precisaremos trabalhar com atributos que não fazem parte da interface HTMLElement. Para esses casos, existem dois métodos: `.setAttribute()` e `.getAttribute().`

#### setAttribute ('atributo', 'valor')

Cria um atributo e define um valor.

#### getAttribute ('atributo')

Obtém o valor do atributo.

```html
<img id='image'
  src="http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png"
  alt="DOM - innerHTML" width="100%"  />
```

```javascript
var image = document.getElementById('image');

// Retorna o tamanho da imagem em px
image.width;
image.height;

// Retorna o tamanho da imagem como está especificado na tag
image.getAttribute('width');
image.getAttribute('height');

/*
 * Se quisermos atribuir um tamanho à imagem que não seja em px temos que
 * utilizar '.setAttribute()'
 */
image.width = '50%';
image.height = 'auto';

image.setAttribute('width', '50%');
image.setAttribute('height', 'auto');
```

## Adicionando estilos por Javascript

Ao contrário da maioria dos outros atributos, a própria propriedade de estilo é um objeto.

### style

 Esta propriedade é usada para exibir ou definir o estilo do nó no qual está sendo usado.

*  Sintaxe

  ```javascript
    elemento.style.propriedade = valor;
  ```

 Tenha em mente que as propriedades CSS que são separadas por um hífen \(`font-family`, `font-size`, `border-bottom`\) deve ser escrito notação _lowerCamelCase_ \(`fontFamily`, `fontSize`, `borderBottom`\).

```javascript
var paragraph  = document.getElementById('paragraph');
paragraph.style.padding = '5px';
paragraph.style.color = 'rgb(242, 242, 242)';
paragraph.style.fontFamily = 'helvetica';
```

![](http://blog.eamexicano.com/wp-content/uploads/2014/02/style.png)

## Animação DOM

Animações JavaScript são feitas através da programação de mudanças graduais no estilo de um elemento.

As mudanças são chamadas por um temporizador. Quando o intervalo do temporizador é pequeno, a animação parece contínua.

Para demonstrar como criar animações HTML com JavaScript, usaremos uma página web simples.

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>Minha Primeira Animação JavaScript</h2>
        <div id="animate">Minha animação será aqui</div>
    </body>
</html>
```

 Todas as animações devem ser relativas a um elemento contêiner.

```html
<div id="container" class="container">
    <div id="animate" class="animate">Minha animação será aqui</div>
</div>
```

O elemento contêiner deve ser criado com `style="position: relative"`. O elemento de animação deve ser criado com `style="position: absolute"`.

Mais tarde, veremos este tópico em detalhes.

```css
.container {
    width: 400px;
    height: 400px;
    position: relative;
    background-color: yellow;
}

.animate {
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: red;
}
```

Como mencionamos anteriormente, as animações de javascript são mudanças graduais. Com a `funçãosetInterval()` podemos fazer essas mudanças e a função _frame_ faz as mudanças nos estilos.

```javascript
var animatedElement = document.getElementById("animate");
var animationId = -1;
var position = 0;

function animate() {
  if (position === 350) {
    clearInterval(id);
  } else {
    position++;
    animatedElement.style.top = position + 'px';
    animatedElement.style.left = position + 'px';
  }
}

function startAnimation() {
  id = setInterval(animate, 5);
}
```

Podemos ver esse exercício na próxima [pen](https://codepen.io/Si7v4n4/pen/OjdZer) .

### Detalhe de JavaScript para animações

Com DOM e Javascript temos várias formas de executar código ou agendar sua execução e agora veremos com mais detalhes as funções que nos permitem isso. Devemos lembrar que até as funções podem ser armazenadas como variáveis, assim como podemos passá-las como parâmetros de outras funções.

#### setInterval

Permite-nos executar uma função de vez em quando, como se fosse um metrônomo. O tempo é medido em milissegundos \(1 segundo = 1000 milissegundos\) e é o segundo parâmetro de `setInterval()`, no qual a primeira é a função que queremos executar em cada momento.

```javascript
setInterval(minhaFuncao, 500);
```

Em geral, usaremos tempos menores, geralmente 15ms ou 16ms, já que dividiremos 1 segundo entre 60, que é o mais usado em videogames e nos dará aproximadamente 60 quadros \(ou frames\) por segundo.

O problema com `setInterval()` é que ele permanecerá até a eternidade. Para resolver isso precisamos usar outra função chamada `clearInterval()`. Para tal, vamos salvar como variável o resultado da execução `setInterval()`:

```javascript
var id = setInterval(minhaFuncao, 500);

// Logo quando queremos para a animação ou função:
clearInterval(id);
```

#### setTimeout

Ao contrário de `setInterval()`, essa função executará uma vez e somente a função que fornecemos como o primeiro parâmetro. O tempo que informamos também é medido em milissegundos.

```javascript
setTimeout(minhaFuncao, 500);
```

 Da mesma forma que `setInterval()` , você também pode cancelar a execução de `setTimeout()` :

```javascript
var id = setTimeout(minhaFuncao, 500);

// Assim quando queremos parar a execução programada:
clearTimeout(id);
```

Você pode combinar por meio de várias funções `setTimeout()` e `setInterval()` animações que são executadas uma ou mais vezes e para controlar a sua ação.

## Referências

* [http://blog.eamexicano.com/dom/manipular-nodos/](http://blog.eamexicano.com/dom/manipular-nodos/)
* [http://www.codexexempla.org/curso/curso\_4\_3\_c.php](http://www.codexexempla.org/curso/curso_4_3_c.php)
* [http://www.codexexempla.org/curso/curso\_4\_3\_c.php](http://www.codexexempla.org/curso/curso_4_3_c.php)
* [http://blog.eamexicano.com/dom/modificar-estilo-contenido/](http://blog.eamexicano.com/dom/modificar-estilo-contenido/)
* [http://www.codexexempla.org/curso/curso\_4\_3\_d.php](http://www.codexexempla.org/curso/curso_4_3_d.php)
* [https://www.w3schools.com/js/js\_htmldom\_animate.asp](https://www.w3schools.com/js/js_htmldom_animate.asp)
* [https://developer.mozilla.org/es/docs/Referencia\_DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducción#Importancia_de_los_tipos_de_datos#Interfaces_esenciales_en_el_DOM)
* [https://www.w3schools.com/jsref/met\_win\_setinterval.asp](https://www.w3schools.com/jsref/met_win_setinterval.asp)
* [https://www.w3schools.com/jsref/met\_win\_settimeout.asp](https://www.w3schools.com/jsref/met_win_settimeout.asp)
