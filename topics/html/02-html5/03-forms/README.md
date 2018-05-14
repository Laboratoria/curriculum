# Formularios

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `1h`

***

## Objetivos de Aprendizaje

En esta lectura aprenderemos:

- Qué son los formularios en HTML
- Aprenderás los principales elementos de un formulario
- Conocerás los atributos de los elementos de un formulario

## ¿Qué son los formularios?

Los formularios son una forma sencilla de solicitar información al usuario en
una página web, perimitiendo que el usuario ingrese información. Los formularios
son uno de los puntos principales de interacción entre un usuario y un sitio web
o aplicación.

## Guía de conceptos clave

Revisemos la documentación del MDN sobre
[formularios](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/form),
además tenemos la Zona de Aprendizaje de MDN donde podrás aprender a más
detalle sobre [los forms](https://developer.mozilla.org/es/docs/Learn/HTML/Forms)

Ahora sabemos que hay varios elementos para realizar un formulario. En este
ejemplo veremos un modelo de formulario:

```html
<form>
  <label for="email-example">Correo electrónico</label>
  <input type="email" id="email-example" placeholder="Email" name="email-example" required>

  <label for="password-example">Password</label>
  <input type="password" id="password-example" placeholder="Password" name="password-example" required>

  <select name="select-example">
    <option value="value1">Primera opción</option>
    <option value="value2" selected>Segunda opción</option>
    <option value="value3">Tercera opción</option>
  </select>

  <label>
    <input type="radio" name="gender" value="female"> Mujer
  </label>
  <label>
    <input type="radio" name="gender" value="male"> Hombre
  </label>
  <label>
    <input type="radio" name="gender" value="no-gender"> No deseo brindar información
  </label>

  <label>
    <input type="checkbox" name="conditions" value="accept-conditions" checked> Acepto los términos y condiciones
  </label>

  <button type="submit">Enviar</button>
</form>
```

El resultado de este HTML será:

![ejemplo de formularios](https://user-images.githubusercontent.com/25906896/39826718-2daeff3e-537b-11e8-8d60-bba02479bf16.png)

Ahora, si deseas aprender como trabajamos con los forms desde javascript
podemos ver el
[capítulo 7 de javascript de librosweb](http://librosweb.es/libro/javascript/capitulo_7.html)
. Además tenemos la documentación del capítulo 18 de [Eloquent JavaScript](https://eloquentjavascript.net/18_http.html), de Marijn Haverbeke, 2014.
