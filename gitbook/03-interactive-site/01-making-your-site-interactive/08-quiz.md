# 08 - Quiz

* Tipo: `quiz`
* Formato: `individual`
* Duração: `30min`

## Objetivos

* Nesta sessão, terá a oportunidade de se autoavaliar, colocando seus conhecimentos à prova. É uma oportunidade para ajustar seu ritmo e certificar-se de que realmente esteja aprendendo. Sucesso!

## Perguntas

### 1\) Complete o seguinte enunciado: `As tags HTML sempre serão nós de tipo _______.`

#### Opções

1. Texto
2. Comentário
3. Elemento
4. Atributo

3

### 2\) Na imagem a seguir

```markup
        <body>
            <h1>Olá Mundo! Programar é muito cool :3 !</h1>
        </body>
```

### O texto `Olá Mundo! Programar é muito cool!` entre as tags h1, corresponde a um nó do tipo **\_\_**

#### Opções

1. Condicional
2. Texto
3. Elemento
4. Atributo

2

### 3\) O DOM nos serve para

#### Opções

1. Atribuir aos elementos de uma página html e modificar suas propriedades
2. Acessar os elementos do navegador e modificá-los
3. Dominar o mundo da programação
4. Criar bucles e condições

1

### 4\)  Quando eu quiser acessar ou obter um elemento exclusivo da minha página da web por meio de seu identificador, que método/métodos de seleção de DOM eu posso usar?

#### Opções

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

3

### 5\)  Para acessar elementos da minha página da Web que possuem a mesma tag HTML, que método / métodos do DOM eu posso usar?

#### Opções

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

1

### 6\) Seleciona os objetos do BOM

#### Opções

1. Location
2. Screen
3. HTMLtags
4. Navigator

1,2,4

### 7\) BOM define **\_\_** métodos para manipular o tamanho e a posição da **\_\_**

#### Opções

1. dois, janela
2. quatro, janela
3. três, tag
4. dois, informação

2

### 8\)  Como posso usar os atributos _data_?

#### Opções

1. Para adicionar estilos css a um elemento do HTML
2. Para identificar um elemento do DOM
3. Para obter o valor de uma entrada de texto
4. Para armazena dados nas tags HTML sem modificar a apresentação do documento

4

### 9\)  Qual das seguintes opções é a correta para usar os atributos _data_?

#### Opções

1. ```markup
    <ul>
      <li data-lista="frutas">Maça</li>
      <li data-lista="frutas">Peras</li>
      <li data-lista="frutas">Morangos</li>
    </ul>
   ```
2. ```markup
    <ul>
      <li data="frutas">Maça</li>
      <li data="frutas">Peras</li>
      <li data="frutas">Morangos</li>
    </ul>
   ```
3. ```markup
    <ul>
      <li data-lista-frutas>Maçã</li>
      <li data-lista-frutas>Peras</li>
      <li data-lista-frutas>Morangos</li>
    </ul>
   ```
4. ```markup
    <ul>
      <li data-lista(frutas)>Maçã</li>
      <li data-lista(frutas)>Peras</li>
      <li data-lista(frutas)>Morangos</li>
    </ul>
   ```

1

### 10\)   Vendo o código a seguir, como podemos acessar nossos atributos _data_ por meio de js?

```markup
<p id="text" data-autor="Gustavo Monet">
  Aque está nosso texto
</p>
```

#### Opções

1. ```javascript
    var text = document.getElementById("text");
    var autor = autor.dataset;
   ```
2. ```javascript
    var text = document.getElementById("text");
    var autor = dataset.text.autor;
   ```
3. ```javascript
    var text = document.getElementById("text");
    var autor = text.dataset.autor;
   ```
4. ```javascript
    var text = document.getElementById("text");
    var text.dataset = autor;
   ```

3

### 11\)  Por qual método você exclui um nó do DOM?

#### Opções

1. elementoPai.removeAttribute\(**nodo**\);
2. elementoPai.appendChild\(**nodo**\);
3. elementoPai.removeChild\(**nodo**\);
4. elementoPai.removeNode\(**nodo**\);

3

### 12\)  Com que método você cria um evento?

#### Opções

1. .addEventListener\('_\_\_\_', **funcion**\);
2. .createEvent\(' **\_**',**funcion**\);
3. .createElement\('**\_**'\);
4. .actionListener\('**\_**'\);

1

### 13\)  O que são os eventos?

#### Opções

1. Ações que o navegador realiza quando algo não está certo.
2. Ações que são disparadas a partir da interação do usuário com um elemento da página web.
3. Datas importantes para o navegador.

2

### 14\)  Como você adiciona um evento a um elemento?

#### Opções

1. ```javascript
   var botao = document.getElementById('boton');
   botao.createEventListener(click, funcao_a_executar);
   ```
2. ```javascript
   var botao = document.getElementById('boton');
   botao.addEventListener = 'click' + 'funcao_a_executar';
   ```
3. ```javascript
   var botao = document.getElementById('boton');
   botao.addEventListener('click', funcao_a_executar);
   ```
4. ```javascript
   var botao = document.getElementById('boton');
   botao= document.addEventListener('click', funcao_a_executar);
   ```

3

### 15\)  Às vezes temos que usar e.preventDefault\(\) para

#### Opções

1. Para evitar determinado comportamento que os eventos já tem
2. Para que nosso evento tenha um valor por default.
3. Para que o evento execute automaticamente.
4. Para evitar que se invoque o evento.

1

