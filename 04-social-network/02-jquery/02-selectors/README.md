# Seletores de jQuery

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de aprendizagem

- O que são e como se usam os seletores em jQuery?

## Seletores

Os seletores de jQuery permitem selecionar e manipular um ou vários elementos de HTML.

E outra de suas maravilhas é que eles se baseiam nos seletores de CSS.
Exemplos:

- Seletor por elemento: `$('elementoHTML')`

  ```javascript
  $('p');
  $('div');
  $('h2, section, p');
  ```

- Seletor por id: `$('#nombre-id')`

  ```javascript
  $('#age');
  $('#country');
  $('#lastname');
  ```

- Seletor por class: `$('.nombre-clase')`

  ```javascript
  $('.dogs');
  $('.cats');
  $('.pink .blue .red');
  ```

> **Nota:** Todos os seletores de jQuery começam com o símbolo de dólar e parênteses: `$()`.

Neste [link](https://www.w3schools.com/jquery/jquery_ref_selectors.asp) há uma lista muito completa de diferentes seletores. Não vamos tentar aprender todos. Por enquanto nos basta saber que já há lugares onde essa informação está. Então apenas dê uma olhada nele e volte quando precisar de algo muito específico.

Além disso, se desejar praticar os seletores que pode utilizar, [aqui](http://sk.kapsi.fi/interactive-jquery-tester.html) você pode escrever um *snippet* (pedaço de código) HTML e escrever os seletores que desejar e ele vai destacar os elementos que o seletor identificar.
