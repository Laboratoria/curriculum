# Producto Final: Data Dashboard

- Tipo: `practice`
- Formato: `guiado`
- Duración: `15h`

## Objetivos

- A continuación te presentamos los casos planificados que pueden ocurrir
  durante el desarrollo del producto.

***

## Contexto

Este producto no tiene un lineamiento específico y está orientado a que las
estudiantes planifiquen, organicen y prioricen sus tareas en base a los
requerimientos del cliente (las TMs :japanese_ogre: :sweat_smile:).

## A tener en cuenta

En muchos de los casos, esta será la primera vez que desarrollen un producto
bajo esta narrativa, así que habrán muchas dudas :smiley:. Algo súper importante
es que **LAS NOTAS NO IMPORTAN** para este producto (pero no significa que no
revisaremos el progreso de las estudiantes).

Es muy probable, que muchas (o tal vez todas) no puedan terminar el producto
completo (no interesa, estamos seguros que aprenderán mucho :muscle:). Hay
ciertas cosas que ellas tendrán que darse cuenta que necesitan aprender y que
no le hemos enseñado (aquí entra la parte autodidacta, así que mucho :eyes:),
aquí un listado de las cosas que probablemente aprendan en la marcha:

- El producto es en parejas, esto significa que deberán aprender a trabajar
  colaborativamente, esto significa sufrir con **Git** :sweat_smile:.

  > Aquí l@s profes podrán apoyar en resolver dudas mas no sugerir, es decir,
  > si las estudiantes optan por darse permisos en un único repositorio o
  > trabajar con Pull Requests, cualquiera es válido, solo apoyemos en dudas
  > basadas en la decisión que ellas mismas tomaron.

- El diseño, como ya han visto, hay una propuesta en Marvel, la idea no es que
  repliquen tal cual, pero tampoco que tomen mucho tiempo tratando de proponer
  el mejor diseño posible y al final solo quede en eso, así que una revisión de
  avance diaria no estaría nada mal.

  > En general, ellas no han visto temas de layouting ni responsive, por lo que
  > es muy probable que usen margins y paddings para todo, en esto punto,
  > digamos que es aceptable :wink:. Si agregan grids, flexbox u otra forma de
  > posicionar sus elementos, no es malo, siempre y cuando les quede claro que
  > pudieron haberlo realizado con lo que ellas ya han visto.

- Representación de datos, en algunos casos será la primera vez que ellas
  tendrán todos los datos necesarios para procesar en una variable predefinida,
  se complicarán iterándolos, tratando de sacar los datos que ellas necesitan.
  Esto implica mucha lógica y por ende causará estrés, aconsejar que hagan un
  pseudocódigo no sería una mala idea.

  > Si las estudiantes deciden alterar la estructura de los datos otorgados,
  > está súper bien, siempre y cuando se mantenga el mismo resultado a mostrar.

- Las gráficas, lo primero a tener en mente es que esto es un **ADICIONAL**,
  pero si ellas deciden priorizar esto, no las detengamos, se darán cuenta que
  si bien es algo cool de programar, no agrega valor inicial al cliente y
  aprenderán a priorizar.

  > Recordemos que no han visto Google Charts, D3 ni otra herramienta para hacer
  > gráficos de datos, así que si no lo logran, no hay problema. Si encuentran
  > un plugin de jQuery y logran poner un gráfico, no las limitemos a que no
  > debieron usarlo, veamos su iniciativa y curiosidad por seguir aprendiendo.

## Preguntas esperadas

### ¿Cómo haré las gráficas?

Primero, tener en cuenta que es adicional y si queda solo una imagen es más que
suficiente.

### ¿Qué es dropout?

Es la deserción de estudiantes.

### ¿Cómo se calcula el % de dropout?

```text
[Cantidad de estudiantes que dejaron el Bootcamp] / [Total Estudiantes] * 100
```

### ¿Por qué el dropout está en color rojo?

Siempre está en rojo porque es algo que en el mundo ideal debería ser cero.

### ¿Qué significa _achievement_?

Es la sección de estudiantes que cumplen con la meta de puntos obtenidos en
clase.

### ¿Qué significa ese **105** de achievement?

Es el promedio de estudiantes que cumplieron la meta de puntos durante todos los
sprints cursados. Es decir, si soy la estudiante "Ada Lovelace", y he cursado
hasta el momento 3 sprints con las siguientes notas:

- Sprint 1 (S1):

Técnico | HSE
------- | ---
1300    | 400

- Sprint 2 (S2):

Técnico | HSE
------- | ---
1500    | 800

- Sprint 3 (S3):

Técnico | HSE
------- | ---
1000    | 1200

Lo primero que debemos de hacer es encontrar el promedio de puntaje técnico y
de HSE:

```text
[Puntaje Técnico] = ([Técnico S1] + [Técnico S2] + [Técnico S3]) / [Cantidad Sprints]
[Puntaje HSE] = ([HSE S1] + [HSE 2] + [HSE 3]) / [Cantidad Sprints]
```

Aplicados a nuestra estudiante ejemplo, sería:

```text
[Puntaje Técnico] = (1300 + 1500 + 1000) / 3 = 1266.67
[Puntaje HSE] = (400 + 800 + 1200) / 3 = 800
```

#### ¿Por qué tenemos que hacer todo eso?

Porque la _meta_ de una estudiante se basa tanto en su puntaje técnico como de
HSE.

#### ¿Cuánto es la meta?

La meta es 70% de puntos disponibles tanto para ambos puntajes.

#### ¿Cuánto es el puntaje disponible?

Hasta el momento, los puntajes técnicos disponibles por sprint es 1800 para
puntos técnicos y 1200 para puntos de HSE.

Esto quiere decir, que la meta es:

- Meta puntos técnicos: **1260**
- Meta puntos HSE: **840**

#### Volviendo al ejemplo

Si recordamos el puntaje obtenido por Ada, obtuvo `1266.67` en técnico (supera
la meta) y `800` en HSE (no supera la meta).

Por lo tanto, esta estudiante **NO** es contada para mostrar el total de estudiantes
que cumplen la meta :scream: :gun:.

#### ¿Te pareció complejo?

Bienvenid@ al mundo de las TMs :sweat_smile:, trata de comunicarlo de la mejor
manera posible a las estudiantes, este fue un ejemplo largo para detallar lo que
se busca calcular y lo puedas tener súper claro al momento de transmitirlo
:smiley: :muscle:.

### ¿Qué significa el porcentaje de achievement?

Es el porcentaje de estudiantes que cumplen la _meta_. Es decir, si son `120`
estudiantes, y solo `80` cumplen la meta, el % de achievement sería `75%`
:tada:.

### ¿Tiene algún significado los colores?

Sí, básicamente es un semáforo que mejora la visibilidad de los resultados.
Están basados en el porcentaje de estudiantes que cumplen la meta:

Color | Métrica
----- | -------
Rojo | < 70%
Amarillo | 70% a 80%
Verde | > 80%

### ¿Qué es el Net Promoter Score?

Es el indicador de estudiantes que recomendarían a Laboratoria y normalmente se
usa sus siglas NPS.

### ¿Cómo se calcula el NPS?

Las estudiantes reciben una encuesta, donde se les pide indicar del 1 al 10,
cuánto recomendarían a Laboratoria. Y en base a los resultados, se calcula
bajo la siguiente fórmula (que se dio en las instrucciones para las estudiantes):

```text
[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

[NPS] = [Promoters] - [Detractors]
```

#### Entonces... ¿No se toma en cuenta las respuestas 7 y 8?

No para el resultado final del NPS, pero si se toma en cuenta cuántas
respondieron con esos valores.

### ¿Qué son los porcentajes al lado de promoters, passive, detractors?

Cada uno de esos valores es el porcentaje de estudiantes que terminan en cada
una de dichas categorías (está en la fórmula del NPS :wink:).

### ¿El color del % de NPS significa algo?

Sí, es un semáforo igual, en base al resultado obtenido.

[:pray: Ayuda si alguien sabe cuáles son los indicadores :pray:]

### ¿Qué significa la sección de tech skills y soft skills?

En unas preguntas anteriores, está la sección de `achievement` (puntos técnicos +
HSE). En estas secciones, se saca el detalle de cada uno con los mismos
indicadores (los colores siguen la misma lógica).

- Meta puntos técnicos: **1260**
- Meta puntos HSE: **840**

La gran diferencia es que se puede filtrar por sprint o ver el acumulado de
todos los sprints cursados.

### ¿Qué es la satisfacción de estudiantes?

En cada sprint, las estudiantes responden una encuesta en base a la satisfacción
de estudiar en Laboratoria y sus expectativas. Los resultados posibles son:
0 - No cumple, 1 - Cumple y 2 - Supera.

### ¿Cómo se calcula la satisfacción de estudiantes?

Se suma la cantidad de estudiantes que responden `1 - Cumple` y `2 - Supera`.

### ¿Qué representa entonces el número **140** en el diseño propuesto?

Primero, debería ser un porcentaje (digamos que fue un error intencional :joy:),
por lo tanto, no basarse en el número.

Lo que debería representar es el porcentaje de estudiantes que respondieron con
los resultados expresados en el punto anterior, **PERO** solo del último sprint.

Es decir, si hay 3 sprints, solo muestra el % de satisfacción de estudiantes del
último sprint :smiley:.
