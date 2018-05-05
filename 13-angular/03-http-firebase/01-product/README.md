# Creación de producto

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `150min`

## Objetivos de la lección

* Avance de producto

***

En esta etapa lo que haremos es reemplazar el arreglo por firebase. La idea es
que los versos queden almacenados en la base de datos y que se actualice el
poema sea donde sea que abramos la página. Así permitiremos que varios jugadores
puedan jugar al mismo tiempo. Para esto:

* Crearás un proyecto en firebase
* Guardarás los versos en la base de datos, para esto quizá sea bueno pedir el
  nombre del jugador en el formulario, así sabemos qué jugador hizo qué verso
* Trata de enlazar los datos de firebase mediante un "listener" para que se
  actualice en el mismo momento en que otro jugador haga un nuevo verso
