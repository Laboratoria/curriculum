# JS *Deep Dive*: Crie sua própria biblioteca usando JavaScript

Se Programar em JavaScript faz você ser _cool_, conhecer as peculiaridades da linguagem é ainda melhor. Este curso não é uma introdução ao JavaScript, mas um aprofundamento da linguagem. Você verá tópicos que você provavelmente já conhece mas a partir de uma perspectiva de desempenho e boas práticas, tomando conhecimento de algumas peculiaridades de JavaScript que a torna diferente de outras linguagens de programação.

O objetivo prático deste curso é que você aprenda como criar sua própria biblioteca (_Library_) em JavaScript. Como programadoras, estamos constantemente utilizando _módulos_ de terceiros, sejam bibliotecas, *frameworks* ou a *biblioteca padrão* (_Standard Library_) tanto da linguagem em si quanto do entorno/motor de execução (o navegador, node.js, ...).

Projetar sua própria biblioteca é uma experiência fundamental para qualquer programadora já que te obriga a pensar na interface (API) dos seus módulos, como serão utilizados por outras pessoas, ... e ter consideração especial em relação às peculiaridades da linguagem, convenções e boas práticas.

Neste curso será apresentada uma série de desafios que requerem a implementação de uma ou mais bibliotecas. 

Palavras-chave: `types`, `operators`, `functions`, `objects`, `scope`, `closure`, `execution-context`, `linter`.

## Público alvo

Este curso presume que você já tenha se familiarizado com a programação em JavaScript e você deseja levar seu conhecimento sobre a linguagem para outro nível, entendendo sutilezas da linguagem e implicações de desempenho.

## Requisitos prévios

Experiência básica utilizando JavaScript para manipular o DOM e familiaridade com `git` e `GitHub`.

## Você aprenderá

* Um pouco da **história sobre JavaScript/ECMAScript**.
* A projetar e desenvolver uma **UI Library**.
* A projetar com foco nos **testes**.
* **Boas práticas** no uso de JavaScript.
* A escrever código seguindo um **guia de estilos**.
* A **documentar** seu código/biblioteca.
* A aprofundar o conhecimento de git e GitHub usando **issues**, **milestones**, **branches**, **forks** e **pull requests**.

## Produto

O produto/desafio no qual você trabalhará é uma pequena biblioteca para desenvolvimento de interfaces (*UI Library*), levando em consideração o desempenho e consumo de memória, além de permitir que possa ser reutilizada em qualquer projeto e fácil de fazer manutenção ao longo do tempo.

Participar do projeto envolve o seguinte:

* Ter uma conta no GitHub;
* Formar um grupo de trabalho (em duplas);
* Escolher/propor um desafio;
* Criar um repositório no GitHub para hospedar seu projeto;
* Mapear e dividir o trabalho com seu grupo;
* Implementar as funcionalidades listadas no repositório do projeto;
* Enviar *pull requests*;
* Realizar revisão de código e *merges*;
* Apresentar o trabalho final com um demo.

***

## Syllabus


### Unidade 01: [Ambiente de desenvolvimento](01-env)

Uma vez introduzido o curso e os desafios, concentraremos os esforços no entorno do desenvolvimento, com uma breve introdução/revisão de conceitos sobre `sh`, `git`, `npm` e seu `editor` de texto favorito.


### Unidade 02: [*Unit Testing* / Teste unitários](02-testing)

Neste curso daremos uma ênfase especial ao desenvolvimento orientado a testes (*Test Driven Development* - TDD). Nesta unidade, você poderá seguir os passos necessários para escrever seus primeiros testes e entender o valor considerável que produzem.

Como ferramentas de exemplo usaremos `mocha`, `assert`, `chai` e `karma`.


### Unidade 03: [Fundamentos de JavaScript](03-foundations)

Se os fundamentos de JavaScript vieram bem sedimentados desde o primeiro curso da Laboratória, agora aprofundaremos o entendimento no que acontece por trás. Desta maneira, veremos um pouco de compiladores e aprofundaremos nos temas como `variáveis`, `valores`, `tipos de dados`, `controle de fluxo`, `funções`, `escopo`, `vetores`, `objetos`, `strings`, `built-ins`, ...

Nesta unidade veremos também algumas novas características de ES6 em relação à sintaxe para começar a utilizá-la ao longo do curso.


### Unidade 04: [Tratamento de erros](04-errors)

O tratamento de erros é importante dentro do desenvolvimento de software, ainda mais quando se trata de desenvolver um produto que se espera que seja reutilizável e de fácil manutenção. Nesta unidade veremos como tratar erros em diversas partes do nosso código.


### Unidade 05: [Autoaprendizagem - Browser APIs](05-browser-apis)

Nesta unidade focaremos nas API's que os navegadores disponibilizam para interagir com o `DOM` assim como alguns objetos globais como `window.navigator`, `window.console`, `window.location`, `window.history` e outras API's introduzidas por HTML5.

### Unidade 06: [Autoaprendizagem - jQuery](06-jquery)

jQuery é uma biblioteca focada em fazer a manipulação do DOM mais fácil (além de outras funcionalidades). Nesta lição não veremos a sintaxes das propriedades e métodos que esta biblioteca oferece, mas veremos aspectos importantes para melhorar o desempenho no uso desta biblioteca, além de considerações de encapsulamento de código por meio da criação de `plugins`.


### Unidade 07: [Desafio - Biblioteca](07-challenge)

***

## Avaliação

Neste curso não teremos provas. Sua nota final será calculada em 60% pela nota do produto/desafio de seu grupo e os 40% restantes serão determinados por seu desempenho individual.

Para determinar a nota de seu grupo/produto teremos sessões periódicas de revisão de código durante todo o processo e em seguida com o desempenho do produto no dia da demo, o qual será avaliado pela equipe técnica e pelas demais equipes.

Seu desempenho individual será determinado por sua participação nas sessões presenciais, sua atividade no GitHub (escrevendo código, comentando, criando *issues*, ...), sua atividade no slack (fazendo e/ou respondendo perguntas), etc.

Todas as equipes deverão apresentar seus resultados durante o dia da demo, independentemente do estado de conclusão do produto. Aqueles grupos que não tenham completado seu produto, terão um período extra para fazê-lo.

Os exercícios extras além do projeto/produto não serão avaliados.

## Autor(es) / Colaboradores

* Belén Recabal
* Iván Medina
* Lupo Montero

## Livros

* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do), Douglas Crockford, O'Reilly Media
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS), Kyle Simpson, O'Reilly Media
* [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](https://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182/ref=as_li_ss_tl?ie=UTF8&redirect=true&linkCode=ll1&tag=eejs-20&linkId=4c5500843ce7dc958e290bdaeebd739b), David Herman, 2013
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596805531.do), David Flanagan, O'Reilly Media
