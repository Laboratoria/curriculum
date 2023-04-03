---
type: read
duration: 30min
---

# AJAX con jQuery

## Objetivos de Aprendizaje

- Usar jQuery para hacer requests asíncronos y entender qué ventajas nos da

## Analogía

Dejar que un experto prepare el pastel por ti.

[![XHR analogy](https://img.youtube.com/vi/NFGrayBZOVM/0.jpg)](https://youtu.be/NFGrayBZOVM)

## ¿Por qué jQuery?

jQuery es una librería muy popular que ya has tenido la oportunidad de usar. El
uso que le has dado hasta este momento ha sido para manipular y recorrer el DOM
a través de métodos que hacen nuestro código más corto.

Ahora, usaremos esta ventaja de usar métodos más pequeños y dejar la
responsabilidad a jQuery de ver la compatibilidad de navegadores por nosotros
en la implementación de AJAX.

Esto es posible gracias al método `.ajax()` que jQuery provee para realizar
peticiones asíncronas.

## Método `.ajax()`

El método `.ajax()` es el corazón de las peticiones asíncronas en la librería
de jQuery. Hay 2 formas de usar este método:

```js
$.ajax(<url-a-realizar-la-petición>, <un-objeto-configuración>);

// or

$.ajax(<solo un objeto de configuración>);
```

Fuente: [Documentación de jQuery](https://api.jquery.com/jQuery.ajax/)

La manera más común de usar el método `.ajax()` es usando solo el objeto de
configuración, esto en parte es debido a que es la forma más antigua que está
disponible (versión 1.0, a ver si encuentras de donde obtuvimos este dato
mirando la documentación), además de que toda la configuración lo puedes poner
en un solo objeto.

> ### Qué es un objeto de configuración?
>
> Es un objeto de JavaScript que se usa para configurar algo.
>
> Por ejemplo:
>
> ```js
> const settings = {
>   name: 'this is my name',
>   colors: ['orange', 'blue'],
>   layers: 2,
>   isRound: true,
> };
> ```
>
> El objeto de configuración puede ser pasado como parámetro de una función
> constructora. Imaginemos la función constructora `MakeCake`:
>
> ```js
> const myDeliciousCake = MakeCake(settings);
> ```
>
> De igual manera, el objeto de configuración puede ser pasado directamente:
>
> ```js
> const myDeliciousCake = MakeCake({
>   name: 'this is my name',
>   colors: ['orange', 'blue'],
>   layers: 2,
>   isRound: true,
> });
> ```

## Haciendo una llamada AJAX

El método `.ajax()` de jQuery tiene que ser increíblemente versátil y poderoso
si es lo que le da vida a las peticiones asíncronas de jQuery. Una petición Ajax
simple se vería así:

```js
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
});
```

Vamos a probarlo:

1. Anda al sitio web de [jQuery](http://jquery.com/)
2. Abre el `Developer Tools` de tu navegador
3. Asegúrate que estás en la pestaña `Network` y que el botón de grabación está
   encendido
4. Agrega el script anterior en la consola y ejecútalo

![jQuery - ajax](https://media.giphy.com/media/l1KcRuWi059tT6VYQ/giphy.gif)

Este `request` (petición o solicitud) está siendo realizada hacia un recurso en
Github (información del usuario). El request puede ser revisado desde el panel
de redes (pestaña `Network` en el Dev Tools).

Ya sabemos cómo realizar una petición con `.ajax()` pero aun no estamos
controlando la respuesta.

## Manipular los datos retornados

Si recordamos cómo podemos lograr esto usando un objeto XHR, el `response` era
controlado por una función. Para el método `.ajax()` es exactamente lo mismo,
podemos encadenar a la ejecución de éste, el método `.done()`. Vamos a pasar una
función como argumento al método `.done()` que se ejecutará una vez que la
llamada Ajax haya terminado:

```js
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(handleResponse);
```

![done method](https://media.giphy.com/media/xUOwGiAxN7tYlwAZyg/giphy.gif)

La llamada asíncrona es realizada y controlada una vez que termina por el
método `.done()`, en este caso, muestra el response en la consola.

Para ponernos a prueba, vamos a convertir esta petición asíncrona que usa `XHR`
a una llamada con el método `.ajax()` de jQuery. Esto es lo que tenemos
actualmente:

```js
const githubRequest = new XMLHttpRequest();
githubRequest.onload = addUser;
githubRequest.open('GET', `https://api.github.com/users/${searchedUser}`);
githubRequest.send();
```

Muchas de estas operaciones pueden ser manejadas internamente por jQuery, así
que el primer paso de la conversión sería así:

```js
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
}).done(addUser);
```

Usando jQuery para peticiones asíncronas:

- No tenemos la necesidad de crear un objeto XHR
- En vez de especificar que el request es de método `GET`, jQuery lo da por
  defecto y solo tenemos que indicarle la URL del recurso que estamos
  solicitando
- En vez de configurar el evento `.onload`, usamos el método `.done()`

La petición debe enviarse correctamente ahora. ¡Gran trabajo! Pero ahora tenemos
problemas con el response y cómo se está controlando.

## Limpiando el callback de success

Ya hemos obtenido la respuesta en la consola, ahora vamos a ver cómo lo
agregamos a nuestra página a través de jQuery. Primero veamos cómo lo
tendríamos usando el objeto XHR:

```js
function addUser() {
    const user = JSON.parse(this.responseText);
    const firstImage = data.results[0];

    userContainer.insertAdjacentHTML('afterbegin', `<div class="card col-md-6 offset-md-3 col-xs-12">
        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${user.name || ''}</h5>
        <h6>@${user.login}</h6>
        <p class="card-text">${user.bio || ''}</p>
        <a href="${user.html_url}" class="btn btn-primary">Stalkear coder</a>
        </div>
    </div>`);
}
```

> **Nota:** En este ejemplo, el HTML que se está agregando es un card de
> Bootstrap 4, para fines de este ejemplo, el _markup_ puede tener otra
> estructura y diseño.

Si usamos jQuery, podríamos cambiarlo de la siguiente manera:

```js
function addUser(user) {
    $userContainer.html(`<div class="card col-md-6 offset-md-3 col-xs-12">
        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${user.name || ''}</h5>
        <h6>@${user.login}</h6>
        <p class="card-text">${user.bio || ''}</p>
        <a href="${user.html_url}" class="btn btn-primary">Stalkear coder</a>
        </div>
    </div>`);
}
```

### ¿Qué cambió?

- La función ahora tienen un parámetro (el usuario)
- El parámetro ya ha sido convertido de JSON a un objeto de JavaScript, así que
  no necesitamos usar `JSON.parse()`
- Aprovechamos los métodos de jQuery para manipular el DOM

El código que agrega el HTML (plantilla) al contenedor no ha cambiado :).

## ¿Y si ocurre un error, cómo lo controlarías?

Entra a la documentación de jQuery y revisa qué método (así como `.done()`)
encadenarías a la petición AJAX para controlar un posible error. Una vez
encontrado, puedes probarlo metiendo un error dentro de la URL por ejemplo.

## Código fuente de la demo

El código visto en esta lectura lo puedes encontrar en el siguiente pen:

<iframe
  height='400'
  scrolling='no'
  title='AJAX con jQuery'
  src='//codepen.io/ivandevp/embed/vdxNMd/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
  See the Pen [AJAX con jQuery](https://codepen.io/ivandevp/pen/vdxNMd/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>
