# Eventos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

1. O que é um evento e para que serve?
2. Como usá-los?
3. Gerenciamento e fluxo de eventos \(propagação\).
4. Tipos

***

## O que é um evento?

É quando o usuário realiza uma ação permitindo que ele interaja com o programa.
Cada evento é associado a um manipulador \(_conhecidos como eventHandlers ou
eventListener_\), que será executado quando o evento ocorrer.

Aqui está um [vídeo](https://www.youtube.com/watch?v=gyICdb1iwII) de referência.

## Como usar os eventos?

Para poder fazer uso da magia dos eventos é necessário saber primeiro como
"escutá-los". Isto pode ser conseguido através do método **addEventListener** .

A sintaxe é muito simples:

```javascript
  elemento_que_escuta.addEventListener('evento', funcao_para_escutar);
```

Aqui um [link](http://www.codexexempla.org/curso/curso_4_3_e.php) de referência.

Existem diferentes formas de associar um evento a elementos do DOM. Para saber
mais visite este
[link](http://librosweb.es/libro/javascript/capitulo_6/modelo_basico_de_eventos_2.html)
\(a partir de 6.2\).

## Tratamento de eventos

Além de adicionar o _listener_ ao evento, ele também pode ser eliminado usando o
método **removeEventListener** , que funciona quase da mesma maneira. A sintaxe
é a seguinte:

```javascript
  elemento_que_escuta.removeEventListener('evento', funcao_para_remover);
```

Para que o método funcione corretamente, é obrigatório enviar como parâmetro o
retorno de chamada \(função\) usado com addEventListener.

Agora vamos falar sobre **objectEvent,** que é outra questão importante no
tratamento de eventos. Quando um evento ocorre, a função que será executada
precisa de informações adicionais sobre ele.

**objectEvent** é o objeto que representa o evento que ocorreu. É criado
automaticamente quando o evento ocorre e é destruído quando sua função de
gerenciamento é executada. Este objeto tem um conjunto de propriedades com
informações sobre o evento. No código a seguir, você encontrará um exemplo.

```javascript
function olaMundo(event){
  const evento = window.event || event;
  alert('Olá Mundo.');
}

const botao = document.getElementById('botao');
botao.addEventListener('click', olaMundo, false);
```

Às vezes é necessário evitar certos comportamentos que um evento tem por padrão.
Para isso existe **preventDefault.** Aqui está um exemplo:

> Este é o código para um formulário muito simples Há um _input_ para inserir o
> nome e outro para inserir o sobrenome. Finalmente, há um _input_ do tipo
> _submit_ \(botão de envio\)

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
```

> Agora vejamos a funcionalidade JS: Na primeira parte são armazenados em
> variáveis os elementos do formulário. Em seguida, temos a função que dispara o
> evento _submit._ Esta função verifica se os campos estão vazios. Se a condição
> se cumpre a função executa _preventDefault_ para _eventObject_ \(e\) impedindo
> que o formulário seja enviado automaticamente \(ação que tem por padrão este
> tipo de "botão"\) para mostrar ao usuário uma mensagem de erro.

```javascript
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

## Fluxo de Eventos (Propagação)

Quando um evento é executado, ele passa por diferentes fases:  _Capture phase_,
_Target phase_ e _Bubbling phase_ , conforme mostrado na imagem a seguir.

![flow-event](https://user-images.githubusercontent.com/11894994/59521680-4205ca80-8ea3-11e9-8332-0ac326994e11.png)

A seguir, um vídeo que te explicará com um exemplo o fluxo que seguem os
eventos:

[![Adicionando nós
DOM](https://img.youtube.com/vi/wsim6ujXeOY/0.jpg)](https://www.youtube.com/watch?v=wsim6ujXeOY)

## Tipo de eventos

Quando o usuário interage com o navegador, vários tipos de eventos podem ser
acionados. Alguns dos mais comuns são:

* Eventos do mouse \(mouseEvent\)
* Eventos de teclado \(keyboardEvent\)
* Eventos de formulários
* Eventos da janela

Para mais informações sobre todos os eventos, acesse este
[link](https://pt.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types).

### Principais eventos

Estes são alguns dos eventos mais usados:

* keyup/keydown
* mouse click
* mouse motion
* scroll
* focus
* load
* script execution timeline
* setting timers
* debouncing

[Aqui](https://codepen.io/Inti_Developer/pen/EvGMKG) você pode encontrar um
exemplo sobre interação com eventos.

> Guia de uso:
>
> 1. Observe como o fundo é branco
> 2. Agora clique no botão _Make magic_ :\)
> 3. Verifique o código e analise a lógica de programação
> 4. Agora tente modificar o código para que ele reaja com outros eventos,
>    divirta-se;\)

Finalmente, anexamos o
[link](https://developer.mozilla.org/pt-BR/docs/Web/Events) da documentação
oficial explicando tudo sobre os eventos:
