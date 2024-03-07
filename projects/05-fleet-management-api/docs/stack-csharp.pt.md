# API de Gerenciamento de Frota em C# #

## Pilha de Tecnologias ##

Ao criar aplicações modernas, escolher tecnologias compatíveis é essencial para
um bom desempenho e gestão eficiente de dados. Entity Framework e PostgreSQL se
destacam por sua poderosa colaboração.

.NET Core, da Microsoft, é um framework eficiente para aplicações web modernas e
escaláveis, sendo especialmente adequado para o desenvolvimento de Web APIs.

O Entity Framework simplifica a conexão com bancos de dados, permitindo que os
desenvolvedores trabalhem com objetos em vez de lidar diretamente com consultas
SQL, agilizando o desenvolvimento e aprimorando a gestão de dados.

O PostgreSQL é um sistema de gerenciamento de banco de dados confiável e de código
aberto, ideal para ambientes empresariais devido à sua escalabilidade, desempenho
e suporte aos padrões SQL.

Ao usar o .NET Core juntamente com ferramentas como o Entity Framework e o
PostgreSQL, você tem um ambiente completo e otimizado para desenvolver
aplicações web modernas, com foco especial na criação de Web APIs eficientes e
flexíveis.

## Considerações Gerais ##

### Conhecimentos em C# ###

É crucial considerar os princípios fundamentais da programação orientada a
objetos. Recomendo revisar os objetivos de aprendizado detalhados no arquivo
README do projeto e aprofundar seus conhecimentos consultando a documentação
relevante sobre classes e interfaces.

### Aprendizado de C# e .NET ###

Certifique-se de ter um ambiente de desenvolvimento instalado, seja o Visual
Studio Community Edition ou o Visual Studio Code, junto com o kit de
desenvolvimento C#. Explore ambas as ferramentas para determinar qual se
adequa melhor às suas necessidades e preferências.

### Sobre API REST ###

Além disso, é essencial compreender os conceitos básicos das APIs (Interfaces de
Programação de Aplicações) e se familiarizar com seu funcionamento. Pesquise
também sobre as Web APIs e aprofunde-se em como aplicar o conceito de REST
(Transferência de Estado Representacional) neste contexto.

Este conjunto de conhecimentos fornecerá uma base sólida para o desenvolvimento
de aplicações em C# e .NET, bem como para trabalhar com APIs e entender a
importância do REST no desenvolvimento de Web APIs.

## Considerações Técnicas ##

- **Versão do .NET:** Este projeto utiliza .NET 5.0 ou uma versão superior.
  Você pode trabalhar com a versão 8 do framework, que é a última versão LTS
  disponível.

- **Criação da API:** Para desenvolver o projeto, você usará Web API com
  controladores. Embora haja a opção de usar o Minimal API, esta é projetada
  para o desenvolvimento de microserviços ou pequenas demonstrações. Em vez
  disso, a Web API com controladores é uma opção mais adequada para projetos
  de qualquer tamanho e é mais fácil de escalar.

## Dicas no Desenvolvimento do Projeto ##

Aqui estão algumas dicas para realizar o desenvolvimento do projeto. Estas são
sugestões; escolha o caminho que melhor se adapte ao seu momento de aprendizado.

> [!IMPORTANTE]
> Lembre-se de consultar a documentação disponível no [README do projeto](
  ../README.md), onde você encontrará informações detalhadas para cada objetivo
  de aprendizado.

### 1. Criar Projeto Web API ###

Para criar um projeto Web API em C# com o modelo "API com controladores", use o
seguinte comando no terminal:

```bash
dotnet new webapi --name MeuProjeto --use-controllers
```

Este comando cria um projeto de API web com suporte a controladores.

### 2. Explorar o projeto WeatherForecast ###

- Abra o projeto no Visual Studio ou VSCode.
- Explore os arquivos gerados, como WeatherForecast.cs,
  Program.cs e WeatherForecastController.cs.
- Execute o projeto e teste a rota padrão `/weatherforecast`
  para entender como funciona.

> [!TIP]
> Você pode consultar este
> [guia adicional da Microsoft](https://learn.microsoft.com/pt-br/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio)
> para obter suporte adicional em seu aprendizado.

### 3. Instalar pacotes com NuGet ###

Para instalar pacotes NuGet a partir do terminal, use o seguinte comando:

```bash
dotnet add package NomeDoPacote
```

Consulte a [documentação](https://learn.microsoft.com/pt-br/nuget/consume-packages/install-use-packages-dotnet-cli)
para mais detalhes; você pode explorar
as bibliotecas disponíveis [aqui](https://www.nuget.org/).

### 4. Entity Framework ###

[Entity Framework](https://learn.microsoft.com/pt-br/ef/) é um
[ORM](https://pt.wikipedia.org/wiki/Mapeamento_objeto-relacional) que
simplifica o acesso e manipulação de bancos de dados. Em vez de usar SQL
diretamente, você pode trabalhar com objetos em seu código,
permitindo interação mais simples com o banco de dados.
É essencial instalá-lo, e pode ser feito com:

```bash
dotnet add package Microsoft.EntityFrameworkCore
```

### 5. Criar modelos ###

Um modelo no Entity Framework representa uma tabela no banco de dados.
Usando esse modelo, a tabela será gerada automaticamente com os campos
correspondentes. Aqui está um exemplo simples:

```csharp
// Model
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

// Database table creation in DBContext
public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
}
```

### 6. Fluent API ###

[Fluent API](https://learn.microsoft.com/pt-br/ef/core/modeling/) no
EF é uma forma de configurar o modelo de dados no código,
fornecendo um controle mais preciso sobre como as classes são mapeadas
para tabelas e suas relações no banco de dados.

### 7. Conectar-se ao PostgreSQL ###

Para se conectar ao PostgreSQL, você precisará do [Npgsql](https://www.npgsql.org/doc/index.html),
que pode ser instalado com:

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

Em seguida, será necessário configurar no seu Contexto como se conectar:

```csharp
    var connectionString = "Host=myhost;Database=mydatabase;Username=myuser;Password=mypassword";
    var connection = new NpgsqlConnection(connectionString);
    optionsBuilder.UseNpgsql(connection);
```

### 8. Ejecutar migraciones ###

As migrações são scripts que permitem atualizar o banco de dados
conforme as alterações em seus modelos. Migrates descrevem as
modificações e são aplicadas ao banco de dados, garantindo a
consistência entre o modelo e a estrutura do banco de dados.
Você pode executá-las com o seguinte comando:

```bash
dotnet ef migrations add MyMigration
dotnet ef database update
```

### 9. Criar controladores ###

Os controladores manipularão as solicitações HTTP em uma API.
Você usará atributos como [HttpGet] que definem como
os métodos do controlador respondem às solicitações HTTP. Exemplo:

```csharp
[Route("api/[controller]")]
[ApiController]
public class MyController: ControllerBase
{
    // Sua lógica de negócios pode ser colocada aqui.
}
```

### 10. Testar com Postman ou Thunder Client ###

Use [Postman](https://www.postman.com/) ou [Thunder Client](https://www.thunderclient.io/)
para testar suas rotas e métodos conforme você os desenvolveu.

### 11. Visualizar documentação com Swagger ###

Você deve usar [Swagger](https://docs.microsoft.com/pt-br/aspnet/core/tutorials/web-api-help-pages-using-swagger)
para documentar seus endpoints.

### 12. Desenvolver testes com xUnit ###

Para escrever testes [xUnit](https://xunit.net/docs/getting-started/netcore/cmdline),
instale o pacote:
