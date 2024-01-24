# Fleet Management Software API

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

Onde os parâmetros esperados são:

`<path-to-files>`: especifica o diretorio dos arquivos a carregar.

`--type=taxis|trajectories`: indica o [tipo de arquivo](#data)
a carregar taxis ou trajetorias.

`--dbname=dbname`: especifica o nome da base de dados para se conectar.

`--host=hostname`: especifica o nome do host da máquina
em que se está executando a base de dados.

`--port=port`: especifica a porta TCP onde a base de
dados está escutando conexões.

`--username=username`: especifica o usuario para se conectar na
base de dados.

_Nota: a CLI deve solicitar a senha de conexão com a base de dados.
Por segurança, esta não pode ser um parâmetro._

_De [aqui](https://drive.google.com/file/d/1UIwfWbhZWKWWBZAKMjfze8NswMOQ09du/view?usp=drive_link)
pode descarregar o driver postgresql_
