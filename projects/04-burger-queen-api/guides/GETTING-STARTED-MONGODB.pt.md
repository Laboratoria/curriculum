# Primeiros passos com o MongoDB

O MongoDB é um banco de dados não relacional e é o mais comum (popular)
atualmente no ecossistema Node.js.

Se você estiver trabalhando com o MongoDB e Docker, é melhor ler primeiro
o guia "Primeiros passos com o Docker". Se você estiver instalando o MongoDB
e desenvolvendo o projeto sem o Docker neste momento, continue lendo este guia.

Depois de criar o seu fork e clonar o repositório em seu computador,
execute o comando npm install para instalar as dependências básicas.
Antes de começar a codificar, precisamos criar nosso ambiente de desenvolvimento.
Recomendamos seguir os seguintes passos:

1. [Instalar o MongoDB e o Compass](#1-instalar-o-mongodb-e-o-compass)
2. [Iniciar o banco de dados e o servidor](#2-iniciar-o-banco-de-dados-e-o-servidor)
3. [Escolher o módulo cliente](#3-escolher-um-módulo-cliente)
4. [Definir esquemas](#4-definir-esquemas)
5. [Implementar as primeiras tarefas (TODOs)](#5-implementar-os-primeiros-todos)
6. [Definir estratégia de testes unitários](#6-definir-estratégia-de-testes-unitários)
7. [Familiarizar-se com os testes de integração (e2e)](#7-familiarizar-se-com-os-testes-de-integração-e2e)

## 1. Instalar o MongoDB e o Compass

O site do MongoDB possui tutoriais sobre como instalar a [Community Edition](https://www.mongodb.com/docs/compass/current/install/).
Escolha sua plataforma (Windows, Mac, Ubuntu, etc.) e siga [o tutorial](https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials).

Nos tutoriais, você irá baixar e instalar o MongoDB em seu sistema,
juntamente com algumas ferramentas e comandos para usar no terminal.

Recomendamos também que você instale o [Compass](https://www.mongodb.com/products/compass),
que é uma GUI (Interface Gráfica do Usuário) para interagir com o banco de dados.
Você pode interagir com o MongoDB sem o Compass apenas no terminal, mas uma
GUI pode ajudá-lo a visualizar e entender o que está no banco de dados.
Siga [as instruções de instalação do Compass](https://www.mongodb.com/docs/compass/current/install/)).

## 2. Iniciar o banco de dados e o servidor

Podemos dizer que este projeto possui dois "serviços":
um é o banco de dados para armazenar produtos, usuários, etc.,
e o outro é o servidor para expor a API.

Esses serviços precisam estar em execução para que a API funcione.

Iniciar o servidor é bastante simples: execute `npm start` para executar
o arquivo [`index.js`](../index.js), que contém a lógica básica de
um servidor com Express.

Como iniciar o servidor depende da sua instalação e sistema.
Por exemplo, no macOS, se você instalou com o homebrew, pode usar o comando
`brew services start mongodb-community@6.0` para iniciá-lo.
Ou, sem o homebrew, utilize `mongod --config /usr/local/etc/mongod.conf --fork`.
No Windows, é necessário iniciar o serviço pelo console de serviços.

Consulte o
[guia de instalação para macOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition),
[guia de instalação para Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service)
ou a documentação específica da sua instalação para obter exemplos de como
iniciar o servidor.

## 3. Escolher um módulo (cliente)

Agora que já temos um servidor de banco de dados, precisamos escolher
um módulo ou biblioteca projetado para interagir com nosso banco de dados
a partir do Node.js. Existem muitas opções, mas para este projeto,
recomendamos o uso do [Node.js driver do MongoDB](https://www.mongodb.com/docs/drivers/node/current/)
que é a forma mais direta de interagir com sua instância do MongoDB.

É necessário instalar o Node.js Driver neste projeto usando o `npm`,
[verifique os documentos para mais informações](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/#install-the-node.js-driver).

O _boilerplate_ já inclui um arquivo config.js onde as variáveis
de ambiente são lidas, e uma delas é DB_URL. Conforme podemos ver,
esse valor está sendo atribuído à propriedade dbUrl do módulo config.

```js
// `config.js`
exports.dbUrl = process.env.MONGO_URL || process.env.DB_URL || 'mongodb://127.0.0.1:27017/test';
```

Agora que sabemos onde encontrar a _connection string_ (no módulo config),
podemos prosseguir e estabelecer uma conexão com o banco de dados usando
o cliente escolhido.

### Exemplo de conexão usando o driver do MongoDB para Node.js

```js
const { MongoClient } = require('mongodb');
const config = require("./config");

async function connect() {
  try {
    await client.connect();
    const db = client.db(<NOMBRE_DB>); // Reemplaza <NOMBRE_DB> por el nombre del db
    return db;
  } catch (error) {
    //
  }
}
```

Você pode encontrar mais exemplos
[na documentação do MongoDB](https://www.mongodb.com/docs/drivers/node/current/).

## 4. Definir esquemas

Como parte do processo de design do nosso banco de dados, precisamos
especificar os "esquemas" dos nossos "modelos" de dados. Isso significa
que precisamos descrever de alguma forma a estrutura das coleções que
vamos usar e a forma dos objetos que vamos armazenar nessas coleções.

Você pode usar [a documentación de API](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
que descreve a estrutura de `products`, `orders`, etc. para orientar o design.

## 5. Implementar os primeiros TODOs

O boilerplate do projeto vem com arquivos contendo a lógica para iniciar o
servidor e outros que contêm funções de rotas e autenticação, mas muitos deles estão
vazios. Marcamos as primeiras partes essenciais com comentários
"TODO" (em inglês, `a fazer`), que é uma convenção no desenvolvimento de software
para indicar algo a ser feito.

Aqui vamos orientá-lo um pouco sobre esses TODOs.

### TODO 1: Conectar a la base de datos

No arquivo `connect.js`, é necessário conectar ao banco de dados..

```js
const { dbUrl } = config;

async function connect() {
  // TODO: Database Connection
}
```

Aqui você deve usar o `dbUrl` que importamos do config para estabelecer a conexão.
As funções que vão interagir com o banco de dados devem invocar o `connect`.

### TODO 2: Criar o usuário _admin_

O projeto depende da existência de um usuário no banco de dados que possui privilégios
de administrador, para que seja possível criar outros usuários, etc.

No arquivo `routes/users.js`  invocamos a função `initAdminUser(app, next)`
no final do arquivo, e definimos essa função acima, no mesmo arquivo.

A função `initAdminUser` está incompleta e há um TODO para criar o usuário admin,
onde você precisa primeiro verificar se um admin já existe e, caso contrário,
adicioná-lo ao banco de dados.

```js
const initAdminUser = (app, next) => {
  const { adminEmail, adminPassword } = app.get('config');
  if (!adminEmail || !adminPassword) {
    return next();
  }

  const adminUser = {
    email: adminEmail,
    password: bcrypt.hashSync(adminPassword, 10),
    roles: { admin: true },
  };

  // TODO: Create admin user
  next();
};

Você pode confirmar se o seu código funciona verificando o banco de
dados e realizando um teste unitário.

```

### TODO 3: Implementar autenticación de usuario

En routes/auth.js, a rota '/login' está definida com um

```js
 // TODO: Authenticate the user
 ```

Aqui é onde você deve verificar se o email e a senha correspondem aos dados de
algum usuário no banco de dados. Se coincidirem, é necessário gerar um
[token JWT](https://jwt.io/introduction)
e enviá-lo na resposta, para que o usuário possa usá-lo em suas futuras
solicitações. Para exemplos mais detalhados, procure tutoriais de autenticação
com JWT e node/express.

### TODO 4: Implementar o middleware de autenticação

Em `middleware/auth.js`, existem vários TODOs.
Aproveite esta oportunidade para se familiarizar com o
[conceito de middleware no express](https://expressjs.com/es/guide/using-middleware.html).

A aplicação usará esse middleware para verificar se as solicitações que exigem
autenticação são autorizadas, ou seja, se possuem um token válido.

### TODO 5: Implementar a rota GET `/users`

Para reunir e verificar todo o trabalho que você fez, seria bom implementar
uma rota básica da API, neste caso, recomendamos `/users` porque você já deve
ter o usuário admin em seu banco de dados, e também porque essa rota usa o
middleware de autenticação.

Você verá que a rota `/users` usa a função `getUsers` que está definida
em `controller/users.js`.
O conceito de controller é usado para separar ainda mais a lógica da
definição de rotas da implementação que irá interagir com o banco de dados.
É necessário implementar a função `getUsers` para obter a lista de
usuários da coleção em seu banco de dados.

Consulte o [tutorial de Node.js e express na Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
que aborda os controllers.

## 6. Definir estratégia de testes unitários

Além dos testes `e2e` já incluídos no boilerplate do projeto, espera-se
que você também possa usar testes unitários para o desenvolvimento
dos diferentes endpoints ou rotas, bem como outros módulos internos
que decidir desenvolver.

Para realizar testes unitários em `rotas` do Express,
recomendamos explorar a biblioteca [`supertest`](https://www.npmjs.com/package/supertest),
, que pode ser usada em combinação com o `jest`.

Outro ponto a ser considerado nos testes unitários é como fazer `mock` do banco
de dados. Alguns bancos de dados oferecem ferramentas (como o
[`mongodb-memory-server`](https://github.com/nodkz/mongodb-memory-server)) que nos
permitem usar um banco de dados em memória e evitar a necessidade de criar `mocks`
propriamente ditos. No entanto, geralmente queremos considerar como
abstrair a interação com o banco de dados para facilitar os `mocks` que nos
permitirão focar na lógica das rotas.

## 7. Familiarizar-se com os testes de integração (e2e)

O _boilerplate_ deste projeto já inclui testes `e2e` (end-to-end) ou
de integração, que são responsáveis por testar nossa aplicação como um
todo, por meio da interface HTTP. Ao contrário dos testes unitários,
em vez de importar ou exigir um módulo e testar uma função isoladamente,
iremos iniciar toda a aplicação e testá-la como seria usado no mundo real,
para isso, a aplicação de teste precisará de um banco de dados e escutar em
uma porta de rede.

Para executar testes `e2e` em uma instância local, podemos usar:

```sh
npm run test:e2e
```

Isso inicia a aplicação com npm start e executa os testes contra a
URL desta instância (por padrão, `http://127.0.0.1:8080`).

Os testes e2e dependem do código (`globalSetup.js`)[../e2e/globalSetup.js]
que o jest executa primeiro, antes dos testes. Essa etapa de configuração
inicia um banco de dados falso (como mencionamos anteriormente, usando o
[`mongodb-memory-server`](https://github.com/nodkz/mongodb-memory-server))
e o jest se conecta a esse banco de dados falso.

Para essa configuração, usamos o mongodb-memory-server e um preset
[`jest-mongodb`](https://github.com/shelfio/jest-mongodb)
que ya están incluido en el boilerplate.
