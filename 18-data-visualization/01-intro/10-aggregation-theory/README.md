# Teoría de agregaciones

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Introducción

En este archivo se resume el contenido teórico sobre los diferentes tipos de
agregaciones que aprenderás durante el juego. Acá podrás encontrar las
definiciones, los pasos para calcula la agregación y los comandos necesarios en
diferentes tecnologías para calcularlo directamente a través del software.

## Agregaciones

Las agregaciones son fórmulas matemáticas que nos permiten crear estadísticas
concretas a partir de una población mayor. Hay muchos tipos de agregaciones,
pero en esta lección estudiaremos en detalle las siguientes agregaciones:

 1. Mínimo
 2. Máximo
 3. Rango
 4. Suma
 5. Cuenta
 6. Media aritmética
 7. Mediana
 8. Moda

## Mínimo

### Definición

Representa el valor mínimo que haya en una muestra.

En la práctica se usa para: Saber el menor valor
Dificultad: Muy sencillo

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Ver cuál es el valor más pequeño que tiene al menos 1 como frecuencia.
3. Ese valor representa el mínimo de la población

### Comandos en diferentes tecnologías

* JavaScript: min - Método
* R: min - Función
* Python: min – Función o Método
* Tableau: Minimun - Función
* Excel: MIN - Función

## Máximo

### Definición

Representa el valor máximo que haya en una muestra

En la práctica se usa para: Saber el mayor valor
Dificultad: Muy sencillo

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Ver cuál es el valor más grande que tiene al menos 1 como frecuencia.
3. Ese valor representa el máximo de la población

### Comandos en diferentes tecnologías

* JavaScript: max - Método
* R: max - Función
* Python: max – Función o Método
* Tableau: Maximun - Función
* Excel: MAX - Función

## Rango

### Definición

Son todos los valores que se encuentran entre el mínimo y máximo de una muestra.

En la práctica se usa para: Saber que valores hay en una data
Dificultad: Muy sencillo

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Ver cuál es el valor más pequeño que tiene al menos 1 como frecuencia. Esto
   representa el mínimo
3. Ver cuál es el valor más grande que tiene al menos 1 como frecuencia. Esto
   representa el máximo
4. El rango son todos los valores ubicados entre el mínimo y máximo de la
   población

### Comandos en diferentes tecnologías

* JavaScript: min - Método / max - Método
* R: min - Función / max - Función
* Python: min – Función o Método / max – Función o Método
* Tableau: Minimun - Función / Maximun - Función
* Excel: MIN - Función / MAX - Función

## Suma

### Definición

Es la suma de todos los valores de una muestra

En la práctica se usa para: El total de una variable
Dificultad: Muy sencillo

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Sumar todas las frecuencias.

### Comandos en diferentes tecnologías

* JavaScript: .reduce(add,0) - Método
* R: sum - Función
* Python: sum – Función o Método
* Tableau: Sum - Función
* Excel: SUMA - Función

## Cuenta

### Definición

Representa la cantidad de elementos con información en una serie de datos.

En la práctica se usa para: Saber cuantos elementos hay
Dificultad: Muy sencillo

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Sumar todas las frecuencias.
3. Contar todos los elementos cuya suma sea más de 0

### Comandos en diferentes tecnologías

* JavaScript: length - Método
* R: Dependiendo de la estructura:  length, nrow o ncol - Función
* Python: count –Método
* Tableau: Count - Función
* Excel: CONTAR - Función

## Media aritmética

### Definición

La media de varias cantidades es la suma de todas las cantidades dividida entre
el número de ellas. También se llama promedio

En la práctica se usa para: Cuanto le toca a cada uno se si divide el total por
igual
Dificultad: Intermedia

### Pasos para calcularlo

1. Calcular la suma y la cuenta de la población
2. Dividir ambos valores

### Comandos en diferentes tecnologías

* JavaScript: .reduce(add,0)/.length - Método
* R: mean - Función
* Python: mean en librería statistics – Función o Método
* Tableau: Average - Función
* Excel: PROMEDIO - Función

## Mediana

### Definición

Se llama MEDIANA de un conjunto de datos numéricos al que ocupa el valor central.

En la práctica se usa para: El centro real de los datos
Dificultad: Intermedia

### Pasos para calcularlo

1. Contar cuantas veces se repite cada valor. Esto definirá la frecuencia del
   valor.
2. Organizar los valores de menor a mayor.
3. Ver si hay una cantidad de elementos par o impar:
  3.1. Si es impar, se toma el valor del medio,
  3.2. Si es par, se toma el promedio entre los 2 valores centrales.

### Comandos en diferentes tecnologías

* JavaScript: No existe directamente. Hay que hacer una función
* R: median - Función
* Python: median en librería statistics – Función o Método
* Tableau: Median - Función
* Excel: MEDIANA - Función

## Moda

### Definición

La MODA es el valor que mayor frecuencia absoluta tiene en un estudio
estadístico, o sea el que se repite más. Pudiera llegar a existir 2 modas si 2
valores tienen la misma frecuencia.

En la práctica se usa para: El valor más común
Dificultad: Intermedia

### Pasos para calcularlo

### Comandos en diferentes tecnologías

* JavaScript: No existe directamente. Hay que hacer una función
* R: Mode en librería modeest - Función
* Python: mode en librería statistics – Función o Método
* Tableau: No existe directamente.
* Excel: MODA - Función
