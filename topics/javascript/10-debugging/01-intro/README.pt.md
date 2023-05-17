---
type: read
duration: 30min
---

# O que é debugging?

## Objetivos de Aprendizagem

- Representar graficamente as diferentes etapas de um processo e suas iterações,
  facilitando a compreensão de seu funcionamento.
- Conhecer a utilidade dos diagramas de fluxo para analisar o processo, propor
  ideias, representar os controles, etc.

***

_Debugging_ é um processo de identificação e resolução de erros (_bugs_). Você
já se deparou com a situação de programar todo o código de um projeto ou script,
testá-lo e perceber que não funciona como o esperado? O passo seguinte é
retornar ao código e procurar a linha que pode estar errada, certo? Então, esse
processo é chamado de _depuração_. Qual é o erro? Por que acontece o erro? Como
aconteceu o erro? Vai prejudicar outra parte do código?

E sua importância, já vista implicitamente, é que permite identificar os erros a
serem resolvidos e não ser vítimas de memes como esse:

![Curly Brace
Bug](https://cdn-images-1.medium.com/max/800/1*S6iw5QmBC2v_NbUzbrhwMw.jpeg)

## Tipos de Erros

Quando falamos de depuração, estamos falando de erros e quando programamos é
muito provável que aconteçam dois tipos de erros: _erros de sintaxe_ e _erros
lógicos_.

> Um **erro de sintaxe** é gerado ao escrever, incorretamente, alguma parte do
> código fonte do programa. Esse erro impedirá, tanto ao compilador como ao
> intérprete, traduzir aquela instrução, já que nenhum dos dois entenderá o que
> o programador está dizendo. — Wikipedia

```javascript
/*
 * Erros de sintaxe:
 */

// Nome da variável começando com número
const 1cosa = 10;

/*
 *
 * Erro de operador:
 * '=' é atribuição enquanto que '==' é comparação e '===' é comparação estrita.
 *
 */
if (numero = 0) {
  console.log('Zero');
} else if (numero > 0) {
  /*
   *
   * Positivo deve ser entre aspas pois é uma string
   * e não uma variável definida anteriormente.
   *
   */
  console.log(positivo);
} else {
  /*
   *
   * `lo` não é um método do objeto `console`. O método desejado neste
   * snippet é `console.log`.
   * Este tipo de erro que ocorre no momento de escrever é conhecido
   * como um `typo`.
   *
   */
  console.lo('Negativo');
}
```

> Os **erros lógicos** são erros que impedem que seu programa faça o que estava
> previsto. Seu código pode compilar e executar sem erros, mas o resultado da
> operação pode gerar um resultado inesperado. — Microsoft Developer Network.

```javascript
/*
 * Erro lógico
 */

// Função que espera 2 números como parâmetros para retornar a soma de ambos.
const soma = (num1, num2) => num1 + num2;

// Imaginemos que o número 1 é 6.
const num1 = prompt('Digite o número 1');

// Imaginemos que o número 2 é 4.
const num2 = prompt('Digite o número 2');

const resultado = soma(num1, num2);

// Resultado esperado: 10.
// Resultado obtido: "64".
console.log(resultado);

/*
 *
 * O erro que acontece neste snippet é que tudo que o usuário digita por um prompt é
 * uma string e devemos considerar isso para obter o resultado desejado.
 * Neste caso, teríamos que converter o tipo de dado de string para número.
 *
 */
```
