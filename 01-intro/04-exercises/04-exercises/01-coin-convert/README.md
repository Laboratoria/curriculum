# coinConverter

Escreva uma função com o nome `coinConverter` que converte o valor de dólares
para reais, pesos mexicanos e pesos chilenos.

Use as seguintes taxas de câmbio:

```js
reais = dolares * 3.25
pesosMexicanos = dolares * 18
pesosChilenos = dolares * 660
```

Exemplo

```js
function coinConvert(dollar = 50) {
  reais = dollar * 3.25;
  pesosMexicanos = dollar * 18;
  pesosChilenos = dollar * 660;
  console.log(reais, pesosMexicanos, pesosChilenos); // --> [162.5, 900, 33000]
}
```

Boa sorte!
