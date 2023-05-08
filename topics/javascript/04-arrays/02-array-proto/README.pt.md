---
type: read
duration: 30min
---

# Array Proto

Arranjos \(_arrays_\) em JavaScript são implementados como objetos, o que pode
soar um pouco estranho mas, em JavaScript, quase todos os tipos de dados
\(`number`, `string`, `array`, ...\) são implementados como objetos e, como tal,
os valores desses _tipos_ terão uma série de _métodos_ e _propriedades_
associados a eles. Tecnicamente, eles herdam esses _métodos_ e _propriedades_ de
um _protótipo_.

Neste curso, nós não vamos aprofundar o mecanismo de _herança prototipal_  em
JavaScript, mas precisamos ao menos saber que qualquer arranjo \(_array_\) em
JavaScript é uma _instância_ do construtor \(_constructor_\) `Array` e,
portanto, herda todos os _métodos_ e _propriedades_ definidos em
`Array.prototype`.

A propósito, todos os objetos têm um _protótipo_ e, por exemplo, é através
desses protótipos que nossas `strings` magicamente possuem uma _propriedade_
`length` ou um método `toLowerCase()`. São herdados de `String.prototype.length`
e `String.prototype.toLowerCase`, respectivamente.

Voltando aos arranjos... Vejamos um exemplo: abra o console do navegador e
digite `[].`. Deve aparecer automaticamente uma lista com todos os _métodos_ e
_propriedades_ de nossa matriz vazia \(`[]`\):

![M&#xE9;todos e propriedades de &quot;Array&quot; no console do
navegador](https://user-images.githubusercontent.com/110297/37485550-c77d636e-2859-11e8-8b76-21fc103691e5.png)

## Propriedades de `Array.prototype`

Antes de começar, vamos recordar como era a nossa função que nos permite
comparar arrays.

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

```

A única propriedade dos arranjos que nos interessa por agora é
`Array.prototype.length`, uma propriedade de somente leitura que sempre nos
mostra o comprimento atual do _array_. Por exemplo:

```js
console.assert([].length === 0);
console.assert(['a'].length === 1);
console.assert([true, 0, 'foo'].length === 3);

```

## Métodos comuns de `Array.prototype`

O JavaScript nos fornece um monte de métodos para manipular arranjos, iterá-los,
etc. Não se preocupe em memorizar a lista completa \(não acredito que alguém
saiba de cabeça\), pois você irá se familiarizar com eles conforme o uso,
aprendendo a tirar vantagem de seus benefícios. Lembre-se de que sempre há a
[documentação
oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
disponível. Faça uso dela, é a melhor referência.

Vejamos alguns métodos comuns dos arranjos.

### Array.prototype.push

O método `Array.prototype.push` recebe um valor, adiciona-o ao final do arranjo
pelo qual foi chamado e devolve o novo tamanho \(ou comprimento\).

```js
let arr = [0, 0, 0];
console.assert(arr.length === 3);
console.assert(typeof arr.push === 'function');
console.assert(arr.push(1) === 4);
console.assert(equal(arr, [0, 0, 0, 1]));

```

Nesse caso, a funcionalidade do método `push()` pode ser replicada usando uma
simples atribuição:

```js
arr = [0, 0, 0];
console.assert(arr.length === 3);
arr[arr.length] = 1;
console.assert(equal(arr, [0, 0, 0, 1]));

```

A maior diferença é uma questão de semântica e estilo/paradigma. Talvez pareça
sutil, mas acredite, mais tarde você verá o quanto é valioso. Na programação,
muitas vezes veremos que há mais de uma maneira de fazer as coisas, o que pode
criar confusão e frustração mas, no final das contas, isso é o reflexo de
diferentes maneiras de pensar no código, e cada uma tem o seu lugar. Por
exemplo, na _programação funcional_ que veremos mais adiante no Bootcamp,
favorecemos o uso de múltiplos processadores aplicando argumentos a funções e
evitando a atribuição e mudança de valores. Neste contexto, e em particular no
JavaScript moderno, veremos que os métodos dos arranjos nos permitirão escrever
códigos mais expressivos, concisos e, por que não, bonitos.

### Array.prototype.pop

Esse método não recebe nenhum argumento. Ele simplesmente extrai o último
elemento do arranjo e o retorna \(modificando o arranjo diretamente - _in
place_\).

```js
arr = ['oh', 'my', 'god'];
console.assert(arr.pop() === 'god');
console.assert(equal(arr, ['oh', 'my']));

```

### Array.prototype.slice

`Array.prototype.slice` cria um novo arranjo através de uma cópia superficial _
_\(_shallow copy_\) de uma parte do arranjo pelo qual é invocado. Ele recebe
dois argumentos: `begin` e `end` que indicam qual parte do arranjo queremos
copiar \(sem incluir o elemento de índice `end`\).

O arranjo original não é modificado.

Execute os seguintes exemplos no console do navegador para ver como o método
`slice()` se comporta.

```js
arr = [3, 2, 1];
console.assert(
  equal(arr.slice(0), [3, 2, 1]),
);
console.assert(
  equal(arr.slice(1), [2, 1]),
);
console.assert(
  equal(arr.slice(2), [1]),
);
console.assert(
  equal(arr.slice(-1), [1]),
);
console.assert(
  equal(arr.slice(0, 1), [3]),
);
console.assert(
  equal(arr, [3, 2, 1]),
);

```

### Array.prototype.indexOf

O método `indexOf()` recebe um valor e devolve o índice do vetor que contém esse
valor se ele for encontrado, ou `-1` caso contrário.  Esse método é usado com
muita frequência para verificar se um arranjo contém um determinado valor
\(basta que o resultado seja diferente de `-1`\).

```js
arr = ['foo', 'bar', 'baz'];
console.assert(arr.indexOf('foo') === 0);
console.assert(arr.indexOf('hmmm') === -1);

```

## Propriedades e métodos herdados de Object.prototype

Vale ressaltar que os arranjos também herdam de `Object.prototype`
indiretamente, assim como todos os demais objetos em JavaScript. Então nossos
arranjos também terão métodos como `toString()` ou `isPrototypeOf()`. Na próxima
unidade \(e cursos posteriores\), vamos explorar `Object.prototype`, o conceito
de _herança_ e a cadeia de protótipos.

Nesta leitura, vimos alguns exemplos de métodos que todos os arranjos possuem,
mas há muitos mais. Recomendamos que você explore a documentação oficial do
[Array.prototype no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array);
lá, você pode ver todos os _métodos_ e _propriedades_ disponíveis e suas
interfaces \(quais argumentos eles esperam, o que devolvem, ...\).

## Leituras complementares

* [Array na
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Object.prototype na
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
