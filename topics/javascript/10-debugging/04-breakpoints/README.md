---
type: read
duration: 40min
---

# ¿Cómo debuggear en JS?

## Objetivos de Aprendizaje

- Aprender a depurar a través del Dev Tools
- Aprender a usar el `debugger statement`

***

Para depurar en JavaScript podemos hacer uso de 2 herramientas: DevTools del
navegador y el debugger statement.

## DevTools

El DevTools (así se llama en Chrome pero existe lo mismo en otros navegadores)
es una herramienta usada para la inspección y depuración de todo lo que ocurre
en nuestra aplicación web.

Para acceder a ella existen diversos métodos, uno de los más sencillos es abrir
la web app que deseas depurar, dar clic derecho en cualquier parte de dicha
página y seleccionar la opción _Inspect_ o _Inspeccionar_.

Por defecto, abrirá en una pestaña llamada Elements o Elementos; sin embargo,
para hacer debug de nuestro código JavaScript debemos de cambiar a la pestaña
_Sources_ o _Fuente_.

Probablemente, al ver el contenido de la pestaña _Sources_, solo verás un
archivo HTML y ningún archivo JS por más que sepamos que si se está usando. Para
poder visualizar los archivos JS que usa nuestra web app, solo es necesario
recargar la página.

¿No te quedó claro lo anterior? No te preocupes, a continuación verás un GIF en
el cual muestra todo lo mencionado anteriormente.

![Chrome Dev Tools: Sources](https://cdn-images-1.medium.com/max/800/1*JhVFiJNoGZAAmlnk00y6TA.gif)

Para la depuración del código JS, podemos hacer uso de **breakpoints**, que son
puntos donde queremos que nuestro código se detenga en tiempo de ejecución.

En el siguiente ejemplo, tenemos un código que verifica si el número ingresado
por un usuario es cero, positivo o negativo.

```javascript
let number = prompt('Ingrese un número');
number = Number(numero);

if (number === 0) {
  alert('Cero');
} else if (number > 0) {
  alert('Positivo');
} else {
  alert('Negativo');
}
```

Para poner un breakpoint en el DevTools solo tienes que dar clic en el número
que indica la línea de código donde queremos detener el script. Una vez puesto
el breakpoint debemos de recargar la página para que se detenga donde le
indicamos.

Una vez detenido, la línea de código donde pusimos el breakpoint se sombreará,
mientras que la web se pondrá opaco y mostrará un mensaje _Paused in debugger_
junto a 2 botones, el primero (color azul) llamado _Resume Script Execution_
hace referencia a seguir la ejecución hasta un siguiente breakpoint o hasta que
termine el script, y el segundo (color gris) llamado _Step over next function call_
refiere a seguir el flujo de ejecución del programa.

A continuación puedes ver lo mencionado en un GIF:

![Chrome Dev Tools: Breakpoints](https://cdn-images-1.medium.com/max/800/1*DbS6jAUYz3mPJjyv8MMU-w.gif)

Un par de botones que nos ayudan a depurar nuestro código son:
_Step into next function call_ y _Step out of current function_. El primero lo
que nos permite es ingresar al código de una función que usamos en tiempo de
ejecución, mientras que el segundo nos permite salir de la función en la que
nos encontramos depurando.

En el siguiente ejemplo, si tuviéramos un breakpoint en la línea 8, y usáramos
el botón de _Step over next function_, se iría hacia la línea 9; no obstante, si
usamos el botón de _Step into next function call_, ingresaría a la línea de
código número 2 ya que es el código que está dentro de nuestra función.

Es momento de probarlo:

```javascript
function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const result = factorial(5);
console.log(result);
```

![Chrome Dev Tools: Debugging](https://cdn-images-1.medium.com/max/800/1*C3k9ZTu-q9i8GFB2P47muQ.gif)

## Debugger Statement

El segundo método para depurar un código es usando una palabra reservada en JS
llamada `debugger`. Esta sentencia lo que nos permite es especificar en el
código la línea exacta donde queremos que se detenga nuestra aplicación web para
ser depurada.

> Nota: Para que el script se detenga en la sentencia debugger debemos de tener
> el Dev Tools abierto y luego recargar la página.

A continuación una demostración usando el siguiente script:

```javascript
const number = parseInt(prompt('Ingresa un número (del 1 al 10):'));
const randomNumber = Math.floor(Math.random() * 10);

debugger;
if (randomNumber === number) {
    console.log('Adivinaste!');
} else {
    console.log('Perdiste! El número es ' + randomNumber);
}
```

![Debugger statement](https://cdn-images-1.medium.com/max/800/1*RcPHfLBSK1Bh8FzfqJlqpQ.gif)

## Ahora es tu turno

Para poner en práctica esta lectura, puedes depurar el siguiente código:

```javascript
/*
 * Corrige el siguiente código de tal forma que obtengas el resultado esperado,
 * usa las técnicas de depuración que conoces para encontrar y solucionar
 * el error.
 */

const reverse = (text) => {
  let reversedText = '';
  const textLength = text.length;

  for (let i = textLength; i > 0; i--) {
    reversedText += text.charAt(i);
  }

  return reversedText;
};

const result = reverse('Laboratoria');
// Resultado actual: airotaroba
// Resultado esperado: airotarobaL
console.log(result);

// HINT: Son 2 cambios para que quede correctamente ;)
```

Así que a partir de ahora…

![Debug all the things](https://cdn-images-1.medium.com/max/800/1*znr2Wn2kXro7XkimgplRCg.jpeg)
