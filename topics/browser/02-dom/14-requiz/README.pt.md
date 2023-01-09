---
type: quiz
duration: 30min
---

# Quiz #2: requizzing

## Objetivos

* Fazer um segundo quiz para garantir que terminamos a unidade com um
  entendimento completo dos conceitos.

***

## Perguntas

### 1) O nó `document`, é `pai` dos objetos ou nós

#### Opções

1. Nós`meta` dentro de `head`
2. Nós script dentro de `body`
3. Os nós `head` y `body`
4. Não é pai de nenhum nó

<solution style="display:none;">3</solution>

### 2) Propriedades dos nós do DOM

#### Opções

1. `nodeName`
2. `nodeClass`
3. `nodeType`
4. `nodeValue`
5. `nodeID`

<solution style="display:none;">1,3,4</solution>

### 3) Para o elemento a seguir, como posso mudar a cor de fundo do parágrafo?

```html
<p id="paragraph">Olá, sou un parágrafo sensual</p>
```

#### Opções

1. Opção 1

   ```javascript
   const paragraph = document.getElementById('paragraph');
   paragraph.style.background = 'red';
   ```

2. Opção 2

   ```javascript
   const paragraph = document.getElementById('paragraph');
   paragraph.style.backgroundColor = 'red';
   ```

3. Opção 3

   ```javascript
   const paragraph = document.getElementById('paragraph');
   paragraph.backgroundColor = 'red';
   ```

<solution style="display:none;">2</solution>

### 4) `document.getElementsByClassName('unaClase')`, retorna um

```javascript
const elementos = document.getElementsByClassName('unaClase');
console.log(elementos);
```

#### Opções

1. Vetor de nós HTML com a classe `unaClase`;
2. Vetor com o valor de texto contido dentro de todos los elementos

   com a classe `unaClase`;

3. Todos os caracteres da string `unaClase`;
4. Retorno somente o primeiro Elemento com classe `unaClase`;

<solution style="display:none;">1</solution>

### 5) Quando quero acessar todo os elementos que compartilham a mesta tag html, utilizo

#### Opções

1. `.querySelector();`
2. `.getElementsByClassName();`
3. `.lastChild();`
4. `.getElementsByTagName();`

<solution style="display:none;">4</solution>

### 6) Qual função utilizamos para criar animações com JS?

#### Opções

1. `location.href`
2. `setTimeout();`
3. `setInterval();`
4. `confirm();`

<solution style="display:none;">3</solution>

### 7) Por que é importante o objeto screen ?

#### Opções

1. Para conhecer as resoluções mais utilizadas
2. Para identificar um elemento do DOM
3. Para adaptar os gráficos às resoluções mais utilizadas
4. Para armazenar dados nas tags HTML sem modificar a apresentação do documento

<solution style="display:none;">1,3</solution>

### 8) Como posso obter a URL da página anterior a que estou neste momento?

#### Opções

1. `document.referrer`
2. `document.URL`
3. `document.title`
4. `document.lastModified`

<solution style="display:none;">1</solution>

### 9) Qual método utilizamos para adicionar à `listaDeCompras` um novo elemento chamado `elementoLista`?

```html
  <ul id="listaDeCompras">
    <li>Leite sem Lactose</li>
    <li>Arequipe</li>
    <li>Harina para Hotcakes</li>
    <li>Moras</li>
  </ul>
```

#### Opções

1. document.createTextNode\(elementoLista\);
2. listaDeCompras.appendChild\(elementoLista\);
3. listaDeCompras.getElementByName\('elementoLista'\);

<solution style="display:none;">2</solution>

### 10) Qual evento é disparado ao selecionar o texto de um _input_ ou _textarea_?

#### Opções

1. onclick
2. onselect
3. onmouseover
4. ondblclick

<solution style="display:none;">2</solution>

### 11) Para armazenar dados nas tags HTML sem modificar a apresentação do documento, usamos

#### Opções

1. Atributos data
2. Tags semánticas
3. Variáveis
4. Dados-HTML

<solution style="display:none;">1</solution>

### 12) Sintaxe dos atributos data

#### Opções

1. const data = "valor"
2. data-nomeAtribuido = "valor"
3. data = "valor"
4. nomeAtribuido-Datos\(valor\)

<solution style="display:none;">2</solution>

### 13) O método addEventListener serve para

#### Opções

1. Criar um elemento
2. Criar uma classe no DOM
3. Criar um evento
4. Criar um nó texto

<solution style="display:none;">3</solution>

### 14) Quantos métodos definem o BOM para manipular a janela?

#### Opções

1. 1
2. 2
3. 3
4. 4

<solution style="display:none;">4</solution>

### 15) Seleciona os objetos do BOM

#### Opções

1. Location
2. Screen
3. HTMLtags
4. Navigator

<solution style="display:none;">1,2,4</solution>
