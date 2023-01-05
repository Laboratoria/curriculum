---
type: quiz
duration: 30min
---

# Quiz #1

## Objetivos

- Nesta sessão, terá a oportunidade de se autoavaliar, colocando seus
  conhecimentos à prova. É uma oportunidade para ajustar seu ritmo e
  certificar-se de que realmente esteja aprendendo. Sucesso!

***

## Perguntas

### 1) Complete o seguinte enunciado: `As tags HTML sempre serão nós de tipo _______.`

#### Opções

1. Texto
2. Comentário
3. Elemento
4. Atributo

<solution style="display:none;">3</solution>

### 2) Na imagem a seguir, o texto `Olá Mundo! Programar é muito cool!` entre as tags h1, corresponde a um nó do tipo **\_\_**

```html
<body>
  <h1>Olá Mundo! Programar é muito cool :3 !</h1>
</body>
```

#### Opções

1. Condicional
2. Texto
3. Elemento
4. Atributo

<solution style="display:none;">2</solution>

### 3) O DOM nos serve para

#### Opções

1. Atribuir aos elementos de uma página html e modificar suas propriedades
2. Acessar os elementos do navegador e modificá-los
3. Dominar o mundo da programação
4. Criar bucles e condições

<solution style="display:none;">1</solution>

### 4)  Quando eu quiser acessar ou obter um elemento exclusivo da minha página da web por meio de seu identificador, que método/métodos de seleção de DOM eu posso usar?

#### Opções

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

<solution style="display:none;">3</solution>

### 5)  Para acessar elementos da minha página da Web que possuem a mesma tag HTML, que método / métodos do DOM eu posso usar?

#### Opções

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

<solution style="display:none;">1</solution>

### 6) Seleciona os objetos do BOM

#### Opções

1. Location
2. Screen
3. HTMLtags
4. Navigator

<solution style="display:none;">1,2,4</solution>

### 7) BOM define **\_\_** métodos para manipular o tamanho e a posição da **\_\_**

#### Opções

1. dois, janela
2. quatro, janela
3. três, tag
4. dois, informação

<solution style="display:none;">2</solution>

### 8)  Como posso usar os atributos _data_?

#### Opções

1. Para adicionar estilos css a um elemento do HTML
2. Para identificar um elemento do DOM
3. Para obter o valor de uma entrada de texto
4. Para armazena dados nas tags HTML sem modificar a apresentação do documento

<solution style="display:none;">4</solution>

### 9)  Qual das seguintes opções é a correta para usar os atributos _data_?

#### Opções

1. Opção 1

   ```html
      <ul>
         <li data-lista="frutas">Maça</li>
         <li data-lista="frutas">Peras</li>
         <li data-lista="frutas">Morangos</li>
      </ul>
   ```

2. Opção 2

   ```html
      <ul>
         <li data="frutas">Maça</li>
         <li data="frutas">Peras</li>
         <li data="frutas">Morangos</li>
      </ul>
   ```

3. Opção 3

   ```html
      <ul>
         <li data-lista-frutas>Maçã</li>
         <li data-lista-frutas>Peras</li>
         <li data-lista-frutas>Morangos</li>
      </ul>
   ```

4. Opção 4

   ```html
      <ul>
         <li data-lista(frutas)>Maçã</li>
         <li data-lista(frutas)>Peras</li>
         <li data-lista(frutas)>Morangos</li>
      </ul>
   ```

<solution style="display:none;">1</solution>

### 10)   Vendo o código a seguir, como podemos acessar nossos atributos _data_ por meio de js?

```html
<p id="text" data-autor="Gustavo Monet">
  Aque está nosso texto
</p>
```

#### Opções

1. Opção 1

   ```javascript
   const text = document.getElementById('text');
   const autor = autor.dataset;
   ```

2. Opção 2

   ```javascript
   const text = document.getElementById('text');
   const autor = dataset.text.autor;
   ```

3. Opção 3

   ```javascript
   const text = document.getElementById('text');
   const autor = text.dataset.autor;
   ```

4. Opção 4

   ```javascript
   const text = document.getElementById('text');
   const text.dataset = autor;
   ```

<solution style="display:none;">3</solution>

### 11)  Por qual método você exclui um nó do DOM?

#### Opções

1. elementoPai.removeAttribute(**nodo**);
2. elementoPai.appendChild(**nodo**);
3. elementoPai.removeChild(**nodo**);
4. elementoPai.removeNode(**nodo**);

<solution style="display:none;">3</solution>

### 12)  Com que método você cria um evento?

#### Opções

1. .addEventListener('_\_\__', **funcion**);
2. .createEvent(' **\_**',**funcion**);
3. .createElement('**\_**');
4. .actionListener('**\_**');

<solution style="display:none;">1</solution>

### 13)  O que são os eventos?

#### Opções

1. Ações que o navegador realiza quando algo não está certo.
2. Ações que são disparadas a partir da interação do usuário com um elemento da
   página web.
3. Datas importantes para o navegador.

<solution style="display:none;">2</solution>

### 14)  Como você adiciona um evento a um elemento?

#### Opções

1. Opção 1

   ```javascript
   const botao = document.getElementById('boton');
   botao.createEventListener(click, funcao_a_executar);
   ```

2. Opção 2

   ```javascript
   const botao = document.getElementById('boton');
   botao.addEventListener = 'click' + 'funcao_a_executar';
   ```

3. Opção 3

   ```javascript
   const botao = document.getElementById('boton');
   botao.addEventListener('click', funcao_a_executar);
   ```

4. Opção 4

   ```javascript
   const botao = document.getElementById('boton');
   botao = document.addEventListener('click', funcao_a_executar);
   ```

<solution style="display:none;">3</solution>

### 15)  Às vezes temos que usar e.preventDefault() para

#### Opções

1. Para evitar determinado comportamento que os eventos já tem
2. Para que nosso evento tenha um valor por default.
3. Para que o evento execute automaticamente.
4. Para evitar que se invoque o evento.

<solution style="display:none;">1</solution>
