# Copy or Move

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Entregáveis](#6-entregáveis)
* [7. Hacker edition](#7-hacker-edition)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)
* [10. Dividindo o problema](#10-dividindo-o-problema)

***

## 1. Prefácio

[Node.js](https://nodejs.org/es/) é um ambiente de tempo de execução para
JavaScript construído com
[Chrome V8 JavaScript Engine](https://developers.google.com/v8/).
Isso nos permitirá executar o JavaScript no ambiente do sistema operacional,
sua máquina ou um servidor, o que abre as portas para que possamos
interagir com o próprio sistema, arquivos, redes, processos do sistema, etc.

Neste projeto, você se concentrará em trabalhar com o sistema de arquivos do
seu sistema operacional, utilizando o Node.js, para recriar uma funcionalidade
que você provavelmente usa diariamente: você irá criar seu próprio programa
para copiar e mover arquivos em seu computador.

Para alcançar esse objetivo, você irá tentar replicar o _comportamento_
que esperamos quando você faz _copiar e colar_ ou também _recortar e colar_
em seu computador, mas desta vez executado a partir da sua
[_linha de comando_.](https://tutorial.djangogirls.org/pt/intro_to_command_line/)

![copy-or-move](https://user-images.githubusercontent.com/12631491/234972777-fe2c40aa-a989-40c5-ad30-ce94f58386d8.png)

## 2. Resumo do projeto

Neste projeto, você criará uma ferramenta de linha de comando (CLI) e sua
própria biblioteca em JavaScript.

Desta vez, iremos nos afastar um pouco do navegador para construir um programa
que será executado usando o Node.js em uma CLI (também chamada de _terminal_).
Aprenderemos sobre processos (`process.env`, `process.argv`, ...), como
interagir com o sistema de arquivos, caminhos de diretórios, grupos de
arquivos, etc.

Seu programa deve ser publicado como um pacote disponível para download no
[NPM](https://www.npmjs.com/), o gerenciador de pacotes do Node.

Projetar sua própria biblioteca é uma experiência fundamental para qualquer
desenvolvedora, pois isso a obriga a pensar na interface (API) de seus módulos
e como eles serão usados por outras desenvolvedoras. Você deve levar em
consideração as peculiaridades da linguagem, convenções e boas práticas.

Este aplicativo, que você publicará como uma biblioteca, deve ser executável
em um terminal e deve contemplar os seguintes casos de uso:

1.- Copiar um arquivo para um arquivo ou diretório de destino.

2.- Copiar um diretório, incluindo todo o seu conteúdo,
  para um diretório de destino.

3.- Mover um arquivo para um arquivo ou diretório de destino.

4.- Mover um diretório, incluindo todo o seu conteúdo,
  para um diretório de destino.

### Os objetivos gerais deste projeto são os seguintes

* Desenvolver uma biblioteca com Node.js.
* Trabalhar com o sistema de arquivos do computador.
* Trabalhar com assincronia em JavaScript.
* Trabalhar utilizando recursividade.
* Criar uma suíte de testes unitários que permita testar código assíncrono.
* Publicar sua biblioteca no NPM.

## 3. Objetivos de aprendizagem

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

## 4. Considerações gerais

* Este projeto deve ser "resolvido" de forma individual.

* O intervalo de tempo estimado para completar o projeto é de 3 a 4 Sprints.

* A **biblioteca**, como um **script executável** (ferramenta de linha de
  comando - CLI - terminal), deve ser implementada em JavaScript para ser
  executada com o Node.js. **É permitido usar bibliotecas externas**.

* Seu módulo deve ser **instalável** via
  `npm install <github-user>/node-or-move`. Este módulo deve incluir o
  _executável_ que podemos invocar na linha de comando.

* Os **testes unitários** devem abranger no mínimo 70% de _statements_,
  _funções_, _linhas_ e _branches_. Recomendamos explorar o
  [Vitest](https://vitest.dev/) para seus testes unitários.

* Para este projeto, sugerimos **não utilizar** a versão síncrona da função
  para ler diretórios, `readdirSync`, e, em vez disso, tentar resolver esse
  desafio de forma assíncrona.

## 5. Critérios de aceitação mínimos do projeto

Para começar este projeto, você precisará fazer um **_fork_** e **_clonar_**
este repositório.

Antes de começar a codificar, é necessário criar um **plano de ação**. Isso
deve ser detalhado no arquivo `README.md` do seu repositório e em uma série de
**_issues_** e **_milestones_** para priorizar e organizar o trabalho, e para
poder acompanhar seu progresso. Além disso, recomendamos criar um
**diagrama de fluxo** do seu programa.

Dentro de cada **_milestone_**, serão criados e atribuídos os **_issues_** que
você considerar necessário.

### Arquivos do projeto

* `README.md` com a descrição do módulo, instruções de instalação/usuário,
  documentação e exemplos. Tudo relevante para que qualquer usuária que queira
  utilizar sua biblioteca possa fazê-lo sem problemas.
* `index.js` - Neste arquivo, você deve exportar **uma** função (`copyOrMove`).
* `package.json` com o nome, versão, descrição, autores, licença, dependências,
  scripts (pretest, test, ...), main, bin.
* `.editorconfig` com a configuração para editores de texto. Este arquivo não
  deve ser alterado.
* `.eslintrc` com a configuração para o linter. Este arquivo contém uma
  configuração básica para o ESLint. Se você desejar adicionar regras
  adicionais, deverá modificar este arquivo.
* `.gitignore` para ignorar `node_modules` ou outras pastas que não devem ser
  incluídas no controle de versão (`git`).
* `test/copy-or-move.spec.js` deve conter os testes unitários para a função
  `copyOrMove()`. Sua implementação deve passar nesses testes.

### O funcionamento do programa deve contemplar o seguinte

O executável do nosso aplicativo deve poder ser executado da seguinte forma
através da _terminal_ (ou _CLI_):

`copy-or-move <path-to-source-file-or-directory>
  <path-to-destination-file-or-directory> [options]`

Por exemplo: Se uma usuária quiser **mover** o arquivo `README.md` localizado
dentro do diretório atual em sua terminal para um diretório chamado
`Documentos/`, que por sua vez também está _dentro_ do diretório atual, ela
deve executar o seguinte comando em sua terminal:

`$ copy-or-move ./README.md ./Documentos/`

Outro exemplo: Se uma usuária quiser **copiar** todos os conteúdos de um
diretório chamado `DCIM/` para um diretório chamado `Fotos/`, ela deve executar
o seguinte comando em sua terminal, desta vez incluindo a _opção_ (ou _flag_)
`-c` para informar à biblioteca que, desta vez, em vez de mover os conteúdos,
eles devem apenas ser copiados:

`$ copy-or-move caminho/para/DCIM/ caminho/para/Fotos/ -c`

### Options

O comportamento padrão do programa será **mover** os arquivos ou diretórios de
uma origem para um destino. No entanto, caso a usuária queira **copiar** esses
arquivos ou diretórios em vez de movê-los, ela deverá passar a opção (também
chamada de _flags_) `-c` para esse comando.

## 6. Entregáveis

Módulo instalável via `npm install <github-user>/copy-or-move`. Este módulo
deve incluir **um executável** para ser utilizado a partir da linha de comando.

## 7. Hacker edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **concluir**
tudo anteriormente e ainda tiver tempo, tente completá-las. Assim, você poderá
aprofundar e/ou praticar mais sobre os objetivos de aprendizado do projeto.

* Você pode tentar adicionar à sua aplicação a opção de selecionar um conjunto
  de arquivos seguindo um padrão usando um caractere wildcard (`*`).
  
  Por exemplo:
  `$ copy-or-move "package*" ./Documentos/ -c`
  
  Ou também:
  `$ copy-or-move "*.js" ./Projetos/`
* Você pode adicionar mais opções além de `-c`, por exemplo, uma opção `-n` que
  informa ao seu programa que não é necessário substituir um arquivo no
  diretório de destino se ele já existir lá.

## 8. Guias, dicas e leituras complementares

### FAQs

#### Como faço para que o meu módulo seja instalável pelo GitHub?

Para que o módulo seja instalável a partir do GitHub, é necessário:

* Estar em um repositório público do GitHub
* Conter um `package.json` válido

Com o comando `npm install githubname/reponame`, podemos instalar diretamente
do GitHub. Consulte a
[documentação oficial do `npm install` aqui](https://docs.npmjs.com/cli/install).

### Sugestões de implementação

A implementação deste projeto possui várias partes: leitura do sistema de
arquivos, recebimento de argumentos pela linha de comando, diferenciação entre
arquivos e diretórios, criação de diretórios, etc... E todas essas coisas podem
ser abordadas de várias maneiras, tanto usando bibliotecas quanto implementando
em VanillaJS.

Nos exemplos anteriores, de propósito, declaramos que a entrada da usuária
segue uma ordem específica, onde primeiro vem a "origem", depois o "destino"
e, **por último**, a opção (ou flag) `-c`. Recomendamos que você siga essa
ordem específica para facilitar a análise desses argumentos recebidos pela
linha de comando.

Não hesite em consultar suas colegas e instrutoras se tiver dúvidas
existenciais sobre essas decisões. Não há apenas uma maneira "correta"
de desenvolver isso.

### Tutoriales / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)
* [Node.js file system - Documentação oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://pt.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [Node.js – O que é, como funciona e quais as vantagens](https://www.opus-software.com.br/node-js/)
* [O que é npm](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
* [JavaScript assíncrono: callbacks, promises e async functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)
* [Funções assíncronas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Criar módulos no Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Ler um diretório](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options)
* [Verifique se é diretório](https://nodejs.org/docs/latest-v18.x/api/fs.html#statsisdirectory)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

## 9. Checklist

### Geral

* [ ] Pode ser instalado via `npm install --global <github-user>/copy-or-move`

### `README.md`

* [ ] Quadro (board) com o backlog para implementação da biblioteca.
* [ ] Documentação técnica da biblioteca.
* [ ] Guia de uso e instalação da biblioteca.

### CLI

* [ ] Expõe o executável `copy-or-move` no caminho (path) configurado no
  `package.json`.
* [ ] Executa sem erros / produz saída esperada.
* [ ] Permite mover ou copiar arquivos e diretórios completos.
* [ ] Implementa a opção `-c`.

### Testes

* [ ] Os testes unitários cobrem pelo menos 70% dos statements, funções,
  linhas e branches.
* [ ] Passa nos testes (e linters) (`npm test`).

## 10. Dividindo o problema

Um "superpoder" que esperamos que você desenvolva durante o bootcamp
é a capacidade de definir "mini-projetos" que o levem passo a passo
à solução do "grande projeto". É o equivalente a começar montando
as esquinas ou bordas do quebra-cabeça sem necessariamente saber
como elas se encaixarão no final. Deixe-se levar e explore.

Aqui estão algumas sugestões:

### Comece com um diagrama de fluxo

Este projeto é diferente dos que você tem trabalhado até agora,
pois não há uma interface web, tudo será desenvolvido no seu editor
e terminal.

Por isso, para visualizar melhor o que você terá que fazer e planejar suas
tarefas e objetivos, é recomendável fazer um `diagrama de fluxo`.

Se você nunca fez um diagrama de fluxo, confira este
[recurso](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Uma alternativa ao diagrama de fluxo pode ser o `pseudocódigo`.

### Planejamento

Neste projeto, recomendamos o uso da ferramenta de planejamento
e organização do GitHub chamada **Github Projects**.

Através de **issues** e **milestones**, você pode organizar e planejar
tarefas e objetivos concretos.

Levando em consideração os **entregáveis** do projeto, o
[9. Checklist](#9-checklist) e os **passos** que você definiu no seu
`diagrama de fluxo`, crie seu planejamento no GitHub Projects.

### Antes de codificar

Nesta ocasião, você estará trabalhando com **Node.js**, certifique-se
de entender para que serve e suas considerações.

Especificamente, você precisará decidir desde o início se usará
`ES Modules`, ou seja, **import/export**, ou, em vez disso,
`CommonJS Modules`, ou seja, **require/module.exports**.

Certifique-se de ter essa decisão clara desde o início para evitar
problemas futuros.

### Ler o conteúdo de um diretório

Como primeiro desafio, você pode tentar ler um único diretório com um caminho
fixo e imprimir seu conteúdo no console usando `console.log`.

A biblioteca nativa `FS` (FileSystem) será muito útil.

**Lembre-se**: Sugerimos **não usar** a versão síncrona da função de leitura
de diretórios, `readdirSync`, e em vez disso, tente resolver esse desafio de
forma assíncrona.

### Verificar se um item é um diretório ou um arquivo

Para este projeto, será necessário determinar se um item é um arquivo ou um
diretório, você pode fazer isso usando a biblioteca `stat`.

### Concatenar dois caminhos

Para acessar pastas e arquivos, será necessário indicar em qual local do seu
computador eles estão, isso é chamado de **caminho**.

Use a biblioteca nativa `path` para concatenar dois segmentos de caminho, por
exemplo, se quisermos juntar:

1) /home/Laboratoria/
2) ./test

O resultado seria: /home/Laboratoria/test

### Recursividade

Este projeto é naturalmente resolvido com **recursividade**.

Por quê?

Porque não sabemos quantas pastas e arquivos teremos que percorrer antes de
terminar.

Se você receber um caminho de diretório, não saberá de antemão se há mais
diretórios ou muitos arquivos dentro dele.

Portanto, certifique-se de entender bem o conceito de recursividade e ver
alguns exemplos.
