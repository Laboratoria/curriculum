# Propriedades e Métodos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem

* Saiba quais são as propriedades e métodos em JavaScript
* Aprenda as principais propriedades e métodos de `arrays` e `objects`
* Aprenda a inspecionar informações de `arrays` e `objects` usando
  `console.table(args);`

O texto abaixo é baseado em grande parte, com alguns ajustes, no capítulo 4 do
[Eloquent JavaScript](http://eloquentjavascript.net/) , Marijn Haverbeke, 2014.

## Propriedades e métodos

Ao longo deste curso, vimos uma série de comandos um pouco estranhos que nos
permitem fazer várias coisas em JavaScript. Por exemplo, vimos que colocar
`.length` no final de uma `string` retorna o número de caracteres da `string`.
Também vimos que, ao colocar `.toUpperCase()` no final de uma `string`
obteremos a mesma `string` em letras maiúsculas.

Estes são exemplos de **propriedades** e **métodos** em JavaScript. As
propriedades normalmente nos _**dizem**_ algo sobre o valor associado e os
métodos geralmente _**fazem**_ algo sobre o valor associado. Por exemplo,
`length` é uma propriedade que nos informa o tamanho do valor associado,
enquanto `toUpperCase()` é um método que realiza a ação de transformar em
maiúsculas o valor associado.

O interessante sobre as propriedades e os métodos é que eles não são apenas
para as _strings_, o que usamos até agora. Podemos acessar as propriedades e
usar métodos nos _arrays_ e nos _objects _também. De fato, quase todos os
valores em JavaScript possuem propriedades ou métodos. As exceções são apenas
`null` e `undefined`.

As duas maneiras comuns de acessar propriedades ou métodos no Javascript são:
com um ponto \(`.`\) ou colchetes \(`[]`\). Ambos `valor.x` e `valor[x]`
acessam uma propriedade de `valor`, mas não necessariamente a mesma
propriedade. A diferença está em como é interpretado `x`. Quando usamos um
ponto, a parte depois do ponto deve ser um nome de variável válido e nomear
diretamente a propriedade ou método. Quando usamos colchetes, a expressão
dentro deles é _**avaliada**_ para obter o nome da propriedade. Enquanto que
`valor.x` procura pela propriedade do valor chamado "x", `valor[x]` tenta
_avaliar_ a expressão `x` e depois usar o resultado como o nome da propriedade.

## Propriedades e métodos de _arrays_

Nós já vimos uma maneira de acessar as propriedades de um `array`. Quando
acessamos os elementos de um `array` \(usando os colchetes `[]` e o índice\),
estamos realmente acessando suas propriedades. Isso ocorre porque
**os elementos de um arranjo são armazenados em propriedades**. Então, quando
fazemos `myArray[0]`, estamos realmente dizendo ao JavaScript para retornar o
valor armazenado na propriedade `0` do array, que é definido como o primeiro
valor da "primeira caixinha" do `array`.

### Encontrando o comprimento de um _array_

Como as _strings_, os _arrays_ em JavaScript vêm com uma propriedade `length`
que retorna o comprimento do `array`, isto é, o número de elementos que compõem
o array. Vamos ver um exemplo:

```javascript
const myArray = [300, 'olá mundo', [100, 'OLÁ MUNDO']];

console.log(myArray.length);
// → 3
```

### Adicionando elementos a um _array_

Para adicionar um elemento ao final de um `array` JavaScript, usamos o
**método** `push`. Lembre-se de que é um método porque **faz** algo com o valor
associado - nesse caso, ele adiciona um elemento ao final do _array_. Vejamos
um exemplo:

```javascript
let myArray = [300, 'olá mundo', [100, 'OLÁ MUNDO']];
console.log(myArray.length);
// → 3

myArray.push('último elemento');
// → 4

console.log(myArray);
// → (4) [300, 'olá mundo', Array(2), 'último elemento']
```

O ato de executar um método é conhecido como "chamar" o método. Isso ocorre
porque, na realidade, os **métodos são propriedades que contêm funções**, e as
funções são "chamadas" ou "invocadas". Faz sentido, certo? As propriedades nos
_**dizem**_ algo sobre o valor associado e os métodos geralmente _**fazem**_
algo sobre o valor associado. Os métodos conseguem _**fazê-lo**_ porque contêm
funções.

Quando chamamos o método `push`, duas coisas acontecem. Primeiro, o elemento
que colocamos entre parênteses \(no exemplo anterior, a `string` "último
elemento"\) é adicionado ao `array`. Em segundo lugar, o novo comprimento é
devolvido. É por isso que depois de executar o código
`myArray.push('último elemento');` o número impresso no terminal é `4`, pois o
_array_ agora possui um comprimento de `4`.

### Outros métodos de _arrays_

O JavaScript nos dá vários métodos para manipular `arrays`. Com eles, podemos
adicionar elementos no início do `array`, remover elementos, concatenar
`arrays`, unir mais de um `array` e muitas outras coisas.

Como é habitual neste curso, você deve se acostumar a "aprender a aprender".
Lembre-se de que no mundo da tecnologia, o **autoaprendizado** é essencial.
Novas ferramentas, linguagens e tecnologias estão constantemente surgindo e
você deve aprender por conta própria para se manter atualizada. Portanto, é
importante que, desde o início, você se acostume a aprender sozinha e assuma
o controle de seu desenvolvimento profissional.

Abaixo, apresentamos uma lista de métodos dos `arrays` que você deve investigar
por conta própria e aprender a usar.

* `push()`
* `shift()`
* `unshift()`
* `pop()`
* `concat()`
* `indexOf()`
* `join()`
* `slice()`
* `splice()`
* `lastIndexOf()`

Lembre-se de que, para sua pesquisa, recomendamos as informações oferecidas
pelo [MDN sobre arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Você também pode pesquisar no Google e experimentar no console, vendo como cada
método se comporta. Eu sugiro que você abra o console, crie um `array` qualquer
e vá testando o que você aprende para garantir que você entenda como as coisas
funcionam.

Lembre-se também de que você pode explorar outras formas de autoaprendizagem:

* Pesquise outros recursos na Web. Um muito bom é stackoverflow. Em português,
  geralmente há menos conteúdo de qualidade, então você pode precisar do
  tradutor do Google como apoio.
* Consulte uma colega de turma
* Verifique com uma amiga \(ou amigo\) que sabe programação :\)

_NOTA: É importante NÃO avançar se você não conseguiu entender bem os conceitos
anteriores. O que se segue neste curso é construído sobre esses conceitos,
então use seu tempo para aprender bem antes de seguir em frente._

## Propriedades e métodos de objetos

Já vimos que as chaves dos `objects` são equivalentes às suas propriedades. E
vimos como acessar essas propriedades. Precisamente, ao criar o par de
chave-valor de um objeto, estamos criando uma propriedade que armazena o valor
fornecido. Lembre-se do nosso exemplo com o objeto `movie`:

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound']
};

console.log(movie['title']);
// → Back to the Future

console.log(movie[title]);
// → Uncaught ReferenceError: title is not defined

console.log(movie.'title');
// → Uncaught SyntaxError: Unexpected string

console.log(movie.title);
// → Back to the Future
```

Com `movie['title']` ou `movie.title` estamos acessando a **propriedade**
chamada "title" do objeto `movie`.

Também podemos criar **métodos para** `objects` que criamos \(como o objeto
`movie` do exemplo\). Conseguimos isso incluindo uma função como propriedade.
Mas, por enquanto, não se preocupe com isso. Nós veremos mais tarde. Por
enquanto, o importante é saber que, assim como `strings` e `arrays` têm
propriedades e métodos, o mesmo acontece com `objects`. E lembre-se: as
propriedades nos _**dizem**_ algo sobre o valor associado e os métodos
geralmente _**fazem**_ algo sobre o valor associado. Os métodos conseguem
_**fazê-lo**_ porque contêm funções.

### O comprimento de um objeto?

A propriedade `length` que podemos usar para calcular o comprimento de uma
`string` ou um `array` não é uma propriedade válida para os `objects` que
criamos. Isto é, se ao objeto `movie` tentarmos aplicar a propriedade `length`
o resultado é `undefined`.

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound', ]
}

console.log(movie.length);
// → undefined
```

O que podemos fazer é acessar a lista de _chaves_ de um `object`. Podemos fazer
isso com o método `Object.keys()`, assim:

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound']
};

console.log(Object.keys(movie));
// → (8) ['title', 'director', 'stars', 'year of release', 'plot', 'oscar', 'tags', 'other awards']
```

## Inspecionando _arrays_ e _objects_

Para exibir no terminal as informações contidas em um `array` de duas dimensões
ou em um `object`, temos o método `.table()` de `console`.

```javascript
var questions = [
  ['Em quanto países a Laboratoria opera?', 3],
  ['Qual a capital do Perú', 'Lima'],
  ['Qual a dança típica do Chile?', 'Cueca'],
  ['Qual a moeda do México?', 'Peso']
];

console.log(questions);
// → (4) [Array(2), Array(2), Array(2), Array(2)]

console.table(questions);
```

![exemplo da impress&#xE3;o de arranjo](<https://fotos.subefotos.com/22622942225815230c286a04a60e6656o.png>)

```javascript
var weblogs = [
  {nome: 'Genbeta', visitas: 2000, cor: 'Azul'},
  {nome: 'Xataka', visitas: 32000, cor: 'Verde'},
  {nome: 'Applesfera', visitas: 12000, cor: 'Gris'}
];

console.log(weblogs);
// (3) [{…}, {…}, {…}]

console.table(weblogs);
```

![exemplo de impress&#xE3;o de objeto](<https://fotos.subefotos.com/de796098c6f18cacb29ae58269219f4fo.png>)
