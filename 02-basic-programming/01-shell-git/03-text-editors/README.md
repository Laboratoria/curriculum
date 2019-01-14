# Editores de Código

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem

Nesta unidade:

* Aprenderemos um pouco mais sobre editores de código e como funcionam
* Veremos algumas ótimas opções de editores.

## Um pouco sobre editores de código e porque são úteis

Os editores de código são a principal ferramenta da desenvolvedora, afinal de
contas é o que utilizamos para escrever todo o nosso código. Eles também são
chamados de editores de texto, embora sejam totalmente diferentes dos editores
de texto utlizados pela maior parte dos usuários, como o MS Word e o Google
Docs.

Por que eles são importantes? Por vários motivos. O primeiro deles é que o
código precisa ser escrito em um formato de texto totalmente livre de
formatação, e os editores utilizados para escrever texto corrido já utilizam
formatação básica embutida - mesmo que a gente não mude nenhuma configuração
(como tamanho ou tipo da fonte). Chamamos isso de "texto rico" e ele possui
vários formatos, como RTF (Rich Text Format, ou Formato de Texto Rico, em
português).

Poderíamos escrever nosso código no Bloco de Notas (Notepad)? Sim, e também
poderíamos salvar o arquivo utilizando uma extensão como `.html`. Porém um
editor de código nos ajuda a escrever nosso código melhor e mais rápido, pois
ele é capaz de identificar a linguagem que estamos utilizando (normalmente a
partir da extensão do arquivo) e ativar uma série de ferramentas úteis, como:

* Colorir de forma específica todos os elementos do mesmo tipo: ou seja, no
  HTML todas as tags serão identificadas com a mesma cor, assim como todos os
  atributos, etc. Chamamos isso de _realce de sintaxe_ e essa ferramenta nos
  ajuda muito a identificar se o código está escrito corretamente, se não
  esquecemos de fechar alguma sentença com ponto-e-vírgula, entre outras
  situações.

* Autocompletar várias partes do código para que a desenvolvedora não perca
  tempo digitando. Essa ferramenta é poderosa e não apenas nos economiza tempo
  de digitação como também ajuda a impedir erros de digitação. Isso vai desde
  completar tags e fechar aspas para evitar que esqueçamos de fazer isso, como
  também sugerir listas de métodos possíveis e disponíveis, além de outros usos
  que vamos descobrindo ao longo do tempo.

* Indentação automática: A essa altura temos certeza que você já descobriu a
  importância (grande) de indentar o código corretamente - algumas linguagens
  de programação, como Python, inclusive dependem exclusivamente da indentação
  correta para que seu código funcione. O editor de código nos ajuda com essa
  tarefa.

* Terminal integrado: alguns editores, como o Visual Studio Code, contam com um
  terminal integrado, assim podemos rodar nossos programas, trabalhar com o Git
  e navegar entre os arquivos sem precisar trocar de janela para acessar o
  terminal da forma usual.

Estas são apenas algumas das ferramentas que os editores de código oferecem.
Existem várias outras que vamos descobrir à medida em que avançamos.

## Como escolher um editor?

Na maior parte das vezes, trata-se de escolha pessoal: costume, interesse por
essa ou aquela iniciativa, se é open source, se é pago ou não. Algumas empresas
podem solicitar que você utilize um editor específico e algumas linguagens -
especialmente as compiladas - podem requerer ferramentas mais complexas (os
_IDEs_, ou ambientes de desenvolvimento integrados) ou são mais facilmente
utilizadas com editores específicos.

No nosso caso, trabalharemos com linguagens interpretadas diretamente pelo
navegador, então podemos utilizar várias das ótimas opções de editores
disponíveis, sem muita preocupação. Entre essas opções, temos:

* [Sublime 3](https://www.sublimetext.com/), que possui uma versão gratuita,
  é leve e tem diversos e úteis _plug-ins_;
* [Atom](https://atom.io/), editor _open source_ mantido pela comunidade
  GitHub;
* [Brackets](http://brackets.io/), desenvolvido pela Adobe e com boa interface
  de integração com arquivos do pacote Adobe;
* [Visual Studio Code](https://code.visualstudio.com/Download), projeto
  _open source_ da Microsoft. Possui diversas ferramentas integradas para
  diversas linguagens.

O funcionamento básico dos editores de código é sempre muito similar, porém
eles diferem em uso de atalhos, funcionalidades extras, _plug-ins_ e etc. Aqui
na Laboratória, para facilitar nosso dia-a-dia, escolhemos utilizar o
**Visual Studio Code**.

## Escrevendo código sem um editor

Atualmente temos algumas opções muito boas quando precisamos escrever código e
não temos um editor instalado, ou quando queremos apenas rodar alguns testes ou
disponibilizar o código para ser executado em um computador quando não temos
certeza ou não podemos instalar as ferramentas usuais. Algumas opções são:

* [Repl.It](https://repl.it/), IDE online com suporte a uma grande quantidade
  de linguagens e frameworks;
* [CodePen](https://codepen.io/#), um IDE voltado para desenvolvimento
  _front end_ e _webdesign_.
* [JSFiddle](https://jsfiddle.net/), ambiente para JS/HTML/CSS, com seus
  frameworks e bibliotecas.

Uma vez que você tenha um perfil registrado nestes serviços, pode criar e
compartilhar projetos e executá-los mesmo sem um editor de código e um
compilador instalados no computador. Claro que o ideal é sempre trabalharmos
localmente utilizando um editor e salvarmos nossos projetos utilizando uma
ferramenta de versionamento como Git, porém sempre haverá situações onde os
IDEs online serão úteis!
