# Editor de texto

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

> Definir los estilos de código nos ayudará mucho como equipo para trabajar bajo
> estandares, podríamos tener estilos de código muy generales como por ejemplo:
> Usar tabs para las indentaciones de todos los archivos o muy especificos como
> usar 4 columnas de indentación solo para los archivos HTML, pero aplicarlos
> manualmente será un dolor de cabeza constante porque tocará revisar
> constantemente que estilos debemos aplicar a cada archivo y mantener informado
> al equipo para que lo apliquen en sus respectivos IDE’s.
>
> ¡Pero calma! Para eso existe EditorConfig, para ayudarnos a automatizar y
> centralizar los estilos de código, usarlo es tan sencillo como instalar el
> plugin respectivo a nuestro IDE y agregar a nuestro proyecto un archivo
> `.editorconfig` con todos los estilos de códigos que necesitemos.
>
> Fuente: [Qué es .editorconfig y cómo usarlo](https://frontendlabs.io/3311--editorconfig-que-es-y-como-usarlo)

Ejemplo de `.editorconfig`:

```text
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Lectura complementaria

[Qué es .editorconfig y cómo usarlo](https://frontendlabs.io/3311--editorconfig-que-es-y-como-usarlo).
