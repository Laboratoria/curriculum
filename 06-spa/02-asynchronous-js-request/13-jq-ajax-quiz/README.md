# Quiz

- Tipo: `quiz`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

<<<<<<< HEAD
### 1) The only change that needs to be made is including the Client ID header along with the request so that Unsplash will verify the request. Why don't you check out the API for the .ajax() method and select the code below that correctly adds an "Authorization" header to the request.
=======
### 1) ¿Qué cambios aplicarían para cambiar el siguiente código usando jQuery?

```javascript
const movieRequest = new XMLHttpRequest();
movieRequest.onload = addMovie;
movieRequest.open('GET', `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`);
movieRequest.send();
``` 
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de

#### Opciones

1. ```javascript
   $.ajax({
<<<<<<< HEAD
     url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
   }).addHeader('Authorization', 'Client-ID 123abc456def')
   .done(addImage);
   ```
2. ```javascript
   $.ajax({
     url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
     setHeader: [['Authorization', 'Client-ID 123abc456def']]
   }).done(addImage);
   ```
3. ```javascript
   $.ajax({
     url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
     authorization: 'Client-ID 123abc456def'
   }).done(addImage);
   ```
4. ```javascript
   $.ajax({
     url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
     headers: {
       Authorization: 'Client-ID 123abc456def'
     }
   }).done(addImage);
   ```

<solution style="display:none;">4</solution>

<!-- 

Explanation:

The correct answer is option 4. A header is added to the request by passing a headers object as a property. Each key in the headers object is the name of the header, and the value is what will be used as the value for the header.

-->

<!-- ### 2) An XHR object's `.open()` method can take a number of arguments. Use the documentation to explain what the following code does:

```javascript
const myAsyncRequest = new XMLHttpRequest();
myAsyncRequest.open('GET', 'https://udacity.com/', false);
```

#### Opciones

1. Nothing special, this is an standard way `.open()` works
2. The request is sent inmediately
3. The JavaScript freezes and waits until the request is returned

<solution style="display:none;">3</solution>

<!--

Explanation:

Passing false as the third option makes the XHR request become a synchronous one. This will cause the JavaScript engine to pause and wait until the request is returned before continuing - this "pause and wait" is also called "blocking". This is a terrible idea and completely defeats the purpose for having an asynchronous behavior. Make sure you never set your XHR objects this way! Instead, either pass true as the 3rd argument or leave it blank (which makes it default to true).'

--> -->
=======
     url: `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`
   })
   ```
2. ```javascript
   $.ajax({
     url: `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`
   }).get();
   ```
3. ```javascript
   $.ajax({
     url: `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`
   }).done(addMovie);
   ```
4. ```javascript
   $.ajax({
     url: `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`
   }).getJSON(addImage);
   ```

<solution style="display:none;">3</solution>

### 2) ¿Qué método podemos encadenar en una petición AJAX con jQuery para controlar los errores?

#### Opciones

1. `.fail()`
2. `.done()`
3. `.error()`
4. `.load()`

<solution style="display:none;">1</solution>

### 3) ¿Qué métodos podemos usar para hacer una petición GET?

#### Opciones

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`

<solution style="display:none;">1, 3, 4</solution>

### 4) ¿Qué método usamos para hacer una petición GET y que el formato de respuesta sea JSON?

#### Opciones

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`

<solution style="display:none;">3</solution>

### 5) Los shorthand methods son métodos preconfigurados que se basan en:

#### Opciones

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`
5. `.load()`

<solution style="display:none;">4</solution>
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
