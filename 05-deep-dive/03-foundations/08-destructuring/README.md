# Atribuição desestruturada de vetores e objetos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Desestruturação de Vetores

A sintaxe de _destructuring assignment_ é uma expressão de JavaScript que possibilita a extração de dados de vetores ou objeto usando uma sintaxe que equivale à construção de vetores e objetos literais.
 
Algo particularmente útil que você pode fazer com _destructuring assignment_ é ler uma estrutura completa em uma única instrução, embora você possa fazer também outras coisas interessantes, como vemos nos exemplos seguintes:

```js
const numbers = ["1", "2", "3"];

// sem destructuring
const one   = numbers[0];
const two   = numbers[1];
const three = numbers[2];

// com destructuring
const [um, dois, tres] = numbers;

console.log(one, two, three); // 1 2 3
console.log(um, dois, tres); // 1 2 3
```

Podemos atribuir de maneira desestruturada sem uma declaração na atribuição:

```js
let ichi, ni, san;
[ichi, ni, san] = ['um', 'dois', 'tres'];
```

Indo um pouco mais além, podemos utilizar funções para retornar um conjunto de valores e atribuí-los de forma desestruturada:

```js
function users(){
  return ['joan', 'carlos', 'david', 'dani'];
}
```

Deste modo podemos retornar qualquer número de valores de forma arbitrária. Até aqui, nenhuma novidade, mas se utilizarmos a atribuição desestruturada:

```js
let [joan, carlos, david, dani] = users();
console.log(joan, carlos, david, dani); // 'joan' 'carlos' 'david' 'dani'
```

A atribuição de variáveis é realizada em ordem; o primeiro valor é atribuído à primeira variável, o segundo à segunda e assim sucessivamente.

Você pode ignorar os valores de retorno nos quais você estiver mais interessada:

```js
function f() {
  return [1, 2, 3];
}

let [a, , b] = f();
console.log(`A es ${a}, B es ${b}`); // 'A é 1, B é 3'
```

Depois de executar este código `a` vale 1 e `b` vale 3. O valor 2 é ignorado.
Você pode ignorar qualquer dos valores retornados (ou todos).

