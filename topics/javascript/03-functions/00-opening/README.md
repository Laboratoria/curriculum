---
type: read
duration: 15min
---

# Apertura

En esta unidad, veremos en profundidad el tema de funciones, aprovechando que
JavaScript está fuertemente influenciado por la programación funcional desde su
diseño, y nos ofrece características importantes como asignar funciones a una
variable, pasar como parámetro de otra función, cambiar el scope de variables,
asignar como valor de una propiedad de un objeto, etc.

Las funciones son bloques de construcción de aplicaciones que engloban múltiples
sentencias de código. Son particularmente importantes en JavaScript porque
soporta características como _first-class functions_, _functions as objects_,
_runtime function definition_ y más que veremos en esta unidad.

A continuación, se listan algunos principios que te ayudarán a escribir mejores
funciones:

* **Don't Repeat Yourself (DRY)**: Es muy común que a lo largo del desarrollo de
  una solución nos encontremos con un patrón que se va repitiendo a lo largo de
  nuestro código. Una vez identificado un patrón, es tiempo de escribir una
  función, objeto o módulo que encapsule dicho patrón para que sea fácilmente
  reusable. Esto ayuda también a que si encontramos algún bug o quisiéramos
  agregar funcionalidad, solo se tendría que hacer en un lugar. Además,
  escribiendo una función reusable te obliga a aislar el patrón del problema, lo
  cual ayuda a tener funcionalidad relacionada de manera agrupada.

* **Do One Thing (DOT)**: Cada función debe hacer solo una cosa y hacerlo lo
  mejor posible. Siguiendo este principio hará tu función más reusable, legible y
  fácil de depurar.

* **Keep It Simple Stupid (KISS)**: Si bien las funciones deben de hacer solo
  una cosa, es mejor hacerlo súper claro manteniendo la sencillez y no agregando
  complejidad innecesaria para llevar a cabo una solución. Esto no quiere decir
  que la solución no sea óptima, sino que pueda ser legible para poder mantenerla
  a lo largo del tiempo.

* **Less Is More**: Para alcanzar la mayor legibilidad posible y reducir la
  tentación de hacer más de una cosa, las funciones deben ser tan cortas como sea
  posible. Si la función se vuelve muy extensa, es bueno considerar separarlo en
  subtareas y datos a lo largo de funciones y objetos.
