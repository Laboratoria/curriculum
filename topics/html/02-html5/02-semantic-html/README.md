# HTML Semántico

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `1h`

***

## Objetivos de Aprendizaje

- Conocer elementos HTML semánticos

## HTML semántico

Como hemos visto, los `div` son un excelente recurso para agrupar contenido de
forma lógica y con ello poder darle estilos particulares a ciertas secciones.
Por muchos años se ha desarrollado usando a los `div` como único recurso para
agrupar contenido. Sin embargo, muchas web tienden a tener una estructura
similar y a contener elementos comunes. Por ejemplo, casi todos los productos
en la web tienen una cabecera, un menú de navegación, un contenido principal,
contenido secundario, un footer, etc.

Revisando la documentación del MDN sobre
[estructura web y documentación](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/estructura)
podemos extraer:

> En nuestro código HTML, podemos crear secciones de contenido basadas en su
funcionalidad — usando elementos que representen las diferentes secciones del
contenido descritas anteriormente sin ambigüedad, de forma que las tecnologías
de ayuda y los lectores de pantalla puedan reconocer esos elementos y asistir
en tareas como "encontrar el menú de navegación", o "encontrar el contenido
principal".
>

En la siguiente imagen vemos como era el uso de HTML antes, como se puede
observar hay muchos `<div>`. Ahora gracias a la semántica de HTML 5 podemos
usar nuevas etiquetas para estructurar correctamente una página web.

![html antes y ahora](https://user-images.githubusercontent.com/92090/201944530-c9e13e36-a290-4bd0-931d-919cfb87f748.gif)

Para implementar estas secciones semánticas, HTML dispone de etiquetas adecuadas
que podemos usar para representar estas secciones. Revisa el link anterior e
investiga el uso de los siguientes elementos semánticos:

- `<header>`
- `<nav>`
- `<main>`
- `<aside>`
- `<article>`
- `<section>`
- `<figure>`
- `<footer>`
