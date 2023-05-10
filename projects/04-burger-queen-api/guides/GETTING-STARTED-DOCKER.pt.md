# Primeiros passos

Depois de criar o fork e clonar o repositório em seu computador,
antes de começar a codificar, precisamos criar nosso _ambiente de desenvolvimento_.
Recomendamos que você siga as etapas a seguir:

* [1. Escolher o banco de dados](#1-elegir-base-de-datos)
* [2. Instalar `docker` e `docker-compose`](#2-instalar-docker-y-docker-compose)
* [3. Configurar o "serviço" de banco de dados](#3-configurar-servicio-de-base-de-datos)
* [4. Configurar a conexão com o banco de dados no "serviço" node](#4-configurar-conexión-a-bbdd-en-servicio-node)
* [5. Iniciar, reiniciar e parar os serviços com `docker-compose`](#5-iniciar-re-iniciar-y-parar-los-servicios-con-docker-compose)
* [6. Familiarizar-se com a administração de contêineres](#6-familiarizarte-con-admisitración-de-contenedores)
* [7. Opcionalmente, instalar uma interface gráfica para administrar dados](#7-opcionalmente-instalar-interfaz-gráfica-para-administrar-data)
* [8. Execute os testes de integração (e2e)](#8-corre-las-pruebas-de-integración-e2e)

***

## 1. Escolher o banco de dados

A primeira decisão que devemos tomar antes de começar a programar é escolher
um banco de dados. Neste projeto, sugerimos 3 opções: duas delas são relacionais
e baseadas em SQL (PostgreSQL e MySQL), e a terceira é não relacional (MongoDB).
As 3 são excelentes opções. Recomendamos o uso do MongoDB
para o seu primeiro projeto backend.

Alguns pontos a serem considerados:

* O MongoDB é o mais comum (popular) atualmente no ecossistema Node.js.
* Bancos de dados _relacionais_ normalmente exigem mais design prévio
(definir tabelas, colunas, relacionamentos, ...) enquanto os _não relacionais_
nos permitem ser mais flexíveis.
* Bancos de dados _relacionais_ nos permitem relacionar dados de forma mais
natural e garantir a consistência dos dados. Eles fornecem rigidez que reduz
a flexibilidade, mas oferecem outros tipos de garantias, além de nos permitir
pensar em tabelas e colunas, que é um conceito com o qual muitos já estão
familiarizados.
* O MySQL, o PostgreSQL e o MongoDB (nessa ordem) são os bancos de dados de
código aberto (open source) mais populares em dezembro de 2020](https://www.statista.com/statistics/809750/worldwide-popularity-ranking-database-management-systems/).
Isso no contexto geral dos bancos de dados, não apenas no ecossistema do Node.js.
* PostgreSQL é um banco de dados _objeto-relacional_ (ORDBMS), enquanto
o MySQL é puramente relacional. O PostgreSQL possui suporte nativo para objetos
JSON e outras características, como indexação de JSON.

## 2. Instale o docker e o docker-compose

Independentemente do banco de dados que você escolher, neste projeto iremos executar
localmente (em nosso computador) o servidor de banco de dados usando
contêineres do Docker, em vez de instalar o programa diretamente em nosso
computador. Além disso, também iremos usar a ferramenta `docker-compose` para
orquestrar nossos contêineres: banco de dados e servidor web (node).

Nos seguintes links, você pode ver como instalar o `docker` e o `docker-compose` em
seu sistema operacional.

* [Get Docker](https://docs.docker.com/get-docker/)
* [Install Docker Compose](https://docs.docker.com/compose/install/)

## 3. Configurando o "serviço" de banco de dados

O boilerplate deste projeto inclui um arquivo
[`docker-compose.yml`](./docker-compose.yml) que já contém parte da
configuração do `docker-compose`. Neste arquivo, você verá que existem dois
serviços listados: `db` e `nod`e. Nossa aplicação consistirá em dois servidores:
um servidor de banco de dados (o serviço `db`) e um servidor web implementado
em Node.js (o serviço `node`).

Na seção correspondente ao serviço `db`, existem três coisas importantes que
precisaremos completar:

* Qual _imagem_ (`image`) queremos usar. Imagens recomendadas:
  [mongo](https://hub.docker.com/_/mongo),
  [postgres](https://hub.docker.com/_/postgres) y
  [mysql](https://hub.docker.com/_/mysql).
* Quais volumes (`volumes`), arquivos ou pastas queremos mapear para o
  contêiner, como por exemplo, o diretório de dados (a pasta onde o
  banco de dados irá armazenar seus arquivos).  
* As variáveis de ambiente (`environment`) necessárias para configurar nosso
  banco de dados e usuários. Esses dados serão utilizados posteriormente
  para configurar a conexão a partir do Node.js.

Exemplo de serviço `db` usando: [MongoDB](https://hub.docker.com/_/mongo):

```yml
db:
  image: mongo:4
  volumes:
    - ./db-data:/data/db
  environment:
    MONGO_INITDB_ROOT_USERNAME: bq
    MONGO_INITDB_ROOT_PASSWORD: secret
  restart: always
  networks:
    - private
```

Exemplo de serviço `db` usando [PostgreSQL](https://hub.docker.com/_/postgres):

```yml
db:
  image: postgres:13
  volumes:
    - ./db-data:/var/lib/postgresql/data
  environment:
    POSTGRES_PASSWORD: secret
  restart: always
  networks:
    - private
```

Exemplo de serviço `db` usando [MySQL](https://hub.docker.com/_/mysql):

```yml
db:
  image: mysql:5
  volumes:
    - ./db-data:/var/lib/mysql
  environment:
    MYSQL_ROOT_PASSWORD: supersecret
    MYSQL_DATABASE: bq
    MYSQL_USER: bq
    MYSQL_PASSWORD: secret
  restart: always
  networks:
    - private
```

## 4. Configurar conexão ao BD no serviço node

Agora que temos a configuração do serviço db, precisamos completar a configuração do
serviço Node.js. Em particular, queremos definir o valor da variável de ambiente `DB_URL`,
onde colocaremos a connection string correspondente ao nosso banco de dados. 
Esta string de conexão segue o formato de URL e se parece com isso:

```text
protocol://username:password@host:port/dbname?opt1=val1&...
```

Aqui, substituiremos `protocol` pelo nome do protocolo do banco de dados
escolhido (`mongodb`, `postgresql` ou `mysql`), e `username`, `password` e `dbname`
pelos valores usados na configuração do serviço db no ponto anterior.
Neste caso, o valor de host será `db`, que é o nome do serviço de banco de dados
na configuração do `docker-compose.yml`, e podemos nos referir a ele pelo nome
na rede interna entre os contêineres. 
Seguindo os exemplos do ponto anterior, a variável `DB_URL` no `docker-compose.yml`
seria assim:

* MongoDB:

  ```yml
  DB_URL: mongodb://bq:secret@db:27017/bq?authSource=admin
  ```

* PostgreSQL:

  ```yml
  DB_URL: postgresql://postgres:secret@db:5432/postgres?schema=public
  ```

* MySQL:

  ```yml
  DB_URL: mysql://bq:secret@db:3306/bq
  ```

## 5. Iniciar, reiniciar e parar os serviços com `docker-compose`

Agora que temos nossa configuração do docker-compose pronta, 
vamos ver como podemos iniciar a aplicação.
Para isso, usamos o comando `docker-compose up` dentro da pasta do
nosso projeto (onde está o arquivo `docker-compose.yml`).

```sh
docker-compose up
```

Para interromper o comando e ter o terminal de volta ao _prompt_, você pode usar a 
combinação de teclas `Ctrl + C`.

Se usarmos o comando dessa forma, sem opções, ele iniciará todos os serviços
descritos no `docker-compose.yml`. Alternativamente, podemos iniciar um serviço
específico adicionando o nome do serviço ao comando.
Por exemplo, se quisermos iniciar apenas o serviço de banco de dados:

```sh
docker-compose up db
```


Também temos a opção de iniciar os serviços e executá-los em segundo plano,
como _daemons_, usando a opção `-d`, para que o prompt seja 
imediatamente retornado e os serviços continuem em execução.

```sh
docker-compose up -d
```

Além do comando `docker-compose up`, que constrói, (re)cria, inicia e se conecta
aos contêineres de um serviço, também temos comandos disponíveis para
iniciar (`start`), reiniciar (`restart`) e parar (`stop`) serviços com contêineres
já existentes.

```sh
docker-compose start
docker-compose stop
docker-compose restart
```

Assim como com `docker-compose up`, com esses outros comandos também podemos
especificar com qual serviço queremos interagir (ou com todos, se não for especificado).
Por exemplo, para iniciar, reiniciar e depois parar o servidor de banco de dados:

```sh
docker-compose start db
docker-compose stop db
docker-compose restart db
```

## 7. Familiarize-se com a administração de contêineres

Além dos comandos que já vimos com `docker-compose`, recomendamos
que você se familiarize com outros comandos (entre outros) para poder _administrar_
seus contêineres.

O comando `docker-compose ps` exibe uma lista com os contêineres _ativos_:

```sh
docker-compose ps
```

Também podemos listar _todos_ os contêineres, incluindo os que estão parados,
usando a opção `-a`:

```sh
docker-compose ps -a
```

Para remover os contêineres dos serviços:

```sh
docker-compose rm
```

Assim como nos comandos anteriores, também podemos remover os contêineres
de um serviço específico indicando seu nome:

```sh
docker-compose rm db
```

Por fim, quando executamos nossos serviços em segundo plano, como_ daemons_, para nos
conectarmos aos contêineres e vermos os _logs_, podemos usar:

```sh
docker-compose logs
```

Podemos adicionar também a opção `-f` para fazer streaming dos logs e ficar ouvindo
 assim como especificar um serviço em particular. Por exemplo:

```sh
docker-compose logs -f db
```

Lembre-se de sempre consultar a _ajuda_ do `docker-compose` com o comando `help`.
Por exemplo, se quisermos ver a ajuda do subcomando up, poderíamos fazer isso:

```sh
docker-compose help up
```

## 8. Opcionalmente, instale uma interface gráfica para administrar dados

Ao trabalhar com bancos de dados, é muito comum usar algum tipo de interface gráfica que
nos permita visualizar e manipular nossos dados de forma visual.
Existem opções para cada banco de dados. Recomendamos as seguintes:

[Compass](https://www.mongodb.com/products/compass) (MongoDB),
[Workbench](https://www.mysql.com/products/workbench/) (MySQL),
[pgAdmin](https://www.pgadmin.org/) (PostgreSQL).

Se você deseja usar esse tipo de ferramenta (como o `Compass` ou o `Workbench`),
provavelmente precisará tornar seu banco de dados visível fora do Docker.
Para fazer isso, você pode mapear a porta do banco de dados no contêiner
para uma porta disponível no host do Docker (normalmente, seu computador).
Normalmente, vamos mapear essas portas padrão (por exemplo, `27017` para o MongoDB)
para números de porta diferentes, pois esses programas e/ou suas portas podem estar
em uso. Por exemplo, se estivermos usando o MongoDB, poderíamos adicionar
o seguinte mapeamento de portas ao serviço db em nosso `docker-compose.yml`:

```yaml
ports:
  - 28017:27017
```

Ao listar as portas de um contêiner ou serviço no `docker-compose.yml`,
tenha em mente que o número à direita é a porta no contêiner (rede privada do Docker),
enquanto o número à esquerda é a porta no host do Docker
(geralmente o seu computador - `127.0.0.1` ou `localhost`).
No exemplo acima, estamos "mapeando" a porta `27017` do contêiner para a porta `28017`
do host do Docker.

Se você estiver usando PostgreSQL ou MySQL, as portas que gostaríamos de mapear
seriam `5432` e `330`6, respectivamente.

Se estamos "expondo" a porta em nosso computador (o "host"),
também será necessário conectar o contêiner `db` à rede "pública":

```yaml
networks:
  - public
  - private
```

Após essa alteração, você poderá acessar usando `127.0.0.1` ou `localhost`
e a porta à qual mapeamos, `28017` neste exemplo.

Se você escolher o [pgAdmin](https://www.pgadmin.org/) (PostgreSQL),
a opção mais fácil é usar o pgAdmin como um contêiner e adicioná-lo
como um novo serviço ao nosso `docker-compose.yml`. Por exemplo:

```yml
pgadmin:
  image: dpage/pgadmin4
  restart: always
  environment:
    PGADMIN_DEFAULT_EMAIL: user@domain.com
    PGADMIN_DEFAULT_PASSWORD: secret
  ports:
    - 8088:80
  networks:
    - public
    - private
```

NOTA: Para conectar desde pgAdmin usando um contêiner, use o _nome_ do contêiner
do banco de dados (por exemplo: `XXX-001-burger-queen-api_db_1`) como nome do host
para que o pgAdmin possa se conectar através da rede _privada_.

## 11. Execute os testes de integração (e2e)

O _boilerplate_ deste projeto já inclui testes `e2e` (end-to-end) ou de integração,
que são responsáveis por testar nossa aplicação como um todo, através da interface HTTP.
Ao contrário dos testes unitários, onde importamos ou requeremos um módulo e testamos
uma função de forma isolada, aqui iremos iniciar toda a aplicação e testá-la como
se estivéssemos usando no mundo real. Para isso, os testes de integração
precisarão de um banco de dados e estarão ouvindo em uma porta de rede.

Para executar os testes e2e em uma instância local, podemos usar:

```sh
npm run test:e2e
```

Isso iniciará a aplicação com `npm start` e executará os testes na
URL desta instância (por padrão `http://127.0.0.1:8080`).
Isso pressupõe que o banco de dados esteja disponível.

Alternativamente, e talvez mais fácil de usar, podemos iniciar nossa aplicação
usando `docker-compos`e`, ou até mesmo em produção, e em seguida, executar os
testes e2e passando a URL da aplicação na variável de ambiente `REMOTE_URL`.
Por exemplo:

```sh
REMOTE_URL=http://127.0.0.1:8080 npm run test:e2e
```

Ao especificar R`EMOTE_URL`, os testes não tentarão _iniciar_ um servidor local,
mas usarão diretamente a URL fornecida, assumindo que a aplicação esteja disponível
nessa URL. Isso nos permite testar também em URLs remotas. Por exemplo:

```sh
REMOTE_URL=https://api.my-super-app.com npm run test:e2e
```
