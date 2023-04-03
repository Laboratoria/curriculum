---
type: read
duration: 20min
---

# Modificando atributos do DOM

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

- Como manipular atributos que utilizam a interface `HTMLElement` do DOM.
  * `.id`
  * `.src`
  * `.className`
- Como manipular atributos que não utilizam a interface `HTMLElement`.
  * `getAttribute()`
  * `setAttribute()`
- Como modificar atributos CSS do DOM
  * `.style.property`

***

### Atributos

Além de modificar o conteúdo do nó ou o próprio nó, também podemos buscar os
atributos do nó, buscar os seus valores e modificá-los.

Os atributos que podemos trabalhar diretamente são os que utilizam a interface
`HTMLElement`.

![Nodos](https://user-images.githubusercontent.com/11894994/59519308-f8ff4780-8e9d-11e9-96aa-edd666cb3aa8.png)

```js
const paragraph = document.getElementById('paragraph');
/*
 * Para obter o valor designado utilizamos o nós seguido do
 * atributo que queremos obter
 */
paragraph.id;
/*
 * Para atribuir o valor ou valores ao atributo, chame o nome do
 * atributo e designe o valor
 */
paragraph.className = 'nueva-clase';
/*
 * É utilizado ".className" para fazer referência ao atributo class.
 * Pois no JavaScript class é uma palavra reservada
 */
```

Haverá momentos em que precisaremos trabalhar com atributos que não fazem parte
da interface HTMLElement. Para esses casos, existem dois métodos:
`.setAttribute()` e `.getAttribute().`

#### setAttribute ('atributo', 'valor')

Cria um atributo e define um valor.

#### getAttribute ('atributo')

Obtém o valor do atributo.

```html
<img id='image'
  src="https://user-images.githubusercontent.com/11894994/59519308-f8ff4780-8e9d-11e9-96aa-edd666cb3aa8.png"
  alt="DOM - innerHTML" width="100%"  />
```

```js
const image = document.getElementById('image');

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

## Manipulando CSS pelo Javascript

É um pouco diferente da maioria dos outros atributos, pois a propriedade de
estilo é um objeto, que irá conter as propriedades de CSS dentro dela.

### style

Esta propriedade é usada para exibir ou definir o estilo do nó no qual está
sendo usado.

- Sintaxis

  ```js
    elemento.style.propriedade = valor;
  ```

Tenha em mente que as propriedades CSS que são separadas por um hífen
\(`font-family`, `font-size`, `border-bottom`\) deve ser escrito notação
_lowerCamelCase_ \(`fontFamily`, `fontSize`, `borderBottom`\).

```js
const paragraph  = document.getElementById('paragraph');
paragraph.style.padding = '5px';
paragraph.style.color = 'rgb(242, 242, 242)';
paragraph.style.fontFamily = 'helvetica';
```

![Styles in JS](https://user-images.githubusercontent.com/11894994/59519792-0a951f00-8e9f-11e9-970a-81558d6b8baa.png)
