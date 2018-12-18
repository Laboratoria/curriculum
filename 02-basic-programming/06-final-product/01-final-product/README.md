# Produto Final

* Tipo: `exercício`
* Formato: `individual`
* Duração: `4 h`

***

## Objetivos

É hora de testar o que aprendeu: você deverá criar um programa usado para criptografar mensagens.

## Entrega

Você deve entregar **um repositório no GitHub** que contenha:

1. Arquivo `README.md` que explica o **pseudocódigo** de sua solução e seu **diagrama de fluxo**
2. Arquivo `app.js` com o **código** da sua solução
3. Arquivo `index.html` vinculado ao seu `app.js`

## Critérios de avaliação

As considerações a seguir serão levadas em conta ao avaliar sua solução:

1. Nomenclatura de variáveis
2. Indentação
3. Validação de entrada: o usuário não deve ser capaz de inserir um campo vazio ou de um tipo incorreto
4. Estrutura dos seus arquivos
5. Arquivo `README.md` escrito corretamente
6. O programa deve cumprir o objetivo exigido

## Cifra de César

Crie uma página web que peça uma frase para o usuário, o índice de deslocamento e retorne a mesma mensagem criptografada de acordo com o [a Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar).

Por exemplo:

* Texto original: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
* Texto codificado: `HIJKLMNOPQRSTUVWXYZABCDEFG`

Abaixo está um vídeo que guia você pela fórmula matemática da Cifra de César e algumas outras dicas que você deve saber para resolver este desafio. Ouça com atenção e siga os conselhos! :\)

[![Dicas Cifra de C&#xE9;sar](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Também compartilhamos mais informações do que foi explicado no vídeo anterior:

* [Saiba mais sobre `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [Saiba mais sobre `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [Saiba mais sobre `ASCII`](http://www.bosontreinamentos.com.br/hardware/tabela-ascii/)

> Considerações Específicas
>
> 1. Seu programa deve ser capaz de criptografar e descriptografar letras
> maiúsculas e minúsculas;
> 2. O programa deve executar corretamente independente do número informado
> como índice de deslocamento;
> 3. O código deve ser composto por no mínimo 2 funções de saída com os 
> seguintes nomes: `cipher` e `decipher`;
> 4. O programa deve possuir tratamento de dados, como por exemplo, tratar um
> campo vazio;
> 5. Criar funções de testes para validar as saídas das funções
> `cipher` e `decipher`.

> Hacker Edition
> 
> 1. Permitir a criptografia utilizando como índice de deslocamento um número
> negativo;
> 2. Tratamento de entrada de dados que identifique palavras com acentos e/ou
> caracteres especiais e notifique o usuário.