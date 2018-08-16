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
* `index.html`: Página web da biblioteca com exemplo funcionando.
* `package.json` com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...)
* `.eslintrc` com configuração para linter (ver [guia de estilo de JavaScript](https://github.com/Laboratoria/js-style-guide))
* `.gitignore` para ignorar `node_modules` ou outras pastas que não devem ser incluídas no controle de versões (`git`).

*Hacker edition* (opcional):

* Se a biblioteca está direcionada para o navegador, deve aderir ao padrão [UMD](https://github.com/umdjs/umd) para poder ser usado com AMD, CommonJS e como variável global do navegador.
* Integração contínua com Travis ou Circle CI

## Progresso

Como orientação, propomos os seguintes _checklists_ de progresso para cada semana:

### Semana 1

* Formar grupo.
* Escolher o desafio.
* Fazer um *fork* do desafio modelo ou criar um novo repositório se você propuser um desafio diferente dos da Laboratória.
* Escrever uma primeira versão do `README.md` com uma descrição geral da biblioteca assim como exemplos (*snippets*) de uso e configuração (se for necessário).
* Criar *issues* e *milestones* que sirvam como um mapa (roadmap).
* Inicializar o projeto com `npm init` e `git init`.
* Criar o `index.html` com exemplo principal de uso.

### Semana 2

* Adicionar testes que descrevam a `API` da sua biblioteca e os casos de uso esperados.
* Implementar funcionalidade essencial.
* Fazer revisão de código com suas colegas e instrutoras.

### Semana 3

* Completar a implementação de sua biblioteca e o exemplo principal (usando a biblioteca).
* Fazer revisão de código com suas colegas e instrutoras.
* Preparar seu demo/apresentação.
* Publicar o exemplo principal (`index.html`) no GitHub.

## Desafios modelo

Cada grupo terá que escolher um dos seguintes desafios ou propor um desafio alternativo dentro do escopo deste curso. Se tiver alguma ideia para alguma biblioteca que você acha que possa lhe ser útil em outros projetos futuros, não hesite em consultar suas instrutoras para ver se sua proposta pode valer como um desafio.

### Desafio 1: Validador de dados de cartões de crédito

Implementar um validador de dados de cartões de crédito. A biblioteca deverá validar o número do cartão de crédito (usando algoritmo de Luhn), data de vencimento, código de verificação (CVV) e nome completo que aparece no cartão.

[Repositório](https://github.com/Laboratoria-learning/card-validator)

### Desafio 2: Cardify (mostra _alt_ ao invés da imagem em _hover_)

Implementar um plugin de jQuery que dado um _conteiner_ deve buscar todas as imagens que encontre dentro do _conteiner_ e substituí-las por um novo elemento `<figure>` que contenha a imagem (`<img>`) além de um `<figcaption>` com o texto do atributo `alt` da imagem.

[Repoistório](https://github.com/Laboratoria-learning/cardify)

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

[Repositório](https://github.com/Laboratoria-learning/extract-links-from-md)
