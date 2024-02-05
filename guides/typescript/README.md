# TypeScript

Es un lenguaje de programación que potencia el desarrollo de software.
Este superset de JavaScript mejora proyectos,
elevando la calidad del código. En esta introducción,
proporcionaremos una base sólida para aprovechar
al máximo las capacidades de TypeScript.
Descubre el poder de TypeScript en el desarrollo web.
¡Bienvenida al mundo de TypeScript!

## Contenido

- [Introduccion a TypeScript](#introduccion-a-typescript)

  + [Definicion y proposito de TypeScript](#definicion-y-proposito-de-typescript)
  + [Tipado de datos](#tipado-de-datos)
  + [Diferencias clave con JavaScript](#diferencias-clave-con-javascript)

- [Instalacion de TypeScript](#instalacion-de-typescript)

  + [Como instalar TypeScript globalmente usando npm](#como-instalar-typescript-globalmente-usando-npm)

- [Configuración del Proyecto](#configuracion-del-proyecto)

  + [Archivo de configuracion **tsconfig.json**](#archivo-de-configuracion-tsconfigjson)
  + [Configuracion de opciones esenciales](#configuracion-de-opciones-esenciales)

- [Variables y tipos de datos](#variables-y-tipos-de-datos)

  + [Declaración de variables con let y const](#declaración-de-variables-con-let-y-const)
  + [Tipos basicos: **number**, **string**, **boolean**, **array**](#tipos-basicos-number-string-boolean-array)

- [Funciones](#funciones)

  + [Tipado de parametros y retorno de funciones](#tipado-de-parametros-y-retorno-de-funciones)
  + [Declaracion y llamada de funciones](#declaracion-y-llamada-de-funciones)

- [Interfaces](#interfaces)

  + [Definicion de interfaces para estructurar objetos](#definicion-de-interfaces-para-estructurar-objetos)
  + [Uso de interfaces en funciones](#uso-de-interfaces-en-funciones)

- [Tipos](#tipos)

- [Diferencia entre tipos e interfaces](#diferencia-entre-tipos-e-interfaces)

- [Buenas practicas](#buenas-practicas)

- [Siguientes pasos](#siguientes-pasos)

- [Conclusion](#conclusion)

## Introduccion a TypeScript

### Definicion y proposito de TypeScript

TypeScript, desarrollado por Microsoft,
potencia el desarrollo de software al agregar
un sistema de tipado estático opcional a JavaScript.
Este sistema, que puedes ver como JavaScript con
"superpoderes", permite trabajar con tipos de datos
de manera más explícita, detectando errores en etapas
tempranas y mejorando la calidad del código.
Manteniendo compatibilidad total con JavaScript,
TypeScript brinda claridad estructural, previene
errores y se destaca como herramienta esencial
para proyectos web, equilibrando flexibilidad y
confiabilidad en el desarrollo de software.

> [!NOTE]
> En matemáticas, un superset es un conjunto que
> contiene todos los elementos de otro conjunto.
> En el caso de **_TypeScript, es un superset de
> JavaScript_**. Esto significa que todo lo que puedes
> hacer en JavaScript, también puedes hacerlo en
> TypeScript.

### Tipado de datos

El tipado de datos se refiere a la práctica de
asignar un tipo específico a una variable,
parámetro o cualquier entidad en un programa
informático. Los tipos de datos indican el
tipo de valor que puede almacenarse en una
variable, como números, cadenas de texto,
booleanos, entre otros. Los lenguajes de
programación pueden ser de tipado estático,
donde los tipos se definen en tiempo de
compilación, o de tipado dinámico, donde los
tipos se asignan en tiempo de ejecución. El
tipado de datos ayuda a prevenir errores al
asegurar que las operaciones en las variables
sean coherentes con los tipos de datos asignados.

### Diferencias clave con JavaScript

Las diferencias clave entre TypeScript y JavaScript
se centran principalmente en el sistema de tipado y
algunas características adicionales que TypeScript introduce.
A continuación, se destacan estas diferencias:

1. **_Tipado estático opcional_**: Tipado
   estático opcional para detectar errores en etapas
   tempranas durante el desarrollo.

2. **_Compatibilidad con JavaScript_**:TypeScript es un
   superset de JavaScript, permitiendo la integración
   gradual en proyectos existentes.

3. **_Uso de clases e interfaces_**: Permite la declaración de
   clases e interfaces para una programación más orientada
   a objetos.

4. **_Compilación a JavaScript_**: Requiere compilación a JavaScript
   mediante el compilador de TypeScript (tsc) antes de la ejecución.

5. **_Adición de tipos de datos_**: Introduce nuevos
   tipos de datos, como enumeraciones y tipos condicionales.

6. **_Desarrollo más seguro_**: Proporciona un desarrollo
   más seguro con tipado estático y características que mejoran
   la calidad del código.

7. **_Extensión de Archivos_**: Una diferencia importante
   es la extensión de los archivos.
   + **JavaScript**: Los archivos JavaScript típicamente tienen la extensión .js.
   + **TypeScript**: Los archivos TypeScript utilizan la extensión .ts.
8. **_Detección temprana de errores_**: Una diferencia
   importante que puedes detectar errores en tiempo de desarrollo
   (es decir cuando estas programando), permitiendo codificar más rápido.
   + **JavaScript**: Detectas los errores cuando ejecutas la aplicación.
   + **TypeScript**: Detectas cuando estas programando.

## Instalacion de TypeScript

### Como instalar TypeScript globalmente usando npm

Para este ejemplo, primero, instala TypeScript
globalmente en tu computadora (recuerda que TypeScript
no se ejecuta, se transpila) ejecutando la siguiente
línea de código:

```bash
npm install -g typescript
```

Luego, crea un nuevo archivo llamado **Hello.ts**,
ábrelo en tu editor de código y escribe el
siguiente código TypeScript:

```ts
function greet(person: string, date: Date) {
  console.log(`Hi ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

Posteriormente, en la misma ubicación donde guardaste
**Hello.ts**, ejecuta el siguiente comando:

```bash
tsc -w Hello.ts
```

Como resultado se debió haber creado un nuevo archivo llamado
**Hello.js** y el código que contiene es muy similar (pero
no igual) al archivo **Hello.ts** la diferencia es
que el archivo **Hello.js** lo puedes usar para ser ejecutado.

## Configuracion del proyecto

<!-- En contruccion 🚧👷‍♀️ -->

### Archivo de configuracion **tsconfig.json**

### Configuracion de opciones esenciales

## Variables y tipos de datos

### Declaración de variables con **let** y **const**

En TypeScript, la declaración de variables se
realiza mediante las palabras clave **let** y
**const**, las cuales comparten similitudes
con JavaScript pero con la adición de tipado
estático opcional.

- Declaración con `let`:

  + Se utiliza para declarar variables que pueden ser reasignadas.

```ts
let nombre: string = "Ejemplo";
```

- Declaración con `const`:

  + Se utiliza para declarar variables con
    un valor constante que no puede ser reasignado.

```ts
const edad: number = 25;
```

Estas declaraciones permiten especificar el
tipo de dato que contendrá la variable, mejorando
la claridad y previniendo posibles errores
durante el desarrollo.

### Tipos basicos: **number**, **string**, **boolean**, **array**

En TypeScript, se utilizan tipos básicos
para definir variables con distintos tipos
de datos. Aquí tienes ejemplos de cómo se
utilizan los tipos básicos:

- **number**

  + Representa valores numéricos, ya sean enteros o decimales.

```ts
let edad: number = 32;
```

- **string**

  + Representa valores de texto.

```ts
let nombre: string = "Ada Lovelace";
```

- **boolean**

  + Representa valores lógicos, es decir, **true** o **false**.

```ts
let activo: boolean = false;
```

- **array**

  + Representa un arreglo de elementos del mismo tipo.
    Puedes especificar el tipo de elementos dentro del arreglo.

```ts
let numeros: number[] = [1, 2, 3, 4, 5];
let palabras: string[] = ["uno", "dos", "tres"];
```

Estos tipos básicos proporcionan un mecanismo
sólido para definir y trabajar con diferentes
tipos de datos en TypeScript, contribuyendo a
la robustez y claridad del código.

> [!IMPORTANT]
> Documentación sobre
> [tipos de datos](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| Type      | Predicate                        |
| --------- | -------------------------------- |
| string    | typeof s === "string"            |
| number    | typeof n === "number"            |
| boolean   | typeof b === "boolean"           |
| undefined | typeof undefined === "undefined" |
| function  | typeof f === "function"          |
| array     | Array.isArray(a)                 |

## Funciones

### Tipado de parametros y retorno de funciones

En TypeScript, el tipado de parámetros y el tipo
de retorno de las funciones se realiza para mejorar
la claridad y la seguridad del código. Aquí te presento
un ejemplo de cómo se aplica el tipado en parámetros y
retorno de funciones:

```ts
// Declaración de una función con tipado en parámetros y tipo de retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// Llamada a la función con argumentos del tipo correcto
let resultado: number = sumar(3, 5);

console.log(resultado); // Salida: 8
```

En este ejemplo:

- La función **sumar** espera dos parámetros, ambos del tipo **number**.
- El tipo de retorno de la función también está definido como **number**.

Cuando se llama a la función **sumar**, se deben
proporcionar argumentos del tipo correcto, y la
variable **resultado** se declara con el tipo de
retorno esperado. El tipado estático opcional
en TypeScript permite detectar errores durante
la fase de desarrollo y proporciona información
útil sobre los tipos de datos que la función
espera y devuelve.

> [!TIP]
> Si tienes dudas sobre **funciones**, **parametros** o **agumentos**
> revisa [esta informacion](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)

### Declaracion y llamada de funciones

En TypeScript, la declaración y llamada de funciones
sigue un formato similar al de JavaScript, pero con
la adición de tipado estático opcional. Aquí unos
ejemplos de cómo realizar la declaración y llamada de funciones en TypeScript:

- Declaración de función

  + Puedes especificar el tipo de los parámetros y el tipo de retorno.

```ts
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}
```

- Llamada de función

  + Al llamar la función, proporciona argumentos
    del tipo esperado y maneja el valor de retorno.

```ts
let mensaje: string = saludar("Grace Murray Hopper");
console.log(mensaje);
```

## Interfaces

### Definicion de interfaces para estructurar objetos

En TypeScript, las interfaces son una herramienta clave
para definir la estructura de objetos y asegurar la coherencia
en la forma de los datos. Aquí tienes un ejemplo de cómo se
define una interfaz para estructurar objetos:

```ts
// Definición de una interfaz para estructurar objetos
interface Persona {
  nombre: string;
  edad: number;
  email?: string; // Propiedad opcional
}

// Uso de la interfaz para crear objetos que sigan su estructura
let usuaria: Persona = {
  nombre: "Hedy Lamarr",
  edad: 32,
  email: "hedy@example.com",
};
```

En este ejemplo:

- La interfaz **Persona** define la estructura de un objeto que debe
  tener propiedades como **nombre** y **edad**, y opcionalmente puede
  tener la propiedad **email**.
- Se utiliza la interfaz **Persona** para definir la forma
  del objeto **usuaria**.

El uso de interfaces facilita la creación de código más legible,
mantenible y seguro al definir claramente la estructura de los
objetos en TypeScript.

### Uso de interfaces en funciones

En TypeScript, el uso de interfaces en funciones proporciona
una forma efectiva de especificar el tipo de los parámetros y
el tipo de retorno que la función debe aceptar y devolver.
Observa el siguiente ejemplo:

```ts
// Definición de una interfaz para estructurar objetos
interface Punto {
  x: number;
  y: number;
}

// Definición de una interfaz para la función
interface CalculadoraDistancia {
  calcularDistancia(p1: Punto, p2: Punto): number;
}

// Implementación de la interfaz en una función
const calculadora: CalculadoraDistancia = {
  calcularDistancia(p1: Punto, p2: Punto): number {
    const distanciaX = p2.x - p1.x;
    const distanciaY = p2.y - p1.y;
    return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
  },
};

// Uso de la función
const puntoA: Punto = { x: 1, y: 2 };
const puntoB: Punto = { x: 4, y: 6 };

const distancia: number = calculadora.calcularDistancia(puntoA, puntoB);
console.log(`La distancia entre los puntos es: ${distancia}`);
```

En este ejemplo:

- Se define una interfaz **Punto** para estructurar objetos que
  representan coordenadas x e y.
- Se define la interfaz **CalculadoraDistancia** que especifica
  una función llamada **calcularDistancia** que toma dos puntos
  (**Punto**) como parámetros y devuelve un número.
- Se implementa la interfaz en un objeto **calculadora**,
  que tiene una función **calcularDistancia**.
- Se utilizan objetos que cumplen con la interfaz **Punto**
  para representar puntos.
- Se llama a la función **calcularDistancia**
  utilizando el objeto **calculadora** para obtener la distancia entre dos puntos.

Este enfoque facilita el mantenimiento del código al proporcionar
una estructura clara y permitir la verificación de tipos en
funciones específicas.

## Tipos

En TypeScript, **type** crea alias de tipos,
ofreciendo nombres más descriptivos para
combinaciones o tipos complejos. Conocidos
como **"Type Aliases"** o simplemente **"Types"**,
facilitan la legibilidad y claridad del
código, siendo esenciales para definir nuevos
tipos de datos personalizados.

La forma básica de definir un tipo con **type** es la siguiente:

```ts
type MiTipo = {
  propiedad1: string;
  propiedad2: number;
};
```

En este ejemplo, **MiTipo** es un alias para
un objeto con dos propiedades: una llamada
**propiedad1** que debe ser de tipo **string** y
otra llamada **propiedad2** que debe ser de tipo
**number**. Luego, puedes usar **MiTipo** para
declarar variables, parámetros de funciones
o cualquier otro lugar donde necesites ese
tipo de estructura.

Además de crear alias para objetos, type también
se puede utilizar para definir otros tipos de datos,
como uniones, intersecciones y tipos condicionales.
Aquí hay algunos ejemplos:

- **Unión de tipos**

```ts
type Resultado = string | number;

const variable: Resultado = "Hola";
```

En este caso, **Resultado** puede ser **string** o **number**.

- **Intersección de tipos**

```ts
type A = { a: number };
type B = { b: string };

type AB = A & B;

const objeto: AB = { a: 1, b: "texto" };
```

**AB** es un tipo que tiene todas las propiedades de **A** y **B**.

- **Tipo condicional**

```ts
type EsNumerico<T> = T extends number ? "Sí" : "No";

const resultado1: EsNumerico<number> = "Sí";
const resultado2: EsNumerico<string> = "No";
```

En este caso, **EsNumerico** es un tipo condicional que
evalúa si el tipo pasado como parámetro **(T)** es
**number** o no.

> [!IMPORTANT]
> El uso de **type** brinda flexibilidad y claridad
> al definir tipos en TypeScript, permitiendo crear
> abstracciones y estructuras más complejas que se
> pueden reutilizar en todo el código.

## Diferencia entre tipos e interfaces

Tanto los tipos `type` como las interfaces `interface`
se utilizan para definir estructuras de datos en el código.
Aunque comparten similitudes, hay algunas diferencias clave entre ambas.

- **Extensibilidad**

  + **Interfaces**: Las interfaces en TypeScript son abiertas
    y pueden ser extendidas posteriormente. Puedes declarar
    una interfaz con un nombre específico y luego extenderla
    para agregar más propiedades o ajustar las existentes.

  ```ts
  interface Persona {
    nombre: string;
    edad: number;
  }

  interface Empleado extends Persona {
    rol: string;
  }
  ```

  + **Tipos**: Los tipos (type) también permiten crear
    estructuras de datos, pero no son extensibles
    directamente. No puedes declarar un tipo y luego
    agregar más propiedades en una declaración separada.

  ```ts
  type Persona = {
    nombre: string;
    edad: number;
  };

  // Error: 'rol' no existe en el tipo 'Persona'
  type Empleado = Persona & { rol: string };
  ```

- **Compatibilidad con uniones e intersecciones**

  + **Interfaces**: Son útiles para crear uniones
    y extensiones de interfaces mediante el uso de **extends**

  ```ts
  interface A {
    a: number;
  }

  interface B {
    b: string;
  }

  type Union = A | B; // Puede ser A o B
  type Interseccion = A & B; // Debe ser tanto A como B
  ```

  + **Tipos**: También pueden realizar uniones
    y extensiones de tipos, pero la sintaxis es
    ligeramente diferente.

  ```ts
  type A = {
    a: number;
  };

  type B = {
    b: string;
  };

  type Union = A | B;
  type Interseccion = A & B;
  ```

- **Herencia**

  + **Interfaces**: Pueden ser extendidas mediante
    **extends** para crear nuevas interfaces que heredan
    propiedades de otras.

  ```ts
  interface Animal {
    nombre: string;
  }

  interface Mamifero extends Animal {
    tipo: string;
  }
  ```

  + **Tipos**: Pueden ser utilizados para crear uniones y extensiones,
    pero no se declaran con **extends**.

  ```ts
  type Animal = {
    nombre: string;
  };

  type Mamifero = Animal & {
    tipo: string;
  };
  ```

En resumen tanto **interfaces** como **tipos** en TypeScript son
herramientas poderosas. Aunque a menudo son intercambiables,
las diferencias en la extensibilidad y características
específicas pueden influir en la elección entre ambos según el caso de uso.

## Buenas practicas

1. **_Tipado explícito_**: Proporciona tipos explícitos para
   variables, parámetros de funciones y el retorno de
   funciones para mejorar la claridad y la detección de errores.

    ```ts
    // Buena práctica
    function sumar(a: number, b: number): number {
      return a + b;
    }
    ```

2. **_Evitar el uso de `any`_**: Evita el uso de any en favor de
   tipos más específicos. Esto ayuda a aprovechar al máximo el
   sistema de tipado estático de TypeScript.

    ```ts
    // Evitar
    let variable: any = "ejemplo";

    // Buena práctica
    let variable: string = "ejemplo";
    ```

3. **_Interfaces para estructurar datos_**: Utiliza interfaces
   para estructurar objetos y definir contratos claros.
   Facilita el mantenimiento y la comprensión del código.

    ```ts
    // Buena práctica
    interface Usuario {
      nombre: string;
      edad: number;
    }
    ```

4. **_Desestructuración y parámetros con objetos_**: Utiliza
   desestructuración y parámetros con objetos para mejorar
   la legibilidad y evitar problemas en el orden de los argumentos.

    ```ts
    // Buena práctica
    function imprimirInfo({ nombre, edad }: Usuario): void {
      console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    }
    ```

5. **_Modularización y organización de código_**: Organiza tu
   código en módulos y sigue prácticas de organización para
   facilitar el mantenimiento y la colaboración en proyectos
   más grandes.

Estas son solo algunas prácticas recomendadas, pero ten en
cuenta que las buenas prácticas pueden variar según el
contexto y los requisitos específicos del proyecto.

## Siguientes pasos

Visita los siguientes enlaces:

- [Manual de la documentación oficial](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Generar el archivo tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Angular trabaja nativamente con TS](https://angular.io/guide/typescript-configuration)
- [Node con typescript](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)
- [React con TS](https://es.react.dev/learn/typescript)
- [Learn TypeScript](https://www.tutorialsteacher.com/typescript)
- [Getting Started a vite project (you can use typescript)](https://vitejs.dev/guide/)

## Conclusion

TypeScript ha evolucionado mucho, hoy en dia es muy popular
y su capacidad para añadir tipos estáticos a JavaScript no
solo brinda una capa adicional de seguridad y detección de
errores, sino que también impulsa la productividad y la
escalabilidad de los proyectos. Al aprender TypeScript,
te sumerges en un ecosistema que fomenta la creación de código
más limpio, legible y mantenible, si tienes alguna duda
no olvides: usar ExplainDev, usar los canales de los proyecto,
preguntarle a tus coaches, asistir a git-camp y test-camp,
esperamos que esta Introducción a TypeScript te sea de utilidad.
