# 03 - Get Element of Array Property

## getElementOfArrayProperty

Escreva uma função chamada `getElementOfArrayProperty`.

Dado um objeto, uma chave e um índice numérico, `getElementOfArrayProperty` retorna o valor do elemento no índice fornecido do array localizado dentro do objeto informado na chave especificada.

Notas:

* Se a matriz estiver vazia, ela deve retornar `undefined`.
* Se o índice fornecido estiver fora do intervalo da matriz localizada na chave especificada, ele deverá retornar `undefined`.
* Se a propriedade na chave fornecida não for uma matriz, ela deve retornar `undefined`.
* Se não houver propriedade na chave, ela deve ser retornada `undefined`.

Exemplo de entrada:

```text
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
```

