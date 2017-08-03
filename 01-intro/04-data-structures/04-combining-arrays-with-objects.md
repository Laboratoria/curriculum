# Combinando `arrays` con `objects`
- Formato: `lectura`
- Duración: `30min`

## Objetivos de Aprendizaje

- Entender, por medio de un ejemplo, cómo combinar las dos estructuras de datos aprendidas en esta unidad: `arrays` y `objects`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en 4 de [JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf), Nick Morgan, 2015;

***

## Combinando `arrays` con `objects`
Ya hemos visto el caso en el que tenemos un `array` como valor de una propiedad de un `object` (por ejemplo, los protagonistas de una película), pero otra combinación bastante común para agrupar data es tener un `array` de `objects`.Veamos un ejemplo:

Imaginemos que tenemos data de 3 estudiantes y queremos estructurarla en nuestro programa. La información de cada estudiante contiene:
* nombre
* puntos
* si la estudiante ha abandonado o sigue cursando
* cursos que ha completado

Una manera de estructurar esta data es crear un `object` para cada estudiante, cada uno con su información, y luego un `array` que contenga las 3 estudiantes. Veamos:

```js

var michelle = {
  name: "Michelle",
  points: 2000,
  isActive: true,
  courses: ["Intro JS", "JS avanzado", "JS master"]
}

var alexandra = {
  name: "Alexandra",
  points: 4100,
  isActive: true,
  courses: ["Intro JS", "JS avanzado", "Intro UX", "UX master"]
}

var andrea = {
  name: "Andrea",
  points: 800,
  isActive: false,
  courses: ["Intro JS"]
}

var students = [michelle, alexandra, andrea];

```

Fíjate que para cada propiedad de los `objects` hemos utilizado un tipo de dato diferente:
* El nombre es un `string`
* Los puntos son un `number`
* Para saber si está estudiando o ha abandonado el programa escogimos un `boolean`, donde `true` significa que está activa (es decir, estudiando)
* Los cursos que ha completado son un `array`.

Qué lindo cuando ya vemos todo lo que hemos aprendido aplicado en un solo bloque de código, ¿no? :)

Y lo mejor de todo es que la data es muy sencilla de acceder por lo bien organizada que está. Veamos varios ejemplos:

A continuación Michelle te explica cómo utilizar funciones, estructuras repetitivas y condicionales para imprimir en la consola:

1. Los nombres de las estudiantes activas
2. Los puntos totales de la clase
3. Los nombres de las estudiantes que han llevado el curso de "Intro JS" y "JS avanzado"

[![video](https://img.youtube.com/vi/QP9FF9eoh-k/0.jpg)](https://www.youtube.com/watch?v=QP9FF9eoh-k)

***
