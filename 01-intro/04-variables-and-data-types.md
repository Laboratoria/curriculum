# Variables y Tipos de Datos
## Objetivos de Aprendizaje
- ¿Qué son _variables_ y para qué sirven?
- Cómo nombrar _variables_
- Conocer _datatypes_ en JavaScript

## ¿Qué son variables y para qué sirven?
```_El contenido a continuación es una traducción al Español de:  
[Eloquent JavaScript](http://eloquentjavascript.net/), Marijn Haverbeke, 2014 gracias a [hectorip](http://hectorip.github.io/Eloquent-JavaScript-ES-online)_
```

Hasta ahora hemos visto cómo producir nuevos valores de viejos valores, pero esto no cambia los valores antiguos, y el nuevo valor tiene que ser inmediatamente utilizado o se disipará de nuevo. Para atrapar y mantener los valores, JavaScript proporciona una cosa llamada _variable_.

```var atrapado = 5 * 5;
```

La palabra especial (palabra clave o keyword) _var_ indica que esta frase va a definir una variable. Es seguida por el nombre de la variable y, si queremos dar de inmediato un valor, por un operador de = y una expresión.

La declaración anterior crea una variable llamada atrapado y se usa para retener el número que se produce al multiplicar 5 por 5.

Después de que una variable se ha definido, su nombre puede ser usado como una expresión. El valor de esa expresión es el valor que la variable alberga actualmente. He aquí un ejemplo:

```var diez = 10;
console.log(diez * diez);
// → 100
```

Los nombres de variables pueden ser cualquier palabra que no sea una palabra clave (tal como var). Estos no pueden incluir espacios. Los dígitos también pueden ser parte de la variable nombre —catch22 es un nombre válido, por ejemplo-, pero el nombre no debe comenzar con un dígito. Un nombre de variable no puede incluir puntuación, a excepción de los caracteres $ y_.

(((variable,asiganción))Cuando una variable apunta a un valor, eso no quiere decir que está ligada a ese valor para siempre. El operador = se puede utilizar en cualquier momento en variables existentes para desconectarlas de su valor actual y apuntarlas a uno nuevo.

var tono = "claro";
console.log(tono);
// → claro
tono = "oscuro";
console.log(tono);
// → oscuro
Podrías imaginar las variables como tentáculos, en lugar de la cajas. Estas no contienen valores; los agarran; dos variables pueden referirse al mismo valor. Un programa puede acceder sólo los valores que todavía mantiene detenidos. Cuando necesitas recordar algo, haces crecer un tentáculo para agarrarlo o cambias unos de tus tentáculos existentes para agarrarlo.

Variables as tentacles
Veamos un ejemplo. Para recordar el número de dólares que Luigi aún te debe, se crea una variable. Y luego, cuando te paga $35, le das a esta variable un valor nuevo.

var deudaDeLuigi = 140;
deudaDeLuigi = deudaDeLuigi - 35;
console.log(deudaDeLuigi);
// → 105
Cuando se define una variable sin darle un valor, el tentáculo no tiene nada que sostener, por lo que termina en el aire. Si preguntas por el valor de una variable vacía, obtendrás el valor undefined (indefinido).

Una sola declaración var puede definir múltiples variables. Las definiciones deben estar separadas por comas.
