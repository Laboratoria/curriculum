# `filter`, `map`,`sort` e`reduce`

- Tipo: `leitura`
- Formato: `individual`
- Duración: `45min`

***

Já vimos alguns dos métodos de uso mais comuns para arrays, porém
`Array.prototype` nos fornece vários outros métodos úteis.

Para facilitar um pouco a vida, os dividimos da seguinte forma:

- para agregar e retirar elementos: `push`, `pop`, `shift`, `unshift`, `slice`,
  `splice` e `concat`.
- para buscar elementos dentro da array: `indexOf`, `lastIndexOf`, `includes`,
  `find`, `findIndex` e `filter`.
- para transformar arrays: `map`,`reduce`, `sort`, `reverse`, `split` e `join`.

Agora focaremos nos quatro métodos que consideramos mais utilizados: `filter`,
`map` `sort` e `reduce`.

Para conhecer em detalhes cada um destes métodos, visite a documentação no
[MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array#M.C3.A9todos)

Vamos usar uma função para comparar arrays.

```js
const equal = (umaArray, outraArray) => JSON.stringify(umaArray) === JSON.stringify(outraArray);

```

Abaixo segue  um conjunto de dados que utilizaremos como exemplo para nossos
exemplos :)

```js
const inventoras = [
  {
    nome: 'Ada',
    sobrenome: 'Lovelace',
    anoNascimento: 1815,
    falecimento: 1852,
  },
  {
    nome: 'Lise',
    sobrenome: 'Meitner',
    anoNascimento: 1878,
    falecimento: 1968,
  },
  {
    nome: 'Caroline',
    sobrenome: 'Herschel',
    anoNascimento: 1750,
    falecimento: 1848,
  },
  {
    nome: 'Hanna',
    sobrenome: 'Hammarström',
    anoNascimento: 1829,
    falecimento: 1909,
  },
];

```

Agora que já temos o que precisamos, vamos começar.

## `Array.prototype.filter`

`filter` nos permite obter um subconjunto dos elementos da array, desde que
cumpram uma certa condição.

```js
const faleceuAntesDoSXX = inventoras.filter(inventora => (inventora.falecimento < 1900));
console.log(
  equal(faleceuAntesDoSXX, [
    {
      nome: 'Ada',
      sobrenome: 'Lovelace',
      anoNascimento: 1815,
      falecimento: 1852,
    },
    {
      nome: 'Caroline',
      sobrenome: 'Herschel',
      anoNascimento: 1750,
      falecimento: 1848,
    },
  ]),
);

```

A seguir o Dani explica mais a fundo como o método `filter` funciona:

[![Filtrando Arrays em JavaScript](https://img.youtube.com/vi/M0sG5YTRiII/0.jpg)](https://www.youtube.com/watch?v=M0sG5YTRiII)

## `Array.prototype.map`

`map` nos permite visitar cada um dos elementos da array, coletando neste
processo um valor de retorno para cada elemento visitado.

Por exemplo, supondo que queremos uma lista de nomes e sobrenomes da nossa base
de dados.

```js
const nomesCompletos = inventoras.map(inventora => `${inventora.nome} ${inventora.sobrenome}`);
console.log(
  equal(nomesCompletos, [
    'Ada Lovelace',
    'Lise Meitner',
    'Caroline Herschel',
    'Hanna Hammarström',
  ]),
);

```

Ou quantos anos cada uma viveu.

```js
const anosVividos = inventoras.map(({
  nome, sobrenome, falecimento, anoNascimento,
}) => [`${nome} ${sobrenome}`, falecimento - anoNascimento]);
console.log(
  equal(anosVividos, [
    ['Ada Lovelace', 37],
    ['Lise Meitner', 90],
    ['Caroline Herschel', 98],
    ['Hanna Hammarström', 80],
  ]),
);

```

## `Array.prototype.sort`

Ordena a array *in place* (ou seja, dentro da própria array).

```js
let arr = [1, 2, 15];
arr.sort();
console.log(equal(arr, [1, 15, 2]));

```

Se olhar bem, vai perceber que algo está estranho: por padrão, `sort` ordena a
array convertendo todos os elementos em `strings`. Por isso `15` apareceu antes
de `2`.

Como resolvemos isso?

```js
const compararNumeros = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  /* if (a < b) */
  return -1;
};
arr = [1, 2, 15];
arr.sort(compararNumeros);
console.log(
  equal(arr, [1, 2, 15]),
);

```

Vejamos alguns exemplos mais interessantes.

### Ordenar de maior a menor segundo o ano de nascimento

```js
let ordenado = inventoras.sort((a, b) => {
  if (a.anoNascimento > b.anoNascimento) {
    return 1;
  }
  return -1;
});
console.log(equal(
  ordenado,
  [
    {
      nome: 'Caroline',
      sobrenome: 'Herschel',
      anoNascimento: 1750,
      falecimento: 1848,
    },
    {
      nome: 'Ada',
      sobrenome: 'Lovelace',
      anoNascimento: 1815,
      falecimento: 1852,
    },
    {
      nome: 'Hanna',
      sobrenome: 'Hammarström',
      anoNascimento: 1829,
      falecimento: 1909,
    },
    {
      nome: 'Lise',
      sobrenome: 'Meitner',
      anoNascimento: 1878,
      falecimento: 1968,
    },
  ],
));

```

Poderíamos escrever a função de comparação usando um operador ternário, obtendo
o mesmo resultado.

```js
ordenado = inventoras.sort((a, b) => (a.anoNascimento > b.anoNascimento ? 1 : -1));

```

### Ordenar segundo a quantidade de anos vividos

```js
const maisAnosVividos = inventoras.sort((a, b) => {
  const sobrenome = a.falecimento - a.anoNascimento;
  const next = b.falecimento - b.anoNascimento;
  return sobrenome > next ? -1 : 1;
});
console.log(equal(
  maisAnosVividos,
  [
    {
      nome: 'Caroline',
      sobrenome: 'Herschel',
      anoNascimento: 1750,
      falecimento: 1848,
    },
    {
      nome: 'Lise',
      sobrenome: 'Meitner',
      anoNascimento: 1878,
      falecimento: 1968,
    },
    {
      nome: 'Hanna',
      sobrenome: 'Hammarström',
      anoNascimento: 1829,
      falecimento: 1909,
    },
    {
      nome: 'Ada',
      sobrenome: 'Lovelace',
      anoNascimento: 1815,
      falecimento: 1852,
    },
  ],
));

```

## `Array.prototype.reduce`

Quando queremos iterar uma array, usamos `forEach`. Agora, para fazer o mesmo,
mas coletando uma lista de valores, com um valor de cada elemento, usamos `map`.

`reduce` é similar ao `map`, porém o utilizamos para iterar uma array e obter um
**único valor** que contenha um consolidado de todos os elementos.

Façamos o seguinte:

```js
let inicial = 0;
const valor = arr.reduce((valorPrevio, item, indice, array) => {
  /* aqui vai seu código */
}, inicial);

```

Onde

- `item` -- é o elemento atual que estamos iterando

- `index` -- é o índice atual

- `array` -- é a array atual

Até aqui tudo mais ou menos normal, porém adicionamos um parâmetro:

- `valorPrevio` -- que é o resultado da chamada anterior da função. Na primeira
  chamada da função, o valor de `valorPrevio` é `inicial`.

Vejamos um exemplo simples: somar todos os elementos de uma array.

```js
arr = [1, 2, 3, 4, 5];
inicial = 0;
const arrSoma = arr.reduce((soma, atual) => soma + atual, inicial);
console.log(arrSoma === 15);

```

Aqui usamos a variante mais comum de `reduce`, que só utiliza os dois primeiros
parâmetros.

Vejamos com mais detalhes o que está acontecendo:

1. Na primeira chamada, `soma` tem o valor de `inicial` (o segundo argumento de
   `reduce`), que é `0`. E `atual` é o primeiro elemento da array, que é `1`.
   Então o resultado é `1`.
2. Na segunda chamada, `sum === 1`, somamos o segundo elemento da array (`2`) e
   devolvemos.
3. Na terceira chamada, `sum === 3` e somamos ao terceiro elemento (`3`) ...

E assim segue:

![image](https://user-images.githubusercontent.com/211721/40194646-c88004e4-59d0-11e8-8ba2-71e6afeef003.png)

Se passarmos para uma tabela, onde cada fila representa uma chamada da função
sobre o próximo elemento da array:

|                |`soma`|`atual`|`resultado`|
|----------------|------|-------|-----------|
|primeira chamada|  `0` |  `1`  |    `1`    |
|segunda chamada |  `1` |  `2`  |    `3`    |
|terceira chamada|  `3` |  `3`  |    `6`    |
|quarta chamada  |  `6` |  `4`  |   `10`    |
|quinta chamada  | `10` |  `5`  |   `15`    |

Como podemos ver, o resultado da chamada anterior se converte no primeiro
parâmetro da próxima chamada.

Finalizando, apenas vamos mencionar que `reduceRight` faz a mesma coisa, porém
começando pelo final da array.

Vejamos agora dois exemplos.

### Calcular a quantidade de anos vividos de todas as inventoras, somados

```js
const totalAnosVividos = inventoras.reduce(
  (total, inventora) => total + (inventora.falecimento - inventora.anoNascimento),
  0,
);
console.log(totalAnosVividos === 305);

```

### Somar a quantidade de ocorrências de cada meio de transporte

Vamos mudar de base de dados.

```js
const dadosTransporte = [
  'carro', 'carro', 'caminhao', 'caminhao', 'bicicleta', 'caminhada',
  'carro', 'van', 'bicicleta', 'caminhada', 'carro', 'van',
  'carro', 'caminhao',
];

const transportReduceFn = (obj, item) => {
  const result = {
    ...obj,
  };
  /* se for a primeira vez que encontramos este meio de transporte */
  if (!obj[item]) {
    result[item] = 0; /* inicializo em 0 */
  }
  result[item] += 1;
  return result;
};

let transporte = dadosTransporte.reduce(transportReduceFn, {});
console.log(equal(
  transporte,
  {
    carro: 5, caminhao: 3, bicicleta: 2, caminhada: 2, van: 2,
  },
));

```

### Agora a mesma coisa, porém agregando um novo meio de transporte (pogobol)

```js
dadosTransporte.push('pogobol');
transporte = dadosTransporte.reduce(transportReduceFn, {});
console.log(equal(
  transporte,
  {
    carro: 5, caminhao: 3, bicicleta: 2, caminhada: 2, van: 2, pogobol: 1,
  },
));

```

***

Nesta leitura vimos alguns exemplos de métodos de arrays que, uma vez que se
aprende a dominá-los, são super úteis.

## Leituras complementares

- [Array no
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array methods em javascript.info (em
  inglês)](https://javascript.info/array-methods)