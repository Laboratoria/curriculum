# Quiz

- Tipo: `quiz`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos

- Nesta seção você terá a oportunidade de se auto-avaliar para que teste seus conhecimentos. É uma oportunidade para ajustes e validação do seu aprendizado. Sucesso!

***

## Perguntas

### 1) Quais mudanças vocês farão para alterar o seguinte código utilizando jQuery?

```javascript
const movieRequest = new XMLHttpRequest();
movieRequest.onload = addMovie;
movieRequest.open('GET', `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieTitle}`);
movieRequest.send();
```

#### Opções

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

### 2) Qual método podemos encadear em uma requisição AJAX com jQuery para controlar os erros?

#### Opções

1. `.fail()`
2. `.done()`
3. `.error()`
4. `.load()`

<solution style="display:none;">1</solution>

### 3) Que métodos podemos usar para fazer a requisição `GET`?

#### Opções

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`

<solution style="display:none;">1, 3, 4</solution>

### 4) Que método usamos para fazer uma requisição GET e que o formato da resposta seja JSON?

#### Opções

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`

<solution style="display:none;">3</solution>

### 5) Os _shorthand methods_ são métodos pré-configurados que se baseiam em:

#### Opções

1. `$.get()`
2. `$.post()`
3. `$.getJSON()`
4. `$.ajax()`
5. `.load()`

<solution style="display:none;">4</solution>
