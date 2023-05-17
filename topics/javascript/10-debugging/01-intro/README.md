---
type: read
duration: 30min
---

# ¿Qué es debugging?

## Objetivos de Aprendizaje

- Representar gráficamente las distintas etapas de un proceso y sus iteraciones,
  facilitando la comprensión de su funcionamiento.
- Conocer la utilidad  de los diagramas de flujo para analizar el proceso,
  proponer ideas, representar los controles, etc.

***

Debugging es un proceso de identificación y resolución de errores (bugs). ¿A
veces te has encontrado con la situación de realizar todo el código de un
proyecto o script, luego lo pruebas y te das cuenta de que no funciona como
esperabas? El paso siguiente, es volver a tu código y buscar la línea en la que
puede estar fallando, ¿cierto?. Pues, dicho proceso es considerado _depuración_,
encontrar ¿cuál es el error?, ¿porqué falla?, ¿cómo fue que falló?, ¿estará
afectando otra parte del código?.

Y su importancia, ya vista implícitamente, es que nos permite identificar
errores para ser solucionados, además de no ser víctimas de memes como:

![Curly Brace Bug](https://cdn-images-1.medium.com/max/800/1*S6iw5QmBC2v_NbUzbrhwMw.jpeg)

## Tipos de Errores

Cuando hablamos de depuración, estamos hablando de errores y cuando programamos
es muy probable que ocurran 2 tipos de errores: _errores de sintaxis_ y
_errores lógicos_.

> Un **error de sintaxis** se produce al escribir, incorrectamente, alguna parte
> del código fuente de un programa. De forma que, dicho error impedirá, tanto al
> compilador como al intérprete, traducir dicha instrucción, ya que, ninguno de
> los dos entenderá qué le está diciendo el programador. — Wikipedia

```javascript
/*
 * Errores de sintaxis
 */

// Nombre de variable empezando con número
const 1cosa = 10;

/*
 *
 * Error de operador:
 * = es asignación, mientras, == es comparación, y, === es comparación estricta
 *
 */
if (numero = 0) {
  console.log('Cero');
} else if (numero > 0) {
  /*
   *
   * Positivo debe de ir entre comillas debido a que es un string,
   * y no una variable definida anteriormente
   *
   */
  console.log(Positivo);
} else {
  /*
   *
   * `lo` no es un método del objeto `console`, el método deseado en este
   * snippet es `console.log`
   * Este tipo de errores que ocurren al momento de escribir es conocido
   * como un `typo`
   *
   */
  console.lo('Negativo');
}
```

> Los **errores lógicos** son errores que impiden que su programa haga lo que
> estaba previsto. Su código puede compilarse y ejecutarse sin errores, pero el
> resultado de una operación puede generar un resultado no esperado. — Microsoft
> Developer Network

```javascript
/*
 * Error lógico
 */

// Función que espera 2 números como parámetros para devolver la suma de ambos
const suma = (num1, num2) => num1 + num2;

// Imaginemos que el número 1 es 6
const num1 = prompt('Ingrese el número 1');

// Imaginemos que el número 2 es 4
const num2 = prompt('Ingrese el número 2');

const resultado = suma(num1, num2);

// Resultado esperado: 10
// Resultado obtenido: "64"
console.log(resultado);

/*
 *
 * El error que ocurre en este snippet es que todo lo que ingresa el usuario
 * mediante un prompt es un string, y debemos de considerarlo para obtener el
 * resultado que esperamos.
 * En este caso, tendríamos que convertir el tipo de dato de string a número.
 *
 */
```
