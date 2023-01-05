---
type: quiz
duration: 30min
---

# Quiz

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) ¿Para qué usamos el método `GET`?

#### Opciones

1. Para confirmar que se puede establecer comunicación con el servidor
2. Para recuperar datos
3. Para el manejo de errores
4. Para enviar datos

<solution style="display:none;">2</solution>

### 2) ¿Para qué usamos el método `POST`?

#### Opciones

1. Para confirmar que se puede establecer comunicación con el servidor
2. Para recuperar datos
3. Para el manejo de errores
4. Para enviar datos

<solution style="display:none;">4</solution>

### 3) XHR es la abreviación de

#### Opciones

1. XMLHttpRequest
2. Asynchronous JavaScript And XML
3. AJAX
4. Response Hipertext Xml

<solution style="display:none;">1</solution>

### 4) Si en tu consola del navegador pones este código, ¿qué sucede?

```javascript
const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');
```

¿Qué sucede?

#### Opciones

1. La página de inicio de Google se abre en el navegador
2. Una solicitud asíncrona es enviada a `https: // www.google.com`
3. No pasa nada
4. Se produce un error

<solution style="display:none;">3</solution>

<!--

Explanation:

The XHR's .open() method does not actually send the request! It sets the stage
and gives the object the info it will need when the request is actually sent.
bit anti-climactic… So let's actually send the request!

-->

### 5) El método `.open ()` de un objeto XHR puede tener varios argumentos. Pero los más importantes son

#### Opciones

1. `.open ()` no tiene argumentos
2. Nombre de la función y parámetro
3. method HTTP y URL
4. url y JSON

<solution style="display:none;">3</solution>

### 6) ¿Qué propiedad debemos establecer para el manejo de una respuesta exitosa?

#### Opciones

1. asyncRequestObject.onsucces
2. asyncRequestObject.onload
3. asyncRequestObject.handleSuccess
4. asyncRequestObject.oncorrect

<solution style="display:none;">2</solution>

### 7) ¿A qué propiedad hay que asignar una función para el manejo de errores?

#### Opciones

1. asyncRequestObject.handleError
2. asyncRequestObject.onincorrect
3. asyncRequestObject.onerror
4. asyncRequestObject.errorReponse

<solution style="display:none;">3</solution>

### 8) Cuando nuestra respuesta es un JSON, debemos convertirla a un objeto JavaScript y eso lo hacemos con

#### Opciones

1. JSON.parse();
2. Object.json();
3. JSON.object();
4. parser.JSON();

<solution style="display:none;">1</solution>
