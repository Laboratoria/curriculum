# API de Software de Gestão de Frota - Funcionalidades Opcionais

## [História do usuário 5] Banco de dados local

Eu, como desenvolvedora, preciso instalar e configurar localmente, em meu
computador, o PostgreSQL para não ter restrições de armazenamento do Vercel.

### Critérios de aceitação

Até agora, você usou o
[vercel Postgresql](https://vercel.com/docs/storage/vercel-postgres)
como banco de dados. No entanto, a versão gratuita desse serviço inclui apenas
256 MB de armazenamento, o que é insuficiente para as funcionalidades opcionais.
Portanto, você deverá instalar localmente em seu computador o PostgreSQL e
configurar um banco de dados com as tabelas criadas até o momento.

### Definição de pronto

* O PostgreSQL está instalado localmente em seu computador.
* Foi criado um banco de dados local com as tabelas _trajectories_ e _taxis_.
* O código do seu projeto foi modificado para se conectar ao banco
de dados local.

## [História do usuário 6] Carregar informações no banco de dados

Eu, como desenvolvedora, preciso carregar as informações armazenadas até agora
em arquivos de texto em um banco de dados PostgreSQL para facilitar sua consulta
e análise.

### Critérios de aceitação

Anteriormente, você recebeu as localizações dos táxis em arquivos SQL com comandos
prontos para serem executados no PostgreSQL e carregar as informações.

Agora, você receberá um pouco mais de 17 milhões de localizações em arquivos txt:

* [fleet-management-software-data-part-1.zip](https://storage.googleapis.com/bootcamp-assets/projects/05-fleet-management/fleet-management-software-data-part-1.zip)
* [fleet-management-software-data-part-2.zip](https://storage.googleapis.com/bootcamp-assets/projects/05-fleet-management/fleet-management-software-data-part-2.zip)

Os arquivos `fleet-management-software-data-part-1.zip` e
`fleet-management-software-data-part-2.zip` contêm informações sobre táxis e
localizações. Ao descompactá-los, serão criadas duas pastas: `taxis` e
`trajectories`.

Na pasta `taxis`, você encontrará o arquivo `taxis.txt`. Em cada linha do
arquivo, você encontrará o identificador (ID) e a placa de um táxi. A
informação está separada por vírgulas.

Na pasta `trajectories`, você encontrará 10.357 arquivos com extensão txt.
Cada arquivo contém as localizações de um táxi. O nome do arquivo corresponde
ao identificador do táxi. Por exemplo, o arquivo `9557.txt` contém as
localizações do táxi com identificador 9557. Em cada linha desses arquivos,
você encontrará o identificador do táxi (ID), a data e hora, latitude e
longitude da localização. A informação está separada por vírgulas.

Você deverá desenvolver uma Interface de Linha de Comando (CLI) que carregue
as informações dos arquivos de texto para o banco de dados. No entanto, leve
em consideração que neste projeto você processará mais de 10 mil arquivos e
terá um banco de dados com conexões limitadas. Discuta com uma coach quais
estratégias você pode implementar para que nem o computador nem o banco de
dados morram ao tentar carregar as informações.

A especificação da CLI depende da tecnologia escolhida para o projeto:

* [Java](./README.extension-java.md#carga-masiva-de-información-a-base-de-datos-mediante-una-cli)
* [NodeJs](./README.extension-node.md#carga-masiva-de-información-a-base-de-datos-mediante-una-cli)

### Definição de pronto

* O código da Interface de Linha de Comando (CLI) deve passar por revisão
de código de pelo menos uma colega.
* O código da Interface de Linha de Comando (CLI) deve estar carregado em
um repositório do Github.
* O código da Interface de Linha de Comando (CLI) deve ter testes unitários.

## [História do usuário 7] Tempos de resposta otimizados

Eu, como cliente da API REST, quero que os _endpoints_ resolvam as solicitações
em tempos de resposta otimizados que não afetem a experiência do usuário.

### Critérios de aceitação

Devido à grande quantidade de informações carregadas na
[história do usuário 6](#história-do-usuário-6-cargar-información-a-base-de-datos),
espera-se com **segurança** tempos de resposta lentos se não for planejada uma
estratégia de otimização do banco de dados.

Por exemplo, consultar as 780 localizações do táxi com placa `ABGB-4538` para o
dia `2008-02-02` pode levar cerca de 10 segundos. Para uma usuária da sua API
REST, esse tempo é uma eternidade. Que estratégias você pode implementar para
reduzir os tempos de resposta e melhorar a experiência do usuário?

Algumas estratégias que você poderia tentar são:

* Criar [índices](https://shorturl.at/owR09) na tabela de localizações.
* Implementar um esquema de
[particionamento](https://www.postgresql.org/docs/9.1/ddl-partitioning.html)
na tabela de localizações.
* [Consultar e visualizar progressivamente](https://shorturl.at/ivyBS) a
informação em lotes.

Discuta com uma coach cada uma dessas estratégias e descubra outras que você
pode usar para melhorar o desempenho de sua aplicação.

### Definição de pronto

* O _endpoint_ para consultar todas as localizações de um táxi dado o ID do
táxi e uma data resolve as solicitações em tempos de resposta "razoáveis".
* O _endpoint_ para consultar a última localização reportada por cada táxi
resolve as solicitações em tempos de resposta "razoáveis".

## [História do usuário 8] Endpoint exportação para Excel

Eu, como cliente da API REST, quero um _endpoint_ para exportar em formato
Excel todas as localizações de um veículo em uma data específica.

### Critérios de aceitação

Talvez a primeira alternativa que venha à mente seja adicionar um _endpoint_
à sua API que receba como parâmetro o veículo e a data e retorne um arquivo
Excel para download pelo navegador. No entanto, essa opção costuma ser muito
lenta. Por exemplo, a geração e o download do arquivo Excel com as 33 mil
localizações do veículo `DHOA-9863` para o dia `2008-02-27`
