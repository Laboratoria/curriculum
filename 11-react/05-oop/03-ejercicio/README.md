# Ejercicio

Vamos a crear un componente `CuentaRegresiva` que esté compuesto por un
componente `BarraDeProgreso` que exponga un método `setProgreso(progreso)` y
muestre una barra de diferente longitud, dependiendo del porcentaje, que indice
ese `progreso`. Si la duracion en 60 segundos y han trancurrido 30, la barra
debería estar pintada en un 50%.

Ademas `CuentaRegresiva`, al igual que en nuestro ejemplo de la lección, debe
iniciar y liberar un timer a la hora de ser montado y desmontado respectivamente
(en lugar de cada un segundo, cada medio). En cada tick del timer debe ejecutar
`BarraDeProgreso.setProgreso()`.

Tu estableces la duración por defecto del timer.
