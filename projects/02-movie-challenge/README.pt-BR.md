# Projeto de extensão: Movie Challenge

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Considerações gerais](#3-considerações-gerais)
- [4. Objetivos de aprendizagem](#4-objetivos-de-aprendizagem)
- [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-minimos-do-projeto)
- [6. Considerações técnicas](#6-considerações-tecnicas)

---

## 1. Preâmbulo

A forma que vemos filmes mudou radicalmente durante os últimos anos
devido, em parte, a aparição dos serviços de  [_streaming_](https://pt.wikipedia.org/wiki/Streaming)
que nos permite assistir em qualquer lugar e momento. O melhor reflexo
deste fenômeno é o sucesso da Netflix, HBO e Disney+, etc.

Em tempos em que uma das principais ferramentas para combater [a pandemia
de Covid-19](https://pt.wikipedia.org/wiki/COVID-19) é [evitar](https://pt.wikipedia.org/wiki/Distanciamento_social)
compartilhar espaços com muitas pessoas (como no cinema), e assistir _streaming_
será uma das poucas formas (ou a única) de ver filmes.

Acreditamos que há uma grande oportunidade de propor produtos/experiências inovadoras
de tudo tipo utilizando dados de filmes (directorxs, atores/atrizes, sagas, sequências,
datas, etc.). Poderíamos pensar em jogos, comunidades, catálogos, recomendações
baseadas em gostos pessoais, etc. (apenas para mencionar algumas ideias obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

A ideia deste projeto é que, usando uma API com informações de filmes,
possa idealizar, planejar, organizar e desenvolver uma aplicação web que aproveite
estes dados e tenha uma proposta de valor atrativa para os usuários.

Ainda que a decisão do que fazer é inteiramente sua, há algumas considerações
gerais que se apresentam a seguir. Pode atender esses requisitos em
projetos muitos distintos, depende de sua criatividade e do entendimento
dos seus potenciais usuários!

## 3. Considerações gerais

- Este projeto deve ser feito em equipes de 2 ou mais pessoas.
- Devem escolher qual problema ou necessidades estão resolvendo com o
produto que estão desenhando e desenvolvendo.
- Devem utilizar os dados da API de [OMDB](http://www.omdbapi.com/) (The Open
Movie Database) com [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
ou qualquer outra API que encontrem.
- Pensem em _test driven development_ no momento de programar a
solução. Terão que escrever os testes unitários, aproveitem a oportunidade
de fazer-lo antes de escrever a funcionalidade.
- Este projeto é "agnóstico" a tecnologia, ou seja, podem desenvolver
em Vanilla JavaScript ou em algum _framework_ ou biblioteca de sua escolha.
- Pense em um escopo que, considerando a sua complexidade e a quantidade de
pessoas na equipe, permita a conclusão do projeto em 2 semanas.

## 4. Objetivos de aprendizagem

- Colocar em prática tudo aprendeu até agora.
- Desenhar e teste um produto antes de desenvolver-lo.
- Obter dados de um serviço externo como OMDB usando _Fetch_.
- Entender a idea de aleatoriedade aplicada aos algoritmos.

## 5. Critérios de aceitação mínimos do projeto

- Utilizar a API de OMDB usando _Fetch_ para obter e mostrar uma interface baseada
nos dados de cada resposta.
- Independentemente do que decida fazer, deve selecionar dados aleatoriamente e mostrar-los
em alguma das características de seu projeto. Para isto geralmente
se usa o método `random` do objeto `Math` em JavaScript.
- Sua solução deve ser _responsive_. Deve se adaptar as telas desktop,
tablets e celulares.
- Deve implantar a sua aplicação usando [GitHub Pages](https://pages.github.com/).

## 6. Considerações técnicas

- Para usar a API de OMDB deve criar uma chave (_key_) de acesso e adiciona-la
em cada requisição que faça ao servidor (revisar seção _Usage_ de sua [documentação](http://www.omdbapi.com/)).
A chave pode ser gerada neste [link](http://www.omdbapi.com/apikey.aspx) preenchendo
o formulário com a versão gratuita (_free_) selecionada, precisando verificar seu
_email_ para ativar e usá-la.
- Lembre que o GitHub Pages serve suas páginas com um certificado [SSL](https://pt.wikipedia.org/wiki/Transport_Layer_Security),
portanto as requisições a OMDB devem incluir `https` na URL.
- Lembre que há um limite de 1.000 requisições diárias à API de OMDB
para cada [IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP). Acreditamos que é
suficiente, mas te recomendamos o uso responsável deste recurso gratuito.

## Conteúdo de referência

- [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [Math.random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Se divirta e comece esta aventura 🎬!
