# Métodos de Array

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30 min`

***

Arranjos \(_arrays_\) em JavaScript são implementados como objetos, o que pode soar um pouco estranho mas, em JavaScript, quase todos os tipos de dados \(`number`, `string`, `array`, ...\) são implementados como objetos e, como tal, os valores desses _tipos_ terão uma série de _métodos_ e _propriedades_ associados a eles. Tecnicamente, eles herdam esses _métodos_ e _propriedades_ de um _protótipo_.

Neste curso, nós não vamos aprofundar o mecanismo de _herança prototipal_  em JavaScript, mas precisamos ao menos saber que qualquer arranjo \(_array_\) em JavaScript herda todos os _métodos_ e _propriedades_ definidos em `Array.prototype`.

A propósito, todos os objetos têm um _protótipo_ e, por exemplo, é através desses protótipos que nossas `strings` magicamente possuem uma _propriedade_ `length` ou um método `toLowerCase()`. São herdados de `String.prototype.length` e `String.prototype.toLowerCase`, respectivamente.

Voltando aos _arrays_... Vejamos um exemplo: abra o console do navegador e digite `[].`. Deve aparecer automaticamente uma lista com todos os _métodos_ e _propriedades _de nossa matriz vazia \(`[]`\):

![Metodos de array no console](https://user-images.githubusercontent.com/110297/37485550-c77d636e-2859-11e8-8b76-21fc103691e5.png)

## Propriedades de `Array.prototype`

A única propriedade dos arranjos que nos interessa por agora é `Array.prototype.length`, uma propriedade de somente leitura que sempre nos mostra o comprimento atual do _array_. Por exemplo:

```javascript
console.log([].length); // => 0
console.log(['a'].length); // => 1
console.log([true, 0, 'foo'].length); // => 3
```

## Métodos comuns de `Array.prototype`

O JavaScript nos fornece um monte de métodos para manipular arranjos, iterá-los, etc. Não se preocupe em memorizar a lista completa \(não acredito que alguém saiba de cabeça\), pois você irá se familiarizar com eles conforme o uso,  aprendendo a tirar vantagem de seus benefícios. Lembre-se de que sempre há a [documentação oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) disponível. Faça uso dela, é a melhor referência.

Vejamos alguns métodos comuns dos arranjos.

### Array.prototype.push

O método `Array.prototype.push` recebe um valor, adiciona-o ao final do arranjo pelo qual foi chamado e devolve o novo tamanho \(ou comprimento\).

```javascript
const arr = [0, 0, 0];
console.log(arr.length); // => 3
console.log(typeof arr.push); // => "function"
console.log(arr.push(1)); // => 4
console.log(arr); // => [0, 0, 0, 1]
```

Nesse caso, a funcionalidade do método `push()` pode ser replicada usando uma simples atribuição:

```javascript
const arr = [0, 0, 0];
console.log(arr.length); // => 3
arr[arr.length] = 1;
console.log(arr); // => [0, 0, 0, 1]
```

A maior diferença é uma questão de semântica e estilo/paradigma. Talvez pareça sutil, mas acredite, mais tarde você verá o quanto é valioso. Na programação, muitas vezes veremos que há mais de uma maneira de fazer as coisas, o que pode criar confusão e frustração mas, no final das contas, isso é o reflexo de diferentes maneiras de pensar no código, e cada uma tem o seu lugar. Por exemplo, na _programação funcional_ que veremos mais adiante no Bootcamp, favorecemos o uso de múltiplos processadores aplicando argumentos a funções e evitando a atribuição e mudança de valores. Neste contexto, e em particular no JavaScript moderno, veremos que os métodos dos arranjos nos permitirão escrever códigos mais expressivos, concisos e, por que não, bonitos.

### Array.prototype.pop

Esse método não recebe nenhum argumento. Ele simplesmente extrai o último elemento do arranjo e o retorna \(modificando o arranjo diretamente - _in place_\).

```javascript
const arr = ['oh', 'my', 'god'];
console.log(arr.pop()); // => "god"
console.log(arr); // => ['oh', 'my']
```

### Array.prototype.slice

`Array.prototype.slice` cria um novo arranjo através de uma cópia superficial _ _\(_shallow copy_\) de uma parte do arranjo pelo qual é invocado. Ele recebe dois argumentos: `begin` e `end` que indicam qual parte do arranjo queremos copiar \(sem incluir o elemento de índice `end`\).

O arranjo original não é modificado.

Execute os seguintes exemplos no console do navegador para ver como o método `slice()` se comporta.

```javascript
const arr = [3, 2, 1];
console.log(arr.slice(0)); // => [3, 2, 1]
console.log(arr.slice(1)); // => [2, 1]
console.log(arr.slice(2)); // => [1]
console.log(arr.slice(-1)); // => [1]
console.log(arr.slice(0, 2)); // => [3, 2]
console.log(arr); // => [3, 2, 1];
```

### Array.prototype.indexOf

O método `indexOf()` recebe um valor e devolve o índice do vetor que contém esse valor se ele for encontrado, ou `-1` caso contrário.  Esse método é usado com muita frequência para verificar se um arranjo contém um determinado valor \(basta que o resultado seja diferente de `-1`\).

```javascript
const arr = ['foo', 'bar', 'baz'];
console.log(arr.indexOf('foo')); // => 0
console.log(arr.indexOf('hmmm')); // => -1
```

## Propriedades e métodos herdados de Object.prototype

Vale ressaltar que os arranjos também herdam de `Object.prototype` indiretamente, assim como todos os demais objetos em JavaScript. Então nossos arranjos também terão métodos como `toString()` ou `isPrototypeOf()`. Na próxima unidade \(e cursos posteriores\), vamos explorar `Object.prototype`, o conceito de _herança_ e a cadeia de protótipos.

Nesta leitura, vimos alguns exemplos de métodos que todos os arranjos possuem, mas há muitos mais. Recomendamos que você explore a documentação oficial do [Array.prototype no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype); lá, você pode ver todos os _métodos_ e _propriedades_ disponíveis e suas interfaces \(quais argumentos eles esperam, o que devolvem, ...\).

## Leituras complementares

* [Array na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Object.prototype na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

