# Ejercicio

Vamos a crear un componente `CuentaRegresiva` que esté compuesto por un componente `BarraDeProgreso` que exponga un metodo `setProgreso(procentaje)` y vaya creciendo a medida que transcurre el tiempo

Ademas `CuentaRegresiva`, al igual que en nuestro ejemplo de la lección, debe iniciar y liberar un timer a la hora de ser montado y desmontado respectivamente, pero en lugar de cada un segundo, cada medio. En cada tick del timer debe ejecutar `BarraDeProgreso.setProgreso()`.

Tu estableces la duración por defecto del timer.
