---
type: read
duration: 15min
---

# Modo Estrito

O modo estrito realiza mudanças na semântica normal do JavaScript. Um aspecto
importante disso é que o modo estrito elimina erros silenciosos, forçando a
escrita de um código melhor.

O comando `use strict` não significa uma instrução de código, apenas indica ao
navegador o modo como deve executar o código JavaScript.

Poderíamos falar de dois modos de execução do JavaScript: `normal mode`, que é
como temos estudado até agora, e o `strict mode` que é o que vamos aprender.

## Chamando o modo estrito

Para chamar o modo estrito, você deve apenas escrever `'use strict';`em seu
arquivo JavaScript. Por exemplo:

```js
'use strict';
```

Agora que você sabe como chamar o modo estrito, vamos ver um exemplo rápido.

```js
'use strict';
foo = 'Alexandra'; // Uncaught ReferenceError: foo is not defined
```

Agora que estamos utilizando o _modo estrito_ o JavaScript nos retorna um erro,
dizendo que `foo` não está definida. É necessário declarar a variável antes de
utilizá-la.

```js
'use strict';
const foo = 'Guilherme'; // Funciona!
```

O modo estrito modifica a sintaxe e o comportamento durante a execução. As
mudanças geralmente caem dentro das seguintes categorias: modificações que
convertem erratas em erros (como erros de sintaxe ou no tempo de execução), que
simplificam como uma variável em particular é calculada, que simplificam o uso
do eval() e argumentos, que tornam mais fácil a escrita de JavaScript "seguro" e
que antecipam a evolução futura do ECMAScript.

## Convertendo erratas em erros

O modo estrito modifica alguns erros de sintaxe tolerados no modo normal e os
converte em erros. O JavaScript foi desenvolvido de um modo que o tornasse mais
fácil para programadoras iniciantes, dessa forma podem existir operações que
deveriam ser erros, porém são tratadas como livres de erros. Algumas vezes isso
é útil para solucionar um problema no momento, porém pode criar problemas mais
graves no futuro. O modo estrito trata estas erratas como erros, para que possam
ser encontradas e resolvidas imediatamente.

Em primeiro lugar, o modo estrito impossibilita a criação de variáveis globais
por acidente. No modo não estrito do JavaScript, uma variável declarada de forma
incorreta criará uma nova propriedade no objeto global e o código continuará
rodando como se nada tivesse acontecido (ainda que seja possível que o código
falhe no futuro, em uma versão mais moderna do JS). No modo estrito, qualquer
declaração de produza variáveis globais por acidente resultará em erro.

Em segundo lugar, o modo estrito gera uma exceção para declarações que de outro
modo falhariam silenciosamente. Por exemplo, NaN é uma variável que não pode ser
declarada. Em um código normal, declarar um valor como `NaN` não tem efeito; a
programadora não recebe nenhuma mensagem de erro. Ao invés disso, no modo
estrito, ao tentar atribuir `NaN` como valor, a programadora receberá uma
exceção. Qualquer declaração que falhe silenciosamente no código normal
(declarações a uma propriedade do tipo "somente leitura", a uma propriedade get,
adicionar propriedades a objetos não extensíveis) resultará em uma exceção no
modo estrito:

```js
'use strict';
// atribuição global
var undefined = 5; // TypeError: "undefined" is read-only
var Infinity = 5; // TypeError: "Infinity" is read-only

// Atribuição a uma propriedade somente leitura
const obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // gera um TypeError

// Atribuição a uma propriedade do tipo getter
const obj2 = { get x() { return 17; } };
obj2.x = 5; // gera um TypeError

// Atribuição a uma nova propriedade de um objeto não extensível
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // gera um TypeError
```

Em terceiro lugar, o modo estrito gera uma exceção ao tentar eliminar
propriedades não elimináveis (enquanto no código normal a tentativa não surtiria
nenhum efeito):

```js
'use strict';
delete Object.prototype; // gera um TypeError
```
