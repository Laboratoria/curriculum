---
type: quiz
duration: 30min
---

# Quiz #2: requizzing

## Objetivos

- Fazer um segundo teste para garantir que terminamos a unidade com uma
  compreensão total dos conceitos.

***

## Perguntas

### 1) A sigla HTML significa

#### Opções

1. Markdown Language Text Tool.
2. Linguagem de marcação de tipo de hiperlink
3. Linguagem de marcação de hipertexto

<solution style="display:none;">3</solution>

### 2) Quais são as tags que precisam ser fechadas?

#### Opções

1. table
2. ol
3. img
4. br
5. a

<solution style="display:none;">1,2,5</solution>

### 3) Exemplo de aninhamento correto

#### Opções

1. `<h3>Olá!!</h3> Sou uma <strong>excelente</strong> <em>programadora</em></p>`
2. `</p>Sou uma </strong>excelente<strong> </em>programadora<em><p>`
3. `<p>Sou uma <strong>excelente</strong> <em>programadora</em></p>`

<solution style="display:none;">3</solution>

### 4) Qual é o valor padrão da propriedade `position` dos elementos?

#### Opções

1. fixed
2. absolute
3. static
4. relative

<solution style="display:none;">3</solution>

### 5) São características de um elemento em linha

#### Opções

1. Não começam com uma nova linha
2. Começam em uma nova linha
3. Podem estar dentro de um elemento de bloco
4. Respeitam as propriedades `margin-top` e `margin-bottom`

<solution style="display:none;">1,3</solution>

### 6) Qual é a diferença entre `display:inline-block` e `display:inline`?

#### Opções

1. Em um elemento _inline_ não se pode determinar dimensões, enquanto um um
   _inline-block_ sim
2. Em um elemento _inline-block_ não se pode determinar dimensões, enquanto que
   _inline_ sim
3. Não há diferenças entre os dois
4. Um elemento _inline_ não aparece na tela, enquanto um _inline-block_ sim

<solution style="display:none;">1</solution>

### 7) Qual é a sintaxe correta para a tag `<a>`?

#### Opções

1. `<a href="http://laboratoria.la/">Ir a Laboratoria</a>`
2. `<a src="http://laboratoria.la/">Ir a Laboratoria</a>`
3. `<a href="http://laboratoria.la/">`

<solution style="display:none;">1</solution>

### 8) Dados os seguintes estilos CSS, que cor eles terão `<h3>`?

```css
h3 {
  color: red !important;
}

h3 {
  color: blue;
}

h2 {
  color: yellow;
}
```

#### Opções

1. red
2. blue
3. yellow

<solution style="display:none;">1</solution>

### 9) Considerando o código a seguir, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul {
  color: red;
}

li {
  color: blue;
}
```

#### Opções

1. Azul
2. Preto
3. Vermelho

<solution style="display:none;">1</solution>

### 10) Considerando o código a seguir, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
.programming-languages .favorite {
  color: red;
}

#must-use {
  color: blue;
}
```

#### Opções

1. Vermelho
2. Preto
3. Azul

<solution style="display:none;">3</solution>

### 11) Considerando o código a seguir, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul#awesome {
  color: red;
}

ul.programming-languages li.favorite span {
  color: blue;
}
```

#### Opções

1. Vermelho
2. Preto
3. Azul

<solution style="display:none;">3</solution>

### 12) Considerando o código a seguir, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul#awesome #must-use {
  color: red;
}

.favorite span {
  color: blue !important;
}
```

#### Opções

1. Vermelho
2. Preto
3. Azul

<solution style="display:none;">3</solution>

### 13) Para que line-height é usado?

#### Opções

1. Definir a altura de cada linha de texto
2. Definir a cor do texto
3. Definir a espessura do texto

<solution style="display:none;">1</solution>

### 14) Qual é a sintaxe do css?

```css
  /* Opção 1 */
  { p = color: red;
    font-size: 15px;
  }

  /* Opção 2 */
  p {
    color: red,
    font-size: 15px,
  }

  /* Opção 3 */
  p {
    color: red;
    font-size: 15px;
  }
```

#### Opções

1. Opção 1
2. Opção 2
3. Opção 3

<solution style="display:none;">3</solution>

### 15) Quais são as propriedades para posicionar elementos?

#### Opções

1. top, left, right, bottom
2. head, body, right, middle
3. up, down, left, right
4. inside, outside, forward, backward

<solution style="display:none;">1</solution>

### 16) Considerando o código a seguir, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul.programming-languages li .highlight {
  color: red;
}

ul.programming-languages li .highlight:nth-of-type(odd) {
  color: yellow;
}
```

#### Opções

1. Vermelho
2. Preto
3. Amarelo

<solution style="display:none;">3</solution>

### 17) Considerando o código a seguir, o que acontecerá com a posição de `#exemplo`?

**HTML:**

```html
<p id="exemplo">Olá!</p>
```

**CSS:**

```css
#exemplo {
   margin-left : -5 px ;
}
```

#### Opções

1. Ele irá se mover `5px` para a esquerda
2. Todos os elementos acima se moverão `5px` para a direita
3. Nenhum

<solution style="display:none;">1</solution>

### 18) Qual propriedade você usa para fazer com que o conteúdo fique abaixo dos elementos flutuantes?

#### Opções

1. hide
2. position
3. clear
4. overflow

<solution style="display:none;">3</solution>

### 19) Qual regra CSS permite que você adicione uma fonte externa?

#### Opções

1. `@font-face`
2. `font-color`
3. `font-family`
4. `font-weight`
5. `float`

<solution style="display:none;">1</solution>
