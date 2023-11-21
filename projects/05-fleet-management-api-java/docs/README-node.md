# Fleet Management Software API NodeJs

## Carga masiva de información a base de datos mediante una CLI

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
  como librería para implementar un servidor HTTP.
* [Prisma](https://www.prisma.io/): cómo
  [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
  para facilitar consultas a la base de datos.
* [Jest](https://jestjs.io/): como framework de pruebas unitarias.
* [Superagent](https://www.npmjs.com/package/superagent): como
  framework de pruebas e2e.
* [Postgresql](https://www.postgresql.org/): como base de datos.
