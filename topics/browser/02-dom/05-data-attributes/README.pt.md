---
type: read
duration: 30min
---

# Atributos de dados

## Objetivos de Aprendizagem

Nesta unidade aprenderemos em profundidade:

* Quais são os atributos de dados e para que servem?
* Como eles são usados?

***

## O que são os atributos de dados?

Eles são atributos personalizados que nos permitem adicionar dados aos nossos
elementos HTML, que não são necessariamente visíveis, mas que nos ajudam muito
ao fornecer informações adicionais sobre esses elementos.

## Como eles são usados?

Usá-los é muito fácil, já que sua sintaxe e interação são simples.

## Sintaxe

Consiste em um prefixo `data-` acompanhado do nome \(_em letras minúsculas_\)
que consideramos mais apropriado para o valor que você irá salvar:

```html
<elemento id="exemplo" data-nome="valor" data-outro-nome="outro valor">
```

## Interação com JavaScript

Para acessar esses atributos, usamos o método `dataset`.

```javascript
  const exemplo = document.getElementById("exemplo");
  const valor = exemplo.dataset.nome;
  const outroValor = exemplo.dataset.outroNome;
```

## E o que vem agora?

Como temos uma noção do que são e como os atributos de dados são usados, o que
você acha de vermos o vídeo a seguir, no qual um exercício é mostrado fazendo
uso deles.

[![Atributos de
dados](https://img.youtube.com/vi/fvyo7d1JDcSs/0.jpg)](https://www.youtube.com/watch?v=fnn6mqN1S8Q)

Para ler mais sobre os atributos de dados, verifique este
[link](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Using_data_attributes)
e este outro [link](https://www.w3schools.com/tags/att_global_data.asp).
