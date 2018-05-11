# 01 - Final Products

* Tipo: `exercício`
* Formato: `individual`
* Duração: `4 h`

***

## Objetivos

É hora de testar o que aprendeu: você deverá criar dois programas que têm uma aplicação em nosso cotidiano. O primeiro é um programa usado para criptografar mensagens, e o segundo é para verificar se um número de cartão de crédito é válido.

## Entregas

Para cada produto, você deve entregar **um repositório no GitHub** que contenha:

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
6. Uso de comentários para tornar seu código mais legível
7. O programa deve cumprir o objetivo exigido

## 1. Cifra de César

Crie uma página web que peça, por meio de um `prompt()`, uma frase para o usuário e retorne a mesma mensagem criptografada de acordo com o [a Cifra de César ](https://en.wikipedia.org/wiki/Caesar_cipher)com o parâmetro de deslocamento de **33 espaços à direita**.

Por exemplo:

* Texto original: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
* Texto codificado: `HIJKLMNOPQRSTUVWXYZABCDEFG`

Abaixo está um vídeo de Michelle que guia você pela fórmula matemática da Cifra de César e um algumas outras dicas que você deve saber para resolver este desafio. Ouça com atenção e siga os conselhos! :\)

![Dicas Cifra de C&#xE9;sar](https://camo.githubusercontent.com/dd40165dcf1329aa47651b2aedbaa51a311dd6e4/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f7a643865567258687337592f302e6a7067)

Também compartilhamos mais informações do que Michelle explicou no vídeo anterior:

* [Saiba mais sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Saiba mais sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Saiba mais sobre `ASCII`](http://conceptodefinicion.de/ascii/)

> Considerações Específicas
>
> 1. Seu programa deve ser capaz de criptografar e descriptografar letras maiúsculas e minúsculas. A fórmula para decifrar é: `(x - n) % 26`
> 2. O código deve ser composto por 2 funções com os seguintes nomes: `cipher` e `decipher`
> 3. O usuário não deve poder inserir um campo vazio ou que contenha números

## 2. Cartão de Crédito Válido

Crie um site que solicite, por meio de um `prompt()`, o número de um cartão de crédito e confirme sua validade de acordo [com o algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn). Leia este blog que explica [como o algoritmo de Luhn funciona](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html) .

> Considerações Específicas
>
> 1. Seu código deve ser composto de 1 função: `isValidCard`
> 2. O usuário não deve ser capaz de inserir um campo vazio

Aqui está um vídeo de Michelle que guia você pelo algoritmo de Luhn e dá dicas para concluir este projeto:

![Dicas de valida&#xE7;&#xE3;o de Cart&#xE3;o de Cr&#xE9;dito](https://camo.githubusercontent.com/b91d5e331cd83b5365a0f97295eefb33b43ad23a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f66307a4c364f7439795f772f302e6a7067)

