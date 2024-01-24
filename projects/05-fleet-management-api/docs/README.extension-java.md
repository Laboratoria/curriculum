# Fleet Management Software API

## Carga masiva de información a base de datos mediante una CLI

No olvides compilar la clase UploadGPSData.java antes de ejecutarla con el
siguiente comando.

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

Donde los parámetros requeridos son:

`<path-to-files>`: especifica el directorio de los archivos a cargar.

--type=taxis|trajectories: indica el tipo de archivos a cargarse taxis
o trajectories.

--dbname=dbname: especifica el nombre de la base de datos a la que conectarse.

--host=hostname: especifica el nombre del host de la máquina en la que se
está ejecutando la base de datos.

--port=port: especifica el puerto TCP en el que la base de datos está
escuchando conexiones.

--username=username: especifica el usuario para conectarse a la base
de datos.

_Nota: el CLI debe solicitar la contraseña de conexión a la base de datos.
Por segurisdad esta no puede ser un parámetro._

_De [aquí](https://drive.google.com/file/d/1UIwfWbhZWKWWBZAKMjfze8NswMOQ09du/view?usp=drive_link)
puedes descargar el driver de postgresql_
