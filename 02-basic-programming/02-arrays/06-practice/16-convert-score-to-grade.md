# 16 Convert Score to Grade

## convertScoreToGrade

Escreva uma função chamada `convertScoreToGrade`.

Dada uma pontuação, `convertScoreToGrade`retorna uma string que representa a nota da letra correspondente à pontuação dada.

Notas:

* \(100 - 90\) -&gt; 'A'
* \(89 - 80\) -&gt; 'B'
* \(79 - 70\) -&gt; 'C'
* \(69 - 60\) -&gt; 'D'
* \(59 - 0\) -&gt; 'F'
* Se a pontuação dada for maior que 100 ou menor que 0, você deve retornar 'INVALID SCORE'.

```text
var output = convertScoreToGrade(91);
console.log(output); // -> 'A'
```

