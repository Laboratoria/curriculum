# Burger Queen - API com Node.js

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Pistas, tips e leituras complementares](#6-pistas-tips-e-leituras-complementares)
* [7 HTTP API Checklist](#7-http-api-checklist)

## 1. Prefácio

![Node.js logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg)

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso
cliente nos solicitou que desenvolvêssemos uma API que pode integrar com a
interface, que outra equipe de desenvolvedores está trabalhando
simultaneamente

## 2. Resumo do projeto

Como API, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_)
usando o protocolo HTTP (o HTTPS).

Um servidor web deve _lidar_ com as requisições que chegam e devolver respostas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde.

O [Node.js](https://nodejs.org/) nos permite criar servidores web super eficientes
de maneira relativamente simples, tudo isso usando JavaScript!

Neste projeto partimos de um _boilerplate_ que já contém uma série de
_endpoints_ (pontos de conexão ou URLs) e nos pedem para completar a aplicação.
Isto implica que teremos que começar a ler a implementação existente, e
familiarizar-nos com a _stack_ escolhida ([Node.js](https://nodejs.org/) e
[Express](https://expressjs.com/)) e complementá-la com um motor de banco de dados,
no qual você deverá escolher entre [MongoDB](https://www.mongodb.com/),
[PostgreSQL](https://www.postgresql.org/) e [MySQL](https://www.mysql.com/).

O cliente nos deu um
[link](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
para a documentação que especifica o comportamento esperado da API que
iremos expor por HTTP.
Lá podemos encontrar todos os detalhes que os _endpoints_ deve
implementar na aplicação, que parâmetros esperam, o que devem responder, etc.

O objetivo de aprendizagem principal é adquirir experiência com o **Node.js**
como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série
de outras ferramentas comumente utilizadas nesse contexto (Express como framework,
MongoDB, PostgreSQL ou MySQL como base de dados, containers de docker, etc).

Neste projeto, você desenvolverá um servidor web que deverá _servir_ `JSON`
através de uma conexão `HTTP`, e implantá-lo em um servidor na nuvem.

Ao final do projeto, você deverá estar familiarizada com conceitos como **rotas**
(_routes_), **URLs**, **HTTP** (verbos, request, response, headers, body, status
codes, etc), **JSON**, **JWT** (_JSON Web Tokens_), **conexão com uma base de dados**
(`MongoDB`, `PostgreSQL` ou `MySQL`), **variables de ambiente**, **deployment**,
**containers de `docker`**, etc.

## 3. Objetivos de aprendizagem

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.

## 4. Considerações gerais

Este projeto será realizado em duplas e pode estar integrado com o projeto
[Burger Queen API client](../04-burger-queen-api-client)
que a equipe de Frontend developers do seu squad desenvolve simultaneamente.

A lógica do projeto deve estar implementada totalmente em JavaScript (ES6).
Neste projeto está permitido usar bibliotecas ou frameworks, assim como
extensões para a linguagem com `babel` (neste caso você incluir um
comando `npm build`).

Os testes deven cobrir um mínimo de 90% de _statements_, _functions_,
_lines_ e _branches_. Embora o boilerplate não inclua as configurações para
testes unitários, estes são obrigatórios.

Outro requisito da equipe de QA do nosso cliente é realizar
**testes _end-to-end_**, que usaremos para verificar o comportamento desde o
ponto de vista de HTTP, desde fora do servidor. Estes testes, diferente dos
testes unitarios, não testam cada parte separadamente, mas testam a
aplicação completa, do princípio ao fim. Esses testes, por não fazerem uso direto
do código-fonte da aplicação, podem ser executados diretamente em uma URL
remota, pois a interface em teste é HTTP.

O _boilerplate_ já contém o setup e configuração
necessária para executar todos os tests _end-to-end_ com o comando `npm run test:e2e`.

```sh
# Execute testes e2e na instância local. Isso levanta a aplicação com npm
# start e execute os tests na URL desta instancia (por padrão
# http://127.0.0.1:8080).
npm run test:e2e

# Execute testes e2e em URL remoto
REMOTE_URL=<TODO: colocar URL> npm run test:e2e
```

Os testes _end-to-end_ já estão concluidos no _boilerplate_, então pode
usá-los como um guia de implementação e lista de verificação de integridade.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 API

Conforme estabelecido pela
[documentação](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
entregue pelo nosso cliente, a API deve expor os seguintes endpoints:

#### 5.1,1 `/`

* `GET /`

#### 5.1.2 `/auth`

* `POST /auth`

#### 5.1.3 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PATCH /users/:uid`
* `DELETE /users/:uid`

#### 5.1.4 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PATCH /products/:productid`
* `DELETE /products/:productid`

#### 5.1.5 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PATCH /orders/:orderId`
* `DELETE /orders/:orderId`

### 5.2 CLI

O cliente solicitou que a aplicação tenha um comando **`npm start`**
que deve ser responsável por executar nossa aplicação node e que também possa
receber informações de configuração, como a porta a ser escutada, qual
banco de dados conectar, etc. Esses dados de configuração serão distintos entre os
diferentes ambientes (desenvolvimento, produção, ...). O _boilerplate_ já implementa
[o código necessário](config.js) para ler esta informação dos
[argumentos de invocação](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
e o
[ambiente](https://nodejs.org/docs/latest/api/process.html#process_process_env).

#### 5.2.1 Argumentos de linha de comando

Podemos especificar a porta onde a aplicação deve iniciar, passando um argumento
ao invocar nosso programa:

```sh
# Inicia a aplicação na porta 8888 usando npm
npm start 8888
```

#### 5.2.2 Variáveis de ambiente

Nossa aplicação usa as seguintes variáveis de ambiente:

* `PORT`: Se nenhuma porta for especificada como argumento da linha de comando
  podemos usar a variable de ambiente `PORT` para especificar a porta. Valor
  por padrão `8080`.
* `DB_URL`: A _string_ de conexão de _MongoDB_, _PostgreSQL_ ou _MySQL_. Quando
  executemos a aplicação em nosso computador (em ambiente de desenvolvimento),
  podemos usar um banco de dados local, mas em produção deveremos usar as
  instâncias configuradas com `docker-compose` (mais sobre isso na seção de
  **Deployment**).
* `JWT_SECRET`: Nossa aplicação implementa autenticação usando JWT (JSON
   Web Tokens). Para assinar (criptografar) e verificar (descriptografar) os tokens,
  nossa aplicação precisa de um segredo. Localmente, pode usar o valor
  padrão (`xxxxxxxx`), mas é muito importante usar um _segredo_ real
  na producção.
* `ADMIN_EMAIL`: Opcionalmente podemos especificar um email e password para
  o usuario admin (root). Se esses detalhes estiverem presentes, a aplicação se
  certificará que exista o usuário e que tenha permissões de administrador. Valor
  por padrão `admin@localhost`.
* `ADMIN_PASSWORD`: Se for especificado um `ADMIN_EMAIL`, devemos passar
  também uma senha para o usuário admin. Valor por padrão: `changeme`.

### 5.3 Implantação (Deployment)

Nosso cliente nos informou que a sua equipe de _devops_ está sempre com muitas
tarefas, portanto, pediu como requesito que a aplicação esteja configurada
com `docker-compose` para que possa ser implantada sem dificuldades em qualquer
ambiente.

O _boilerplate_ já conta com uma configuração incial de `docker-compose` para
a aplicação de node, sua tarefa será estender essa configuração para incluir a
configuração do banco de dados escolhido.
Leve em consideração que como terá dois servidores rodando sobre uma mesma
configuração, deverá colocar os serviços em diferentes portas.

Para este projeto te recomendamos a usar `docker-compose` localmente (em seu
computador) para executar a aplicação junto com a base de dados
selecionada. Por outro lado, em relação a implantação, não é obrigatório usar
`docker-compose`, você pode escolher o provedor (ou provedores) que preferir junto
com o mecanismo de implantação e estratégia de hospedagem. Te recomendamos
explorar as seguintes opcões:

* [Glitch](https://glitch.com) é provavelmente a opção mais _simples_
(requer menos configuração) e nos permite hospedar o servidor web Express
importando nosso repositório do GitHub.
* [Vercel](https://vercel.com/) é uma opção semelhante ao Glitch, mas
focada em aplicativos web estáticos (como os construídos com React).
No entanto, o Vercel também nos permite implantar aplicativos node usando
[Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)
* Se quiser explorar opções mais personalizadas e ver o docker do lado do
servidor, pode considerar provedores como
[AWS (Amazon Web Services)](https://aws.amazon.com/) ou
[GCP (Google Cloud Platform)](https://cloud.google.com/), ambos possuem algum tipo
de serviço experimental gratuito (_free tier_) assim como instâncias de servidores
virtuais (VPS), onde configuramos nosso próprio Docker ou serviços para implantar
aplicações em contêineres (por exemplo [Compute Engine](https://cloud.google.com/compute/docs/containers)
de GCP ou [Elastic Container Service](https://aws.amazon.com/ecs/) de AWS).
* Se quiser trabalhar com MongoDB, [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
é uma opção muito boa para hospedar a base dados de produção, que
podemos usar em conjunto com qualquer uma das opções mencionadas acima.
* Se quiser trabalhar com MySQL, [ClearDB](https://www.cleardb.com/) é uma
boa opção para hospedar a base de dados de produção, que podemos usar em
conjunto com qualquer uma das opções mencionadas acima.

Se tiver dúvidas sobre as diferentes (e múltiplas) opções de implantação,
não hesite em consultar seus colegas e mentores.

## 6. Pistas, tips e leituras complementares

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [MySQL](https://www.mysql.com/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Postman](https://www.getpostman.com)
* [Variável de ambiente - Wikipedia](https://pt.wikipedia.org/wiki/Variável_de_ambiente)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)

***

## 7 HTTP API Checklist

### 7.1 `/`

* [ ] `GET /`

### 7.2 `/auth`

* [ ] `POST /auth`

### 7.3 `/users`

* [ ] `GET /users`
* [ ] `GET /users/:uid`
* [ ] `POST /users`
* [ ] `PATCH /users/:uid`
* [ ] `DELETE /users/:uid`

### 7.4 `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PATCH /products/:productid`
* [ ] `DELETE /products/:productid`

### 7.5 `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderId`
* [ ] `POST /orders`
* [ ] `PATCH /orders/:orderId`
* [ ] `DELETE /orders/:orderId`
