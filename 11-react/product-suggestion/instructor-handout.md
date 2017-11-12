# Foco de aprendizaje

## Modularización
**El restaurante tiene 2 menús**, desayuno vs resto del día. Implementarlos como
módulos va a hacer la vida de las estudiantes más, y ayuda a mantener el código
mejor estructurado.

## Stateful vs stateless
La interfaz tiene **2 paneles principales**, los botones para escoger platos del
menú, que una vez creados no cambian, y el estado actual del pedido, que tiene
que mantener un estado.

## Manejo de estado
La **indecisión** de los clientes es importante para forzar a las estudiantes a
pensar bien cómo van a manejar el estado.

Los **adicionales** a las hamburguesas va a requerir que las estudiantes
estructuren el estado del pedido de manera más cuidadosa. No es sólo el estado
general del pedido que cambia (agregar un item, o quitarlo), sino que los items
también pueden cambiar (hamburguesa doble con queso tiene un precio distinto).

## Diseño *responsive* y *mobile*
El cliente va a usar el sistema en un **navegador**, pero en **tablets**. Aunque
el diseño que el cliente tiene como muestra ya está adaptado a tablets, _no es
lo suficientemente detallado_ como para que puedan simplemente copiarlo.
