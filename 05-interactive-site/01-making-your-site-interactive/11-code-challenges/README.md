# Desafio

- Tipo: `exercício`
- Formato: `individual`
- Duração: `14h`

## Objetivos

- A seguir apresentamos o desafio que você deve completar para colocar seu
  conhecimento à prova.

***

## 1. Twitter

Neste desafio, vamos replicar o feed de notícias do Twitter. Para tanto,
seguiremos um fluxo de versões que a guiarão para se concentrar mais
eficientemente :\)

Você pode adaptar o design como quiser, _mas não demore para definir as cores ou
fontes. Finalmente, você pode replicar o design da_ [_página
oficial_](https://twitter.com/) :\). Aqui está um exemplo:

![Exemplo Twitter
DOM](https://media.giphy.com/media/3ov9jP4RIGQCUQOScg/giphy.gif)

### Versão 0.0.1

1. Crie um formulário que permita inserir um texto e um botão para "twittar".
2. Adicione um evento de _click_ ao botão ou de _submit_ no formulário.
3. No evento, obter o texto.
4. Adicione o texto ao HTML.

### Versão 0.0.2

1. Não inserir texto vazio \(desativar o botão "twittar"\).
2. Conte o número de caracteres de forma regressiva.

### Versão 0.0.3

1. Se você passar os 140 caracteres, desative o botão.
2. Se você passar os 120 caracteres, mostre o contador com outra cor.
3. Se você passar os 130 caracteres, mostre o contador com outra cor.
4. Se você passar os 140 caracteres, mostre o contador em negativo.

### Versão 0.0.4

1. Ao pressionar enter \(`/n`\) aumente a área de texto de acordo com o tamanho
   do texto.

### Versão 0.0.5 (Hacker edition)

1. Se o número de caracteres digitados \(sem dar um "_enter_"\) exceder o
   tamanho da área de texto por padrão, mais uma linha deverá ser adicionada
   para que a rolagem não apareça. \(Se aplicável\)

### Versão 0.0.6 (Hacker edition)

1. Adicione a hora em que o tweet foi publicado no formato de 24 horas `hh:mm`.

> Nota: Para formatar a data e a hora, você pode criar sua própria função ou
> usar uma biblioteca como [`moment.js`](https://momentjs.com/)`.`