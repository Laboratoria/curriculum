# validateString

Escreva uma função que receba uma string como argumento e lance os seguintes
erros:

* `TypeError` com a mensagem `O argumento str deve ser uma string` quando o
  argumento recebido não for do tipo `string`.
* `RangeError` com a mensagem `O argumento str deve ter pelo menos 4 caracteres`
  quando o argumento recebido for uma `string` de menos de 4 caracteres.
* `RangeError` com a mensagem `O argumento str deve ter no máximo 10 caracteres`
  quando o argumento recebido tiver mais de 10 caracteres.

Exemplo:

```js
// TypeError: O argumento str deve ser uma string
validateString();

// RangeError: O argumento str deve ter pelo menos 4 caracteres
validateString('');
validateString('abc');

// RangeError: O argumento str deve ter no máximo 10 caracteres
validateString('abcdefghijk');
validateString('olá mundo cruel');
```
