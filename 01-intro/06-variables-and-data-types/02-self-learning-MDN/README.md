# Auto-aprendizagem: manipulando strings e numbers

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos da Aprendizagem

- Conhecer a documentação MDN e a importância da auto-aprendizagem.
- Aprender a manipular `strings` e `numbers` no JavaScript.

***

## Aprendendo sobre `string.length`

No mundo da tecnologia, a **auto-aprendizagem** é essencial. Constantemente
aparecem ferramentas, linguagens ou tecnologias novas que você precisa aprender
por conta própria para se manter atualizado. Portanto, é importante que, desde
o início do seu caminho no mundo da programação, você se acostume em aprender
por conta própria e a levar o controle do seu crescimento profissional.

A internet é um excelente recurso para aprender por conta própria. É como uma
grande biblioteca de conhecimento sempre disponível. Vamos ver um exemplo:

No JavaScript existe uma forma fácil de obter o comprimento de uma `string` que
devolve a quantidade de caracteres que compõem a `string`. Por exemplo, o
comprimento de 'Olá' é 3 (porque são 3 caracteres) e a de
_"supercalifragilisticexpialidocious"_ é 34 (porque são 34 caracteres).

Como podemos aprender sobre isso? Comece abrindo o Google e realizando uma
pesquisa tipo: _"obter o comprimento de uma string em JavaScript"_. Isso dá
vários resultados que podem nos ajudar.

Com certeza um dos resultados é da **Rede de Desenvolvedores da Mozilla (MDN)**.
Essa fonte é uma das mais confiáveis para pesquisar sobre o JavaScript. De fato,
o criador do JavaScript, [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich),
é um dos fundadores da Fundação Mozilla e a Corporação Mozilla. Como diz
diretamente o site da [MDN](https://developer.mozilla.org/es/docs/MDN/About):

> A Rede de Desenvolvedores da Mozilla (MDN) é uma plataforma de aprendizagem em
> evolução para tecnologias da Web e o software que alimenta a Web, incluindo:
>
> 1. Padrões web como CSS, HTML, e JavaScript
> 2. Open Web app development
> 3. Firefox add-on development

Leia com atenção a seção de [string.lenght](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length)
que oferece MDN. Talvez você não entenda absolutamente tudo (especialmente o que
se refere à UTF-16), mas isso é normal. Você deve controlar esse sentimento e
avançar mesmo com um pouco de incerteza. Reveja o exemplo com calma; parece
bastante claro assim como o assunto sobre como obter o comprimento de uma string:

```js
var x = "Mozilla";
var empty = "";

console.log("Mozilla tem " + x.length + " caracteres.");
/* "Mozilla tem 7 caracteres" */

console.log("A cadeia vazia tem um comprimento de " + empty.length);
/* "A cadeia vazia tem um comprimento de 0" */
```

Nota: console.log() é um comando que mostra uma mensagem no console para
facilitar a depuração do código Javascript. A vantagem de usar ele comparado
com, por exemplo, a função alert(), é que console.log() não detém a execução do
código até que o usuário aceite a mensagem de alerta como acontece com o alert().

Depois de ler a documentação deveria ficar claro que para conhecer o comprimento
de strings, o que precisamos fazer é colocar um _.length_ no final, assim:

```js
var shortWord = 'Olá'
var longWord = "supercalifragilisticexpialidocious"

// Determinar comprimento de cada string

var lengthShortWord = shortWord.length;
var lengthLongWord = longWord.length;

// Imprimir no console

console.log(lengthShortWord);
// returns > 4
console.log(lengthLongWord);
// returns > 34

// também podemos imprimir direto no console, assim:
console.log('hola'.length);
// returns > 4
"supercalifragilisticexpialidocious".length;
// returns > 34
```

## Praticando a auto-aprendizagem

Agora que ficou demonstrado o _"super poder da auto-aprendizagem"_, leia na MDN
outras coisas interessantes que podemos fazer com `strings` e `numbers`, como:

1. [Obter um caractere específico de uma string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
2. [Obter o índice de um caractere de uma string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
3. [Converter para maiúsculas uma string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
4. [Converter para minúsculas uma string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
5. [Cortando uma string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
6. [Convertir un string en un número](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

No final destas leituras, você deve saber muito bem como funcionam:

- `charAt()`
- `indexOf()`
- `toUpperCase()`
- `toLowerCase()`
- `slice()`
- `parseInt()`

## Outros recursos de auto-aprendizagem

Se você ainda tem dúvidas sobre esses conceitos, você poderia analisar outras
formas de auto-aprendizagem:

1. Procure outros recursos na internet. Um deles que é muito bom é o
   [stackoverflow](https://es.stackoverflow.com/).
   Em português costuma ter menos conteúdo de qualidade, assim você talvez tenha
   que usar o tradutor do Google.
2. Faça uma consulta em algum grupo do Facebook
3. Consulte uma amiga que saiba de programação :)

**NOTA: É importante NÃO avançar se você não conseguiu compreender bem os
conceitos anteriores. O que segue neste curso se constrói sobre esses conceitos,
portanto, tome o tempo necessário para aprender bem antes de avançar.**
