---
type: read
duration: 30min
---

# Web Storage

## Objetivos de Aprendizaje

- Aprender a almacenar datos en el navegador a través de la API de Web Storage

## Almacenamiento web

La API de almacenamiento web proporciona los mecanismos mediante los cuales
el navegador puede almacenar información de tipo **clave/valor**, de una forma
mucho más intuitiva que utilizando cookies.

Los dos mecanismos en el almacenamiento web son los siguientes:

- `sessionStorage` mantiene un área de almacenamiento separada para cada origen
  que está disponible por la duración de la sesión de la página (tanto si el
  navegador esta abierto como si no, incluyendo recargas de página y
  restablecimientos).
- `localStorage` hace lo mismo, pero persiste incluso cuando el navegador es
  cerrado y reabierto.

Fuente: [MDN - API de almacenamiento web](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web)

Mira el siguiente enlace: [https://mdn.github.io/dom-examples/web-storage/](https://mdn.github.io/dom-examples/web-storage/),
juega con él y recarga la página, si deseas cierra la pestaña o el navegador y
vuelve a ingresar. ¿Te diste cuenta que tus cambios permanecieron? Esto es lo
que la API de Web Storage (almacenamiento web) nos permite hacer fácilmente.

¿Aun no te queda del todo claro? Acá te dejamos [un post de Medium](https://medium.com/laboratoria-how-to/api-web-storage-ad9b1efa9b01)
escrito por nuestra súper profe Marcia donde te explica los métodos que tenemos
disponibles a través de esta API.

Si eres de las que prefiere el contenido visual, acá te dejamos un video que
te permite ver un ejemplo de cómo usar `localStorage`.

[![Local Storage](https://img.youtube.com/vi/hb8O0qRqiSk/0.jpg)](https://youtu.be/hb8O0qRqiSk)

## ¿`JSON.stringify()`, `JSON.parse()`?

Si revisaste el video, habrás percibido que usa los métodos `JSON.stringify()` y
`JSON.parse()`, sino lo viste, aun así es bueno que tengas presente ambos
métodos.

Como bien es mencionado en la parte superior, esta API almacena elementos en el
formato de clave/valor. Ejemplo: si tengo el nombre del usuario en una variable
llamada `name` y quiero almacenarla en el navegador, haría lo siguiente:

```javascript
const name = 'nombre de usuario';
/*
 * name es el identificador (clave),
 * y el valor está almacenada en la variable `name`
 */
localStorage.setItem('name', name);
// Si usáramos sessionStorage, solo cambiaríamos el objeto de localStorage
// sessionStorage.setItem('name', name);
```

> El valor siempre será almacenado como `string` independientemente del tipo de
> dato con el que se almacenen.

```javascript
// signup.html
const age = 50;
localStorage.setItem('age', 50);

// home.html
const userAge = localStorage.getItem('age');
typeof userAge; // "string"
```

Bien, esto deberíamos tenerlo presente siempre, en especial cuando vamos a
querer operar con esos valores como el caso de números o booleanos, pero
¿cuándo usamos los métodos del objeto `JSON` entonces?. En ocasiones vamos a
necesitar almacenar múltiples valores que estén relacionados entre sí,
normalmente, lo representaríamos en un objeto, y debido a que todo lo que se
almacena es un string, no lo podemos hacer directamente. Ejemplo:

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

Esto ocurre ya que el intérprete trata de convertir el objeto a un string y
esto hace que se almacence como `"[object Object]"`. Si quieres saber más sobre
porqué el objeto se convierte a string de esa manera, debes de entender un poco
sobre como funciona [coerción en JavaScript](https://jherax.wordpress.com/2014/07/05/javascript-coercion/),
y entender sobre el método [`.toString()` de los objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/toString).

En fin, ¿cómo solucionamos este inconveniente y logremos almacenar nuestro
objeto? Entendamos qué hacen los siguientes métodos:

- `JSON.stringify()`: convierte el objeto que es pasado como argumento a un
  string, serializando las propiedades y valores.
- `JSON.parse()`: convierte el string pasado como argumento a un objeto,
  deserializando las propiedades y valores.

Ejemplo:

```javascript
// login.html
const user = {
    name: 'user',
    email: 'user@gmail.com',
    photoUrl: 'https://images.com/user.png',
};

/*
 * Aquí se guarda el objeto en forma de string
 */
sessionStorage.setItem('loggedUser', JSON.stringify(user));

console.log(sessionStorage.getItem('loggedUser'));
// {"name":"user","email":"user@gmail.com","photoUrl":"https://images.com/user.png"}


// home.html
/*
 * Aquí se obtiene el objeto en forma de string y se convierte (parsea) a objeto
 */
const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
console.log(typeof loggedUser); // "object"
```

> Para terminar, no olvides que lo almacenado en el localStorage persiste aun
> cuando se cierra el navegador, así que si deseamos limpiar o eliminar lo que
> tenemos almacenado, debemos de usar los métodos `.removeItem()` o `.clear()`
> dependiendo si queremos eliminar una clave específica o todas.
