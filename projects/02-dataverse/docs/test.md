# Test

En el archivo `test/dataFunctions.spec.js`, es esencial escribir
pruebas para cada funcionalidad desarrollada. Siempre debemos
testear nuestro código para garantizar su calidad y facilitar el
mantenimiento, identificando y corrigiendo errores para asegurar
un funcionamiento correcto del software. Pero, ¿cómo empezar y qué
se debe testear? En este caso específico, considera el siguiente
ejemplo como guía:

Tenemos una función que recibe dos números y devuelve la suma de ellos:

```javascript
fuction suma(a,b){
return a+b
}
```

Para realizar pruebas o comprobaciones, se recomienda seguir estos tres pasos:

1. [Asegurar que la función existe y es una función](#asegurar-que-la-función-existe-y-es-una-función)
2. [Evaluar el comportamiento deseado de la función](#evaluar-el-comportamiento-deseado-de-la-función)
3. [Realizar pruebas de estrés](#realizar-pruebas-de-estrés)

## Asegurar que la función existe y es una función

En este bloque de código de prueba Jest, se describe y prueba la función `suma`. Aquí está la descripción:

```javascript
import { suma } from '../src/suma.js';

describe('Suma es una funcion', () => {
  it('returns `function`', () => {
    expect(typeof suma).toBe('function');
  });
});
```

* `describe`: Define un bloque de pruebas con una descripción general. En este caso, se está describiendo la función `suma`.

* `it`: Define una prueba dentro del bloque `describe` con una
descripción específica. Aquí se está probando si el tipo de la
función `suma` es una `function`.

* `expect`: Es una afirmación que se utiliza para realizar la
prueba. En este caso, se está utilizando `typeof suma` para
obtener el tipo de la función `suma` y se verifica si es igual a 'function'.

En resumen, esta prueba verifica que `suma` es una función,
lo cual es esencial para asegurarse de que se pueda llamar
como una función.

## Evaluar el comportamiento deseado de la función

Evalúa la función `suma` con ciertos valores de entrada para verificar que efectivamente se realiza la suma de dichos valores.  Aquí está la explicación:

```javascript
describe('Suma retorna 66', () => {
const a = 33;
const b = 33;
const result = 66;
  it('returns `66`', () => {
    expect(suma(a,b)).toBe(result);
  });
});
```

* `const a = 33;` y `const b = 33;`: Establece dos constantes, `a` y `b`, con valores de `33` cada uno. Estos valores se utilizarán como argumentos para la función `suma`.

* `const result = 66;`: Establece una constante `result` con el valor `66`, que es el resultado esperado cuando se suma `a` y `b`.

* `it`: Define una prueba dentro del bloque describe con una descripción específica. En este caso, se está probando si la función `suma(a, b)` devuelve `66`.

* `expect`: Es una afirmación que se utiliza para realizar la prueba. Aquí se está utilizando para verificar si el resultado de `suma(a, b)` es igual a la constante `result`.

Esta prueba verifica que la función `suma` devuelve correctamente `66` cuando se le pasa `33` como ambos argumentos.

## Realizar pruebas de estrés

Considerando posibles situaciones, como la ausencia del valor `b`,
tu prueba debería abordar este escenario. Puedes evaluar cómo se
comporta la función en ausencia de `b` y considerar si se requiere
alguna modificación en la función original para manejar esta
situación. Asegúrate de que tu prueba sea completa al considerar
diferentes casos de uso, incluyendo la posibilidad de valores
faltantes o nulos.

```javascript
describe('Suma retorna 66', () => {
const a = 33;
const result = 66;
   it('retorna false cuando no hay b', () => {
    expect(suma(a)).toBeFalsy();
  });

  it('retorna false cuando no hay a', () => {
    expect(suma(undefined, 33)).toBeFalsy();
  });
});
```

* La primera prueba `(it('retorna false cuando no hay b', ...))` verifica si la función suma devuelve `false` cuando falta el valor de `b`.

* La segunda prueba `(it('retorna false cuando no hay a', ...))` verifica si la función suma devuelve `false` cuando falta el valor de `a`.

Estas pruebas son útiles para asegurarse de que la función `suma` maneje adecuadamente los casos en los que faltan los valores de `a` o `b`.

```javascript
function suma(a, b) {
  if (!a || !b) {
    return false;
  }
  return a + b;
}
```

La adición de la condicional `if (!a || !b)` en la función `suma`
se realiza para manejar el caso en el que alguno de los valores de entrada `a` o `b` está ausente o es falsy (falso, undefined, null, 0, NaN, etc.).

## Conclusión

Aquí tienes una breve guía sobre cómo abordar los tests para
funciones de filtrado, ordenamiento y cálculo.
Explora tus habilidades de intérprete y replicar esto en tu
archivo `test/dataFunctions.spec.js`

* [Documentación Jest](https://jestjs.io/es-ES/docs/using-matchers)
* [Arrange, Act and Assert (AAA)](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)
