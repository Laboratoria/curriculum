---
type: read
duration: 5min
---

# Cierre

## Resumen

Llegamos al final de la unidad ;-)

En la programación funcional, las programadoras tienden a evitar dos hábitos
comunes en otros lenguajes:

* *Mutación:* Cambio de los datos *in-situ* en vez de retornar un valor.
* *Estado compartido:* Contexto extra que no se provee como argumento a la
  función, por ejemplo, variables globales.

Al no depender del estado ni de las mutaciones, el comportamiento de cada
función está contenido. Por lo tanto, es más sencillo realizar pruebas del
comportamiento de dichas funciones, entre otra serie de beneficios.

Una vez dicho todo esto, existen ocasiones donde el uso de funciones puras no es
posible, especialmente en funciones que emplean *side-effects* para llevar a
cabo su cometido, por ejemplo el uso de promesas en JavaScript. Pero este tema,
lo veremos en una siguiente lección.

## Respondamos juntxs las preguntas de la apertura

* Cómo evitar que nuestras funciones tengan efectos colaterales?
* Por qué es beneficioso evitar el estado compartido?
* Cuáles son las ventajas que ofrecen las funciones puras, en particular a la
  hora de hacer testing?
* Cómo evitar la mutación de objetos y arreglos?
* Qué tipos de datos son mutables e inmutables en JavaScript?
* Cómo usar métodos de arreglos como `Array#concat`, `Array#slice`, `Array#map`,
  `Array#filter`, ... para crear arreglos nuevos en vez de mutar (modificar)
  valores existentes?
* Cómo usar métodos de objetos (por ejemplo `Object.assign()`) para copiar
  propiedades y así *clonar* objetos?
* Cómo usar el *spread operator* (`...`) para copiar objetos y arreglos?
