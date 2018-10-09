# Abertura

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

## Por que aprender isto?

Os **componentes** são a unidade básica de reutilização de código em `React`. Do ponto de vista de `React`, uma interface não é mais que uma hierarquia (árvore) de componentes. Assim como em `HTML` usamos tags para construir interfaces, em `React` usamos _componentes_.

É essencial entender bem o conceito de _componente_ no universo de `React`, assim como as técnicas e/ou convenções para fazer nossos componentes mais declarativos e robustos, como validação de `props` de componentes utilizando `prop-types`, manipulação de _filhos_ (*children*), composição, ...

Graças aos parâmetros nomeados e ao *desestructuring* (atribuição desestruturada), já aprendemos como especificar nossas `props` na assinatura de nossos componentes. Nesta unidade veremos como especificar seus tipos, opcionalidade e valores padrão.

Também analisaremos a propriedade especial children e como manipulá-la com `.map` e `.filter`.

Mais adiante nesta unidade exploraremos o conceito de composição aplicado a componentes e *High-Order Components*, assim como convenções comuns como a distinção entre componentes simples ou *stateless* e componentes inteligentes ou de contêineres.

## Guia de perguntas e conceitos chave

Quando começamos a estudar um tema novo, é útil termos uma ideia dos conceitos mais importantes que vamos aprender e dos temas centrais aos quais devemos prestar atenção especial.

A seguir apresentamos uma série de perguntas que você deve ser capaz de responder ao terminar esta unidade. Use estas perguntas como guia para orientar seu esforço de aprendizagem. Retorne a elas constantemente a medida que avança para validar que está indo na direção correta. Que este guia sirva como um "checklist" que você vai riscando conforme avança.

* Como usar `prop-types` para definir as propriedades que aceitam/esperam um componente?
* O que é e como funciona a propriedade `children`?
* Como manipular (filtrar, transformar, ...) os `children`.
* Como compor uma interface aninhando componentes?
* O que são os *High-order Components*?
* Como utilizar _HOCs_ para compor *components*?
* Como implementar _HOCs_?
* Diferenças entre componentes de apresentação e de contêineres.