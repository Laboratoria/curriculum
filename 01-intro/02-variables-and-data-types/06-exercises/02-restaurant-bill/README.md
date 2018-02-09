# Cuenta de restaurante

Imagina que has salido a comer con tus cuatro mejores amigas.  La cuenta total
del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al
Valor Agregado (IVA). Quieres dividir la cuenta equitativamente entre las cinco.
Para eso has creado este programa.

Sigue los pasos a continuación para que completes el programa y determines
cuánto debe pagar cada una.

1. Crea una variable llamada tax (impuesto en inglés) y asígnale el resultado de
   multiplicar bill por 10%. Tip: 10% en decimal se escribe 0.10
2. Crea una variable llamada total y asígnale el resultado de sumar bill más tax
3. Retorna el monto que cada una debe pagar (total divido entre 5), con
   símbolo $ adelante (por ejemplo: $11). Tip: debes usar string concatenation
   para imprimir con el símbolo $ adelante.

Ejemplo:

```js
var output = restaurantBill(50);
console.log(output); // --> $11
```

¡Mucha suerte!
