# Variables
## Objetivos de Aprendizaje
- Aprender qué son _variables_ y su utilidad
- Conocer las buenas prácticas de nombramiento de variables

***
_El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html) disponible gracias a [hectorip](http://hectorip.github.io)_
***

## Variables
Ya conoces los tipos de datos más comunes en JavaScript. Sabes crear, combinar y transformar `numbers`, `strings` y `booleans`. Pero, qué podemos hacer con esto? Hasta ahora, todo lo que has trabajado ha sido para uso inmediato. Es decir, los nuevos valores que generamos deben ser inmediatamente utilizados o se disiparán de nuevo. Sigue en tu consola el siguiente ejemplo:

```JavaScript
'Hola, mi nombre es ' + 'Michelle' + 'y tengo ' + 19 + ' años';
// returns > "Hola, mi nombre es Michelley tengo 19 años"

```
Si quiesiera utilizar ese `string` de nuevo, digamos porque Michelle cumplió años y ahora queremos que diga 20 en lugar de 19, no lo puedo hacer. Se ha perdido.

Para atrapar y mantener los valores, JavaScript proporciona una cosa llamada `variable`. Se utiliza así:

```JavaScript
var age = 19;
// returns > undefined
```
La palabra clave (_keyword_) `var` indica que esta frase va a definir una variable. Es seguida por el nombre de la variable y, si queremos dar de inmediato un valor, con el operador = y una expresión.

La declaración anterior crea una variable llamada age (o edad en español) y se usa para retener el número 19. La consola devuelve undefined, pero no porque sea un error. Es lo que JavaScript hace cuando un comando no retorna valor. Cuando escribes 12 + 5, la consola retorna 17. Pero al declarar una variable llamada age con el valor de 19, no hay un valor de retorno. Por eso la consola simplemente devuelve undefined (en el resto de los ejemplos vamos a omitir ese undefined de retorno)

Después de que una variable se ha definido, su nombre puede ser usado como una expresión. El valor de esa expresión es el valor que la variable alberga actualmente. He aquí un ejemplo:

```JavaScript
var age = 19;
'Hola, mi nombre es ' + 'Michelle' + 'y tengo ' + age + ' años';
// returns > "Hola, mi nombre es Michelley tengo 19 años"
```

Cuando una variable apunta a un valor, eso no quiere decir que está ligada a ese valor para siempre. El operador = se puede utilizar en cualquier momento en variables existentes para desconectarlas de su valor actual y apuntarlas a uno nuevo.

```JavaScript
var age = 19;
age = 20;
'Hola, mi nombre es ' + 'Michelle' + 'y tengo ' + age + ' años';
// returns > "Hola, mi nombre es Michelley tengo 20 años"
```