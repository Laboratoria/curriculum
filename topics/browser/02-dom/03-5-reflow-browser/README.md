# Redesenho do navegador

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Com a chegada das aplicações ricas da internet (RIA: *Rich Internet
Applications*), nossas páginas exigem uma melhor experiência para o usuário, o
que leva a uma maior manipulação do DOM com muitas instruções `javascript`,
animações, etc. Mas isto ocasiona um problema que nem sempre é previso antes do
desenvolvimento e rapidamente tudo começa a funcionar lentamente ou consumindo
muita memória na máquina do cliente.

## É útil entender quando se ativam os re-flow

1. Adição, exclusão ou modificação de elementos do DOM visíveis.

> A primeira é óbia, o uso de JavaScript para alterar o DOM provocará o um
> re-flow.

2. Adição, exclusão ou modificação dos estilos de CSS.

> Da mesma maneira que no JavaScript, aplicar diretamento os estilos, alterar
> alguma classe ou propriedade, prococará um re-flow daquele ramo do DOM

3. Animações e transições CSS

> Cada alteração na animação causará um re-flow

4. Uso de `offsetWidth` e `offsetHeight`

> Curiosamente, ler a propriedade `offsetWidth` e `offsetHeight` de um elemento
> pode desencadear um re-flow inicial para calcular as estruturas.

5. Ações do usuário

> Finalmente, o usuário pode ativar os re-flow, como por exemplo ativando um
> efeito de `hover`, adicionando texto ao um campo, alterando o tamanho de uma
> tela, etc.

Cada fluxo de processamento de re-flow varia. Alguns navegadores são melhores
que outros em alguns operações. Alguns elementos geram mais re-flow que outros.
Felizmente, existem várias maneiras de [melhorar o
rendimento](https://developers.google.com/speed/docs/insights/browser-reflow).
