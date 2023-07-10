---
env: cjs
---

# Conversor de Moneda

En este ejercicio nos concentraremos en asignar _valores_ en _variables_. El
ejercicio ya incluye un _boilerplate_ (_plantilla_), con una _función_, dentro
de la cual tendrás que re-emplazar los _comentarios_ `/* ??? */` por
_expresiones_ que produzcan el _valor_ que queremos almacenar (_asignar_) en
la _variable_ correspondiente.

El _boilerplate_ (_plantilla_):

```js
const coinConvert = (dollars) => {
  // Asigna el monto equivalente en soles
  const soles = /* ??? */;

  // Asigna el monto equivalente en pesos mexicanos
  const pesosMexicanos = /* ??? */;

  // Asigna el monto equivalente en pesos chilenos
  const pesosChilenos = /* ??? */;

  return [soles, pesosMexicanos, pesosChilenos];
};
```

La _función_ del ejercicio se llama `coinConvert` y nos permitirá convertir una
cantidad en dólares a 3 monedas diferentes (soles, pesos mexicanos y pesos
chilenos).

Esta _función_ solo recibirá un _argumento_ (`dollars`), que es un _número_ que
representa una cantidad en dólares, y retornará un _arreglo_ (_array_) con tres
valores: la cantidad en soles, pesos mexicanos y pesos chilenos. Por ahora no
nos tenemos que preocupar sobre la _función_ en sí o cómo retornar un _arreglo_,
el _boilerplate_, ya se encarga de eso. Tú solo debes concentrarte en usar
`dollars` junto con una operación para crear los valores que queremos asignar en
las variables `soles`, `pesosMexicanos` y `pesosChilenos`.

Utiliza las siguientes tasas de cambio:

```text
1 dólar = 3.25 soles peruanos
1 dólar = 18 pesos mexicanos
1 dólar = 660 pesos chilenos
```

¡Mucha suerte!
