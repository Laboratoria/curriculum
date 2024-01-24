# Fleet Management Software API

## Carga masiva de información a base de datos mediante una CLI

```bash
node upload-gps-data.js <path-to-files>
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
