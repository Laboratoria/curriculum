# Artist Launch

## Índice

* [1. Considerações gerais](#1-Considerações-gerais)
* [2. Preâmbulo](#2-Preâmbulo)
* [3. Resumo do projeto](#3-Resumo-do-projeto)
* [4. Plano geral de trabalho](#4-Plano-geral-de-trabalho)
* [5. Plano-detalhado-de-trabalho](#5-Plano-detalhado-de-trabalho)
* [6. Considerações para solicitar seu Feedback do Projeto](#6-Considerações-para-solicitar-seu-Feedback-do-Projeto)
* [7. Self review](#7-self-review)
* [8. Objetivos de aprendizaje](#8-Objetivos-de-aprendizaje)

***

## 1. Considerações gerais

* Este projeto será realizado em **duplas**.
* O tempo estimado para concluir o projeto é de 2 a 4 Sprints.
* Foque em aprender e não apenas em "concluir" o projeto.

## 2. Preâmbulo

![Um microfone e ao fundo um guitarrista](https://images.unsplash.com/photo-1535712593684-0efd191312bb)

_Crédito: Foto de [Daniel Chekalov](https://unsplash.com/@dchuck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_
_em [Unsplash](https://unsplash.com/photos/guitarist-holding-black-guitar-4YhwiEsL0AQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_

A validação de hipóteses é um processo fundamental na tomada de
decisões baseadas em evidências, e não somente em crenças ou
opiniões. Na análise de dados, é comum levantar suposições ou
hipóteses sobre relações, tendências ou diferenças entre as variáveis
dos dados disponíveis. A validação dessas hipóteses (confirmar ou
refutar) é realizada com técnicas e métodos projetados para determinar se
os resultados observados nos dados são estatisticamente
significativos ou se podem ser atribuídos ao acaso.

A formulação e validação de hipóteses
pode ser utilizada em uma variedade de contextos e mercados para, por
exemplo, planejar estratégias de marketing, estabelecer políticas de
preços, avaliar investimentos, entender melhor o comportamento do
mercado e dos consumidores. Ou seja, para tomar todo tipo de decisões
estratégicas.

Alguns exemplos:

* Mercado da moda:

Hipótese: Mudar o design do logotipo de uma marca de moda líder
aumentará o apelo da marca entre os consumidores jovens.

Análise: Poder-se-ia realizar um teste em que se mostre o novo e
o antigo logotipo a um grupo de consumidores e se recolham suas
opiniões (dados) para determinar se a nova imagem da marca é mais
atraente para o público-alvo.

* Mercado de tecnologia:

Hipótese: Reduzir o preço de um produto tecnológico resultará em um
aumento na participação de mercado.

Análise: Poder-se-iam realizar testes de preços em diferentes
localizações geográficas ou períodos de tempo para avaliar se essa
redução de preço leva a um aumento na participação de mercado.

* Mercado de imóveis:

Hipótese: A proximidade de escolas de alta qualidade aumenta o valor das
propriedades residenciais.

Análise: Poder-se-iam comparar os preços das propriedades localizadas
próximas a escolas de alta qualidade com as que não estão para
determinar se a hipótese é válida.

## 3. Resumo do projeto

Neste projeto, vamos explorar um conjunto de dados com o objetivo de
identificar padrões ou características que possam influenciar na
popularidade (quantidade de streams) de uma música em plataformas como
Spotify, Apple Music e Deezer.

Uma gravadora enfrenta o emocionante desafio de
lançar um novo artista no cenário musical global. Felizmente,
conta com uma ferramenta poderosa em seu arsenal: um extenso dataset do
Spotify com informações sobre as músicas mais ouvidas em 2023.

A gravadora levantou uma série de hipóteses sobre o que faz com que uma
música seja mais ouvida. Essas hipóteses incluem:

* As músicas com um maior BPM (Batidas Por Minuto) têm mais sucesso em
  termos de quantidade de streams no Spotify.

* As músicas mais populares no ranking do Spotify também têm um
  comportamento similar em outras plataformas como Deezer.

* A presença de uma música em um maior número de playlists está
  relacionada com um maior número de streams.

* Os artistas com um maior número de músicas no Spotify têm mais
  streams.

* As características da música influenciam no sucesso em termos de
  quantidade de streams no Spotify.

Como analista de dados,
o desafio consiste em **determinar os fatores que contribuem para o sucesso
de uma música**. Você deverá validar (refutar ou confirmar) essas hipóteses
por meio da análise dos dados, e fornecer recomendações estratégicas
baseadas em suas descobertas. Em última análise, o objetivo é que a
gravadora e o novo artista possam tomar decisões informadas que
aumentem suas chances de conseguir o “sucesso”.

## 4. Plano geral de trabalho

Vamos trabalhar no processo sequencial descrito na seguinte
imagem.

![image](https://drive.google.com/uc?id=1GBP2hLKqNpADEJ6Aa4EkKwd4oBNNnLMj)

**Cada passo representa também o desenvolvimento de uma habilidade** necessária para
desempenhar-se como analista de dados. É sequencial porque conseguir
cada passo depende de ter feito o anterior, não faria sentido aplicar
uma técnica de análise sem previamente ter preparado os dados nem sem
ter feito uma análise exploratória.

Isso não quer dizer de maneira alguma que você deve completar cada passo
perfeitamente antes de passar para o próximo ou que não terá que avançar e
retroceder constantemente. O processo provavelmente será algo assim:

![image](https://drive.google.com/uc?id=1Pz_zrJxwH_qJRDfwwdvYmfeudtc72d0_)

Por exemplo, ao fazer uma análise exploratória, talvez você detecte que há
algum aspecto da sua preparação de dados que deve ser melhorado, então
você volta, melhora isso e depois continua. Este é um processo natural
em que você irá adaptando seu trabalho conforme os “problemas” que
for encontrando, mas sempre seguindo uma lógica.

## 5. Plano detalhado de trabalho

Na imagem a seguir, é descrito o plano de trabalho detalhado
que seguiremos.

![image](https://drive.google.com/file/d/1Yftgpw7uL0AIBMkuu6XDS9Wta3yHbe-J/view)

### ⬜ Passo 0. Preparação

#### 0.1 Ferramentas e/ou plataformas

Neste projeto, você vai utilizar uma ferramenta do Google chamada
BigQuery, para o gerenciamento dos dados, e uma ferramenta chamada
Looker Studio para a visualização dos dados:

* BigQuery
* Looker Studio

#### 0.2 Linguagens

Você utilizará a linguagem SQL no BigQuery. Note a
diferença entre “linguagem” (SQL) e “ferramenta” (BigQuery), na seção de
recursos de cada meta você encontrará cursos de SQL que podem ajudá-lo a compreender
essas linguagens e como usá-las nessas ferramentas.

#### 0.3 Insumos

Este conjunto de dados contém informações sobre as músicas mais
reproduzidas no Spotify em 2023. Os dados estão divididos em 3 tabelas, a
primeira sobre o desempenho de cada música no Spotify, a segunda com
o desempenho em outras plataformas como Deezer ou Apple Music, e a
terceira com as características dessas músicas.

O conjunto de dados está disponível para download neste link
[dataset](https://storage.cloud.google.com/bootcamp-assets/projects/05-artist-launch/spotify_2023.zip),
tenha em mente que é um arquivo compactado, você terá que descompactá-lo
para acessar os arquivos com os dados.

A seguir, você pode consultar a descrição das variáveis que
compõem as tabelas deste conjunto de dados:

##### **Track_in_spotify**

* **track_id**: Identificador único da música. É um número inteiro
  de 7 dígitos que não se repete
* **track_name**: Nome da música
* **artist(s)_name**: Nome do(s) artista(s) da música
* **artist_count**: Número de artistas que contribuem para a música.
* **released_year**: Ano em que a música foi lançada.
* **released_month**: Mês em que a música foi lançada.
* **released_day**: Dia do mês em que a música foi lançada.
* **in_spotify_playlists**: Número de playlists do Spotify
  em que a música está incluída
* **in_spotify_charts**: Presença e ranking da música nas listas
  do Spotify
* **streams**: Número total de transmissões no Spotify. Representa a
  quantidade de vezes que a música foi ouvida.

##### **Track_in_competition**

* **track_id**: Identificador único da música. É um número inteiro
  de 7 dígitos que não se repete
* **in_apple_playlists**: Número de playlists da Apple
  Music em que a música está incluída
* **in_apple_charts**: Presença e ranking da música nas listas de
  Apple Music
* **in_deezer_playlists**: Número de playlists do Deezer em
  que a música está incluída
* **in_deezer_charts**: Presença da música nas listas do
  Deezer
* **in_shazam_charts**: Presença da música nas listas do
  Shazam

##### **Track_technical_info**

* **track_id**: Identificador único da música. É um número inteiro
  de 7 dígitos que não se repete
* **bpm**: Batidas por minuto, uma medida do tempo da música.
* **key**: Tom musical da música
* **mode**: Modo da música (maior ou menor)
* **danceability_%**: Percentual que indica quão adequada é a
  música para dançar
* **valence_%**: Positividade do conteúdo musical da música.
* **energy_%**: Nível de energia percebido da música.
* **acousticness_%**: Quantidade de som acústico na música.
* **instrumentality_%**: Quantidade de conteúdo instrumental na
  música.
* **liveness_%**: Presença de elementos de performance ao vivo.
* **speechiness_%**: Quantidade de palavras faladas na música.

#### 0.4 Boas práticas

Documentar seu processo é uma das melhores
práticas na análise de dados. Aqui estão duas sugestões adicionais para
se organizar neste projeto, especificamente para a fase de
processamento e preparação dos dados:

* Faça consultas que permitam identificar todos os elementos que
  deverão ser limpos. Ao terminar, faça uma consulta completa para criar
  uma tabela com os dados limpos, em vez de criar uma tabela em cada
  passo.

* Salve as consultas e descreva o que cada uma delas faz. Crie um
  repositório onde você possa armazenar todos os
  recursos e use comentários para descrever
  para que serve cada um. Isso te ajudará em projetos futuros a
  lembrar como identificar valores nulos, por exemplo.

* Compreenda a diferença entre view (vista) e tabela para se organizar.
  Muitas vezes, salvar uma vista te ajuda a trabalhar de uma maneira mais
  organizada e você pode ver a consulta que gerou essa vista e modificá-la
  rapidamente.

### 🟦 Passo 1. Processar e preparar banco de dados

⌛ **Tempo estimado: De 8 a 12 horas**

O pré-processamento de dados não é uma etapa que pode ser ignorada
na análise de dados. Sua importância é evidente na qualidade dos
resultados obtidos. Quando os dados são processados e preparados de maneira
inadequada, podem surgir vieses, erros e conclusões incorretas.
Além disso, o ruído nos dados sem tratamento pode prejudicar a precisão
das previsões e a qualidade das decisões baseadas na
análise. Portanto, investir tempo e esforço na fase inicial de
pré-processamento é recompensado ao longo de todo o processo de análise
de dados, garantindo resultados mais confiáveis e significativos.

Neste marco, trabalharemos com uma ferramenta chamada BigQuery para
realizar a etapa de processamento e preparação dos dados. A
linguagem SQL, utilizada nesta ferramenta, é amplamente utilizada no
ambiente de trabalho e um bom analista de dados deve saber utilizá-la a
seu favor.

BigQuery é um serviço de armazenamento e análise de dados na nuvem
proporcionado pelo Google Cloud. Ele é projetado para permitir que as
organizações armazenem, consultem e analisem grandes volumes de
dados de maneira rápida e escalável. O BigQuery é comumente utilizado em
todas as fases da análise de dados, incluindo a fase de
processamento e preparação, devido às suas capacidades de processamento
de dados e sua escalabilidade.

| Meta                                                                 | Objetivo                                                                                                       | Objetivo individual                                                                                                                                                                                                                                                                                                                                                                                                                     | Recurso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔵 Conectar/importar dados a outras ferramentas                      | Criar no BigQuery um projeto, um conjunto de dados e importar tabelas                                          | <ul><li>Você deve criar seu próprio ambiente de trabalho no BigQuery com sua conta do Google. </li><li>Neste caso, nos referimos a criar um projeto, um dataset (do BigQuery) e carregar as tabelas do dataset que fornecemos a você. </li><li>Vocês devem se coordenar para que sigam a mesma estrutura de projeto no BigQuery e os mesmos nomes de tabelas, assim será mais fácil trabalhar em conjunto e compartilhar códigos. </li><ul>        | <ul><li>🚨  Altamente recomendado: [Mini curso BigQuery:](https://coda.io/d/Curso-Google-BigQuery_dhocNT3PUIE/Introduccion_su3UO#_luO8s)  Aqui você encontrará como configurar seu Sandbox e como fazer suas primeiras consultas. </li><li> 📄 [Como começar com BigQuery (sandbox - versão gratuita)](https://cloud.google.com/bigquery/docs/sandbox?hl=es-419) </li><li> 📹 [O que é BigQuery](https://www.youtube.com/watch?v=RxKtIicl8r0) </li><li> 📹 [Como criar um Projeto, Dataset e carregar tabela no BigQuery](https://www.youtube.com/watch?v=BN8WAOtJ4CY)</li><li>⚠️ Sandbox é a versão gratuita do BigQuery que permite realizar consultas e criar tabelas, e não exige a inclusão de dados de cartão de crédito. No entanto, sendo a versão gratuita, o armazenamento de tabelas, views e consultas dura apenas 3 meses, por isso é importante criar um documento onde você possa salvar suas consultas e tudo o que achar importante sobre este projeto para consultá-lo no futuro.</li><ul>                                                                                                                                                        |
| 🔵 Identificar y manejar valores nulos                               | Identificar nulos a través de comandos SQL COUNT, WHERE y IS NULL                                              | <ul><li>Debes consultar los nulos de al menos una tabla, por ejemplo, una consulta los nulos `track_technical_info`, la otra de track_in_competition y ambas de track_in_spotify. </li><li>De esta forma, se aseguran de que cada una haga (y aprenda) al menos una consulta para identificar y manejar los nulos. Pueden intercambiar las consultas para que cada una vaya completando todo en su propio entorno de BigQuery.</li><ul> | <ul><li>🚨**Altamente recomendado**: 📄[Concepto valores nulos](https://docs.google.com/document/d/1AJRLPg2SWLvC1pnGOz-f1SNZXH1X63x2xWlquDBtlmE/edit?usp=sharing): En este enlace encontrarás la descripción de algunos tipos de nulos. (🔈[versión en audio](https://drive.google.com/file/d/1Y88gJEBdorDMRoEjnIUJNyI4G0LLAaGk/view?usp=drive_link)) </li><li>📄 [Qué es una consulta (query)](https://docs.google.com/document/d/1upi7Ashq_wro02zjMjnQlWgivQ9gsQWIy8q9pLm9WZ4/edit)</li><li>📹 [Cómo guardar queries](https://www.loom.com/share/461b7c3f07214d7897b68890c1389b77?sid=9c6d46b2-5ff6-4a60-823b-c976f535a18d)</li><li>📹 [Cómo idenficar nulos usando COUNT, WHERE y IS NULL](https://www.loom.com/share/3ae5d6e7f500405f95e8f1a110413a35?sid=c44c44d8-7caa-4da4-9261-03f6fd92348c)</li><li>💡 Haz una consulta para identificar los valores nulos en cada variable, toma nota de lo que encuentras o guarda la consulta (query) con la decisión que tomará (conservar o eliminar), de modo que después de realizar todo el paso de limpieza e identificar que es necesario eliminar/modificar etc, pueda crear una solo consulta (query) con todos los pasos de limpieza para la tabla en la que estás trabajando y en este momento crear una tabla o view con los datos limpios.</li><li>🧑‍💻 Si aún no está claro cómo identificar valores nulos en BigQuery, puedes pedir ejemplos a alguna AI como ChatGPT, Bing o Perplexity (por ejemplo)</li><ul>                                                            |
| 🔵 Identificar e lidar com valores nulos                               | Identificar nulos através de comandos SQL COUNT, WHERE e IS NULL                                              | <ul><li>Você deve consultar os nulos de pelo menos uma tabela, por exemplo, uma consulta os nulos `track_technical_info`, a outra de `track_in_competition` e ambas de `track_in_spotify`. </li><li>Dessa forma, garantem que cada uma faça (e aprenda) pelo menos uma consulta para identificar e lidar com os nulos. Podem trocar as consultas para que cada uma vá completando tudo em seu próprio ambiente de BigQuery.</li><ul> | <ul><li>🚨**Altamente recomendado**: 📄[Conceito valores nulos](https://docs.google.com/document/d/1AJRLPg2SWLvC1pnGOz-f1SNZXH1X63x2xWlquDBtlmE/edit?usp=sharing): Neste link você encontrará a descrição de alguns tipos de nulos. (🔈[versão em áudio](https://drive.google.com/file/d/1Y88gJEBdorDMRoEjnIUJNyI4G0LLAaGk/view?usp=drive_link)) </li><li>📄 [O que é uma consulta (query)](https://docs.google.com/document/d/1upi7Ashq_wro02zjMjnQlWgivQ9gsQWIy8q9pLm9WZ4/edit)</li><li>📹 [Como salvar queries](https://www.loom.com/share/461b7c3f07214d7897b68890c1389b77?sid=9c6d46b2-5ff6-4a60-823b-c976f535a18d)</li><li>📹 [Como identificar nulos usando COUNT, WHERE e IS NULL](https://www.loom.com/share/3ae5d6e7f500405f95e8f1a110413a35?sid=c44c44d8-7caa-4da4-9261-03f6fd92348c)</li><li>💡 Faça uma consulta para identificar os valores nulos em cada variável, anote o que encontrar ou salve a consulta (query) com a decisão que tomará (manter ou eliminar), de modo que depois de realizar todo o passo de limpeza e identificar o que é necessário eliminar/modificar etc., você possa criar uma única consulta (query) com todos os passos de limpeza para a tabela em que está trabalhando e, neste momento, criar uma tabela ou view com os dados limpos.</li><li>🧑‍💻 Se ainda não estiver claro como identificar valores nulos no BigQuery, você pode pedir exemplos a alguma IA como ChatGPT, Bing ou Perplexity (por exemplo)</li><ul>                                                            |
| 🔵 Identificar e lidar com dados fora do escopo da análise        | Gerenciar variáveis que não são úteis para a análise através de comandos SQL SELECT EXCEPT                    | <ul><li>Você deve analisar as variáveis fora do escopo de pelo menos uma tabela, por exemplo, uma consulta os de `track_technical_info`, a outra de `track_in_competition` e ambas de `track_in_spotify`.</li><ul>                                                                                                                                                                                                                             | <ul><li>🚨 **Altamente recomendado**: [Conceito valores fora do escopo](https://docs.google.com/document/d/1-SsxH5Ke3qAaWg5YKrkRwkExd91Q0RdJGplLAiXPiYA/edit?usp=sharing): Neste link você encontrará algumas descrições e exemplos do que é um valor fora do escopo da análise. (🔈[versão em áudio](https://drive.google.com/file/d/1Z963-z4MCiRRjt5RZF75oH_CH1BqDNrO/view?usp=drive_link)) </li><li>📹 [Como utilizar EXCEPT para selecionar variáveis](https://www.loom.com/share/2fa18d5cfd33403faaa794a2b08671f1?sid=2d16f30b-a26c-4d3c-bfd8-88ba7c664f25)</li><li>💡 Os dados fora do escopo, como vimos no projeto anterior, podem se referir a linhas de um banco de dados ou também a variáveis. Há alguma variável que você acredita que não será usada nesta análise e talvez possamos excluí-la, como `key` e `mode` ou outra variável que tenha uma grande quantidade de valores nulos?</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 🔵 Identificar e lidar com dados discrepantes em variáveis categóricas | Utilizar comandos de manipulação de string, como LIKE ou REGEXP                                                      | <ul><li>Você deve usar o comando para ajustar as variáveis do tipo string pelo menos uma vez, neste objetivo vocês podem trabalhar na mesma tabela.</li><ul>                                                                                                                                                                                                                                                                                  | <ul><li>📹 [Como utilizar os comandos LIKE e REGEXP](https://www.loom.com/share/3f7bb1362d5947ecb8c83e6f0690a4a5?sid=76f52b28-efb3-4991-b4c1-bd288bd4e805)</li><li>📄 [Documentação do Google sobre Funções de String](https://cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)</li><li>📄 [Conceito de variáveis categóricas](https://docs.google.com/document/d/1BIqa7xR0JNadM9kQExypo3plnwrNia92zCuxkPuMj5A/edit?usp=sharing)</li><li>🔈 [Conceito de variáveis categóricas  (versão em áudio)](https://drive.google.com/file/d/13gQ6Ni9FUfDmi5bjQivjeKj04fAI8Gl2/view?usp=drive_link)</li><li>📹 [Vídeo sobre tipos de variáveis](https://www.loom.com/share/afa56686810e46309761bc889364b2d9?sid=cabf587c-7ba1-4419-b501-32c98a73e191)</li><li>🧑‍💻 Você perceberá que alguns nomes de músicas e artistas têm símbolos estranhos. Trabalhar com strings geralmente nos exige um pouco de trabalho extra, sempre precisamos procurar a sequência REGEX que nos ajude a gerenciar esses dados, então este seria um bom momento para usar nossos recursos de IA. Pergunte ao ChatGPT "Como remover caracteres especiais de uma string no BigQuery?"</li><ul> |
| 🔵 Identificar e lidar com dados discrepantes em variáveis numéricas   | Utilizar comandos como MAX, MIN e AVG para identificar valores discrepantes em variáveis numéricas             | <ul><li>Você deve analisar as variáveis numéricas de pelo menos uma tabela, por exemplo, uma consulta sobre `track_technical_info`, outra sobre `track_in_competition` e ambas sobre `track_in_spotify`.</li><ul>                                                                                                                                                                                                                                    | <ul><li>📹 [Identificar valores discrepantes em variáveis numéricas com MAX, MIN e AVG](https://www.loom.com/share/4fb40d01dddf4e3cbf981029ed08613a?sid=5e46b20b-5ea4-47c4-a808-99969a369431)</li><li>📄 [Conceito de variáveis numéricas](https://docs.google.com/document/d/1oTn46djgWYlhcY9_Ak9H2edY2_rR8gpJco66njPwkCc/edit?usp=sharing)</li><li>💡 Você notará que a variável `streams` contém dados não numéricos, então não podemos fazer a média (AVG). Esse erro pode ter causado o fato de que essa variável, que deveria ser INTEGER, está como STRING, e é por isso que precisamos mudar o tipo de dados. Você pode avançar para a próxima meta, mudar o tipo de dado e depois voltar.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 🔵 Verificar e alterar o tipo de dado                                  | Utilizar CAST para modificar o tipo de dado                                                                   | <ul><li>Uma pessoa deve ser capaz de alterar o tipo de dado da variável `streams` e a outra deve fornecer suporte. No próximo objetivo, quando criarmos uma nova variável de data, você terá a oportunidade de praticar o comando CAST novamente.</li><ul>                                                                                                                                                                              | <ul><li>🚨 **Altamente recomendado**: 📄[Tipos de dados em SQL](https://docs.google.com/document/d/1z0evGu8JtjDPuFlH1pkbqYR6scRwukPfwWKJ-KmZRmI/edit?usp=sharing)</li><li>📹 [Tipos de dados em SQL](https://www.youtube.com/watch?v=A1tZ-d2uxws)</li><li>📹 [Alterar tipo de dado com CAST](https://www.loom.com/share/dfca15dd59084f83a1343eb476c71e96?sid=5ffd1896-5cf2-4ad5-88dc-741152483c45)</li><li>💡 Você encontrará uma variável de texto que não pode ser convertida. Avalie se não é melhor excluir essa variável. Dica: use NOT LIKE para filtrar os dados de texto da variável `streams`.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 🔵 Criar novas variáveis                                            | Criar uma variável de data `released` e uma de participação total em playlists                                 | <ul><li>Ambas devem ser capazes de criar uma nova variável, para que a que não teve a oportunidade de usar o comando CAST possa praticar esse comando, ela deve criar a variável de data de lançamento completa usando concat e cast para que a data fique no formato aaaa-mm-dd</li><ul>                                                                                                                                         | <ul><li>🚨 **Altamente recomendado**: [Conceito de criação de novas variáveis](https://docs.google.com/document/d/1yp5MVB8iirIbYwptscJ4YrjsY4Bnd8mrsDB75Onun2s/edit?usp=sharing): neste link, você encontrará uma breve descrição sobre esse conceito. (🔈[versão em áudio](https://drive.google.com/file/d/15P7Gp4_F_EOasIgW7SUhK8bf0MIDD6K8/view?usp=drive_link))</li><li> 📹 [Como criar novas variáveis com CONCAT e operações matemáticas](https://www.loom.com/share/65e15aa134c545bc9cfdc6b88bc2ae78?sid=46988f46-bcc0-471f-b89e-55c7ffe953b5)</li><li>💡 Lembre-se de que há diferença quando estamos utilizando operações matemáticas em SQL, quando usamos o comando SUM, somamos a coluna e quando queremos somar os valores por linha, podemos usar os operadores matemáticos como +.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 🔵 Unir tabelas                                                     | Unir tabelas utilizando LEFT JOIN                                                                               | <ul><li>Antes de unir as tabelas, você deve criar a visualização (view) com os dados limpos de cada tabela. E ao unir as tabelas usando LEFT JOIN, você deve fazer o JOIN de uma tabela.</li><ul>                                                                                                                                                                                                                                                         | <ul><li>🚨 **Altamente recomendado**:📹 [Tipos de JOIN em SQL](https://www.youtube.com/watch?v=HDBdAIcqJQo)</li><li>📹 [Diferença entre VIEW e CREATE TABLE](https://www.loom.com/share/97dbe237b9de459baa4d788f8bb44502?sid=e2168d4f-a8ff-44e4-b3f0-55e72596350a)</li><li>💡 Antes de unir as tabelas, crie visualizações com os dados limpos de cada tabela e faça o left join das visualizações.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 🔵 Construir tabelas auxiliares                                     | Utilizar o comando WITH para criar uma tabela temporária para calcular o total de músicas por artista solo | <ul><li>Uma pessoa deve criar a tabela temporária com WITH e a outra auxiliar. Na próxima vez que for necessário criar a tabela temporária com WITH dentro deste marco, a pessoa que ainda não implementou essa técnica deverá fazê-lo.</li><ul>                                                                                                                                                                                            | <ul><li>📹[Como usar o comando WITH e para que serve](https://www.loom.com/share/8e2f6f70db214e2484af45375539d8e9?sid=222c7e6d-1ff5-430a-ab28-64c025f34ebf)</li><li>💡 Calcular o total de músicas para o artista solo, ou seja, quando não há mais artistas criadores da música.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

🤸 Apenas por diversão:

Você pensa em uma forma de realizar todos esses passos em
uma única consulta após importar as tabelas?

### 🟪 Passo 2. Realizar uma análise exploratória

⌛ Intervalo de tempo estimado: **De 8 a 12 horas**

A análise exploratória de dados (AED) é uma fase fundamental na compreensão de
conjuntos de dados, e ferramentas como o Looker Studio e o BigQuery desempenham
um papel crucial nesse processo. O Looker Studio, uma plataforma de visualização
de dados do Google, permite criar painéis interativos e gráficos dinâmicos que
facilitam a exploração e compreensão dos dados. Ao aproveitar as capacidades do
Looker Studio, os usuários finais podem identificar padrões, tendências e
anomalias nos dados de forma eficaz.

Por outro lado, o BigQuery é uma poderosa ferramenta de armazenamento e análise
de dados do Google Cloud. Com sua capacidade de lidar com grandes volumes de
dados e realizar consultas em SQL de alto desempenho, o BigQuery é essencial
para explorar dados em grande escala. Os analistas podem usar o BigQuery para
realizar consultas avançadas e calcular estatísticas essenciais que fornecem
informações valiosas sobre o conjunto de dados.

Combinar o Looker Studio e o BigQuery oferece uma solução abrangente para a
análise exploratória. Os dados podem ser extraídos e transformados no BigQuery
e, em seguida, visualizados e explorados em profundidade usando o Looker Studio.
Essa combinação permite desvendar insights significativos, identificar relações
e tomar decisões informadas com base em uma análise profunda dos dados.
Em resumo, a análise exploratória se beneficia enormemente da sinergia entre
o Looker Studio e o BigQuery, facilitando a obtenção de informações valiosas
a partir de dados complexos e extensos.

| Meta | Objetivo | Objetivo Individual | Recurso |
| ---- | ---- | ---- | ---- |
| 🟣 Agrupar dados por variáveis categóricas | Agrupar variáveis categóricas usando tabelas no Looker Studio ou através de GROUP BY no BigQuery | <ul><li>Você deve agrupar pelo menos uma variável categórica, como a quantidade de faixas por artista, a quantidade de faixas por `ano_de_lançamento`, etc.</li></ul> | <ul><li>🚨 **Altamente recomendado**: [Conceito de variáveis categóricas](https://docs.google.com/document/d/1BIqa7xR0JNadM9kQExypo3plnwrNia92zCuxkPuMj5A/edit?usp=sharing): Neste documento, você encontrará a descrição e exemplos deste conceito. (🔈 [versão em áudio](https://drive.google.com/file/d/13gQ6Ni9FUfDmi5bjQivjeKj04fAI8Gl2/view?usp=drive_link))</li><li>📹 [Vídeo sobre tipos de variáveis](https://www.loom.com/share/afa56686810e46309761bc889364b2d9?sid=cabf587c-7ba1-4419-b501-32c98a73e191): Neste vídeo, você verá uma breve descrição de variáveis categóricas e numéricas.</li><li>📹 [Vídeo de introdução ao Looker Studio](https://www.youtube.com/watch?v=P5WLaeSQK7s&t=3s)</li><li>📹 [Vídeo sobre como conectar dados no Looker Studio](https://www.loom.com/share/0cce98d5bbc7482ea421444e2f850cc1)</li><li>📹 [Visão geral do Looker Studio](https://www.loom.com/share/9c7505eb3c2a4612bdfb7c9d43c40051)</li><li>📹 [Vídeo sobre como criar um painel no Data Studio](https://www.youtube.com/watch?v=Sprmb4W82sk)</li><li>📄 [Tutorial do Google: Como criar um relatório no Looker Studio](https://support.google.com/looker-studio/answer/6292570?hl=ES#zippy=%2Csecciones-de-este-art%C3%ADculo)</li><li>⚠️ Recentemente, o Data Studio foi renomeado para Looker Studio, então você pode encontrar referências ao Data Studio em alguns conteúdos. No entanto, trata-se do mesmo produto.</li><li>📹 [Como criar uma tabela dinâmica no Looker Studio](https://www.youtube.com/watch?v=3WJrWfAtgEw)</li><li>💡 Visualize as variáveis categóricas, como o artista, e veja se algum se destaca, use os anos para ver esses dados por ano.</li><li>💡 Experimente fazer isso no BigQuery usando o comando GROUP BY para ver os dados agrupados ou com tabelas no Looker Studio.</li></ul> |
| 🟣 Visualizar as variáveis categóricas | Visualizar as variáveis categóricas através de gráficos de barras | <ul><li>Você deve criar pelo menos um gráfico de barras para visualizar as variáveis agrupadas anteriormente.</li></ul> | <ul><li>📹 [Como criar gráficos no Looker Studio](https://www.youtube.com/watch?v=B3hPsl-8u3A)</li></ul> |
| 🟣 Aplicar medidas de tendência central | Calcular medidas de tendência central (Média e Mediana) usando tabelas no Looker Studio ou BigQuery | <ul><li>Você deve calcular medidas de tendência central (média e mediana) para pelo menos uma variável. Um pode analisar `streams` e outro o total de vezes que aparece em uma playlist.</li></ul> | <ul><li>🚨 Altamente recomendado: 📄 [Conceito de estatísticas descritivas](https://docs.google.com/document/d/13xu7cf5LcUN2CE58qwyZoNrhS713Ci0tI9S1odeapig/edit?usp=sharing)</li><li>[🔈 Conceito de estatísticas descritivas (versão em áudio)](https://drive.google.com/file/d/1v6xdtWci7rYtMKibGowl9OxBArT3CVnI/view?usp=drive_link)</li><li>📄 [Conceito de medidas de tendência central](https://docs.google.com/document/d/1Ly_7zLmUjcczqCkQLQwvDYEGyRLtSNQLVi3w8CIh8sI/edit?usp=sharing)</li><li>[🔈 Conceito de medidas de tendência central (versão em áudio)](https://drive.google.com/file/d/1viy63m4n8Gn9aYHNuLJpd8RzFrTNnlw2/view?usp=drive_link)</li><li>📹 [Vídeo sobre tabelas no Looker Studio](https://www.youtube.com/watch?v=7CLCz3PgJ5s)</li><li>💡 Observe o comportamento das variáveis `streams` e presença total em playlists.</li></ul> |
| 🟣 Calcular correlação entre variáveis | Calcular a correlação no BigQuery usando CORR | <ul><li>Você deve calcular a correlação entre duas variáveis contínuas. Um pode calcular para `streams` e `playlists` e outro para `streams` e `danceability`.</li></ul> | <ul><li>📄 [Conceito de correlação de Pearson](https://docs.google.com/document/d/1HvuENDveavTmlRtSGk3Gv3LqSPNbRPWNYgOU8e3CxTM/edit?usp=sharing)</li><li>📹 [Como calcular correlação no BigQuery](https://www.loom.com/share/9bf3e48cf57d48ca9c81c2c19562dedf?sid=c4c8a611-d0ae-4c4f-a2f5-200ce48746f4)</li><li>💡 Compreender o cálculo de correlação nos ajudará mais tarde na validação das hipóteses.</li></ul> |

🤸 Apenas por diversão:

Você pensa em algum gráfico que poderia ajudar a visualizar
e entender a relação entre duas variáveis?

### 🟥 Passo 3. Aplicar técnica de análise

⌛ **Intervalo de tempo estimado: De 8 a 12 horas**

A validação de hipóteses é um processo crucial em estatística e pesquisa
científica. Refere-se à avaliação de afirmações ou suposições sobre uma
população ou fenômeno, através do exame de dados coletados de uma amostra
dessa população. Em essência, trata-se de determinar se as suposições
feitas sobre uma população são apoiadas pela evidência empírica fornecida
pelos dados.

Neste marco, buscamos responder às hipóteses propostas pela gravadora:

* As músicas com um BPM (Batidas Por Minuto) mais alto têm mais sucesso em
termos de streams no Spotify
* As músicas mais populares no ranking do Spotify também têm um comportamento
semelhante em outras plataformas como Deezer
* A presença de uma música em um maior número de playlists está relacionada
a um maior número de streams
* Os artistas com um maior número de músicas no Spotify têm mais streams
* As características da música influenciam o sucesso em termos de streams no
Spotify

Para validar as hipóteses, vamos utilizar o cálculo da correlação entre duas
variáveis e a interpretação de gráficos, como gráficos combinados ou gráficos
de dispersão com linha de tendência. Ao analisar a variável que estamos
tentando entender (streams) em relação a outras variáveis disponíveis no banco
de dados, podemos identificar características comuns entre as músicas mais
ouvidas no Spotify.

| Meta | Objetivo | Objetivo individual | Recurso|
| --- | ---- | ---- | ---- |
| 🔴 Validar hipóteses    | Validar as hipóteses levantadas através da correlação e scatter plot                                                           | <ul><li>Deve calcular a correlação das variáveis de uma hipótese e visualizar esses dados através de um scatter plot e discutir os resultados se existe ou não uma correlação e se a hipótese é verdadeira</li><ul> | <ul><li>💡 Para validar as hipóteses levantadas, podemos analisar a relação entre as variáveis da hipótese através da correlação, que já vimos como calcular no BigQuery e visualizá-las através de um gráfico de dispersão no Looker Studio para compreender e analisar o que faz uma música ser bem-sucedida. </li><li>📹 [Gráfico de dispersão](https://www.youtube.com/watch?v=gX-vNQVSYSM&t=477s)</li><ul> |

🤸 Apenas por diversão:

Você acha que seria possível validar essas hipóteses em grupos menores,
como por exemplo, as músicas com data de lançamento em 2023?

Você tem alguma outra hipótese em mente que possa analisar?

### 🟧 Passo 4. Resumir informações em um painel ou relatório

⌛ **Intervalo de tempo estimado: De 8 a 12 horas**

O Looker Studio é uma plataforma de visualização e análise de dados do Google
que permite aos usuários criar relatórios interativos e personalizados,
integrando diversas fontes de dados para gerar insights visuais detalhados.
Os painéis de controle, ou dashboards, são uma característica chave desta
plataforma, apresentando dados-chave em um formato visual conciso e fácil
de entender. Um dashboard é uma ferramenta visual que apresenta informações
chave e dados relevantes de maneira concisa e acessível, facilitando a
supervisão e análise do desempenho em tempo real. Seus elementos incluem
gráficos e diagramas para identificar tendências, tabelas para uma leitura
detalhada, indicadores chave de desempenho (KPIs) para monitoramento rápido,
filtros e controles interativos para personalizar a visualização, mapas para
dados geoespaciais, texto e notas para contexto adicional, e widgets de tempo
real para atualizações instantâneas. Combinados, esses elementos permitem uma
visualização eficiente e compreensível de grandes volumes de dados, apoiando
a tomada de decisões informadas.

Em resumo, o Looker Studio é uma ferramenta essencial para qualquer empresa
ou profissional que deseje transformar dados em informações significativas,
tomar decisões estratégicas e comunicar de maneira eficaz os insights através
de visualizações atrativas e acessíveis.

Neste marco, trabalharemos com o Looker Studio também para criar um painel
organizado que gere informações para o negócio. Este é o momento de organizar
seus gráficos criados no passo de análise exploratória e criar um ambiente
amigável para a gravadora.

| Meta | Objetivo | Objetivo individual | Recurso |
| ---- | ---- | ---- | ---- |
| 🟠 Representar dados através de tabela resumo ou scorecards    | Criar scorecards para os números gerais do banco de dados           | <ul><li>Deve criar pelo menos um cartão de resultados (scorecards)</li><ul>                                                                                                                                                    | <ul><li>📹 [Vídeo como criar scorecards (cartão de resultados) no Looker Studio](https://www.youtube.com/watch?v=D09zovxBXWs)</li><li>💡 Busque conteúdos no YouTube para tirar ideias de como montar seu painel no Looker Studio</li><ul> |
| 🟠 Representar dados através de gráficos simples              | Representar os dados através de gráficos de barras e linhas             | <ul><li>Cada uma já fez este exercício anteriormente na habilidade de Análise Exploratória, agora como dupla devem escolher quais gráficos utilizar no seu painel e organizá-lo</li><ul>                                   | <ul><li>💡 Crie novas páginas no Looker Studio para organizar seus dados. Na opção “gerenciar páginas” você pode escolher deixar visível ou não uma página no seu painel, assim não precisa excluir nenhuma página e pode deixar sua análise exploratória salva.</li><ul>                                                                   |
| 🟠 Representar dados através de gráficos ou visuais avançados | Representar dados através de scatter plot | <ul><li>Cada uma já fez este exercício anteriormente na habilidade de Análise Exploratória, agora como dupla devem escolher quais gráficos utilizar no seu painel e organizá-lo para que explique os resultados obtidos | <ul><li>💡 Considere incluir o gráfico scatter plot para representar seus resultados.</li><ul> |
| 🟠 Aplicar opções de filtros para manejo e interação       | Incluir filtros para visualizar os resultados por categorias e por data | <ul><li>Incluir uma página onde seja possível visualizar os dados gerais por filtros. Deve incluir um filtro, podem ser filtro de data, filtro de categoria, etc.</li><ul> | <ul><li>📹 [Vídeo filtros no Looker Studio](https://www.youtube.com/watch?v=HZMZcNf1jdk).</li><li>💡 Inclua filtros para que possamos visualizar esses dados em diferentes perspectivas</li><ul>|

🤸 Apenas por diversão:

Você pensa em outros gráficos que poderiam ser usados para construir
seu painel?

### 🟩 Passo 5. Apresentar resultados

⌛ **Intervalo de tempo estimado: De 8 a 12 horas**

Tanto o Google Slides quanto o Looker Studio são ferramentas valiosas para
apresentar dados em uma apresentação de negócios. O Google Slides é ideal
para apresentações visuais e concisas, enquanto o Looker Studio é uma opção
poderosa para analisar e explorar dados de forma interativa. Escolha a
ferramenta que melhor se adapte às suas necessidades e à sua audiência, e
crie uma apresentação impactante que apoie seus argumentos e ajude na
tomada de decisões informadas.

Neste marco, você pode optar por apresentar apenas através do Google Slides
ou misturar com seu painel do Looker Studio na apresentação.

| Meta                                                       | Objetivo                                                                               | Objetivo individual                                                                                                                                                             | Recurso |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 selecionar gráficos e informações relevantes            | Resumir informações para uma apresentação de 5 minutos                                 | <ul><li>Neste momento devem entrar em acordo sobre quais gráficos devem apresentar, pois a apresentação que criarão em conjunto deve ser apresentada individualmente.</li><ul> | <ul><li>🚨 **Altamente recomendado**: 📄 [Conceito de apresentar resultados](https://docs.google.com/document/d/10Xabbxk7WxojFAdncs3YSc4wSCLihw0LUOOqxijGdMc/edit?usp=sharing) </li><li>📹 [O que é Data Storytelling](https://www.youtube.com/watch?v=NDs2BXgvzPc). </li><li>📹 Veja neste vídeo [diferentes formas de apresentar uma mesma informação](https://www.youtube.com/watch?v=2vWT6hmnVVg). </li><ul>                                                                   |
| 🟢 criar uma apresentação                                  | Criar uma apresentação de slides que guie e apresente os resultados mais importantes | <ul><li>Criar a apresentação de slides em conjunto.</li><ul>                                                                                                                   | <ul><li>📹 [Vídeo sobre como criar apresentações no Google Slides](https://www.youtube.com/watch?v=T8Fs-zkIX3I) </li><li>📹 [Compartilhar apresentação para trabalhar em conjunto](https://www.loom.com/share/3220709262c142d4a0214cfc09856dcc?sid=b00df098-70e9-4a2a-89c7-e68b265ed588).</li><li> 💡 Crie uma apresentação que deixe ambas confortáveis para fazer seu vídeo de apresentação dos resultados.</li><ul> |
| 🟢 apresentar resultados com conclusões e recomendações | Gravar um vídeo de no máximo 5 minutos explicando suas conclusões e recomendações      | <ul><li>Deve gravar seu vídeo individualmente, mas utilizando os recursos que criaram em conjunto.</li><ul>                                                                  | <ul><li>📄 [Artigo sobre apresentar dados](https://apolitical.co/solution-articles/es/presentar-datos-5-consejos-hacer-datos-comprensibles) </li><li>📄 [Artigo sobre apresentar dados](https://vilmanunez.com/como-hacer-una-presentacion-de-resultados/) </li><li>📹 [Vídeo dicas para uma apresentação](https://www.youtube.com/watch?v=MPW6Ak3dxWc&t=157s) </li><li>💡 Embora tenham feito o trabalho juntos e usarão os mesmos recursos, isso não significa que a forma como apresentam os resultados deva ser a mesma. Cada pessoa pode apresentar os resultados à sua maneira, de acordo com sua personalidade e individualidade.</li><ul>                        |

🤸 Apenas por diversão:

Você pode montar uma apresentação como se estivesse apresentando
para o representante da gravadora e para o novo artista que
deseja lançar no mundo da música?

ℹ️ **Ao concluir o projeto, compartilhe o link público do repositório
do GitHub contendo um README com as consultas utilizadas, onde todos
os passos seguidos e os resultados obtidos estejam claramente visíveis.
Também adicione o link do Looker Studio em que trabalhou no projeto.
Como este é um projeto em dupla, apenas o vídeo deve ser individual,
os arquivos compartilhados podem ser os mesmos.**

## 6. Considerações para solicitar seu Feedback do Projeto

Antes de agendar seu Feedback do Projeto com seu coach,
certifique-se de que seu projeto:

* [] Realizou a limpeza dos dados e uniu as tabelas no BigQuery.
* [] Gerou tabelas, gráficos e correlações durante sua análise exploratória.
* [] Aplicou a técnica de validação de hipóteses.
* [] Conectou o banco de dados limpo ao Looker Studio para criar um
  painel informativo.
* [] Criou uma apresentação simples usando o Google Slides ou utilizou o
  painel no Looker Studio como guia para sua apresentação em vídeo.
* [] Gravou e compartilhou um vídeo de no máximo 5 minutos, explicando
  suas conclusões, descobertas e recomendações para o negócio. Use o Loom
  para gravar você mesma apresentando e mostrando a tela com sua apresentação.
* [] Compartilhou o link público de uma pasta do Google Drive contendo
  um arquivo com as consultas (queries) utilizadas e o link do Looker Studio
  em que trabalhou no projeto, onde todos os passos que você seguiu e os
  resultados que obteve estão claramente visíveis. Como este é um projeto em
  dupla, apenas o vídeo deve ser individual, os arquivos compartilhados podem
  ser os mesmos.

## 7. Self review

A seguir, está uma tabela com as habilidades e objetivos de
aprendizado. Use a coluna `Autoavaliação` para avaliar se
você alcançou ou não cada objetivo.

| Habilidades                                          | Objetivos de aprendizado                                                 | Autoavaliação |
| ---------------------------------------------------- | -------------------------------------------------------------------- | --- |
| 🟦 **Processar e preparar a base de dados**          | 🔵 Conectar/importar dados para ferramentas                           | <ul><li>👍 Você criou um projeto, um conjunto de dados e carregou as tabelas no ambiente BigQuery?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Identificar e lidar com valores nulos                              | <ul><li>👍 Você identificou nulos através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Identificar e lidar com valores duplicados                         | <ul><li>👍 Você identificou duplicados através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Identificar e lidar com dados fora do escopo da análise           | <ul><li>👍 Você lidou com dados fora do escopo através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Identificar e lidar com dados discrepantes em variáveis categóricas | <ul><li>👍 Você identificou e lidou com dados discrepantes em variáveis categóricas através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Identificar e lidar com dados discrepantes em variáveis numéricas | <ul><li>👍 Você identificou e lidou com dados discrepantes em variáveis numéricas através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Verificar e alterar o tipo de dado                                 | <ul><li>👍 Você alterou o tipo de dado através de comandos SQL?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Criar novas variáveis                                             | <ul><li>👍 Você criou novas variáveis através de comandos SQL?</li> <li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Unir tabelas                                                      | <ul><li>👍 Você utilizou JOINS para unir tabelas?</li> <li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🔵 Construir tabelas auxiliares                                      | <ul><li>👍 Você utilizou a estrutura de tabelas temporárias WITH?</li> <li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
| 🟪 **Realizar uma análise exploratória**                | 🟣 Agrupar dados de acordo com variáveis categóricas                   | <ul><li>👍 Você agrupou pelo menos uma variável categórica e analisou seu resultado em relação a outra variável numérica?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟣 Visualizar as variáveis categóricas                              | <ul><li>👍 Você criou pelo menos um gráfico de barras para o resultado da meta anterior?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟣 Aplicar medidas de tendência central                              | <ul><li>👍 Você aplicou pelo menos uma vez medidas de tendência central para analisar uma variável (e compreendeu/interpretou)?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟣 Calcular correlação entre variáveis                               | <ul><li>👍 Você calculou a correlação entre duas variáveis pelo menos uma vez (e compreendeu/interpretou)?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
| 🟥 **Aplicar técnica de análise**                   | 🔴 Validar hipóteses                                                 | <ul><li>👍 Você calculou a correlação e criou um scatter plot para validar pelo menos uma hipótese (e compreendeu/interpretou)?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
| 🟧 **Resumir informações em um painel ou relatório** | 🟠 Representar dados através de tabela resumo ou scorecards          | <ul><li>👍 Você criou pelo menos uma tabela resumo ou um scorecard para visualizar os dados gerais do conjunto de dados?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟠 Representar dados através de gráficos simples                    | <ul><li>👍 Você criou pelo menos um gráfico de barras ou de linhas para representar os resultados e organizou essa informação em um painel?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟠 Representar dados através de gráficos ou visuais avançados       | <ul><li>👍 Você criou pelo menos um scatter plot?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟠 Aplicar opções de filtros para gerenciamento e interação         | <ul><li>👍 Você criou pelo menos um botão de filtro para visualizar os dados de diferentes formas?</li><li>👎**Veto**: Se você não realizou esse processo pelo menos uma vez e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |
| 🟩 **Apresentar Resultados**                          | 🟢 Selecionar gráficos e informações relevantes                      | <ul><li>👍 Você discutiu e selecionou as informações relevantes para a apresentação em conjunto com seu colega?</li><li>👎**Veto**: Se você não realizou esse processo de discussão com seu colega e apenas observou seu colega selecionando informações, você não alcançou esse objetivo.</li></ul> |
|                                                      | 🟢 Criar uma apresentação                                            | <ul><li>👍 Você criou uma apresentação em conjunto com seu colega?</li><li>👎**Veto**: Se você não criou a apresentação em conjunto e apenas observou seu colega fazendo, você não alcançou esse objetivo.</li></ul> |

## 8. Objetivos de aprendizaje

> ℹ️ Esta seção será automaticamente gerada no idioma pertinente, a partir dos
> objetivos de aprendizagem declarados em [`project.yml`](./project.yml), ao
> criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> cobertos em nosso currículo.
