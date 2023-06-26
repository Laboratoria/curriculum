# Desafio de Filmes com Framework

## Índice

- [1. Preâmbulo](#1-preambulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Considerações gerais](#3-considerações-gerais)
- [4. Objetivos de aprendizagem](#4-objetivos-de-aprendizagem)
- [5. Critérios mínimos de aceitação do projeto](#5-criterios-de-aceitacao-minimos-do-projeto)
- [6. Considerações técnicas](#6-consideracoes-tecnicas)

---

## 1. Preâmbulo

A forma como assistimos filmes mudou radicalmente nos últimos anos, em parte
devido ao surgimento dos serviços de
[_streaming_](https://pt.wikipedia.org/wiki/Streaming), que nos permitem
fazê-lo de onde quer que estejamos e a qualquer momento. O melhor reflexo desse
fenômeno é o sucesso da Netflix, HBO, Disney+ e outros.

Acreditamos que há uma grande oportunidade de propor produtos/experiências
inovadoras de todos os tipos usando dados de filmes (diretorxs, atorxs, sagas,
sequências, datas, etc.). Poderíamos pensar em jogos, comunidades, catálogos,
recomendações baseadas em gostos pessoais, etc.
(apenas para mencionar algumas ideias óbvias).

![Filmes](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

A ideia deste projeto é que, usando uma API com informações de filmes, você
possa planejar, organizar e desenvolver uma aplicação web que utilize esses
dados e tenha uma proposta de valor atraente para lxs usuárixs.

Embora a decisão do que fazer seja totalmente sua, há algumas considerações
gerais apresentadas a seguir. Você pode atender a esses requisitos em projetos
muito diferentes, dependendo da sua criatividade e entendimento de seus
potenciais usuárixs!

Para implementar este projeto, você deverá escolher um framework entre
[React](https://pt-br.reactjs.org/) e [Angular](https://angular.io/).
Ao escolher um _framework_ ou _biblioteca_ para nossa interface, apoiamo-nos
em uma série de convenções e implementações _testadas_ e _documentadas_ para
resolver um problema comum a todas as interfaces da web:
[_manter a interface sincronizada com o estado_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Isso nos permite concentrar-nos melhor (dedicar mais tempo) nas características
_específicas_ de nossa aplicação.

Quando escolhemos uma dessas tecnologias, não só importamos um pedacinho de
código para reutilizá-lo (o que é um grande valor por si só), mas adotamos uma
**arquitetura**, uma série de **princípios de design**, um **paradigma**, umas
**abstrações**, um **vocabulário**, uma **comunidade**, etc.

Como desenvolvedora Front-end, esses kits de desenvolvimento podem ser de grande
ajuda para implementar rapidamente recursos dos projetos em que você trabalha.

## 3. Considerações gerais

- Este projeto deve ser resolvido em equipes de no máximo 3 pessoas.
- Você deve escolher e justificar qual problema ou necessidade está resolvendo
  com o produto que está projetando e desenvolvendo.
- Você deve utilizar os dados da API do
  [The Movie Database API V3](https://developers.themoviedb.org/3/getting-started/introduction)
  ou
  [OMDB](http://www.omdbapi.com/) (The Open Movie Database) ou qualquer
  outra API que encontrar.
- Para implementar este projeto, você deve escolher um framework entre
  React ou Angular.
- Tente pensar em um escopo que, considerando sua complexidade e a quantidade de
  pessoas na equipe, permita concluir o projeto em 3 ou 4 semanas.

## 4. Objetivos de aprendizagem

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

## 5. Critérios mínimos de aceitação do projeto

- Utilizar a _The Movie Database API V3_ ou _OMDB_ ou qualquer outra API
  através de _fetch_ para obter e mostrar uma interface baseada nos dados
  de cada resposta.
- Sua solução deve ser _responsiva_. Deve se adaptar a telas de desktop,
  tablets e celulares.
- Você deve implantar sua aplicação em qualquer serviço na nuvem.
  Algumas opções são [GitHub Pages](https://pages.github.com/)
  ou [Vercel](https://vercel.com/)
  ou [Netlify](https://www.netlify.com/)

## 6. Considerações técnicas

- Para poder usar a API do _The Movie Database API V3_ ou _OMDB_ você deverá criar
  uma chave (_key_) de acesso e adicioná-la em cada solicitação que fizer ao servidor.
  + Para _The Movie Database API V3_ você deverá criar uma conta e depois uma
    chave neste [link](https://www.themoviedb.org/settings/api).
  + Para _OMDB_ a chave é gerada neste
  [link](http://www.omdbapi.com/apikey.aspx) preenchendo o formulário com a
  versão gratuita (_free_) selecionada e depois verificando seu _e-mail_ para
  ativá-la e poder usá-la.
- Lembre-se que o GitHub Pages serve suas páginas com um certificado
  [SSL](https://pt.wikipedia.org/wiki/SSL) então as solicitações às APIs
  devem incluir `https` na URL.
- Lembre-se que você tem um máximo de 1.000 solicitações diárias às APIs por cada
  [IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP), acreditamos que seja
  suficiente, mas recomendamos que você faça um uso responsável deste recurso gratuito.

## Conteúdo de referência

- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)

Tente se divertir. Vamos começar esta aventura 🎬!
