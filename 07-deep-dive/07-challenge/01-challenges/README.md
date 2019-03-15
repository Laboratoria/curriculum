# Desafios

* Tipo: `seminário`
* Formato: `guiado`
* Duração: `30min`

***

O objetivo central deste curso é construir uma biblioteca (_library_) que atenda aos requisitos de um dos desafios detalhados mais abaixo.

O desafio será feito em grupos de duas alunas e será apresentado ao final do curso em uma demo para o resto da turma. Ao longo do curso suas instrutoras guiarão você e suas colegas no processo.

## Requisitos

Todos os desafios devem incluir ao menos os seguintes arquivos:

* `README.md` com descrição do módulo, instruções de instalação, uso e documentação da API.
* `index.js`: Biblioteca deve exportar uma função ou objeto no escopo global (`window`) e fazer uso de _features_ de ES6 onde for apropriado.
* `package.json` com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...)
* `.eslintrc` com configuração para linter (ver [guia de estilo de JavaScript](https://github.com/Laboratoria/js-style-guide))
* `test/index.spec.js`: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementados com Mocha e NYC (ver vídeo tutorial do Daniel :D)
* `.gitignore` para ignorar `node_modules` ou outras pastas que não devem ser incluídas no controle de versões (`git`).

[vídeo](https://www.youtube.com/watch?v=kI__3q1HdFE)


## Progresso (para cada biblioteca)

* Escolher os desafios.
* Criar os repositórios (um para **cada** desafio).
* Escrever uma primeira versão do `README.md` com uma descrição geral da biblioteca assim como exemplos (*snippets*) de uso e configuração (se for necessário).
* Criar *issues* e *milestones* que sirvam como um mapa (roadmap).
* Inicializar o projeto com `npm init` e `git init`.
* Adicionar testes que descrevam a `API` da sua biblioteca e os casos de uso esperados.
* Implementar funcionalidade essencial no `index.js`.
* Fazer revisão de código com suas colegas e instrutoras.
* Completar a implementação de sua biblioteca.
* Publicar sua biblioteca no npm.
* Subir os arquivos no GitHub.

## Desafios modelo

Você terá que escolher dois dos seguintes desafios ou propor um desafio alternativo dentro do escopo deste curso. Se tiver alguma ideia para alguma biblioteca que você acha que possa lhe ser útil em outros projetos futuros, não hesite em consultar suas instrutoras para ver se sua proposta pode valer como um desafio.

### Desafio 1: Validador de dados de cartões de crédito

Implementar um validador de dados de cartões de crédito. A biblioteca deverá validar o número do cartão de crédito (usando algoritmo de Luhn) e retornar `true ` ou `false` de acordo com o caso.

A biblioteca será testada através da função `cardValidator()`.


### Desafio 2: Conversor de algarismos romanos para arábicos (e vice-versa)

Implementar um conversor com duas funções, uma que receba um `string` de algarismos romanos e retorne um `int` com o valor em números, e outra que faça o caminho inverso, recebendo um `int` de números e retornando um `string` com algarismos romanos.

A biblioteca será testada através das funções `romanToInt()` e `intToRoman()`.


### Desafio 3: Extrair links de arquivo *markdown* (Node.js)

Implementar um módulo de Node.js que receba uma string (em formato *Markdown*) e extraia todos os links encontrados. A implementação deve ser uma função que recebe uma `string` e devolve um vetor de objetos como se mostrar neste exemplo:

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```

A biblioteca será testada através da função `getLinksFromMd()`.
