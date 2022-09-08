# Estruturas condicionais e repetitivas

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos

- Entender o que é o controle de fluxo de um programa
- Entender o que são `estruturas condicionais` e como eles afetam o fluxo do
  programa
- Entender o que são `estruturas repetitivas` e como afetam o fluxo do programa

***

O texto a seguir se baseia em grande medida, com alguns ajustes, ao capítulo 2
do [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke,
2014. Tradução em
[Português](hhttps://github.com/braziljs/eloquente-javascript/blob/master/chapters/01-valores-tipos-operadores.md),
e ao capítulo 6 do [JavaScript for
kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015;

## Controle de Fluxo

A razão pela qual criamos programas de computador é para **resolver problemas**.
Um programa, como vimos, é simplemente um conjunto de "instruções" que os
computadores seguem. Esse conjunto de instruções resolve um problema. Até agora,
aprendemos a obter, representar, manipular e armazenar dados em `variáveis`. Com
isso, conseguimos criar programas que resolvem problemas muito simples. Este é o
caso, por exemplo, do programa que fizemos para transformar a temperatura de
graus Celsius (°C) para Farenheit (°F). No entanto, para criar programas mais
complexos, é necessário expandir nosso conhecimento sobre o _controle de fluxo
de um programa_ e as estruturas existentes para modificar esse fluxo.

Para usar a terminologia correta de JavaScript, a partir de agora,
substituiremos a palavra "instruções" pela palavra "sentenças". Uma instrução
JavaScript é o equivalente a uma sentença em linguagem humana. Entendemos,
portanto, que um programa em JavaScript é uma lista de "instruções JavaScript",
isto é, um conjunto de sentenças que informa ao computador o que fazer.

### 1. Fluxo em linha reta

Quando um programa contém mais de uma frase, elas são executadas de cima para
baixo, uma por uma. Por exemplo, o programa a seguir tem três sentenças: a
primeira declara uma variável chamada `name` com o valor do string 'Samanta'; a
segunda exibe no terminal uma mensagem de saudação personalizada: "Olá
Samanta"; e a terceira exibe "Que nome longo você tem!".

```js
const name = 'Samanta';
console.log('Olá ' + name);
console.log('Que nome lindo você tem!');
// returns Olá Samanta
//         Que nome lindo você tem!
```

Uma representação trivial esquemática de um fluxo de controle direto seria:

![Fluxo
reto](https://camo.githubusercontent.com/a46047c5ecd947fd9919f87767fdbadc8fdbadc2/687474703a2f2f656c6f7175656e746a6176617363726970742e6e65742f696d672f636f6e74726f6c666c6f772d73747261696768742e737667)

### 2. Fluxo condicional

A execução de frases em linha reta não é a única opção que temos. Uma
alternativa é a execução condicional, em que escolhemos entre duas rotas
diferentes com base em um valor `Boolean`, assim:

![Fluxo
condicional](https://camo.githubusercontent.com/a3c015252a2f151939cd11f52953a91e561a907a/687474703a2f2f656c6f7175656e746a6176617363726970742e6e65742f696d672f636f6e74726f6c666c6f772d69662e737667)

A execução condicional é escrita com a palavra-chave `if` en JavaScript. A
instrução `if` é a mais simples das estruturas de controle dessa linguagem. Ela
é usada para executar código se, e somente se, uma condição for verdadeira. Uma
condicional diz: "Se algo é verdade, faça isso". Por exemplo, se você fez sua
lição de casa, recebe um sorvete, mas se você não fez sua lição, não o recebe.

Como o exemplo abaixo mostra, uma sentença `if` em duas partes principais: a
condição e o corpo. A condição deve ser um valor `Boolean` entre parênteses. O
corpo consiste em uma ou mais instruções JavaScript que serão executadas se, e
somente se, a condição for verdadeira (`Boolean` igual a `true`).

```js
if (condição) {
  // Conjunto de sentenças a executar
}
```

Quando precisamos executar várias instruções, podemos colocá-las entre chaves
({ e }). As chaves agrupam as sentenças, tornando-as apenas uma. Uma sequência
de sentenças entre chaves é chamada de **bloco** (de código). Muitos
programadores JavaScript incluem chaves em todo corpo de  `if` (e nos loops,
como você verá mais adiante). Eles fazem isso em nome da consistência e para não
ter que adicionar ou remover as chaves quando o número de sentenças no corpo
mudar. Outros, valorizam a brevidade e no caso do `if` não utilizam as chaves.
Neste curso, sempre usaremos as chaves para nos ajudar a organizar nosso código.

Vamos voltar ao exemplo anterior e adicionar uma condição antes da frase que
imprime a segunda mensagem:

```js
const name = 'Samanta';
console.log('Olá ' + name);
if(name.length > 6) {
  console.log('Que nome grande você tem!');
}
// returns Olá Samanta
//         Que nome grande você tem!
```

Com esta modificação, antes de imprimir no terminal a segunda mensagem ('Que
nome longo você tem!'), o programa verifica se o tamanho da string `name` é
maior que 6. Se sim, a segunda mensagem é impressa. Caso contrário, essa
sentença não é executada. Neste caso, como Samanta tem 7 caracteres, a condição
é `true`. Portanto, a segunda mensagem é impressa.

Vamos mudar um pouco este exemplo, modificando o valor de `name` para 'Ana'.

```js
const name = 'Ana';
console.log('Olá ' + name);
if (name.length > 6) {
  console.log('Que nome grande você tem!');
}
// returns Olá Ana
```

Nesta ocasião, a condição **não** é `true` (é `false`) porque o comprimento do
nome é 3, que **não** é maior que 6. Portanto, o corpo do `if` **não** se
executa. Desta forma, apenas a primeira mensagem 'Olá Ana' é executada.

#### _Sentença `if... else`_

Muitas vezes, você não só terá o código que é executado quando uma condição é
verdadeira, mas também quando acontece o outro caso. Esse caminho alternativo é
representado pela segunda seta no diagrama de fluxo. A palavra-chave `else` pode
ser usada, junto com `if`, para criar dois caminhos de execução separados e
alternativos.

Adicionemos uma sentença `else` ao nosso exemplo:

```js
const name = 'Ana';
console.log('Olá ' + name);
if (name.length > 6) {
  console.log('Que nome grande você tem!');
} else {
  console.log('Não nome não é muito grande');
}
// returns Olá Ana
//         Não nome não é muito grande
```

Como você pode ver, o resultado deste caso é similar ao anterior, mas se `name`
**não** tiver um comprimento maior que 6, existe uma "mensagem alternativa" que
é executada.

Como o exemplo abaixo mostra, as sentenças `if ... else` são semelhantes à
sentenças `if`, mas incluem dois corpos. Se a condição é `true`, as sentenças do
primeiro corpo são executadas; caso contrário, as sentenças do segundo corpo são
executadas.

```js
if (condição) {
  Sentenças para execução se a condição for VERDADEIRA
} else {
  Sentenças para execução se a condição for FALSA
}
```

Se tivermos mais de dois caminhos para escolher, vários pares if... else podem
ser "encadeados". Aqui está um exemplo:

```js
const num = parseInt(prompt('Digite um número', '0'));

if (num < 10){
  alert('Você digitou um número pequeno');
}
else if (num < 100){
  alert('Você digitou um número médio');
}
else {
  alert('Você digitou um número grande');
}
```

O programa primeiro verificará se `num` é menor que 10. Se for, ele escolhe esse
caminho, mostra "Você digitou um número pequeno" em uma caixa de alerta e
termina. Se não for, toma o caminho do  `else`, que em si mesmo contém um
segundo `if`. Se a segunda condição (< 100) for atendida, significa que o número
está entre 10 e 100, e "Você digitou um número médio" é exibido em uma caixa de
alerta. Se não for, o segundo e último `else` é escolhido, mostrando "Você
digitou um número grande".

O fluxograma deste programa é algo assim:

![Flujo
condicional](https://camo.githubusercontent.com/7da7c495c1528a60105d941be0181490fbffbc81/687474703a2f2f656c6f7175656e746a6176617363726970742e6e65742f696d672f636f6e74726f6c666c6f772d6e65737465642d69662e737667)

Vamos ver outro exemplo de como usar `if...else`. Dessa vez com um vídeo da Paloma:

[![if ...
else](https://img.youtube.com/vi/wQ_s9sso9b0/0.jpg)](https://www.youtube.com/watch?v=wQ_s9sso9b0)

#### _Utilizando Switch_

É comum ver o código assim:

```js
if (variable == 'valor1') {
  accion1();
}
else if (variable == 'valor2') {
  accion2();
}
else if (variable == 'valor3') {
  accion3();
}
else {
  accionDefault();
}
```

Existe uma estrutura chamada `switch` que serve para "decidir" de maneira mais
direta. Infelizmente, a sintaxe que o JavaScript usa para isso (que é herdada da
linha da linguagem de programação C/Java) é um pouco estranha. Uma sequência de
frases `if` geralmente parece melhor. Aqui está um exemplo:

```js
switch (prompt('Como está o clima?')) {
  case 'chuvoso':
    console.log('Lembre-se de levar um guarda-chuva.');
    break;
  case 'ensolarado':
    console.log('Vista roupas leves.');
  case 'nublado':
    console.log('Saia para a rua.');
    break;
  default:
    console.log('Tipo de tempo desconhecido.');
    break;
}
```

Você pode colocar qualquer número de etiquetas `case` dentro do bloco `switch`.
O programa irá pular para o rótulo correspondente ao valor que foi dado ao
`switch` ou ao default se não houver nenhum valor igual. Daí, eles começam a
executar as sentenças, incluindo os abaixo de outro rótulo, até que uma sentença
`break` seja alcançada (o que em português significa "pare").

Em alguns casos, como no caso de "ensolarado" no exemplo, é possível
compartilhar o código entre os casos (é recomendado ir ao ar livre tanto para
tempo ensolarado quanto nublado). Mas cuidado: é fácil esquecer o break, o que
fará com que o programa execute um código que você não deseja executar.

A seguir o Daniel te ajudará entender este caso um pouco melhor:

[![Switch](https://img.youtube.com/vi/CbBTrBwzQfQ/0.jpg)](https://www.youtube.com/watch?v=CbBTrBwzQfQ)

### 3. Fluxo repetitivo: Loops

Outra forma de modificar o fluxo de um programa é por meio de estruturas
repetitivas, também chamadas "loops" em inglês. Como já estamos vendo, as
condicionais permitem executar um conjunto de sentenças uma vez se uma condição
_**é**_ verdadeira. Os loops permitem executar um código várias vezes,
dependendo se uma condição _**continua sendo**_ verdadeira.

Imagine um programa que imprima todos os números pares do 1 ao 12. Uma maneira
de escrevê-lo seria assim:

```js
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
// → 0
// → 2
//   … etcetera
```

Isso funciona, mas a ideia de escrever um programa é trabalhar menos, e não
mais. Se necessitamos todos os números menores que 1,000, o modo anterior seria
impossível de trabalhar. O que necessitamos é uma forma de repetir partes de
código. Esta forma de **controle de fluxo** é chamada loop. O controle de fluxo
por loops nos permite voltar a certo ponto no programa em que estivemos antes e
repetí-lo com nosso estado atual, como descreve o seguinte diagrama:

![Flujo
bucle](https://camo.githubusercontent.com/48a2fb7be5218c417decdc954fe2e9bf7dc3a3a2/687474703a2f2f656c6f7175656e746a6176617363726970742e6e65742f696d672f636f6e74726f6c666c6f772d6c6f6f702e737667)

#### Loops `while`

O loop mais simples é o loop `while` (que significa "enquanto" em português). Um
loop `while` executa repetidamente uma série de sentenças até que uma condição
particular deixe de ser verdadeira. Ao escrever um loop `while`, você está
dizendo: _"Continue fazendo isto enquanto esta condição seja verdadeira. Pare
quando a condição se tornar falsa."_

Como revela o exemplo a seguir, uma sentença que começa com a keyword `while`
cria um loop. Depois de `while` vem uma expressão em parênteses que representa a
condição e depois um conjunto de sentenças (muito parecido ao caso do `if`).
Porém, diferentemente do `if`, o loop executa a sentença enquanto a condição
produza um valor que seja `true`. Por isso é muito importante que o conjunto de
sentenças inclua algo que _"muda"_ para que a condição eventualmente seja falsa.
Do contrário, criaria um ciclo infinito que nunca termina, e isto usualmente é
ruim.

```js
while (condição) {
  // Conjunto de sentenças, onde
  // se inclui algo que "muda" para
  // que a condição eventualmente seja FALSA
}
```

Vamos voltar agora ao problema de imprimir todos os números pares do 1 ao 12, e
criar um programa que utilize um loop `while`:

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera até 12
```

Neste caso, como queremos imprimir os números pares do 1 ao 12, criamos uma
variável `number`, inicializamos com o valor 0, e a utilizamos na condição.
Queremos que o bloco dentro do `while` funcione enquanto o valor de `number`
seja igual ou menor a 12. O corpo do `while` inclui duas sentenças: a primeira
imprime o número (com console.log), e a segunda incrementa `number` em 2 (porque
queremos imprimir os pares unicamente). A variável `number` demonstra a forma em
que uma variável pode dar seguimento ao progresso de um programa. Cada vez que o
loop se repete, `number` se incrementa em 2. Então, no início de cada repetição,
o valor da variável `number` é comparado com o número 12 para decidir se o
programa fez todo o trabalho que deveria fazer. É importante que entendamos que
se não modificamos o valor de `number` com a segunda sentença, a condição
(number <=12) sempre será `true` e teremos um ciclo infinito que nunca se
deterá. Isto pode causar que o seu computador tenha problemas e trave.

Se você cria um loop infinito em um dos exemplos, usualmente será perguntado se
você quer deter o script depois de alguns segundos. Se isso falha, você terá que
fechar a aba na qual está trabalhando, ou, em outros navegadores, fechar o
navegador inteiro para se recuperar.

Vejamos algumas variantes deste mesmo problema para assegurar que entendemos bem
como funciona o ciclo `while`:

- Como fazemos para imprimir os números **pares** do 1 ao 100?: Modificamos a
   condição para que o loop aconteça enquanto `number` seja <= 100.

```js
let number = 0;
while (number <= 100) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera até 100
```

- Como fazemos para imprimir os números **ímpares** do 1 a 12?: Iniciamos o
   valor de `number` com o valor de 1 (ao invés de 0).

```js
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 1
// → 3
//   … etcetera até 11
```

- Como fazemos para imprimir todos os números **pares** e **ímpares** do 1 ao
   12?: Na segunda sentença do while, incrementamos `number` em 1 (no lugar de
   2) a cada ciclo.

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 1;
}
// → 0
// → 1
// → 2
//   … etcetera até 12
```

#### Loops `do`

O loop `do` é uma estrutura de controle similar ao loop `while`. A diferença
está em um só ponto: um loop `do` sempre executa seu corpo **pelo menos uma
vez** e começa a verificar se deveria parar somente depois da primeira execução.
Para refletir isto, a condição aparece depois do corpo do loop. Vejamos um
exemplo:

``` js
let yourName;
do {
 yourName = prompt('Qual é seu nome?');
} while (!yourName);

console.log('seu nome é ' + yourName);
```

Este programa te obrigará a introduzir um nome. Perguntará uma e outra vez até
que obtenha algo que não seja uma cadeia vazia. Aplicar o operador `!` converte
um valor a `Boolean` negando-o e todas as cadeias exceto `''` se convertem a
`true`. Isto significa que ele continua rodando até que você dê um nome que não
seja uma cadeia vazia.

#### _Loop `for`_

Muitos loops seguem um padrão dos exemplos prévios do `while`. Primeiro, uma
variável “contador” é criada para dar seguimento ao progresso do loop. Logo
depois vem o loop `while`, cuja expressão condicional normalmente verifica se o
contador alcançou certo limite. Ao final do corpo do loop, o contador é
atualizado para dar seguimento ao progresso.

Devido ao fato de que este padrão é muito comum, JavaScript e outras linguagens
similares proporcionam uma versão um pouco mais curta e mais completa: o loop
`for`.

```js
for (let number = 0; number <= 12; number = number + 2){
  console.log(number);
}
// → 0
// → 2
//   … etc.
```

Este programa é exatamente equivalente ao exemplo prévio de impressão de números
pares. A única mudança é que todas as sentenças que estão relacionadas com o
"estado" do ciclo estão agrupadas.

Os parênteses depois do keyword `for` devem conter ponto e vírgula (`;`). A
parte que está antes do primeiro ponto e vírgula _inicia_ o loop, normalmente ao
definir uma variável. A segunda parte é a expressão que _verifica_ se o loop tem
que continuar. A parte final _atualiza_ o estado do loop antes de cada iteração.
Na maioria dos casos, isto é mais curto e claro que uma construção com `while`.

A seguir mostramos um código que calcula 2^10 (2 exponencial 10), usando o loop
`for`:

```js
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
  result = result * 2
}
console.log(result);
// → 1024
```

A representação geral do loop `for` é a seguinte:

```js
for (initial setup; condition; increment){
  Bloco de código a executar
}
```

O _initial setup_ (por exemplo: `let counter = 0`) se executa antes de que se
inicie o loop. Geralmente se usa para criar uma variável que rastreia o número
de vezes que foi executado o loop. A _condition_ (counter < 10) se comprova
antes de cada execução do corpo do loop. Se a condição é verdadeira, o corpo é
executado; se é falsa, o loop se detém. Neste caso, o loop se deterá uma vez que
counter já não seja inferior a 10. O _increment_ (counter = counter + 1) se
executa depois de cada execução do corpo do loop. Geralmente se utiliza para
atualizar a variável do loop. No nosso exemplo, utilizamos para agregar 1 a
counter cada vez que se executa o loop.

A seguir Paloma te ajudará a entender o fluxo do loop for:

[![For](https://img.youtube.com/vi/6iZEpRhzDKI/0.jpg)](https://www.youtube.com/watch?v=6iZEpRhzDKI)

#### _Forçando a saída de um loop_

Fazer com que a condição do loop produza _false_ não é a única forma para que um
loop termine. Podemos usar a sentença especial `break`, utilizada en `switch`,
que tem o efeito de sair inmediatamente do loop que o esta fechando.

O programa a seguir ilustra o uso da sentença `break` para sair de um loop.
Queremos fazer um programa que encontre o primeiro número que é maior ou igual a
20 e divisível por 7.

```js
for (let current = 20; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);
// → 21
```

Usar o operador de resto ou módulo (%) é uma forma fácil de provar se o número é
divisível por outro. Se for, o resto da divisão é zero. Também lembre-se que
`current++` é o mesmo que `current = current + 1`.

O `for` neste exemplo não tem a parte que verifica se o loop deve terminar. Isto
significa que o loop nunca terminará até que a sentença `break` que está dentro
seja executada.

Como já estamos aprendendo, se você deixasse fora essa sentença `break` ou
acidentalmente escrevesse uma condição que sempre produza `true`, o seu programa
se ficaria travado em um loop infinito.

A palavra chave `continue` é parecida ao `break` pois influencia o progresso do
loop. Quando se encontra `continue` no corpo de um loop, o controle sai do corpo
do loop imediatamente e continua na próxima iteração do loop.

A seguir Rafael te explicará, com um exemplo, as aplicações de `break` and
`continue` dentro de um for:

[![Break and
Continue](https://img.youtube.com/vi/1B6pwKRDWgE/0.jpg)](https://www.youtube.com/watch?v=1B6pwKRDWgE)

#### _Diferenças entre `for` e `while`_

Pontualmente, se usa o `for` quando se save quantas repetições vão ser
realizadas e o `while` quando não se sabe.

Se dissermos, "gire o ventilador 10 vezes", você já sabe que vamos girar o
ventilador 10 vezes, então seria uma boa ideal usar o `for`.

Se dissermos, "enquanto estiver calor gire o ventilador". Não sabemos quantas
vezes vamos girar o ventilador até ficar frio, então usar o `while` nesse caso é
melhor.
