# jQuery

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de aprendizagem

- Conhecer quem é este novo amigo.
- Saber como o incluir em nossos projetos.

## O que é jQuery?

Já é claro para nós que este novo amigo funciona muito bem com os frameworks de CSS, mas na verdade o conhecemos pouco. Assim, nesta unidade vamos nos aprofundar em seu detalhe para poder conhecê-lo melhor e verificar se podemos incluí-lo em nosso círculo de novas amizades ou não.

[jQuery](https://jquery.com/) é uma biblioteca de JavaScript (**não** é um **framework**) e fornece as seguintes características:

- Facilita a maneira de interagir com os documentos HTML.
- Manipulação do DOM.
- Manipular eventos.
- Desenvolver animações.
- Adicionar interações com AJAX.

### Como o adicionamos?

Para incluí-lo em nosso projeto temos duas opções:

1. [Baixando](http://jquery.com/download/) a biblioteca de jQuery e incluindo-a no projeto.

   ```html
   <script src=”jquery-3.2.1.min.js”></script>
   ```

2. Incluindo a [CDN](https://code.jquery.com/) de jQuery.

   ```html
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   ```

Devemos lembrar de linkar nosso jQuery antes de outros scripts, já que muitos frameworks e nosso próprio código dependerão desta biblioteca.

### Ok, já queremos usá-lo.

E quase estamos prontas para testar, errar, repetir e vencer!

A sintaxe de jQuery está feita para selecionar elementos de HTML e realizar alguma ação sobre o elemento.

A sintaxe básica de jQuery é:

```js
$('selector').evento();
```

- O código `$()` indica que estamos trabalhando com jQuery.
- O `'selector'` é o/os elementos HTML para retornar e/ou consultar.
- O `.evento()` é a ação que será realizada com o elemento. O parênteses que o acompanha pode ir vazio ou com uma função ou parâmetros, de acordo com o que se está utilizando.

![menu-lateral](images/sintaxis-jquery.png)
Exemplos

```js
$(this).hide() - oculta o elemento atual.

$("p").hide() - oculta todos os elementos <p>.

$(".test").hide() - oculta todos os ementos com class = "test".

$("#test").hide() - oculta o elementeo com id = "prova".
```

Já que incluímos jQuery em nosso projeto e temos clara a sintaxe, precisamos indicar ou esperar que nosso documento esteja completamente carregado e pronto antes de trabalhar com ele.

Logo em nosso arquivo  `js` usamos:

```js
$(document).ready(function() {
  //código a executar
});
```

- Tal como explicamos mais acima, ao utilizar `$(document)` sabemos que estamos utilizando jQuery e, além disso, especificamos que vamos manipular o documento HTML.

  > **Nota:** `document` não é um elemento HTML, por isso não aparece entre aspas.

- `.ready()` é um método de jQuery que executa uma função apenas quando o DOM está completamente carregado.

O código completo é utilizado para dizer a nosso código que seja executado quando se complete o carregamento de nossa página.

#### A filosofia de jQuery é: *¨Write less, do more¨*

Eu não sei você, mas para mim parece que nosso círculo de amigos está aumentando!
