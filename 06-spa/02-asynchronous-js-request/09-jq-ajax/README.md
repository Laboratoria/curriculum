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
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> };
> ```

> ...the settings configuration object can be used in the imaginary MakeCake constructor function:

> ```javascript
> const myDeliciousCake = MakeCake( settings );
> ```

> Alternatively, the settings object could be passed in directly:

> ```javascript
> const myDeliciousCake = MakeCake({
>    frosting: 'buttercream',
>    colors: ['orange', 'blue'],
>    layers: 2,
>    isRound: true
> });
> ```

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

```javascript
function handleResponse(data) {
    console.log('the ajax request has finished!');
    console.log(data);
}

$.ajax({
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