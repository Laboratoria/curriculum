# *Test runners*

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

***

Já vimos (superficialmente) como projetar testes, como implementar testes usando
a interface BDD do `mocha`, como escrever declarações, e como executar os testes
tanto na linha de comando com Node.js como no navegador.

## Testes Contínuos

Existe uma maneira prática de rodar todos testes do seu sistema, sem precisar
executar `mocha` na linha de comando. Para isso, basta instalar o plugin
[wallaby.js](https://wallabyjs.com/) no seu editor de textos. Esse plugin
facilita muito o desenvolvimento, pois os testes serão executados automaticamente.

Os testes que passam ficarão indicados com sinal verde e os que estão falhando
ficarão indicados em vermelho, direto no seu editor de textos preferido. Veja o
vídeo abaixo que explica como instalar e utilizar o Wallaby.js:

[![Testes Contínuos com Wallaby](https://img.youtube.com/vi/ea2JeMtKKjo/0.jpg)](https://www.youtube.com/watch?v=ea2JeMtKKjo)

## Integração Contínua (CI)

Agora veremos como podemos executar os testes em um navegador _headless_
(PhantomJS), o qual nos permitirá automatizar a execução de testes inclusive em
servidores e sistemas de CI nos quais não temos um ambiente gráfico como no
navegador normal.

...

* [Karma runner](http://karma-runner.github.io/)
* [PhantomJS](http://phantomjs.org/)

...

## Exemplo

*[Exemplo](https://github.com/MaiaRojas/recursos-deep-dive-pt/tree/master/headless)
