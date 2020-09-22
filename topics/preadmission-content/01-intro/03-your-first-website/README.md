# Sua primeira página Web

- Tipo: `leitura`
- Formato: `individual`
- Duração: `20min`

## Objetivos

- Conhecer os pricipais elementos e tags HTML
- Aprender a dar dinamismo a uma página web usando JavaScript
- Ter uma aproximação ao mundo do código, criando seu primeiro site web

***

O texto abaixo é uma tradução para o português, com alguns ajustes, do capítulo
5 de [JavaScript for
kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015; e de [Eloquent JavaScript](http://braziljs.github.io/eloquente-javascript),
de Marijn Haverbeke, 2014.

## HTML: HyperText Markup Language

HTML (HyperText Markup Language) é uma linguagem utilizada para criar a
estrutura de um site web. Para criar esse site, começamos criando um arquivo em
formato HTML. Isto é muito parecido com criar um arquivo com formato word, excel
ou powerpoint.

Um arquivo HTML simples se vê a seguir (não se assuste se não entender tudo, te
explicaremos passo a passo mais abaixo):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha primeira página Web</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
    <p>Esta é minha primeira página Web</p>
  </body>
</html>
```

Ao abrir este mesmo arquivo HTML em um navegadro (como Chrome), se vê o
seguinte:

![Visualização no Chrome](https://user-images.githubusercontent.com/11894994/57495168-425ae680-72a3-11e9-96e2-7f1d33a7865c.png)

O navegador "lê" o arquivo HTML (o texto e as tags que estão dentro) e o
apresenta segundo as regras da linguagem. Por exemplo, os textos que estão
dentro das tags `<h1> </h1>` são considerados cabeçalhos ou títulos, enquanto os
textos que dentro da etiqueta `<p> </p>` são considerados parágrafos. Por isso,
o texto _Olá Mundo!_ é visualizado muito maior que o texto _Esta é minha
primeira página Web._

## Crie sua primeira página Web

Como já dissemos, _**a melhor maneira de aprender é fazendo**_. Por isso, é hora
de você mesma criar uma página web e aprender HTML.

A seguir um vídeo que explica o porquê você precisa de um editor de texto para
os exercícios:

[![Editor de texto intro](https://img.youtube.com/vi/96usU1K0gwY/0.jpg)](https://www.youtube.com/watch?v=96usU1K0gwY)

No próximo vídeo, você será guiada através dos seguintes passos para criar sua
primeira página web:

1. Baixar o Visual Studio Code, um editor de texto: [Baixe VSC
   aqui](https://code.visualstudio.com/). Existem versões para Mac e Windows. Se
   desejar pode também baixar um editor de texto chamado Atom:
   [Baixar](https://atom.io/)
2. Crie um arquivo HTML chamado `index.html`
3. Escreva alguns elementos no arquivo HTML (por exemplo: um título `<h1>` e um
   parágrafo `<p>`)
4. Salve o arquivo HTML
5. Abra o arquivo HTML em um navegador como o Chrome

Aqui o vídeo:

[![Minha primeira HTML Web](https://img.youtube.com/vi/OR0tpt3zftA/0.jpg)](https://www.youtube.com/watch?v=OR0tpt3zftA)

## Tags e elementos HTML

Os arquivo HTML são compostos por `elementos`. Salvo algumas exceções (por
exemplo `<!DOCTYPE html>`), os elementos começam com uma `tag de abertura` e
terminam com uma `tag de fechamento`. Por exemplo, no nosso documento teremos o
elemento `p`, que começa com a tag de abertura `<p>`e termina com uma tag de
fechamento `</p>`. O texto que se encontra entre as etiquetas de abertura e de
fechamento é chamado de _conteúdo_ do elemento.

> o elemento `p` (parágrafo) como exemplo: ![Exemplo de
Tag](https://user-images.githubusercontent.com/11894994/57495817-43414780-72a6-11e9-9fb5-8ee6cab80f08.jpg)

Vamos dar uma passada por todos os elementos do nosso arquivo:

1. O arquivo começa com a tag `<!DOCTYPE html>` (que como vimos, não tem
   abertura e fechamento). Sua função é fazer com que o navegador interprete o
   arquivo como a _última versão_ do HTML, em contraposição a várias versões
   que estavam em uso no passado.
2. Logo após vem a tag de abertura `<html>` (a tag de fechamento `</ html>`
   está ao final). Por convenção, todos os arquivos HTML devem ter o elemento
   `html` que englobe todos os demais.
3. Dentro do elemento `html` estão dois elementos:  o `head` (cabeça, em
   português) e o `body` (corpo, em português). O `head` contem informações
   _sobre_ o arquivo e o `body` contem o arquivo em si.
4. Dentro do elemento `head` está o elemento `title` (com sua tag de abertura e
   fechamento), que contem o título do arquivo. É por isso que ao visualizar o
   aquivo em um navegador, o título que aparece na aba do navegador é: "Minha
   primeira página Web". É importante que notemos que o elemento `title` está
   _contido_ dentro do elemento `head`, o qual, por sua vez, está _contido_
   dentro do elemento `html`.
5. Finalmente temos o elemento `body` que _contem_ o conteúdo que se mostrará no
   navegador. Neste caso, dentro do body temos dois elementos adicionais: o `h1`
   (cabeçalho) e o `p` (parágrafo).

Existem muito mais elementos e tags HTML que você vai aprender. Por agora, é
hora de regressar ao JavaScript.

## HTML e JavaScript

É importante que você entenda que HTML _**não**_ é uma `linguagem de
porgramação`, mas sim uma `linguaguem de marcação`. Como já vimos, com HTML
damos uma estrutura a nosso site. No entanto, se queremos dar a ele
_comportamento_ ou _interação_, necessitamos usar uma `linguagem de
programação`. E a **única linguagem de programação que roda nos navegadores web
é o JavaScript**. Com JavaScript conseguimos que os sites possam responder as
ações dos usuários, torndo-os interativos.

Para incluir JavaScript em um arquivo HTML você pode utilizar o elemento
`script` e colocar seu código JavaScript entre as tags de abertura e fechamento,
tal como mostra o seguinte exemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mnha primeira página Web</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
    <p>Esta é minha primeira página Web</p>

    <script type="text/javascript">
      alert('Olá Mundo!');
    </script>

  </body>
</html>
```

Muitas vezes o código JavaScript é tão extenso que você vai querer que ele não
esteja escrito no mesmo arquivo HTML. Para isso, a solução é criar um novo
arquivo, em formato JavaScript - usando a extensão `.js` - e "linkar" ambos
arquivos por meio do elemento `script` da seguinte maneira:

```html
<script src="nome-do-arquivo.js"></script>
```

O elemento `script` tem um "atributo" chamado `src` (de source, que significa
fonte em inglês), no qual você pode colocar a caminho do seu arquivo JavaScript.

## Adicionando interação à sua página

Agora é sua vez! Continue assistindo os vídeos e seguindo os passos para agregar
interação ao seu site.

Os passos são os seguintes:

1. Inclua o elemento `script` ao final do `body` de teu arquivo HTML
2. Dentro do HTML, entre as etiquetas de íncio e fechamento do elemento
   `script`, escreva uma linha de código JavaScript (por exemplo, algo com
   `alert()`, `document.write()` ou `prompt()`)
3. Salve o arquivo HTML
4. Atualize a página de seu navegador onde está carregado o arquivo HTML
5. Crie um novo arquivo chamado `app.js` na mesma pasta onde está o seu
   HTML
6. Inclua no atributo `src` ao elemtento `script` com o caminho do arquivo
   `app.js`
7. Passe todo o código JavaScript do arquivo HTML para o arquivo JS
8. Atualize a página do naveador e confirme se tudo funciona exatamente como
   antes.

A seguir o vídeo:

[![Minha primeira HTML Web](https://img.youtube.com/vi/pJ4aYTUjpME/0.jpg)](https://www.youtube.com/watch?v=pJ4aYTUjpME)
