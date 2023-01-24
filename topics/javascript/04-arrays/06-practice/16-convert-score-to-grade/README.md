---
env: cjs
---

# convertScoreToGrade

Escribe una función llamada `convertScoreToGrade`.

Dada una puntuación, `convertScoreToGrade` devuelve una cadena que representa el
grado de letra correspondiente a la puntuación dada.

Notas:

- (100 - 90) -> 'A'
- (89 - 80) ->' B '
- (79 - 70) -> 'C'
- (69 - 60) -> 'D'
- (59 - 0) -> 'F'
- Si la puntuación dada es mayor que 100 o menor que 0, debe devolver
  'PUNTUACION INVALIDA'.

```js
const output = convertScoreToGrade(91);
console.log(output); // -> 'A'
```
