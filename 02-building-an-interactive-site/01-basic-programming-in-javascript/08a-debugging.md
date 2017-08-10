# Keep Calm and Debug in JS
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos

- Entender, a través de casos prácticos, cómo aplicar los conceptos de `funciones`, `arrays` y `objetos` para la resolución de problemas

***

Este contenido es un extracto del medium post: https://medium.com/laboratoria-how-to/debugging-ac7295f52a5b

***

En este post veremos acerca de depuración en JavaScript, pero antes de ahondar en el tema, entendamos ¿qué es debugging?.

## Debugging: Encontrar y solucionar el bug
¿Qué es debugging (depuración en español) y porqué es importante?

Debugging es un proceso de identificación y resolución de errores (bugs). ¿A veces te has encontrado con la situación de realizar todo el código de un proyecto o script, luego lo pruebas y te das cuenta de que no funciona como esperabas? El paso siguiente, es volver a tu código y buscar la línea en la que puede estar fallando, ¿cierto? Pues, dicho proceso es considerado “depuración”, encontrar ¿cuál es el error?, ¿porqué falla?, ¿cómo fue que falló?, ¿estará afectando otra parte del código?.
Y su importancia, ya vista implícitamente, es que nos permite identificar errores para ser solucionados, además de no ser víctimas de memes como:

## Tipos de Errores
Cuando hablamos de depuración, estamos hablando de errores y cuando programamos es muy probable que ocurran 2 tipos de errores: errores de sintaxis y errores lógicos.
> Un error de sintaxis se produce al escribir, incorrectamente, alguna parte del código fuente de un programa. De forma que, dicho error impedirá, tanto al compilador como al intérprete, traducir dicha instrucción, ya que, ninguno de los dos entenderá qué le está diciendo el programador. — Wikipedia

```js
/*
 * Errores de sintaxis
 */

// Nombre de variable con tilde
var número = 10;

// Error de operador: = es asignación, mientras, == es comparación, y, === es comparación estricta
if (numero = 0) {
  console.log("Cero");
} else if (numero > 0) {
  // Positivo debe de ir entre comillas debido a que es un string y no una variable definida anteriormente
  console.log(Positivo);
} else {
  // `lo` no es un método del objeto `console`, el método deseado en este snippet es `console.log`
  // Este tipo de errores que ocurren al momento de escribir es conocido como un `typo`
  console.lo("Negativo");
}
```

> Los errores lógicos son errores que impiden que su programa haga lo que estaba previsto. Su código puede compilarse y ejecutarse sin errores, pero el resultado de una operación puede generar un resultado no esperado. — Microsoft Developer Network

```js
/*
 * Error lógico
 */

// Función que espera 2 números como parámetros para devolver la suma de ambos
var suma = function (num1, num2) {
  return num1 + num2;
};

// Imaginemos que el número 1 es 6
var num1 = prompt("Ingrese el número 1");
// Imaginemos que el número 2 es 4
var num2 = prompt("Ingrese el número 2");

var resultado = suma(num1, num2);

// Resultado esperado: 10
// Resultado obtenido: "64"
console.log(resultado);

// El error que ocurre en este snippet es que todo lo que ingresa el usuario mediante un prompt es un string,
// y debemos de considerarlo para obtener el resultado que esperamos.
// En este caso, tendríamos que convertir el tipo de dato de string a número.

```

## ¿Cómo debuggear en JS?
Para depurar en JavaScript podemos hacer uso de 2 herramientas: DevTools del navegador y el debugger statement.

### DevTools
El DevTools (así se llama en Chrome pero existe lo mismo en otros navegadores) es una herramienta usada para la inspección y depuración de todo lo que ocurre en nuestra aplicación web.

Para acceder a ella existen diversos métodos, uno de los más sencillos es abrir la web app que deseas depurar, dar clic derecho en cualquier parte de dicha página y seleccionar la opción Inspect o Inspeccionar.

Por defecto, abrirá en una pestaña llamada Elements o Elementos; sin embargo, para hacer debug de nuestro código JavaScript debemos de cambiar a la pestaña Sources o Fuente.

Probablemente, al ver el contenido de la pestaña Sources, solo verás un archivo HTML y ningún archivo JS por más que sepamos que si se está usando. Para poder visualizar los archivos JS que usa nuestra web app, solo es necesario recargar la página.

¿No te quedó claro lo anterior? No te preocupes, a continuación verás un GIF en el cual muestra todo lo mencionado anteriormente.

!!!!!!!GIF!!!!!!

Para la depuración del código JS, podemos hacer uso de **breakpoints**, que son puntos donde queremos que nuestro código se detenga en tiempo de ejecución.

En el siguiente ejemplo, tenemos un código que verifica si el número ingresado por un usuario es cero, positivo o negativo.

```js
var numero = prompt("Ingrese un número");
numero = Number(numero);

if (numero === 0) {
  alert("Cero");
} else if (numero > 0) {
  alert("Positivo");
} else {
  alert("Negativo");
}
```

Para poner un breakpoint en el DevTools solo tienes que dar clic en el número que indica la línea de código donde queremos detener el script. Una vez puesto el breakpoint debemos de recargar la página para que se detenga donde le indicamos.

Una vez detenido, la línea de código donde pusimos el breakpoint se sombreará, mientras que la web se pondrá opaco y mostrará un mensaje Paused in debugger junto a 2 botones, el primero (color azul) llamado Resume Script Execution hace referencia a seguir la ejecución hasta un siguiente breakpoint o hasta que termine el script, y el segundo (color gris) llamado Step over next function call refiere a seguir el flujo de ejecución del programa.

A continuación puedes ver lo mencionado en un GIF:

!!!!!!GIF!!!!!

Un par de botones que nos ayudan a depurar nuestro código son: Step into next function call y Step out of current function. El primero lo que nos permite es ingresar al código de una función que usamos en tiempo de ejecución, mientras que el segundo nos permite salir de la función en la que nos encontramos depurando.

En el siguiente ejemplo, si tuviéramos un breakpoint en la línea 8, y usáramos el botón de Step over next function, se iría hacia la línea 9; no obstante, si usamos el botón de Step into next function call, ingresaría a la línea de código número 2 ya que es el código que está dentro de nuestra función.

Es momento de probarlo:

```js
function factorial(numero) {
  if (numero === 1) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

var resultado = factorial(5);
console.log(resultado);

```
!!!!!!!!!!!!GIF!!!!!!!

### Debugger Statement
El segundo método para depurar un código es usando una palabra reservada en JS llamada debugger. Esta sentencia lo que nos permite es especificar en el código la línea exacta donde queremos que se detenga nuestra aplicación web para ser depurada.

> Nota: Para que el script se detenga en la sentencia debugger debemos de tener el DevTools abierto y luego recargar la página.

A continuación una demostración usando el siguiente script:

```js
var numero = parseInt(prompt("Ingresa un número (del 1 al 10):"));
var numeroAleatorio = Math.floor(Math.random() * 10);

debugger;
if (numeroAleatorio === numero) {
    console.log("Adivinaste!");
} else {
    console.log("Perdiste! El número es " + numeroAleatorio);
}
```

!!!GIF!!!!

Para poner en práctica lo leído en este post, puedes depurar el siguiente código:

```js
/*
 * Corrige el siguiente código de tal forma que obtengas el resultado esperado,
 * usa las técnicas de depuración que conoces para encontrar y solucionar el error.
 */

var revertirTexto = function (texto) {
    var textoInvertido = "";
    var longitud = texto.length;
    for (var i = longitud; i > 0; i--) {
        textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
};

var resultado = revertirTexto("Laboratoria");
// Resultado actual: airotaroba
// Resultado esperado: airotarobaL
console.log(resultado);

/*** HINT: Son 2 cambios para que quede correctamente ***/

```

***

[Continuar](09-quiz-1.md)
