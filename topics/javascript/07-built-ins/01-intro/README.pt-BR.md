# Objetos pré-construídos

- Tipo: `leitura`
- Formato: `individual`
- Duração: `15min`

## Objetivos de Aprendizagem

- O que são os objetos globais, objetos pré-construídos ou bibliotecas em
  JavaScript?
- Porque utilizar?

***

### JavaScript, investigando o núcleo da linguagem

Todas as linguagens de programação tem objetos pré-construídos (built-in) que
oferecem mais funcionalidades do que só a linguagem em si. Os objetos
pré-construídos nos permitem salvar tempo com funcionalidades disponíveis como
parte da linguagem.

JavaScript tem muitos [objetos
pré-construídos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects).

O termo "objetos globais" (ou objetos padrão pré-construídos) não devem ser
confundidos com o objetivo global em si. Aqui, os objetos globais se referem a
objetos no [ámbito global](https://developer.mozilla.org/en-US/docs/Glossary/global_scope).
Estes objetos e funções que já vem com o JavaScript mas que não são parte da
linguagem em si, também conhecidas como _biblioteca padrão_, já que sempre
podemos contar com elas. São bibliotecas que não temos que importar e sempre
estão disponíveis, independentemente do escopo onde o código é executado
(navegador, node, ...).

### Porque usar biblioteca padrão?

Existem muitas funcionalidades disponíveis para ajudar a escrever um programa
bom e eficiente. Como desenvolvedor de software, nosso trabalho é encontrar a
solução mais simples a um problema. "Mais simples" é um pouco vago, vamos
definir como "é eficiente, relativamente fácil de entender, funciona e não
demora muito para implementar".

Quanto você levaria para escrever uma função que pegue cada numero de um _array_
e veja se ele é positivo? Muitas funções que você encontrará em um biblioteca
padrão são provavelmente triviais por natureza, mas já ter essas funções padrão
vão acelerar a implementação do código (você vai falar menos vezes "tem alguma
função para isso, ou eu deveria fazer"). Além disso outras pessoas que leem o
seu código podem concentrar em aprender sobre as partes que realmente importam e
não perder o seu tempo tentando entender bibliotecas que fazem apenas uma linha
de código.

### Algumas vantagem de utilizar bibliotecas padrão

- Funcionam

  Uma das razões mais importantes do porque utilizar funções de uma biblioteca
  padrão é simplemente porque elas funcionam, elas já passaram por muitas provas
  de uso e são fáceis de usar.

- Estão otimizadas para rendimento

  Existe um grupo de desenvolvimento focado em melhorá-las constantemente. Um dos
  objetivos dessa equipe é criar códigos mais eficientes e otimizados para obter
  o máximo rendimento.

- Salvam um tempo considerável

  Dado que as funções gerais, como _"printar"_ na tela, calcular uma raíz
  quadrada e muitas outras já estão escritas. Com isso você não precisa se
  preocupar em criar essas funções.

- São suportadas na maioria dos navegadores

  Você esperar que a sua aplicação funcione para sempre, em qualquer lugar e
  dispositivo. Mas no mundo real as coisas estão sempre mudando. Com essas
  funções você terá uma garantia maior de que o seu código continuará
  funcionando.

### Exemplo

Suponhamos que você quer encontrar a raíz quadrada de um número. Você sempre
pode escrever o seu próprio código para isso. Mas esse processo pode levar um
tempo e pode não ser nada eficiente.

No JavaScript você pode encontrar a raíz quadrada utilizando a
função`Math.sqrt()`.

### Alguns objetos pré-construídos mais utilizados

- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Boolean](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Number](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
- [RegExp](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [JSON](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Symbol](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [EvalError](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
- [InternalError](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
- [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
- [ReferenceError](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
- [TypeError](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
- [URIError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
- [DataView](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- [Proxy](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
