# Exercício

* Tipo: `prática`
* Formato: `individual`
* Duração: `10min`

***

Vamos criar um componente `ContagemRegressiva`, composto por um componente `BarraDeProgresso` que implementa um método `setProgresso(progresso)` e mostra uma barra de comprimento variável, dependendo da porcentagem, indicando esse `progress`. Se a duração é de 60 segundos e já se passaram 30, a barra deveria estar preenchida em 50%.

Além disso, `ContagemRegressiva` (como em nosso exemplo da unidade) deve iniciar e liberar um _timer_ no momento em que for montado e desmontado, respectivamente (ao invés de cada segundo, cada momento). Em cada _tick_ do _timer_ você deve executar (`BarraDeProgresso.setProgresso()`).

Você define a duração por padrão do _timer_.
