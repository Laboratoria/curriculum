# 02 - Properties and Methods

## Trabalhando com matrizes e objetos

* Tipo: `leitura`
* Formato: `ritmo próprio`
* Duração: `60min`

### Objetivos de Aprendizagem

* Saiba quais são as propriedades e métodos em JavaScript
* Aprenda as principais propriedades e métodos de `arrays`e`objects`
* Aprenda a inspecionar informações `arrays`e `objects`usar`console.table(args);`

O texto abaixo é baseado em grande parte, com alguns ajustes, no capítulo 4 do [Eloqüente JavaScript](http://eloquentjavascript.net/) , Marijn Haverbeke, 2014.

### Propriedades e métodos

Ao longo deste curso, vimos uma série de comandos um pouco estranhos que nos permitem fazer coisas em JavaScript. Por exemplo, vimos que colocar `.length`no final de uma `string`retorna o número de caracteres na `string`. Também vimos que, ao colocar `.toUpperCase()`no final de uma `string` nos devolve a mesma `string` em letras maiúsculas.

Estes são exemplos de **propriedades** e **métodos** em JavaScript. As propriedades normalmente nos _**dizem**_ algo sobre o valor associado e os métodos geralmente _**fazem**_ algo sobre o valor associado. Por exemplo, `length`é uma propriedade que nos informa o tamanho do valor associado, enquanto `toUpperCase()`é um método que faz a ação de transformar em maiúsculas o valor associado.

O interessante sobre as propriedades e os métodos é que eles não são apenas para as `strings`, que é o que usamos até agora. Podemos acessar as propriedades e usar métodos nos `arrays`e nos `objects`também. De fato, quase todos os valores em JavaScript possuem propriedades ou métodos. As exceções são apenas `null`e `undefined`.

As duas maneiras comuns de acessar propriedades ou métodos no Javascript são com um ponto \(`.`\) e colchetes \( `[]`\). Ambos `valor.x`e `valor[x]`acessam uma propriedade em valor, mas não necessariamente a mesma propriedade. A diferença está em como é interpretado `x`. Quando usamos um ponto, a parte depois do ponto deve ser um nome de variável válido e nomear diretamente a propriedade ou método. Quando usamos colchetes, a expressão dentro dos colchetes é _**avaliada**_ para obter o nome da propriedade. Enquanto que `valor.x`procura pela propriedade do valor chamado "x", `valor[x]`tenta _avaliar_ a expressão x e usar o resultado como o nome da propriedade.

### Propriedades e métodos de _arrays_

Nós já vimos uma maneira de acessar as propriedades de um `array`. Quando acessamos os elementos de um `array`\(usando os colchetes `[]`e o _índice_ \), estamos realmente acessando suas propriedades. Isso ocorre porque **os elementos de uma matriz são armazenados em propriedades** . Então, quando fazemos `myArray[0]`estamos realmente dizendo ao JavaScript para retornar o valor armazenado na propriedade `0`da matriz, que é definida como o primeiro valor da "primeira caixa" do arquivo `array`.

#### Encontrando o comprimento de um _array_

Como as `strings`, os `arrays`em JavaScript vêm com uma propriedade `length`que retorna o comprimento do `array`, isto é, o número de elementos que compõem o array. Vamos ver um exemplo:

```text
var myArray = [300, 'hola mundo', [100, 'HOLA MUNDO']];

console.log(myArray.length);
// → 3
```

#### Adicionando elementos a um _array_

Para adicionar um elemento ao final de um `array`JavaScript, usamos o **método** `push` . Lembre-se de que é um método porque **faz** algo com o valor associado - nesse caso, ele adiciona um elemento ao final do _array_. Vejamos um exemplo:

```text
var myArray = [300, 'hola mundo', [100, 'HOLA MUNDO']];
console.log(myArray.length);
// → 3

myArray.push('último elemento');
// → 4

console.log(myArray);
// → (4) [300, 'hola mundo', Array(2), 'último elemento']
```

O ato de executar um método é conhecido como "chamar" o método. Isso ocorre porque, no final, os **métodos são propriedades que contêm funções** - e as funções são "chamadas" ou "invocadas". Faz sentido, certo? As propriedades nos _**dizem**_ algo sobre o valor associado e os métodos geralmente _**fazem**_ algo sobre o valor associado. Os métodos conseguem _**fazê-lo**_ porque contêm funções.

Quando chamamos o método `push`duas coisas acontecem. Primeiro, o elemento que colocamos entre parênteses \(no exemplo anterior, o `string`"último elemento"\) é adicionado ao `array`. Em segundo lugar, o novo comprimento é devolvido. É por isso que depois de executar o código, `myArray.push('último elemento');`o número é impresso `4`no terminal - porque o array agora tem um comprimento de `4`.

#### Outros métodos de _arrays_

JavaScript nos dá vários métodos para manipular `arrays`. Com eles podemos adicionar elementos ao início do `array`, remover elementos do `array`, concatenar `arrays`, unir mais de um `array`e muitas outras coisas.

Como é habitual neste curso, você deve se acostumar a "aprender a aprender". Lembre-se que no mundo da tecnologia, o **autoaprendizado** é essencial. Novas ferramentas, linguagens ou tecnologias estão constantemente surgindo e você deve aprender por conta própria para se manter atualizada. Portanto, é importante que, desde o início, você se acostume a aprender sozinha e assuma o controle de seu desenvolvimento profissional.

Abaixo, apresentamos uma lista de métodos dos `arrays`que você deve investigar por conta própria e aprender a usar.

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

Lembre-se de que, para sua pesquisa, recomendamos as informações oferecidas pelo [MDN sobre arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Você também pode pesquisar no Google e experimentar o console, vendo como cada método se comporta. Eu sugiro que você abra o console, crie um `array`qualquer e vá testando o que você aprende para garantir que você entenda como as coisas funcionam.

Lembre-se também de que você pode explorar outras formas de autoaprendizagem:

* Pesquise outros recursos na Web. Um muito bom é stackoverflow. Em português, geralmente há menos conteúdo de qualidade, então você pode ter que se sustentar com o tradutor do Google.
* Consulte uma colega de turma
* Verifique com uma amiga \(ou amigo\) quem sabe sobre programação :\)

_NOTA: É importante NÃO avançar se você não conseguiu entender bem os conceitos acima. O que se segue neste curso é construído sobre esses conceitos, então aproveite para aprender bem antes de seguir em frente._

### Propriedades e métodos de objetos

Já vimos que as _chaves_ dos `objects`são equivalentes às suas propriedades. E vimos como acessar essas propriedades. Precisamente ao criar o par de _valores-chave_ de um objeto, estamos criando uma propriedade que armazena o valor fornecido. Lembre-se do nosso exemplo com o objeto `movie`:

```text
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound', ]
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

Com `movie['title']`ou `movie.title`estamos acessando a **propriedade** chamada 'title' do objeto `movie`.

Também podemos criar **métodos para** `objects`que criamos \(como o objeto `movie`do exemplo\) . Conseguimos isso incluindo uma função como propriedade. Mas, por enquanto, não se preocupe com isso. Nós veremos mais tarde. Por enquanto, o importante é saber que, assim como `strings` e `arrays` têm propriedades e métodos, o mesmo acontece com `objects`. E lembre-se: as propriedades nos _**dizem**_ algo sobre o valor associado e os métodos geralmente _**fazem**_ algo sobre o valor associado. Os métodos conseguem _**fazê-lo**_ porque contêm funções.

#### O comprimento de um objeto?

A propriedade `length`que podemos usar para calcular o comprimento de a `string` ou a `array` não é uma propriedade válida para os `objects`que criamos. Isto é, se ao objeto `movie`tentarmos aplicar a propriedade `length`o resultado é `undefined`.

```text
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

O que podemos fazer é acessar a lista de _chaves_ de um `object`. Podemos fazer isso com o método `Object.keys()`, assim:

```text
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  'year of release': 1984,
  plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
  'other awards': ['best sound']
};

console.log(Object.keys(movie));
// → (8) ['title', 'director', 'stars', 'year of release', 'plot', 'oscar', 'tags', 'other awards']
```

### Inspecionando _arrays_ e _objects_

Para exibir no terminal as informações contidas em um `array` de duas dimensões ou um `object`que temos o método `.table()`de `console`.

```text
var questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];

console.log(questions);
// → (4) [Array(2), Array(2), Array(2), Array(2)]

console.table(questions);
```

![exemplo de impress&#xE3;o de matriz](https://camo.githubusercontent.com/65520d20810d1fc47baa090fac7dab29cf1c639d/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f32323632323934323232353831353233306332383661303461363065363635366f2e706e67)

```text
var weblogs = [
  {nombre: 'Genbeta', visitas: 2000, color: 'Azul'},
  {nombre: 'Xataka', visitas: 32000, color: 'Verde'},
  {nombre: 'Applesfera', visitas: 12000, color: 'Gris'}
];

console.log(weblogs);
// (3) [{…}, {…}, {…}]

console.table(weblogs);
```

![exemplo de impress&#xE3;o de objeto](https://camo.githubusercontent.com/84566e256811c2e664f0bbc508cdb699e07644f8/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f64653739363039386336663138636163623239616535383236393231396634666f2e706e67)

