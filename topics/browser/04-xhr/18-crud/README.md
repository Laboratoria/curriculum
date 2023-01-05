---
type: read
duration: 30min
---

# CRUD

## Objetivos de Aprendizaje

- Entender qué es CRUD y cómo podemos generar una aplicación consumiendo un API
  RESTful

## CRUD: Create, Read, Update and Delete

¿Te has percatado que casi toda la interacción qué haces en la web tiene que ver
con una base de datos? Cuando entras al perfil de la persona que stalkeas, todas
sus fotos, publicaciones, comentarios y demás está almacenado en algún lugar
(base de datos), cuando subes una foto en Instagram o envías un e-mail, estás
creando un nuevo registro en la database, cuando cambias tu foto de perfil
en Whatsapp, estás editando algo existente en la BD, por último, cuándo borras
el mensaje cuando te equivocas de conversación o grupo, estás alterando tu DB.

> El uso de distintas palabras para referirse a base de datos en el párrafo
> anterior fue intencional para saber que hacen referencia a lo mismo.

A todas las acciones descritas anteriormente que tienen interacción con la base
de datos, tienen un acrónimo en programación: **CRUD**.

CRUD es el acrónimo de "_Crear, Leer, Actualizar y Eliminar_", palabras que
corresponden respectivamente a los verbos HTTP más utilizados: **POST, GET,
PUT y DELETE.**

Estas son las operaciones más comunes que queremos tener en el caso de una API,
que manipula datos.

Para aclararnos vamos a revisar el siguiente vídeo, solo hasta el minuto 3:15.

> Nota: El vídeo dura muchísimo (1:28:04)!!! Los primeros tres minutos muestra
> lo que es un CRUD y que uso tendría en un aplicación con Firebase.
> Después, inicia con el desarrollo de la aplicación y si lo vas siguiendo
> este es un excelente ejercicio guiado.

[Vídeo](https://www.youtube.com/watch?v=cQmwK306XaI)

## Ejemplo

Aquí un ejemplo de CRUD para una lista de tareas:

<iframe
  height='760'
  scrolling='no'
  title='Plain JS CRUD Frontend'
  src='//codepen.io/ianseabrook/embed/rxvByR/?height=760&theme-id=0&default-tab=result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [Plain JS CRUD Frontend](https://codepen.io/ianseabrook/pen/rxvByR/)
  by Ian Seabrook ([@ianseabrook](https://codepen.io/ianseabrook)) on
  [CodePen](https://codepen.io).
</iframe>

Si bien el ejercicio anterior pierde los cambios al recargar la página, ésta
muestra el principio de las acciones que implica un CRUD. Al momento de
practicar (en las siguientes lecciones), ¡lo pondremos en práctica con una base
de datos real!
