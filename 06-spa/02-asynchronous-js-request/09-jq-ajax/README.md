# AJAX con jQuery

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Usar jQuery para hacer requests asíncronos y entender qué ventajas nos da

## Analogía

Dejar que un experto prepare el pastel por ti.

[![XHR analogy](https://img.youtube.com/vi/NFGrayBZOVM/0.jpg)](https://youtu.be/NFGrayBZOVM)

## ¿Por qué jQuery?

<<<<<<< HEAD
jQuery is an incredibly popular JavaScript library that provides a lot of functionality right out of the box. It was created a number of years ago back when browsers hadn't joined together to standardize on functionality. jQuery made life easier for developers that were building websites that had to function in all of the major browsers by providing a unified interface. The developer would use jQuery-specific functions and then jQuery would figure out what code to run depending on the browser that was being used.

jQuery is just JavaScript, so you'd download a current version and link to it with a regular <script> tag. Once it's been included it on the page, you've got this powerhouse of functionality right at your fingertips.

Now that browsers have pretty much aligned, jQuery's usage is not as necessary as it was several years ago. However, one powerful tool that it provides is it's ajax() method. As its name suggests, jQuery's ajax() method is used to handle all asynchronous requests.

Let's see it in action.

## `.ajax()` method

The .ajax() method is at the heart of all asynchronous requests for the entire jQuery library. There are a couple of ways you can call the .ajax() method:

```javascript
$.ajax(<url-to-fetch>, <a-configuration-object>);

// or 

$.ajax(<just a configuration object>);
```

The most common way to use the .ajax() method is with just the configuration object, since everything can be set inside the configuration object.

> ### What's a "configuration object"?

> A configuration object is just a plain ol' JavaScript object that's used to configure something. 
> For example:

> ```javascript
> var settings = {
>    frosting: 'buttercream',
=======
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

```javascript
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

> Es un objeto de JavaScript que se usa para configurar algo. 
>
> Por ejemplo:
>
> ```javascript
> var settings = {
>    name: 'this is my name',
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> };
> ```
<<<<<<< HEAD

> ...the settings configuration object can be used in the imaginary MakeCake constructor function:

> ```javascript
> const myDeliciousCake = MakeCake( settings );
> ```

> Alternatively, the settings object could be passed in directly:

> ```javascript
> const myDeliciousCake = MakeCake({
>    frosting: 'buttercream',
=======
>
> El objeto de configuración puede ser pasado como parámetro de una función 
> constructora. Imaginemos la función constructora `MakeCake`:
>
> ```javascript
> const myDeliciousCake = MakeCake( settings );
> ```
>
> De igual manera, el objeto de configuración puede ser pasado directamente:
>
> ```javascript
> const myDeliciousCake = MakeCake({
>    name: 'this is my name',
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> });
> ```

<<<<<<< HEAD
## Making an Ajax call

jQuery's .ajax() method has to be incredibly versatile and powerful if it's what powers all of jQuery's asynchronous requests. A simple Ajax request would look like this:

```javascript
$.ajax({
    url: 'http://swapi.co/api/people/1/'
});
```

Let's test it out!

1. go to the jQuery website
2. open up your browser's developer tools
3. make sure the network traffic is being recorded
4. in Chrome, switch to the network pane
5. add the request above to the console
6. ...aaaand run it!

![jQuery - ajax](https://d17h27t6h515a5.cloudfront.net/topher/2017/March/58ba105b_ud109-l2-swapi-request/ud109-l2-swapi-request.gif)
Running an asynchronous request in the console. The request is for a resource on SWAPI. The request is displayed in the network pane.

So we can make a request with .ajax(), but we haven't handled the response yet.

## Handling the returned data

If you recall from setting up an XHR object, the response was handled by a function. It's the same thing with the .ajax() method. We can chain on to .ajax() with a .done() method. We pass the .done() method a function that will run with the Ajax call is done!
=======
## Haciendo una llamada AJAX

El método `.ajax()` de jQuery tiene que ser increíblemente versátil y poderoso
si es lo que le da vida a las peticiones asíncronas de jQuery. Una petición Ajax
simple se vería así:

```javascript
$.ajax({
    url: `https://api.github.com/users/${searchedUser}`
});
```

Vamos a probarlo:

1. Anda al sitio web de [jQuery](http://jquery.com/)
2. Abre el `Developer Tools` de tu navegador
3. Asegúrate que estás en la pestaña `Network` y que el botón de grabación está
   encendido
5. Agrega el script anterior en la consola y ejecútalo

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
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de

```javascript
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
<<<<<<< HEAD
    url: 'http://swapi.co/api/people/1/'
}).done(handleResponse);
```

![done method](https://d17h27t6h515a5.cloudfront.net/topher/2017/March/58ba1097_ud109-l2-swapi-request-with-done/ud109-l2-swapi-request-with-done.gif)
Asynchronous call set up with a done method to handle the response. The request is made, and then the response is logged to the console.

Let's convert the existing, plain XHR call with jQuery's .ajax(). This is what the app currently has:

```javascript
const imgRequest = new XMLHttpRequest();
imgRequest.onload = addImage;
imgRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
imgRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id-here>');
imgRequest.send();
```

A lot of this information is handled behind the scene by jQuery, so here's the first step in the conversion:

```javascript
$.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
}).done(addImage);
```

With the jQuery code:

- we do not need to create an XHR object
- instead of specifying that the request is a GET request, it defaults to that and we just - provide the URL of the resource we're requesting
- instead of setting onload, we use the .done() method

The request should send perfectly now. Fantastic work! But there seem to be issues with the response and how it's handled.

## Cleaning up the Success Callback

Content isn't getting added to the page jQuery detects the response and if it's JSON, it will automatically convert it to JavaScript for us. How awesome is that! So we only need to make a few tweaks to the existing code. Here's what it currently is:

```javascript
function addImage() {
    const data = JSON.parse(this.responseText);
    const firstImage = data.results[0];

    responseContainer.insertAdjacentHTML('afterbegin', `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`
    );
}
```

We just need to change the first three lines:

```javascript
function addImage(images) {
    const firstImage = images.results[0];

    responseContainer.insertAdjacentHTML('afterbegin', `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`
    );
}
```

### What changed

- the function now has one parameter images
- this parameter has already been converted from JSON to a JavaScript object, so * the line that had JSON.parse() is no longer needed.
- the firstImage variable is set to the images.results first item

The code that adds the HTML to the response container hasn't changed at all!

### Replace Nytimes Xhr With $.Ajax()

Now that we've walked through converting one request from using XHR to jQuery's .ajax() method, why don't you give it a shot on your own and convert the second request!

Make sure to use the existing code as an example. If you get stuck, check out the documentation page.

When you're successfully converted the code to use jQuery's .ajax() method and fixed the callback function so it adds the data to the page, check the checkbox to continue.
=======
    url: `https://api.github.com/users/${searchedUser}`
}).done(handleResponse);
```

![done method](https://media.giphy.com/media/xUOwGiAxN7tYlwAZyg/giphy.gif)

La llamada asíncrona es realizada y controlada una vez que termina por el
método `.done()`, en este caso, muestra el response en la consola.

Para ponernos a prueba, vamos a convertir esta petición asíncrona que usa `XHR`
a una llamada con el método `.ajax()` de jQuery. Esto es lo que tenemos 
actualmente:

```javascript
const githubRequest = new XMLHttpRequest();
githubRequest.onload = addUser;
githubRequest.open('GET', `https://api.github.com/users/${searchedUser}`);
githubRequest.send();
```

Muchas de estas operaciones pueden ser manejadas internamente por jQuery, así 
que el primer paso de la conversión sería así:

```javascript
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

```javascript
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

```javascript
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

<iframe height='400' scrolling='no' title='AJAX con jQuery' src='//codepen.io/ivandevp/embed/vdxNMd/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/vdxNMd/'>AJAX con jQuery</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
