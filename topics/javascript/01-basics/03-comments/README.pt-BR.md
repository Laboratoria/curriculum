# Comentários

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `15min`

## Objetivos de Aprendizagem

- Aprender o que são os _comentários_ e sua utilidade.

***

## Comentários

Muitas vezes, não importa quão descritivo você escreva seu código, é necessário
oferecer mais informação para que outras pessoas possam entender facilmente como
funciona o seu programa. Para adicionar essa informação sem afetar o fluxo do
seu código, existem os _comentários_.

Eles são assim:

```js
// Isto é um comentário de uma linha

/*
  Isto é um comentário de
  múltiplas
  linhas
*/
```

O computador ignora os comentários completamente. Os comentários no JavaScript
começam com `//`. Tudo o que segue às barras comuns (na mesma linha) é ignorado
pelo interpretador do JavaScript. Os comentários de múltiplas linhas começam com
`/*` e acabam com `*/`. Tudo o que fica entre isso é ignorado pelo programa.

Dessa forma, os comentários não têm efeito algum em como se executa o programa.
Só estão aí para prover contexto. É uma **boa prática** incluir comentários no
código para melhorar sua legibilidade.

## Comentários como sugestões ou instruções

Muitos dos exercícios e questionários neste curso vão incluir os comentários
para oferecer sugestões ou instruções.

Por exemplo, é normal ver algo tipo:

```js
const firstName = // seu código aqui
console.log(/* seu código aqui */);
```

A ideia é que você apague o comentário e utilize esse espaço para escrever seu
código. Não se preocupe em apagar os comentários. Aliás, **não** apague outras
partes do programa. Se você faz isso, é muito provável que não funcione muito
bem.

Agora sim, continue com os exercícios e questionários desta lição. Boa sorte!
