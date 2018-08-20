# Variáveis, Tipos de dados e Operadores

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

<iframe src="https://goo.gl/Wh12VV" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

Uma das características mais marcantes de JavaScript, é o comportamento dos tipos dados, porque conhecendo seu comportamento é possível entender como se comportam nossos dados durante a execução.

## O que é um tipo?

Basicamente os tipos definem o comportamento que os dados terão.

> Um tipo é um conjunto integrado de características intrínsecas que identificam o comportamento de um valor particular e o distingue de outros valores, tanto para o motor (interpretador de linguagem) como para o desenvolvedor.

### Quais tipos existem?

A especificação da linguagem define os tipos:

#### string

O tipo `string` de Javascript é utilizado para representar dados textuais e cadeias de caracteres. É um conjunto de elementos de valores inteiros de 16 bits sem sinal. Cada elemento ocupa uma posição na `string`. O primeiro elemento está no índice 0, o próximo está no índice 1 e assim por diante. O comprimento de uma `string` é o número de elementos que ela possui.

#### number

De acordo com o padrão ECMAScript, só existe um tipo numérico: o valor de _dupla precisão_ de 64-bits IEEE 754 (um número entre -(253 -1) e 253 -1). Não existe um tipo específico para os números inteiros. Além de ser capaz de armazenar números com ponto flutuante, o tipo número possui três valores simbólicos: `+Infinity`, `-Infinity` e `NaN` (Not A Number ou Não É Um Número).

Para comparar valores maiores ou menores que `+/-Infinity`, você pode usar as constantes `Number.MAX_VALUE` ou `Number.MIN_VALUE` e a partir de `ES6` também é possível revisar se um número está no intervalo de ponto flutuante de dupla precisão usando `Number.isSafeInteger()` assim como `Number.MAX_SAFE_INTEGER` e `Number.MIN_SAFE_INTEGER`. Fora deste intervalo os número em JavaScript não são seguros para manipular.

O tipo número só tem um valor inteiro que conta com duas representações: 0 é representado como -0 e +0 ("0" é um apelido de +0). Isso quase não possui nenhum impacto. Por exemplo, +0 === -0 é verdadeiro. Porém é possível verificar isso quando se divide por zero.

#### boolean

Boolean representa uma entidade lógica e pode ter dois valores: `true` e `false`.

#### null

O tipo `null` tem exatamente um valor: `null`.

#### undefined

Uma variável a qual não tenhamos atribuído valor possui então o valor `undefined`.

#### object

Em JavaScript os objetos podem ser vistos como uma coleção de propriedades. Com a sintaxe literal de objetos, um grupo limitado de propriedades são inicializadas; em seguida podem ser adicionadas ou eliminadas outras propriedades. Os valores das propriedades podem ser de qualquer tipo, incluindo outros objetos, o que nos permite construir estruturas de dados complexas. As propriedades se identificam por uso de chaves. Uma chave é um valor `string` ou `symbol`.

#### symbol

O `symbol` é um novo tipo em JavaScript introduzido na versão `ES6`. Um `symbol` é um valor primitivo único e imutável e pode ser usado como a chave de uma propriedade de um objeto. Em algumas linguagens de programação, os símbolos são chamados átomos. Podem ser comparados com enumerações (`enum`) en C.

Antes de continuar é preciso dizer que em JavaScript as variáveis não têm tipos. Os valores são os que têm. As variáveis podem armazenar qualquer tipo de valor.

### Primitive vs. Reference

#### Primitivos

`string`, `number`, `boolean`, `null`, `undefined`.

Entendamos o comportamento deles. Quando definimos um valor primitivo:

```js
let variable = 'olá'; // string
```

O nome da variável é declarado no seu escopo e este nome faz referência a um endereço de memória, onde está armazenado o valor.

Agora, se atribuirmos esta variável a outra, o valor se copia para outra posição da memória e cada variável aponta para um endereço diferente.

Este comportamento faz que se nós declararmos um valor primitivo dentro de uma variável com const, ele será imutável, já que não poderá ser reatribuído.

#### Por referência

##### object

Os objetos definem subtipos, que são: `String`, `Number`, `Boolean`, `Object`, `Function`, `Array`, `Date`, `RegExp`, `Error`.

Quando definimos um objeto:

```js
let obj = { nome: 'Sebastião' };
```

O nome da variável é instanciado no seu escopo e ele faz referência ao objeto em memória, contendo uma lista de suas propriedades e que, por sua vez, fazer referência ao local de memória onde estão armazenados os valores.

Agora, se atribuirmos `obj` a outra variável, o objeto ao qual se faz referência não será copiado. O que vai acontecer é que a nova variável é outra referência ao mesmo objeto.

```js
let obj2 = obj;
```

Por isso, se mudamos a propriedade _nome_ de `obj2`, como as duas variáveis apontam para o mesmo objeto, também será alterada a propriedade _nome_ em `obj`.

```js
obj2.nome = 'Xavier';
console.log(obj.nome); // Xavier
```

Como vimos nem tudo em JavaScript é um objeto, mas todos os valores se relacionam por meio de referências/ponteiros. Ter um entendimento sólido de como funcionam os diferentes tipos permitirá que nós entendamos como trabalhar com nossos valores, sem termos mutações inesperadas.

Um dos que processos que todas fazemos enquanto programamos diariamente é comparar valores: se eles são iguais, diferentes, maiores, menores, etc., para poder realizar operações com eles. 

Muita vezes em JavaScript obtermos resultados destas comparações que não esperávamos e isto pode levar a *bugs* em nosso código; por isso é importante entender o algoritmo que a linguagem estabelece para isso.

```js
21 == '21'          // true
21 === '21'         // false
undefined == null   // true
undefined === null  // false
{} === {}           // false
NaN === NaN         // false
[10] == 10          // true
21 < '22'           // true
[22] > [21]         // true
```

Sigamos passo a passo para entendermos isso.

Existem dois tipos principais de comparações: igualdades e desigualdades. O resultado de qualquer uma delas é um valor booleano (`true` o `false`) refletindo a relação entre os dois valores avaliados.

Uma das coisas que torna esse mecanismo complexo é a `coerção`, a qual converte os tipos de dados de acordo com algum contexto de uso (se a conversão for possível).

Se não entendermos este mecanismo podemos produzir alguns resultados inesperados sem saber porque aconteceu desta maneira.

```js
let número = '24';              // string
let explicita = Number(número); // number
let implicita = número * 2;        // número agora se usa como number
```

Existe valores que são implicitamente convertidos a `false`. São eles:

```js
'' // string vazia
0, -0, NaN
null, undefined
```
Outro mecanismo que utilizamos nas comparações durante a conversão de objetos para tipos primitivos é quando os comparamos com um valor primitivo.

O mecanismo que se utiliza para realizar esta conversão é:

* Se `.valueOf()` pode ser usado, é invocado e retorna um valor primitivo.
* Se `.toString()` pode ser usado, é invocado e retorna um valor primitivo.
* Nos outros casos, retorna um erro.

> Nota: O mecanismo que é normalmente utilizado é `.toString()`.
