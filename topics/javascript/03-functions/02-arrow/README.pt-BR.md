# Arrow Functions

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Diferenças entre *arrow functions* e funções clássicas

Uma das novidades mais interessantes de ES6 são as denominadas **funções seta**,
ou *arrow functions*. As funções setas são, como seu nome indica, definidas por
meio de uma nova sintaxe que utiliza uma "seta" (`=>`). As funções seta se
comportam de maneira sensivelmente diferente das funções tradicionais de
JavaScript. A seguir, algumas de suas diferenças:

* **Não podem ser chamadas com `new`**: Como não possuem um método construtor,
  não podem ser executadas como construtores. As funções seta dispararão um erro
  se forem utilizadas com `new`.
* **Não há protótipo**: Como não possuem construtor, tampouco é necessário um
  protótipo. Logo, não existirá a propriedade `prototype` e uma função seta.
* **Não criam um novo contexto**. O valor de `this`, `super`, `arguments` e
  `new.target` dentro da função será o mesmo que na função tradicional
  (*non-arrow*) mais próxima.
* **Não pode trocar `this`**: O valor de `this` dentro da função seta permanece
  imutável ao longo de todo o ciclo de vida da função.
* **Não existe objeto `arguments`**: Somente é possível atribuir parâmetros a
  uma função seta mediante parâmetros nomeados e *rest parameters*.
* **Não é possível duplicar parâmetros com o mesmo nome**: Tanto no modo estrito
  como no não estrito, diferente das funções clássicas, que não permitem somente
  o modo estrito.

### Sintaxe

O exemplo mais simples de uma **arrow functions* é o a seguir, embora vejamos
nos exemplos seguintes que podem existir diversas variações.

```js
const echo = text => text;
```

Esta função seria equivalente a seguinte:

```js
const echo = function(text) {
  return text;
};
```

Nos dois casos, a execução da função daria a seguinte saída:

```js
console.log(echo('Olá Mundo!')); // Olá Mundo!
```

Como com qualquer função, podemos passar tantos argumentos quanto quisermos para
a função:

```js
const sum = (a, b) => a + b;
console.log(sum(1, 1)); // 2
```

Ou nenhum, claro:

```js
const greet = () => 'Olá, estrangeiro!';
console.log(greet()); // Olá, estrangeiro!
```

Se quisermos realizar operações mais complicadas, podemos usar chaves e definir
um valor de retorno:

```js
const resize = ({x, y}, ratio) => {
  return {
    x: x * ratio,
    y: y * ratio
  };
};

console.log(resize({x: 5, y: 15}, 100)); // { x: 500, y: 1500 }
```

Uma função seta não cria um novo contexto. Uma de suas maiores fontes de erros
em JavaScript acontecia pela criação de diferentes contextos em uma função
dependendo de quem a executa. Vejamos o exemplo a seguir:

```js
const randomWinner = function(drivers) {
  const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
  return drivers[winner];
};

const F1Race = {
  drivers: [
    'Alonso',
    'Vettel',
    'Button',
    'Massa'
  ],
  init: function() {
    console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
    setTimeout((function() {
      console.log('O ganhador é ', randomWinner(this.drivers));
    }), 1000);
  }
};

F1Race.init();
```

`F1Race` é um objeto que inicia uma corrida de Fórmula 1 por meio de sua função
`init()`. Após um segundo, será executada a função `randowWinner()`, que a
partir de um array de pilotos, escolherá um aleatoriamente.

Quando executamos a função `init()`, o programa escreve no console o seguinte:

```text
Os seguintes pilotos começarão a corrida: [ 'Alonso', 'Vettel', 'Button', 'Massa']
```

Isso é possível já que a função `init` tem como contexto o próprio objeto
`F1Race`. Contudo, a função dá erro após um segundo, enquanto tenta calcular o
ganhador de maneira aleatória. Como isso é possível?

O motivo é que a função de *callback* que é passada ao `setTimetout` cria um
novo contexto, no qual não existe o array de pilotos.

No ES5 podíamos solucionar esse problema utilizando `bind(this)` para atribuir o
contexto de uma função de *callback* ao objeto que a contém da seguinte maneira:

```js
init: function() {
  console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
  setTimeout((function() {
    console.log('O ganhador é ', randomWinner(this.drivers));
  }).bind(this), 1000);
}
```

Com ES2015, podemos solucionar este contratempo utilizando funções seta de uma
maneira muito mais elegante, já que ao criar o novo contexto, `this` sempre virá
determinado pela função o contém:

```js
init: function() {
  console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
  setTimeout(() => console.log('O ganhador é ', randomWinner(this.drivers)), 1000);
}
```
