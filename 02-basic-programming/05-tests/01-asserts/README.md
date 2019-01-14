# Objetos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem

* Aprender o que são testes e para que servem.
* Aprender a criar e rodar testes.
* Criar um mini-framework de testes em JavaScript puro

## Primeiro Teste

Suponha que você esteja criando uma função que deseja testar. A função se chama
`soma`. Ela é do tipo:

```js
function soma(num1, num2) {

}
```

Normalmente, quando temos que programar uma função, vamos logo pensando na
solução. Nossa tendência seria já implementar a função soma:

```js
function soma(num1, num2) {
  return num1 + num2;
}
```

Pronto! Não precisamos de mais nada, a função já retorna a soma de dois
números. Mas será que ela funciona? Como podemos ter certeza? Para garantir que
ela funciona, vamos criar um teste. Sabemos o que esperar dessa função. Sabemos
que a soma de 5 com 7 dá 12. Então, vamos escrever um programa que imprime
`Passou!` se a soma de 5 com 7 der 12, e imprime `Deu Erro!` se a soma não der
12.

```js
if (soma(7,5) === 12) {
  console.log("Passou!");
} else {
  console.log("Deu Erro!");
}
```

Pronto! Acabamos de criar nosso primeiro caso de teste.  Nossos testes, por
enquanto cobrem apenas essa situação: garantem que, caso a função soma não
estiver mais funcionando para 5 + 7 (ou seja, se retornar algo diferente de
12), veremos um erro. Seu mudarmos a implementação da função soma:

```js
function soma(num1, num2) {
  return 0;
}
```

Criamos um BUG no sistema. Se rodarmos o código de teste, vai aparecer a
mensagem de erro e vamos saber. Lindo!

## TDD

No exemplo anterior, implementamos o código da soma ANTES de criarmos o teste.
Desta vez, vamos fazer diferente: criar o teste antes de implementar a função.
Mas pode isso, produção? Pode! Suponha que a gente queira testar a função de
divisão. Sabemos que 8 dividido por 2 é igual a 4. Então, vamos criar o teste:

```js
if (divide(8, 2) === 4) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}
```

Se rodarmos esse código, ele vai dar um erro, porque até esse momento, a função
`divide` nem existe. Tudo bem, não importa. O teste vai falhar, o que,
tecnicamente está certo, porque, já que a função não existe, o teste mostrará
isso para nós.

```js
Uncaught ReferenceError: divide is not defined
    at <anonymous>:1:1
```

Ou seja, apareceu um erro dizendo que a função `divide` não existe. Estamos
sendo "guiadas" a criar essa função pelo teste. Isso se chama TDD (Test Driven
Development), ou, desenvolvimento guiado por testes. Primeiro criamos o teste.
Depois fazemos o teste passar, com o mínimo de esforço:

```js
function divide(num, den) {
  return 4;
}
```

Se rodarmos o código de teste, vai passar!

```js
if (divide(8, 2) === 4) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

// Passou!
```

Mas espera! A gente "roubou". Retornamos um valor que sabíamos que ia fazer
passar. Claro que isso não vai funcionar sempre. Todos os nossos testes estão
passando, mas isso não significa que o nosso programa está 100% correto.
Para ter certeza, vamos criar um outro caso de teste:

```js
//Caso 1
if (divide(8, 2) === 4) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

//Caso 2
if (divide(20, 10) === 2) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

// Passou!
// Deu Erro!

```

Ou seja, metade dos testes passou e metade falhou. Vamos corrigir a função
agora:

```js
function divide(num, den) {
  if (num === 8) {
    return 4;
  } else {
    return 2;
  }
}
```

E quando rodar os testes, tudo vai passar! Mas eu ainda não terminamos. Vamos
criar o caso 3:

```js
//Caso 1
if (divide(8, 2) === 4) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

//Caso 2
if (divide(20, 10) === 2) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

//Caso 3
if (divide(9, 3) === 3) {
  console.log("Passou!");
}else {
  console.log("Deu Erro!");
}

//Passou!
//Passou!
//Deu Erro!
```

A essa altura já deu pra perceber que não podemos ficar criando `if`s infinitos
no nosso código. Temos que implementar a função corretamente:

```js
function divide(num, den) {
  return num / den;
}
```

Se rodarmos os testes, todos passarão. Isso significa que está passando em
todos os casos? Não. Mas significa que, pelo menos para os casos que pensamos
em testar, está funcionando. Isso já é bem melhor do que não saber nada sobre o
nosso código. Sabemos que ele funciona bem para esses três casos.

## Bateria (ou suite) de testes

Vamos organizar um pouco nosso código, pois parece que tem muita coisa
repetida. Nós fizemos muitas vezes os mesmos `if`s. Vamos "refatorar", ou seja,
alterar  o código sem mudar o funcionamento, apenas para torná-lo mais legível.

Vamos criar uma função de verificação (também conhecida como asserção ou, o
termo em inglês, `assert`).

```js
function verificaIgualdade(calculado, esperado) {
  if (calculado === esperado) {
    console.log("Passou!");
    return true;
  }else {
    console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
    return false;
  }
}
```

Com essa função, podemos simplificar (refatorar) nosso código de testes:

```js
//Caso 1
verificaIgualdade(divide(8, 2), 4);
//Caso 2
verificaIgualdade(divide(20, 10), 2);
//Caso 3
verificaIgualdade(divide(9, 3), 3);
```

Aí está nossa primeira bateria de testes, ou, como é comumente chamada "suite".

## Exercício de teste 1

Gostaríamos que a nossa função `divide` retornasse a string "Não pode dividir
por zero" quando o denominador passado for zero. Vamos criar um novo caso de
teste:

```js
//Caso 4
verificaIgualdade(divide(7, 0), "Não pode dividir por zero");
```

O exercício é mudar o código da função `divide` para que o teste acima passe,
mas, ao mesmo tempo, que todos os testes anteriores continuem funcionando.

## Exercício de teste (avançado)

Suponha que eu tenha uma função:

```js
function juntaArrays(array1, array2) {
  return array1.concat(array2);
}
```

Essa função tem como objetivo juntar dois arrays num único array, colocando o
segundo array logo na sequência do primeiro. Se eu rodar a função:

```js
juntaArrays([1, 2], [3, 4]);
//[1, 2, 3, 4]
juntaArrays([3, 3], [2, 2, 2]);
//[3, 3, 2, 2, 2]
```

Parece que está funcionando bem. Mas se eu criar um teste:

```js
verificaIgualdade(juntaArrays([1, 2], [3, 4]), [1, 2, 3, 4]);

//Deu Erro! 1,2,3,4 não é igual a 1,2,3,4
```

Opa! Como assim? 1,2,3,4 não é igual a 1,2,3,4??? O que está acontecendo? O que
acontece aqui é que, quando eu faço a comparação entre dois arrays supostamente
 iguais:

```js
[1, 2, 3] === [1, 2, 3]
// false
```

O JavaScript retorna `false`, ou seja, não são iguais. Isso porque, em
JavaScript, cada array é um objeto separado e, apesar de todos os elementos
dos arrays serem iguais, os arrays em si são diferentes. O desafio desse
exercício é criar uma outra função de asserção:

```js
function verificaIgualdadeDeArrays(array1, array2) {
 //Implementar
}
```

Essa função deve retornar verdadeiro se os elementos dos arrays forem iguais se
comparados entre si, elemento a elemento, em cada posição do array. Dica: você
vai ter que usar um `for` para isso. Além de retornar `true` ou `false`, a
função deve imprimir no console a mensagem de "erro" ou "acerto".

## Samba do Teste Automatizado

A seguir, um vídeo musical sobre testes automatizados, para relaxar depois
dessa bateria de testes:

[![Vídeo do Melô do Teste Automatizado](https://img.youtube.com/vi/E0p2VeuIaSA/0.jpg)](https://www.youtube.com/watch?v=E0p2VeuIaSA)
