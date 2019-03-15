# Eventos

- Tipo: `leitura`
- Formato: `individual`
- Duração: `90min`

***

## Objetivos de aprendizagem

- Aprender como podemos trabalhar com eventos por meio de jQuery.

### Eventos com jQuery

jQuery fornece métodos para associar controladores de eventos(em inglês _event
handlers_) a seletores. Quando um evento ocorre a função associada é executada.

A função do controlador de eventos pode receber um objeto e este pode ser
utilizado para determinar a origem de um evento e/ou em casos específicos
permite evitar o comportamento previsto para ele.

Para ler mais detalhes sobre o objeto *evento* você pode visitar [este
link](http://librosweb.es/libro/fundamentos_jquery/capitulo_5/el_objeto_del_evento.html)
e este [outro](http://api.jquery.com/category/events/event-object/). Não é
preciso entender tudo isso 100%, já que só lendo pode ser difícil. Mas quando
colocarmos em prática será útil para entender diferentes comportamentos de
nossos eventos.

```javascript

$('selector').evento(function() {
  // Instruções que serão executadas no momento em que o evento for disparado
});

```

No exemplo anterior vimos que estamos selecionando todos os parágrafos que
possamos ter em nosso HTML. Logo depois, atribuímos o evento que vamos usar e
por último as instruções que devem ser executadas.

```javascript

$('p').click(function() {
    console.log('click');
});

```

> Neste [link](https://codepen.io/Si7v4n4/pen/OzQdzJ?editors=1010#0) podemos ver
> um exemplo de onde utilizamos o que já vimos anteriormente (seletores, DOM,
> eventos, etc.). Pode mexer como quiser, a prática leva à perfeição!

Os eventos que são usados com mais frequência são:

![Eventos](https://user-images.githubusercontent.com/25912510/54452911-30861880-4724-11e9-9248-626d17b451dd.png)

E aqui temos uma lista de todos os eventos que podem ser utilizados no jQuery,
para executar métodos e funções.

![lista-eventos](https://user-images.githubusercontent.com/25912510/54452702-c7060a00-4723-11e9-9482-7fbd820a9505.png)

Se você tiver curiosidade ou alguma dúvida, talvez este sítio educativo possa
lhe ajudar a esclarecê-la: [Try jQuery](http://try.jquery.com/).
