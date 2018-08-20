# Vetores

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Um vetor é uma coleção de valores acessados por meio de índices (número naturais iniciando com 0). Os valores são chamados _array elements_ (elementos do vetor). A maneira mais fácil de criar um vetor é por meio de um vetor literal. Este enumera os vetores do elemento e usa posição especifica seu índice implicitamente.

Como primeiro exemplo, criaremos um vetor `arr` com um vetor literal e acessaremos seus elementos:

```js
> var arr = [ 'a', 'b', 'c' ]; // vetor literal
> arr[0]; // obtém o elemento na posição 0
'a'
> arr[0] = 'x'; // troca o valor do elemento na posição 0
> arr;
[ 'x', 'b', 'c' ]
```

Podemos usar a propriedade `length` para obter o comprimento do vetor, além de podermos usá-la para adicionar ou eliminar elementos:

```js
> var arr = [ 'a', 'b', 'c' ];
> arr.length; // quantidade de elementos
3
> arr.length = 2; // elimina o último elemento
> arr;
[ 'a', 'b' ]
> arr[arr.length] = 'd'; // adiciona un elemento ao final
> arr;
[ 'a', 'b', 'd' ]
```

O método `.push()` fornece outra maneira de adicionar elementos ao final de um vetor:

```js
> var arr = [ 'a', 'b' ];
> arr.push('d');
3
> arr;
[ 'a', 'b', 'd' ];
```
