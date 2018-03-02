# coinConverter

Escriba una función 'coinConverter' que convierte el valor de dólares a soles,
pesos mexicano y pesos chilenos.

Utiliza las tasas de cambio siguientes:

```js
soles = dólares * 3.25
pesosMexicanos = dólares * 18
pesosChilenos = dólares * 660
```

Ejemplo:

```js
function coinConvert (dollar = 50) {
  soles = dollar * 3.25;
  pesosMexicanos = dollar * 18;
  pesosChilenos = dollar * 660;
  console.log(soles, pesosMexicanos, pesosChilenos); // --> [162.5, 900, 33000]
}
```

¡Mucha suerte!
