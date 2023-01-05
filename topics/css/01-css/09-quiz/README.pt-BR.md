---
type: quiz
duration: 30min
---

# Quiz #1

## Objetivos

- Nesta seção você terá a oportunidade de avaliar a si mesma para colocar seu
  conhecimento à prova. É uma oportunidade para você se refletir e validar se
  você está realmente aprendendo. Sucesso!

## Perguntas

### 1) O que é HTML?

#### Opções

1. Linguagem de programação
2. Linguagem de marcação
3. Folha de estilo
4. Ferramenta de código aberto

<solution style="display:none;">2</solution>

### 2) A que 'Aninhamento HTML' se refere?

#### Opções

1. Ao início do documento HTML
2. Indica ao navegador que o documento é HTML5
3. Adicione uma linha para que o `html` apareça na segunda linha
4. Que um elemento pode conter outros elementos ou tags HTML

<solution style="display:none;">4</solution>

### 3) Quais são as tags que não precisam de fechamento?

#### Opções

1. em
2. div
3. img
4. p

<solution style="display:none;">3</solution>

### 4) Exemplo correto de aninhamento

#### Opções

1. `<p>Sou uma <strong>excelente</p> <em>coder</em></strong>`
2. `</p>Sou uma </strong>excelente<strong> </em>coder<em><p>`
3. `<p>Sou uma <strong>excelente</strong> <em>coder</em></p>`

<solution style="display:none;">3</solution>

### 5) Quais são as características de um elemento em bloco?

#### Opções

1. Não começam com uma nova linha
2. Começam em uma nova linha
3. Podem começar em qualquer parte de uma linha
4. Podem conter elementos em linha e outros elementos de bloco

<solution style="display:none;">2,4</solution>

### 6) Propriedades CSS são `case-sensitive` (levam em conta letras minúsculas e maiúsculas)

```css
ul {
   MaRgiN : 10px;
}
```

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">2</solution>

### 7) Qual é a diferença entre `display: inline-block` e `display: inline`?

#### Opções

1. Em um elemento _inline_ não se pode determinar dimensões, enquanto um um
   _inline-block_ sim
2. Você não pode determinar dimensões em um elemento _inline-block_, enquanto
   que _inline_ sim
3. Não há diferenças entre os dois
4. Um elemento _inline_ não aparece na tela, enquanto que um _inline-block_ sim

<solution style="display:none;">1</solution>

### 8) Qual é a sintaxe correta para a tag `img`?

#### Opções

1. `<image src="foto.jpg" alt="Foto"></image>`
2. `<image href="foto.jpg" alt="Foto">`
3. `<img href="foto.jpg" alt="Foto">`
4. `<img src="foto.jpg" alt="Foto">`
5. `<img src="foto.jpg" alt="Foto"></img>`

<solution style="display:none;">4</solution>

### 9) As propriedades `margin-top` e `margin-bottom` têm efeito em elementos _inline_?

#### Opções

1. Sim
2. Não

<solution style="display:none;">2</solution>

### 10) Faça as propriedades `padding-top` e `padding-bottom` aumentam o tamanho de um elemento _inline_?

#### Opções

1. Sim
2. Não

<solution style="display:none;">2</solution>

### 11) Dado o seguinte estilo CSS, que cor  terão os `<h3>`?

```css
h3 {
  color: red;
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

<solution style="display:none;">2</solution>

### 12) Qual ordem prevalece para atribuir um estilo?

#### Opções

1. Especificidade, ordem de código e importância
2. Importância, especificidade e ordem do código
3. Ordem de código, importância e especificidade

<solution style="display:none;">2</solution>

### 13) De acordo com o seguinte código, qual será a cor do elemento `.phrase`?

**HTML:**

```html
<p id="quote">
  <strong class="subject">Laboratoria</strong>
  <em class="phrase">código que transforma</em>
</p>
```

**CSS:**

```css
#quote {
  color: #FAB541;
}

.phrase {
  color: blue;
}

#quote .phrase {
  color: initial;
}
```

#### Opções

1. `#FAB541`
2. Azul
3. Padrão do navegador (preto)

<solution style="display:none;">3</solution>

### 14) Tendo em conta o seguinte código, qual é a cor do texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul li {
  color: red;
}

#must-use {
  color: blue;
}
```

#### Opções

1. Preto
2. Azul
3. Vermelho

<solution style="display:none;">2</solution>

### 15) Tendo em conta o seguinte código, qual é a cor do texto **JavaScript**?

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
  color: blue;
}
```

#### Opções

1. Vermelho
2. Preto
3. Azul

<solution style="display:none;">3</solution>

### 16) Levando em conta o `HTML` e o resultado, qual seria o `CSS` necessário para produzir o resultado?

**HTML:**

```html
<div class="container">
  <div class="box red"></div>
  <div class="box blue"></div>
</div>
```

**RESULTADO:**

![Posicionamento -
Pergunta](https://user-images.githubusercontent.com/25912510/58491612-f5955d80-8134-11e9-9605-3025b3e773e6.png)

#### Opções

1. `.container` com `position: relative;` e `.red` com `position: absolute;` e
   `left: 200px;`
2. `.container` com `position: fixed;` e `.red` com `left: 200px;`
3. `.red` com `position: absolute;` e `left: 200px;`
4. `.red` com `position: relative;` e `left: 200px;`

<solution style="display:none;">1</solution>

### 17) Considerando o código a seguir, o que acontecerá com a posição de `#exemplo`?

**HTML:**

```html
<p id="exemplo">Olá!</p>
```

**CSS:**

```css
#exemplo {
  margin-bottom: 5px;
}
```

#### Opções

1. Descerá `5px`
2. Todos os elementos começarão `5px` abaixo
3. Nenhum

<solution style="display:none;">2</solution>

### 18) O que acontece com os elementos em linha quando se torna flutuante?

#### Opções

1. Permanece como um elemento em linha
2. Torna-se um elemento de bloco

<solution style="display:none;">2</solution>

### 19) Selecione as propriedades que correspondem aos tipos de letra

#### Opções

1. font-size
2. font-color
3. font-family
4. font-weight
5. float

<solution style="display:none;">1,3,4</solution>
