# Selectores de jQuery

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de aprendizaje

- ¿Qué son y cómo se usan los selectores en jQuery?

## Selectores

Los selectores de jQuery te permiten seleccionar y manipular uno o varios
elementos de HTML.

Y otra de las maravillas es que estos se basan en los selectores de CSS.
Ejemplos:

- Selector por elemento: `$('elementoHTML')`

  ```javascript
  $('p');
  $('div');
  $('h2, section, p');
  ```

- Selector por id: `$('#nombre-id')`

  ```javascript
  $('#age');
  $('#country');
  $('#lastname');
  ```

- Selector por class: `$('.nombre-clase')`

  ```javascript
  $('.dogs');
  $('.cats');
  $('.pink', '.blue', '.red');
  ```

> **Nota:** Todos los selectores de jQuery comienzan con el signo de dólar y
> paréntesis: `$()`.

En este [link](https://www.w3schools.com/jquery/jquery_ref_selectors.asp) hay
una lista muy completa de diferentes selectores.
No vamos a intentar aprenderlos de memoria, por ahora nos basta con saber que
ya hay lugares donde esa información se encuentra. Así que solo échale un
vistazo y vuelve cuando necesites algo muy específico de ellos.

Además, si deseas practicar los selectores que puedes usar, [aquí](http://sk.kapsi.fi/interactive-jquery-tester.html)
puedes escribir un snippet (pedazo de código) HTML y escribir los selectores que
desees y éste resaltará los elementos que el selector identifique.
