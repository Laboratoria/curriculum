# Fleet Management Software API Java

## Carga masiva de información a base de datos mediante una CLI

No olvides compilar la clase UploadGPSData.java antes de ejecutarla con el seguiente comando.
```bash
javac -cp ./path/to/driver.jar UploadGPSData.java
```

Puedes ejecutarlo con el comando
```bash
java UploadGPSData <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```


## Stack de tecnologías

* [Spring Boot](https://spring.io/projects/spring-boot/): para
  crear aplicaciones Java
* [Spring Boot Test](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications):
  para pruebas de integración.
* [JUnit](https://junit.org/junit5/): para pruebas unitarias.
* [Hibernate](https://docs.spring.io/spring-framework/reference/data-access/orm/hibernate.html):
  cómo [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
  para facilitar consultas a la base de datos.
* [Postgresql](https://www.postgresql.org/): como base de datos.
