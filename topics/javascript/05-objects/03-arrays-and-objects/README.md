---
type: read
duration: 60min
---

# Combinando arrays con objects

## Objetivos de Aprendizaje

- Entender, por medio de un ejemplo, cómo combinar las dos estructuras de datos
  aprendidas en esta unidad: `arrays` y `objects`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en 4 de
[JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015.

***

## Combinando arrays con objects

Ya hemos visto el caso de tener un `array` como valor de una propiedad
**dentro** de un `object` (por ejemplo, un `array` de los protagonistas de un
`object` movie), pero otra combinación bastante común para agrupar data es
tener un `array` **de** `objects`.Veamos un ejemplo:

Imaginemos que tenemos data de 3 estudiantes de Laboratoria y queremos
estructurarla en nuestro programa. Para cada estudiante, tenemos cierta data: su
 nombre, sus puntos, los cursos que ha completado y si la estudiante ha
abandonado o sigue cursando el programa.

Una manera de estructurar esta data sería crear un `object` para cada estudiante
, cada uno con su información, y luego un `array` que contenga los 3 `objects`.

Veamos:

```js

const michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
};

const alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

const andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
};

const students = [michelle, alexandra, andrea];

```

Fíjate que para cada propiedad de los `objects` hemos utilizado un tipo de dato
diferente:

- El nombre es un `string`
- Los puntos son un `number`
- Para saber si está estudiando o ha abandonado el programa escogimos un
  `boolean`, donde `true` significa que está activa (es decir, estudiando)
- Los cursos que ha completado son un `array`.

Qué lindo cuando ya vemos todo lo que hemos aprendido aplicado en un solo bloque
de código, ¿no? :) Lo mejor de todo es que con esta estrutura podemos acceder a
la data de manera sencilla.

A continuación Michelle te explica cómo utilizar `funciones`, `estructuras
repetitivas` y `estructuras condicionales` para imprimir en la consola:

1. Los nombres de todas las estudiantes **activas**
2. Los puntos totales de la clase
3. Los nombres de las estudiantes que han llevado el curso de **'JS avanzado'**

[![video](https://img.youtube.com/vi/M4vXJ62IIlI/0.jpg)](https://www.youtube.com/watch?v=M4vXJ62IIlI)
