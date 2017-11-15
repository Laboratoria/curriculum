# Producto Final: Data Dashboard

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `15h`

## Objetivos

- A continuación te presentamos el enunciado del reto final de este curso.

***

## Sobre el cliente

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al desempeño de las estudiantes para
apoyarlas en su aprendizaje.

## Requerimientos

Para el presente producto, tomaremos en cuenta las 4 sedes de Laboratoria hasta
el momento y las diversas generaciones que han pasado por cada una de éstas.

La data entregada deberá ser procesada para poder mostrar los datos más
relevantes que las TMs necesitan:

- El total de estudiantes presentes por sede y generación.
- El porcentaje de deserción de estudiantes.
- La cantidad de estudiantes que superan la meta de puntos en promedio de todos
  los sprints cursados. La meta de puntos es 70% del total de puntos.
- El porcentaje que representa el dato anterior en relación al total de
  estudiantes.
- El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se
  calcula, en base a la encuesta que las estudiantes responden al respecto de
  la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

  ```text
  [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
  [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
  [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

  [NPS] = [Promoters] - [Detractors]
  ```
- La cantidad y el porcentaje que representa el total de estudiantes que superan
  la meta de puntos técnicos en promedio y por sprint.
- La cantidad y el porcentaje que representa el total de estudiantes que superan
  la meta de puntos de HSE en promedio y por sprint.
- El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
- La puntuación promedio de l@s profesores.
- La puntuación promedio de l@s jedi masters.

Además de estos datos, las TMs requieren poder ver el listado de estudiantes
por sede y generación, mostrando su nombre completo, foto y promedio de puntaje
técnico y de HSE.

## Diseño

El siguiente es un diseño que se planteó como una base para representar los
datos que las TMs necesitan, sin embargo, no es obligatorio seguirlo, se aceptan
propuestas que ayuden a la comprensión de los datos presentados.

[Propuesta de diseño](https://marvelapp.com/104ejifg/)

## Adicionales

En Laboratoria (y sobre todo las TMs) somos adictos a la representación gráfica
de los datos y como muestra el diseño, sería ideal poder mostrar los datos
procesados en un gráfico como el diseño propone u otra alternativa.

> Nota: En la etapa de diseño de la experiencia del producto, nos dimos cuenta
> que [Google Charts](https://developers.google.com/chart/interactive/docs/quick_start)
> podría ser una opción para desarrollar estos gráficos, pero no es la única que
> se puede usar :smiley:.

Además, la proactividad (siempre de las TMs :joy:) hace que el siguiente
requerimiento adicional sea muy útil:

> Tener un botón que permita indicar que una estudiante ha salido del Bootcamp y
> alterar los totales afectados por este cambio.
