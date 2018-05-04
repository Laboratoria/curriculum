# Guía de estilos

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

***

## Objetivos de Aprendizaje

- Usar una guía de estilos para escribir código más legible.

***

Una guía de estilo es una lista de reglas para formatear tu código. Muchas
empresas usan una guía de estilo para que toda su base de código parezca escrita
por el mismo desarrollador, en lugar de que los desarrolladores diseñen el
código de acuerdo a sus propias preferencias. Esto hace que el código sea más
fácil de leer para todos.

## La guía de estilos Laboratoria

En Laboratoria, hemos preparado una guía de estilos para que la sigas a partir
de ahora en todos tus ejercicios, lo puedes encontrar [aquí](https://github.com/Laboratoria/js-style-guide).
Por favor léelo ahora. No te preocupes - no necesitas memorizarlos todos ahora -
puedes usar un linter (explicado en la siguiente sección) como ayuda. Pero
debes revisar todo tu código con la guía de estilo antes de enviarlo, y con el
tiempo te acostumbrarás a seguir estas reglas sin tener que pensar en ello.

### Código antes y después

Aquí hay una muestra de código que no sigue la guía de estilo. Cópialo en tu
editor e intenta solucionarlo de acuerdo con la guía, y luego verifique tu
trabajo a continuación.

#### Ejemplo

```javascript
var ASCII_UPPERCASE_A = 65;
var ASCII_UPPERCASE_Z = 90;
var ASCII_LOWERCASE_A = 97;
var ASCII_LOWERCASE_Z = 122;

function cipher (word,offset)
{
  var output=''
  for(var i = 0;i<word.length; i++)
  {
    var letterCode = word.charCodeAt(i);
    if(ASCII_UPPERCASE_A <= letterCode && letterCode <=ASCII_UPPERCASE_Z) {
      var newCode = (letterCode - ASCII_UPPERCASE_A + offset) %26+ASCII_UPPERCASE_A;
      output += String.fromCharCode(newCode);
    } else if(ASCII_LOWERCASE_A<=letterCode && letterCode<=ASCII_LOWERCASE_Z) {
      var newCode = (letterCode - ASCII_LOWERCASE_A + offset) %26+ASCII_LOWERCASE_A;
      output += String.fromCharCode(newCode);
    }
    else
    {
      alert('Ingresar solo letras');
      return; // --> undefined
    }
  }

  return output;
}

cipher ('Hola', 33)
```

#### Solución

```javascript
var ASCII_UPPERCASE_A = 65;
var ASCII_UPPERCASE_Z = 90;
var ASCII_LOWERCASE_A = 97;
var ASCII_LOWERCASE_Z = 122;

function cipher(word, offset) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    var letterCode = word.charCodeAt(i);
    if (ASCII_UPPERCASE_A <= letterCode && letterCode <= ASCII_UPPERCASE_Z) {
      var newCode = (letterCode - ASCII_UPPERCASE_A + offset) % 26 +
        ASCII_UPPERCASE_A;
      output += String.fromCharCode(newCode);
    } else if (ASCII_LOWERCASE_A <= letterCode
      && letterCode <= ASCII_LOWERCASE_Z) {
        var newCode = (letterCode - ASCII_LOWERCASE_A + offset) % 26 +
          ASCII_LOWERCASE_A;
        output += String.fromCharCode(newCode);
    } else {
      alert('Ingresar solo letras');
      return; // --> undefined
    }
  }

  return output;
}

cipher('Hola', 33);
```

## Guías de estilos populares

Escribimos la guía de estilo Laboratoria para que sea una versión más simple de
dos de las guías de estilo más populares:

- [Guía de estilos JavaScript de AirBnb](https://github.com/paolocarrasco/javascript-style-guide)
- [Guía de estilos JavaScript de Google](https://google.github.io/styleguide/jsguide.html)

Cuando trabajas como desarrollador profesional, es muy probable que se te pida
que sigas una de estas dos guías, por lo que escribimos nuestra guía como un
subconjunto de estas; es posible que debas aprender algunas reglas adicionales,
pero no deberás romper muchos viejos hábitos para lograrlo. Una vez que te
sientas cómoda usando la guía de estilo Laboratoria, tal vez quieras volver y
echar un vistazo a estas guías y comenzar a adoptar algunas de estas prácticas
en tu código.
