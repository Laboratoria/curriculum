# Objetos em JavaScript

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60min`

***

## Objetivos de Aprendizagem

* Aprender o que são `objects` e para que servem
* Aprender a criar, acessar e modificar as informações de um `object`
* Entender a diferença entre um `array` e um`object`

***

O texto a seguir se baseia em grande medida, com alguns ajustes, ao capítulo 4
do [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke,
2014. Tradução em
[Português](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/01-valores-tipos-operadores.md),
e ao capítulo 3 do [JavaScript for
kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015;

***

## O que é um objeto em JavaScript?

Os `objetos` em JavaScript são muito similares ao `arrays`, mas com alguns
diferenciais:

1. Como vimos, para acessar informações dentro de um `array`, nós usamos um
   número correspondente ao _índice_; isto é, a posição em que o valor está
   localizado. Os `objects`, por outro lado, utilizam `strings`ao invés de
   números para acessar os diferentes elementos. Essas `strings` são chamadas de
   chaves (_keys_) ou propriedades, e os elementos para os quais eles apontam
   são chamados de valores \(_values_\). Juntas, essas informações são
   chamadas de _pares de chave-valor_.
2. Como nos `arrays` é necessário o _índice_ para acessar informações, é
   importante manter uma determinada ordem de seus valores. No caso dos _pares
   de chave-valor_, as informações podem estar em qualquer ordem.

Enquanto os `arrays` são usados ​​principalmente para representar listas de
várias coisas, os objetos costumam ser usados ​​para representar elementos
simples, mas com **várias características ou atributos**. Por exemplo, se
quiséssemos agrupar os títulos dos nossos filmes favoritos, usaríamos um `array`
assim:

```javascript
let favoriteMovies = [
  'The Big Fish',
  'The Lord of the Rings',
  'The Empire Strikes Back',
  'The Artist',
  'The Godfather',
  'Back to the Future'
];
```

Mas o que aconteceria se quiséssemos armazenar diferentes informações sobre o
**mesmo** filme? É aí que entra a utilidade de um `object`.

## Criando Objetos

Nós armazenamos diferentes informações sobre o filme `De Volta para o Futuro` em
um só lugar, por meio de um`object`:

```javascript
let movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

No exemplo anterior, criamos uma variável chamada `movie`e atribuímos a ela um
objeto com seis _pares de chave-valor_. Para criar um objeto, usamos as chaves
`{}`  ao invés dos colchetes `[]`  que usamos para criar _arrays_. Dentro das
chaves, colocamos os _pares de chave-valor_ separados por uma vírgula. Conforme
mostrado no exemplo, não precisamos colocar uma vírgula após o último par de
chave-valor.

A sintaxe de cada par de _valores-chave_ é a seguinte:

```javascript
{chave: valor}
```

Quando criamos um `object`, a chave \(_key_\) é colocada antes dos dois pontos
`:`, e o valor \(_value_\), depois. Os dois pontos agem um pouco como um sinal
de igual \( `=`\), isto é, os valores à direita são atribuídos aos nomes à
esquerda, assim como quando variáveis ​​são criadas.

### Chaves \(_strings_\) com ou sem aspas

Como vimos, as chaves são `strings`. Como mostra o exemplo anterior, não é
necessário colocar as chaves entre aspas. Isso ocorre porque o JavaScript sabe
que as chaves são `strings`. No entanto, também é válido colocar as chaves entre
aspas. Por exemplo, o objeto abaixo também é válido:

```javascript
const person = {
  'age': 18,
  'name': 'Michelle',
  'friends': ['Alexandra','Ana']
  };
```

Se não colocarmos as aspas, as chaves devem seguir as mesmas regras para nomear
variáveis. Por exemplo, elas não devem ter espaços. Mas se colocarmos as chaves
entre aspas, podemos usar o nome que quisermos. Por exemplo, se quisermos
adicionar uma chave do ano em que o filme saiu \("ano de lançamento"\),
faríamos:

```javascript
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound']
  };
```

É importante notar que, embora as _keys_ sejam sempre `strings`, os _values_
podem ser qualquer valor JavaScript - eles podem até ser uma variável que
contenha, ou melhor, "agarre" (com seus tentáculos) um valor.

## Acessando informações de um objeto

Podemos acessar os valores de um `object`de duas maneiras:

1. O primeiro é usar os colchetes `[]`, assim como fazemos com _arrays_. A única
   diferença é que, em vez de usar o _índice_ \(um `number`\), usamos a chave
   \(uma `string`\), sempre entre aspas.
2. O segundo é usando o ponto \( `.`\) com o nome da chave imediatamente depois,
   **sem** aspas. Isso é chamado notação de ponto \(_dot notation_\). Como na
   declaração das chaves, se usarmos notação de ponto, a chave deve obedecer às
   regras de nomes válidos \(por exemplo, elas não devem conter espaços\).

Vamos ver alguns exemplos para esclarecer quando um ou outro é usado:

```js
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
};

console.assert(movie['title'] === 'Back to the Future');
console.assert(movie.title === movie['title']);

```

```js
let error = false;
try {
  console.assert(movie[title] === 'Back to the Future');
} catch (e) {
  error = e.message;
}
console.assert(error === 'title is not defined');

```

```js
console.assert(movie.'title' === 'Back to the Future');
// → Uncaught SyntaxError: Unexpected string
```

Vamos analisar os dois erros:

1. Quando usamos colchetes **sem** aspas, o JavaScript acha que o título é uma
   variável e como não há uma variável chamada titulo no nosso programa, um erro
   de referência é gerado e o JavaScript avisa que esse título não está
   definido:`Uncaught ReferenceError: titulo is not defined`
2. Quando usado `dot notation` **com** aspas, o JavaScript devolve um erro de
   sintaxe, uma vez que `dot notation`não deve ser usada com `string`. Por isso,
   devolve-nos: `Uncaught SyntaxError: Unexpected string`.

O que acontece quando pedimos uma chave que o `object` não tem? JavaScript nos
retorna `undefined`. Vamos ver um exemplo:

```js
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, ' +
    'is accidentally sent 30 years into the past in a time-traveling DeLorean ' +
    'invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.assert(movie['producer'] === undefined);
```

E como conseguimos um dos atores \(`stars`\) do filme? Para isso, temos que
acessar a chave `'stars'` do objeto `movie`, que devolverá um `array`, para em
seguida acessar um dos elementos através de colchetes `[]` e o índice. Vejamos
um exemplo:

```js
movie = {
  title: 'Back to the Future',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
};

console.assert(movie.stars[0] === 'Michael J. Fox');
console.assert(movie['stars'][1] === 'Christopher Lloyd');
console.assert(movie.stars[2] === 'Lea Thompson');
```

Observe que usamos `movie.stars`e `movie['stars']`para enfatizar que as duas
formas funcionam, por motivos didáticos. Mas tenha cuidado, isso **não** é uma
boa prática. Nós só fizemos isso para dar o exemplo. Quando escrevemos
programas, seja nos desafios de código, nossos exercícios de classe ou projetos
pessoais, a coisa certa a fazer é escolher uma opção e ser consistente em todo o
código. Recomendamos, em particular, `movie.stars`uma vez que é mais curto e
mais fácil de ler. Lembre-se que a mesma coisa acontece com as aspas das
`strings`: você pode usar simples ou dupla, mas de forma consistente.

## Definindo ou alterando os elementos de um objeto

Assim como com `arrays`, podemos adicionar ou alterar os elementos de um
`object`usando os colchetes e chaves ou notação de ponto.

Vamos ver um exemplo que começa com um `object`vazio e segue adicionando e
modificando elementos.

```js
/* criando um objeto vazio */
const student = {};

/* adicionando elementos ao objeto */
student['name'] = 'Carolina';
student['points'] = 2500;

/* adicionando elementos ao objeto */
student.courses = ['Intro a JS', 'Intro a UX'];
student.isActive = true;

/* ressucitamos a nossa função comparadora */

const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

console.assert(equal(
  student,
  {
    name: 'Carolina',
    points: 2500,
    courses: ['Intro a JS', 'Intro a UX'],
    isActive: true,
  },
));

/* atualiando os pontos */
student['points'] = 3500;

console.assert(equal(
  student,
  {
    name: 'Carolina',
    points: 3500,
    courses: ['Intro a JS', 'Intro a UX'],
    isActive: true,
  },
));

```

A seguir Daniel nos explica os conceitos principais de `objects` com um
exemplo:

[![Arrays](https://img.youtube.com/vi/_P1kAhq7W38/0.jpg)](https://www.youtube.com/watch?v=_P1kAhq7W38)
