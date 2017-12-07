# Selectores de jQuery

- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

***

## Objetivos de aprendizaje

- Que son y como se ocupan los selectores en jQuery

## Selectores

Los selectores de jQuery te permiten seleccionar y manipular uno o varios
elementos de HTML.

Y otra de las maravillas es que estos se basan en los selectores de CSS. Ejemplos:

- Selector por elemento:
  *$(“elementoHTML”)*

```js
  $('p');
  $('div');
  $('h2, section, p');
```

- Selector por id:
  *$(“#nombreId”)*

``` js
  $('#age');
  $('#country');
  $('#lastname');
```

- Selector por class:
  *$(“.nombreClase”)*

```js
  $('.dogs');
  $('.cats');
  $('.pink', '.blue', '.red');
```

**Nota:** todos los selectores de jQuery comienzan con el signo de pesos y
paréntesis: $().

En este [link](https://www.w3schools.com/jquery/jquery_ref_selectors.asp) hay
una lista muy completa de diferentes selectores.
No vamos a intentar aprenderlos de memoria, por ahora nos basta con saber que
ya hay lugares donde esa información se encuentra. Así que solo échale un
vistazo y vuelve cuando necesites algo muy específico de ellos.
