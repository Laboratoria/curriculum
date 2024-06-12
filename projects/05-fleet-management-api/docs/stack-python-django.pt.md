# Fleet Management Software API en Python y Django

Django é um framework web que incentiva o desenvolvimento rápido e limpo de
aplicativos web, projetado para promover a escalabilidade no
desenvolvimento.

Entre as características mais importantes está o
fato de que o Django trabalha com um
[ORM (Mapeador Relacional de Objetos)](https://es.wikipedia.org/wiki/Mapeo_relacional_de_objetos)
para facilitar a interação com o banco de dados.

Django é uma excelente opção para desenvolver aplicativos web complexos
que requerem uma ampla variedade de funcionalidades integradas,
uma sólida arquitetura MVT (Model View Template) e
uma grande comunidade de suporte.

* [Django](https://www.djangoproject.com):
  como framework para implementar um servidor HTTP.
* [Django REST Framework](https://www.django-rest-framework.org): como biblioteca
complementar para criar APIs web RESTful.
* [Postgresql](https://www.postgresql.org/): como banco de dados.

## Dicas para trabalhar com Django

### Suas primeiras instalações

Para trabalhar com Django, você pode usar ambientes virtuais.
No seguinte [vídeo](https://youtu.be/T2CZ7bltuMs),
você pode se orientar para criar
um ambiente virtual, também preparamos um [vídeo](https://youtu.be/YoKjtqxAXXw)
que exemplifica como inicializar um projeto com Django.

### Carregando informações no banco de dados

Depois de ter acesso a uma instância
do PostgreSQL, a [história do usuário 1](../README.md#história-do-usuário-1-carregar-informações-no-banco-de-dados)
fala sobre criar as tabelas para carregar as informações.
Uma das abordagens que sugerimos é:

1. Criar os modelos
2. Em seguida, gerar as migrações (usando o ORM do Django)
3. Carregar as informações no seu banco de dados

Para isso, recomendamos primeiro ter um único "app" para controlar tudo
relacionado à administração de táxis e dentro do app criar dois modelos,
um para armazenar as informações dos táxis (`taxis`) e outro para armazenar as
informações de trajetórias (`trajectories`).

Você deve definir os campos de cada modelo de acordo com as informações fornecidas.
Quando quiser carregar as informações, é necessário modificar o script
para especificar em qual app as 2 tabelas trabalharão. Preparamos o seguinte.

Exemplo de modificação:

```SQL
-- Assim é como uma linha é originalmente visualizada no script
INSERT INTO trajectories (id, date, latitude, longitude ) VALUES ('10133','2008-02-02 13:47:59',116.37659,39.85567);
```

Ao usar o nome do app (neste exemplo, chamamos o app de `taxiapp`):

```SQL
-- Assim é como a linha é visualizada com o nome da tabela alterado
INSERT INTO taxiapp_trajectories (id, date, latitude, longitude ) VALUES ('10133','2008-02-02 13:47:59',116.37659,39.85567);
```

Pode fazer essa mudança facilmente usando a função de buscar e substituir
(find and replace), para todas as ocorrências nos scripts SQL.

Também, há um [vídeo para exemplificar como adicionar o app no script](https://youtu.be/iwc9R7fF7P4).

### Gerando seus endpoints

Com Django, é possível integrar ferramentas como
Django REST Framework para trabalhar na criação de uma API e sua
[documentação oficial](https://www.django-rest-framework.org)
é fundamental para orientá-lo na instalação e uso da ferramenta.

Quando começar a documentar os endpoints
de sua API, você deve usar [Swagger para REST Framework](https://drf-yasg.readthedocs.io/en/stable/readme.html)
