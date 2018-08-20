# Objetos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Todos os objetos em JavaScript são mapas (dicionários) de strings e valores. Uma entrada (chave, valor) em um objeto é chamada uma _propriedade_. A chave da propriedade é sempre uma cadeia de caracteres (string). O valor da propriedade pode ser qualquer valor em JavaScript, incluindo uma função. Os _métodos_ são propriedades cujo valor é uma função.

## Tipos de propriedades

Existem 3 tipos de propriedades:

### Properties (ou propriedades de dados com nome)

São as propriedades normais em um objeto, isto é, as chaves e valores. _Names data properties_ (propriedades de dados com nome) incluem métodos. Esta é o tipo de propriedade mais comum.

### Accesors (ou propriedades de acesso)

São métodos especiais cuja invocação parecem com propriedades de leitura e escrita. As propriedades normais são lugares de armazenamento para valores de propriedades. Os `acessors` permitem operar sobre os valores dessas propriedades. Também podem ser _propriedades virtuais_, se preferir.

### Internal properties

Estas propriedades existem somente na especificação da linguagem ECMAScript. Não são diretamente acessíveis a partir do JavaScript, mas existem formas indiretas de acessá-las. As especificações escrevem as chaves das propriedades internas entre colchetes [`[]`]. Por exemplo, `[[Prototype]]` armazena o protótipo de um objeto e pode ser lida por meio do método `Object.getPrototypeOf()`.
