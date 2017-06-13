# Quiz - Variables y tipos de datos

## Objetivos de Aprendizaje
- Demostrar conocimiento aprendido respondiendo preguntas conceptuales

## Quiz 1: Variables y tipos de datos

1. Cuál de las siguientes opciones reflejan "buenos" nombres de variables (es decir, cumplen con las reglas y las sugerencias de buenas prácticas)?

```JavaScript
var last_name = 'Martinez';
var score = 1;
var likesCoffee = false;
var cosita = "El retorno del Jedi";
var undefined = true;
var 2ndChild = 'Diana';

```  

2. Revisa el código a continuación y responde cuáles son los resultados que se imprimirán en la consola:

```JavaScript
var lastMonthVisitors = 10.75e5;
var currentMonthVisitors = 8e5;
var visitedLastMonth = true;
var visitedCurrentMonth = false;

currentMonthVisitors = currentMonthVisitors + 1e5;

console.log(lastMonthVisitors);
console.log(currentMonthVisitors);
console.log(typeof(visitedLastMonth));
console.log(lastMonthVisitors > currentMonthVisitors);
console.log(visitedLastMonth && visitedCurrentMonth);
console.log("Este mes tenemos " + (lastMonthVisitors - currentMonthVisitors) + " menos visitantes");

```  
