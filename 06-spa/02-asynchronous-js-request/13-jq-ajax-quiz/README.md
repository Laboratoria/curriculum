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

### 1) ¿Qué cambios aplicarían para cambiar el siguiente código usando jQuery?

```javascript
const movieRequest = new XMLHttpRequest();
movieRequest.onload = addMovie;
movieRequest.open('GET', `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`);
movieRequest.send();
```

#### Opciones

1. ```javascript
   $.ajax({
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
