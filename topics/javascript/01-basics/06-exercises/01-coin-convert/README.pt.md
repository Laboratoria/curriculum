# Conversor de Moeda

Neste exercício vamos nos concentrar em atribuir _valores_ em _variáveis_. O
exercício já inclui um _boilerplate_ (_modelo_), com uma _função_, dentro da qual
você terá que substituir os _comentário_ `/* ??? */` por _expressões_ que produzam
o _valor_ que queremos armazenar (_atribuir_) na variável correspondente.

O _boilerplate_ (_modelo_):

```js
const coinConvert = (dollars) => {
  // Atribuir o valor equivalente em soles
  const soles = /* ??? */;

  // Atribuir o valor equivalente em pesos mexicanos
  const pesosMexicanos = /* ??? */;

  // Atribuir o valor equivalente em pesos chilenos
  const pesosChilenos = /* ??? */;

  return [soles, pesosMexicanos, pesosChilenos];
};
```

A _função_ do exercício se chama `coinConvert` e irá nos permitir converter uma
quantidade de dólares em 3 moedas diferentes (soles, pesos mexicanos e pesos
chilenos).

Está _função_ irá receber apenas um _argumento_ (`dollars`), que é um _número_
que representa um valor em dólares, e irá retornar um _array_ com três valores: a
quantidade em soles, pesos mexicanos e pesos chilenos. Por enquanto, não
precisamos nos preocupar com a _função_ em si ou como retornar um _array_, o
_boilerplate_, já está fazendo isso. Você deve se concentrar em usar a variável
`dollars` junto com a operação para criar os valores que queremos atribuir nas
variáveis `soles`, `pesosMexicanos` e `pesosChilenos`.

Utilize as seguintes taxas de câmbio:

```text
1 dólar = 3.25 soles
1 dólar = 18 pesos mexicanos
1 dólar = 660 pesos chilenos
```

Boa sorte!
