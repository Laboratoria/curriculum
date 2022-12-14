# Valores, tipos de dados e operadores

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizagem

- Entender o que são _values_ (valores) em JavaScript.
- Conhecer os diferentes _data types_ (tipos de dados) em JavaScript.
- Aprender como manipular e transformar valores com operadores em JavaScript.

***

O texto em seguida se baseia em grande parte, com certos ajustes, ao capítulo 1
de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn Haverbeke
(2014). Tradução em
[Português](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/01-valores-tipos-operadores.md).

## Vivemos num mundo de Dados

Em 2010, o então CEO da Google, Eric
Schmidt,([mencionava](https://techcrunch.com/2010/08/04/schmidt-data/)) que num
período de dois dias nós criávamos tantos dados quanto no período que compreende
desde o início da civilização até o ano de 2003. As compras que você faz são
dados, as suas notas na escola são dados, seu perfil do Facebook está repleto de
dados. Suas buscas no Google, os sinais de GPS do seu celular, os vídeos que
você assiste e envia para o YouTube, as fotos que você vê no Instagram, o
histórico do clima, os e-mails trocados… tudo são dados!

Os dados são cruciais porque eles nos ajudam a tomar decisões e a entender o
mundo que nos cerca. Dados são informações, informação é conhecimento, e
conhecimento leva à tomada de decisões melhores: desde simples, como escolher um
lugar para almoçar baseando-se nos comentários do Yelp; à complexas, como
([predizer](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4))
se uma mulher está grávida, baseando-se no seu histórico de compra em um
supermercado.

## Tipos de dados

Os computadores são excelentes instrumentos para trabalhar com grandes
quantidades de dados. De fato, no universo dos computadores existem somente
dados. Com os computadores podemos ler dados, modificar dados e criar novos
dados. Todos os dados são armazenados em longas sequências dos famosos _bits_ as
sequências de 0s e 1s que você provavelmente já viu no filme Matrix.

Os computadores manipulam bilhões de bits. Para que o manejo destas grandes
quantidades de informação seja mais fácil, eles são divididos em “pedaços” que
representam partes de informação. No contexto do JavaScript, esses pedaços são
chamados de _**values**_ (valores, em português). Cada _value_ possui um _data
type_ (tipo de dado) que determina qual a sua funcionalidade. Em JavaScript
existem cinco tipos de dados primitivos:

1. `number` (número).
2. `string` (cadeias de caracteres).
3. `boolean` (booleano).
4. `undefined` (indefinido).
5. `null` (nulo).

Os dados e os tipos de dados formam as bases de qualquer linguagem de
programação. Eles nos permitem organizar a informação e determinar como o
programa deve ser executado. Nesta seção você aprenderá a definir e manipular
esses tipos de dados.

## 1. Numbers

Os _values_ do tipo `number` são, sem muita surpresa, valores numéricos. Ou
seja, pedaços de dado que representam uma informação numérica são representados
com o tipo `number`. Sua representação inclui números positivos, negativos,
inteiros e decimais. Além disso, o tipo de dado `number` possui três valores
simbólicos: `+Infinity` (infinito positivo), `-Infinity` (infinito negativo) e
`NaN` (not a number, ou “não-número”, em português).

Vejamos alguns exemplos. Abra o seu console (lembre-se: clique com o botão
direito do mouse > inspect > console) e escreva os seguintes números. Ao tentar,
o console retornará o próprio número de volta.

```js
13
// retorna: 13

-9.81
// retorna: -9.81
```

Você também pode usar a notação científica para números muito grandes ou muito
pequenos, adicionando ao número a letra “e” (de “expoente”), seguido pelo
expoente do número:

```js
5e10
// retorna: 50000000000

-2.998e8
// retorna: -299800000
```

### Operadores Aritméticos

O que mais se faz com os números é aritmética. Sigamos explorando o
comportamento do tipo de dado `numbers` no seu próprio console. Digite o
seguinte exemplo no console e confirme que o resultado é o mesmo:

```js
100 + 4 * 11
// retorna: 144
```

Os símbolos `+` e `*` são chamados de _operators_ (operadores). O primeiro
representa a soma e o segundo, multiplicação. Ao colocar um operador entre dois
valores, a operação será aplicada a esses valores e produzirá um novo valor.
Como pôde perceber, a multiplicação ocorre primeiro. Mas, assim como na
matemática, você pode mudar isso colocando a soma entre parênteses.

```js
(100 + 4) * 11
// retorna: 1144
```

Para a subtração, existe o operador `-`, e a divisão pode ser feita com o
operador `/`. Vejamos mais exemplos (não se esqueça de fazê-los em seu console
também!):

```js
12345 / 250
// retorna: 49.38

1234 + 57 * 3 - 31 / 4
// retorna: 1397.25

100 / 0
// retorna: Infinity

100 / -0
// retorna: -Infinity

1000 * Infinity
// retorna: Infinity

0/0
// retorna: NaN

Infinity - Infinity
// retorna: NaN
```

Também há um operador aritmético que pode não ser reconhecido imediatamente. O
símbolo `%` é utilizado para representar a operação _resíduo_. X `%` Y é o resto
da divisão de X por Y. Por exemplo, 314 % 100 é 14 (porque 100 multiplicado por
3 + 14 = 314), e 144 % 12 dá 0 (porque 12 multiplicado por 12 + 0 = 144). Você
verá este operador frequentemente referido como _módulo_ embora, tecnicamente,
resto é mais preciso.

```js
5 % 3
// retorna: 2

7 % 2
// retorna: 1
```

## 2. Strings

O próximo _data type_ básico é a `string` (_sequência de caracteres_ em
português). É o tipo de dado que utilizamos para representar texto. São
declaradas ao colocar o conteúdo entre aspas.

Abra seu console e escreva:

```js
"Olá, meu nome é Michelle"
// retorna: "Olá, meu nome é Michelle"

'Sou desenvolvedora web'
// retorna: "Sou desenvolvedora web"

"123"
// retorna: "123"
```

Tanto as aspas simples como as duplas podem ser usadas para declarar `strings`,
desde que o início coincida com o fim. Quase tudo pode ser colocado entre aspas,
e o JavaScript criará um _string value_ a partir do conteúdo entre elas.

***

**Pro tip**:

Podemos usar tanto comillas simples (`'`) como dobles (`"`) para delimitar
nuestros strings, pero por convención, normalmente en cada proyecto se elige
usar o una u otra y tratamos de ser consistentes. Esto ayuda a la _claridad_ y
_mantenibilidad_ del código a largo plazo. En nuestro caso, vamos a elegir las
comillas simples de aquí en adelante.

***

Existe um par de caracteres no `strings` que tem um comportamento especial. Por
exemplo, quando uma barra invertida (_backslash_ -`\`) se encontra dentro de um
texto entre aspas, isso indica que o próximo caractere tem um significado
especial. Chamamos isso de _escapar caractere_. Quando o caractere `n` segue uma
barra invertida, o par de caracteres é interpretado como uma nova linha. Da
mesma forma, um `t` após a barra invertida indica uma tabulação. Escreva os
seguintes textos em seu console (lembre-se de sempre colocá-los entre aspas,
simples ou duplas).

```js
'Esta é a primeira linha \n E esta a segunda'
// retorna: "Esta é a primeira linha
//            E esta a segunda"

'Minha linguagem favorita é \t JavaScript'
// retorna: "Minha linguagem favorita é      JavaScript"
```

Quando as aspas são precedidas pela barra invertida, elas não terminarão a
cadeia de caracteres, mas farão parte dela.

```js
'Eu \'estudo\' na Laboratoria'
// retorna: "Eu 'estudo' na Laboratoria"
```

Existirão, com certeza, situações em que você desejará que uma barra invertida
seja apenas isso em uma cadeia de caracteres, e não um código especial. Se duas
barras invertidas estão juntas, vão se tornar apenas uma, e somente uma barra
sairá como resultado no valor da cadeia.

```js
'Um caractere de nova linha está escrito \'\\n\'.'
// retorna: "Um caractere de nova linha está escrito '\n'."
```

Cadeias de caracteres não podem ser divididas como os números, multiplicadas, ou
subtraídas, mas o caractere + pode ser utilizado nelas. Ele não soma, mas
concatena, ou seja, junta duas strings. A linha a seguir produz a string
"concatenar":

```js
"con" + "cat" + "e" + "nar"
// retorna: "concatenar"
```

Tome cuidado ao misturar _numbers_ e _strings_ em uma operação. Por exemplo,
multiplicar um _número_ por uma _string_ resulta em NaN.

```js
"oi" * 3
// retorna: NaN
```

Há outras maneiras de manipular `strings`, como veremos mais adiante.

### Operadores Unários

Nem todos os operadores são símbolos. Alguns são escritos como palavras. Um
exemplo é o operador typeof que produz uma cadeia de texto que representa o tipo
do valor que lhe foi passado.

```js
typeof 4.5
// retorna: "number"

typeof "hola"
// retorna: "string"

typeof NaN
// retorna: "number"

typeof Infinity
// retorna: "number"
```

Note que verificamos que _NaN_ e _Infinity_ são do tipo `number` (de valor
simbólico), como mencionamos anteriormente.

Os outros operadores que vimos operavam sobre dois valores, mas `typeof` só
recebe um. Operadores que utilizam dois valores são chamados de operadores
_binários_, enquanto aqueles que só recebem um são chamados de operadores
_unários_.

O operador menos (`-`) pode ser usado tanto como um operador binário como
unário.

```js
- (10 - 2)
// retorna: -8
```

## 3. Booleans

Muitas vezes, você precisará de um valor que simplesmente diferencie duas
possibilidades, como "sim" e "não" ou "ligado" e "desligado". Para isso, o
JavaScript tem o tipo de dado _boolean_ que possui apenas dois valores: _true_
(verdadeiro) e _false_ (falso).

### Operadores comparativos

Faça estas comparações em seu console:

```js
3 > 2
// retorna: true

2 > 3
// retorna: false

typeof (3 > 2)
// retorna: "boolean"

typeof (2 > 3)
// retorna: "boolean"
```

Os sinais > e < são os símbolos clássicos de "é maior que" e "é menor que",
respectivamente. Estes são operadores binários (porque operam sobre dois
valores). Aplicá-los resulta em um valor de tipo _boolean_ que indica se estão
corretos.

As `strings` podem ser comparadas da mesma maneira.

```js
"Aardvark" < "Zoroaster"
// retorna: true
```

A forma pela qual as `strings` são ordenadas é mais ou menos alfabética: em
JavaScript, as letras maiúsculas são sempre "menores" que as minúsculas, por
isso "Z" < "a" é _true_, e os caracteres não alfabéticos (!, -, e assim por
diante) também estão incluídos na ordenação. A comparação efetiva é baseada no
padrão [Eloquent Unicode](https://unicode-table.com/en/#control-character).

```js
"Zeyla" < "ana"
// retorna: true

"Zeyla" < "!na"
// retorna: false
```

Outros operadores similares são >= (maior ou igual a), <= (menor ou igual a), ==
(igual a) e != (não é igual a).

```js
"Itchy" == "Itchy"
// retorna: true

"Itchy" != "Scratchy"
// retorna: true

5 == 5
// retorna: true

10 != "dez"
// retorna: true
```

Só existe um valor em JavaScript que não é igual a si mesmo: o NaN, que
significa "não é um número".

```js
NaN == NaN
// retorna: false
```

A intenção do NaN é representar o resultado de um cálculo sem sentido e, como
tal, não é igual ao resultado de qualquer outro cálculo sem sentido.

### Operadores Lógicos

Há também algumas operações que podem ser aplicadas a valores `Booleans`. O
JavaScript dá suporte a três operadores lógicos: _and_, _or_ e _not_. Eles podem
ser usados para estabelecer relações entre `Booleans`.

O operador `&&` representa a operação lógica _and_ ("e"). É um operador binário,
e o seu resultado é _true_ (verdadeiro) somente se os dois valores fornecidos
forem verdadeiros. O operador `||` denota a operação lógica or ("ou") e devolve
verdadeiro quando qualquer um dos dois valores dados for verdadeiro. _Not_
(negação) é escrito como o símbolo de exclamação `!`. É um operador binário que
inverte o valor que lhe é dado: !true resulta em false e !false tem como
resultado true. Vejamos alguns exemplos:

```js
true && true
// retorna: true

true && false
// retorna: false

false && false
// retorna: false

true || true
// retorna: true

true || false
// retorna: true

!true
// retorna: false

!false
// retorna: true
```

O último operador lógico que você aprenderá não é unário. Este é escrito usando
um símbolo de interrogação e dois pontos, da seguinte forma:

```js
true ? 1 : 2
// retorna: 1

false ? 1 : 2
// retorna: 2
```

Este é chamado o operador condicional (ou algumas vezes o operador ternário já
que é o único operador deste tipo na linguagem). O valor à esquerda do ponto de
interrogação "escolhe" qual dos outros dois valores será o resultado. Quando é
verdadeiro, o valor central é escolhido, e quando é falso, o valor da direita é
o resultado.

## 4. Null e undefined ( nulo e indefinido)

Existem dois valores especiais, escritos como `null` e `undefined`, que são
usados para denotar a ausência de um valor significativo. São valores por si
mesmos, mas não possuem nenhuma informação. Muitas operações na linguagem que
não produzem um valor que tem significado (você verá isso depois) produzem
`undefined` simplesmente porque têm que produzir algum valor.

A diferença no significado entre `undefined` e `null` é um acidente no desenho
do JavaScript, e não importa a maior parte do tempo.

Entender a diferença entre `undefined` e `null` (sim existe uma diferença
semântica) é importante e mais simples do que parece. Ambos valores denotam da
ausência de um valor, mas em um caso podemos dizer que é intencional (`null`) e
o no outro não (`undefined`).

O valor `undefined` significa que não existe um valor designado, o que é
diferente de `null`, que significa que designamos o valor `null`. Este pode ser
muito útil para diferenciar o estado em operações asíncronas, ... é comum que
`undefined` signifique que a operação não foi completada, enquanto que `null`
significa que completo mas o retorno é um valor nulo.

### Conversão automática do tipo

Quando um operador é aplicado ao tipo "incorreto" de valor, o JavaScript mudará
silenciosamente o valor no tipo de dado que espera, usando um conjunto de regras
que frequentemente não são as que você quer ou espera. Isto é chamado _coerção
do tipo_. Olha estes exemplos:

```js
8 * null
// retorna: 0

"5" - 1
// retorna: 4

"5" + 1
// retorna: 51

"cinco" * 2
// retorna: NaN

false == 0
// retorna: true
```

O null na primeira expressão muda para 0, e o "5" na segunda expressão torna-se
5 (de string a number). Todavia, na terceira expressão, o + tenta fazer
concatenação de strings antes de uma soma numérica, assim o 1 é convertido em
"1" (de number a string). Quando algo que não corresponde com um número de forma
óbvia (como o "cinco" ou o undefined) é convertido em número, o valor resultante
é NaN. As seguintes operações aritméticas sobre NaN continuaram produzindo NaN.
É por isso que, na quarta expressão, "cinco" * 2 devolve NaN.

No caso da quinta expressão, quando comparamos valores que têm tipos de dados
diferentes, o JavaScript usa um conjunto de regras, complicado e confuso, para
determinar o que fazer. Na maioria dos casos, só tenta converter um dos valores
ao tipo de dado do outro valor. Contudo, quando null ou undefined estão em
qualquer lado da operação, resulta verdadeiro só no caso de que os dois lados
sejam null ou undefined.

Continuando com a quinta expressão, as regras para converter cadeias e números a
Booleanos dizem que 0, NaN e a cadeia vazia ("") contam como _false_, enquanto
todos os outros valores contam como _true_. É por isso que, as seguintes
expressões devolvem _true_:

```js
false == 0
// retorna: true

"" == 0
// retorna: true
```

Para casos em que você não quer que aconteça nenhuma conversão automática de
tipos, existem dois operadores extras: === e !==. O primeiro prova se um valor é
precisamente igual a outro, e o segundo se não é precisamente igual. Portanto,
ao mudar de == a === as mesmas expressões anteriores, temos o resultado
contrário: _false_:

```js
false === 0
// retorna: false

"" === 0
// retorna: false
```

***

## Notas sobre comparações de igualdade/desigualdade

Nesta continuação veremos algumas particularidades sobre os operadores de
igualdade (`==`, `!=`, `===`, `!==`). Ao fim da leitura deixaremos como
referência para você o link para a documentação oficial de operadores e
expressões no MDN que recomendamos que você _leia_ (ou olhe pelo menos).

## Diferença entre `==` e `===`

### Algoritmo de `==`

Quando avaliamos dois valores com este operador, a sequência a seguir é
executada para determinar o resultado:

- Se são do mesmo tipo, então são comparados com ===.
- Se são de tipos diferentes:
  * Se um é `null` e outro é `undefined`, retorna `true`.
  * Se um é uma `string` e outro é um `number`, ele é convertido para `string` e
    são comparados como números.
  * Se um é booleano, são convertidos: `true` em 1 e `false` em 0, e se
    comparam.
  * Se um é um objeto e outro é um `number` ou `string`, converte o objeto para
    um primitivo.
  * Em outros casos, retorna `false`.

```js
null == undefined // true
10 == '10'        // true
true == 1         // true
[10] == 10        // true
[] == []          // false
{} == {}          // false
```

### Algoritmo de `===`

Esta igualdade é mais restrita com os resultados, utilizando a sequência a
seguir para determinar o resultado:

- Se possuem tipos diferentes, retorna `false`.
- Se ambos são `null`, retorna `true`.
- Se ambos são `undefined`, retorna `true`.
- Se ambos são `NaN`, retorna `false`.
- Se ambos são `true` ou `false`, retorna `true`
- Se ambos são `number` e possuem o mesmo valor, retorna `true`.
- Se ambos são `string` e possuem o mesmo valor, retorna `true`.
- Em outros casos, retorna `false`.

```js
21 === "21"         // false
undefined === null  // false
NaN === NaN         // false
[10] === 10         // false
true === 1          // false
[] === []           // false
{} === {}           // false
'10' === '10'       // true
```

Você pode considerar o seguinte para saber qual operador utilizar:

- Se qualquer dos valores é booleano, utilize `===`.
- Se não tiver certeza se os valores podem ser convertidos por coerção, utilize
  `===`.
- Nos outros casos pode utilizar `==` com certeza.

> Nota: Por convenção, e uma boa prática a comunidade incentiva o uso de `===`.

## Desigualdades

Sempre o resultado de comparação de uma desigualdade é um booleano. Os
operadores a seguir são utilizados para comparar desigualdades:

```js
<  → Menor
>  → Maior
<= → Menor Igual
>= → Maior Igual
```

Situações de uso:

- Se algum é um `object`, converte-se para primitivo e é comparado.
- Se ambos são `string`, é comparada a ordem dos caracteres alfabeticamente.
- Se ambos são `number`, são comparados.
- Em outros casos retorna `false`.

```js
[10] < 9    // false, caso 1
"a" < "b"   // true, caso 2
10 >= 10    // true, caso 3
```

## Leituras complementares

[Expressões e Operadores -
MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
