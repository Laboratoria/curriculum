# Iteração de Arrays

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15 min`

***

Vimos até agora como fazer _loops_ (`for`, `while`, `do-while`) usando apenas
números aletórios para a sua iteração, mas essa não é a forma mais utilizada
no dia a dia. Normalmente esse número é o tamanho (`.length`) do _array_, e com
isso conseguimos fazer a iteração dentro do _array_.

A propriedade `.length` dos _arrays_ retorna o tamanho do array, como você
pode ver no exemplo abaixo:

```js
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Recife"];
console.log(cidades.length); // 4
```

Agora que você ja entendeu como o `.length` funciona, vamos ver como fazer
iterações utilizando o `for` e o `while`:

```js
// for
const itens = ["banana", "peixinho", "bolo"];

for(let i = 0; i < itens.length; i++) {
  console.log(itens[i]); // "banana"; "peixinho"; "bolo"
}
```

```js
// while
const itens = ["banana", "peixinho", "bolo"];

let i = 0;
while(i < itens.length) {
  console.log(itens[i]); // "banana"; "peixinho"; "bolo"
  i++;
}
```

## ES6

O ES6 trouxe mais duas formas de iteração para facilitar as nossas vidas. O
`for .. of` que é ideal para _arrays_ e para _strings_ e o `for .. in` que
também funciona para _arrays_ e _strings_, mas normalmente é utilizado em
_objects_.

Essas novas iteração são muito similares ao `for` normal, mas além de
simplificar o jeito de usar elas diminuem a syntax.

### for .. of

O `for .. of` faz a iteração pelos próprios valores.

```js
// ES5
var itens = ["🍌", "🐟", "🍰"];
for(var i = 0; i < itens.length; i++) {
  console.log(itens[i]); // "🍌"; "🐟"; "🍰"
}

// ES6
const itens = ["🍌", "🐟", "🍰"];
for (let item of itens) {
  console.log(item) // "🍌"; "🐟"; "🍰"
}
```

Como você pode perceber a cima a variável `item` é o próprio item e a cada
iteração ela muda para o próximo. Dessa forma você não precisa criar uma
variável extra para fazer a iteração e também não precisa saber o tamanho do
_array_ no qual irá fazer a iteração.

### for .. in

O `for .. in` interage sobre a propriedade do _array_, isso quer dizer que ele
irá interagir pelo índice do _array_.

```js
// ES5
var itens = ["🍌", "🐟", "🍰"];
for(var i = 0; i < itens.length; i++) {
  console.log(i); // 0; 1; 2
  console.log(itens[i]); // "🍌"; "🐟"; "🍰"
}

// ES6
const itens = ["🍌", "🐟", "🍰"];
for (let i in itens) {
  console.log(i); // 0; 1; 2
  console.log(itens[i]) // "🍌"; "🐟"; "🍰"
}
```

Esse tipo de _loop_ se assemelha mais ao `for` normal, pois ele faz a iteração
sobre o índice do _array_. Porém assim como no `for .. of` você não precisa
saber o tamanho do _array_ e também terá um syntax reduzida.