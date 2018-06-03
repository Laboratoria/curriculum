# 05 - Data Attributes

## Atributos de dados

* Tipo: `leitura`
* Formato: `ritmo próprio`
* Duração: `30min`

### Objetivos de Aprendizagem

Nesta unidade aprenderemos em profundidade:

* Quais são os atributos de dados e para que servem?
* Como eles são usados?

## O que são os atributos de dados?

Eles são atributos personalizados que nos permitem adicionar dados aos nossos elementos HTML, que não são necessariamente visíveis, mas que nos ajudam muito ao fornecer informações adicionais sobre esses elementos.

## Como eles são usados?

Usá-los é muito fácil, já que sua sintaxe e interação são simples.

### Sintaxe

Consiste em um prefixo `data-` acompanhado do nome \(_em letras minúsculas_\) que consideramos mais apropriado para o valor que você irá salvar:

```markup
<elemento id="exemplo" data-nome="valor" data-outro-nome="outro valor">
```

### Interação com JavaScript

Para acessar esses atributos, usamos o método `dataset`.

```javascript
  var exemplo = document.getElementById("exemplo");
  var valor = exemplo.dataset.nome;
  var outroValor = ejemplo.dataset.outroNome;
```

Neste [link](https://cybmeta.com/los-atributos-data-y-el-dataset-api) , podemos encontrar informações mais detalhadas sobre isso que acabamos de ler.

## E o que vem agora?

Como temos uma noção do que são e como os atributos de dados são usados, o que você acha de vermos o vídeo a seguir, no qual um exercício é mostrado fazendo uso deles.

![](https://camo.githubusercontent.com/81e65d84fafc71b9d42d6c3e0c2c8ee71f1bd7c5/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f666e6e366d714e315338512f302e6a7067)

Para ler mais sobre os atributos de dados, verifique este [link](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) e este outro [link](https://www.w3schools.com/tags/att_global_data.asp) .

