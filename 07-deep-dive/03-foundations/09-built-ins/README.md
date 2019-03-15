# Objetos pré-construídos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

O tipo de dado fundamental de JavaScript é o objeto. Um objeto é um dado complexo, uma coleção ordenada de propriedades, cada uma formada por um nome e um valor. Este valor é um tipo de dado primitivo ou por referência.

Em JavaScript, tudo o que não é uma string, um número, true, false, null ou undefined é um objeto. E as strings, números e booleanos se comportam como objetos imutáveis (não podemos modificar suas propriedades).

Dado que um objeto também ocupa espaço de memória: em que se parecem e em que são diferentes um objeto de uma variável?

Consideraremos que as variáveis são entidades elementares: um número, um caractere, um valor verdadeiro ou falso; enquanto que os objetos são entidades complexas que podem estar formadas por muita informação. Mas ambos ocupam o mesmo: um espaço de memória (que pode ser maior ou menor).

Existem alguns objetos especiais que podem ser considerados como _classes_ predefinidas JavaScript (como a classe Date para manipulação de datas, a classe RegExp para manipulação de expressões regulares e busca de padrões de texto, e a classe Error para armazenar informação relacionada a erros e outros).

Estes objetos representam basicamente funcionalidades ampliadas ou incorporadas à própria linguagem que nos permitirão manipular, entre outras coisas, estruturas de dados e novas utilidades. A seguir veremos algumas delas.

Na realidade, deveríamos falar mais de classes de objetos do que de objetos, já que um objeto em si seria por exemplo uma data e a classe de objeto a que pertence seria a classe `Date`.

Para criar um novo objeto de uma classe já definida, a forma comum é escrever:

```js
let novoObjeto = new ClasseObjeto();
```

Em que `novoObjeto` é um objeto novo que criamos. `new` é o operador que indica ao JavaScript que estamos criando um novo objeto. `ClasseObjeto` é a classe a qual pertencerá o novo objeto. Dentro dos parênteses, e dependendo do tipo de objeto, podemos colocar algumas características do objeto. Por exemplo, nos vetores podemos colocar os elementos que o compõe.

Contudo não é a única forma de criar um objeto, já que dependendo da classe a que se refira, pode haver outras formas de criá-lo. Por exemplo, ao atribuir um valor a uma nova variável, podemos estar criando um objeto tipo número (Number) ou cadeia de texto (String). Os vetores também podem ser criados de várias maneiras.

Algumas classes de objetos são:

* `Number`: Números.
* `Math`: Operações con números.
* `Date`: Datas.
* `String`: Cadeias de texto.
* `Array`: Coleções de elementos.

Contudo ainda falta vermos algumas classes de objetos, as quais embora sejam menos importantes do ponto de vista da programação, devemos conhecê-los.

## O objeto `Boolean`

O objeto ou classe de objetos `Boolean` inclui as variáveis booleanas ou lógicas que só podem receber os valores `true` e `false`. Para construir um objeto da classe `Boolean` basta atribuir um valor booleano a uma variável, mas também podemos criá-lo pelo método geral:

```js
let booleano = new Boolean();
```
Dependendo do valor do parâmetro que passamos dentro do parênteses, o valor retornado será `true` ou `false`. Se passamos diretamente os valores `true` ou `false`, serão retornados esses valores. Se não passamos nenhum valor ou passamos como valor o número 0 ou uma cadeia de texto vazia, retornará `false`. Nos demais casos retornará `true`. O objeto `Boolean` não tem propriedades e métodos próprios. Possui somente as propriedades e métodos herdados do objeto `Object`, o qual veremos mais adiante.

## O objeto `Function`

As classes também são consideradas objetos em JavaScript e se forma a partir da classe `Function`. Já vimos a forma mais comum de declará-las:

```js
function minhaFuncao() { }
```

Também podemos criá-la da forma geral para construir objetos:

```js
const minhaFuncao = new Function();
```

Tal como ocorre na forma comum de declará-las, dentro do parênteses escrevemos, se houver necessidade, os parâmetros que a função precisa e o corpo da função. Não possui propriedades nem métodos próprios, exceto os herdados da classe `Object` que veremos mais adiante.

## O objeto `RegExp`

As expressões regulares servem para verificar se uma cadeia de texto segue um determinado padrão ou se contém alguns caracteres determinados. É utilizada, por exemplo, para verificar em um formulário se o texto informado pelo usuário é um e-mail, um número de telefone, etc.

Estas expressões são delimitadas pelas barras inclinadas `/.../` e possuem sua sintaxe própria. Por exemplo, a seguinte expressão verifica se o texto passado é um endereço de página web:
```js
const padrao = /^http[s]?://\w[\.\w]+$/i;
```

Devido a sua complexidade o mais cômodo é ter uma lista das expressões regulares para os casos mais comuns, tais como verificar endereços web, e-mail, número de telefone, datas, etc.

Para declarar um objeto RegExp podemos fazê-lo simplesmente atribuindo a uma variável uma expressão regular, tal como o exemplo anterior, ou por meio do método geral de criar objetos:

```js
const padrao = new RegExp('^http[s]?://\w[\.\w]+$', 'i');
```

Para efetuar as buscas e substituições, este objeto possui vários métodos, alguns dos quais são iguais para as cadeias de texto:

* `cadeia.search(regexp)`: Verifica se a cadeia respeita o padrão. Se respeitar retorna verdadeiro (`true`).
* `cadeia.replace(regexp, substituir)`: Substitui o trecho da cadeia que respeita o padrão da expressão regular pela cadeia que é informada como segundo argumento (`substituir`).
* `cadeia.split(regexp)`: Devolve um vetor no qual a cadeia é separada de acordo com as equivalências da expressão regular.

## O objeto `Object`

O objeto `Object` é o qual está em um nível superior de hierarquia e do qual derivam todos os demais objetos de JavaScript. Para tal, permite criar novas classes de objetos. Seus métodos e propriedades são herdados pelos demais objetos JavaScript. Alguns deles já vimos anteriormente e outros explicaremos mais detalhadamente:

* Os métodos são: `.toString();` o qual retorna sempre uma cadeia de texto com o nome do objeto (por exemplo transforma `true` em "true")  e `valueOf()` o qual dependendo do objeto devolve um valor ou outro, embora quase sempre seja o próprio objeto.
* Suas propriedades são `constructor` e `prototype`, as quais veremos mais adiante quando olharmos com mais detalhes o objeto `Object`.
