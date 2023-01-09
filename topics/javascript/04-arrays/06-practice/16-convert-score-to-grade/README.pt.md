# convertScoreToGrade

Escreva uma função chamada `convertScoreToGrade`.

Dada uma pontuação numérica, `convertScoreToGrade` devolve uma letra
\(_string_\) que representa essa pontuação.

Notas:

* \(100 - 90\) -&gt; 'A'
* \(89 - 80\) -&gt; 'B'
* \(79 - 70\) -&gt; 'C'
* \(69 - 60\) -&gt; 'D'
* \(59 - 0\) -&gt; 'F'
* Se a pontuação dada for maior que 100 ou menor que 0, você deve retornar
  'INVALID SCORE'.

```javascript
const output = convertScoreToGrade(91);
console.log(output); // -> 'A'
```
