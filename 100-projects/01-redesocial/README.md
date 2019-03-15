# Criando uma Rede Social

## Preâmbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

Há redes sociais de todo tipo para todos os tipos de interesse. Por exemplo, em
uma rodada de financiamento com investidores, foi apresentada uma rede social
para químicos onde os usuários podem publicar artigos a respeito de suas
pesquisas, comentar os artigos de seus colegas e filtrar artigos de acordo com
determinadas tags ou popularidade, mais recente ou mais comentado.

## Introdução

Uma empreendedora nos encarregou de criar uma rede social. Não nos deu muitos
detalhes sobre que tipo de rede social ela quer, apenas nos solicita que a
façamos o melhor que pudermos para que seja lançada logo no mercado. Ela nos deu
certos temas onde gostaria de investir:

* Alimentação
* Feminismo
* Educação
* Saúde
* Meio ambiente

## Objetivos de Aprendizagem

O objetivo principal de aprendizagem deste projeto é desenvolver uma aplicação
web responsiva onde possamos **ler e gravar dados.**

Em outras palavras, aprenderá a

* Aplicar e aprofundar tudo o que aprendeu no projeto anterior.
* Entender as necessidades dos usuários para quem será desenvolvido o produto e
  cujas necessidades ajudará a resolver.
* Colocar à prova sua criatividade para ter ideias que levem à uma solução
  original e valiosa para o problema.
* Contar com o apoio de suas colegas, trabalhando em grupo e buscando _feedback_
  constante.
* Definir como criar sua própria estrutura de dados e de que forma serão
  exibidos no produto.

## Considerações Gerais

Este projeto deverá ser desenvolvido em trios.

* A lógica do projeto deverá ser implementada totalmente em JavaScript (ES6+),
  HTML e CSS.
* Deverá ser utilizada a biblioteca jQuery para manipulação de DOM.
* Deverá ser utilizado o _framework_ Bootstrap v4 para elementos de leiaute e
  responsividade.
* Todo o código deverá ser escrito seguindo o [guia de estilos da Laboratória](https://github.com/JulianaAmoasei/js-style-guide/blob/pt-translation/README-PT.md).

Para iniciar, faça um _fork_ e _clone_ deste repositório.

## Parte obrigatória

Este projeto conta com uma estrutura de arquivos de pastas já definida, porém
podem modificá-la de acordo como preferirem organizar a estrutura de seus
projetos.

### Definição do produto

No arquivo `README.md` você deverá documentar o processo: o que descobriu sobre
o mercado de redes sociais, as necessidades dos usuários, como chegou à
definição final de seu produto. Compartilhe fotos e registros dos esboços,
questionários, entrevistas, etc. É importante detalhar:

* Quais os elementos básicos de uma rede social
* Quem são os principais usuários do produto
* Como descobriu as necessidades dos usuários
* Que problemas seu produto resolve para estes usuários
* Quais são os objetivos destes usuários com relação ao produto
* Quais são as principais funcionalidades do produto
* Como conferiu se o produto está funcionando para resolver os problemas
* Como irá garantir que os usuários utilizem este produto

Para poder chegar a estas definições, recomendamos que relembre os seguintes
tópicos de UX: entrevistas com usuários e testes de usabilidade.

### Histórias de usuário

Uma vez que entenda as necessidades de seu usuário, escreva as Histórias de
Usuário que representem tudo o que o usuário precisa ver/fazer. Não esqueça de
incluir uma definição de pronto (_definition of done_) para cada uma.

### Design da interface de usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro de seu produto,
e a partir disso desenhar uma interface do usuário (UI) que siga este fluxo em
sua rede social. Este design deverá representar a solução que será finalmente
implementada em seu código.

### Responsividade

O produto deve ser bem visualizado em dispositivos com telas grandes (notebooks
e computadores) e pequenas (celulares e tablets). Você pode pesquisar conteúdo
sobre o conceito de `mobile first` (mais detalhes sobre isso no final).

### Implementação da interface de usuário (UI e comportamento da interface)

A ideia para este produto é que o desenvolvimento siga o que está proposto no
desenho da interface. Confira ao longo do desenvolvimento que os elementos
propostos estão sendo implementados corretamente.

A interface deverá permitir

#### Criação de uma conta de usuário e início da sessão

* Login com Firebase:
  - Para o login e as publicações na timeline você deverá utilizar
    [Firebase](https://firebase.google.com/products/database/)
  - Autenticação com Facebook, Google ou e-mail.
* Validações:
  - Não pode haver usuários repetidos.
  - A conta do usuário deverá ter um e-mail válido.
  - O texto no _input_ de senha deverá ser secreta.
* Comportamento:
  - Os formulários de registro ou início de sessão deverão ser validados no
    envio.
  - Em caso de erros, o sistema deve fornecer mensagens de erro para o usuário,
    para ajudá-lo a corrigir.
  - A aplicação só deve permitir o acesso a usuários com contas válidas.
  - Ao recarregar a aplicação, deve-se verificar que o usuário está logado antes
    de exibir conteúdo privado.
* Perspectiva da interface:
  ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)

#### Timeline da rede social

* Validações:
  - Ao clicar no botão de publicação, deve-se validar o conteúdo no input.
* Comportamento:
  - Poder publicar um post de texto.
  - Poder dar _like_ em um post.
  - Exibir um contador de likes.
  - Poder apagar um post específico.
  - Poder filtrar posts públicos e posts somente para amigos.
  - Pedir confirmação antes de eliminar um post.
  - Ao clicar no botão editar, deve-se mudar o texto para um campo _input_ que
    permita editar o texto.
  - Ao clicar em salvar, a exibição deve voltar a um texto normal, porém com a
    informação editada.
  - Ao recarregar a página, deve exibir as informação editadas/atualizadas.
* Perspectiva da interface:
  ![Timeline](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)

#### Outras considerações

* A aplicação não deve permitir a publicação de campos vazios de nenhum tipo.
* O usuário deve poder adicionar, editar ou apagar conteúdo de seu perfil na
  rede social
* O usuário poderá definir a privacidade do que publica.
* Ao editar conteúdo, o que foi editado deve ser vizualizado automaticamente,
  imediatamente depois de salvar.
* Ao recarregar a página, deve-se exibir os conteúdos editados/atualizados.

### Hacker edition

* Criar posts com imagens.
* Permitir adicionar amigos.
* Permitir cancelar amigos.
* Permitir o compartilhamento de posts (no Twitter chamamos de RT/retweet, no
  Facebook de compartilhamento).
* Permitir comentários ou respostas a uma publicação.
* Permitir perfis editáveis.
* Permitir a visualização de perfil ou da timeline ou de uma lista de
  publicações.

### Considerações técnicas

O _core_ deste projeto inclui:

* Separar a manipulação do DOM da lógica (Separação de responsabilidades).
* Que seja responsivo.
* Alteração e persistência de dados. Os dados que incluir ou modificar deverão
  persistir ao longo da aplicação. Para isso, utilizar o
  [Firebase](https://firebase.google.com/).

### Considerações de UX

Do ponto de vista de UX, você deverá:

* Fazer pelo menos 2 ou 3 entrevistas com usuários.
* Fazer um protótipo de baixa fidelidade.
* Garantir que a implementação do código siga as especificações do design.
* Fazer sessões de teste com o produto no HTML.

### Considerações Ágeis

Recomendamos que mantenham o backlog do produto atualizado, façam os dailies em
um horário fixo durante todo o projeto e utilizem algum sistema como o kanban
para ter um mapa visual do andamento do projeto de acordo com a implementação de
cada funcionalidade.

### HSE

Trabalhar em equipe é um grande desafio porque coordenar-se não é uma tarefa
fácil, e fica ainda mais difícil entre três pessoas do que entre duas. Trabalhe
para ser entendida pelo grupo, facilitando sempre o diálogo dentro do squad.

Façam o planejamento enumerando as tarefas e as distribuindo, considerando os
recursos, as habilidades e o tempo que dispõe. O planejamento deve permitir o
avanço de diferentes partes do projeto de forma paralela, e contar com algum
recurso visual onde possam ver em que estão trabalhando suas companheiras.

Entregue seu trabalho a sua equipe a tempo e colabore com o objetivo final do
projeto, o que pode incluir ajudar as demais da equipe com suas pendências, para
entregar uma rede social de qualidade.

** A divisão do trabalho deve permitir que toda a equipe pratique a aprendizagem
de todas as habilidades esperadas. Não dividam o trabalho como em uma fábrica.**

Esperamos que preze e escute os comentários e críticas das demais, identificando
os aspectos que sirvam para seu crescimento. Dê sua opinião sempre de maneira
construtiva, fundamentada e coerente, com o propósito de ajudar suas
companheiras. Estes comentários devem ser feitos de maneira honesta, empática e
imediata.

## Entrega

O código do projeto deverá estar disponível no github, e a interface publicada
utilizando o serviço _Firebase Hosting_.

## Evaluación

### Tech

| Habilidade |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semântica |
| Funções/modularidade |
| Estrutura de dados |
| **HTML** |
| Estilo |
| Semântica |
| **CSS** |
| DRY |
| Responsividade |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitetura |
| Padrões/paradigmas |

### UX

| Habilidade |
|-----------|
| User Centricity |
| Entrevistas |
| Testes |
| Fluxo do usuário |

***

## Dicas / Leituras complementares

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) se
refere a um processo de design e desenvolvimento onde partimos de como se vê e
como funciona a aplicação em um dispositivo móvel, para então posteriormente ver
como adaptar a aplicação a telas progressivamente maiores e com características
específicas do desktop. Este conceito está em contraposição ao modelo
tradicional, onde primeiro se desenhavam os websites (ou webapps) para desktop
para então "espremer" o leiaute para caber em telas menores. A chave está em
garantir que o desenvolvimento seja feito desde o início utilizando a visão
_responsive_ nas ferramentas de desenvolvimento (developer tools) dos
navegadores. Desta forma, partimos de como se vê e se comporta a aplicação em
uma tela e entorno móvel.

### Dados

Nos projetos anteriores consumimos (lemos) dados, mas não escrevemos dados
(salvar modificações, criar dados novos, apagar). Neste projeto terá que criar
(salvar) novos dados, assim como ler, atualizar e modificar dados existentes.
Estes dados serão armazenados de forma remota utilizando o
[Firebase](https://firebase.google.com/).

***

## Checklist

### General

* [ ] O produto final segue o que foi especificado no desenho.

### `README.md`

* [ ] Definição do produto
* [ ] Resumo das entrevistas com usuários
* [ ] Link/imagens dos protótipos de baixa fidelidade
* [ ] Conclusões dos testes de usuário feitos no o HTML

### Criação de conta (sign up)

* [ ] Permite criar conta.
* [ ] Valida email.
* [ ] Valida senha.
* [ ] Mostra mensagens de erro.

### Início de sessão (sign in)

* [ ] Permite iniciar sessão.
* [ ] Valida email.
* [ ] Valida senha.
* [ ] Mostra mensagens de erro.

### Timeline

* [ ] Mostra a timeline.
* [ ] Permite fazer novas publicações.
* [ ] Permite apagar publicações.
* [ ] Pede confirmação antes de apagar publicações.
* [ ] Permite editar publicação no mesmo lugar (in place).
* [ ] Permite filtrar publicações por público/privado.
* [ ] Permite marcar publicações como _gostei_ (like, coração, estrela, etc).
* [ ] Permite ver quantos likes, estrelas, corações (ou o que for utilizar) uma
  publicação recebeu.

### Hacker Edition

* [ ] Permite adicionar amigos.
* [ ] Permite deletar amigos.
* [ ] Permite compartilhamento de publicações.
* [ ] Permite comentar ou responder uma publicação.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil ou timeline.