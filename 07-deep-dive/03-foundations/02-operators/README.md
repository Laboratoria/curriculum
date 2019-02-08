# Operadores

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Nesta leitura veremos algumas particularidades sobre os operadores de igualdade (`==`, `!=`, `===`, `!==`). Ao fim da leitura deixaremos como referência para você o link para a documentação oficial de operadores e expressões no MDN que recomendamos que você *leia* (ou olhe pelo menos).

## Diferença entre `==` e `===`

### Algoritmo de `==`

Quando avaliamos dois valores com este operador, a sequência a seguir é executada para determinar o resultado:

* Se são do mesmo tipo, então são comparados com ===.
* Se são de tipos diferentes:
  - Se um é `null` e outro é `undefined`, retorna `true`.
  - Se um é uma `string` e outro é um `number`, ele é convertido para `string` e são comparados como números.
  - Se um é booleano, são convertidos: `true` em 1 e `false` em 0, e se comparam.
  - Se um é um objeto e outro é um `number` ou `string`, converte o objeto para um primitivo.
  - Em outros casos, retorna `false`.

```js
null == undefined // true
10 == '10'        // true
true == 1         // true
[10] == 10        // true
[] == []          // false
```

### Algoritmo de `===`

Esta igualdade é mais restrita com os resultados, utilizando a sequência a seguir para determinar o resultado:

* Se possuem tipos diferentes, retorna `false`.
* Se ambos são `null`, retorna `true`.
* Se ambos são `undefined`, retorna `true`.
* Se ambos são `NaN`, retorna `false`.
* Se ambos são `true` ou `false`, retorna `true`
* Se ambos são `number` e possuem o mesmo valor, retorna `true`.
* Se ambos são `string` e possuem o mesmo valor, retorna `true`.
* Em outros casos, retorna `false`.

```js
21 === "21"         // false
undefined === null  // false
NaN === NaN         // false
[10] === 10          // false
true === 1           // false
[] === []           // false
'10' === '10'       // true
```

Você pode considerar o seguinte para saber qual operador utilizar:

* Se qualquer dos valores é booleano, utilize `===`.
* Se não tiver certeza se os valores podem ser convertidos por coerção, utilize `===`.
* Nos outros casos pode utilizar `==` com certeza.

> Nota: Por convenção, e uma boa prática a comunidade incentiva o uso de `===`.

## Desigualdades

Sempre o resultado de comparação de uma desigualdade é um booleano. Os operadores a seguir são utilizados para comparar desigualdades:

```js
<  → Menor
>  → Maior
<= → Menor Igual
>= → Maior Igual
```

Situações de uso:

* Se algum é um `object`, converte-se para primitivo e é comparado.
* Se ambos são `string`, é comparada a ordem dos caracteres alfabeticamente.
* Se ambos são `number`, são comparados.
* Em outros casos retorna `false`.

```js
[10] < 9    // false, caso 1
"a" < "b"   // true, caso 2
10 >= 10    // true, caso 3
```

## leituras complementares

[Expressões e Operadores - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
