# Software de Gestão de Frota API

## Índice

* [1. Preambulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizado](#3-objetivos-de-aprendizado)
* [4. Critérios de aceitação do projeto](#4-critérios-de-aceitação-do-projeto)
* [5. Tecnologias Utilizadas](#5-tecnologias-utilizadas)
* [6. Dicas, sugestões e leituras complementares](#6-dicas-sugestões-e-leituras-complementares)
* [7. Funcionalidades opcionais](#7-funcionalidades-opcionais)

***

## 1. Preâmbulo

De acordo com [Wikipedia](https://es.wikipedia.org/wiki/Internet_de_las_cosas),
a Internet das Coisas (IoT) é um conceito que se refere à interconexão
digital de objetos cotidianos com a internet. Constitui uma mudança
radical na qualidade de vida das pessoas na sociedade, oferecendo novas
oportunidades no acesso a dados, educação, segurança, assistência médica
e transporte, entre outros campos. Por exemplo, na logística e gestão de
frotas, é possível rastrear a localização e as condições dos veículos a
qualquer momento, por meio de sensores sem fio conectados à internet que
enviam alertas em caso de eventualidades (atrasos, danos, roubos, etc.).

![zach-vessels-utMdPdGDc8M-unsplash](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fthumb.jpg?alt=media)

A IoT também apresenta desafios como armazenamento, análise e visualização
da grande quantidade de informações geradas. Estima-se que até 2025, os
dispositivos IoT gerem
[79.4 zettabytes](https://www.statista.com/statistics/1017863/worldwide-iot-connected-devices-data-size/)
(1 zettabyte é equivalente a 1 trilhão de gigabytes). Como desenvolvedoras,
devemos estar cientes desses desafios e contribuir para sua solução com nossa
experiência, conhecimento e vontade de aprender.

## 2. Resumo do projeto

Neste projeto, você construirá a API REST de um
[Software de Gestão de Frota](https://en.wikipedia.org/wiki/Fleet_management)
para consultar as localizações dos veículos de uma empresa de táxis
em Pequim, China.

Forneceremos as localizações de quase 10 mil táxis. Esperamos que, como
desenvolvedora, você explore novas alternativas e técnicas para armazenar
e consultar essas informações, garantindo a melhor experiência do usuário
em sua API REST.

## 3. Objetivos de aprendizado

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
objetivos de aprendizado declarados em [`project.yml`](./project.yml), ao criar
o repositório do projeto para uma turma específica usando
[`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma
[lista de todos os objetivos de aprendizado](../../learning-objectives/data.yml)
contemplados em nossa grade curricular.

## 4. Critérios de aceitação do projeto

Nossa cliente instalou dispositivos GPS em seus táxis. Esses dispositivos
usam sinais de satélite para determinar com precisão as coordenadas
geográficas do táxi.

Nossa cliente requer:

1. Carregar as informações dos arquivos SQL para um banco de dados
PostgreSQL.
2. Desenvolver uma API REST que permita consultar, por meio de requisições
HTTP, as informações armazenadas no banco de dados.

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos apresenta este _backlog_ que é o resultado de seu trabalho com a
cliente até hoje.

***

#### [História do usuário 1] Carregar informações no banco de dados

Eu, como desenvolvedora, quero carregar as informações armazenadas até
agora em
[arquivos SQL](https://drive.google.com/file/d/1T5m6Vzl9hbD75E9fGnjbOiG2UYINSmLx/view?usp=drive_link)
em um banco de dados PostgreSQL, para facilitar sua consulta e análise.

##### Critérios de aceitação

* Deve-se considerar o seguinte diagrama para a implementação das
relações entre as tabelas

![mer](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fsql-diagram.png?alt=media)

* A tabela de _trajectories_ deve ser criada com o "id" que aumenta
automaticamente (SERIAL) para poder inserir os valores sem a necessidade de especificar um identificador.

##### Definição de pronto

* O banco de dados tem a tabela de táxis criada.
* A tabela de táxis tem os dados dos táxis carregados.
* O banco de dados tem a tabela de trajetórias criada.
* A tabela de trajetórias tem os dados das trajetórias dos táxis carregados.

***

##### [História do usuário 2] Endpoint de listagem de táxis

Eu, como cliente da API REST, necessito de um _endpoint_ para listar
todos os táxis.

##### Critérios de aceitação

* O _endpoint_ responde para cada táxi: id e placa.
* O _endpoint_ paginamos os resultados para garantir que as respostas
sejam mais fáceis de manejar.

##### Definição de pronto

* Há documentação no [Swagger](https://swagger.io/) para o _endpoint_
desenvolvido, especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parâmetros,
[cabeçalhos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de resposta](https://shorturl.at/bdegB) e corpo.
* O código do _endpoint_ deve passar por revisão de código de pelo menos uma colega.
* O código do _endpoint_ deve ser carregado em um repositório do Github.
* O código do _endpoint_ deve ter testes unitários e de ponta a ponta.

***

#### [História do usuário 3] Endpoint de histórico de localizações

Eu, como cliente da API REST, necessito de um _endpoint_ para consultar
todas as localizações de um táxi dado o id do táxi e uma data.

#####

 Critérios de aceitação

* O _endpoint_ responde para o id do táxi consultado as seguintes informações:
latitude, longitude e data e hora.
* O _endpoint_ paginamos os resultados para garantir que as respostas sejam
mais fáceis de manejar.

##### Definição de pronto

* Há documentação no [Swagger](https://swagger.io/) para o _endpoint_
desenvolvido, especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parâmetros,
[cabeçalhos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de resposta](https://shorturl.at/bdegB) e corpo.
* O código do _endpoint_ deve passar por revisão de código de pelo menos uma colega.
* O código do _endpoint_ deve ser carregado em um repositório do Github.
* O código do _endpoint_ deve ter testes unitários e de ponta a ponta.

***

#### [História do usuário 4] Endpoint de última localização

Eu, como cliente da API REST, necessito de um _endpoint_ para consultar a
última localização reportada por cada táxi.

##### Critérios de aceitação

* O _endpoint_ responde para cada táxi as seguintes informações: id, placa,
latitude, longitude e data e hora.
* O _endpoint_ paginamos os resultados para garantir que as respostas sejam
mais fáceis de manejar.

##### Definição de pronto

* Há documentação no [Swagger](https://swagger.io/) para o _endpoint_
desenvolvido, especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parâmetros,
[cabeçalhos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de resposta](https://shorturl.at/bdegB) e corpo.
* O código do _endpoint_ deve passar por revisão de código de pelo menos uma colega.
* O código do _endpoint_ deve ser carregado em um repositório do Github.
* O código do _endpoint_ deve ter testes unitários e de ponta a ponta.

***

## 5. Tecnologias Utilizadas

Você pode implementar este projeto em JavaScript ou Java.

* [Java](./docs/README-java.pt.md#stack-de-tecnologías)
* [NodeJs](./docs/README-node.pt.md#stack-de-tecnologías)

## 6. Dicas, sugestões e leituras complementares

### Modelagem de dados

O banco de dados recomendado para sua aplicação é o PostgreSQL. Recomendamos
o uso do [vercel Postgresql](https://vercel.com/docs/storage/vercel-postgres)
para que você não precise instalar o PostgreSQL em seu computador.

Uma vez que você tenha acesso a uma instância do PostgreSQL, deverá criar
tabelas em seu banco de dados para armazenar as informações fornecidas.
Recomendamos criar duas tabelas, uma para armazenar as informações dos táxis
e outra para armazenar as informações de localização. Você deverá definir as
colunas de cada tabela de acordo com as informações fornecidas.

Você pode criar uma tabela no PostgreSQL usando
[SQL](https://www.postgresqltutorial.com/postgresql-create-table/).

### Definir endpoints da API

Você deverá definir e documentar os endpoints de sua API. Deve usar
[Swagger](https://swagger.io/) para isso.

Para uma API REST, é necessário definir, para cada endpoint, entre outras coisas,
o [método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), url,
parâmetros, [cabeçalhos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de resposta](https://shorturl.at/bdegB) e corpo.

Por exemplo, na figura a seguir, é definido um endpoint para consultar as
informações dos táxis no aplicativo. O método do endpoint é _GET_, a url
é _/taxis_. Ele recebe um parâmetro de _query_, retorna as informações com
o _código HTTP_ 200 em formato json, graças ao _header_ `Content-type` com
valor `application/json`.

![Exemplo de Endpoint API Rest](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fexample-endpoint-api-rest.png?alt=media)

## 7. Funcionalidades Opcionais

Se você completou todas as funcionalidades do projeto, convidamos você a
trabalhar nas [funcionalidades opcionais](./docs/README.extension.pt.md)
