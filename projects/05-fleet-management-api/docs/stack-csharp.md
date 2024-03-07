# Fleet Management Software API en C# #

## Stack de tecnologías ##

En la creacion de applicaciones modernas, elegir tecnologías
compatibles es esencial para buen rendimiento
y gestión eficiente de datos. Entity Framework y PostgreSQL destacan por su
poderosa colaboración.

.NET Core, de Microsoft, es un framework eficiente
para aplicaciones web modernas y escalables,
siendo especialmente adecuado para el desarrollo de Web APIs.

Entity Framework simplifica la conexión a bases de datos al permitir a los devs
trabajar con objetos en lugar de lidiar
directamente con consultas SQL,
agilizando el desarrollo y mejorando la gestión de datos.

PostgreSQL es un sistema de gestión de bases de datos confiable y de código
abierto, ideal para entornos empresariales debido a su escalabilidad, rendimiento
y soporte para estándares SQL.

Al usar .NET Core junto con herramientas como Entity
Framework y PostgreSQL, tienes un entorno completo y optimizado
para desarrollar aplicaciones web modernas, centrándote especialmente en hacer
Web APIs eficientes y flexibles.

## Consideraciones generales ##

### Conocimientos relacionados con C# ###

Es crucial que tengas en cuenta los principios fundamentales de la programación
orientada a objetos. Te recomiendo revisar los objetivos de aprendizaje detallados
en el archivo README del proyecto. Además, puedes profundizar en tus
conocimientos consultando la documentación pertinente sobre clases e interfaces.

### Aprendizaje de C# y .NET ###

Asegúrate de tener instalado un entorno de desarrollo, ya sea Visual Studio
Community Edition o Visual Studio Code, junto con el kit de desarrollo de C#.
Explora ambas herramientas para determinar cuál se adapta mejor a tus
necesidades y preferencias.

### Acerca de API REST ###

Además, es esencial comprender los conceptos básicos de las APIs (Interfaces de
Programación de Aplicaciones) y familiarizarte con su funcionamiento. Investiga
también sobre las Web APIs y profundiza en cómo aplicar el concepto de REST
(Transferencia de Estado Representacional) en este contexto.

Este conjunto de conocimientos te proporcionará una base sólida para desarrollar
aplicaciones en C# y .NET, así como para trabajar con APIs y entender la
importancia de REST en el desarrollo de Web APIs.

## Consideraciones técnicas ##

- **Versión de .NET:** Este proyecto utiliza .NET 5.0 o una versión superior.
Puedes trabajar con la versión 8 del framework, que es la última versión LTS
disponible.

- **Creación de la API:** Para desarrollar el proyecto, utilizaraz Web API con
controladores. Aunque existe la opción de utilizar Minimal API, esta está
diseñada para el desarrollo de microservicios o pequeñas demostraciones. En
cambio, Web API con controladores es una opción más adecuada para proyectos de
cualquier tamaño y es más fácil de escalar.

## Pistas en el desarrollo del proyecto ##

Aquí dispones de una pistas para llevar a cabo el desarrollo del proyecto. Estas
son sugerencias; elige la ruta que mejor se adapte al momento de aprender.

> [!IMPORTANT]
> Recuerda consultar la documentación disponible en el [README del proyecto](
../README.md), donde encontrarás información detallada para cada objetivo de
aprendizaje.

### 1. Crear proyecto Web API ###

Para crear un proyecto Web API en C# con la plantilla "API con controladores",
puedes utilizar el siguiente comando en la terminal:

```bash
dotnet new webapi --name MiProyecto --use-controllers
```

Este comando crea un proyecto de API web con soporte para controladores.

### 2. Explorar el proyecto WeatherForecast ###

- Abre el proyecto En Visual Studio o VSCode.
- Explora los archivos generados, como WeatherForecast.cs,
Program.cs y WeatherForecastController.cs.
- Ejecuta el proyecto y prueba la ruta predeterminada `/weatherforecast`
para entender cómo funciona.

> [!TIP]
> Puedes consultar esta
> [guía adicional de Microsoft](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio)
> para obtener un respaldo adicional en tu aprendizaje.

### 3. Instalar paquetes con NuGet ###

Para instalar paquetes NuGet desde la terminal, utiliza el siguiente comando:

```bash
dotnet add package NombreDelPaquete
```

Consulta [la documentación](https://docs.microsoft.com/es-es/nuget/consume-packages/install-use-packages-dotnet-cli)
para más detalles, puedes explorar las librerías disponibles [aquí](https://www.nuget.org/)

### 4. Entity Framework ###

[Entity Framework](https://learn.microsoft.com/es-es/ef/) es un
[ORM](https://es.wikipedia.org/wiki/Mapeo_relacional_de_objetos) que
simplifica el acceso y manipulación de bases de datos. En lugar de usar SQL
directamente, puedes trabajar con objetos en tu código,
permitiéndote interactuar con la base de datos de manera más sencilla.
Es esencial que lo instales, puedes instalarlo con:

```bash
dotnet add package Microsoft.EntityFrameworkCore
```

Puedes consultar su [documentación oficial](https://docs.microsoft.com/es-es/ef/)
para empezar y conocer más.

### 5. Crear modelos ###

Un modelo en Entity Framework representa una tabla de la base de datos.
Utilizando este modelo, se generará automáticamente la tabla con los campos
correspondientes. Aquí tienes un ejemplo simple:

```csharp
// Modelo
public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string CorreoElectronico { get; set; }
}

// Creación de la tabla en la base de datos
public class ApplicationDbContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
}

```

### 6. Fluent API ###

[Fluent API](https://learn.microsoft.com/es-es/ef/core/modeling/) en
EF es una forma de configurar el modelo de datos en el código,
proporcionando un control más preciso sobre cómo se mapean las clases
a las tablas y sus relaciones en la base de datos.

### 7. Conectarse a PostgreSQL ###

Para conectarte PostgreSQL necesitaras [Npgsql](https://www.npgsql.org/doc/index.html),
puedes instalarlo con:

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

Luego necesitaras configurar en tu Context como conectarse:

```csharp
    var connectionString = "Host=myhost;Database=mydatabase;Username=myuser;Password=mypassword";
    var connection = new NpgsqlConnection(connectionString);
    optionsBuilder.UseNpgsql(connection);
```

### 8. Ejecutar migraciones ###

Las migraciones son scripts que permiten actualizar la base de datos
según cambios en tus modelos. Se crean migraciones que describen las
modificaciones y luego se aplican a la base de datos, asegurando la
consistencia entre el modelo y la estructura de la base de datos.
Puedes ejecutarlas con el siguiente comando:

```bash
dotnet ef migrations add MiMigracion
dotnet ef database update
```

### 9. Crear controladores ###

Los controladores manejaran las solicitudes HTTP en una API.
Utilizarás atributos como [HttpGet]que definen cómo
los métodos del controlador responden a las solicitudes HTTP, Ejemplo:

```csharp
[Route("api/[controller]")]
[ApiController]
public class MiControlador : ControllerBase
{
    // Tu lógica de negocio puede ir aquí
}
```

### 10. Probar con Postman o Thunder Client ###

Usa [Postman](https://www.postman.com/) o [Thunder Client](https://www.thunderclient.io/)
para probar tus rutas y métodos según los hayas desarrollado.

### 11. Visualizar documentación con Swagger ###

Debes utilizar [Swagger](https://docs.microsoft.com/es-es/aspnet/core/tutorials/web-api-help-pages-using-swagger)
para documentar tus endpoint, [aquí](https://learn.microsoft.com/es-es/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-8.0)
puedes encontrar documentación para comenzar a utilizarlo en tu proyecto.

### 12. Desarrollar pruebas con xUnit ###

Para escribir pruebas [xUnit](https://xunit.net/docs/getting-started/netcore/cmdline),
instala el paquete:

```bash
dotnet add package xunit
```

Ya instalada desarrolla pruebas para cada endpoint,
puedes utilizar [la documentación oficial de Microsoft](https://learn.microsoft.com/es-es/dotnet/core/testing/unit-testing-with-dotnet-test)
como guía para escribir pruebas efectivas.
