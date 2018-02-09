# APIs públicas con seguridad

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Entender las APIs de terceros que necesitan algún método de autenticación

### APIs con Autenticación basada en tokens

> Una de las nuevas tendencias en cuanto al desarrollo web moderno se refiere,
> es la autenticación por medio de Tokens y que nuestro backend sea un
> _API RESTful_ sin información de estado, _stateless_.

> El funcionamiento es el siguiente:

> El usuario se autentica en nuestra aplicación, bien con un par
> usuario/contraseña, o a través de un proveedor
> como puede ser Twitter, Facebook o Google por ejemplo.
> A partir de entonces, **cada petición** HTTP que haga el usuario va
> acompañada de un **Token** en la cabecera.
> Este Token no es más que una firma cifrada que permite a nuestro
> API identificar al usuario. Pero este Token no se almacena en el servidor,
> si no en el lado del cliente (por ejemplo en localStorage o sessionStorage)
> y el API es el que se encarga de descrifrar ese Token y redirigir el flujo
> de la aplicación en un sentido u otro.

> Como los tokens son almacenados en el lado del cliente, no hay información
> de estado y la aplicación se vuelve totalmente escalable.
> Podemos usar el mismo API para diferentes apliaciones (Web, Mobile, Android,
> iOS, ...) solo debemos preocuparnos de enviar los datos en formato JSON y
> generar y descrifrar tokens en la autenticación y posteriores peticiones HTTP
> a través de un middleware.

![autenticacion-token](https://carlosazaustre.es/content/images/2015/10/autenticacion-basada-en-token.png)

Esto es un extracto de un [post](https://carlosazaustre.es/que-es-la-autenticacion-con-token/) de Carlos Azaustre

### APIs con Autorización abierta

Open Authorization (OAuth) es un estándar abierto que permite flujos simples
de autorización para sitios web o aplicaciones informáticas. Se trata de un
protocolo, que permite autorización segura de una API de modo estándar y
simple para aplicaciones de escritorio, móviles y web.

OAuth permite a un usuario del _sitio A_ compartir su información en
_el sitio A_ (proveedor de servicio) con el _sitio B_ (llamado consumidor)
**sin compartir toda su identidad.**

Para desarrolladores de consumidores, OAuth es un método de interactuar con
datos protegidos y publicarlos. Para desarrolladores de proveedores de
servicio, OAuth proporciona a los usuarios un acceso a sus datos al mismo
tiempo que protege las credenciales de su cuenta. Este mecanismo es utilizado
por compañías como Google, Facebook, Microsoft, Twitter y Github para permitir
a sus usuarios compartir información sobre sus cuentas con aplicaciones de
terceros o sitios web.

Para saber más al respecto podemos entrar el la página oficial de
[OAuth](https://oauth.net)
