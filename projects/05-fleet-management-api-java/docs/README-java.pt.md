# Fleet Management Software API Java

## Carregar a informação na base de dados usando uma CLI

Não se esqueça de compilar a classe UploadGPSData.java antes de executá-la com
o seguinte comando.

```bash
javac -cp ./path/to/driver.jar UploadGPSData.java
```

Você pode executá-lo com o comando

```bash
java UploadGPSData <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```

## Stack de tecnologías

- [Spring Boot](https://spring.io/projects/spring-boot/): para
  criar aplicações Java
- [Spring Boot Test](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications):
  para testes de integração.
- [JUnit](https://junit.org/junit5/): para testes unitários.
- [Hibernate](https://docs.spring.io/spring-framework/reference/data-access/orm/hibernate.html):
  como [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
  para facilitar consultas ao banco de dados.
- [Postgresql](https://www.postgresql.org/): como base de dados.
