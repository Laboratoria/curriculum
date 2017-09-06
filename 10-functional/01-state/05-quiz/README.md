# Cuestionario

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `10min`

***

## Preguntas

### Una función pura es...

#### Opciones

1. una función flecha (arrow function)
2. una función sin argumentos de entrada ni valor de retorno
3. una función que dados los mismos inputs siempre retorna lo mismo, y sin
   efectos secundarios
4. una función que no hace uso de `this`

<solution style="display:none;">3</solution>

### Dada la siguiente función `processData()`, dirías que es pura?

```js
const data = ['beep', 'boop'];

const processData = () => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i].toLowerCase());
  }
  return result;
};
```

#### Opciones

1. Sí
2. No

<solution style="display:none;">2</solution>

### Efectos secundarios

Se dice que una función tiene efectos secundarios cuando:

#### Opciones

1. Invoca a otras funciones durante su ejecución
2. Cambia estado fuera de su scope
3. Programa tareas para que se ejecuten en el futuro
4. Retorna funciones

<solution style="display:none;">2</solution>
