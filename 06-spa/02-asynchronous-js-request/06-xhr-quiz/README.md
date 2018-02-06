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

### 1) Go to Google, open up the developer tools, and run the following on the console:

```javascript
const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');
```

What happens?

#### Opciones

1. The Google homepage open in the browser
2. An async request sent to `https://www.google.com`
3. Nothing happens
4. An error occurs

<solution style="display:none;">3</solution>

<!-- 

Explanation:

The XHR's .open() method does not actually send the request! It sets the stage and gives the object the info it will need when the request is actually sent. A bit anti-climactic… So let's actually send the request!

-->

### 2) An XHR object's `.open()` method can take a number of arguments. Use the documentation to explain what the following code does:

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

-->
