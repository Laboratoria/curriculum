# Fleet Management Software API

## Carga masiva de información a base de datos mediante una CLI

A especificação da CLI depende da tecnologia escolhida para o projeto,
mas os [parâmetros para a CLI](#cli-parâmetros) são os mesmos
para qualquer stack.

### Node JS

```bash
node upload-gps-data.js <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```

Leia a explicação de [parâmetros para a CLI](#cli-parâmetros) abaixo.

### Java

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

_De [aqui](https://drive.google.com/file/d/1UIwfWbhZWKWWBZAKMjfze8NswMOQ09du/view?usp=drive_link)
pode descarregar o driver postgresql_

Leia a explicação de [parâmetros para a CLI](#cli-parâmetros) abaixo.

### Python

```bash
python upload-gps-data.py <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```

Leia a explicação de [parâmetros para a CLI](#cli-parâmetros) abaixo.

### C\#

Certifique-se de [compilar](https://learn.microsoft.com/pt-br/dotnet/core/tools/dotnet-build)
seu projeto para gerar um arquivo com a extensão `.dll`,
o qual será necessário para executá-lo mediante o seguinte comando.

```bash
dotnet out/GPSUploader.dll <path-to-files>
--type=taxis|trajectories
--dbname=<dbname>
--host=<hostname>
--port=<port>
--username=<username>
```

Leia a explicação de [parâmetros para a CLI](#cli-parâmetros) abaixo.

## CLI Parâmetros

Onde os parâmetros esperados são:

* `<path-to-files>`: especifica o diretorio dos arquivos a carregar.
* `--type`: indica o [tipo de arquivo](#data)
  a carregar `taxis` ou `tracjetories`
* `--dbname`: especifica o nome da base de dados para se conectar
* `--host`: especifica o nome do host da máquina
  em que se está executando a base de dados
* `--port`: especifica a porta TCP onde a base de
  dados está escutando conexões
* `--username`: especifica o usuario para se conectar na
  base de dados

_Nota: a CLI deve solicitar a senha de conexão com a base de dados.
Por segurança, esta não pode ser um parâmetro._
