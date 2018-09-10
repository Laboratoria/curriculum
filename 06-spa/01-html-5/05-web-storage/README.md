# Web Storage

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Aprender a armazenar dados no navegador por meio da API de Web Storage.

## Armazenamento web

A API de armazenamento web fornece os mecanismos através do quais o navegador pode armazenar informação do tipo **chave/valor** de uma maneira muito mais intuitiva do que utilizando *cookies*.

Os dois mecanismos de armazenamento web são os seguintes:

- `sessionStorage`: mantém uma área de armazenamento separada para cada origem que estiver disponível pela duração da sessão da página (tanto se o navegador estiver aberto como se estiver fechado, incluindo recarregamento de páginas e restabelecimentos).
- `localStorage` faz o mesmo, mas persiste inclusive quando o navegador é fechado e reaberto.

Fonte: [MDN - API de armazenamento web](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API_pt_br)

Veja o seguinte link: [https://mdn.github.io/dom-examples/web-storage/](https://mdn.github.io/dom-examples/web-storage/), brinque com ele e recarregue a página ou, se desejar, feche a janela ou o navegador e volte a acessar. Ele informa quantas mudanças permaneceram? Isto é o que a API de Web Storage (armazenamento web) permite que façamos facilmente.

Ainda não está claro pra você? Aqui deixamos um [post de Medium](https://medium.com/laboratoria-how-to/api-web-storage-ad9b1efa9b01) escrito por nossa super professora Marcia no qual ela explica os métodos que temos disponíveis por meio desta API.

Se você for das que preferem o conteúdo visual, deixamos aqui um vídeo que lhe permite ver um exemplo de como usar `localStorage`.

[![Local Storage](https://img.youtube.com/vi/hb8O0qRqiSk/0.jpg)](https://youtu.be/hb8O0qRqiSk)

## `JSON.stringify()`, `JSON.parse()`?

Se você assistiu ao vídeo, percebeu que ele usa os métodos `JSON.stringify()` e `JSON.parse()`. Se não o viu, é bom que tenha em mente ambos os métodos.

Como é mencionado na parte superior, esta API armazena elementos no formato de chave/valor. Exemplo: se tenho o nome do usuário em uma variável chamada `name` e quero armazená-la no navegador, você faria o seguinte:

```javascript
const name = 'nome de usuário';
/*
 * name é o identificador (chave), 
 * e o valor está armazenado na variável `name`
 */
localStorage.setItem('name', name); 
// Se usássemos sessionStorage, só mudaríamos o objeto de localStorage
// sessionStorage.setItem('name', name);
``` 

> O valor sempre será armazenado como `string` independentemente do tipo de dado.

```javascript
// signup.html
const age = 50;
localStorage.setItem('age', 50);

// home.html
const userAge = localStorage.getItem('age');
typeof userAge; // "string"
```

Bem, isso deveríamos saber sempre, em particular quando vamos operar com esses valores como o caso de números e booleanos. Mas e quando usamos os métodos do objeto `JSON`? Há situações em que vamos precisar armazenar múltiplos valores que estão relacionados entre si. Normalmente, representaríamos isso como um objeto e como tudo que ele armazena é uma string, não podemos fazê-lo diretamente. Exemplo:

```javascript
// login.html
const user = {
    name: 'user',
    email: 'user@gmail.com',
    photoUrl: 'https://images.com/user.png',
};

sessionStorage.setItem('loggedUser', user);

// home.html
const loggedUser = sessionStorage.getItem('loggedUser');
console.log(loggedUser); // "[object Object]"
```

Isto acontece porque o interpretador trata de converter o objeto para uma string e isto faz com que armazene como `"[object Object]"`. Se você quiser saber mais sobre porque o objeto é convertido para uma string dessa maneira, deve entender um pouco sobre como funciona a [coerção em JavaScript](https://jherax.wordpress.com/2014/07/05/javascript-coercion/) e entender sobre o método [`.toString()` dos objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects).

Enfim, como resolvemos esta inconveniência e conseguimos armazenar nosso objeto? Entendamos o que fazem os seguintes métodos:

- `JSON.stringify()`: converte o objeto que é passado como argumento para uma string, serializando as propriedades e valores.
- `JSON.parse()`: converte a string passada como argumento para um objeto, desserializando as propriedades e valores.

Exemplo:

```javascript
// login.html
const user = {
    name: 'user',
    email: 'user@gmail.com',
    photoUrl: 'https://images.com/user.png',
};

/*
 * Aqui guardamos o objeto em forma de string.
 */
sessionStorage.setItem('loggedUser', JSON.stringify(user));

console.log(sessionStorage.getItem('loggedUser'));
// {"name":"user","email":"user@gmail.com","photoUrl":"https://images.com/user.png"}


// home.html
/*
 * Aqui obtemos o objeto em forma de string e convertemos (parse) para objeto.
 */
const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
console.log(typeof loggedUser); // "object"
```

> Para finalizar, não esqueça de que o que foi armazenado no localStorage é persistido mesmo quando fechamos o navegador. Logo, se desejamos limpar ou apagar o que temos armazenado, devemos usar os métodos `.removeItem()` ou `.clear()` dependendo se queremos eliminar uma chave específica ou todas.