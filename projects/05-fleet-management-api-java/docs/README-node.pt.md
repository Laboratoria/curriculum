# Fleet Management Software API NodeJs

## Carregar a informação na base de dados usando uma CLI

```bash
node upload-gps-data.js <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```

## Stack de tecnologías

* [Express](https://expressjs.com/en/starter/hello-world.html):
  como uma biblioteca para implementar um servidor HTTP.
* [Prisma](https://www.prisma.io/): como
  [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
  para facilitar consultas ao banco de dados.
* [Jest](https://jestjs.io/): como uma estrutura de teste unitário.
* [Superagent](https://www.npmjs.com/package/superagent): como
  estrutura de teste e2e.
* [Postgresql](https://www.postgresql.org/): como banco de dados.
